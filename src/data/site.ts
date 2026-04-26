export type Project = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  challenge: string;
  outcome: string;
  accent: string;
  stats: Array<{ label: string; value: string }>;
  stack: string[];
  pillars: string[];
  blueprint: Array<{
    title: string;
    detail: string;
  }>;
};

export type Experiment = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  status: string;
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroStats = [
  { value: "04", label: "Core platform surfaces" },
  { value: "03", label: "Published case-study concepts" },
  { value: "100%", label: "Custom narrative-led rebuild" },
];

export const platformPillars = [
  {
    title: "Proof, not just positioning",
    detail:
      "KubeFrog now uses full project pages, artifacts, and system thinking to turn style into evidence.",
  },
  {
    title: "A platform that can grow",
    detail:
      "The move to Next.js creates a repeatable architecture for case studies, experiments, writing, and future tooling.",
  },
  {
    title: "3D energy with product discipline",
    detail:
      "The frontend leans into depth, atmosphere, and motion while keeping usability and performance in the conversation.",
  },
];

export const projects: Project[] = [
  {
    slug: "command-center",
    label: "Operations product",
    title: "Command Center",
    summary:
      "A cinematic control surface for reliability teams that need instant clarity under pressure.",
    challenge:
      "Typical ops dashboards collapse into noisy widgets and low-confidence signals. This concept reframes monitoring as a story of readiness, risk, and next action.",
    outcome:
      "A layered interface system with clear prioritization, immersive ambient motion, and modular panels that make high-pressure environments easier to parse.",
    accent: "mint",
    stats: [
      { label: "Primary use case", value: "Incident triage" },
      { label: "Interface rhythm", value: "Fast scan" },
      { label: "Motion approach", value: "Signal-led" },
    ],
    stack: ["Next.js", "CSS depth systems", "Canvas motion", "Static export"],
    pillars: [
      "Operational clarity over decorative clutter",
      "Urgency-aware typography and status hierarchy",
      "Panels designed to feel tactile and navigable",
    ],
    blueprint: [
      {
        title: "Status rail",
        detail:
          "A left-side navigation rail that groups services by risk, not alphabet, so attention is directed by consequence.",
      },
      {
        title: "Context chamber",
        detail:
          "The center viewport becomes a command chamber: active incident, blast radius, runbook access, and decision metadata in one place.",
      },
      {
        title: "Confidence footer",
        detail:
          "Persistent deploy health, alert fatigue score, and recovery momentum keep the experience grounded in operational trust.",
      },
    ],
  },
  {
    slug: "flow-studio",
    label: "Workflow product",
    title: "Flow Studio",
    summary:
      "A guided workflow experience that turns complex decision paths into elegant, confidence-building steps.",
    challenge:
      "Multi-step journeys often punish users with abrupt transitions, hidden context, and vague progress indicators. This concept builds a calmer, more directed interaction model.",
    outcome:
      "A flow system with progressive disclosure, contextual guidance panels, and motion cues that reduce hesitation without feeling prescriptive.",
    accent: "sunset",
    stats: [
      { label: "Primary use case", value: "Decision flows" },
      { label: "Interaction goal", value: "Reduced friction" },
      { label: "Signature pattern", value: "Context sidecar" },
    ],
    stack: ["App Router", "Responsive grids", "Progressive disclosure", "Design tokens"],
    pillars: [
      "Movement should teach, not distract",
      "Every step must answer what changed and why",
      "The UI should lower cognitive load before adding delight",
    ],
    blueprint: [
      {
        title: "Journey frame",
        detail:
          "A modular frame keeps users grounded with progress, saved state, and relevant context visible at every step.",
      },
      {
        title: "Decision modules",
        detail:
          "Each decision point becomes a visual module with explanations, examples, and likely outcomes rather than a raw form field.",
      },
      {
        title: "Completion narrative",
        detail:
          "The finish state summarizes what happened, what is next, and what confidence the system has in the result.",
      },
    ],
  },
  {
    slug: "release-lens",
    label: "Developer platform",
    title: "Release Lens",
    summary:
      "A release intelligence board that helps engineering teams read risk, quality, and launch readiness as one product story.",
    challenge:
      "Release tools are often fragmented: CI in one place, code review in another, rollout telemetry elsewhere. Teams lose narrative continuity at the moment it matters most.",
    outcome:
      "A unified release surface that blends code health, test confidence, rollout status, and team ownership into a readable launch picture.",
    accent: "aurora",
    stats: [
      { label: "Primary use case", value: "Launch readiness" },
      { label: "Main audience", value: "Engineering leads" },
      { label: "Key promise", value: "Shared confidence" },
    ],
    stack: ["TypeScript", "Static generation", "Interaction design", "Product storytelling"],
    pillars: [
      "Unify signals into one release narrative",
      "Expose risk as a visual system, not a hidden report",
      "Make developer tooling feel premium and legible",
    ],
    blueprint: [
      {
        title: "Readiness board",
        detail:
          "A top-level readiness board surfaces blockers, confidence, and rollback posture before teams drill into details.",
      },
      {
        title: "Ownership map",
        detail:
          "Launch health is tied to service ownership so the system makes responsibility and action paths obvious.",
      },
      {
        title: "Timeline filmstrip",
        detail:
          "Instead of raw logs, rollout events are presented as a filmstrip of meaningful transitions and confidence changes.",
      },
    ],
  },
];

export const experiments: Experiment[] = [
  {
    slug: "motion-depth-lab",
    title: "Motion Depth Lab",
    type: "Interaction experiment",
    summary:
      "Explores how parallax, scale, and blur can create depth without overwhelming the content layer.",
    status: "Prototype live",
  },
  {
    slug: "dashboard-signal-language",
    title: "Dashboard Signal Language",
    type: "System prototype",
    summary:
      "Studies how status, confidence, and alerting can be expressed through a cleaner visual grammar.",
    status: "System draft",
  },
  {
    slug: "flow-guidance-engine",
    title: "Flow Guidance Engine",
    type: "UX prototype",
    summary:
      "Tests guided step framing, helpful sidecar content, and summary states for complex workflow completion.",
    status: "In exploration",
  },
];
