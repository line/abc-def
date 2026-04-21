# @abc-def/styles

Shared design tokens and the Tailwind CSS v4 styling contract for the abc-def design system. This package now ships the semantic component classes that plain HTML and app-driven consumers rely on through `@abc-def/styles/css`.

## Install

```bash
pnpm add tailwindcss @abc-def/styles
```

## Use in Plain HTML

Create an application stylesheet and import the shared style contract:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

Then write ordinary HTML with the documented semantic classes:

```html
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has semantic class names for plain HTML consumers.</p>
    <div class="card-actions">
      <button class="btn btn-primary" type="button">Buy Now</button>
    </div>
  </div>
</div>
```

See `examples/html-vite` for a runnable plain HTML workspace that wires `tailwindcss` with `@abc-def/styles/css`.

## Supported Classes

- `.btn`
- `.btn-primary`
- `.btn-secondary`
- `.btn-outline`
- `.card`
- `.card-body`
- `.card-title`
- `.card-actions`
- `.input`

## Example Workspaces

- `examples/react-vite` demonstrates the React consumer wiring `@abc-def/styles` with `@abc-def/react`.
- `examples/html-vite` proves the plain HTML contract by importing `@abc-def/styles/css` and using the semantic classes directly.
