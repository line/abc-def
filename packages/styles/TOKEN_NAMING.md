# Semantic And Component Token Naming

## Scope

This document defines the naming rules for semantic tokens and component-specific tokens in `@abc-def/styles`.

It applies to:

- semantic tokens such as `--background`, `--foreground`, `--surface`
- `--button-bg-primary`
- `--card-footer-border`
- `--select-trigger-fg-placeholder`

It does not apply to:

- primitive tokens such as Tailwind `--color-*`
- temporary runtime variables such as animation offset tokens

## Token Layers

- primitive: raw source tokens such as `--color-*`
- semantic: shared design meaning used across components
- component-specific: aliases scoped to a component or stable slot

## Semantic Tokens

### Rule

Use one of these shapes for semantic tokens:

```text
--{semantic-name}
--{semantic-name}-{variant}
```

### Semantic Naming Principles

- Use semantic meaning, not component names.
- Prefer short, stable names that map to shared UI intent.
- Use full words for semantic tokens instead of abbreviated role names when the token is part of the shared design language.

### Semantic Examples

Base semantic tokens:

- `--background`
- `--foreground`
- `--surface`
- `--popover`
- `--primary`
- `--secondary`
- `--muted`
- `--accent`
- `--destructive`
- `--border`
- `--ring`
- `--radius`

Paired or derived semantic tokens:

- `--surface-foreground`
- `--popover-foreground`
- `--primary-foreground`
- `--secondary-foreground`
- `--muted-foreground`
- `--accent-foreground`
- `--destructive-foreground`
- `--border-input`
- `--radius-sm`
- `--radius-md`
- `--radius-lg`

### Semantic Guidelines

- A semantic token should describe a reusable meaning across multiple components.
- Do not encode a specific component or slot into a semantic token.
- Prefer names that can survive component refactors.
- Use suffixes like `-foreground`, `-input`, or size names only when they describe a stable shared semantic variant.

Correct:

- `--surface`
- `--surface-foreground`
- `--border-input`
- `--radius-lg`

Avoid:

- `--card-background`
- `--dialog-content-border`
- `--button-primary-text`

## Component-Specific Tokens

### Rule

Use this shape for component-specific tokens:

```text
--{component-or-slot}-{role}-{modifier?}
```

### Token Parts

- `component-or-slot`: component name plus any stable sub-part when needed
- `role`: the visual property the token controls
- `modifier`: optional variant, state, or context

### Role Vocabulary

Use a small fixed role set where possible:

- `bg`
- `fg`
- `border`
- `ring`
- `shadow`
- `radius`

Add new role names only when the existing set cannot express the token clearly.

### Ordering

Place parts in this order:

1. component or slot
2. role
3. modifier

Correct:

- `--dropdown-menu-item-bg-focus`
- `--dropdown-menu-item-fg-destructive`
- `--textarea-fg-placeholder`

Avoid:

- `--dropdown-menu-item-focus-bg`
- `--dropdown-menu-item-destructive-fg`
- `--textarea-placeholder-fg`

### Modifier Types

Modifiers may represent:

- variant: `primary`, `secondary`, `destructive`, `outline`, `ghost`, `link`
- state: `hover`, `focus`, `expanded`, `checked`, `unchecked`, `disabled`
- context: `placeholder`

When multiple modifiers are needed, keep `role` before them:

- `--dropdown-menu-item-bg-destructive-focus`
- `--button-border-primary-hover`

### Examples

```text
--button-bg-primary
--button-fg-primary-hover
--button-border-primary-expanded
--card-footer-bg
--alert-description-fg-link
--select-trigger-fg-placeholder
--select-item-bg-focus
--radio-group-item-border-checked
```

## Notes

- Prefer `kebab-case` for CSS custom properties.
- Semantic tokens define shared meaning; component tokens define component-local aliases.
- Prefer stable slot names such as `trigger`, `content`, `item`, `footer`, `description`.
- Keep token names descriptive enough to override directly without reading component internals.
