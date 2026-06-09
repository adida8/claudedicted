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
  "cl-checkbox-styles",
  `
  .cl-check { display: inline-flex; align-items: flex-start; gap: 0.6rem; font-family: var(--font-body); cursor: pointer; color: var(--text-body); }
  .cl-check input { position: absolute; opacity: 0; width: 0; height: 0; }
  .cl-check__box {
    flex: none; width: 1.3rem; height: 1.3rem; margin-top: 0.05rem;
    border: 2px solid var(--ink-700); border-radius: var(--radius-xs);
    background: var(--cream-50); display: grid; place-items: center;
    transition: background-color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-bounce);
  }
  .cl-check__box svg { width: 0.95rem; height: 0.95rem; color: var(--cream-50); opacity: 0; transform: scale(0.5); transition: opacity var(--dur-fast), transform var(--dur-fast) var(--ease-bounce); }
  .cl-check:hover .cl-check__box { border-color: var(--brand); }
  .cl-check input:checked + .cl-check__box { background: var(--brand); border-color: var(--brand); }
  .cl-check input:checked + .cl-check__box svg { opacity: 1; transform: scale(1); }
  .cl-check input:focus-visible + .cl-check__box { outline: 2.5px solid var(--focus-ring); outline-offset: 2px; }
  .cl-check input:disabled ~ * { opacity: 0.5; }
  .cl-check__text { font-size: 0.95rem; line-height: 1.35; }
`
);

/** Checkbox with label. Controlled via `checked` or uncontrolled. */
export function Checkbox({ label, id, className = "", children, ...rest }) {
  return (
    <label className={["cl-check", className].filter(Boolean).join(" ")} htmlFor={id}>
      <input type="checkbox" id={id} {...rest} />
      <span className="cl-check__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </span>
      {(label || children) && <span className="cl-check__text">{label || children}</span>}
    </label>
  );
}
