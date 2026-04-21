# @abc-def/vue

Vue components built as semantic wrappers around `@abc-def/styles`.

The Vue package renders the same semantic selectors used by the HTML and React consumers.

## Setup

Import `@abc-def/styles/css` from application CSS and register sources with Tailwind CSS v4 `@source`, following `examples/vue-vite/src/index.css`:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";

@source "./**/*.{ts}";
@source "../../../packages/vue/src/**/*.ts";
```

Then use the exported Vue render-function components from `@abc-def/vue`.
