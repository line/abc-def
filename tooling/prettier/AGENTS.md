# Repository Guidelines

## Scope

This guide applies to `@line/abc-def-prettier-config`, the shared Prettier configuration package.

## Structure

The public config is `index.js`. TypeScript configuration is in `tsconfig.json`. Keep `package.json` exports pointing at the public config entry.

## Commands

- `pnpm --filter @line/abc-def-prettier-config typecheck`: validate config typing.
- `pnpm --filter @line/abc-def-prettier-config format`: check formatting.

## Development Notes

This config controls import sorting and Tailwind class sorting for the workspace. Be conservative with import order changes because they can rewrite many files. Keep plugin dependencies declared in this package rather than individual consumers.

## Verification

Run this package's typecheck and format commands. For config behavior changes, run `pnpm format` from the root to see the workspace impact.
