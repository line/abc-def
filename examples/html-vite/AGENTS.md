# Repository Guidelines

## Scope

This guide applies to the plain HTML/Vite example app. It demonstrates `@abc-def/styles` without a framework wrapper.

## Structure

Application source is in `src`. Reusable demo wiring lives in `src/components`, example definitions in `src/examples`, shared behavior in `src/lib`, and styles in `src/index.css`. Keep browser-facing TypeScript small and dependency-light.

## Commands

- `pnpm --filter @abc-def/example-html-vite dev`: start the Vite dev server.
- `pnpm --filter @abc-def/example-html-vite build`: build the demo.
- `pnpm --filter @abc-def/example-html-vite preview`: preview the production build.
- `pnpm --filter @abc-def/example-html-vite typecheck`: run TypeScript checks.

## Development Notes

Use this app to validate framework-independent CSS behavior. Keep examples focused on rendered states and avoid adding React or Vue dependencies here. Prefer shared registry and behavior helpers over inline duplicate setup.

## Verification

Run typecheck and build after changes. For visual changes, start the dev server and inspect the affected examples in a browser.
