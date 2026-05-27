# Repository Guidelines

## Scope

This guide applies to the React component package `@abc-def/react`. Follow the root `AGENTS.md` for workspace-wide rules.

## Structure

Source files live in `src`. Put reusable components in `src/components`, React hooks in `src/hooks`, and shared helpers in `src/lib`. Keep component filenames kebab-case, for example `button.tsx` or `radio-group.tsx`. Build output goes to `dist` and should not be edited or committed.

## Commands

- `pnpm --filter @abc-def/react build`: build the package with `tsup`.
- `pnpm --filter @abc-def/react typecheck`: run TypeScript checks.
- `pnpm --filter @abc-def/react lint`: run ESLint for this package.
- `pnpm --filter @abc-def/react format`: check Prettier formatting.

## Development Notes

Use React 19-compatible APIs and preserve the package's named export pattern. Keep style behavior aligned with `@abc-def/styles`; do not duplicate shared CSS tokens in component code. Prefer `cn` and existing variants/helpers over one-off class composition.

## Verification

For component changes, run this package's build, lint, and typecheck commands.
