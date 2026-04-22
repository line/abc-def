# Shadcn Button Multiplatform Design

> **Superseded:** The React composition decision in this document has been superseded by `docs/superpowers/specs/2026-04-22-button-aschild-and-color-token-values-design.md` and `docs/superpowers/plans/2026-04-22-button-aschild-and-color-token-values-design.md`.

## Summary

This design adds a `Button` contract derived from the latest `shadcn` CLI React output while keeping `@abc-def/styles` as the shared styling source of truth.

The repository will:

- use `shadcn` CLI output as the React reference point
- translate that API and state model into the existing token architecture
- expose the same visual contract across React, Vue, and plain HTML
- keep composition aligned with Base UI conventions instead of Radix `asChild`

## Goals

- Keep the React `Button` public API as close as practical to the latest `shadcn` CLI output.
- Move the visual contract into `@abc-def/styles` so CSS is not owned by framework wrappers.
- Extend the token model for `Button` without breaking the existing `primitive -> semantic -> component` dependency rules.
- Expose the same `variant` and `size` contract in React, Vue, and plain HTML.
- Use Base UI-style composition for React instead of Radix `asChild`.
- Use `shadcn-vue` as the Vue reference for variant and size naming where it fits the shared contract.

## Non-Goals

- Copy generated `shadcn` component files into the repository as long-term source files.
- Make React wrapper internals the styling source of truth.
- Add every current `shadcn` size option in this pass.
- Provide `asChild` parity with Radix APIs.
- Add visual snapshot automation in this phase.

## Decision

The repository will adopt a reference-and-reprojection workflow for `Button`.

`shadcn` CLI output is the reference for the latest React-facing API and state model. The final implementation is not a raw generated file. Instead, the repository will reproject that contract into the shared token and selector architecture already established in `@abc-def/styles`.

This keeps React aligned with upstream `shadcn` behavior while preserving a single styling contract that can also be consumed by Vue and plain HTML.

## Reference Sources

### React

React uses the latest `shadcn` CLI `button` output as the primary reference for:

- public prop names
- variant names
- size names in scope for this work
- state behavior and composition expectations

### Vue

Vue uses `shadcn-vue` as the reference for:

- variant naming
- size naming
- component usage expectations in Vue templates

Vue does not need to copy `shadcn-vue` implementation details verbatim if they conflict with the shared token contract or with the Base UI-aligned React composition model.

### Shared Styles

`@abc-def/styles` remains the styling source of truth for:

- design tokens
- shared selectors
- variant mapping
- size mapping
- focus, hover, disabled, and icon layout behavior

## Architecture

### `packages/react`

The React package exposes the main `Button` API aligned with `shadcn`.

The React wrapper is responsible for:

- preserving the public `variant` and `size` prop surface
- supporting Base UI-style composition through `render`
- emitting the shared class contract owned by `@abc-def/styles`

The React wrapper is not responsible for owning visual design values.

### `packages/styles`

The styles package owns the visual contract.

It is responsible for:

- semantic token additions required by the expanded button variants
- component-specific button tokens
- selector definitions for all button variants and sizes
- the plain HTML styling surface consumed by all frameworks

### `packages/vue`

The Vue package mirrors the shared contract.

It is responsible for:

- exposing the same `variant` names as React
- exposing the same `size` names as React for the scoped set in this work
- rendering the shared class contract from Vue-friendly wrappers

Vue should stay aligned with `shadcn-vue` conventions where possible, but it must ultimately conform to the repository's shared styling contract.

### `examples/html-vite`

The HTML example demonstrates the framework-free contract by applying the same class names directly in markup.

Plain HTML does not implement composition props. It consumes only the shared selector and token contract.

## Public Contract

### Variant API

The public variant contract is:

- `default`
- `destructive`
- `outline`
- `secondary`
- `ghost`
- `link`

React and Vue expose these through component props.

Plain HTML exposes them through explicit classes.

### Size API

The public size contract for this work is:

- `default`
- `sm`
- `lg`
- `icon`
- `icon-sm`
- `icon-lg`

This intentionally excludes `xs` and `icon-xs` from the first pass.

### Shared Class Contract

The shared selector contract is:

- base class: `btn`
- variant classes:
  - `btn-default`
  - `btn-destructive`
  - `btn-outline`
  - `btn-secondary`
  - `btn-ghost`
  - `btn-link`
- size override classes:
  - `btn-sm`
  - `btn-lg`
  - `btn-icon`
  - `btn-icon-sm`
  - `btn-icon-lg`

The default size is included in `btn` itself.

The default variant is explicit in HTML through `btn-default` so the HTML contract maps directly to `variant="default"` in framework wrappers.

## Composition Model

### React Composition

React will not implement Radix-style `asChild`.

Instead, React composition follows Base UI conventions and uses a `render`-oriented composition model.

This keeps the React API aligned with the chosen primitive philosophy and avoids introducing Radix-specific behavior into a Base UI-aligned component contract.

### Vue Composition

Vue does not promise Radix-style `asChild` parity and does not define a cross-framework composition prop contract in this phase.

The shared public cross-framework contract for this design is limited to:

- variant names
- size names
- shared class names

If Vue later needs a framework-specific composition helper, that should be treated as a separate API decision rather than implied by this Button migration.

### HTML Composition

Plain HTML exposes no composition prop. The contract is the class surface only.

## Token Architecture

### Semantic Tokens

This work may extend semantic tokens only when the value expresses shared UI meaning beyond `Button`.

Representative candidates include:

- destructive backgrounds and foregrounds
- secondary backgrounds and foregrounds
- ghost or accent interaction surfaces
- link foreground treatment
- focus ring offset surfaces shared by controls

Semantic tokens must still depend only on primitive tokens.

### Button Component Tokens

Button-specific tokens live in `packages/styles/src/tokens/components/button.css`.

These include:

- common control sizing tokens
- inline spacing tokens
- radius tokens
- icon size tokens
- per-variant foreground, background, border, and ring mappings
- per-size height and padding mappings

Representative examples include:

- `--abc-button-height`
- `--abc-button-height-sm`
- `--abc-button-height-lg`
- `--abc-button-icon-size`
- `--abc-button-icon-size-sm`
- `--abc-button-icon-size-lg`
- `--abc-button-default-bg`
- `--abc-button-destructive-bg`
- `--abc-button-outline-border`
- `--abc-button-ghost-bg`
- `--abc-button-link-fg`

Component tokens may reference semantic tokens but must not reference primitive tokens directly.

## Selector Model

Button selectors live in `packages/styles/src/css/components/button.css` inside `@layer components`.

The selector model must provide:

- base button layout and typography through `.btn`
- explicit variant mapping through `btn-*` classes
- explicit size mapping through `btn-*` size classes
- consistent hover behavior
- consistent focus-visible behavior
- disabled behavior
- square icon-button layouts for `btn-icon`, `btn-icon-sm`, and `btn-icon-lg`

Selectors should prefer token-based state mapping over raw ad hoc values.

## Data Flow

The intended implementation flow is:

1. run `shadcn` CLI and capture the latest React `button` output as reference
2. analyze its API, states, and class semantics
3. extend semantic and button component tokens in `@abc-def/styles`
4. implement shared button selectors in the styles package
5. update the React wrapper to emit the shared class contract and Base UI-style composition surface
6. update the Vue wrapper to emit the same class contract with Vue-appropriate composition behavior
7. update HTML, React, and Vue examples to demonstrate the same contract

Generated CLI output is a reference artifact, not the long-term styling source.

## Error Handling And Compatibility

### CLI Drift

If the latest `shadcn` CLI output differs from current repository assumptions, the implementation should update the shared contract where the difference affects the public Button API in scope for this design.

### Scope Control

If a newly observed upstream option would materially expand scope, it should be treated as out of scope unless it falls within the approved variant and size list in this design.

### HTML Limitation

Plain HTML cannot participate in framework composition APIs. This is expected and should be documented rather than worked around with framework-specific abstractions.

### Token Promotion Discipline

When a new styling value is needed:

1. promote it to a primitive token only if it is a true raw scale
2. promote it to a semantic token only if the meaning is reusable across components
3. otherwise keep it as a button component token

## Testing And Verification

The change is successful when all of the following are true:

- React `Button` exposes the approved `variant` and `size` contract
- React composition follows the Base UI-aligned design for this repository
- Vue exposes the same approved `variant` and `size` contract
- plain HTML can render all approved variants and sizes through classes alone
- `@abc-def/styles` contains the required semantic and button component token coverage
- shared selectors for variant and size mapping are present and exported
- existing components such as `card` and `input` continue to work

Verification should include:

- package typechecks for React and Vue
- styles package build verification
- example app verification for HTML, React, and Vue
- contract checks for shared selector and token presence where the repository already enforces them

## Risks And Mitigations

### Risk: React becomes the de facto style source

Mitigation: keep visual values and selector ownership in `@abc-def/styles` and keep React wrappers thin.

### Risk: Vue drifts from React naming

Mitigation: treat React and Vue prop names as part of the same approved public contract and verify examples in both frameworks.

### Risk: composition semantics create cross-framework confusion

Mitigation: document composition separately from visual styling and avoid promising Radix-style `asChild` behavior.

### Risk: size support grows without token discipline

Mitigation: add only the approved `sm`, `lg`, `icon`, `icon-sm`, and `icon-lg` overrides in this phase and keep sizing token-backed.

## Scope Boundaries

This design covers the `Button` component only.

It does not redesign the broader component catalog, replace the current onboarding workflow, or introduce new automation beyond using `shadcn` CLI output as a reference input.
