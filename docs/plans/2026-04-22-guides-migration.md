# Guides Migration Implementation Plan

> Historical note: this execution plan was written before the legacy `docs/superpowers` tree was removed. Any `docs/superpowers/...` paths mentioned below are historical references only; the current contributor-facing docs entry point is `docs/guides/`.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the legacy `docs/superpowers` document set with topic-based guides under `docs/guides`, remove duplicate onboarding docs, and leave the repository with a single contributor-facing documentation entry point.

**Architecture:** Treat the current codebase as the primary source of truth and rewrite the accumulated design docs into three current-state guides: architecture, theme/token contract, and component onboarding. Once the new guides exist and no remaining contributor-facing docs depend on `docs/superpowers`, delete `docs/component-onboarding.md` and remove `docs/superpowers` entirely.

**Tech Stack:** Markdown docs, git, ripgrep, find, pnpm workspace repository structure

---

## File Map

- Create `docs/guides/design-system-architecture.md` as the repository-level explanation of style ownership, package responsibilities, and verification surfaces.
- Create `docs/guides/theme-and-token-contract.md` as the current contract for primitive, semantic, and component tokens plus `@theme` and `.dark`.
- Create `docs/guides/component-onboarding.md` as the expanded replacement for the root onboarding checklist.
- Delete `docs/component-onboarding.md` after its content is absorbed into the new onboarding guide.
- Delete `docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md`.
- Delete `docs/superpowers/specs/2026-04-21-plain-html-styles-example-design.md`.
- Delete `docs/superpowers/specs/2026-04-21-tailwindcss-v4-design.md`.
- Delete `docs/superpowers/specs/2026-04-21-token-architecture-and-component-onboarding-design.md`.
- Delete `docs/superpowers/specs/2026-04-22-button-aschild-and-color-token-values-design.md`.
- Delete `docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md`.
- Delete `docs/superpowers/specs/2026-04-22-styles-layered-css-design.md`.
- Delete `docs/superpowers/specs/2026-04-22-theme-public-contract-and-dark-mode-design.md`.
- Delete `docs/superpowers/plans/2026-04-21-plain-html-styles-example.md`.
- Delete `docs/superpowers/plans/2026-04-21-token-architecture-and-component-onboarding-design.md`.
- Delete `docs/superpowers/plans/2026-04-22-button-aschild-and-color-token-values-design.md`.
- Delete `docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`.
- Delete `docs/superpowers/plans/2026-04-22-styles-layered-css-design.md`.
- Delete `docs/superpowers/plans/2026-04-22-theme-public-contract-and-dark-mode.md`.
- Delete `docs/superpowers/references/2026-04-22-button-upstream-contract.md`.
- Verify no remaining contributor-facing docs direct readers to `docs/superpowers`.

## Guardrails

- Do not keep parallel copies of contributor guidance in both `docs/guides` and the legacy locations.
- Do not copy future-tense spec language verbatim when a present-tense rule can be written more clearly.
- Do not invent behavior that is not supported by the current repository structure.
- Do not delete legacy docs until the new guide that replaces them has been written.
- Do not remove `docs/specs/2026-04-22-guides-migration-design.md`; it is the approved design input for this work.

### Task 1: Write The Architecture Guide

**Files:**
- Create: `docs/guides/design-system-architecture.md`
- Read: `packages/styles/src/css/base.css`
- Read: `packages/styles/src/css/components.css`
- Read: `packages/styles/src/css/index.css`
- Read: `packages/styles/src/tokens/primitive.css`
- Read: `packages/styles/src/tokens/semantic.css`
- Read: `packages/styles/src/tokens/components/button.css`
- Read: `packages/react/src/index.ts`
- Read: `packages/vue/src/index.ts`
- Read: `docs/superpowers/specs/2026-04-21-token-architecture-and-component-onboarding-design.md`
- Read: `docs/superpowers/specs/2026-04-22-theme-public-contract-and-dark-mode-design.md`
- Test: `sed -n '1,240p' docs/guides/design-system-architecture.md`

- [ ] **Step 1: Create the `docs/guides` directory**

Run: `mkdir -p docs/guides`
Expected: command exits successfully with no output.

- [ ] **Step 2: Write the architecture guide in current-state language**

Create `docs/guides/design-system-architecture.md` with this content:

```md
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
```

- [ ] **Step 3: Review the written guide for structure and source alignment**

Run: `sed -n '1,240p' docs/guides/design-system-architecture.md`
Expected: the output shows a single current-state guide with sections for package roles, token layers, CSS structure, framework integration, and verification surfaces.

- [ ] **Step 4: Commit the architecture guide**

```bash
git add docs/guides/design-system-architecture.md
git commit -m "docs: add design system architecture guide"
```

### Task 2: Write The Theme And Token Contract Guide

**Files:**
- Create: `docs/guides/theme-and-token-contract.md`
- Read: `packages/styles/src/tokens/primitive.css`
- Read: `packages/styles/src/tokens/semantic.css`
- Read: `packages/styles/src/tokens/components/button.css`
- Read: `packages/styles/src/tokens/components/card.css`
- Read: `packages/styles/src/tokens/components/input.css`
- Read: `packages/styles/src/css/base.css`
- Read: `docs/superpowers/specs/2026-04-21-token-architecture-and-component-onboarding-design.md`
- Read: `docs/superpowers/specs/2026-04-22-theme-public-contract-and-dark-mode-design.md`
- Test: `sed -n '1,260p' docs/guides/theme-and-token-contract.md`

- [ ] **Step 1: Write the token-contract guide**

Create `docs/guides/theme-and-token-contract.md` with this content:

```md
# Theme And Token Contract

## Purpose

This repository uses a layered token system so shared styling can be expressed once and consumed consistently by plain HTML, React, and Vue.

The token contract defines both value ownership and dependency direction. Contributors should treat that contract as part of the public behavior of `@abc-def/styles`.

## Token Layers

### Primitive Tokens

Primitive tokens live in `packages/styles/src/tokens/primitive.css`.

They store raw scales such as color, spacing, radius, size, and typography values. Primitive tokens do not express UI meaning.

### Semantic Tokens

Semantic tokens live in `packages/styles/src/tokens/semantic.css`.

They map shared UI meaning to primitive values. This layer is where repository-wide meaning such as background, foreground, border, ring, accent, muted, and destructive roles is defined.

Semantic tokens are also where theme variation lives. Light and dark mode use the same semantic token names, with `.dark` overriding values for the dark theme.

### Component Tokens

Component tokens live in `packages/styles/src/tokens/components/*.css`.

They map component-level contracts to semantic tokens. These tokens express values such as component background, foreground, border, height, padding, and ring behavior for a specific component.

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
- it maps those aliases to the repository's semantic token contract
- it is not the source of truth for token values

Internal selectors continue to consume `--abc-*` tokens directly. `@theme` exists as a public facade for app-level utility usage, not as a replacement for the repository's internal token naming.

## Dark Mode Contract

Dark mode is activated with the `.dark` selector.

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
```

- [ ] **Step 2: Review the guide and verify that it describes current files instead of historical plans**

Run: `sed -n '1,260p' docs/guides/theme-and-token-contract.md`
Expected: the output names the current token files, explains dependency direction, and documents `@theme` plus `.dark` as present-tense contract rules.

- [ ] **Step 3: Commit the token-contract guide**

```bash
git add docs/guides/theme-and-token-contract.md
git commit -m "docs: add theme and token contract guide"
```

### Task 3: Replace The Onboarding Guide

**Files:**
- Create: `docs/guides/component-onboarding.md`
- Delete: `docs/component-onboarding.md`
- Read: `docs/component-onboarding.md`
- Read: `packages/styles/src/tokens/components/button.css`
- Read: `packages/styles/src/css/components/button.css`
- Read: `packages/react/src/components/button.tsx`
- Read: `packages/vue/src/components/button.ts`
- Read: `packages/styles/scripts/verify-build.mjs`
- Read: `docs/superpowers/specs/2026-04-21-token-architecture-and-component-onboarding-design.md`
- Read: `docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md`
- Test: `sed -n '1,320p' docs/guides/component-onboarding.md`

- [ ] **Step 1: Write the expanded onboarding guide**

Create `docs/guides/component-onboarding.md` with this content:

```md
# Component Onboarding

## Purpose

This guide describes how a new shared UI component enters the repository's design-system contract.

The workflow starts from an upstream or local reference implementation, converts that implementation into the repository's token model, and then aligns the shared CSS plus framework wrappers around the same contract.

## Source Inputs

Start from one of these inputs:

- a `shadcn/ui` implementation
- a `shadcn-vue` implementation
- a local baseline component already used in this repository

Treat that source as analysis input, not as the final public API.

## Onboarding Workflow

1. Start from a `shadcn/ui`, `shadcn-vue`, or local baseline implementation.
2. Analyze class meaning before copying code.
3. Promote raw values into primitive tokens only when they are true scales.
4. Promote shared UI meaning into semantic tokens before creating component tokens.
5. Add public component tokens in `packages/styles/src/tokens/components/<component>.css`.
6. Add selectors in `packages/styles/src/css/components/<component>.css`.
7. Update React and Vue wrappers to render the shared selectors.
8. Export the new components from `packages/react/src/index.ts` and `packages/vue/src/index.ts`.
9. If the new component expands the hard-coded selector or token contract checks, extend `packages/styles/scripts/verify-build.mjs`.
10. Verify `examples/html-vite`, `examples/react-vite`, and `examples/vue-vite`.

## Decision Rules

### Analyze Before Translating

Do not copy upstream class strings into the repository unchanged without understanding what they do.

Break the source component into visual responsibilities first:

- layout
- spacing
- color
- border
- radius
- focus and ring behavior
- disabled state
- variants and sizes

Only then decide which parts belong in tokens and which belong in selectors.

### Decide Where Values Belong

Use this order of evaluation:

1. primitive token for reusable raw scale
2. semantic token for shared UI meaning
3. component token for component-specific contract

Avoid jumping directly from upstream classes to component tokens when the value really represents shared meaning that other components will need.

### Keep The Public Contract Component-Centered

Component token names should describe the component contract:

- `--abc-button-bg`
- `--abc-button-fg`
- `--abc-button-border`
- `--abc-button-ring`

Do not expose upstream utility-fragment names as the public token API.

## Files To Touch

Most component onboarding work crosses the same set of files:

- `packages/styles/src/tokens/components/<component>.css`
- `packages/styles/src/css/components/<component>.css`
- `packages/styles/src/css/components.css`
- `packages/react/src/components/<component>.tsx`
- `packages/vue/src/components/<component>.ts`
- `packages/react/src/index.ts`
- `packages/vue/src/index.ts`

Some components also require semantic-token additions in `packages/styles/src/tokens/semantic.css` or verification changes in `packages/styles/scripts/verify-build.mjs`.

## Verification

A component is not fully onboarded when only one framework works.

Verification should cover:

- shared CSS contract in `packages/styles`
- React wrapper behavior
- Vue wrapper behavior
- plain HTML rendering where applicable
- example apps in `examples/html-vite`, `examples/react-vite`, and `examples/vue-vite`

## Working Rule

Treat component onboarding as design-system translation work, not as framework-specific component copying.

The repository's contract is complete only when shared tokens, shared selectors, framework wrappers, exports, and verification all agree on the same component behavior.
```

- [ ] **Step 2: Remove the old root onboarding doc after its content has been absorbed**

Run: `rm docs/component-onboarding.md`
Expected: the file is removed from the working tree.

- [ ] **Step 3: Review the new onboarding guide**

Run: `sed -n '1,320p' docs/guides/component-onboarding.md`
Expected: the output preserves the original workflow steps, adds decision rules, and points to the exact package files involved in onboarding work.

- [ ] **Step 4: Commit the onboarding-guide replacement**

```bash
git add docs/guides/component-onboarding.md docs/component-onboarding.md
git commit -m "docs: replace root onboarding doc with guide"
```

### Task 4: Remove Legacy Superpowers Docs And Verify The New Entry Point

**Files:**
- Delete: `docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md`
- Delete: `docs/superpowers/specs/2026-04-21-plain-html-styles-example-design.md`
- Delete: `docs/superpowers/specs/2026-04-21-tailwindcss-v4-design.md`
- Delete: `docs/superpowers/specs/2026-04-21-token-architecture-and-component-onboarding-design.md`
- Delete: `docs/superpowers/specs/2026-04-22-button-aschild-and-color-token-values-design.md`
- Delete: `docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md`
- Delete: `docs/superpowers/specs/2026-04-22-styles-layered-css-design.md`
- Delete: `docs/superpowers/specs/2026-04-22-theme-public-contract-and-dark-mode-design.md`
- Delete: `docs/superpowers/plans/2026-04-21-plain-html-styles-example.md`
- Delete: `docs/superpowers/plans/2026-04-21-token-architecture-and-component-onboarding-design.md`
- Delete: `docs/superpowers/plans/2026-04-22-button-aschild-and-color-token-values-design.md`
- Delete: `docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`
- Delete: `docs/superpowers/plans/2026-04-22-styles-layered-css-design.md`
- Delete: `docs/superpowers/plans/2026-04-22-theme-public-contract-and-dark-mode.md`
- Delete: `docs/superpowers/references/2026-04-22-button-upstream-contract.md`
- Test: `find docs/guides -maxdepth 1 -type f | sort`
- Test: `rg -n "docs/superpowers|component-onboarding\\.md" docs README.md packages examples`
- Test: `git diff --check`

- [ ] **Step 1: Remove the legacy `docs/superpowers` files**

Run this command:

```bash
rm -rf docs/superpowers
```

Expected: `docs/superpowers` no longer exists in the working tree.

- [ ] **Step 2: Verify that only the new guide set remains as the contributor-facing entry point**

Run: `find docs/guides -maxdepth 1 -type f | sort`
Expected:

```text
docs/guides/component-onboarding.md
docs/guides/design-system-architecture.md
docs/guides/theme-and-token-contract.md
```

- [ ] **Step 3: Search for stale references to removed doc paths**

Run: `rg -n "docs/superpowers|component-onboarding\\.md" docs README.md packages examples`
Expected: no matches that direct contributors to `docs/superpowers`; a match for `docs/guides/component-onboarding.md` is acceptable only if it points to the new guide path.

- [ ] **Step 4: Run a whitespace and patch sanity check**

Run: `git diff --check`
Expected: no output.

- [ ] **Step 5: Commit the documentation migration cleanup**

```bash
git add docs/guides docs/component-onboarding.md docs/superpowers
git commit -m "docs: replace superpowers docs with guides"
```

## Self-Review

- Spec coverage: this plan creates the three target guides, deletes `docs/component-onboarding.md`, removes `docs/superpowers`, and verifies that `docs/guides` is the remaining contributor-facing entry point.
- Placeholder scan: each task contains exact file paths, explicit content for created guides, concrete commands, and expected verification output.
- Type consistency: the plan uses the same three guide paths throughout and keeps deletion scope aligned with the approved spec.
