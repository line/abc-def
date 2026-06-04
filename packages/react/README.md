# @line/abc-def-react

React components built as semantic wrappers around `@line/abc-def-styles`.

## Install

```bash
pnpm add @line/abc-def-react @line/abc-def-styles react react-dom tailwindcss
```

## Setup

Import the shared CSS contract from a Tailwind CSS v4 stylesheet:

```css
@import "tailwindcss";
@import "@line/abc-def-styles/css";

@source "../node_modules/@line/abc-def-react/dist/**/*.{js,cjs}";
```

Adjust the `@source` path for your stylesheet location. In this monorepo, the Vite example uses the local workspace source path instead.

## Usage

```tsx
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Outline</Button>;
}
```

The public import contract is subpath-based, for example `@line/abc-def-react/button`, `@line/abc-def-react/card`, and `@line/abc-def-react/dialog`.

Root package imports are not supported. Do not use `import { Button } from "@line/abc-def-react"`; import each component from its public subpath.

## Package Contents

The npm package publishes compiled ESM, CommonJS, and TypeScript declaration files under `dist`. Source maps are not included.
