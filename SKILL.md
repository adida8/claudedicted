---
name: claudicted-design
description: Use this skill to generate well-branded interfaces and assets for Claudicted, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `readme.md` — the full design guide: brand context, content/voice fundamentals, visual foundations, iconography, and a file index. **Start here.**
- `styles.css` — global entry point; link it (or copy `tokens/`) to inherit all CSS custom properties and fonts.
- `tokens/` — colors, typography, spacing/radius/shadow/motion, fonts, base element defaults.
- `assets/` — the spark glyph, halftone textures, and the mascot placeholder.
- `guidelines/*.card.html` — foundation specimen cards (color, type, spacing, brand).
- `components/` — reusable React primitives (Button, IconButton, Input, Select, Checkbox, Switch, Badge, Tag, Callout, Card, Avatar, VideoCard, NewsletterSignup, Tabs). Each has a `.d.ts`, a `.prompt.md`, and a `*.card.html` demo.
- `ui_kits/marketing/` — the full landing page (mascot-forward sticker hero).

## Quick rules of thumb
- Warm-only palette: clay-orange `#D9694A`, cream `#FBF6EE`, ink `#221C19`, single pine-green `#2E5E4E` accent. No cool grays, no blue/purple.
- Type: Bitter (display/wordmark), Hanken Grotesk (body/UI), JetBrains Mono (eyebrows/labels).
- Voice: warm, plainspoken, "anyone can build this." Sentence case. Emoji sparingly; prefer the spark glyph.
- Signature device: the ink-outline "sticker" (2.5–3.5px near-black border + hard offset shadow). Use on hero elements, primary stickers, sticker cards/buttons.
- The wordmark sets "Claudicted" in bold Bitter with a clay spark as the i-dot.
- ⚠️ Mascot character art is not included — use `assets/mascot-placeholder.png` as the slot until real art is supplied. Fonts load from Google Fonts CDN.
