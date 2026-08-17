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
    "A repeated Musk pattern turns unfinished engineering into a finished story: simplify the problem, stage the future, miss the date, then change the subject.",
  publishedAt: "2026-08-16T08:15:00.000Z",
  updatedAt: "2026-08-16T13:55:00.000Z",
  tags: ["innovation", "engineering", "accountability", "robotics", "elon-musk"],
  body: [
    block(
      "normal",
      "Let me remove the polite throat-clearing: I hate Elon Musk.",
    ),
    block(
      "normal",
      "Tesla was founded in 2003 by Martin Eberhard and Marc Tarpenning. Musk joined the following year as its leading investor and chairman, then became chief executive in 2008. After an acrimonious legal fight, a 2009 settlement allowed five people—including Musk—to call themselves co-founders. The title changed. The order of events did not.",
    ),
    block(
      "normal",
      "That history is not a footnote to the Musk story. It is the Musk story: arrive where other people have already begun the difficult work, gain control of the capital and the narrative, then compress a collective achievement into evidence of one man’s genius. He may be intelligent. Intelligence is not authorship, and money is not a time machine.",
    ),
    block(
      "normal",
      "I am not going to begin by polishing the myth before criticising it. The engineers, founders and researchers deserve credit for the work. Musk deserves scrutiny for the way he claims it—and for the repeated habit of declaring their unfinished work essentially solved.",
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
      "And Musk has developed a remarkably consistent way of declaring things inevitable:",
    ),
    numbered("Take a hard systems problem."),
    numbered("Describe it as much easier than the dreary experts believe."),
    numbered("Show a controlled demonstration or a handsome animation."),
    numbered("Attach a date close enough to feel investable."),
    numbered("When reality refuses to meet the date, introduce a newer and larger future."),
    block(
      "normal",
      "The result is not simply a collection of late products. It is a distortion of how innovation is understood. The public sees the trailer, mistakes it for the film, and is then invited to another premiere before asking what happened to the previous plot.",
    ),
    caseStudy(
      "case-autonomy",
      "autonomy",
      "01",
      "The car will drive itself next year",
      "A hands-free trip from Los Angeles to New York by the end of 2017; one million robotaxis on the road in 2020.",
      "Years of useful driver assistance, still sold as Full Self-Driving (Supervised), with an attentive human required.",
    ),
    block("h2", "One million robotaxis ago"),
    block(
      "normal",
      "In October 2016, Musk said Tesla aimed to demonstrate a fully autonomous journey from Los Angeles to New York by the end of 2017, without a single touch. This was not a vague ambition for the fullness of time. It had a route, an arrival and a calendar.",
    ),
    block("normal", "The demonstration did not happen."),
    block(
      "normal",
      "At Tesla’s 2019 Autonomy Day, the next promise was larger: “next year for sure” there would be more than a million robotaxis on the road. The fleet, he explained, would awaken through an over-the-air update. Very cinematic. Somewhere, a software engineer quietly opened another issue.",
    ),
    block(
      "normal",
      "Tesla has made real progress in driver assistance. Its cars can perform complicated driving tasks and the system has improved through years of data and iteration. But Tesla’s own current description calls the product ",
      { text: "Full Self-Driving (Supervised)", marks: ["strong"] },
      " and says the driver must pay attention and be ready to take over.",
    ),
    block("normal", "That parenthesis is doing the work of several thousand engineers."),
    block(
      "normal",
      "The distinction is not pedantry. A system that drives impressively while a human supervises it is not the same product as a car that can safely carry nobody. Removing the driver does not remove one component; it changes the safety case, the fallback behaviour, the liability, the validation and the meaning of every rare failure.",
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
      "A famous white paper, years of prototypes by others, no Musk-built passenger system, and a flagship company that shut down.",
    ),
    block("h2", "The air-hockey school of infrastructure"),
    block(
      "normal",
      "In 2013, Musk released the Hyperloop Alpha paper: passenger pods travelling through low-pressure tubes between Los Angeles and San Francisco. In a CNN interview, he said it was “a lot easier than people think”. When the interviewer persisted, he explained that it was like a tube with an air-hockey table and added: “It’s really, I swear it’s not that hard.”",
    ),
    block("normal", "This is marvellous television. It is less useful as infrastructure analysis."),
    block(
      "normal",
      "An air-hockey table does not cross earthquake faults, acquire land, evacuate passengers from a depressurised tube, handle thermal expansion across hundreds of kilometres, meet headways, manage stations or persuade several municipalities to agree on where to put the exits. The puck also has comparatively relaxed views on fire safety.",
    ),
    block(
      "normal",
      "The paper contained calculations produced with engineers from Tesla and SpaceX and openly invited correction. That work should be credited to the people who did it, not transformed into another Musk origin story. Hyperloop One was not Musk’s company, but his celebrity and certainty gave the idea global authority while leaving others to absorb the engineering and financial consequences.",
    ),
    block(
      "normal",
      "Hyperloop One raised hundreds of millions of dollars, ran tests and ultimately shut down in 2023 without a contract to build a working commercial Hyperloop. Other research continues. Perhaps some version will eventually find a useful niche. That is how research works.",
    ),
    block(
      "normal",
      "But the original certainty has evaporated while the original impression remains: conventional rail was old thinking; the tube was the future; the hard part was basically an air bearing.",
    ),
    block(
      "normal",
      "Innovation suffers when the proven alternative must compete not with a working new system, but with an animation unconstrained by procurement, maintenance or weather. Reality is required to submit audited accounts. The future merely needs a tasteful render.",
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
      "The original 57-page concept paper—more candid about uncertainty than the television pitch around it.",
    ),
    source(
      "source-hyperloop-closure",
      "article",
      "Reuters",
      "Hyperloop One shut down without a commercial contract",
      "https://finance.yahoo.com/news/high-speed-transportation-firm-hyperloop-223804654.html",
      "The 2023 report on the best-funded Hyperloop company selling its assets after failing to secure a working-system contract.",
    ),
    caseStudy(
      "case-tunnels",
      "tunnels",
      "03",
      "A 3D transport network becomes a taxi in a tube",
      "Cars descend on street-corner lifts, board electric skates and travel through layered tunnels at roughly 130 mph.",
      "The skates were dropped as too complex. The demonstrations and Vegas opening used ordinary Teslas with human drivers.",
    ),
    block("h2", "The revolutionary discovery of putting a road underground"),
    block(
      "normal",
      "The Boring Company began with an appealing observation: cities are three-dimensional, while most roads occupy one thin layer. Why not build many layers of tunnels and route traffic through them?",
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
      "Again, the defence is that this is an early version. Fair enough. Tunnelling faster and more cheaply would be valuable. Starting with a limited operating system is sensible. The offence is not iteration; it is allowing the initial spectacle to define the public claim, then treating the radically reduced delivery as merely version one of the same thing.",
    ),
    block(
      "normal",
      "It was not the same thing. The skates disappeared. The speed disappeared. Private cars entering from neighbourhood lifts disappeared. Autonomy disappeared. What remained was a narrow underground roadway operated by professional drivers—functional, interesting and considerably less magical.",
    ),
    block(
      "normal",
      "That difference matters when cities, investors and the public are judging a proposal. “We can dig a smaller tunnel and run a managed taxi service through it” is a legitimate pitch. It simply does not produce quite the same music.",
    ),
    source(
      "source-tunnel-video",
      "video",
      "The Boring Company / TechCrunch",
      "The original car-skate tunnel concept",
      "https://techcrunch.com/2017/04/28/watch-how-elon-musks-boring-company-tunnels-will-move-cars-faster/",
      "The 2017 animation: lifts, electric skates, layered routes and computer-controlled travel at about 130 mph.",
    ),
    source(
      "source-tunnel-opening",
      "article",
      "Ars Technica",
      "A first ride through the Hawthorne test tunnel",
      "https://arstechnica.com/cars/2018/12/ars-takes-a-first-tour-of-the-length-of-the-boring-companys-test-tunnel/",
      "A contemporary account of the human-driven opening and the quiet retirement of the electric-skate plan.",
    ),
    source(
      "source-vegas-opening",
      "article",
      "Fast Company",
      "The Vegas Loop opened with human-driven Teslas",
      "https://www.fastcompany.com/90644133/elon-musks-boring-company-vegas-teslas-in-tunnels-opening",
      "A report from the 2021 opening contrasting the original 150-mph electric-skate vision with the operating system.",
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
      "Tesla introduced its robot idea at AI Day 2021 with a person dancing in a robot suit. This was a joke and was presented as one. By 2022, Tesla had a real prototype walking cautiously on stage—a genuine achievement by the team and a useful reminder that robots are built one unstable step at a time.",
    ),
    block(
      "normal",
      "Then the narrative expanded. Optimus would become a general-purpose autonomous humanoid, perform dangerous and tedious work, transform the economy and perhaps become the biggest product of any kind. At Tesla’s 2024 “We, Robot” event, Optimus units walked among guests, danced, spoke and served drinks. Reports and recordings later established that many of the social interactions were assisted by human teleoperators.",
    ),
    block(
      "normal",
      "Teleoperation is not a scandal. It is a normal robotics tool. We use it to collect data, test hardware, recover from failures and study tasks before autonomy is ready. The problem is presenting a teleoperated interaction inside an event about autonomous products without making the boundary impossible to miss.",
    ),
    block(
      "normal",
      "If a human speaks through a robot, the achievement is a capable remote body. If the robot understands the conversation and acts independently, the achievement is embodied intelligence. These are not two minor software versions of the same demo. They are different claims.",
    ),
    block(
      "normal",
      "If Optimus becomes useful, the credit will belong to the engineers who solve its perception, control, manipulation and manufacturing problems—not to the man who announced their result in advance. The point is not to predict failure. It is to refuse Musk ownership of success before the work is done.",
    ),
    block(
      "normal",
      "The robot should be allowed to be an impressive prototype. It does not also need to be the imminent end of labour before it has finished handing out the drinks by itself.",
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
      "The Optimus demonstrations were human-assisted",
      "https://arstechnica.com/ai/2024/10/reports-teslas-prototype-optimus-robots-were-controlled-by-humans/",
      "Reporting and video evidence showing where teleoperation sat behind the polished party interactions.",
    ),
    block("h2", "Why this damages innovation"),
    block(
      "normal",
      "The usual response is that Musk sets impossible deadlines to make teams achieve the merely improbable. Perhaps. Internal stretch goals can be useful. Public certainty is something else.",
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
      "Each new promise borrows credibility from the future. When the due date arrives, the debt is not repaid; it is refinanced with a larger vision. Full autonomy becomes robotaxis. Hyperloop becomes Loop. Electric skates become guided Teslas. A cautious robot becomes universal labour.",
    ),
    block("normal", "The nouns survive. Their meanings become extremely flexible."),
    block("h3", "It makes honest innovators look slow"),
    block(
      "normal",
      "Serious engineers describe constraints because constraints are the work. They qualify timelines because integration contains surprises. They separate a prototype from a product because people may make financial, political or safety decisions based on the difference.",
    ),
    block(
      "normal",
      "Against a showman who has declared the problem easy and the solution due next year, that honesty can look like timidity. It is not. It is calibration.",
    ),
    block(
      "normal",
      "There is a peculiar cruelty in watching thousands of engineers do difficult, incremental work while the public story insists the breakthrough was obvious, imminent and largely summoned by one man’s confidence. The teams deliver the progress. The promise keeps the byline.",
    ),
    block("h2", "Don’t trust him"),
    block("normal", "Don’t trust Elon Musk."),
    block(
      "normal",
      "This is not an invitation to wait patiently for one more demo before deciding. The record is the reason not to extend trust. His public language is not calibrated as a reliable guide to technical readiness; it is calibrated to create motion, attract belief and secure ownership of an achievement before it exists.",
    ),
    block("normal", "So do not outsource your judgement to the confidence."),
    block(
      "normal",
      "Do not trust ",
      { text: "full", marks: ["strong"] },
      " in the product name; check who is still responsible when it fails. Do not trust ",
      { text: "next year", marks: ["strong"] },
      "; find the previous next year. Do not trust the stage demo; ask what was constrained, mapped, rehearsed or remotely operated. Do not trust the render; look for the fire exits, maintenance plan, throughput and cost. Do not trust the new announcement until the old one has an honest post-mortem.",
    ),
    block(
      "normal",
      "Trust deployed systems. Trust independent tests. Trust boring operational data. Trust engineers who can explain not only why something works, but how it fails.",
    ),
    block(
      "normal",
      "Musk is very good at telling us what he wants the future to feel like. That is not nothing. It is simply not evidence that the future has arrived.",
    ),
    block("normal", "The future does not need another trailer. It needs someone to stay for the credits."),
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
