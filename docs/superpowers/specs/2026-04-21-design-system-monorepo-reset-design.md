# Design System Monorepo Reset Design

## Summary

This repository will be reset into a minimal publish-first monorepo for a design system. The current mixed state of component implementations, Storybooks, examples, and support tooling will be cleared so the repository can restart from a clean package contract.

The new product surface is three npm packages:

- `@abc-def/styles`
- `@abc-def/react`
- `@abc-def/vue`

Plain HTML consumption now happens directly through `@abc-def/styles/css`, and the `examples/html-vite` workspace consumer proves the semantic class contract.

The first delivery goal is not a feature-complete design system. The first goal is a clean, extensible monorepo where each package has a clear responsibility, a publishable contract, and a minimal working build entry.

## Goals

- Rebuild the repository around a small set of publishable design system packages.
- Use `shadcn/ui` as the baseline implementation model for React.
- Use `shadcn-vue` as the baseline implementation model for Vue.
- Separate shared styles from framework-specific component packages.
- Make the shared styling layer usable from React, Vue, and plain HTML projects.
- Remove legacy examples, Storybooks, and old component implementations during the reset.

## Non-Goals

- Preserve the current Storybook, example apps, or legacy package structure.
- Maintain backward compatibility with previous package APIs.
- Ship a complete component catalog in the first reset pass.
- Build Web Components in the first pass.
- Finalize token automation, Figma sync, or cross-framework API parity in the first pass.

## Target Architecture

The repository root remains a lightweight workspace shell. It is responsible only for package management, shared build orchestration, and repository-level defaults.

All product code lives in `packages/` and is organized by responsibility:

- `packages/styles`
- `packages/react`
- `packages/vue`

Two lightweight workspace examples now live under `examples/react-vite` and `examples/html-vite` to validate the component and plain HTML consumption flows.

The dependency direction is strictly one-way:

1. `@abc-def/styles` is the shared styling contract.
2. `@abc-def/react` and `@abc-def/vue` consume `@abc-def/styles`.
3. Plain HTML consumers import `@abc-def/styles/css` directly.
4. Framework packages do not depend on each other.

This keeps the styling layer portable and prevents React or Vue implementation details from leaking into the shared system contract.

## Package Responsibilities

### `@abc-def/styles`

This package is the single source of truth for shared design styling.

It contains:

- design token source data
- CSS variable definitions
- Tailwind CSS v4 CSS entry points
- base CSS entry points
- shared theme definitions exposed through CSS
- shared utility styling primitives needed across packages

Its internal source tree should be split by concern even though it ships as one package:

- `src/tokens/*`
- `src/css/*`
- `src/index.ts`

This lets the team start with one installable style package now and still split tokens into a dedicated package later if scale requires it.

Plain HTML consumers import the CSS entry `@abc-def/styles/css` directly, and `examples/html-vite` proves the semantic contract with minimal markup.

### `@abc-def/react`

This package contains React UI components built with the `shadcn/ui` model and aligned to the contracts defined in `@abc-def/styles`.

It contains:

- React component implementations
- package-level utilities needed by those components
- public component exports

Initial component scope should stay intentionally small:

- button
- input
- card

The first pass should prove package boundaries and styling integration, not breadth.

### `@abc-def/vue`

This package contains Vue UI components built with the `shadcn-vue` model and aligned to the contracts defined in `@abc-def/styles`.

It contains:

- Vue component implementations
- package-level utilities needed by those components
- public component exports

Initial scope should mirror the same minimal starting set as React where practical, but the main requirement for the reset is a clean package skeleton with a valid entry and shared style integration.

### Plain HTML consumption

Framework-free consumers continue to import `@abc-def/styles/css`, which supplies the documented semantic classes and reusable utility styling. `examples/html-vite` wires Tailwind CSS against this entry so minimal markup can reproduce the component contract.

## Publish Contract

Each package must be independently publishable to npm.

Each package should include, at minimum:

- a valid package name in the `@abc-def/*` scope
- `exports` definitions
- `files` allowlist
- build script
- type entry where applicable
- README skeleton
- license metadata

The monorepo should be designed so external consumers can install only what they need:

- HTML consumer: `@abc-def/styles` (via the `@abc-def/styles/css` entry)
- React consumer: `@abc-def/styles` and `@abc-def/react`
- Vue consumer: `@abc-def/styles` and `@abc-def/vue`

## Initial File Structure

The reset target should look like this:

```text
.
├── docs/
│   └── superpowers/
│       └── specs/
├── packages/
│   ├── styles/
│   │   ├── package.json
│   │   ├── README.md
│   │   └── src/
│   │       ├── css/
│   │       ├── tailwind/
│   │       ├── tokens/
│   │       └── index.ts
│   ├── react/
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── components.json
│   │   └── src/
│   │       ├── components/
│   │       ├── lib/
│   │       └── index.ts
│   ├── vue/
│   │   ├── package.json
│   │   ├── README.md
│   │   └── src/
│   │       ├── components/
│   │       ├── lib/
│   │       └── index.ts
│   └── html/
│       ├── package.json
│       ├── README.md
│       └── src/
│           ├── css/
│           ├── patterns/
│           └── index.ts
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.json
```

The exact TypeScript config split can change during implementation, but the package boundaries above should remain stable.

## Reset Scope

The reset is intentionally destructive with respect to legacy implementation structure.

The following areas are expected to be removed or replaced:

- `storybooks/*`
- `examples/*`
- existing legacy component source that does not match the new package contracts
- old Tailwind package structure centered on the previous `packages/tailwindcss`
- legacy docs that describe the old package architecture
- tooling that exists only to support removed apps or Storybooks

The following repository-level files should be retained or simplified rather than blindly removed:

- root workspace configuration
- package manager lockfile
- shared build orchestration configuration
- shared TypeScript configuration when still useful
- license and repository metadata

## Implementation Principles

- Prefer a minimal clean reset over incremental migration.
- Prefer package boundaries that are easy to publish and reason about.
- Keep internal structure modular even when shipping a combined style package.
- Avoid rebuilding documentation or demo infrastructure until the package contracts are stable.
- Start with a very small component surface and expand after the architecture is proven.

## Validation Criteria

The reset is successful when all of the following are true:

- the repository installs as a workspace without the removed legacy apps
- each package has a valid package manifest and entry point
- package builds run successfully
- typechecking passes for the new package set
- shared styling can be imported from React, Vue, and HTML package entry flows

Storybook rendering, example app rendering, and migration compatibility are not success criteria for this first reset.

## Risks And Mitigations

### Risk: over-deleting useful shared tooling

Mitigation: preserve only root-level tooling that is required for package build, lint, typecheck, and publish workflows.

### Risk: style package becomes too broad

Mitigation: keep internal subdirectories split by `tokens`, `tailwind`, and `css` so the package can be separated later without redesigning public ownership.

### Risk: React and Vue drift too far apart

Mitigation: treat `@abc-def/styles` as the non-negotiable shared contract and keep the initial component set intentionally small.

## Open Decisions Deferred To Implementation Planning

- exact build tool choice per package
- final output format per package
- whether root-level shared tooling remains under `tooling/` or is reduced to fewer configs
- exact naming conventions for exported CSS entry points
- how extensive the semantic class documentation and plain HTML reference markup should be for the first delivery
