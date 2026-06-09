Primary call-to-action button — pill-shaped; the `secondary` variant is Claudicted's signature ink-outline sticker with a hard offset shadow.

```jsx
<Button variant="primary" size="lg" onClick={start}>Start building</Button>
<Button variant="secondary" iconRight={<ArrowRight/>}>Read the build log</Button>
<Button variant="pine" icon={<Play/>}>Watch how it's made</Button>
<Button variant="ghost">Maybe later</Button>
```

Variants: `primary` (clay fill), `secondary` (ink sticker), `pine` (single accent — watch/subscribe), `ghost`. Sizes `sm | md | lg`. Pass `icon` / `iconRight` as SVG nodes, `block` for full width, `href` to render an anchor.
