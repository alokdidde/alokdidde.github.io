import { getCliClient } from "sanity/cli";

type Segment = string | { text: string; marks: string[] };

let blockNumber = 0;

function block(style: "normal" | "h2" | "h3" | "blockquote", ...segments: Segment[]) {
  blockNumber += 1;
  const blockKey = `b${String(blockNumber).padStart(3, "0")}`;

  return {
    _type: "block",
    _key: blockKey,
    style,
    markDefs: [],
    children: segments.map((segment, index) => ({
      _type: "span",
      _key: `${blockKey}s${index + 1}`,
      text: typeof segment === "string" ? segment : segment.text,
      marks: typeof segment === "string" ? [] : segment.marks,
    })),
  };
}

function numbered(text: string) {
  return { ...block("normal", text), listItem: "number", level: 1 };
}

const caseStudy = (
  key: string,
  topic: "autonomy" | "hyperloop" | "tunnels" | "robotics",
  number: string,
  title: string,
  promise: string,
  reality: string,
) => ({
  _type: "caseStudyMarker",
  _key: key,
  topic,
  number,
  title,
  promise,
  reality,
});

const source = (
  key: string,
  mediaType: "video" | "article" | "document",
  publisher: string,
  title: string,
  url: string,
  note: string,
) => ({ _type: "sourceCard", _key: key, mediaType, publisher, title, url, note });

const slug = "innovation-is-hard-elon-musk-keeps-calling-it-easy";

const fields = {
  title: "Innovation is hard. Elon Musk keeps calling it easy.",
  slug: { _type: "slug", current: slug },
  summary:
    "Musk repeatedly presents unfinished engineering as nearly solved, then replaces missed deadlines with larger promises.",
  publishedAt: "2026-08-16T08:15:00.000Z",
  updatedAt: "2026-09-01T00:50:00.000Z",
  tags: ["innovation", "engineering", "accountability", "robotics", "elon-musk"],
  body: [
    block("normal", "I hate Elon Musk."),
    block(
      "normal",
      "Tesla was founded in 2003 by Martin Eberhard and Marc Tarpenning. Musk joined the following year as its leading investor and chairman, then became chief executive in 2008. After an acrimonious legal fight, a 2009 settlement allowed five people, including Musk, to call themselves co-founders. The title changed. The order of events did not.",
    ),
    block(
      "normal",
      "The Tesla story established a pattern Musk has repeated: enter after other people have begun the difficult work, gain control of the capital and the narrative, then present a collective achievement as evidence of one man’s genius. He may be intelligent. Intelligence does not confer authorship, and money does not alter the order of events.",
    ),
    block(
      "normal",
      "The engineers, founders and researchers deserve credit for the work. Musk deserves scrutiny for the way he claims it and for repeatedly declaring their unfinished work essentially solved.",
    ),
    source(
      "source-tesla-founders",
      "article",
      "WIRED",
      "Before the Musk mythology: Tesla’s original story",
      "https://www.wired.com/2006/08/tesla-3/",
      "WIRED’s 2006 profile centres Martin Eberhard’s three-year effort to create Tesla’s electric sports car and describes Musk as a financial backer.",
    ),
    block(
      "normal",
      "Musk often follows the same sequence:",
    ),
    numbered("Take a hard systems problem."),
    numbered("Describe it as much easier than the dreary experts believe."),
    numbered("Show a controlled demonstration or a handsome animation."),
    numbered("Attach a date close enough to feel investable."),
    numbered("When reality refuses to meet the date, introduce a newer and larger future."),
    block(
      "normal",
      "This sequence distorts how innovation is understood. The public sees a controlled demonstration and reads it as evidence that the full system is nearly ready. Before anyone examines the gap, a newer promise takes its place.",
    ),
    caseStudy(
      "case-autonomy",
      "autonomy",
      "01",
      "The car will drive itself next year",
      "A hands-free trip from Los Angeles to New York by the end of 2017. One million robotaxis on the road in 2020.",
      "Years of useful driver assistance, still sold as Full Self-Driving (Supervised), with an attentive human required.",
    ),
    block("h2", "One million robotaxis ago"),
    block(
      "normal",
      "In October 2016, Musk said Tesla aimed to demonstrate a fully autonomous journey from Los Angeles to New York by the end of 2017, without a single touch. The claim included a route and a deadline.",
    ),
    block("normal", "The demonstration did not happen."),
    block(
      "normal",
      "At Tesla’s 2019 Autonomy Day, the next promise was larger: “next year for sure” there would be more than a million robotaxis on the road. The fleet, he explained, would awaken through an over-the-air update, leaving a considerable amount of engineering inside the word “update”.",
    ),
    block(
      "normal",
      "Tesla’s driver assistance can perform complicated driving tasks and has improved through years of data and iteration. Tesla’s current description calls the product ",
      { text: "Full Self-Driving (Supervised)", marks: ["strong"] },
      " and says the driver must pay attention and be ready to take over. The parenthesis marks the boundary between driver assistance and autonomy.",
    ),
    block(
      "normal",
      "Supervised driving and a car that can safely carry nobody are different products. Removing the driver changes the safety case, fallback behaviour, liability, validation, and the meaning of every rare failure.",
    ),
    block(
      "normal",
      "Calling the destination nearly complete because the car can handle most ordinary moments is like declaring a bridge finished because it only falls down on unusual Tuesdays.",
    ),
    source(
      "source-fsd-2016",
      "video",
      "Elon Musk Archive",
      "Tesla Full Self-Driving Hardware press call, 2016",
      "https://elonmuskarchive.org/video/tesla-full-self-driving-hardware-press-call-2016",
      "The original LA-to-New-York claim, with a transcript and the end-of-2017 date.",
    ),
    source(
      "source-fsd-now",
      "video",
      "Tesla",
      "Full Self-Driving (Supervised)",
      "https://www.youtube.com/watch?v=TUDiG7PcLBs",
      "Tesla’s own demonstration and its present warning that the driver must remain attentive.",
    ),
    source(
      "source-fsd-autonomy-day",
      "video",
      "Tesla / Elon Musk Archive",
      "Tesla Autonomy Day, 2019",
      "https://elonmuskarchive.org/video/tesla-autonomy-day-2019",
      "The presentation containing the ‘next year for sure’ prediction of more than one million robotaxis.",
    ),
    caseStudy(
      "case-hyperloop",
      "hyperloop",
      "02",
      "Air hockey, but with planning permission",
      "A low-pressure tube carrying pods between Los Angeles and San Francisco in roughly 35 minutes. Easier than people thought.",
      "A famous white paper, years of prototypes by others, no passenger system built by Musk, and a flagship company that shut down.",
    ),
    block("h2", "The air hockey school of infrastructure"),
    block(
      "normal",
      "In 2013, Musk released the Hyperloop Alpha paper: passenger pods travelling through low-pressure tubes between Los Angeles and San Francisco. In a CNN interview, he said it was “a lot easier than people think”. When the interviewer persisted, he explained that it was like a tube with an air hockey table and added: “It’s really, I swear it’s not that hard.”",
    ),
    block("normal", "This is marvellous television. It is less useful as infrastructure analysis."),
    block(
      "normal",
      "An air hockey table does not cross earthquake faults, acquire land, evacuate passengers from a depressurised tube, handle thermal expansion across hundreds of kilometres, meet headways, manage stations or persuade several municipalities to agree on where to put the exits. The puck also has comparatively relaxed views on fire safety.",
    ),
    block(
      "normal",
      "The paper contained calculations produced with engineers from Tesla and SpaceX and openly invited correction. The people who did that work deserve the credit. Hyperloop One was not Musk’s company, but his celebrity and certainty gave the idea global authority while others absorbed the engineering and financial consequences.",
    ),
    block(
      "normal",
      "Hyperloop One raised hundreds of millions of dollars, ran tests and shut down in 2023 without a contract to build a working commercial Hyperloop. Other research continues, and some version may eventually find a useful niche.",
    ),
    block(
      "normal",
      "The original certainty has evaporated, but its impression remains. Conventional rail was presented as old thinking, the tube as the future, and the hard part as little more than an air bearing.",
    ),
    block(
      "normal",
      "A proven alternative must answer questions about procurement, maintenance, and weather. Animated proposals can omit those constraints, which lets them appear more capable than the system already doing the work.",
    ),
    source(
      "source-hyperloop-video",
      "video",
      "CNN / Elon Musk Archive",
      "‘It’s like a tube with an air hockey table’",
      "https://elonmuskarchive.org/entry/interview-with-cnn-2013-08-15",
      "The 2013 interview in which Musk repeatedly characterises the system as easier than people think.",
    ),
    source(
      "source-hyperloop-paper",
      "document",
      "Tesla / SpaceX",
      "Hyperloop Alpha",
      "https://www.tesla.com/sites/default/files/blog_images/hyperloop-alpha.pdf",
      "The original 57-page concept paper, which is more candid about uncertainty than the television pitch around it.",
    ),
    source(
      "source-hyperloop-closure",
      "article",
      "Reuters",
      "Hyperloop One shut down without a commercial contract",
      "https://finance.yahoo.com/news/high-speed-transportation-firm-hyperloop-223804654.html",
      "The 2023 report on the best funded Hyperloop company selling its assets after failing to secure a contract for a working system.",
    ),
    caseStudy(
      "case-tunnels",
      "tunnels",
      "03",
      "A 3D transport network becomes a taxi in a tube",
      "Cars descend on lifts at street corners, board electric skates and travel through layered tunnels at roughly 130 mph.",
      "The skates were dropped as too complex. The demonstrations and Vegas opening used ordinary Teslas with human drivers.",
    ),
    block("h2", "The revolutionary discovery of putting a road underground"),
    block(
      "normal",
      "The Boring Company began with an appealing observation: cities have three dimensions, while most roads occupy one thin layer. Its proposal was to build many tunnel levels and route traffic through them.",
    ),
    block(
      "normal",
      "The 2017 concept video supplied the missing glamour. A car pulled onto a kerbside platform, descended into a subterranean network, sat on an electric skate and shot beneath traffic at around 130 mph. The animation solved merging, routing and urban access with the traditional engineering tool known as a clean cut.",
    ),
    block(
      "normal",
      "By the opening of the Hawthorne test tunnel in 2018, the electric skate had already been abandoned as too complex. Guests rode in a Tesla driven by a human at roughly road speed, steadied by small guide wheels. When the Las Vegas Convention Center Loop opened in 2021, it used ordinary Teslas with human drivers.",
    ),
    block("normal", "A car tunnel with a chauffeur is, technically, a taxi with unusually expensive walls."),
    block(
      "normal",
      "A limited early system would be reasonable if it were described as such. Faster and cheaper tunnelling would be valuable. The problem is allowing the initial spectacle to define the public claim, then treating the reduced delivery as version one of the same system.",
    ),
    block(
      "normal",
      "By the opening, the skates, promised speed, neighbourhood lifts, and autonomy were gone. What remained was a narrow underground roadway operated by professional drivers. It worked, but it was far less ambitious than the proposal.",
    ),
    block(
      "normal",
      "That difference matters when cities, investors and the public are judging a proposal. “We can dig a smaller tunnel and run a managed taxi service through it” is a legitimate pitch. It simply does not produce quite the same music.",
    ),
    source(
      "source-tunnel-video",
      "video",
      "The Boring Company / TechCrunch",
      "The original car and skate tunnel concept",
      "https://techcrunch.com/2017/04/28/watch-how-elon-musks-boring-company-tunnels-will-move-cars-faster/",
      "The 2017 animation: lifts, electric skates, layered routes and travel controlled by computers at about 130 mph.",
    ),
    source(
      "source-tunnel-opening",
      "article",
      "Ars Technica",
      "A first ride through the Hawthorne test tunnel",
      "https://arstechnica.com/cars/2018/12/ars-takes-a-first-tour-of-the-length-of-the-boring-companys-test-tunnel/",
      "A contemporary account of the opening, where humans drove the cars, and the quiet retirement of the electric skate plan.",
    ),
    source(
      "source-vegas-opening",
      "article",
      "Fast Company",
      "The Vegas Loop opened with Teslas driven by humans",
      "https://www.fastcompany.com/90644133/elon-musks-boring-company-vegas-teslas-in-tunnels-opening",
      "A report from the 2021 opening contrasting the original 150 mph electric skate vision with the operating system.",
    ),
    caseStudy(
      "case-robotics",
      "robotics",
      "04",
      "Now the robot will do everything",
      "A general-purpose autonomous humanoid that performs unsafe, repetitive or boring work and becomes Tesla’s biggest product.",
      "Rapidly improving prototypes, ambitious production claims and public demonstrations that have still relied partly on human teleoperation.",
    ),
    block("h2", "The future has acquired legs"),
    block(
      "normal",
      "The same story is now moving through AI and humanoid robotics.",
    ),
    block(
      "normal",
      "Tesla introduced its robot idea at AI Day 2021 with a person dancing in a robot suit. This was a joke and was presented as one. By 2022, Tesla had a real prototype walking cautiously on stage. The team had moved from costume to hardware, one unstable step at a time.",
    ),
    block(
      "normal",
      "Then the narrative expanded. Optimus would become a general-purpose autonomous humanoid, perform dangerous and tedious work, transform the economy and perhaps become the biggest product of any kind. At Tesla’s 2024 “We, Robot” event, Optimus units walked among guests, danced, spoke and served drinks. Reports and recordings later established that many of the social interactions were assisted by human teleoperators.",
    ),
    block(
      "normal",
      "Teleoperation is a standard robotics tool for collecting data, testing hardware, recovering from failures, and studying tasks before autonomy is ready. At an event about autonomous products, that human assistance should have been unmistakable.",
    ),
    block(
      "normal",
      "If a human speaks through a robot, the achievement is a capable remote body. If the robot understands the conversation and acts independently, the achievement is embodied intelligence. One demonstrates telepresence. The other demonstrates autonomy.",
    ),
    block(
      "normal",
      "If Optimus becomes useful, the credit will belong to the engineers who solve its perception, control, manipulation, and manufacturing problems. Musk should not own that success merely because he announced it in advance.",
    ),
    block(
      "normal",
      "For now, the robot is an impressive prototype. Claims about the end of labour can wait until it hands out the drinks by itself.",
    ),
    source(
      "source-optimus-2022",
      "video",
      "Tesla / Elon Musk Archive",
      "Tesla AI Day 2022: the first walking Optimus prototype",
      "https://www.elonmuskarchive.org/video/tesla-ai-day-2022",
      "The real engineering presentation, including Musk’s acknowledgement that 2021 used a person in a suit.",
    ),
    source(
      "source-optimus-teleop",
      "article",
      "Ars Technica",
      "Humans assisted the Optimus demonstrations",
      "https://arstechnica.com/ai/2024/10/reports-teslas-prototype-optimus-robots-were-controlled-by-humans/",
      "Reporting and video evidence showing where teleoperation sat behind the polished party interactions.",
    ),
    block("h2", "Why this damages innovation"),
    block(
      "normal",
      "One defence is that Musk sets impossible deadlines to push teams towards the improbable. Internal stretch goals can be useful. Public claims affect investors, regulators, customers, and competing projects, so they require a different standard.",
    ),
    block("h3", "It turns engineering into theatre"),
    block(
      "normal",
      "A good demonstration answers a narrow question: can this part work under these conditions? A product must answer hundreds more: Does it work repeatedly? Safely? In bad weather? With ordinary operators? At the promised cost? Can it fail without turning the tunnel, car or humanoid into an unusually modern insurance claim?",
    ),
    block("normal", "Musk’s presentations routinely allow the narrow answer to impersonate the complete one."),
    block("h3", "It creates narrative debt"),
    block(
      "normal",
      "Technical debt is the work postponed when we choose a quick implementation. Narrative debt is the accountability postponed when we sell a prototype as an arrival.",
    ),
    block(
      "normal",
      "Each new promise borrows credibility from the future. When the due date arrives, a larger vision replaces the missing result. Full autonomy becomes robotaxis. Hyperloop becomes Loop. Electric skates become guided Teslas. A cautious robot becomes universal labour. The names survive while their meanings change.",
    ),
    block("h3", "It makes honest innovators look slow"),
    block(
      "normal",
      "Serious engineers describe constraints because constraints are the work. They qualify timelines because integration contains surprises. They separate a prototype from a product because people may make financial, political or safety decisions based on the difference.",
    ),
    block(
      "normal",
      "Against a showman who has declared the problem easy and the solution due next year, calibrated language can look timid.",
    ),
    block(
      "normal",
      "Thousands of engineers do the difficult, incremental work while the public story credits one man’s confidence. The teams deliver the progress, and Musk keeps the byline.",
    ),
    block("h2", "Don’t trust him"),
    block(
      "normal",
      "The record is sufficient reason not to trust Elon Musk as a guide to technical readiness. His public language creates motion, attracts belief, and claims ownership of achievements before they exist.",
    ),
    block(
      "normal",
      "Treat ",
      { text: "full", marks: ["strong"] },
      " in a product name as a claim to verify. When he says ",
      { text: "next year", marks: ["strong"] },
      ", find the previous deadline. For a stage demonstration, ask what was constrained, mapped, rehearsed, or remotely operated. For a render, look for the fire exits, maintenance plan, throughput, and cost. Before accepting a new announcement, check what happened to the previous one.",
    ),
    block(
      "normal",
      "Use deployed systems, independent tests, operational data, and failure analysis as evidence.",
    ),
    block(
      "normal",
      "Musk is very good at telling us what he wants the future to feel like. That skill sells an ambition. Technical readiness requires evidence.",
    ),
  ],
};

const client = getCliClient({ apiVersion: "2026-08-01" });
const existing = await client.fetch<{ _id: string } | null>(
  `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{_id}`,
  { slug },
);

if (existing?._id) {
  await client.patch(existing._id).set(fields).commit();
  console.log(`Updated published post ${existing._id}`);
} else {
  const created = await client.create({ _type: "post", ...fields });
  console.log(`Created published post ${created._id}`);
}
