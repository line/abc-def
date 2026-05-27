# Repository Guidelines

## Scope

This guide applies to the Vue component package `@abc-def/vue`. Follow the root `AGENTS.md` for shared repository rules.

## Structure

Source files live in `src`. Components are grouped under `src/components/<component-name>`, shared helpers live in `src/lib`, and `src/index.ts` is the package entry point. Keep component directory names kebab-case, matching the existing pattern such as `alert-dialog` and `radio-group`. Build output in `dist` is generated.

## Commands

- `pnpm --filter @abc-def/vue build`: build the package with `tsup`.
- `pnpm --filter @abc-def/vue typecheck`: run `vue-tsc --noEmit`.
- `pnpm --filter @abc-def/vue lint`: run ESLint.
- `pnpm --filter @abc-def/vue format`: check Prettier formatting.

## Development Notes

Use Vue 3 composition patterns and keep exports consistent with existing component folders. Depend on `@abc-def/styles` for shared visual contracts. Avoid copying React implementation details unless the Vue API and behavior remain idiomatic.

## Verification

Run build, typecheck, lint, and format for this package. For visual or interaction changes, verify the affected pages in `examples/vue-vite`.
