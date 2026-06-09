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
  "cl-newsletter-styles",
  `
  .cl-news { font-family: var(--font-body); }
  .cl-news__eyebrow { font-family: var(--font-mono); font-weight: 500; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--brand-press); margin: 0 0 0.5rem; }
  .cl-news--on-clay .cl-news__eyebrow { color: var(--cream-100); }
  .cl-news--on-ink  .cl-news__eyebrow { color: var(--clay-300); }
  .cl-news__title { font-family: var(--font-display); font-weight: var(--weight-black); letter-spacing: -0.02em; font-size: 1.75rem; line-height: 1.1; margin: 0 0 0.4rem; color: var(--text-strong); }
  .cl-news__sub { font-size: 1rem; color: var(--text-muted); margin: 0 0 1.1rem; max-width: 46ch; }
  .cl-news--on-clay .cl-news__title, .cl-news--on-ink .cl-news__title { color: var(--cream-50); }
  .cl-news--on-clay .cl-news__sub { color: var(--clay-50); }
  .cl-news--on-ink  .cl-news__sub { color: var(--cream-300); }
  .cl-news__form { display: flex; gap: 0.6rem; align-items: stretch; flex-wrap: wrap; }
  .cl-news__input {
    flex: 1 1 14rem; min-width: 0; font-family: var(--font-body); font-size: 1rem;
    background: var(--cream-50); color: var(--text-body);
    border: 2px solid var(--ink-900); border-radius: var(--radius-pill);
    padding: 0.7rem 1.1rem;
  }
  .cl-news__input:focus { outline: none; box-shadow: 0 0 0 3px var(--clay-200); }
  .cl-news__btn {
    font-family: var(--font-body); font-weight: var(--weight-bold); font-size: 1rem; line-height: 1;
    cursor: pointer; white-space: nowrap; padding: 0.7em 1.25em; border-radius: var(--radius-pill);
    border: 2.5px solid transparent;
    transition: transform var(--dur-fast) var(--ease-out), background-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .cl-news__btn--primary { background: var(--brand); color: var(--text-on-clay); border-color: var(--brand); }
  .cl-news__btn--primary:hover { background: var(--brand-hover); border-color: var(--brand-hover); transform: translateY(-1.5px); box-shadow: var(--shadow-clay); }
  .cl-news__btn--primary:active { background: var(--brand-press); transform: translateY(0) scale(0.985); box-shadow: none; }
  .cl-news__btn--secondary { background: var(--cream-50); color: var(--ink-900); border-color: var(--ink-900); box-shadow: var(--shadow-ink-sm); }
  .cl-news__btn--secondary:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-ink); }
  .cl-news__btn--secondary:active { transform: translate(2px,2px); box-shadow: 0 0 0 var(--ink-900); }
  .cl-news__btn:focus-visible { outline: 2.5px solid var(--focus-ring); outline-offset: 2px; }
  .cl-news__note { font-size: 0.8125rem; color: var(--text-faint); margin: 0.7rem 0 0; }
  .cl-news--on-clay .cl-news__note, .cl-news--on-ink .cl-news__note { color: var(--clay-100); }
`
);

/** Email capture — the brand's primary conversion unit. */
export function NewsletterSignup({
  eyebrow = "The weekly build",
  title = "Get one build in your inbox every Sunday.",
  subtitle = "Real projects, start to finish. No experience required — seriously.",
  placeholder = "you@build.com",
  cta = "Get the weekly build",
  note = "Free. Unsubscribe whenever. No spam, ever.",
  onSubmit,
  surface = "card",
  className = "",
  ...rest
}) {
  const handle = (e) => { e.preventDefault(); onSubmit && onSubmit(e); };
  return (
    <div className={["cl-news", `cl-news--on-${surface}`, className].filter(Boolean).join(" ")} {...rest}>
      {eyebrow && <p className="cl-news__eyebrow">{eyebrow}</p>}
      {title && <h3 className="cl-news__title">{title}</h3>}
      {subtitle && <p className="cl-news__sub">{subtitle}</p>}
      <form className="cl-news__form" onSubmit={handle}>
        <input className="cl-news__input" type="email" required placeholder={placeholder} aria-label="Email address" />
        <button type="submit" className={`cl-news__btn cl-news__btn--${surface === "card" ? "primary" : "secondary"}`}>{cta}</button>
      </form>
      {note && <p className="cl-news__note">{note}</p>}
    </div>
  );
}
