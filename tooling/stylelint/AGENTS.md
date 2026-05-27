# Repository Guidelines

## Scope

This guide applies to `@line/abc-def-stylelint-config`, the shared Stylelint configuration package.

## Structure

The public config is `index.js`; `package.json` exposes that file through `files`. Keep configuration changes centralized here rather than duplicating CSS lint rules in packages.

## Commands

- `pnpm --filter @line/abc-def-stylelint-config format`: check formatting.
- `pnpm --filter @line/abc-def-stylelint-config clean`: remove local generated artifacts.

## Development Notes

This package depends on Stylelint and `stylelint-copyright`. Keep copyright and CSS policy changes explicit because they affect all style consumers. Prefer adding rules only when they can be satisfied by `packages/styles` without noisy exceptions.

## Verification

Run this package's format command. If adding a Stylelint execution script later, wire it through Turbo and validate `packages/styles`.
