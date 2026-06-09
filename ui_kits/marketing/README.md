# Marketing site — UI kit

The Claudicted landing page, click-through. Composes the design-system
primitives (`Button`, `Card`, `Badge`, `Tabs`, `VideoCard`, `NewsletterSignup`,
`Avatar`) on top of the brand tokens.

## Run it
Open `index.html`. It loads React + the compiled `_ds_bundle.js`, then the kit's
own babel-transpiled section files.

## Hero
The page leads with the **sticker hero** (`HeroSticker.jsx`) — warm cream split
layout, mascot in an ink frame with floating sticker badges. Friendly,
editorial, content-forward. This is the canonical, mascot-forward direction.

## Files
Section files use a `.kit.jsx` suffix (lower-case stem) **on purpose** — it keeps
the design-system compiler from treating them as publishable library components.
They're demo-only and attach their functions to `window`.
- `index.html` — shell: loads deps, the bundle, every section, mounts `<App/>`.
- `app.kit.jsx` — composition.
- `brand.kit.jsx` — `Wordmark`, `Eyebrow`, `Spark` helpers (shared).
- `nav.kit.jsx` — sticky header with the subscribe CTA.
- `hero-sticker.kit.jsx` — the hero.
- `value-section.kit.jsx` — three-up "what you get" sticker cards.
- `builds-section.kit.jsx` — "Latest builds" video grid with pill filter tabs.
- `subscribe-section.kit.jsx` — clay subscribe band.
- `footer.kit.jsx` — dark footer.

## Notes / placeholders
- Every mascot image points at `../../assets/mascot-placeholder.png`. Swap in the
  real character art once supplied.
