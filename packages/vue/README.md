# @line/abc-def-vue

Vue components built as semantic wrappers around `@line/abc-def-styles`.

## Install

```bash
pnpm add @line/abc-def-vue @line/abc-def-styles vue tailwindcss
```

## Setup

Import the shared CSS contract from a Tailwind CSS v4 stylesheet:

```css
@import "tailwindcss";
@import "@line/abc-def-styles/css";

@source "../node_modules/@line/abc-def-vue/dist/**/*.{js,cjs}";
```

Adjust the `@source` path for your stylesheet location. In this monorepo, the Vite example uses the local workspace source path instead.

## Usage

```vue
<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
</script>

<template>
  <Button variant="outline">Outline</Button>
</template>
```

The public import contract is subpath-based, for example `@line/abc-def-vue/button`, `@line/abc-def-vue/card`, and `@line/abc-def-vue/dialog`.

Root package imports are not supported. Do not use `import { Button } from "@line/abc-def-vue"`; import each component from its public subpath.

## Package Contents

The npm package publishes compiled ESM and CommonJS component entry points under `dist`. TypeScript declarations are generated under `dist/types`. Source maps are not included.
