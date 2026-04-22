# @abc-def/react

React components built as semantic wrappers around `@abc-def/styles`.

The React package does not own the visual contract directly; it renders the shared semantic selectors (for example `.btn`, `.card`, `.card-header`, `.card-content`, and `.input`).

## Setup

Import `@abc-def/styles/css` from application CSS and register sources with Tailwind CSS v4 `@source`, following `examples/react-vite/src/index.css`:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";

@source "./**/*.{ts,tsx}";
@source "../../../packages/react/src/**/*.{ts,tsx}";
```

Then render components from `@abc-def/react`.

## Button API

- **Default HTML class:** `btn-default`
- **Approved variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- **Approved sizes:** `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- **React composition:** `asChild`
- **Composition behavior:** when `asChild` is true, Button renders `Slot.Root` and applies the resolved shared `btn*` classes to the slotted child

```tsx
<Button variant="outline" size="sm">Outline</Button>
<Button asChild variant="link">
  <a href="/docs">Docs</a>
</Button>
```
