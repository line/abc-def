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
