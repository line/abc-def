# Repository Guidelines

## Scope

This guide applies to the public documentation site for ABC Def.

## Structure

Source files live in `src`. App Router files are under `src/app`, shared
presentation components under `src/components`, and documentation metadata under
`src/content`.

## Commands

- `pnpm --filter @abc-def/docs dev`: start the docs app.
- `pnpm --filter @abc-def/docs build`: build the static GitHub Pages output.
- `pnpm --filter @abc-def/docs typecheck`: run TypeScript checks.
- `pnpm --filter @abc-def/docs lint`: run ESLint.

## Verification

Run typecheck and build. For UI changes, inspect the local app at desktop and
mobile widths and verify routes under the production `/abc-def` base path.
