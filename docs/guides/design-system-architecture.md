# Design System Architecture

## Purpose

This repository centers the shared design-system contract in `@abc-def/styles`.

The styles package defines the token and selector contract once, and the React and Vue packages consume that contract instead of redefining component styling independently. The example applications act as concrete integration surfaces for plain HTML, React, and Vue consumers.

## Package Roles

### `@abc-def/styles`

`packages/styles` is the source of truth for shared styling.

It owns:

- primitive tokens in `src/tokens/primitive.css`
- semantic tokens in `src/tokens/semantic.css`
- component tokens in `src/tokens/components/*.css`
- shared selectors in `src/css/base.css` and `src/css/components/*.css`
- aggregate stylesheet entry points in `src/css/components.css`, `src/css/utilities.css`, and `src/css/index.css`

### `@abc-def/react`

`packages/react` consumes the shared style contract.

Its components expose framework bindings for the shared selectors and component contracts. React components should align with the class and token structure owned by `@abc-def/styles`, not introduce separate visual rules.

### `@abc-def/vue`

`packages/vue` has the same role as the React package: it consumes the shared styling contract and exposes framework-specific wrappers for the same component system.

### Example Applications

The example apps under `examples/html-vite`, `examples/react-vite`, and `examples/vue-vite` are verification surfaces for the shared contract. They confirm that the same tokens and selectors work across plain HTML, React, and Vue usage.

## Styling Ownership Model

The repository separates styling into two layers:

1. token definition
2. selector application

Token files define values and dependency direction. Selector files apply those values to actual component and base selectors.

This split keeps the design-system contract explicit:

- tokens define what values and semantic meanings exist
- selectors define how those values are rendered
- framework packages consume the rendered contract instead of recreating it

## Token Layers

The token system is layered in this order:

1. primitive tokens
2. semantic tokens
3. component tokens

Each layer has one responsibility:

- primitive tokens hold raw scales such as colors, spacing, radius, and size values
- semantic tokens map shared UI meaning to primitive values
- component tokens map component-level contracts to semantic values

Selectors consume semantic and component tokens. Dependency direction only flows downward from selectors to component tokens to semantic tokens to primitive tokens.

## CSS Structure

The shared CSS is organized by responsibility.

- `src/css/base.css` defines shared base rules and the public `@theme` alias layer
- `src/css/components/*.css` defines component selectors
- `src/css/components.css` aggregates component selector files
- `src/css/utilities.css` exposes shared utility rules
- `src/css/index.css` acts as the package entry point

This structure keeps token ownership separate from selector ownership while still exposing a coherent stylesheet surface to consumers.

## Framework Integration

The React and Vue packages do not own independent style systems.

Their job is to:

- expose framework-friendly component APIs
- render the shared selector structure
- stay aligned with the public component-token contract owned by `@abc-def/styles`

If a style change is shared across HTML, React, and Vue, it should usually begin in `packages/styles`.

## Verification Surfaces

The repository uses several surfaces to keep the contract coherent:

- `packages/styles/scripts/verify-build.mjs` checks important build-time invariants for the style package
- package entry points in `packages/styles/src/index.ts`, `packages/react/src/index.ts`, and `packages/vue/src/index.ts` expose the public module surface
- the example apps verify that the shared contract works in plain HTML, React, and Vue contexts

## Working Rule

When contributors need to change shared visual behavior, they should first identify whether the change belongs in tokens, selectors, or framework wrappers.

The default order is:

1. update the style contract in `packages/styles`
2. align React and Vue wrappers to that contract if needed
3. verify the result in the example apps

This repository treats `@abc-def/styles` as the design-system foundation and the other packages as consumers of that foundation.
