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
  "cl-tabs-styles",
  `
  .cl-tabs { display: flex; gap: 0.35rem; font-family: var(--font-body); border-bottom: 2px solid var(--cream-300); }
  .cl-tab {
    appearance: none; background: none; border: none; cursor: pointer;
    font-family: var(--font-body); font-weight: var(--weight-semibold); font-size: 0.95rem;
    color: var(--text-muted); padding: 0.65rem 0.9rem; position: relative;
    border-radius: var(--radius-sm) var(--radius-sm) 0 0; margin-bottom: -2px;
    display: inline-flex; align-items: center; gap: 0.45rem;
    transition: color var(--dur-base) var(--ease-out), background-color var(--dur-base);
  }
  .cl-tab:hover { color: var(--text-strong); background: var(--cream-200); }
  .cl-tab__bar { position: absolute; left: 0.6rem; right: 0.6rem; bottom: 0; height: 3px; border-radius: 3px 3px 0 0; background: var(--brand); transform: scaleX(0); transition: transform var(--dur-base) var(--ease-out); }
  .cl-tab--active { color: var(--text-strong); }
  .cl-tab--active .cl-tab__bar { transform: scaleX(1); }
  .cl-tab__count { font-family: var(--font-mono); font-size: 0.7rem; background: var(--cream-300); color: var(--ink-700); border-radius: var(--radius-pill); padding: 0.05rem 0.4rem; }
  .cl-tab--active .cl-tab__count { background: var(--clay-100); color: var(--clay-800); }
  .cl-tab:focus-visible { outline: 2.5px solid var(--focus-ring); outline-offset: -2px; }
  .cl-tabs--pill { border: none; gap: 0.4rem; }
  .cl-tabs--pill .cl-tab { border-radius: var(--radius-pill); margin: 0; padding: 0.5rem 1rem; }
  .cl-tabs--pill .cl-tab__bar { display: none; }
  .cl-tabs--pill .cl-tab--active { background: var(--ink-900); color: var(--cream-50); }
`
);

/** Tab strip — underline (default) or pill. Controlled or uncontrolled. */
export function Tabs({ tabs = [], value, defaultValue, onChange, variant = "underline", className = "", ...rest }) {
  const ids = tabs.map((t) => (typeof t === "string" ? t : t.id));
  const [internal, setInternal] = React.useState(defaultValue ?? ids[0]);
  const active = value !== undefined ? value : internal;
  const select = (id) => { if (value === undefined) setInternal(id); onChange && onChange(id); };
  return (
    <div className={["cl-tabs", variant === "pill" ? "cl-tabs--pill" : "", className].filter(Boolean).join(" ")} role="tablist" {...rest}>
      {tabs.map((t) => {
        const id = typeof t === "string" ? t : t.id;
        const label = typeof t === "string" ? t : t.label;
        const count = typeof t === "object" ? t.count : undefined;
        const on = id === active;
        return (
          <button key={id} role="tab" aria-selected={on} className={["cl-tab", on ? "cl-tab--active" : ""].filter(Boolean).join(" ")} onClick={() => select(id)}>
            {label}
            {count !== undefined && <span className="cl-tab__count">{count}</span>}
            {variant !== "pill" && <span className="cl-tab__bar" />}
          </button>
        );
      })}
    </div>
  );
}
