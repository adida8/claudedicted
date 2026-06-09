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
  "cl-input-styles",
  `
  .cl-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-body); }
  .cl-field__label { font-size: 0.875rem; font-weight: var(--weight-semibold); color: var(--text-strong); }
  .cl-field__req { color: var(--brand); }
  .cl-input-wrap { position: relative; display: flex; align-items: center; }
  .cl-input-wrap__icon { position: absolute; left: 0.85rem; display: inline-flex; color: var(--text-muted); pointer-events: none; }
  .cl-input-wrap__icon svg { width: 1.15rem; height: 1.15rem; }
  .cl-input {
    width: 100%; font-family: var(--font-body); font-size: 1rem; color: var(--text-body);
    background: var(--cream-50);
    border: 1.5px solid var(--border-strong);
    border-radius: var(--radius-md);
    padding: 0.7rem 0.9rem; line-height: 1.4;
    transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background-color var(--dur-base);
    -webkit-appearance: none; appearance: none;
  }
  .cl-input::placeholder { color: var(--text-faint); }
  .cl-input--has-icon { padding-left: 2.6rem; }
  .cl-input:hover { border-color: var(--ink-400); }
  .cl-input:focus { outline: none; border-color: var(--brand); box-shadow: 0 0 0 3px var(--clay-100); background: #fff; }
  textarea.cl-input { resize: vertical; min-height: 6rem; }
  .cl-field--error .cl-input { border-color: var(--berry-500); }
  .cl-field--error .cl-input:focus { box-shadow: 0 0 0 3px var(--berry-100); }
  .cl-field__msg { font-size: 0.8125rem; color: var(--text-muted); }
  .cl-field--error .cl-field__msg { color: var(--berry-500); }
  .cl-input[disabled] { opacity: 0.55; cursor: not-allowed; background: var(--cream-200); }
`
);

/** Text input / textarea with label, hint, error, and optional leading icon. */
export function Input({
  label,
  hint,
  error,
  icon = null,
  multiline = false,
  required = false,
  id,
  className = "",
  ...rest
}) {
  const fid = id || (label ? "cl-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const Field = multiline ? "textarea" : "input";
  return (
    <div className={["cl-field", error ? "cl-field--error" : "", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="cl-field__label" htmlFor={fid}>
          {label} {required && <span className="cl-field__req">*</span>}
        </label>
      )}
      <div className="cl-input-wrap">
        {icon && !multiline && <span className="cl-input-wrap__icon">{icon}</span>}
        <Field
          id={fid}
          className={["cl-input", icon && !multiline ? "cl-input--has-icon" : ""].filter(Boolean).join(" ")}
          aria-invalid={!!error}
          {...rest}
        />
      </div>
      {(error || hint) && <span className="cl-field__msg">{error || hint}</span>}
    </div>
  );
}
