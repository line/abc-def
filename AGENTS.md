# Repository Guidelines

## Project Structure & Module Organization

This is a pnpm/Turbo monorepo for the ABC Def design system. Framework packages live in `packages/react` and `packages/vue`; components are under `src/components`, hooks and utilities under `src/hooks` and `src/lib`, and builds use `tsup`. Shared Tailwind CSS v4 tokens and component styles live in `packages/styles/src`. Demo apps are in `examples/react-vite` and `examples/vue-vite`. Internal configs are in `tooling/*`.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies and run workspace validation.
- `pnpm dev`: run Turbo watch mode for package development tasks.
- `pnpm build`: build all packages and examples that define `build`.
- `pnpm typecheck`: run TypeScript or Vue type checks across the workspace.
- `pnpm lint`: run ESLint through Turbo with caching.
- `pnpm lint:fix`: apply ESLint auto-fixes where available.
- `pnpm format`: check Prettier formatting.
- `pnpm format:fix`: write Prettier formatting changes.
- `pnpm --filter @abc-def/example-react-vite dev`: run one Vite demo app.

## Coding Style & Naming Conventions

Use TypeScript and ESM modules. Components and files follow lowercase kebab-case names such as `button.tsx`, `radio-group.tsx`, and `native-select.css`. Prefer named exports matching existing package patterns. Prettier uses `@line/abc-def-prettier-config` with import and Tailwind class sorting. ESLint enforces type-aware TypeScript rules, top-level type imports, no non-null assertions, and the LY Corporation license header on JS/TS/TSX files.

## Testing Guidelines

There is currently no workspace `test` script or committed test framework. Before submitting changes, run `pnpm build`, `pnpm typecheck`, `pnpm lint`, and `pnpm format`. For UI changes, verify the relevant Vite example manually. If adding tests, keep them package-local, use `*.test.ts` or `*.test.tsx`, and add a package script so Turbo can run them.

## Commit & Pull Request Guidelines

Recent history uses short subjects, often Conventional Commit prefixes such as `feat:`, `fix:`, and `refactor:`. Keep commits scoped, for example `feat: add vue accordion component`. Pull requests should target `dev`, not `main`, and include a summary, linked issue when applicable, validation commands, and screenshots or recordings for visual changes. Non-trivial pull requests require the CLA noted in `CONTRIBUTING.md`.

## Security & Configuration Tips

Use the pinned toolchain: Node `>=24.13.0` and `pnpm@11.2.2`. Do not commit generated `dist`, `.cache`, `.turbo`, or `node_modules` output. Keep shared dependency versions in `pnpm-workspace.yaml` catalogs.
