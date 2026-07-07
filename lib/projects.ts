export type Project = {
  name: string;
  blurb: string;
  tag: string;
  href: string;
  /** modular-grid accent: which token tints the tile */
  accent: "blue" | "green" | "teal" | "slate";
  /** grid emphasis: feature tiles span two columns on desktop */
  span?: 2;
};

/**
 * Shipped proofs, ordered for an AI-adoption / internal-tooling audience:
 * the tooling other engineers and agents actually install (MCP servers, Claude
 * Code plugins), then durable AI systems, then product apps, then craft demos.
 * Two wide tiles (MDP, Apartment Hunter) keep the 3-column grid filling exactly.
 */
export const PROJECTS: Project[] = [
  // Row 1 — the headline: tooling that gets adopted
  {
    name: "MDP",
    blurb:
      "A compiler that turns one Markdown source into design-locked decks, pages, and docs. Ships with an MCP server plus Claude Code and Codex plugins, so other tools and agents write into it. Zero-dependency Node engine, on npm.",
    tag: "MCP server · Claude Code plugin",
    href: "https://barmoshe.github.io/mdp/",
    accent: "blue",
    span: 2,
  },
  {
    name: "Temporal Plugin",
    blurb:
      "A Temporal.io orchestration plugin for Claude Code: durable, retryable workflows so agents run like production systems, not one-shot prompts.",
    tag: "Claude Code plugin · Agents",
    href: "https://github.com/Base67-AI/temporal-plugin",
    accent: "green",
  },
  // Row 2 — AI systems and the discipline around them
  {
    name: "Creative Harness",
    blurb:
      "An AI agent harness for Claude Code: skills, hooks, and tooling that let one builder ship like a small team. The internal-enablement pattern, built for myself first.",
    tag: "AI agents · Enablement",
    href: "https://github.com/barmoshe/claude-creative-stack",
    accent: "teal",
  },
  {
    name: "Entailer",
    blurb:
      "A logician's-pass linter for prose and specs. An LLM-in-the-loop translator formalizes the load-bearing claims, a deterministic core checks whether arguments follow, and every verdict ships with the formalization it judged. The measurement side of trusting AI output. On npm.",
    tag: "Evals · AI + formal logic",
    href: "https://barmoshe.github.io/entailer/",
    accent: "slate",
  },
  {
    name: "Temporal Data Service",
    blurb:
      "A cross-language data-processing service on Temporal for durable, fault-tolerant workflows. Featured on Temporal's official code exchange. Go, Python, and TypeScript workers under one orchestration.",
    tag: "Backend · Durable workflows",
    href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal",
    accent: "blue",
  },
  // Row 3 — product apps, anchored by a wide feature tile
  {
    name: "Apartment Hunter",
    blurb:
      "A real-estate decision tool: side-by-side comparison, Israeli purchase-tax brackets, a full mortgage calculator. Product-grade UI, shipped solo.",
    tag: "Product · Web app",
    href: "https://apartment-hunter-one.vercel.app",
    accent: "teal",
    span: 2,
  },
  {
    name: "Trip Planner",
    blurb:
      "An itinerary, budget, and logistics planner with a live currency converter and a countdown. From brief to live in days.",
    tag: "Product · Web app",
    href: "https://trip-planner-six-iota.vercel.app",
    accent: "slate",
  },
  // Row 4 — craft demos
  {
    name: "Biome",
    blurb:
      "A generative pad synth in the browser, state-machine driven. Sound design as software.",
    tag: "Generative · Audio",
    href: "https://biome-synth.lovable.app",
    accent: "green",
  },
  {
    name: "Bloom Garden",
    blurb:
      "A webcam hand-gesture game: pinch to pluck flowers, on-device MediaPipe, no video ever leaves the browser.",
    tag: "Computer vision · Game",
    href: "https://bloom-garden-five.vercel.app",
    accent: "teal",
  },
  {
    name: "Aurora",
    blurb:
      "A hand-written WebGL silk field. Craft on the metal, the kind of detail that separates a demo from a product.",
    tag: "WebGL · Graphics",
    href: "https://aurora-eight-iota.vercel.app",
    accent: "blue",
  },
];
