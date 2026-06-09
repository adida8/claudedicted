import React from "react";

/* Inject component CSS once (keeps hover/press/focus states real). */
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

injectOnce(
  "cl-button-styles",
  `
  .cl-btn {
    --_pad-y: 0.7em; --_pad-x: 1.25em; --_fs: 1rem;
    font-family: var(--font-body);
    font-weight: var(--weight-bold);
    font-size: var(--_fs);
    line-height: 1;
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
    padding: var(--_pad-y) var(--_pad-x);
    border-radius: var(--radius-pill);
    border: 2.5px solid transparent;
    cursor: pointer;
    text-decoration: none;
    transition: transform var(--dur-fast) var(--ease-out),
                background-color var(--dur-base) var(--ease-out),
                box-shadow var(--dur-base) var(--ease-out),
                color var(--dur-base) var(--ease-out);
    white-space: nowrap;
    -webkit-user-select: none; user-select: none;
  }
  .cl-btn:focus-visible { outline: 2.5px solid var(--focus-ring); outline-offset: 2px; }
  .cl-btn--sm { --_pad-y: 0.5em; --_pad-x: 0.95em; --_fs: 0.875rem; }
  .cl-btn--lg { --_pad-y: 0.85em; --_pad-x: 1.6em; --_fs: 1.125rem; }
  .cl-btn__icon { display: inline-flex; width: 1.15em; height: 1.15em; }
  .cl-btn__icon svg { width: 100%; height: 100%; }

  /* Primary — clay fill */
  .cl-btn--primary { background: var(--brand); color: var(--text-on-clay); border-color: var(--brand); }
  .cl-btn--primary:hover { background: var(--brand-hover); border-color: var(--brand-hover); transform: translateY(-1.5px); box-shadow: var(--shadow-clay); }
  .cl-btn--primary:active { background: var(--brand-press); border-color: var(--brand-press); transform: translateY(0) scale(0.985); box-shadow: none; }

  /* Secondary — signature sticker: ink outline + hard offset shadow */
  .cl-btn--secondary { background: var(--cream-50); color: var(--ink-900); border-color: var(--ink-900); box-shadow: var(--shadow-ink-sm); }
  .cl-btn--secondary:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-ink); background: var(--clay-50); }
  .cl-btn--secondary:active { transform: translate(2px,2px); box-shadow: 0 0 0 var(--ink-900); }

  /* Pine — the single accent, for "watch / subscribe" moments */
  .cl-btn--pine { background: var(--accent); color: var(--text-on-pine); border-color: var(--accent); }
  .cl-btn--pine:hover { background: var(--accent-hover); border-color: var(--accent-hover); transform: translateY(-1.5px); box-shadow: var(--shadow-md); }
  .cl-btn--pine:active { transform: translateY(0) scale(0.985); box-shadow: none; }

  /* Ghost — quiet text button */
  .cl-btn--ghost { background: transparent; color: var(--brand-press); border-color: transparent; }
  .cl-btn--ghost:hover { background: var(--clay-50); }
  .cl-btn--ghost:active { background: var(--clay-100); transform: scale(0.985); }

  .cl-btn[disabled], .cl-btn[aria-disabled="true"] {
    opacity: 0.45; cursor: not-allowed; transform: none !important; box-shadow: none !important; pointer-events: none;
  }
  .cl-btn--block { width: 100%; }
`
);

/**
 * Claudicted Button — pill by default; "secondary" is the signature
 * ink-outline sticker with a hard offset shadow.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  block = false,
  disabled = false,
  href,
  className = "",
  ...rest
}) {
  const cls = [
    "cl-btn",
    `cl-btn--${variant}`,
    size !== "md" ? `cl-btn--${size}` : "",
    block ? "cl-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className="cl-btn__icon">{icon}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="cl-btn__icon">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
