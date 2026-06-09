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
  "cl-callout-styles",
  `
  .cl-callout {
    display: flex; gap: 0.85rem; font-family: var(--font-body);
    padding: 1rem 1.15rem; border-radius: var(--radius-lg);
    border: 1.5px solid var(--border-strong); background: var(--cream-50);
    color: var(--text-body); line-height: 1.5;
  }
  .cl-callout__icon { flex: none; width: 1.4rem; height: 1.4rem; margin-top: 0.05rem; display:inline-flex; }
  .cl-callout__icon svg, .cl-callout__icon img { width: 100%; height: 100%; }
  .cl-callout__body { font-size: 0.95rem; }
  .cl-callout__title { font-family: var(--font-display); font-weight: var(--weight-bold); font-size: 1.05rem; color: var(--text-strong); margin: 0 0 0.2rem; }
  .cl-callout p { margin: 0; }

  .cl-callout--tip     { background: var(--clay-50);  border-color: var(--clay-200);  color: var(--clay-900); }
  .cl-callout--tip .cl-callout__icon { color: var(--brand); }
  .cl-callout--note    { background: var(--pine-50);  border-color: var(--pine-200);  color: var(--pine-700); }
  .cl-callout--note .cl-callout__icon { color: var(--accent); }
  .cl-callout--warning { background: var(--honey-100); border-color: #e7c878; color: #6f4e0f; }
  .cl-callout--warning .cl-callout__icon { color: var(--honey-500); }
`
);

const ICONS = {
  tip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/></svg>
  ),
  note: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></svg>
  ),
};

/** Inline note box: tip (clay), note (pine), or warning (honey). */
export function Callout({ children, variant = "tip", title, icon, className = "", ...rest }) {
  return (
    <div className={["cl-callout", `cl-callout--${variant}`, className].filter(Boolean).join(" ")} {...rest}>
      <span className="cl-callout__icon">{icon || ICONS[variant]}</span>
      <div className="cl-callout__body">
        {title && <p className="cl-callout__title">{title}</p>}
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </div>
  );
}
