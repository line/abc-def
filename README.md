# ABC Def

ABC Def is LINE's CSS-first design system for shared UI packages. The visual contract lives in `@line/abc-def-styles`; the React and Vue packages render components against the same semantic selectors and tokens.

## Packages

- `@line/abc-def-styles`: Tailwind CSS v4 tokens, semantic variables, and component selectors.
- `@line/abc-def-react`: React components that render the shared selector contract.
- `@line/abc-def-vue`: Vue components that render the shared selector contract.

## Install

```bash
pnpm add tailwindcss @line/abc-def-styles
pnpm add @line/abc-def-react react react-dom
pnpm add @line/abc-def-vue vue
```

Install only the framework package you use. Plain HTML projects only need `@line/abc-def-styles`.

## Usage

Import the shared stylesheet from CSS processed by Tailwind CSS v4:

```css
@import "tailwindcss";
@import "@line/abc-def-styles/css";
```

React apps import components from subpath entry points:

```tsx
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Button</Button>;
}
```

Vue apps use the same subpath pattern:

```vue
<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
</script>

<template>
  <Button variant="outline">Button</Button>
</template>
```

Tailwind v4 ignores most package sources by default. Add an `@source` rule for the installed component package when your app uses React or Vue components:

```css
@source "../node_modules/@line/abc-def-react/dist/**/*.{js,cjs}";
@source "../node_modules/@line/abc-def-vue/dist/**/*.{js,cjs}";
```

Adjust the relative path for your app stylesheet location.

## Examples

- `examples/html-vite`: plain HTML consumer of `@line/abc-def-styles/css`
- `examples/react-vite`: React consumer of `@line/abc-def-styles/css` and `@line/abc-def-react`
- `examples/vue-vite`: Vue consumer of `@line/abc-def-styles/css` and `@line/abc-def-vue`

## Compatibility

ABC Def 2.x follows strict SemVer for documented public APIs, including package subpath exports, component props, CSS entry points, semantic selectors, and documented token names. See [Public API](./docs/public-api.md).

## Development

```bash
pnpm install
pnpm dev
```

`pnpm dev` watches the framework packages under `packages/*`. Run an example app separately when you want to verify the UI in a browser:

```bash
pnpm --filter @abc-def/example-html-vite dev
pnpm --filter @abc-def/example-vue-vite dev
pnpm --filter @abc-def/example-nextjs dev
```

Before submitting changes, run:

```bash
pnpm lint
pnpm format
pnpm typecheck
pnpm build
```

For contribution details, see [CONTRIBUTING.md](./CONTRIBUTING.md). Security reports are handled through [SECURITY.md](./SECURITY.md).

## License

Apache-2.0. See [LICENSE](./LICENSE).
