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
  "cl-videocard-styles",
  `
  .cl-video { display: flex; flex-direction: column; gap: 0.75rem; font-family: var(--font-body); cursor: pointer; width: 100%; }
  .cl-video__thumb {
    position: relative; aspect-ratio: 16/9; border-radius: var(--radius-lg);
    overflow: hidden; background: var(--ink-900);
    border: 2.5px solid var(--ink-900); box-shadow: var(--shadow-ink-sm);
    transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .cl-video:hover .cl-video__thumb { transform: translate(-1.5px,-1.5px); box-shadow: var(--shadow-ink); }
  .cl-video__img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .cl-video__fallback { width:100%; height:100%; background:
      radial-gradient(circle at 30% 30%, var(--clay-400), var(--clay-600)); }
  .cl-video__dots { position:absolute; inset:0; background:url("assets/halftone-cream.png"); background-size:90px; opacity:.18; }
  .cl-video__play {
    position: absolute; inset: 0; margin: auto; width: 3.5rem; height: 3.5rem;
    display: grid; place-items: center; border-radius: 50%;
    background: var(--cream-50); color: var(--ink-900); box-shadow: var(--shadow-md);
    transition: transform var(--dur-base) var(--ease-bounce), background-color var(--dur-base);
  }
  .cl-video:hover .cl-video__play { transform: scale(1.12); background: var(--clay-500); color: var(--cream-50); }
  .cl-video__play svg { width: 1.5rem; height: 1.5rem; margin-left: 2px; }
  .cl-video__dur {
    position: absolute; right: 0.6rem; bottom: 0.6rem;
    font-family: var(--font-mono); font-size: 0.75rem; font-weight: 500;
    background: rgba(34,28,25,0.88); color: var(--cream-50);
    padding: 0.15rem 0.45rem; border-radius: var(--radius-xs);
  }
  .cl-video__title { font-family: var(--font-display); font-weight: var(--weight-bold); font-size: 1.0625rem; color: var(--text-strong); line-height: 1.25; margin: 0; }
  .cl-video:hover .cl-video__title { color: var(--brand-press); }
  .cl-video__meta { font-size: 0.85rem; color: var(--text-muted); margin: 0.15rem 0 0; }
`
);

/** YouTube-style video card — the channel's signature content unit. */
export function VideoCard({ thumb, title, duration, meta, sparkDots = true, className = "", ...rest }) {
  return (
    <div className={["cl-video", className].filter(Boolean).join(" ")} {...rest}>
      <div className="cl-video__thumb">
        {thumb ? (
          <img className="cl-video__img" src={thumb} alt={title} />
        ) : (
          <div className="cl-video__fallback">{sparkDots && <div className="cl-video__dots" />}</div>
        )}
        <span className="cl-video__play">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l11-7z" /></svg>
        </span>
        {duration && <span className="cl-video__dur">{duration}</span>}
      </div>
      <div>
        <p className="cl-video__title">{title}</p>
        {meta && <p className="cl-video__meta">{meta}</p>}
      </div>
    </div>
  );
}
