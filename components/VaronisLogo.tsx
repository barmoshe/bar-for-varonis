/**
 * Wordmark for the site: a double-chevron mark echoing the Varonis logotype,
 * followed by "bar for varonis". Not the real Varonis mark — a rebuilt homage so
 * the page reads as clearly addressed to them without lifting their asset.
 */
export default function VaronisLogo({ className }: { className?: string }) {
  return (
    <span className={`vr-logo ${className ?? ""}`} aria-label="bar for Varonis">
      <svg
        className="vr-logo-mark"
        viewBox="0 0 40 24"
        width="34"
        height="20"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M2 3 L10 21 L15 21 L7 3 Z"
          fill="currentColor"
        />
        <path
          d="M13 3 L21 21 L26 21 L18 3 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M28 3 L20 21"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="square"
          opacity="0.85"
        />
      </svg>
      <span className="vr-logo-text">
        bar <span className="vr-logo-for">for</span> varonis
      </span>
    </span>
  );
}
