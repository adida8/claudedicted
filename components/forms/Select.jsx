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
  "cl-select-styles",
  `
  .cl-select-wrap { position: relative; display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
  .cl-select-wrap__label { font-size: 0.875rem; font-weight: var(--weight-semibold); color: var(--text-strong); }
  .cl-select-inner { position: relative; display: flex; align-items: center; }
  .cl-select {
    width: 100%; font-family: var(--font-body); font-size: 1rem; color: var(--text-body);
    background: var(--cream-50); border: 1.5px solid var(--border-strong);
    border-radius: var(--radius-md); padding: 0.7rem 2.4rem 0.7rem 0.9rem; line-height: 1.4;
    -webkit-appearance: none; appearance: none; cursor: pointer;
    transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .cl-select:hover { border-color: var(--ink-400); }
  .cl-select:focus { outline: none; border-color: var(--brand); box-shadow: 0 0 0 3px var(--clay-100); background: #fff; }
  .cl-select-chevron { position: absolute; right: 0.85rem; pointer-events: none; color: var(--text-muted); display:inline-flex; }
  .cl-select[disabled] { opacity: 0.55; cursor: not-allowed; background: var(--cream-200); }
`
);

/** Styled native select with a chevron. Pass `options` or `children`. */
export function Select({ label, options, children, id, className = "", ...rest }) {
  const fid = id || (label ? "cl-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return (
    <div className={["cl-select-wrap", className].filter(Boolean).join(" ")}>
      {label && <label className="cl-select-wrap__label" htmlFor={fid}>{label}</label>}
      <div className="cl-select-inner">
        <select id={fid} className="cl-select" {...rest}>
          {options
            ? options.map((o) => {
                const val = typeof o === "string" ? o : o.value;
                const lbl = typeof o === "string" ? o : o.label;
                return <option key={val} value={val}>{lbl}</option>;
              })
            : children}
        </select>
        <span className="cl-select-chevron">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </div>
    </div>
  );
}
