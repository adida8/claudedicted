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
  "cl-avatar-styles",
  `
  .cl-avatar {
    --_size: 2.75rem;
    width: var(--_size); height: var(--_size); flex: none;
    border-radius: 50%; position: relative; display: inline-grid; place-items: center;
    font-family: var(--font-display); font-weight: var(--weight-extrabold);
    color: var(--cream-50); background: var(--clay-500);
    overflow: visible; user-select: none;
  }
  .cl-avatar__img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
  .cl-avatar--xs { --_size: 1.75rem; font-size: 0.7rem; }
  .cl-avatar--sm { --_size: 2.25rem; font-size: 0.85rem; }
  .cl-avatar--md { --_size: 2.75rem; font-size: 1rem; }
  .cl-avatar--lg { --_size: 3.75rem; font-size: 1.4rem; }
  .cl-avatar--xl { --_size: 5rem;    font-size: 1.9rem; }
  .cl-avatar--ring { box-shadow: 0 0 0 2.5px var(--cream-50), 0 0 0 5px var(--brand); }
  .cl-avatar--ink  { box-shadow: 0 0 0 2.5px var(--ink-900); }
  .cl-avatar__spark { position: absolute; right: -4px; top: -4px; width: 42%; height: 42%; }
`
);

const PALETTE = ["var(--clay-500)", "var(--pine-500)", "var(--clay-700)", "var(--honey-500)"];
function initialsOf(name = "") {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || "?";
}

/** Round avatar — image, or auto initials with a warm fill. */
export function Avatar({ src, name = "", size = "md", ring, spark = false, sparkSrc = "assets/spark.svg", className = "", ...rest }) {
  const ringClass = ring === "clay" ? "cl-avatar--ring" : ring === "ink" ? "cl-avatar--ink" : "";
  const bg = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  return (
    <span
      className={["cl-avatar", `cl-avatar--${size}`, ringClass, className].filter(Boolean).join(" ")}
      style={!src ? { background: bg } : undefined}
      title={name || undefined}
      {...rest}
    >
      {src ? <img className="cl-avatar__img" src={src} alt={name} /> : initialsOf(name)}
      {spark && <img className="cl-avatar__spark" src={sparkSrc} alt="" />}
    </span>
  );
}
