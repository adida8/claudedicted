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
  "cl-iconbutton-styles",
  `
  .cl-iconbtn {
    --_size: 2.75rem;
    width: var(--_size); height: var(--_size);
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: var(--radius-pill);
    border: 2px solid transparent;
    cursor: pointer; background: transparent; color: var(--ink-800);
    transition: background-color var(--dur-base) var(--ease-out),
                color var(--dur-base) var(--ease-out),
                transform var(--dur-fast) var(--ease-out),
                box-shadow var(--dur-base) var(--ease-out);
  }
  .cl-iconbtn svg { width: 1.3em; height: 1.3em; }
  .cl-iconbtn--sm { --_size: 2.1rem; }
  .cl-iconbtn--lg { --_size: 3.25rem; }
  .cl-iconbtn:focus-visible { outline: 2.5px solid var(--focus-ring); outline-offset: 2px; }

  .cl-iconbtn--soft { background: var(--clay-50); color: var(--brand-press); }
  .cl-iconbtn--soft:hover { background: var(--clay-100); transform: translateY(-1px); }
  .cl-iconbtn--soft:active { transform: scale(0.92); }

  .cl-iconbtn--ghost:hover { background: var(--cream-200); }
  .cl-iconbtn--ghost:active { transform: scale(0.92); }

  .cl-iconbtn--sticker { background: var(--cream-50); color: var(--ink-900); border-color: var(--ink-900); box-shadow: var(--shadow-ink-sm); }
  .cl-iconbtn--sticker:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-ink); }
  .cl-iconbtn--sticker:active { transform: translate(2px,2px); box-shadow: 0 0 0 var(--ink-900); }

  .cl-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
`
);

/** Square-ish circular icon-only button. Always pass an `aria-label`. */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  className = "",
  ...rest
}) {
  const cls = [
    "cl-iconbtn",
    `cl-iconbtn--${variant}`,
    size !== "md" ? `cl-iconbtn--${size}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
