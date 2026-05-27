# Repository Guidelines

## Scope

This guide applies to the Vue Vite example app for `@abc-def/vue` and `@abc-def/styles`.

## Structure

Source files live in `src`. Demo components are in `src/components`, examples in `src/examples`, shared utilities and registries in `src/lib`, and page-level views in `src/pages`. Use kebab-case filenames for Vue demos.

## Commands

- `pnpm --filter @abc-def/example-vue-vite dev`: start the Vite app.
- `pnpm --filter @abc-def/example-vue-vite build`: build the app.
- `pnpm --filter @abc-def/example-vue-vite preview`: preview the production build.
- `pnpm --filter @abc-def/example-vue-vite typecheck`: run TypeScript checks.

## Development Notes

Use this app to validate Vue component APIs and visual states. Import from `@abc-def/vue` and avoid depending on package internals. Keep examples aligned with the React demo where useful, but preserve idiomatic Vue templates and composition usage.

## Verification

Run typecheck and build. For component or style changes, inspect the affected demo in the dev server and check theme-sensitive states.
