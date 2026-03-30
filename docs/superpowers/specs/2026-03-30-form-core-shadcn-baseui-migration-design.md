# Form Core Shadcn + Base UI Migration Design

Date: 2026-03-30  
Scope: React `Form Core` components + Tailwind CSS token/base/component layers  
Release strategy: Major release (breaking changes allowed, no legacy dual export)

## 1. Context and Goals

This design defines the first migration phase for the React UI package:

- Migrate core form-related components to the latest shadcn-style composition and Base UI primitives.
- Rebuild CSS architecture to match the new component contracts.
- Ship as a major release with cleaned and consolidated APIs.

User-confirmed boundaries:

- Phase 1 components: `button`, `text-input`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`
- API policy: breaking changes are allowed to improve consistency
- CSS scope: includes component CSS plus token/theme/base layer redefinition
- CSS architecture: keep separate CSS files in `packages/tailwindcss/src/components/*.css`; React uses class mapping
- Completion criteria: Storybook render/interaction + type/build pass for this phase

## 2. Non-Goals

- No migration for non-Form Core components in this phase.
- No dual support (`legacy` + `new`) export strategy.
- No unrelated refactors outside migration-critical files.

## 3. Design Principles

- Single source of truth for visual language lives in CSS tokens/theme.
- Component behavior and accessibility remain explicit in React; visual state is CSS-first.
- API semantics are standardized across Form Core for long-term maintainability.
- Keep output contracts stable for consumers where possible (`dist/base.css`, `dist/components.css`, `dist/utilities.css`).

## 4. Target Architecture

### 4.1 React Layering

Each Form Core component follows three layers:

1. Primitive layer  
Base UI primitive integration or native semantic element wrapper.

2. Variant layer  
`cva`-based variant and size/state mapping to class names.

3. Public layer  
Final exported component API with standardized props and accessibility pass-through.

### 4.2 CSS Layering

- Token/theme layer: `packages/tailwindcss/src/theme.css`
- Base layer: `packages/tailwindcss/src/base/*`
- Component layer: `packages/tailwindcss/src/components/*.css` for Form Core files

React components map state/variant to class names. Design values are sourced from tokens; no hardcoded component colors/sizes in TS.

## 5. Component and API Design

## 5.1 Shared API Conventions

Across all Form Core components:

- Standardized names for cross-component state: `size`, `variant`, `disabled`, `invalid`
- `className` extension remains supported
- Accessibility-related props (`id`, `name`, `required`, `aria-*`) pass through without filtering
- Event APIs align with React conventions; reduce ambiguous duplicate patterns

## 5.2 Component-specific Rules

- `button`
  - Keep single `loading` prop for busy state.
  - Redefine `variant` and `size` set to align with shadcn-style naming and behavior.
- `text-input`, `textarea`
  - Share field-state model (focus/invalid/disabled) and comparable sizing contract.
- `select`
  - Align trigger/content/item composition to Base UI primitive structure.
- `checkbox`, `radio-group`, `switch`
  - Unify selected/unselected/disabled/invalid class-state naming across control family.

## 5.3 Breaking Policy

- Remove ambiguous, overlapping, or legacy alias props.
- Rename non-standard variants to consistent naming.
- Provide a migration table mapping old props/states/classes to new API.

## 6. CSS Rebuild Design

## 6.1 Token Redefinition

Redefine `theme.css` values needed for Form Core:

- foreground/background role tokens
- border and emphasis tokens
- interaction state tokens (hover/focus/disabled/invalid)
- radius/spacing/typography tokens used by Form Core scale

Component CSS must consume these tokens directly.

## 6.2 Base Rules

Base layer provides shared patterns such as:

- focus ring conventions (`:focus-visible`)
- disabled behavior defaults
- interaction transition baselines

If a pattern appears in 2+ Form Core components, move it to base-level class/utility rather than duplicating.

## 6.3 Component CSS Files in Phase 1

Rebuild the following files:

- `packages/tailwindcss/src/components/button.css`
- `packages/tailwindcss/src/components/text-input.css`
- `packages/tailwindcss/src/components/textarea.css`
- `packages/tailwindcss/src/components/select.css`
- `packages/tailwindcss/src/components/checkbox.css`
- `packages/tailwindcss/src/components/radio-group.css`
- `packages/tailwindcss/src/components/switch.css`

## 6.4 State and Accessibility Styling

State selectors prioritize semantic state sources:

- `:focus-visible`
- `:disabled`
- `[aria-invalid="true"]`
- `[data-state]` from primitive components where applicable

Keyboard focus visibility must remain distinct from pointer hover feedback.

## 7. Build and Packaging Contract

- Keep current CSS build pipeline (`build-functions`) intact.
- Keep generated artifact contract intact:
  - `dist/base.css`
  - `dist/components.css`
  - `dist/utilities.css`
- Consumers should not need import path changes for this migration.

## 8. Verification Strategy

Required validation before implementation is considered complete:

- Storybook stories for all Phase 1 Form Core components render correctly.
- Core interactions succeed in stories (input, selection, toggle, open/close where applicable).
- React package type check and build pass with zero errors.
- Tailwindcss package build passes with zero errors.

Minimal regression checks:

- `disabled` behavior blocks interaction
- `focus-visible` styles are applied
- `invalid` state is visually reflected
- size/variant combinations do not break layout

## 9. Definition of Done

- Form Core components migrated to new contracts.
- Token/base/component CSS layers updated for this scope.
- Breaking changes and migration table documented.
- Storybook and package build/type checks pass.
- Change set is ready for major release consumption.

## 10. Risks and Mitigations

- Risk: API cleanup introduces downstream migration friction.  
  Mitigation: explicit migration mapping and changelog examples.

- Risk: token/base changes unintentionally affect other components.  
  Mitigation: scope verification to Form Core stories plus targeted smoke checks.

- Risk: variant naming drift between TS and CSS.  
  Mitigation: enforce one-to-one variant mapping table during implementation.
