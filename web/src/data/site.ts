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
    title: "HefaOS: an open stack for building real robots",
    shortTitle: "HefaOS",
    category: "Robotics infrastructure",
    status: "Building now",
    summary:
      "A framework for moving from an idea to working hardware without rebuilding the same infrastructure every time.",
    detail:
      "It defines clear interfaces across software, firmware, and hardware so each layer can change without rebuilding the rest.",
    tags: ["C++", "TypeScript", "Real-time", "Open source"],
    visual: "robotics",
    shape: "arch",
    href: "/work/hefaos",
  },
  {
    number: "02",
    title: "Describe the board. Let the coding agent build it",
    shortTitle: "Fulmetry",
    category: "Agentic electronics",
    status: "Open source",
    summary:
      "Fulmetry gives your coding agent the project structure and commands to write the TypeScript, place and route the PCB, then build and test it.",
    detail:
      "You review the schematic, PCB, and 3D assembly in a local workspace, steer the next change, and prepare the finished board for manufacturing.",
    tags: ["TypeScript", "Bun", "tscircuit", "Hardware"],
    visual: "fulmetry",
    shape: "lozenge",
    href: "/work/fulmetry",
  },
  {
    number: "03",
    title: "A field robot that sees, navigates, and acts",
    shortTitle: "Agricultural robot",
    category: "MSc Robotics project",
    status: "Built 2024",
    summary:
      "An autonomous agricultural platform combining spatial reconstruction, visual pest detection, and robot arm control.",
    detail:
      "Gaussian Splatting informed navigation, CNNs handled pest detection, and forward/inverse kinematics drove precise manipulation.",
    tags: ["Gaussian Splatting", "Computer vision", "Kinematics"],
    visual: "agriculture",
    shape: "capsule",
    href: null,
  },
  {
    number: "04",
    title: "Retrieval that explores instead of only ranking",
    shortTitle: "DexRAG",
    category: "Retrieval research",
    status: "Experimental",
    summary:
      "A retrieval approach that uses Monte Carlo exploration to search a corpus rather than depending entirely on vector similarity.",
    detail:
      "Early experiments reached roughly 80% recall on the target task, compared with under 20% for the embedding baseline. The experiment examines the search behaviour behind that gap.",
    tags: ["RAG", "Monte Carlo search", "LLMs"],
    visual: "retrieval",
    shape: "lozenge-flip",
    href: null,
  },
  {
    number: "05",
    title: "Healthcare systems built around clinical constraints",
    shortTitle: "Healthcare platforms",
    category: "Software systems",
    status: "Production systems",
    summary:
      "Clinical platforms, remote patient monitoring, real-time communication, claims workflows, and document systems assisted by AI.",
    detail:
      "Work across startups and scaled healthcare companies focused on reliability beyond the happy path.",
    tags: ["Distributed systems", "Healthcare", "Applied AI"],
    visual: "healthcare",
    shape: "vault",
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
    note: "Search may need strategies, memory, and backtracking alongside better embeddings.",
  },
  {
    index: "C",
    question: "What makes open hardware extensible in practice?",
    note: "Documentation and interfaces matter as much as a downloadable CAD file.",
  },
] as const;

export const otherBuilds = [
  {
    title: "Ganglia",
    label: "Adaptive memory for AI agents",
    description:
      "A TypeScript memory engine combining BM25, embeddings, recency, and feedback with adaptive weighting for each query and an L1/L2/L3 memory hierarchy.",
    href: "https://github.com/alokdidde/ganglia",
    tags: ["Agent memory", "Hybrid search", "TypeScript"],
  },
  {
    title: "Saarathi",
    label: "Business intelligence through WhatsApp",
    description:
      "A working assistant for small Indian businesses: transaction capture, cash flow forecasts, payroll, collections, and proactive alerts through a familiar interface.",
    href: "https://github.com/alokdidde/Saarathi",
    tags: ["AI agents", "Fintech", "WhatsApp"],
  },
] as const;
