/**
 * The "what I'd build here" centerpiece: a blueprint-framed mock of an internal
 * AI-adoption dashboard, echoing Varonis' own AI Hub (MY AI Score, MCP catalog,
 * adoption scorecards). The metrics are Varonis' *published* engineering-adoption
 * results, credited in the caption — a sketch of the tooling that tracks them,
 * not a claim that Bar produced them.
 */

const SCORES = [
  { label: "Eng adoption", value: "100%", bar: 100, note: "of engineers, by 2025" },
  { label: "PR cycle time", value: "-96%", bar: 96, note: "idea to merged" },
  { label: "Review time", value: "-75%", bar: 75, note: "per pull request" },
  { label: "Post-review changes", value: "-41%", bar: 41, note: "fewer reworks" },
];

const CATALOG = [
  { name: "mdp", kind: "MCP server", dot: "#8be000" },
  { name: "temporal-plugin", kind: "Claude Code", dot: "#0077ff" },
  { name: "entailer", kind: "eval / linter", dot: "#2fe6a6" },
];

export default function AdoptionHubPanel() {
  return (
    <div className="vr-blueprint">
      {/* corner registration marks */}
      <span className="vr-crop vr-crop-tl" aria-hidden="true" />
      <span className="vr-crop vr-crop-tr" aria-hidden="true" />
      <span className="vr-crop vr-crop-bl" aria-hidden="true" />
      <span className="vr-crop vr-crop-br" aria-hidden="true" />

      <div className="vr-hub">
        <div className="vr-hub-bar">
          <span className="vr-hub-dot" />
          <span className="vr-hub-dot" />
          <span className="vr-hub-dot" />
          <span className="vr-hub-title">ai-adoption-hub</span>
          <span className="vr-hub-live">
            <i /> live
          </span>
        </div>

        <div className="vr-hub-body">
          <div className="vr-hub-scores">
            <div className="vr-hub-h">My AI Score</div>
            {SCORES.map((s) => (
              <div key={s.label} className="vr-score">
                <div className="vr-score-top">
                  <span className="vr-score-label">{s.label}</span>
                  <span className="vr-score-value">{s.value}</span>
                </div>
                <div className="vr-score-track">
                  <span
                    className="vr-score-fill"
                    style={{ width: `${s.bar}%` }}
                  />
                </div>
                <span className="vr-score-note">{s.note}</span>
              </div>
            ))}
          </div>

          <div className="vr-hub-catalog">
            <div className="vr-hub-h">MCP capability catalog</div>
            <ul className="vr-catalog">
              {CATALOG.map((c) => (
                <li key={c.name} className="vr-catalog-row">
                  <span
                    className="vr-catalog-dot"
                    style={{ background: c.dot }}
                  />
                  <code className="vr-catalog-name">{c.name}</code>
                  <span className="vr-catalog-kind">{c.kind}</span>
                  <span className="vr-catalog-status">registered</span>
                </li>
              ))}
            </ul>
            <div className="vr-hub-compare">
              <div className="vr-hub-h vr-hub-h-sm">With / without agents</div>
              <div className="vr-compare-row">
                <span className="vr-compare-tag">with</span>
                <span className="vr-compare-track">
                  <span className="vr-compare-fill vr-compare-with" />
                </span>
              </div>
              <div className="vr-compare-row">
                <span className="vr-compare-tag vr-compare-tag-dim">without</span>
                <span className="vr-compare-track">
                  <span className="vr-compare-fill vr-compare-without" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="vr-blueprint-cap">
        Illustrative. Figures are Varonis&apos; own published engineering-adoption
        results; the catalog rows are tools I&apos;ve shipped in the open.
      </p>
    </div>
  );
}
