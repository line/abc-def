# Theme Public Contract And Dark Mode Design

## Summary

`@abc-def/styles` already has a token hierarchy under `packages/styles/src/tokens`, but the current `@theme` block in `packages/styles/src/css/base.css` does not have a clearly stated role.

This design keeps `@theme` as a public Tailwind CSS v4 contract instead of removing it. The source of truth remains the token files under `tokens/`, with `semantic.css` becoming the single place that defines both light and dark semantic values. Internal package selectors will continue to consume `--abc-*` tokens directly, while app consumers can rely on `@theme` aliases for Tailwind utilities such as `bg-background` and `text-foreground`.

Dark mode will follow the shadcn-style `.dark` activation model, but only at the token contract level. The shared styles package will provide the light/dark token definitions; each consuming app remains responsible for adding or removing the `.dark` class.

## Goals

- Keep the token source of truth inside `packages/styles/src/tokens`.
- Preserve `@theme` as a public Tailwind-facing alias layer.
- Make the purpose of `@theme` explicit in code, docs, and verification.
- Add dark-mode semantic token overrides using the `.dark` selector.
- Avoid changing the existing component selector contract or requiring app-level runtime code in this package.

## Non-Goals

- Replace internal `--abc-*` usage in component selectors with `--color-*` aliases.
- Add theme toggling logic, providers, or runtime helpers to `@abc-def/styles`.
- Support multiple dark-mode activation strategies in the shared package.
- Expand this work into a broader redesign of component tokens or selector APIs.
- Force example apps to adopt a dark-mode toggle in this scope.

## Decision

The repository will treat `@theme` as the public Tailwind alias facade for the semantic token layer.

That means:

- `packages/styles/src/tokens/semantic.css` remains the semantic token source of truth
- `semantic.css` defines both light (`:root`) and dark (`.dark`) values using the same semantic token names
- `packages/styles/src/css/base.css` keeps `@theme`, but only as a mapping from Tailwind-facing aliases to semantic tokens
- internal selectors in `base.css` and component CSS files continue to consume `--abc-*` tokens directly
- consuming apps activate dark mode by applying `.dark` to the root element, following shadcn conventions

## Rationale

This design keeps the token architecture internally coherent.

The package is already organized around `primitive -> semantic -> component` token layers. Moving dark values into `semantic.css` preserves that architecture by keeping semantic meaning and theme variation in the same layer. It also prevents `base.css` from becoming a second token source of truth.

Keeping `@theme` is still useful because it exposes a stable Tailwind CSS v4 alias surface to consuming apps. That allows app code to use token-aware utilities without forcing the shared package internals to abandon the existing `--abc-*` contracts.

This split also avoids unnecessary churn. Internal selectors and component token files can remain focused on the package's own semantic/component architecture, while `@theme` stays a thin public facade for consumer utilities.

## Token Contract

### `packages/styles/src/tokens/semantic.css`

This file becomes the single semantic theme source for both light and dark values.

- `:root` continues to declare the light semantic token set
- `.dark` declares dark overrides for the same semantic token names
- the token names remain `--abc-*` semantic tokens, not `--color-*` aliases

The semantic layer is responsible for expressing theme changes. Component token files should continue to depend on semantic tokens rather than duplicating light/dark values locally.

### `packages/styles/src/css/base.css`

This file keeps three responsibilities:

- importing token layers
- exposing the public `@theme` alias contract
- defining shared base selectors inside `@layer base`

The `@theme` block remains, but its role is narrowed and documented:

- it is not the source of truth for theme values
- it does not introduce separate light/dark logic
- it maps public aliases such as `--color-background` to semantic tokens such as `--abc-bg-base`

This makes `@theme` a Tailwind-facing facade rather than an internal runtime abstraction.

### Internal Selectors

No selector migration is planned in this scope.

- base selectors continue to use semantic tokens through `--abc-*` references
- component selector files continue to use component tokens through `--abc-*` references
- component token files continue to derive values from semantic tokens

This preserves the current architecture and minimizes regression risk.

## Dark Mode Contract

Dark mode is officially supported through the `.dark` selector only.

- the shared package supports `.dark`
- the shared package does not add `data-theme="dark"` support in this scope
- the shared package does not add automatic `prefers-color-scheme` switching in this scope
- consuming apps are responsible for deciding when to add or remove `.dark`

This aligns the package contract with the common shadcn dark-mode activation model without coupling the style package to app runtime concerns.

## Data Flow

The intended flow after this change is:

1. `primitive.css` declares raw design primitives
2. `semantic.css` maps those primitives into light and dark semantic meanings
3. component token files map semantic tokens into component-specific tokens
4. base and component selectors consume `--abc-*` tokens directly
5. `base.css` exposes a public `@theme` alias layer for consuming apps that want Tailwind token utilities
6. consuming apps opt into dark mode by applying `.dark` at the document root

## Verification

`packages/styles/scripts/verify-build.mjs` should be extended so the package fails fast when the contract drifts.

The verification expectations are:

- `base.css` still contains the expected `@theme` aliases
- each required alias maps to the intended semantic token
- `semantic.css` contains a `.dark` block
- the `.dark` block overrides the core semantic color tokens needed by shared base and component styles

The script does not need to verify app runtime toggling, because runtime theme activation is explicitly outside this package.

## Documentation

The style package documentation should state the contract directly.

- `@theme` exists to expose Tailwind-friendly public aliases for app consumers
- the package's own selectors continue to use `--abc-*` tokens internally
- dark mode is activated by consumer apps applying `.dark`
- the shared package ships token definitions, not a toggle implementation

The example apps do not need runtime changes in this scope. Documentation is enough to define the contract.

## Error Handling And Compatibility

This work should preserve current selectors and package entry points.

- no public selector names should change
- no CSS entry points should be removed
- no app runtime dependencies should be introduced

If dark-mode token overrides reveal a component that bypasses semantic tokens and hardcodes light values, that should be treated as a bug against the intended token architecture and corrected during implementation.

## Validation Criteria

The design is successful when all of the following are true:

- semantic theme values live under `packages/styles/src/tokens`
- `@theme` remains present and documented as a public alias contract
- internal selectors still rely on `--abc-*` tokens rather than the `@theme` aliases
- `semantic.css` supports both `:root` and `.dark`
- applying `.dark` changes the shared base/component appearance through token overrides rather than selector duplication
- docs and verification scripts describe the same contract that the CSS implements

## Risks And Mitigations

### Risk: `@theme` remains ambiguous even after the code change

Mitigation: document it explicitly as a public Tailwind alias layer and verify that aliases point at semantic tokens, not arbitrary values.

### Risk: dark-mode values are added outside the semantic layer

Mitigation: keep dark overrides in `semantic.css` only and treat any duplicate light/dark logic elsewhere as architectural drift.

### Risk: some component styles do not actually follow semantic tokens

Mitigation: use implementation verification to catch components that bypass semantic tokens and patch those references before considering the work complete.

## Scope Boundaries

This design is limited to clarifying the public `@theme` contract and adding token-level dark-mode support for the shared styles package.

It does not include app-level theme toggles, provider setup, system-theme syncing, or any redesign of the current selector API.
