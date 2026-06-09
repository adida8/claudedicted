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
  "cl-badge-styles",
  `
  .cl-badge {
    display: inline-flex; align-items: center; gap: 0.35em;
    font-family: var(--font-body); font-weight: var(--weight-bold);
    font-size: 0.8125rem; line-height: 1; letter-spacing: 0.01em;
    padding: 0.4em 0.7em; border-radius: var(--radius-pill);
    border: 1.5px solid transparent; white-space: nowrap;
  }
  .cl-badge--mono { font-family: var(--font-mono); font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.6875rem; }
  .cl-badge__dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: currentColor; }

  .cl-badge--clay    { background: var(--clay-100);  color: var(--clay-800); }
  .cl-badge--pine    { background: var(--pine-100);  color: var(--pine-700); }
  .cl-badge--honey   { background: var(--honey-100); color: #835c12; }
  .cl-badge--berry   { background: var(--berry-100); color: #7e2530; }
  .cl-badge--neutral { background: var(--cream-300); color: var(--ink-700); }

  .cl-badge--solid-clay  { background: var(--brand);  color: var(--text-on-clay); }
  .cl-badge--solid-pine  { background: var(--accent); color: var(--text-on-pine); }
  .cl-badge--solid-ink   { background: var(--ink-900); color: var(--cream-100); }
`
);

/** Small status / category pill. */
export function Badge({ children, variant = "clay", mono = false, dot = false, className = "", ...rest }) {
  return (
    <span
      className={["cl-badge", `cl-badge--${variant}`, mono ? "cl-badge--mono" : "", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {dot && <span className="cl-badge__dot" />}
      {children}
    </span>
  );
}
