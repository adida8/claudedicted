import React from "react";

function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

injectOnce(
  "cl-card-styles",
  `
  .cl-card {
    background: var(--surface-card); border-radius: var(--radius-xl);
    border: 1.5px solid var(--border-subtle); box-shadow: var(--shadow-sm);
    overflow: hidden; transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .cl-card--pad { padding: 1.5rem; }
  .cl-card--hover:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }

  /* Sticker — signature ink outline + hard offset */
  .cl-card--sticker { border: 2.5px solid var(--ink-900); box-shadow: var(--shadow-ink); }
  .cl-card--sticker.cl-card--hover:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-ink-lg); }

  /* Tinted surfaces */
  .cl-card--clay { background: var(--clay-500); color: var(--text-on-clay); border-color: var(--clay-600); }
  .cl-card--ink  { background: var(--ink-900);  color: var(--text-on-ink);  border-color: var(--ink-800); }
  .cl-card--clay h1,.cl-card--clay h2,.cl-card--clay h3,.cl-card--ink h1,.cl-card--ink h2,.cl-card--ink h3 { color: inherit; }
`
);

/** Generic surface card. `sticker` is the signature ink-outline look. */
export function Card({ children, variant = "plain", padded = true, hover = false, className = "", ...rest }) {
  const variantClass = variant === "sticker" ? "cl-card--sticker"
    : variant === "clay" ? "cl-card--clay"
    : variant === "ink" ? "cl-card--ink"
    : "";
  return (
    <div
      className={[
        "cl-card",
        variantClass,
        padded ? "cl-card--pad" : "",
        hover ? "cl-card--hover" : "",
        className,
      ].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
