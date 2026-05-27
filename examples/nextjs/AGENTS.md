# Repository Guidelines

## Scope

This guide applies to the Next.js example app for `@line/abc-def-react` and
`@line/abc-def-styles`.

## Structure

Source files live in `src`. App Router files are under `src/app`, with global
styles in `src/app/globals.css`. Keep future example files kebab-case and prefer
imports from `@line/abc-def-react`.

## Commands

- `pnpm --filter @abc-def/example-nextjs dev`: start the Next.js app.
- `pnpm --filter @abc-def/example-nextjs build`: build the app.
- `pnpm --filter @abc-def/example-nextjs start`: run the production server.
- `pnpm --filter @abc-def/example-nextjs typecheck`: run TypeScript checks.

## Verification

Run typecheck and build. For UI changes, inspect the page in the dev server and
confirm light/dark theme behavior when applicable.
