# @abc-def/styles

Shared CSS tokens and selectors for the abc-def design system.

This package is CSS-first: consumers import `@abc-def/styles/css` from their app stylesheet and rely on Tailwind CSS v4 to compile the shared selectors.

## Architecture

`@abc-def/styles` is authored in three token layers: `primitive -> semantic -> component-specific`.

1. primitive tokens in `src/tokens/primitive.css`
2. semantic tokens in `src/tokens/semantic.css`
3. component tokens in `src/tokens/components/*.css`

Selectors live under `src/css` and consume those token layers.

## CSS Entries

- `@abc-def/styles/css`: aggregate base + components + utilities
- `@abc-def/styles/css/base`: base imports, theme variables, resets
- `@abc-def/styles/css/components`: component selectors and component-token imports
- `@abc-def/styles/css/utilities`: small shared semantic utility classes

## Install

```bash
pnpm add tailwindcss @abc-def/styles
```

## Usage (CSS-First)

Import the shared contract from an application stylesheet that Tailwind v4 processes (Vite/PostCSS/Rollup). For a minimal setup:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

Plain HTML apps should also register sources via `@source` (see `examples/html-vite`).

## Public Selector Contract

The public surface area of this package is the semantic selector contract under `@abc-def/styles/css`:

- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.card`, `.card-header`, `.card-content`, `.card-body`, `.card-title`, `.card-actions`
- `.input`

This contract is validated in `packages/styles/scripts/verify-build.mjs`.

## Example Workspaces

- `examples/html-vite`: plain HTML consumer of `@abc-def/styles/css`
- `examples/react-vite`: React consumer of `@abc-def/styles/css` and `@abc-def/react`
- `examples/vue-vite`: Vue consumer of `@abc-def/styles/css` and `@abc-def/vue`
