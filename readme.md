# Claudicted — Design System

> **Claudicted** *(Claude + addicted)* is a fun, approachable creator brand for
> people who've caught the bug of building things with AI. It spans a
> **newsletter**, **social content**, and a **YouTube channel** — all under one
> warm, optimistic promise: **anyone can build this.**

The brand's face is a bold, modern **comic-style character** — a friendly,
confident guy cracking open a laptop with a spark of energy above it — drawn
with thick ink outlines, flat cel-shading, and subtle halftone dots. Warm and
human, never corporate, never superhero-cliché. The wordmark sets *Claudicted*
in a bold confident slab serif with the dot of the "i" rendered as a small
clay-orange spark.

This repository is the canonical source of truth for that brand: tokens,
typography, color, assets, reusable UI components, and a marketing-site UI kit.

---

## Sources & provenance

- **Brand brief** — supplied directly by the founder (warm-only palette, comic
  mascot, "Claudicted" serif wordmark with spark dot, "anyone can build this"
  energy).
- **Reference photo** — `uploads/6EB4346A-B0E0-4D86-AAF6-9C1A481D4755.jpeg`,
  the founder's likeness, the basis for the illustrated mascot. **Not** a brand
  asset itself; used only as a drawing reference.
- **No codebase or Figma was provided.** Everything here is built from the brief.

### ⚠️ Open items / substitutions (please confirm)
1. **Mascot art is not included.** I cannot generate the comic illustration.
   `assets/mascot-placeholder.png` and the image-slots in the UI kit mark where
   it goes. **Please supply the character art** (transparent PNG/SVG, head &
   shoulders + a full lockup).
2. **Fonts are loaded from Google Fonts CDN**, not self-hosted binaries
   (`tokens/fonts.css`). Bitter + Hanken Grotesk + JetBrains Mono are close
   matches to the brief's "bold confident serif." If you want the system fully
   offline/portable, send self-hosted `.woff2` files (or confirm the licensed
   wordmark face) and I'll swap them in.

---

## Content fundamentals (voice & tone)

Claudicted talks like an encouraging friend who just figured something out and
can't wait to show you. The through-line is **"anyone can build this"** —
de-mystifying, never gatekeeping.

- **Person:** First-person plural and direct second person. "We built this in a
  weekend — here's how **you** can too." Warm "I" in personal notes from the
  founder; "we" for the brand at large.
- **Tone:** Optimistic, playful, plainspoken. Confident but humble — celebrates
  the messy middle ("it broke twice, then it worked"). Encouraging, not hypey.
- **Casing:** Sentence case everywhere for headings and buttons ("Start
  building", not "Start Building"). **ALL-CAPS only** for short mono eyebrow
  labels (`NEW DROP`, `BUILD LOG #14`). The wordmark *Claudicted* is always
  capitalized as a proper noun.
- **Sentence length:** Short. Punchy. One idea per line. Fragments are fine for
  rhythm.
- **Jargon:** Minimal. Explain the one term that matters, skip the rest. If a
  beginner couldn't follow it, rewrite it.
- **Emoji:** Sparingly and intentionally — a single ⚡ or 🛠️ as a punctuation
  beat, never a row of them. The *spark* glyph is preferred over emoji in brand
  surfaces. Default to **no emoji** in long-form.
- **Numbers/labels:** Mono labels for meta ("EP. 12", "5 MIN READ", "BUILD LOG").

**Voice examples**
- Hero: *"You don't need permission to build. You need a weekend and a spark."*
- Eyebrow: `BUILD LOG #14`
- CTA: *"Get the weekly build"* · *"Watch how it's made"* · *"Steal this setup"*
- Newsletter sign-off: *"Go break something (then fix it). — see you next drop."*
- Reassurance microcopy: *"No experience required. Seriously."*

**Avoid:** corporate speak ("leverage synergies"), fear/FOMO hype, "ninja/rockstar"
clichés, superhero metaphors, and anything that implies building is only for experts.

---

## Visual foundations

**Overall feeling:** warm, hand-made-but-tidy, sticker-book optimism. Balanced
between comic energy and clean editorial restraint — warmth comes from color and
texture, structure comes from generous space and a confident serif.

### Color
- **Warm-only palette.** Clay-orange `#D9694A` leads (primary, CTAs, the spark),
  cream `#FBF6EE` is the page, warm near-black `#221C19` is ink (text + comic
  outlines), and pine-green `#2E5E4E` is the **single** accent (use it rarely —
  links-on-dark, success, a secondary tag). See `tokens/colors.css` for full ramps.
- **No cool grays, no blue, no purple gradients.** Neutrals are warm (tan/clay-tinted).
- Status colors stay warm: honey `#C9912E` for warning/highlight, berry `#B23A48`
  for destructive.
- **Imagery vibe:** warm, sunlit, high-contrast cel-shaded illustration. If photos
  are used, push them warm (golden, slightly desaturated). Never cold or B&W.

### Type
- **Display / wordmark:** Bitter, weights 800–900, tight tracking (`-0.02em`).
  Big, confident, friendly slab serif.
- **Body / UI:** Hanken Grotesk — warm humanist grotesque, 400–700. Comfortable
  reading at 18px.
- **Eyebrows / meta / code:** JetBrains Mono, uppercase, wide tracking (`0.12em`).
- Pairing rule: serif for *what it is*, sans for *how it works*, mono for *labels*.

### Backgrounds & texture
- Default surface is flat **cream**. Sections alternate cream / soft-tan
  (`--cream-200`) / **ink** (dark) / **clay** (full-bleed brand panel).
- **Halftone dots** are the signature texture (`assets/halftone-*.png`) — used at
  low opacity behind hero art, on clay/ink panels, and as a sticker accent. Subtle,
  not busy.
- No photographic backgrounds by default; no glassmorphism; no mesh gradients.
  A *single* soft radial "glow" behind the mascot is allowed (warm clay, low alpha).

### Borders, corners, cards
- **Corners:** friendly and rounded — cards `--radius-lg`/`--radius-xl` (18–26px),
  buttons `--radius-pill` or `--radius-md`, inputs `--radius-md`.
- **Two border languages:**
  1. *Subtle* — 1.5px warm hairline (`--border-subtle`) for quiet UI cards.
  2. *Comic/sticker* — 2.5–3.5px **ink** outline (`--border-ink`) for hero
     elements, badges, and primary stickers. This is the brand's signature.
- **Cards:** cream/white surface, rounded, usually a soft warm shadow
  (`--shadow-md`). "Hero" cards use the **ink offset shadow** (`--shadow-ink`,
  a hard `3px 3px 0` near-black) for that sticker-peeled-off-the-page look.

### Shadows
- Soft warm shadows for depth (`--shadow-sm/md/lg`, tinted with ink not pure black).
- Signature **hard ink offset** (`--shadow-ink*`) for sticker/comic elements —
  pairs with the ink outline. Don't mix soft + hard on the same element.

### Motion
- Friendly and springy but quick. Default `--dur-base` 200ms, `--ease-out` for
  most transitions, `--ease-bounce` for playful pops (sticker hover, spark).
- **Hover:** primary buttons lift 1–2px + deepen color (`--brand-hover`); sticker
  elements nudge toward their ink shadow (translate +1px, shadow shrinks).
- **Press:** shrink slightly (`scale 0.98`) and/or shadow collapses to 0 (sticker
  "pressed down" feel). Color goes to `--brand-press`.
- **Spark:** the ⚡ glyph may do a one-shot twinkle on load; never loop forever.
- Respect `prefers-reduced-motion` — show end-state, drop the animation.

### Layout
- Max content width `--container-max` 1200px; prose `--container-narrow` 760px.
- Generous vertical rhythm; sections breathe. 4px spacing grid (`--space-*`).
- Asymmetry welcome — the mascot often breaks the grid / bleeds off an edge.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) via CDN — clean, rounded, ~2px stroke
  icons that match the warm-but-tidy personality. Loaded in components/kits from
  `https://unpkg.com/lucide@latest`. We render them at `currentColor` so they
  inherit ink/clay/cream from context.
- **Stroke weight:** 2px default, rounded line-caps/joins (Lucide default) — never
  filled icon sets, never duotone.
- **Why Lucide:** no codebase icon set existed; Lucide is the closest CDN match to
  the friendly-but-clean brief. *Flagged as a substitution* — if you adopt a
  specific set, tell me and I'll swap the reference.
- **The spark** (`assets/spark.svg`, a 4-point clay sparkle) is the one bespoke
  brand glyph — used as the "i"-dot in the wordmark, as a bullet, and as a hover
  twinkle. It is **not** an emoji and should be used in its place on brand surfaces.
- **Emoji** are allowed sparingly in casual/social copy (⚡ 🛠️), never as a UI icon
  system and never in rows.
- **Unicode** chars are not used as load-bearing icons.

---

## Repository index

**Tokens** (linked by the root `styles.css`)
- `styles.css` — global entry point (import list only)
- `tokens/fonts.css` — webfont loading (Google Fonts CDN)
- `tokens/colors.css` — palette ramps + semantic aliases
- `tokens/typography.css` — families, scale, weights, tracking
- `tokens/spacing.css` — spacing, radius, borders, shadows, motion
- `tokens/base.css` — element defaults applying the tokens

**Assets** — `assets/`
- `spark.svg` — the bespoke 4-point spark glyph
- `halftone-clay.png` / `halftone-ink.png` / `halftone-cream.png` — texture tiles
- `mascot-placeholder.png` — drop-in slot for the (pending) character art

**Foundations** — specimen cards across the *Type*, *Colors*, *Spacing*, and
*Brand* groups in the Design System tab (the `*.card.html` files).

**Components** — `components/` (reusable React primitives; each has `.jsx`,
`.d.ts`, `.prompt.md`, and a directory `*.card.html` demo). Mount via
`const { X } = window.ClaudictedDesignSystem_62a20b`.
- `buttons/` — **Button** (primary / secondary-sticker / pine / ghost), **IconButton**
- `forms/` — **Input** (+ textarea), **Select**, **Checkbox**, **Switch**
- `feedback/` — **Badge**, **Tag**, **Callout** (tip / note / warning)
- `content/` — **Card** (plain / sticker / clay / ink), **Avatar**, **VideoCard**, **NewsletterSignup**
- `navigation/` — **Tabs** (underline / pill)

**UI kit** — `ui_kits/marketing/` — the Claudicted landing page, click-through,
leading with the mascot-forward **sticker hero**. See its `README.md`.

**Starting points** (consuming-project picker): Button, Card (Core); VideoCard,
NewsletterSignup (Content); Input (Forms); the landing page (Marketing site).

**Skill** — `SKILL.md` makes this folder usable as a downloadable Claude Skill.
