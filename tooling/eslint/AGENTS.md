# Repository Guidelines

## Scope

This guide applies to `@line/abc-def-eslint-config`, the shared ESLint configuration package.

## Structure

Public config entry points are `base.js`, `react.js`, and `nextjs.js`. Type helpers live in `types.d.ts`, and TypeScript project settings are in `tsconfig.json`. Keep exports in `package.json` synchronized with any new public config file.

## Commands

- `pnpm --filter @line/abc-def-eslint-config typecheck`: validate config typing.
- `pnpm --filter @line/abc-def-eslint-config format`: check formatting.

## Development Notes

Use flat ESLint config patterns consistently. Keep base rules framework-neutral, React rules in `react.js`, and Next.js-specific rules in `nextjs.js`. Preserve the license header rule unless deliberately changing repository policy.

## Verification

Run this package's typecheck and format commands. For rule changes, run `pnpm lint` from the root to confirm consuming packages still pass.
