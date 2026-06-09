Labelled text field (or textarea) with hint, error, and optional leading icon.

```jsx
<Input label="Email" type="email" placeholder="you@build.com" icon={<Mail/>} required />
<Input label="What are you building?" multiline hint="One sentence is plenty." />
<Input label="URL" error="That doesn't look like a link." defaultValue="htp://" />
```

Set `multiline` for a textarea, `error` to show the red state, `icon` for a leading SVG.
