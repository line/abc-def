# Tailwind CSS v4 Migration Design

## Summary

This repository will migrate its shared styling contract from a Tailwind CSS v3 preset-based integration to a Tailwind CSS v4 CSS-first integration.

The migration is intentionally breaking. The current `@abc-def/styles/tailwind` public entry will be removed. The new supported integration model is CSS-first and centers on `@abc-def/styles/css`.

This work also adds a real workspace consumer under `examples/` so the repository has a concrete reference implementation for the new Tailwind v4 usage pattern.

## Goals

- Upgrade the repository to Tailwind CSS v4.
- Replace the preset/config-based public API with a CSS-first public API.
- Keep `@abc-def/styles` as the shared styling contract for React, Vue, and HTML consumers.
- Add an official example consumer under `examples/`.
- Add `examples/*` to `pnpm-workspace.yaml`.
- Update library package documentation to reflect the new public API and migration path.

## Non-Goals

- Preserve compatibility with `@abc-def/styles/tailwind`.
- Support both Tailwind v3 and Tailwind v4 in parallel.
- Add multiple example consumers in the first pass.
- Introduce Storybook or other demo infrastructure as part of this migration.

## Decision

The repository will adopt a CSS-first Tailwind v4 contract.

That means:

- consumers import CSS instead of extending a JavaScript Tailwind preset
- shared tokens are exposed through CSS in the style package
- example documentation and consumer setup will demonstrate `@import "tailwindcss"` and `@import "@abc-def/styles/css"` usage
- old preset-based entry points are removed rather than deprecated

This is the preferred design because it matches Tailwind v4's model directly and avoids carrying an obsolete config contract forward.

## Target Architecture

The package boundary stays the same:

- `@abc-def/styles`
- `@abc-def/react`
- `@abc-def/vue`

Plain HTML consumption relies on importing `@abc-def/styles/css` directly, using the documented semantic classes without an additional package layer.

The shared style contract changes.

Before this migration:

1. tokens are defined in TypeScript
2. a Tailwind preset object is exported from `@abc-def/styles/tailwind`
3. consumers are expected to wire that preset into Tailwind config

After this migration:

1. tokens remain authored in `packages/styles`
2. the publishable integration surface is CSS-first
3. consumers import `@abc-def/styles/css` from their app stylesheet
4. Tailwind v4 compiles the consumer app using CSS imports and source declarations instead of preset merging

The new integration contract is centered on CSS entry points, not JavaScript config objects.

## Public API Changes

### Removed

- `@abc-def/styles/tailwind`
- any documented usage that relies on `tailwind.config.*` preset composition for the style package

### Supported

- `@abc-def/styles/css` as the main shared styling entry point
- Tailwind v4 app stylesheets that use `@import "tailwindcss"`
- Tailwind v4 source registration through `@source`
- Tailwind v4 theme extension through CSS rather than JavaScript config

### Consumer Modes

Two consumer modes are officially supported.

#### Simple mode

Consumers import the package CSS and use the shipped shared styles directly:

- `@import "@abc-def/styles/css";`

This mode is for consumers who want the design tokens and base styles with minimal setup.

#### Extended Tailwind v4 mode

Consumers create an app stylesheet that includes:

- `@import "tailwindcss";`
- `@import "@abc-def/styles/css";`
- `@source` declarations for the local app source tree and any workspace package source paths whose classes must be scanned by Tailwind
- optional local `@theme` additions for app-specific extension

This mode is the official advanced path and is the one demonstrated in the example consumer.

## Package Responsibilities

### `@abc-def/styles`

This package becomes the canonical Tailwind v4 style package.

It is responsible for:

- token source data
- published CSS entry points
- shared theme exposure through CSS
- base element styling
- any shared custom utility or layer definitions that belong in the design system contract

The package should no longer present Tailwind preset composition as part of its public contract.

TypeScript token exports may remain for internal organization or future tooling, but they are no longer the primary consumer integration surface.

### `@abc-def/react`

This package remains a consumer of `@abc-def/styles`.

Its class composition utilities stay intact unless implementation work proves a Tailwind v4 compatibility issue. The package documentation and metadata should stop implying that consumers need a preset/config integration from the style package.

### `@abc-def/vue`

This package follows the same contract as React: consume the shared style package without depending on a JavaScript Tailwind preset export.

### Plain HTML consumers

Framework-free projects import `@abc-def/styles/css` for the documented semantic classes and base styling. The `examples/html-vite` workspace demonstrates the CSS-first wiring the migration enables.

## Internal Source Layout

`packages/styles` should keep a clear internal split:

- `src/tokens/*`
- `src/css/*`
- `src/index.ts`

The existing `src/tailwind/*` preset-oriented structure should be removed or reduced so it is no longer a published public API.

Keeping tokens and CSS separated internally preserves future refactor flexibility without preserving the old public contract.

## Data Flow

The intended data flow after migration is:

1. token values are authored in `packages/styles/src/tokens`
2. style package CSS exposes those values through CSS variables and Tailwind v4-oriented theme definitions
3. consumer app CSS imports `tailwindcss` and `@abc-def/styles/css`
4. consumer app CSS registers relevant sources with `@source`
5. Tailwind v4 compiles the final stylesheet used by the application

There is no JavaScript preset merge step in the new design.

## Example Consumer

An example consumer will be added under `examples/`.

The first example is:

- `examples/react-vite`

This example exists to validate the public contract, not to become a large demo application.

It should:

- be a workspace package
- depend on local workspace packages
- use Tailwind v4
- import `@abc-def/styles/css`
- render at least one `@abc-def/react` component
- demonstrate that utility classes and shared tokens are compiled correctly

A second example proves the CSS-first plain HTML flow:

- `examples/html-vite`

It should:

- be a workspace package
- depend on local workspace packages or shared tooling used for Tailwind source scanning
- import `tailwindcss` followed by `@abc-def/styles/css`
- render minimal markup that exercises the documented semantic classes
- demonstrate the same token values and utility layer without a JavaScript framework

The workspace definition must be updated so `examples/*` is included in `pnpm-workspace.yaml`.

## Documentation Scope

This migration includes internal documentation updates.

Required updates:

- rewrite `packages/styles/README.md` around Tailwind v4 CSS-first usage
- update other package READMEs where they mention Tailwind integration assumptions
- document the breaking change clearly
- document the example consumer as the reference implementation
- describe how `examples/html-vite` demonstrates the plain HTML consumption pattern

Recent internal planning and spec documents that describe the style package as a Tailwind preset provider should be corrected if they would otherwise conflict with the implemented package contract.

The goal is not to rewrite historical docs broadly. The goal is to prevent current internal documentation from misleading future implementation work.

## Error Handling And Failure Model

The migration favors explicit failure over silent compatibility behavior.

The old `@abc-def/styles/tailwind` entry should be removed instead of preserved as a deprecated compatibility layer. If a consumer still imports it, the failure should happen at import resolution time.

This makes the breaking change obvious and prevents the repository from carrying two integration models at once.

The replacement path is provided by:

- package README updates
- the example consumer
- the new style package public API

## Validation Criteria

The migration is successful when all of the following are true:

- Tailwind CSS is upgraded to v4 in the relevant workspace packages
- `@abc-def/styles/tailwind` is no longer part of the supported public API
- `@abc-def/styles/css` is the documented and working integration surface
- `pnpm-workspace.yaml` includes `examples/*`
- the example consumer installs and builds in the workspace
- package build and typecheck commands still pass after the migration
- package and internal documentation describe the v4 CSS-first contract accurately

## Risks And Mitigations

### Risk: token definitions drift between TypeScript and CSS

Mitigation: keep token ownership in `packages/styles` and make the CSS entry the single published Tailwind integration layer. Avoid duplicating token definitions across unrelated packages.

### Risk: example consumer becomes the only place where integration works

Mitigation: keep the example small and representative, then verify the library packages themselves still build independently.

### Risk: stale documentation keeps pointing developers to the removed preset contract

Mitigation: update package READMEs and correct the most recent internal docs that currently describe preset-based usage as the intended architecture.

### Risk: migration work grows into a general repository redesign

Mitigation: keep scope limited to Tailwind v4 migration, package contract changes, example consumer setup, workspace updates, and documentation needed to support those changes.

## Implementation Notes For Planning

Implementation planning should include at least these work areas:

1. dependency and workspace updates
2. style package public API refactor
3. consumer package metadata and doc updates
4. example consumer creation
5. validation and migration documentation
