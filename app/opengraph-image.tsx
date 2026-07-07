import { ImageResponse } from "next/og";

export const alt = "Bar Moshe — I build the tooling AI adoption runs on. For Varonis.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Shareable link preview card. Varonis cosmic dark + lime/teal accents. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(120% 100% at 80% 0%, #08131c 0%, #010203 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.06em",
          }}
        >
          <span style={{ textTransform: "uppercase" }}>
            bar <span style={{ color: "#63737f" }}>for</span> varonis
          </span>
          <span style={{ color: "#2fe6a6", fontSize: 24 }}>
            AI Platform &amp; Adoption
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.005em",
            lineHeight: 1.0,
            maxWidth: 1000,
          }}
        >
          <span style={{ color: "#ffffff" }}>I build the tooling</span>
          <span style={{ color: "#8be000", fontStyle: "italic" }}>
            AI adoption runs on.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            color: "#90a4b1",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 8,
              background: "#8be000",
            }}
          />
          MCP servers · Claude Code plugins · agents · evals
        </div>
      </div>
    ),
    { ...size },
  );
}
