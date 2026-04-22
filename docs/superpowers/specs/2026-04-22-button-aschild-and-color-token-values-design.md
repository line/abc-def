# Button AsChild And Color Token Value Design

## Summary

This design updates the React `Button` public API to use Radix-style `asChild` composition instead of the repo's temporary `render` contract.

It also changes the entire `@abc-def/styles` color token system from HSL channel fragments to complete CSS color values while keeping the existing token names. Runtime CSS will consume color variables directly through `var(...)` so consumers no longer need to know that a token happens to be encoded as HSL.

## Goals

- Make `asChild` the official React `Button` composition API.
- Remove the `render`-based React `Button` contract from live code, docs, and examples.
- Keep the existing token naming hierarchy intact across primitive, semantic, and component tokens.
- Convert primitive color token values into complete CSS color values.
- Remove `hsl(var(...))` usage from runtime `@abc-def/styles` CSS.

## Non-Goals

- Add a cross-framework composition API to Vue.
- Rename color tokens or restructure the token hierarchy.
- Expand the approved `Button` variant or size set beyond the current scope.
- Introduce a compatibility period where both `render` and `asChild` are documented as supported public APIs.

## Current Problem

The repository currently has a split contract.

- The React `Button` implementation has already moved toward `asChild`.
- Live documentation and the approved `Button` spec/plan still describe `render` as the official React composition model.
- The color token system still expects consumers to understand that many variables contain HSL fragments and must be wrapped in `hsl(...)`.

That leaves both API and styling contracts harder to understand than necessary and creates a mismatch between implementation and documentation.

## Design

### React Button API

React `Button` will expose `asChild?: boolean` as its official composition surface.

- Default rendering stays `<button>`.
- When `asChild` is `true`, the component renders `Slot.Root` from Radix and passes the resolved classes and supported props through to the slotted child.
- The `render` prop is removed from the public API and from all live repo documentation and examples.
- Vue remains unchanged in this area and continues to expose only the shared variant and size contract.

`type="button"` defaulting remains scoped to the native button case only. When `asChild` is enabled, the component must not inject button-only attributes into an arbitrary child element such as `<a>`.

### Token Architecture

The token layering remains:

`primitive -> semantic -> component -> runtime CSS`

The only representation change is at the primitive value layer and at the CSS consumption layer.

- Primitive color tokens such as `--abc-color-blue-600` keep their names.
- Their values change from HSL fragments like `221.2 83.2% 53.3%` to complete CSS color values like `hsl(221.2 83.2% 53.3%)`.
- Semantic tokens continue to alias primitive tokens with `var(--abc-color-...)`.
- Component tokens continue to alias semantic tokens with `var(...)`.
- Runtime CSS uses the resulting variable directly, for example `background: var(--abc-button-bg)`.

This keeps the token hierarchy readable while hiding the internal color encoding choice from consumers.

### Runtime CSS Migration

All live `@abc-def/styles` runtime CSS must stop wrapping color variables in `hsl(...)`.

This includes:

- component CSS such as button, input, and card styles
- shared utilities
- any other live style entrypoints that currently assume HSL fragment token values

The expected end state is that live styling code reads colors as ordinary CSS values via `var(...)`.

Opacity-aware usage must also be updated. Existing patterns such as `hsl(var(--abc-button-ring) / 0.35)` only work when the token stores HSL channels. After this migration, those locations need a direct CSS-compatible alternative. The preferred approach is to define explicit alpha-ready token values where needed or use a CSS color form that composes correctly with complete values, rather than preserving knowledge of HSL fragments at the consumption site.

### Docs And Examples

All live docs and examples must align to the new contract.

- React README documents `asChild` instead of `render`.
- React examples use the Radix composition pattern, for example a slotted anchor.
- Any live spec/plan/reference text that still describes the active public contract must be updated if it is intended to remain current.
- Vue docs continue to state that there is no cross-framework composition parity promised in this phase.

Archived docs do not need rewriting unless they are presented as current guidance.

## Data Flow

### React Button

The React `Button` flow is:

1. Accept `variant`, `size`, `className`, `asChild`, and standard element props.
2. Resolve semantic button classes through `cva`.
3. Render either a native `<button>` or `Slot.Root`.
4. Apply the resolved class contract and safe props to the rendered element.

This keeps React as a thin wrapper around the shared style contract.

### Styles

The style flow is:

1. Primitive tokens define complete color values.
2. Semantic tokens alias those values without changing representation.
3. Component tokens alias semantic values for component-scoped meaning.
4. Runtime CSS reads the component or semantic token directly through `var(...)`.

This preserves the existing architectural boundary while simplifying CSS consumption.

## Error Handling And Risks

### API Break Risk

Changing the public React API from `render` to `asChild` is a deliberate breaking change for consumers still using `render`.

Mitigation:

- remove `render` from live docs and examples so the repo communicates one contract
- ensure TypeScript surfaces the change clearly through the updated prop type
- keep the migration small and explicit rather than supporting two public composition models at once

### Styling Regression Risk

If any live CSS keeps `hsl(var(--abc-...))` after primitive token values become complete color values, those sites will render invalid or unintended colors.

Mitigation:

- treat the token-value conversion and CSS-consumption conversion as one migration
- verify runtime CSS no longer contains `hsl(var(--abc-`
- inspect opacity-bearing usages separately because they need non-mechanical updates

### Documentation Drift Risk

The repo already contains approved design and plan documents that mention `render`.

Mitigation:

- update any document that is still meant to describe the current live contract
- avoid partial wording changes that leave both composition models appearing valid

## Testing And Verification

Verification should cover both API and style-contract changes.

- React typecheck passes with the `Button` `asChild` API.
- Repo search confirms live React `Button` docs and examples no longer describe `render` as the current public contract.
- Repo search confirms live runtime CSS no longer contains `hsl(var(--abc-`.
- Examples and package verification still pass after the token representation change.

## Acceptance Criteria

- React `Button` public API is documented and implemented with `asChild`.
- Live repo examples show `asChild` usage instead of `render`.
- Primitive color token names stay the same while their values become complete CSS color values.
- Live `@abc-def/styles` runtime CSS consumes color tokens with `var(...)` directly.
- No live current-facing documentation presents `render` as the active React `Button` contract.
