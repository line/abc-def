# @abc-def/styles

Shared CSS tokens and selectors for the abc-def design system.

This package is CSS-first: consumers import `@abc-def/styles/css` from their app stylesheet and rely on Tailwind CSS v4 to compile the shared selectors.

## Architecture

`@abc-def/styles` is authored in three token layers: `primitive -> semantic -> component-specific`.

1. primitive tokens in `src/tokens/primitive.css`
2. semantic tokens in `src/tokens/semantic.css`
3. component tokens in `src/tokens/components/*.css`

Selectors live under `src/css` and consume those token layers.

Color token contract: Tailwind primitive `--color-*` values flow into semantic tokens and then into component-scoped aliases, so runtime selectors should consume them directly via `var(...)` (not `hsl(var(...))` wrapping).
Focus shadow tokens in this package use `color-mix(...)`, so consumers should target browsers that support modern CSS color functions.

## CSS Entries

The primary public stylesheet entry is `@abc-def/styles/css`. Consumers should continue to load Tailwind before this aggregate entry (see Usage for the canonical import snippet).

- `@abc-def/styles/css`: aggregate base + components + utilities and the documented public contract.
- `@abc-def/styles/css/base`: base imports, token/theme wiring, and resets scoped under `@layer base`.
- `@abc-def/styles/css/components`: component selectors and component-token imports; the selectors themselves emit inside `@layer components` while tokens establish the semantic variables the selectors rely on.
- `@abc-def/styles/css/utilities`: small shared semantic utility classes exposed via `@utility`.

The secondary entry points remain exported for compatibility and focused debugging when you need to tease apart layers; the primary entry is what most consumers should depend on.

## Layered Internals

`base.css` keeps the token imports and `@theme` declarations together before wrapping the shared element rules in `@layer base`. The `@theme` block is the public Tailwind-facing alias layer for app utilities such as `bg-background` and `text-foreground`; the package's own selectors should consume semantic tokens and component-scoped aliases directly.

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

## Dark Mode

`@abc-def/styles` ships dark-mode token overrides through the `.dark` selector in `src/tokens/semantic.css`.

- Apply `.dark` at the application root to activate the dark semantic token set.
- Keep theme toggling logic in the consuming app.
- Do not expect `@abc-def/styles` to manage `data-theme` attributes or `prefers-color-scheme` runtime behavior.

## Public Selector Contract

The public surface area of this package is the semantic selector contract provided by `@abc-def/styles/css`, plus the focused helpers exported from `@abc-def/styles/css/utilities`. The documented selectors include:

- `.btn`, `.btn-default`, `.btn-destructive`, `.btn-outline`, `.btn-secondary`, `.btn-ghost`, `.btn-link`
- `.btn-sm`, `.btn-lg`, `.btn-icon`, `.btn-icon-sm`, `.btn-icon-lg`
- `.card`, `.card-header`, `.card-content`, `.card-body`, `.card-title`, `.card-actions`
- `.input`
- Utility helpers such as `.abc-text-dim` and `.abc-surface-base`

Button contract summary:

- Default HTML class: `btn-default`
- Approved variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Approved sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`

## Example Workspaces

- `examples/html-vite`: plain HTML consumer of `@abc-def/styles/css`
- `examples/react-vite`: React consumer of `@abc-def/styles/css` and `@abc-def/react`
- `examples/vue-vite`: Vue consumer of `@abc-def/styles/css` and `@abc-def/vue`
