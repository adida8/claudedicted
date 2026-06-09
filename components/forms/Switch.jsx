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
  "cl-switch-styles",
  `
  .cl-switch { display: inline-flex; align-items: center; gap: 0.65rem; font-family: var(--font-body); cursor: pointer; color: var(--text-body); }
  .cl-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
  .cl-switch__track {
    flex: none; width: 2.9rem; height: 1.65rem; border-radius: var(--radius-pill);
    background: var(--cream-400); border: 2px solid var(--ink-700);
    position: relative; transition: background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
  }
  .cl-switch__thumb {
    position: absolute; top: 50%; left: 0.18rem; transform: translateY(-50%);
    width: 1.15rem; height: 1.15rem; border-radius: 50%; background: var(--ink-900);
    transition: left var(--dur-base) var(--ease-bounce), background-color var(--dur-base);
  }
  .cl-switch input:checked + .cl-switch__track { background: var(--brand); border-color: var(--brand-press); }
  .cl-switch input:checked + .cl-switch__track .cl-switch__thumb { left: calc(100% - 1.33rem); background: var(--cream-50); }
  .cl-switch input:focus-visible + .cl-switch__track { outline: 2.5px solid var(--focus-ring); outline-offset: 2px; }
  .cl-switch input:disabled ~ * { opacity: 0.5; }
  .cl-switch__text { font-size: 0.95rem; }
`
);

/** On/off toggle switch with optional label. */
export function Switch({ label, id, className = "", children, ...rest }) {
  return (
    <label className={["cl-switch", className].filter(Boolean).join(" ")} htmlFor={id}>
      <input type="checkbox" role="switch" id={id} {...rest} />
      <span className="cl-switch__track"><span className="cl-switch__thumb" /></span>
      {(label || children) && <span className="cl-switch__text">{label || children}</span>}
    </label>
  );
}
