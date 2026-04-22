# Theme And Token Contract

## Purpose

This repository uses a layered token system so shared styling can be expressed once and consumed consistently by plain HTML, React, and Vue.

The token contract defines both value ownership and dependency direction. Contributors should treat that contract as part of the public behavior of `@abc-def/styles`.

## Token Layers

### Primitive Tokens

Primitive tokens live in `packages/styles/src/tokens/primitive.css`.

They store foundational scales and low-level reusable values such as color, spacing, radius, size, typography, and shadow definitions (for example `--abc-shadow-raised-sm`). Primitive tokens do not bake in broader UI meaning.

### Semantic Tokens

Semantic tokens live in `packages/styles/src/tokens/semantic.css`.

They map shared UI meaning to primitive values. This layer is where repository-wide meaning such as background, foreground, border, ring, accent, muted, and destructive roles is defined.

Semantic tokens are also where theme variation lives. Light and dark mode use the same semantic token names, with `.dark` overriding values for the dark theme.

### Component Tokens

Component tokens live in `packages/styles/src/tokens/components/*.css`.

They map component-level contracts to semantic tokens. These tokens express values such as component background, foreground, border, height, padding, and ring behavior for a specific component.

New component token files must be imported by `packages/styles/src/css/components.css` and then shipped through `packages/styles/src/css/index.css`, otherwise the values never reach downstream consumers.

## Dependency Direction

Dependency direction is fixed:

1. primitive tokens define raw values
2. semantic tokens may reference primitive tokens
3. component tokens may reference semantic tokens
4. selectors may reference semantic tokens and component tokens

The reverse direction is not allowed.

Contributors should avoid these patterns:

- semantic tokens redefining component-specific contracts
- component tokens referencing primitive tokens directly when a semantic token expresses the meaning
- selectors hardcoding raw values that should exist as tokens

## Promotion Rules

When a new value appears during component work, evaluate it in this order:

1. If it is a reusable raw scale, add it to primitive tokens.
2. If it expresses shared UI meaning, add it to semantic tokens.
3. If it only belongs to one component contract, add it to that component's token file.

This keeps token growth intentional and prevents component work from bypassing the semantic layer.

## `@theme` Contract

`packages/styles/src/css/base.css` contains the public `@theme` alias layer.

Its role is narrow and explicit:

- it exposes Tailwind-friendly aliases for app consumers
- color aliases map to the repository's semantic token contract while radius and spacing aliases map directly to primitive tokens
- it is not the source of truth for token values

Internal selectors continue to consume `--abc-*` tokens directly. `@theme` exists as a public facade for app-level utility usage, not as a replacement for the repository's internal token naming.

## Dark Mode Contract

Dark mode is activated with the `.dark` selector applied at the app root for global theming.

The shared package provides the token definitions for both light and dark values, but consuming applications decide when to apply or remove `.dark`.

This guide assumes:

- semantic tokens own light and dark values
- component tokens continue to derive from semantic tokens
- selectors do not duplicate light and dark visual logic when token overrides are sufficient

## Component Token Examples

The current repository includes component token files for:

- `button`
- `card`
- `input`

These files demonstrate the intended contract shape: component-specific names that describe the public surface of a component rather than raw class fragments copied from an upstream implementation.

## Contributor Rules

When editing tokens or theme behavior:

1. keep the primitive -> semantic -> component dependency flow intact
2. add theme variation in semantic tokens before touching component selectors
3. keep `@theme` aligned with the semantic contract
4. preserve internal selector usage of `--abc-*` tokens

If a change does not fit these rules cleanly, treat that as a signal to re-check the contract before editing code.
