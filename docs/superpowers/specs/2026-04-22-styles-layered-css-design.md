# Styles Layered CSS Design

## Summary

`@abc-def/styles` is already organized by file names that suggest `base`, `components`, and `utilities`, but the published CSS does not currently express those boundaries through Tailwind CSS v4's layer model.

This design keeps the consumer API simple while aligning the internal CSS contract with Tailwind v4 conventions. Consumers will continue to write:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

The `@abc-def/styles/css` package entry will remain the single recommended import. Internally, the package will explicitly map its CSS into Tailwind v4-style base, components, and utilities responsibilities.

## Goals

- Keep the consumer-facing import contract unchanged.
- Make the `styles` package internals structurally match Tailwind CSS v4 conventions.
- Ensure `base`, `components`, and `utilities` are real cascade boundaries, not only file naming conventions.
- Preserve the public selector contract for existing semantic classes.
- Keep the package documentation centered on `@abc-def/styles/css` as the primary entry point.

## Non-Goals

- Change the recommended consumer import to a package-owned Tailwind bootstrap.
- Remove existing public semantic class names.
- Expand the package into a broader redesign of tokens or component APIs.
- Require consumers to compose `base`, `components`, and `utilities` entry points manually.

## Decision

The repository will keep `@abc-def/styles/css` as the primary public CSS entry point and move the package internals closer to Tailwind CSS v4's documented model.

That means:

- consumers continue to import `tailwindcss` in app CSS, then import `@abc-def/styles/css`
- the shared package does not import `tailwindcss` on behalf of consumers
- base rules move into `@layer base`
- semantic component selectors move into `@layer components`
- shared utility helpers move to `@utility` where possible
- `@abc-def/styles/css/base`, `@abc-def/styles/css/components`, and `@abc-def/styles/css/utilities` remain exported as secondary entry points, but they are not the main documented integration path

## Rationale

This design keeps the public integration simple while making the internal cascade model explicit.

Tailwind CSS v4 encourages custom base styles in `@layer base`, component classes in `@layer components`, and custom utilities through `@utility`. The current package structure communicates those roles only through file names. That is understandable for maintainers, but it does not fully describe intent to Tailwind or to the browser cascade.

Keeping the consumer-side `@import "tailwindcss";` responsibility in application CSS is the safer contract. It leaves app-level `@source`, local `@theme`, and additional app stylesheet composition under the app's control instead of moving Tailwind bootstrapping into the shared style package.

## Public API

### Recommended Entry

The documented public entry remains:

- `@abc-def/styles/css`

Consumers should continue to use:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

### Secondary Entries

These entry points remain exported:

- `@abc-def/styles/css/base`
- `@abc-def/styles/css/components`
- `@abc-def/styles/css/utilities`

They are retained for compatibility and internal clarity, but documentation should treat them as secondary rather than the primary integration model.

## Internal CSS Layout

### `src/css/index.css`

This file remains the aggregate package entry. Its responsibility is limited to importing the internal CSS groups in the intended order:

1. `base.css`
2. `components.css`
3. `utilities.css`

It should not own selectors directly.

### `src/css/base.css`

This file owns:

- token imports needed for the shared contract
- `@theme` declarations
- global resets
- element defaults such as `body`, `img`, and form-control font inheritance

Selector rules in this file should be wrapped in `@layer base`.

### `src/css/components.css`

This file owns:

- component token imports
- imports for component selector files such as button, card, and input

Semantic selectors like `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.card`, `.card-header`, `.card-content`, `.card-body`, `.card-title`, `.card-actions`, and `.input` should live in `@layer components`.

### `src/css/utilities.css`

This file owns small shared helpers only. Utility helpers should be expressed with `@utility` where possible so they participate in Tailwind v4's utility model directly.

If a helper must remain a plain selector for a specific reason, it still needs to remain narrowly scoped to utility behavior, documented as an exception, and prevented from accumulating component or base responsibilities.

## Data Flow

The intended flow after this change is:

1. consumer app CSS imports `tailwindcss`
2. consumer app CSS imports `@abc-def/styles/css`
3. `@abc-def/styles/css` imports the package's internal base, component, and utility group files
4. the package CSS expresses its responsibilities through Tailwind v4-aligned layer constructs
5. Tailwind compiles the consumer stylesheet with a clearer cascade contract

## Behavior And Cascade Expectations

- Global defaults from the shared package behave as base-layer styles instead of unlayered package CSS.
- Semantic component classes are treated as component-layer styles.
- Tailwind utilities and shared custom utilities operate through the utilities contract instead of competing with broadly unlayered selectors.
- Public semantic selectors remain stable so consuming markup does not need to change.

This is both a style-convention improvement and a cascade-clarity improvement. The package will no longer rely on file naming alone to communicate ordering intent.

## Compatibility Policy

- Keep `@import "@abc-def/styles/css";` as the main package import.
- Keep the existing public semantic class names unchanged.
- Keep secondary CSS subpath exports available.
- Update docs to recommend only the main CSS entry unless a narrower use case truly requires the secondary entries.
- Preserve or extend verification so the public selector contract remains explicit.

## Error Handling

This change should not silently alter the public selector surface.

If implementation requires changing a selector name or entry point, that should be treated as a deliberate breaking change and documented explicitly. The default expectation for this work is structural cleanup with stable consumer-facing names.

## Validation Criteria

The design is successful when all of the following are true:

- package docs still recommend `@import "tailwindcss";` followed by `@import "@abc-def/styles/css";`
- `@abc-def/styles/css` remains the main documented entry point
- internal CSS files clearly separate base, component, and utility responsibilities
- base selectors are authored in `@layer base`
- component selectors are authored in `@layer components`
- shared utility helpers use `@utility` where appropriate
- existing public semantic selectors are still present

## Risks And Mitigations

### Risk: partial migration leaves some selectors unlayered

Mitigation: treat any remaining unlayered selectors in `src/css` as cleanup bugs and verify the final CSS source tree deliberately.

### Risk: utility helpers do not map cleanly to `@utility`

Mitigation: convert helpers opportunistically, but keep them narrowly utility-scoped even if a temporary plain-selector form remains during migration.

### Risk: documentation drifts from the actual package contract

Mitigation: update package README examples and any nearby internal docs that describe the style package structure in ways that would conflict with the new layer-aligned contract.

## Scope Boundaries

This design is limited to the shared CSS package contract and its documentation. It does not propose a new token architecture, new component APIs, or a changed consumer integration model beyond making the internal CSS structure align with Tailwind CSS v4 conventions.
