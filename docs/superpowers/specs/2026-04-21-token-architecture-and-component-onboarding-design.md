# Token Architecture And Component Onboarding Design

## Summary

This repository will restructure `@abc-def/styles` around a three-tier token model:

- primitive tokens
- semantic tokens
- component-specific tokens

The source of truth shifts to CSS so the same contract can be consumed consistently by plain HTML, React, and Vue.

This work also defines a repeatable onboarding workflow for new UI components derived from `shadcn/ui` style implementations and a companion AI agent skill that guides that workflow without fully automating token decisions.

## Goals

- Establish a clear token dependency model: `primitive -> semantic -> component-specific`.
- Make CSS the canonical token source so HTML, React, and Vue consume the same styling contract.
- Split internal style sources by token ownership while exposing consumer-friendly CSS entry points.
- Convert the existing `button`, `card`, and `input` components to the new structure in the first pass.
- Define a repeatable component onboarding workflow based on analyzing `shadcn/ui` style source components.
- Define a semi-automated AI skill that helps contributors add component tokens and propagate them across styles, React, Vue, and examples.

## Non-Goals

- Build a full code generator for tokens, CSS, React, and Vue in this first pass.
- Migrate the full `shadcn/ui` component catalog immediately.
- Add Figma sync or token export pipelines.
- Introduce state-expanded semantic taxonomies such as `primary-hover`, `primary-active`, or `primary-disabled`.
- Add visual snapshot automation in the first pass.

## Decision

The repository will adopt a mixed internal structure:

- token source files are organized by ownership layer
- published and consumer-facing CSS is organized by rendering layer

This is preferred over a single flat CSS file because the repository needs two different kinds of clarity:

- design-token ownership and dependency direction for maintainers
- predictable CSS entry points for consumers

The canonical dependency rule is:

1. primitive tokens define raw values
2. semantic tokens map UI meaning to primitive tokens
3. component-specific tokens map component contracts to semantic tokens
4. selectors and utility rules consume those component-specific or semantic tokens

No reverse dependency is allowed.

## Target Architecture

### Package role

`@abc-def/styles` remains the shared styling contract for:

- plain HTML consumers
- `@abc-def/react`
- `@abc-def/vue`

The package becomes more explicit about internal ownership boundaries.

### Internal source layout

The first-pass target layout in `packages/styles` is:

- `src/tokens/primitive.css`
- `src/tokens/semantic.css`
- `src/tokens/components/<component>.css`
- `src/css/base.css`
- `src/css/components.css`
- `src/css/utilities.css`
- `src/css/components/<component>.css`
- `src/css/index.css` if an aggregate stylesheet is needed

The split has two responsibilities.

Token files define variables and dependency boundaries.

CSS entry files define how those variables are applied to selectors, base rules, and utilities.

### Dependency rules

The allowed dependency directions are:

- `primitive.css` may define only raw values
- `semantic.css` may reference primitive tokens
- `tokens/components/*.css` may reference semantic tokens
- `css/components/*.css` may reference component-specific tokens and shared semantic tokens when needed
- `base.css` may reference primitive and semantic tokens for global element styling
- `utilities.css` may expose shared utility classes based on semantic tokens

The forbidden dependency directions are:

- semantic directly redefining component contracts
- component-specific tokens referencing primitive tokens directly
- selectors depending on ad hoc raw values when a token exists

## Token Model

### Primitive tokens

Primitive tokens are raw design values.

Examples:

- raw color values
- radius values
- spacing values
- sizing values

Primitive tokens do not express UI meaning. They only define the underlying scale.

### Semantic tokens

Semantic tokens express shared UI meaning. They are written in a matrix form of:

- property
- role

The initial semantic vocabulary is:

- properties: `bg`, `fg`, `border`, `ring`
- roles: `primary`, `secondary`, `muted`, `accent`, `destructive`, `base`, `dim`, `hover`

Representative examples:

- `--abc-bg-primary`
- `--abc-fg-primary`
- `--abc-border-primary`
- `--abc-ring-primary`
- `--abc-bg-secondary`
- `--abc-fg-secondary`
- `--abc-border-secondary`
- `--abc-ring-secondary`
- `--abc-bg-muted`
- `--abc-fg-muted`
- `--abc-border-muted`
- `--abc-ring-muted`
- `--abc-bg-accent`
- `--abc-fg-accent`
- `--abc-border-accent`
- `--abc-ring-accent`
- `--abc-bg-destructive`
- `--abc-fg-destructive`
- `--abc-border-destructive`
- `--abc-ring-destructive`
- `--abc-bg-base`
- `--abc-fg-base`
- `--abc-bg-dim`
- `--abc-bg-hover`
- `--abc-fg-hover`

This is a naming framework, not a requirement to materialize every mathematically possible combination.

The repository should only define combinations with stable UI meaning. For example, `ring-base` or `border-hover` should not exist unless a real shared use case appears.

### Component-specific tokens

Component-specific tokens are public component contracts such as:

- `--abc-button-bg`
- `--abc-button-fg`
- `--abc-button-border`
- `--abc-button-ring`
- `--abc-button-height`
- `--abc-button-padding-inline`

These tokens are public by design in the first pass. Consumers are allowed to override them intentionally.

Component-specific tokens must be named around the component contract, not around utility-class fragments.

Internally, contributors may still analyze source components through the lens of `shadcn/ui` class meaning, but the exposed token contract should stay centered on component names.

## Semantic Promotion Rules

When a contributor encounters a new styling value while onboarding a component, the evaluation order is:

1. Is this a raw scale value? If yes, it belongs in primitive tokens.
2. Is this a shared UI meaning that could be reused by multiple components? If yes, it belongs in semantic tokens.
3. Is this specific to a single component contract? If yes, it belongs in component-specific tokens.

New values should not be added directly to primitive tokens if they express UI meaning.

Component-specific tokens should not bypass semantic tokens just because a direct primitive mapping is shorter to write.

## Component Onboarding Workflow

New components should follow a fixed onboarding path.

1. Import or reference the source implementation from `shadcn/ui`, `shadcn-vue`, or a local component baseline.
2. Analyze the original class composition instead of copying it as the final contract.
3. Extract the component's visual contract into public component-specific tokens under `src/tokens/components/<component>.css`.
4. Add missing semantic tokens only when a shared UI meaning is discovered.
5. Implement selector rules under `src/css/components/<component>.css`.
6. Align React and Vue implementations to the new token-backed contract.
7. Verify the component in example applications.

The repository should treat `shadcn` classes as analysis input, not as the public design-system API.

## Framework Responsibilities

### Plain HTML

Plain HTML consumers import the stylesheet entry and use the shared selectors and tokens directly.

They should not need a framework package to receive the component styling contract.

### React

`@abc-def/react` remains a consumer of `@abc-def/styles`.

React components should be updated so their class structure reflects the token-backed component contract rather than embedding opaque utility choices that bypass the style package architecture.

### Vue

`@abc-def/vue` follows the same contract as React.

Vue components should align to the same component-specific token model and avoid drifting from the shared CSS contract.

## CSS Entry Strategy

The package should expose CSS by rendering purpose:

- `base.css` for token imports, resets, and element defaults
- `components.css` for shared component selector rules
- `utilities.css` for reusable utility classes that belong in the design-system contract

If multiple internal files are needed, an aggregate CSS entry can import and publish them as a stable consumer surface.

This keeps consumer integration simple while preserving structured token ownership internally.

## AI Agent Skill Design

### Purpose

The repository should add a skill dedicated to component onboarding under the new token architecture.

The skill exists to:

- preserve the token dependency rules
- force explicit token mapping work when a component is imported from `shadcn`
- prevent React, Vue, and example updates from being skipped

### Automation level

The first version should be semi-automated, not fully generative.

That means the skill should:

- analyze source components
- propose semantic and component-specific tokens
- identify files to change
- provide a verification checklist

But it should not silently finalize naming or token promotion decisions without human approval.

### Required inputs

The skill should accept at least:

- component name
- source reference (`shadcn/ui`, `shadcn-vue`, or local file)
- requested scope (`styles only`, `styles + react`, `styles + react + vue`, or full scope including examples)
- variant and size scope
- approval checkpoints for new semantic tokens and public component token names

### Required outputs

The skill should emit:

1. source analysis
2. proposed semantic tokens
3. proposed component-specific tokens
4. a mapping table from source class meaning to target token contract
5. file change targets
6. verification steps
7. explicit human approval points

### Required rules

The skill must enforce the following rules:

- do not add semantic meaning directly into primitive tokens
- do not let component-specific tokens reference primitive tokens directly
- do not treat copied `shadcn` utility strings as the final public design-system API
- evaluate semantic promotion before creating new component-specific tokens
- use component-centered public token names
- do not consider the work complete until examples are checked

### Suggested output template

The skill output should fit a concise template such as:

```md
## Source Analysis
## Proposed Semantic Tokens
## Proposed Component Tokens
## Mapping Table
## Files To Change
## Verification Steps
## Human Approval Required
```

## Validation Strategy

Validation should be split into token-architecture checks and consumer checks.

### Token-architecture checks

The repository should verify:

- semantic tokens only reference primitive tokens
- component-specific tokens only reference semantic tokens
- component selector files consume the intended token layer
- new component files follow the established location and naming conventions

A lightweight verification script is sufficient in the first pass.

### Consumer checks

The repository should verify:

- `@abc-def/styles` builds successfully
- built CSS contains the expected token and selector outputs
- React components render against the shared style contract
- Vue components render against the shared style contract
- example applications visibly exercise the migrated components

The first pass does not require automated visual regression tooling.

## First-Pass Scope

The first implementation pass should include:

1. restructuring `packages/styles` to introduce the new token layers and CSS entry split
2. migrating the existing `button`, `card`, and `input` components into the new architecture
3. aligning the React and Vue components for those same components
4. confirming the contract in example applications
5. drafting the new component-onboarding AI skill

## Risks And Mitigations

### Risk: semantic tokens become a grab bag of one-off names

Mitigation: keep the semantic layer organized around the `property x role` vocabulary and add only real shared meanings.

### Risk: component-specific tokens duplicate semantic meaning without adding value

Mitigation: require explicit semantic-promotion review before adding component tokens.

### Risk: React and Vue drift from the shared CSS contract

Mitigation: treat `@abc-def/styles` as the non-negotiable source of styling truth and include framework updates in the onboarding checklist.

### Risk: public component token exposure makes refactoring harder

Mitigation: keep the public contract focused on stable component concepts rather than leaking low-level implementation detail.

## Success Criteria

This design is successful when all of the following are true:

- the repository has a documented `primitive -> semantic -> component-specific` token model
- CSS is the canonical token source for shared consumption
- `packages/styles` exposes clean consumer-facing CSS entries while preserving internal ownership boundaries
- `button`, `card`, and `input` can be represented under the new structure
- a contributor has a documented workflow for onboarding additional components
- the companion AI skill has a clear semi-automated contract with approval gates
