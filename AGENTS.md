# Repository Guidelines

## Project Structure & Module Organization

This is a pnpm/Turbo monorepo for the ABC Def design system. Framework packages live in `packages/react` and `packages/vue`; components are under `src/components`, hooks and utilities under `src/hooks` and `src/lib`, and builds use `tsup`. Shared Tailwind CSS v4 tokens and component styles live in `packages/styles/src`. Demo apps are in `examples/nextjs` and `examples/vue-vite`. Internal configs are in `tooling/*`.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies and run workspace validation.
- `pnpm dev`: run Turbo watch mode for package development tasks.
- `pnpm build`: build all packages and examples that define `build`.
- `pnpm typecheck`: run TypeScript or Vue type checks across the workspace.
- `pnpm lint`: run ESLint through Turbo with caching.
- `pnpm lint:fix`: apply ESLint auto-fixes where available.
- `pnpm format`: check Prettier formatting.
- `pnpm format:fix`: write Prettier formatting changes.

## Coding Style & Naming Conventions

Use TypeScript and ESM modules. Components and files follow lowercase kebab-case names such as `button.tsx`, `radio-group.tsx`, and `native-select.css`. Prefer named exports matching existing package patterns. Prettier uses `@line/abc-def-prettier-config` with import and Tailwind class sorting. ESLint enforces type-aware TypeScript rules, top-level type imports, no non-null assertions, and the LY Corporation license header on JS/TS/TSX files.
