# Repository Guidelines

## Scope

This guide applies to the shared style package `@abc-def/styles`. Root workspace rules still apply.

## Structure

Core entry files are `src/index.css` and `src/semantic.css`. Component-level styles live in `src/components`, with one kebab-case file per component and exports collected through `src/components/index.css`. Token naming guidance belongs in `TOKEN_NAMING.md`.

## Commands

- `pnpm --filter @abc-def/styles format`: check CSS and docs formatting.
- `pnpm --filter @abc-def/styles lint`: run the package lint placeholder.
- `pnpm --filter @abc-def/styles clean`: remove generated local artifacts.

## Development Notes

Keep component style names aligned with React and Vue component names. Prefer semantic tokens over hard-coded values when a token exists. When adding a component stylesheet, update `src/components/index.css` so consumers receive it through the package export.

## Verification

Run the package format command and inspect affected React, Vue, or HTML examples. Style-only changes should be checked in at least one consuming demo when practical.
