# Repository Guidelines

## Scope

This guide applies to `@line/abc-def-tsconfig`, the shared TypeScript configuration package.

## Structure

Config files are JSON files at the package root. `base.json` is the shared baseline and `internal-package.json` is for internal workspace packages. Keep `package.json` `files` broad enough to publish any new config JSON.

## Commands

This package currently has no local scripts. Use dependent package checks:

- `pnpm typecheck`: validate all consumers.
- `pnpm build`: confirm build-time config compatibility.

## Development Notes

Treat compiler option changes as cross-workspace changes. Avoid relaxing strictness for one package; prefer package-local overrides when a setting is not globally appropriate.

## Verification

Run root typecheck after changing shared TypeScript configs. Run root build when options affect emit or declaration output.
