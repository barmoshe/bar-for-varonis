/**
 * Hero centerpiece: reframes Varonis' cosmic planet motif as an "AI adoption
 * orbit". A glowing core (the engineering org at full adoption) is circled by
 * the tooling that keeps it there — Claude Code, MCP, Copilot, agents, evals.
 * All motion is CSS (defined in globals.css) and reduced-motion safe.
 * SVG coordinates are rounded so server and client render identical strings.
 */

type Node = { label: string; x: number; y: number; delay: number };

const NODES: Node[] = [
  { label: "Claude Code", x: 260, y: 84, delay: 0 },
  { label: "MCP", x: 438, y: 214, delay: 0.8 },
  { label: "Copilot", x: 372, y: 424, delay: 1.6 },
  { label: "Agents", x: 148, y: 424, delay: 2.4 },
  { label: "Evals", x: 82, y: 214, delay: 3.2 },
];

const CHIP_W: Record<string, number> = {
  "Claude Code": 108,
  MCP: 60,
  Copilot: 82,
  Agents: 78,
  Evals: 66,
};

export default function CosmicCenterpiece() {
  return (
    <svg
      className="vr-orbit"
      viewBox="0 0 520 520"
      role="img"
      aria-label="An AI-adoption orbit: a glowing core circled by Claude Code, MCP, Copilot, agents, and evals."
    >
      <defs>
        <radialGradient id="vr-core" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#1b3a4a" />
          <stop offset="55%" stopColor="#0a1418" />
          <stop offset="100%" stopColor="#02070a" />
        </radialGradient>
        <radialGradient id="vr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2fe6a6" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#12b5c8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#02070a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vr-terminator" cx="72%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#8be000" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#2fe6a6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* starfield */}
      <g className="vr-orbit-stars">
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#cfe9ff" opacity={s.o} />
        ))}
      </g>

      {/* nebula glow behind the core */}
      <circle cx="260" cy="260" r="230" fill="url(#vr-glow)" className="vr-orbit-nebula" />

      {/* orbit rings */}
      <g fill="none" stroke="#3a5566" strokeOpacity="0.5">
        <circle cx="260" cy="260" r="176" strokeWidth="1" />
        <circle
          cx="260"
          cy="260"
          r="176"
          strokeWidth="1.4"
          stroke="#2fe6a6"
          strokeOpacity="0.35"
          strokeDasharray="3 12"
          className="vr-orbit-ring"
        />
        <circle cx="260" cy="260" r="120" strokeWidth="1" strokeOpacity="0.35" />
      </g>

      {/* connectors core -> nodes */}
      <g stroke="#2fe6a6" strokeOpacity="0.28" strokeWidth="1">
        {NODES.map((n) => (
          <line key={n.label} x1="260" y1="260" x2={n.x} y2={n.y} />
        ))}
      </g>

      {/* the core "planet" */}
      <g className="vr-core-glow">
        <circle cx="260" cy="260" r="70" fill="url(#vr-core)" stroke="#2fe6a6" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="260" cy="260" r="70" fill="url(#vr-terminator)" />
        <text x="260" y="252" textAnchor="middle" className="vr-core-num">100%</text>
        <text x="260" y="278" textAnchor="middle" className="vr-core-cap">ADOPTION</text>
      </g>

      {/* orbiting nodes — outer group positions, inner group floats (CSS) */}
      {NODES.map((n) => {
        const w = CHIP_W[n.label];
        return (
          <g key={n.label} transform={`translate(${n.x} ${n.y})`}>
            <g className="vr-node" style={{ animationDelay: `${n.delay}s` }}>
              <rect
                x={-w / 2}
                y="-15"
                width={w}
                height="30"
                rx="15"
                fill="#0a1418"
                stroke="#2fe6a6"
                strokeOpacity="0.55"
                strokeWidth="1"
              />
              <circle cx={-w / 2 + 15} cy="0" r="3.5" fill="#8be000" />
              <text x="9" y="4" textAnchor="middle" className="vr-node-label">
                {n.label}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

// A fixed starfield (deterministic — no Math.random, so SSR and client match).
const STARS = [
  { x: 60, y: 70, r: 1.4, o: 0.8 },
  { x: 120, y: 40, r: 1, o: 0.5 },
  { x: 210, y: 30, r: 1.2, o: 0.7 },
  { x: 330, y: 55, r: 1, o: 0.5 },
  { x: 430, y: 90, r: 1.5, o: 0.85 },
  { x: 480, y: 180, r: 1, o: 0.5 },
  { x: 470, y: 300, r: 1.3, o: 0.7 },
  { x: 440, y: 430, r: 1, o: 0.5 },
  { x: 350, y: 480, r: 1.4, o: 0.8 },
  { x: 210, y: 490, r: 1, o: 0.5 },
  { x: 90, y: 460, r: 1.2, o: 0.6 },
  { x: 40, y: 340, r: 1, o: 0.5 },
  { x: 30, y: 210, r: 1.5, o: 0.85 },
  { x: 150, y: 150, r: 0.8, o: 0.4 },
  { x: 380, y: 200, r: 0.8, o: 0.4 },
  { x: 300, y: 360, r: 0.8, o: 0.45 },
];
