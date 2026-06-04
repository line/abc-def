# @line/abc-def-styles

Shared CSS tokens and selectors for ABC Def.

## Install

```bash
pnpm add @line/abc-def-styles tailwindcss
```

## Usage

Import the aggregate stylesheet from CSS processed by Tailwind CSS v4:

```css
@import "tailwindcss";
@import "@line/abc-def-styles/css";
```

## Public Entries

- `@line/abc-def-styles/css`: aggregate public stylesheet.

## Package Contents

The npm package publishes the authored CSS files under `src` so Tailwind CSS v4 can process the `@import` graph directly. There is no generated `dist` payload.

## Token Architecture

`@line/abc-def-styles` is authored in three layers:

1. primitive tokens from Tailwind's `--color-*` theme variables
2. semantic tokens in `src/semantic.css`
3. component tokens and selectors in `src/components/*.css`

Runtime selectors consume CSS variables directly with `var(...)`. Focus shadow tokens use `color-mix(...)`, so consumers should target browsers with modern CSS color function support.

## Dark Mode

Dark mode is provided through `.dark` token overrides. Apply `.dark` at the application root and keep theme toggling in the consuming app.
