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
