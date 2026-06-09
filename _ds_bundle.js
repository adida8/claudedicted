/* @ds-bundle: {"format":3,"namespace":"ClaudictedDesignSystem_62a20b","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"NewsletterSignup","sourcePath":"components/content/NewsletterSignup.jsx"},{"name":"VideoCard","sourcePath":"components/content/VideoCard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"4bd43d2206d5","components/buttons/IconButton.jsx":"d7e408672a01","components/content/Avatar.jsx":"871363ae2701","components/content/Card.jsx":"bfb5d8badd14","components/content/NewsletterSignup.jsx":"eee4323d967c","components/content/VideoCard.jsx":"3178dff89ac9","components/feedback/Badge.jsx":"b8af62583e67","components/feedback/Callout.jsx":"3b97e151da9f","components/feedback/Tag.jsx":"968e86dcd29d","components/forms/Checkbox.jsx":"a09969a0cb6b","components/forms/Input.jsx":"a63dd5faab6d","components/forms/Select.jsx":"3d26e4302e55","components/forms/Switch.jsx":"075ae956f29e","components/navigation/Tabs.jsx":"05d667ab4852","ui_kits/marketing/app.kit.jsx":"4f6e16f24148","ui_kits/marketing/brand.kit.jsx":"82e586e114f9","ui_kits/marketing/builds-section.kit.jsx":"932cabc8d1de","ui_kits/marketing/footer.kit.jsx":"e7fcf3da763d","ui_kits/marketing/hero-sticker.kit.jsx":"5b9880b9ce3f","ui_kits/marketing/nav.kit.jsx":"679551543674","ui_kits/marketing/subscribe-section.kit.jsx":"4cd940bc5e01","ui_kits/marketing/value-section.kit.jsx":"283add376667"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClaudictedDesignSystem_62a20b = window.ClaudictedDesignSystem_62a20b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once (keeps hover/press/focus states real). */
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-button-styles", `
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
`);

/**
 * Claudicted Button — pill by default; "secondary" is the signature
 * ink-outline sticker with a hard offset shadow.
 */
function Button({
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
  const cls = ["cl-btn", `cl-btn--${variant}`, size !== "md" ? `cl-btn--${size}` : "", block ? "cl-btn--block" : "", className].filter(Boolean).join(" ");
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
    className: "cl-btn__icon"
  }, icon), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "cl-btn__icon"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-iconbutton-styles", `
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
`);

/** Square-ish circular icon-only button. Always pass an `aria-label`. */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  className = "",
  ...rest
}) {
  const cls = ["cl-iconbtn", `cl-iconbtn--${variant}`, size !== "md" ? `cl-iconbtn--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-avatar-styles", `
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
`);
const PALETTE = ["var(--clay-500)", "var(--pine-500)", "var(--clay-700)", "var(--honey-500)"];
function initialsOf(name = "") {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase() || "?";
}

/** Round avatar — image, or auto initials with a warm fill. */
function Avatar({
  src,
  name = "",
  size = "md",
  ring,
  spark = false,
  sparkSrc = "assets/spark.svg",
  className = "",
  ...rest
}) {
  const ringClass = ring === "clay" ? "cl-avatar--ring" : ring === "ink" ? "cl-avatar--ink" : "";
  const bg = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cl-avatar", `cl-avatar--${size}`, ringClass, className].filter(Boolean).join(" "),
    style: !src ? {
      background: bg
    } : undefined,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    className: "cl-avatar__img",
    src: src,
    alt: name
  }) : initialsOf(name), spark && /*#__PURE__*/React.createElement("img", {
    className: "cl-avatar__spark",
    src: sparkSrc,
    alt: ""
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-card-styles", `
  .cl-card {
    background: var(--surface-card); border-radius: var(--radius-xl);
    border: 1.5px solid var(--border-subtle); box-shadow: var(--shadow-sm);
    overflow: hidden; transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  }
  .cl-card--pad { padding: 1.5rem; }
  .cl-card--hover:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }

  /* Sticker — signature ink outline + hard offset */
  .cl-card--sticker { border: 2.5px solid var(--ink-900); box-shadow: var(--shadow-ink); }
  .cl-card--sticker.cl-card--hover:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-ink-lg); }

  /* Tinted surfaces */
  .cl-card--clay { background: var(--clay-500); color: var(--text-on-clay); border-color: var(--clay-600); }
  .cl-card--ink  { background: var(--ink-900);  color: var(--text-on-ink);  border-color: var(--ink-800); }
  .cl-card--clay h1,.cl-card--clay h2,.cl-card--clay h3,.cl-card--ink h1,.cl-card--ink h2,.cl-card--ink h3 { color: inherit; }
`);

/** Generic surface card. `sticker` is the signature ink-outline look. */
function Card({
  children,
  variant = "plain",
  padded = true,
  hover = false,
  className = "",
  ...rest
}) {
  const variantClass = variant === "sticker" ? "cl-card--sticker" : variant === "clay" ? "cl-card--clay" : variant === "ink" ? "cl-card--ink" : "";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cl-card", variantClass, padded ? "cl-card--pad" : "", hover ? "cl-card--hover" : "", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsletterSignup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-newsletter-styles", `
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
`);

/** Email capture — the brand's primary conversion unit. */
function NewsletterSignup({
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
  const handle = e => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cl-news", `cl-news--on-${surface}`, className].filter(Boolean).join(" ")
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "cl-news__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "cl-news__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "cl-news__sub"
  }, subtitle), /*#__PURE__*/React.createElement("form", {
    className: "cl-news__form",
    onSubmit: handle
  }, /*#__PURE__*/React.createElement("input", {
    className: "cl-news__input",
    type: "email",
    required: true,
    placeholder: placeholder,
    "aria-label": "Email address"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: `cl-news__btn cl-news__btn--${surface === "card" ? "primary" : "secondary"}`
  }, cta)), note && /*#__PURE__*/React.createElement("p", {
    className: "cl-news__note"
  }, note));
}
Object.assign(__ds_scope, { NewsletterSignup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsletterSignup.jsx", error: String((e && e.message) || e) }); }

// components/content/VideoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-videocard-styles", `
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
`);

/** YouTube-style video card — the channel's signature content unit. */
function VideoCard({
  thumb,
  title,
  duration,
  meta,
  sparkDots = true,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cl-video", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cl-video__thumb"
  }, thumb ? /*#__PURE__*/React.createElement("img", {
    className: "cl-video__img",
    src: thumb,
    alt: title
  }) : /*#__PURE__*/React.createElement("div", {
    className: "cl-video__fallback"
  }, sparkDots && /*#__PURE__*/React.createElement("div", {
    className: "cl-video__dots"
  })), /*#__PURE__*/React.createElement("span", {
    className: "cl-video__play"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 5v14l11-7z"
  }))), duration && /*#__PURE__*/React.createElement("span", {
    className: "cl-video__dur"
  }, duration)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "cl-video__title"
  }, title), meta && /*#__PURE__*/React.createElement("p", {
    className: "cl-video__meta"
  }, meta)));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VideoCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-badge-styles", `
  .cl-badge {
    display: inline-flex; align-items: center; gap: 0.35em;
    font-family: var(--font-body); font-weight: var(--weight-bold);
    font-size: 0.8125rem; line-height: 1; letter-spacing: 0.01em;
    padding: 0.4em 0.7em; border-radius: var(--radius-pill);
    border: 1.5px solid transparent; white-space: nowrap;
  }
  .cl-badge--mono { font-family: var(--font-mono); font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.6875rem; }
  .cl-badge__dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: currentColor; }

  .cl-badge--clay    { background: var(--clay-100);  color: var(--clay-800); }
  .cl-badge--pine    { background: var(--pine-100);  color: var(--pine-700); }
  .cl-badge--honey   { background: var(--honey-100); color: #835c12; }
  .cl-badge--berry   { background: var(--berry-100); color: #7e2530; }
  .cl-badge--neutral { background: var(--cream-300); color: var(--ink-700); }

  .cl-badge--solid-clay  { background: var(--brand);  color: var(--text-on-clay); }
  .cl-badge--solid-pine  { background: var(--accent); color: var(--text-on-pine); }
  .cl-badge--solid-ink   { background: var(--ink-900); color: var(--cream-100); }
`);

/** Small status / category pill. */
function Badge({
  children,
  variant = "clay",
  mono = false,
  dot = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cl-badge", `cl-badge--${variant}`, mono ? "cl-badge--mono" : "", className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "cl-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-callout-styles", `
  .cl-callout {
    display: flex; gap: 0.85rem; font-family: var(--font-body);
    padding: 1rem 1.15rem; border-radius: var(--radius-lg);
    border: 1.5px solid var(--border-strong); background: var(--cream-50);
    color: var(--text-body); line-height: 1.5;
  }
  .cl-callout__icon { flex: none; width: 1.4rem; height: 1.4rem; margin-top: 0.05rem; display:inline-flex; }
  .cl-callout__icon svg, .cl-callout__icon img { width: 100%; height: 100%; }
  .cl-callout__body { font-size: 0.95rem; }
  .cl-callout__title { font-family: var(--font-display); font-weight: var(--weight-bold); font-size: 1.05rem; color: var(--text-strong); margin: 0 0 0.2rem; }
  .cl-callout p { margin: 0; }

  .cl-callout--tip     { background: var(--clay-50);  border-color: var(--clay-200);  color: var(--clay-900); }
  .cl-callout--tip .cl-callout__icon { color: var(--brand); }
  .cl-callout--note    { background: var(--pine-50);  border-color: var(--pine-200);  color: var(--pine-700); }
  .cl-callout--note .cl-callout__icon { color: var(--accent); }
  .cl-callout--warning { background: var(--honey-100); border-color: #e7c878; color: #6f4e0f; }
  .cl-callout--warning .cl-callout__icon { color: var(--honey-500); }
`);
const ICONS = {
  tip: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"
  })),
  note: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  }))
};

/** Inline note box: tip (clay), note (pine), or warning (honey). */
function Callout({
  children,
  variant = "tip",
  title,
  icon,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cl-callout", `cl-callout--${variant}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "cl-callout__icon"
  }, icon || ICONS[variant]), /*#__PURE__*/React.createElement("div", {
    className: "cl-callout__body"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "cl-callout__title"
  }, title), typeof children === "string" ? /*#__PURE__*/React.createElement("p", null, children) : children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-tag-styles", `
  .cl-tag {
    display: inline-flex; align-items: center; gap: 0.4em;
    font-family: var(--font-mono); font-weight: 500; font-size: 0.75rem;
    letter-spacing: 0.04em; color: var(--ink-800);
    background: var(--cream-50); border: 1.5px solid var(--border-strong);
    padding: 0.32em 0.7em; border-radius: var(--radius-sm); white-space: nowrap;
    transition: border-color var(--dur-base), background-color var(--dur-base);
  }
  .cl-tag--clickable { cursor: pointer; }
  .cl-tag--clickable:hover { border-color: var(--brand); background: var(--clay-50); }
  .cl-tag--active { background: var(--ink-900); color: var(--cream-100); border-color: var(--ink-900); }
  .cl-tag__x {
    display: inline-flex; align-items: center; justify-content: center;
    width: 1.05em; height: 1.05em; border-radius: 50%; margin-right: -0.2em;
    background: transparent; border: none; cursor: pointer; color: inherit; padding: 0;
  }
  .cl-tag__x:hover { background: rgba(0,0,0,0.1); }
  .cl-tag__hash { color: var(--brand); }
`);

/** Category chip — mono, with optional `#`, active state, or remove button. */
function Tag({
  children,
  hash = false,
  active = false,
  onRemove,
  onClick,
  className = "",
  ...rest
}) {
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["cl-tag", active ? "cl-tag--active" : "", clickable ? "cl-tag--clickable" : "", className].filter(Boolean).join(" "),
    onClick: onClick
  }, rest), hash && /*#__PURE__*/React.createElement("span", {
    className: "cl-tag__hash"
  }, "#"), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cl-tag__x",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-checkbox-styles", `
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
`);

/** Checkbox with label. Controlled via `checked` or uncontrolled. */
function Checkbox({
  label,
  id,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["cl-check", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cl-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), (label || children) && /*#__PURE__*/React.createElement("span", {
    className: "cl-check__text"
  }, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-input-styles", `
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
`);

/** Text input / textarea with label, hint, error, and optional leading icon. */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: ["cl-field", error ? "cl-field--error" : "", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cl-field__label",
    htmlFor: fid
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    className: "cl-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "cl-input-wrap"
  }, icon && !multiline && /*#__PURE__*/React.createElement("span", {
    className: "cl-input-wrap__icon"
  }, icon), /*#__PURE__*/React.createElement(Field, _extends({
    id: fid,
    className: ["cl-input", icon && !multiline ? "cl-input--has-icon" : ""].filter(Boolean).join(" "),
    "aria-invalid": !!error
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "cl-field__msg"
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-select-styles", `
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
`);

/** Styled native select with a chevron. Pass `options` or `children`. */
function Select({
  label,
  options,
  children,
  id,
  className = "",
  ...rest
}) {
  const fid = id || (label ? "cl-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["cl-select-wrap", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "cl-select-wrap__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cl-select-inner"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "cl-select"
  }, rest), options ? options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "cl-select-chevron"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-switch-styles", `
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
`);

/** On/off toggle switch with optional label. */
function Switch({
  label,
  id,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["cl-switch", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cl-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-switch__thumb"
  })), (label || children) && /*#__PURE__*/React.createElement("span", {
    className: "cl-switch__text"
  }, label || children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function injectOnce(id, css) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
injectOnce("cl-tabs-styles", `
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
`);

/** Tab strip — underline (default) or pill. Controlled or uncontrolled. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  className = "",
  ...rest
}) {
  const ids = tabs.map(t => typeof t === "string" ? t : t.id);
  const [internal, setInternal] = React.useState(defaultValue ?? ids[0]);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["cl-tabs", variant === "pill" ? "cl-tabs--pill" : "", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), tabs.map(t => {
    const id = typeof t === "string" ? t : t.id;
    const label = typeof t === "string" ? t : t.label;
    const count = typeof t === "object" ? t.count : undefined;
    const on = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      className: ["cl-tab", on ? "cl-tab--active" : ""].filter(Boolean).join(" "),
      onClick: () => select(id)
    }, label, count !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "cl-tab__count"
    }, count), variant !== "pill" && /*#__PURE__*/React.createElement("span", {
      className: "cl-tab__bar"
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/app.kit.jsx
try { (() => {
/* Marketing kit — app shell, composes the page. */
function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(HeroSticker, null), /*#__PURE__*/React.createElement(ValueSection, null), /*#__PURE__*/React.createElement(BuildsSection, null), /*#__PURE__*/React.createElement(SubscribeSection, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/app.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/brand.kit.jsx
try { (() => {
/* Claudicted marketing kit — shared brand bits. Attaches to window. */
const SPARK = "../../assets/spark.svg";

/** The wordmark with the spark as the i-dot. `size` is the font-size in px. */
function Wordmark({
  size = 30,
  color = "var(--ink-900)",
  onLight = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      color,
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "baseline",
      fontSize: size,
      userSelect: "none",
      whiteSpace: "nowrap"
    }
  }, "Claud", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, "\u0131", /*#__PURE__*/React.createElement("img", {
    src: SPARK,
    alt: "",
    style: {
      position: "absolute",
      left: "50%",
      top: "-0.32em",
      width: "0.30em",
      height: "0.30em",
      transform: "translateX(-50%) rotate(-8deg)",
      filter: onLight ? "none" : "none"
    }
  })), "cted");
}

/** Mono eyebrow label. */
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--brand-press)",
      ...style
    }
  }, children);
}

/** A standalone spark image. */
function Spark({
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: SPARK,
    alt: "",
    style: {
      width: size,
      height: size,
      ...style
    }
  });
}
Object.assign(window, {
  Wordmark,
  Eyebrow,
  Spark,
  CL_SPARK: SPARK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/brand.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/builds-section.kit.jsx
try { (() => {
/* Marketing kit — "Latest builds" video grid with filter tabs. */
const CL_VIDEOS = [{
  title: "I built a CRM in a weekend (no code)",
  duration: "12:04",
  meta: "8.2K views · 3 days ago",
  cat: "nocode",
  thumb: true
}, {
  title: "The 5-minute automation that saved my week",
  duration: "5:31",
  meta: "14K views · 1 week ago",
  cat: "auto"
}, {
  title: "Shipping an AI app with zero backend",
  duration: "18:47",
  meta: "22K views · 2 weeks ago",
  cat: "ai",
  thumb: true
}, {
  title: "I let AI redesign my whole site. Here's what broke.",
  duration: "9:12",
  meta: "11K views · 3 weeks ago",
  cat: "ai"
}, {
  title: "From spreadsheet to real app in one sitting",
  duration: "15:20",
  meta: "6.9K views · 1 month ago",
  cat: "nocode",
  thumb: true
}, {
  title: "My exact weekend-build setup (steal it)",
  duration: "7:48",
  meta: "31K views · 1 month ago",
  cat: "auto"
}];
function BuildsSection() {
  const {
    VideoCard,
    Tabs,
    Button
  } = window.ClaudictedDesignSystem_62a20b;
  const [filter, setFilter] = React.useState("all");
  const shown = filter === "all" ? CL_VIDEOS : CL_VIDEOS.filter(v => v.cat === filter);
  const count = c => CL_VIDEOS.filter(v => v.cat === c).length;
  return /*#__PURE__*/React.createElement("section", {
    id: "videos",
    style: {
      background: "var(--cream-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 14
  }), " Watch how it's made"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      letterSpacing: "-0.02em",
      fontSize: "clamp(30px,4vw,46px)",
      color: "var(--ink-900)",
      margin: "10px 0 0"
    }
  }, "Latest builds")), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: filter,
    onChange: setFilter,
    tabs: [{
      id: "all",
      label: "All",
      count: CL_VIDEOS.length
    }, {
      id: "ai",
      label: "AI apps",
      count: count("ai")
    }, {
      id: "auto",
      label: "Automations",
      count: count("auto")
    }, {
      id: "nocode",
      label: "No-code",
      count: count("nocode")
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px 24px"
    },
    className: "cl-video-grid"
  }, shown.map(v => /*#__PURE__*/React.createElement(VideoCard, {
    key: v.title,
    title: v.title,
    duration: v.duration,
    meta: v.meta,
    thumb: v.thumb ? "../../assets/mascot-placeholder.png" : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "#"
  }, "Browse the whole channel"))));
}
Object.assign(window, {
  BuildsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/builds-section.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/footer.kit.jsx
try { (() => {
/* Marketing kit — footer. */
function Footer() {
  const cols = [{
    h: "Claudicted",
    links: ["The weekly build", "Build logs", "Start here"]
  }, {
    h: "Watch",
    links: ["YouTube", "AI apps", "Automations", "No-code"]
  }, {
    h: "Say hi",
    links: ["Twitter / X", "Email", "RSS"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--cream-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 24px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 32
    },
    className: "cl-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26,
    color: "var(--cream-50)",
    onLight: false
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--cream-300)",
      maxWidth: "30ch",
      margin: "14px 0 0"
    }
  }, "One real build, every Sunday. Anyone can build this \u2014 including you.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--clay-300)",
      margin: "0 0 14px"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 9
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--cream-300)",
      textDecoration: "none",
      fontSize: 15
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--clay-300)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--cream-300)"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1.5px solid var(--ink-700)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontSize: 13.5,
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Claudicted. Made on a weekend."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--ink-400)",
      textDecoration: "none"
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--ink-400)",
      textDecoration: "none"
    }
  }, "Terms")))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/footer.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/hero-sticker.kit.jsx
try { (() => {
/* Hero direction A — "Sticker": warm split layout, mascot in an ink frame. */
function HeroSticker() {
  const {
    Button,
    Badge,
    Avatar
  } = window.ClaudictedDesignSystem_62a20b;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream-100)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 24px 84px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    },
    className: "cl-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 14
  }), " Build log #14 is live"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      fontSize: "clamp(40px, 5.4vw, 68px)",
      lineHeight: 1.02,
      color: "var(--ink-900)",
      margin: "16px 0 18px",
      textWrap: "balance"
    }
  }, "You don't need permission to build."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: "44ch",
      margin: "0 0 28px"
    }
  }, "Just a weekend and a spark. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "Claudicted"), " is one real project, built start to finish, every Sunday \u2014 plus the videos that show you exactly how."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#subscribe"
  }, "Get the weekly build"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "#videos",
    iconRight: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    }))
  }, "Watch the channel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, ["Ada Lovelace", "Sam Lee", "Jo Park", "Max R"].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      marginLeft: i ? -10 : 0,
      boxShadow: "0 0 0 2.5px var(--cream-100)",
      borderRadius: "50%"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "9,400+"), " builders get it every week"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      justifySelf: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-18px",
      borderRadius: "var(--radius-2xl)",
      background: "url('../../assets/halftone-clay.png')",
      backgroundSize: "110px",
      opacity: 0.5,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: "min(420px, 78vw)",
      aspectRatio: "1/1",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      border: "3px solid var(--ink-900)",
      boxShadow: "var(--shadow-ink-lg)",
      background: "var(--cream-50)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-placeholder.png",
    alt: "Claudicted mascot \u2014 character art goes here",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      zIndex: 2,
      bottom: -14,
      left: -22,
      transform: "rotate(-5deg)",
      background: "var(--cream-50)",
      border: "2.5px solid var(--ink-900)",
      boxShadow: "var(--shadow-ink)",
      borderRadius: "var(--radius-lg)",
      padding: "10px 14px",
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 15,
      color: "var(--ink-900)"
    }
  }, "Anyone can build this")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      zIndex: 2,
      top: -16,
      right: -10,
      transform: "rotate(7deg)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solid-clay",
    style: {
      border: "2px solid var(--ink-900)",
      boxShadow: "var(--shadow-ink-sm)"
    }
  }, "New episode")))));
}
Object.assign(window, {
  HeroSticker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/hero-sticker.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/nav.kit.jsx
try { (() => {
/* Marketing kit — top navigation bar. */
function Nav() {
  const {
    Button
  } = window.ClaudictedDesignSystem_62a20b;
  const [open, setOpen] = React.useState(false);
  const links = ["Build logs", "Videos", "About"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "color-mix(in srgb, var(--cream-100) 88%, transparent)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1.5px solid var(--cream-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      marginLeft: 12
    },
    className: "cl-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text-body)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      padding: "8px 12px",
      borderRadius: "var(--radius-md)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--cream-200)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#subscribe"
  }, "Subscribe"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/nav.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/subscribe-section.kit.jsx
try { (() => {
/* Marketing kit — clay subscribe band. */
function SubscribeSection() {
  const {
    NewsletterSignup
  } = window.ClaudictedDesignSystem_62a20b;
  return /*#__PURE__*/React.createElement("section", {
    id: "subscribe",
    style: {
      background: "var(--clay-500)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "url('../../assets/halftone-cream.png')",
      backgroundSize: "120px",
      opacity: 0.2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 980,
      margin: "0 auto",
      padding: "80px 24px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 48,
      alignItems: "center"
    },
    className: "cl-sub-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--cream-100)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 14
  }), " Join the build"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      letterSpacing: "-0.025em",
      fontSize: "clamp(32px,4.4vw,52px)",
      lineHeight: 1.02,
      color: "var(--cream-50)",
      margin: "14px 0 0",
      textWrap: "balance"
    }
  }, "Go break something.", /*#__PURE__*/React.createElement("br", null), "Then ship it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--clay-50)",
      maxWidth: "38ch",
      margin: "16px 0 0"
    }
  }, "The weekly build lands every Sunday. See you next drop.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream-50)",
      borderRadius: "var(--radius-xl)",
      padding: 26,
      border: "2.5px solid var(--ink-900)",
      boxShadow: "var(--shadow-ink-lg)"
    }
  }, /*#__PURE__*/React.createElement(NewsletterSignup, {
    surface: "card",
    eyebrow: null,
    title: "One build. Every Sunday.",
    subtitle: "No spam, ever. Unsubscribe in one click.",
    cta: "Get the weekly build",
    note: "Free forever."
  }))));
}
Object.assign(window, {
  SubscribeSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/subscribe-section.kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/value-section.kit.jsx
try { (() => {
/* Marketing kit — "What you get" three-up sticker cards. */
const CL_VALUES = [{
  spark: true,
  title: "One build, every Sunday",
  body: "A real project taken from blank screen to working thing — with the messy middle left in."
}, {
  spark: true,
  title: "The exact steps",
  body: "Copy the setup, the prompts, and the gotchas. No \"draw the rest of the owl.\""
}, {
  spark: true,
  title: "Zero gatekeeping",
  body: "Total beginner or daily shipper — it's written so anyone can follow along and actually finish."
}];
function ValueSection() {
  const {
    Card
  } = window.ClaudictedDesignSystem_62a20b;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "What you get"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      letterSpacing: "-0.02em",
      fontSize: "clamp(30px,4vw,46px)",
      color: "var(--ink-900)",
      margin: "10px 0 0"
    }
  }, "A finished thing, not just inspiration.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    },
    className: "cl-value-grid"
  }, CL_VALUES.map((v, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "sticker",
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      background: "var(--clay-100)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--ink-900)",
      margin: "0 0 8px"
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: 0
    }
  }, v.body))))));
}
Object.assign(window, {
  ValueSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/value-section.kit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NewsletterSignup = __ds_scope.NewsletterSignup;

__ds_ns.VideoCard = __ds_scope.VideoCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
