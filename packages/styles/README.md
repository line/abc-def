# @abc-def/styles

Shared design tokens and the Tailwind CSS v4 styling contract for the abc-def design system.

## Install

```bash
pnpm add tailwindcss @abc-def/styles
```

## Use

Create an application stylesheet and import the shared style contract:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";

@source "./src/**/*.{ts,tsx,js,jsx}";
@source "../node_modules/@abc-def/react/dist/**/*.{js,mjs}";
```

## Breaking Change

The old Tailwind subpath export has been removed. Tailwind integration is now CSS-first and uses `@abc-def/styles/css`.
