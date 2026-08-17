export const site = {
  name: "Alok Didde",
  shortName: "AD",
  description:
    "Robotics and software engineer building open robotics infrastructure, physical AI systems, and new approaches to retrieval.",
  email: "alok.didde@gmail.com",
  social: [
    { label: "GitHub", href: "https://github.com/alokdidde" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alok-didde-85335726",
    },
    { label: "X", href: "https://twitter.com/alokazam" },
  ],
} as const;

export const selectedWork = [
  {
    number: "01",
    title: "An open stack for building real robots",
    shortTitle: "Open robotics stack",
    category: "Robotics infrastructure",
    status: "Building now",
    summary:
      "A framework for moving from an idea to working hardware without rebuilding the same infrastructure every time.",
    detail:
      "The aim is practical: composable software, firmware, and hardware interfaces that are understandable enough to change—and solid enough to build on.",
    tags: ["ROS 2", "C++", "Python", "Open source"],
    visual: "robotics",
    shape: "arch",
    href: null,
  },
  {
    number: "02",
    title: "A field robot that sees, navigates, and acts",
    shortTitle: "Agricultural robot",
    category: "MSc Robotics project",
    status: "Built 2024",
    summary:
      "An autonomous agricultural platform combining spatial reconstruction, visual pest detection, and robotic-arm control.",
    detail:
      "Gaussian Splatting informed navigation, CNNs handled pest detection, and forward/inverse kinematics drove precise manipulation.",
    tags: ["Gaussian Splatting", "Computer vision", "Kinematics"],
    visual: "agriculture",
    shape: "circle",
    href: null,
  },
  {
    number: "03",
    title: "Retrieval that explores instead of only ranking",
    shortTitle: "DexRAG",
    category: "Retrieval research",
    status: "Experimental",
    summary:
      "A retrieval approach that uses Monte Carlo exploration to search a corpus rather than depending entirely on vector similarity.",
    detail:
      "In early experiments it reached roughly 80% recall on the target task, compared with under 20% for the embedding baseline. The interesting part is not the number—it is the search behaviour behind it.",
    tags: ["RAG", "Monte Carlo search", "LLMs"],
    visual: "retrieval",
    shape: "soft-square",
    href: null,
  },
  {
    number: "04",
    title: "Circuit boards as code, with evidence",
    shortTitle: "PCBoo",
    category: "Agent-native EDA",
    status: "Open source",
    summary:
      "PCBoo lets coding agents author circuit boards as composable TypeScript, then makes them show their working.",
    detail:
      "Deterministic builds, structured diagnostics, local inspection, and separate readiness statuses keep a plausible-looking board from quietly becoming a very expensive coaster.",
    tags: ["TypeScript", "Bun", "tscircuit", "Hardware"],
    visual: "pcboo",
    shape: "soft-square",
    href: "/work/pcboo",
  },
  {
    number: "05",
    title: "Healthcare systems designed for the messy real world",
    shortTitle: "Healthcare platforms",
    category: "Software systems",
    status: "14 years in practice",
    summary:
      "Clinical platforms, remote patient monitoring, real-time communication, claims workflows, and AI-assisted document systems.",
    detail:
      "Work across startups and scaled healthcare companies shaped how I think about reliability: the difficult part is rarely the happy path.",
    tags: ["Distributed systems", "Healthcare", "Applied AI"],
    visual: "healthcare",
    shape: "diamond",
    href: null,
  },
] as const;

export const workingQuestions = [
  {
    index: "A",
    question: "How much of robotics infrastructure can become boring?",
    note: "The useful kind of boring: predictable, inspectable, and reusable.",
  },
  {
    index: "B",
    question: "What changes when retrieval explores instead of ranks?",
    note: "Search may need strategies, memory, and backtracking—not only a better embedding.",
  },
  {
    index: "C",
    question: "What makes open hardware genuinely extensible?",
    note: "Documentation and interfaces matter as much as a downloadable CAD file.",
  },
] as const;

export const otherBuilds = [
  {
    title: "Ganglia",
    label: "Adaptive memory for AI agents",
    description:
      "A TypeScript memory engine combining BM25, embeddings, recency, and feedback with per-query adaptive weighting and an L1/L2/L3 memory hierarchy.",
    href: "https://github.com/alokdidde/ganglia",
    tags: ["Agent memory", "Hybrid search", "TypeScript"],
  },
  {
    title: "Saarathi",
    label: "Business intelligence through WhatsApp",
    description:
      "A working assistant for Indian micro-businesses: transaction capture, cash-flow forecasts, payroll, collections, and proactive alerts through a familiar interface.",
    href: "https://github.com/alokdidde/Saarathi",
    tags: ["AI agents", "Fintech", "WhatsApp"],
  },
] as const;
