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
  "cl-tag-styles",
  `
  .cl-tag {
    display: inline-flex; align-items: center; gap: 0.4em;
    font-family: var(--font-mono); font-weight: 500; font-size: 0.75rem;
    letter-spacing: 0.04em; color: var(--ink-800);
    background: var(--cream-50); border: 1.5px solid var(--border-strong);
    padding: 0.32em 0.7em; border-radius: var(--radius-sm); white-space: nowrap;
    transition: border-color var(--dur-base), background-color var(--dur-base);
  }
  .cl-tag--clickable { cursor: pointer; }
  .cl-tag--clickable:hover { border-color: var(--brand); background: var(--clay-50); }
  .cl-tag--active { background: var(--ink-900); color: var(--cream-100); border-color: var(--ink-900); }
  .cl-tag__x {
    display: inline-flex; align-items: center; justify-content: center;
    width: 1.05em; height: 1.05em; border-radius: 50%; margin-right: -0.2em;
    background: transparent; border: none; cursor: pointer; color: inherit; padding: 0;
  }
  .cl-tag__x:hover { background: rgba(0,0,0,0.1); }
  .cl-tag__hash { color: var(--brand); }
`
);

/** Category chip — mono, with optional `#`, active state, or remove button. */
export function Tag({ children, hash = false, active = false, onRemove, onClick, className = "", ...rest }) {
  const clickable = !!onClick;
  return (
    <span
      className={["cl-tag", active ? "cl-tag--active" : "", clickable ? "cl-tag--clickable" : "", className].filter(Boolean).join(" ")}
      onClick={onClick}
      {...rest}
    >
      {hash && <span className="cl-tag__hash">#</span>}
      {children}
      {onRemove && (
        <button type="button" className="cl-tag__x" aria-label="Remove" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}
