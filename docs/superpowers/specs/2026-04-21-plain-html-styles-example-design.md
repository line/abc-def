# Plain HTML Styles Example Design

## Summary

This repository will stop treating `@abc-def/html` as the official plain HTML consumption surface.

Instead, plain HTML consumers will use `@abc-def/styles/css` directly, and the shared styles package will expose a small semantic class contract that works with static HTML markup.

This work also adds a new example project under `examples/` to verify that plain HTML consumption works without React, Vue, or a custom HTML API package.

## Goals

- Make plain HTML consumption an officially supported usage mode.
- Remove the need for a separate `@abc-def/html` package.
- Make `@abc-def/styles/css` the single CSS entry point for plain HTML consumers.
- Add a minimal workspace example that proves static HTML markup can consume the shared styles package successfully.
- Shift the style contract toward semantic component classes for the first plain HTML surface.

## Non-Goals

- Build a large demo site or documentation app.
- Preserve the current string-template API in `@abc-def/html`.
- Introduce JavaScript-driven DOM helpers for the first plain HTML integration.
- Define a large component catalog in the first pass.
- Support both the old `@abc-def/html` direction and the new plain HTML direction as equal public APIs.

## Decision

The repository will use `@abc-def/styles/css` as the official plain HTML entry point.

That means:

- `@abc-def/html` is no longer needed as a public package
- plain HTML examples should import `@abc-def/styles/css` directly
- shared styles should expose semantic classes such as `.card`, `.card-body`, `.card-title`, `.card-actions`, `.btn`, and `.btn-primary`
- consumers write ordinary HTML markup and attach documented classes instead of calling template-generation APIs

This is the preferred design because the current HTML package adds an extra API layer without solving a real consumption problem. Static HTML users need a CSS contract and predictable class names, not functions that return markup strings.

## Target Architecture

The package boundary changes:

- `@abc-def/styles`
- `@abc-def/react`
- `@abc-def/vue`

The `@abc-def/html` package is removed from the intended public architecture.

Plain HTML support is folded into the shared styles package. The style package becomes responsible for both:

- shared tokens and base styles
- a minimal semantic component class layer for static HTML consumers

The repository should also contain a small example application under `examples/` that demonstrates the contract in a real workspace consumer.

## Public API Changes

### Removed

- `@abc-def/html` as an official package surface
- template-style APIs such as `buttonPattern()`, `inputPattern()`, and `cardPattern()`
- `@abc-def/html/css` as a documented plain HTML CSS entry point

### Supported

- `@abc-def/styles/css` as the official CSS import for plain HTML consumers
- static HTML markup that uses semantic classes
- a minimal example project that validates the plain HTML contract inside the workspace

### Plain HTML Contract

The initial semantic class contract should stay intentionally small.

The first supported classes should cover the example use case:

- `.btn`
- `.btn-primary`
- `.btn-secondary`
- `.btn-outline`
- `.card`
- `.card-body`
- `.card-title`
- `.card-actions`
- `.input`

The contract should separate structure classes from variant classes.

For example:

- `.btn` defines base button layout, spacing, radius, and typography
- `.btn-primary` defines the primary visual variant
- `.card` defines outer container structure
- `.card-body` defines inner spacing and layout

This keeps the API readable in markup and prevents consumers from depending on long utility-class combinations.

## Package Responsibilities

### `@abc-def/styles`

This package becomes the only supported plain HTML styling surface.

It is responsible for:

- tokens
- base CSS
- semantic plain HTML component classes
- documentation that shows direct CSS consumption

The package should not require a companion HTML API package for ordinary static markup use cases.

### `@abc-def/react`

This package remains a consumer of the shared style contract.

It may continue composing utility-style classes internally, but its existence should not be required for plain HTML usage.

### `@abc-def/vue`

This package follows the same boundary as React and should remain independent of the plain HTML entry story.

## Internal Source Layout

`packages/styles` should keep its internal structure focused and explicit:

- `src/tokens/*` for token definitions
- `src/css/*` for published CSS
- component-oriented CSS organization inside `src/css/*` where that improves clarity

The important constraint is not the exact file split. The important constraint is that semantic plain HTML classes live in the shared style package and are published through `@abc-def/styles/css`.

The old HTML package source tree should not receive further feature work.

## Example Consumer

A new workspace consumer will be added under `examples/`.

The example should be:

- `examples/html-vite`

This example exists to validate the plain HTML contract, not to become a full showcase app.

It should:

- be a workspace package
- import `@abc-def/styles/css` from its app stylesheet
- render static HTML markup in `index.html`
- use the semantic classes defined by the style package
- build successfully through Vite

The example should stay minimal. It only needs enough markup to prove that the contract works. A card layout with a title, body text, actions area, and a primary button is sufficient for the first pass. An input can be included if it helps validate a second semantic component class.

## Data Flow

The intended flow for plain HTML consumers is:

1. the consumer imports `@abc-def/styles/css`
2. the shared stylesheet provides tokens, base styles, and semantic component classes
3. the consumer writes ordinary HTML markup using documented class names
4. the bundler emits a final stylesheet and the static page renders with the design system styles

There is no HTML template helper layer in this flow.

The example consumer should mirror that exact path so it functions as both documentation and contract verification.

## Documentation Scope

This design requires documentation updates that remove ambiguity about the plain HTML story.

Required updates:

- update the root README package summary if it still presents `@abc-def/html` as an active package
- update `packages/styles/README.md` to show plain HTML usage with semantic classes
- remove `packages/html/README.md` and related references as part of deleting the package
- ensure example documentation points developers to `@abc-def/styles/css` as the official entry point

The documentation should show real static HTML snippets that resemble the intended consumer markup.

## Error Handling And Failure Model

This design should fail loudly when the plain HTML contract regresses.

Expected failure modes:

- if `@abc-def/styles/css` export resolution is wrong, the example build fails
- if semantic classes are missing from the style package, the example renders as mostly unstyled markup
- if documentation drifts back toward the old HTML package story, developers will have conflicting public entry points

The example project is intentionally small so these failures are easy to identify and isolate.

## Validation Criteria

This design is successful when all of the following are true:

- `@abc-def/styles/css` is the documented plain HTML entry point
- the repository has a new `examples/html-vite` workspace consumer
- the example builds successfully
- the example uses semantic component classes from the style package
- the style package defines the classes used by the example
- the repository no longer treats `@abc-def/html` as the recommended plain HTML path

Workspace configuration, lockfile state, and documentation must all reflect removal of `@abc-def/html` consistently.

## Risks And Mitigations

### Risk: the semantic class layer grows too quickly

Mitigation: keep the first contract small and example-driven. Only introduce the classes needed for the minimal plain HTML example.

### Risk: styles become split between utility-only and semantic-only approaches

Mitigation: define plain HTML semantic classes as an official supported surface in `@abc-def/styles`, not as an ad hoc example-only layer.

### Risk: removing `@abc-def/html` creates cleanup churn across docs and workspace metadata

Mitigation: treat removal as an explicit part of the implementation plan rather than leaving a half-deprecated package behind.

### Risk: the example proves only bundler integration and not true browser usability

Mitigation: keep the goal explicit. This work validates plain HTML consumption inside the workspace through a minimal Vite example. Direct no-build distribution can be considered separately if it becomes a real requirement.

## Implementation Notes For Planning

Implementation planning should cover at least these work areas:

1. remove `@abc-def/html`
2. extend `@abc-def/styles/css` with the first semantic class contract
3. add `examples/html-vite` as the minimal plain HTML consumer
4. update docs to point plain HTML consumers to `@abc-def/styles/css`
5. verify build behavior and class contract consistency
