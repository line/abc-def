# Form Core Shadcn + Base UI Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate Form Core React components to shadcn-style + Base UI architecture and rewrite token/base/component CSS for the same scope, then ship as a major release-ready change set.

**Architecture:** Keep React components as class-mapping wrappers (`cva` + standardized props) and keep visual source-of-truth in `packages/tailwindcss` token/base/component CSS layers. Implement in small vertical slices (one component family at a time), validating each slice with Storybook rendering, React typecheck/build, and Tailwind CSS build before moving forward.

**Tech Stack:** React, TypeScript, class-variance-authority, @base-ui/react, Tailwind CSS v4, Storybook, pnpm/turbo

---

## File Structure Map

- `packages/react/src/components/button.tsx`: New `Button` API surface (`variant`, `size`, `loading`, `disabled`, `invalid`) and class mapping.
- `packages/react/src/components/text-input.tsx`: Base UI-aligned text field API and class mapping.
- `packages/react/src/components/textarea.tsx`: Textarea API aligned with text-input conventions.
- `packages/react/src/components/select.tsx`: Base UI select composition (`trigger`, `content`, `item`) + class mappings.
- `packages/react/src/components/checkbox.tsx`: Checkbox behavior/state mapping.
- `packages/react/src/components/radio-group.tsx`: Radio group behavior/state mapping.
- `packages/react/src/components/switch.tsx`: Switch behavior/state mapping.
- `packages/react/src/components/index.ts`: Export surface verification for migrated components.
- `packages/tailwindcss/src/theme.css`: Form Core token definitions.
- `packages/tailwindcss/src/base/base.css`: Shared focus/disabled/interaction base rules.
- `packages/tailwindcss/src/components/button.css`: Button classes and state styles.
- `packages/tailwindcss/src/components/text-input.css`: Input classes and invalid/focus/disabled styles.
- `packages/tailwindcss/src/components/textarea.css`: Textarea classes and invalid/focus/disabled styles.
- `packages/tailwindcss/src/components/select.css`: Select trigger/content/item state styles.
- `packages/tailwindcss/src/components/checkbox.css`: Checkbox checked/unchecked/indeterminate styles.
- `packages/tailwindcss/src/components/radio-group.css`: Radio selection styles.
- `packages/tailwindcss/src/components/switch.css`: Switch checked/unchecked/disabled styles.
- `storybooks/react-storybook/src/button.stories.tsx`: Story coverage for updated button API variants/states.
- `storybooks/react-storybook/src/text-input.stories.tsx`: Story coverage for input states and sizes.
- `storybooks/react-storybook/src/textarea.stories.tsx`: Story coverage for textarea states and sizes.
- `storybooks/react-storybook/src/select.stories.tsx`: Story coverage for select interaction states.
- `storybooks/react-storybook/src/checkbox.stories.tsx`: Story coverage for checkbox states.
- `storybooks/react-storybook/src/radio-group.stories.tsx`: Story coverage for radio-group states.
- `storybooks/react-storybook/src/switch.stories.tsx`: Story coverage for switch states.
- `storybooks/react-storybook/src/component-list.mdx`: Component list/docs update if names/descriptions changed.
- `docs/superpowers/specs/2026-03-30-form-core-shadcn-baseui-migration-design.md`: Source spec.
- `docs/migration/v2-form-core.md` (create): Old API -> new API migration table for major release.

### Task 1: Establish Shared Form Core Contracts

**Files:**
- Create: `packages/react/src/lib/form-core-contract.ts`
- Modify: `packages/react/src/lib/types.ts`
- Modify: `packages/react/src/components/index.ts`
- Test: `pnpm --filter @line/abc-def-react typecheck`

- [ ] **Step 1: Add failing type contract usage in one component to force missing shared contract**

```ts
// packages/react/src/components/button.tsx
import type { FormControlSize, FormControlVariant } from "../lib/form-core-contract";

// Temporary compile-time usage to force contract creation
type _ButtonContractProbe = {
  size?: FormControlSize;
  variant?: FormControlVariant;
};
```

- [ ] **Step 2: Run typecheck to verify it fails**

Run: `pnpm --filter @line/abc-def-react typecheck`  
Expected: FAIL with module-not-found for `../lib/form-core-contract`

- [ ] **Step 3: Implement shared contract file and wire to existing type exports**

```ts
// packages/react/src/lib/form-core-contract.ts
export type FormControlSize = "sm" | "md" | "lg";
export type FormControlVariant = "default" | "secondary" | "outline" | "destructive";
export type FormControlStateProps = {
  disabled?: boolean;
  invalid?: boolean;
};
```

```ts
// packages/react/src/lib/types.ts
export type { FormControlSize, FormControlVariant, FormControlStateProps } from "./form-core-contract";
```

- [ ] **Step 4: Run typecheck to verify shared contract compiles**

Run: `pnpm --filter @line/abc-def-react typecheck`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add packages/react/src/lib/form-core-contract.ts packages/react/src/lib/types.ts packages/react/src/components/index.ts packages/react/src/components/button.tsx
git commit -m "refactor(react): add shared form core contract types"
```

### Task 2: Rebuild Theme and Base CSS Foundations for Form Core

**Files:**
- Modify: `packages/tailwindcss/src/theme.css`
- Modify: `packages/tailwindcss/src/base/base.css`
- Modify: `packages/tailwindcss/src/base/animation.css` (only if focus/transition utility requires)
- Test: `pnpm --filter @line/abc-def-tailwindcss build`

- [ ] **Step 1: Add failing reference class in component CSS to require new theme token**

```css
/* packages/tailwindcss/src/components/text-input.css */
.text-input {
  @apply ring-[var(--ring-form-focus)];
}
```

- [ ] **Step 2: Run tailwindcss build to verify missing token/invalid style usage is surfaced**

Run: `pnpm --filter @line/abc-def-tailwindcss build`  
Expected: FAIL or emit invalid style output indicating missing `--ring-form-focus` definition

- [ ] **Step 3: Define Form Core tokens and base interaction conventions**

```css
/* packages/tailwindcss/src/theme.css */
:root {
  --ring-form-focus: var(--tint, var(--fg-neutral-primary));
  --border-form-default: var(--border-neutral-tertiary);
  --border-form-invalid: var(--border-tint-red);
  --bg-form-surface: var(--bg-neutral-primary);
  --fg-form-default: var(--fg-neutral-primary);
  --fg-form-placeholder: var(--fg-neutral-tertiary);
}
```

```css
/* packages/tailwindcss/src/base/base.css */
.form-control-focus {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-form-focus)] focus-visible:ring-offset-2;
}
.form-control-disabled {
  @apply disabled:cursor-not-allowed disabled:opacity-50;
}
```

- [ ] **Step 4: Run tailwindcss build to verify generated CSS artifacts are valid**

Run: `pnpm --filter @line/abc-def-tailwindcss build`  
Expected: PASS with updated `dist/base.css`, `dist/components.css`, `dist/utilities.css`, `dist/full.css`

- [ ] **Step 5: Commit**

```bash
git add packages/tailwindcss/src/theme.css packages/tailwindcss/src/base/base.css packages/tailwindcss/src/base/animation.css packages/tailwindcss/dist
git commit -m "feat(tailwindcss): add form core theme tokens and base interaction rules"
```

### Task 3: Migrate Button (React + CSS + Storybook)

**Files:**
- Modify: `packages/react/src/components/button.tsx`
- Modify: `packages/tailwindcss/src/components/button.css`
- Modify: `storybooks/react-storybook/src/button.stories.tsx`
- Test: `pnpm --filter @line/abc-def-react typecheck`
- Test: `pnpm --filter @line/abc-def-react-storybook typecheck`

- [ ] **Step 1: Write failing Storybook args using the new API**

```ts
// storybooks/react-storybook/src/button.stories.tsx
export const Sizes = {
  args: { size: "md", variant: "default", children: "Button" },
};
export const Invalid = {
  args: { invalid: true, children: "Invalid action" },
};
```

- [ ] **Step 2: Run Storybook typecheck to verify new args fail before migration**

Run: `pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: FAIL with `size`/`variant`/`invalid` type mismatch against old Button props

- [ ] **Step 3: Implement new Button props and CSS mappings**

```ts
// packages/react/src/components/button.tsx
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "secondary" | "outline" | "destructive";
  loading?: boolean;
  invalid?: boolean;
  asChild?: boolean;
};
```

```css
/* packages/tailwindcss/src/components/button.css */
.button { @apply form-control-focus form-control-disabled inline-flex items-center justify-center; }
.button-default { @apply bg-[var(--bg-neutral-inverse)] text-[var(--fg-neutral-inverse)]; }
.button-invalid { @apply ring-1 ring-[var(--border-form-invalid)]; }
.button-sm { @apply h-9 px-3; }
.button-md { @apply h-11 px-4; }
.button-lg { @apply h-13 px-5; }
```

- [ ] **Step 4: Re-run React and Storybook typecheck**

Run: `pnpm --filter @line/abc-def-react typecheck && pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add packages/react/src/components/button.tsx packages/tailwindcss/src/components/button.css storybooks/react-storybook/src/button.stories.tsx
git commit -m "feat(form-core): migrate button to shadcn/base-ui contract"
```

### Task 4: Migrate Text Input + Textarea (React + CSS + Storybook)

**Files:**
- Modify: `packages/react/src/components/text-input.tsx`
- Modify: `packages/react/src/components/textarea.tsx`
- Modify: `packages/tailwindcss/src/components/text-input.css`
- Modify: `packages/tailwindcss/src/components/textarea.css`
- Modify: `storybooks/react-storybook/src/text-input.stories.tsx`
- Modify: `storybooks/react-storybook/src/textarea.stories.tsx`
- Test: `pnpm --filter @line/abc-def-react typecheck`
- Test: `pnpm --filter @line/abc-def-react-storybook typecheck`

- [ ] **Step 1: Write failing stories for shared `invalid` and `size` API**

```ts
// text-input.stories.tsx / textarea.stories.tsx
export const ValidationError = {
  args: { invalid: true, size: "md", placeholder: "Required field" },
};
```

- [ ] **Step 2: Run Storybook typecheck to verify failure**

Run: `pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: FAIL on unsupported `invalid`/`size` prop combos

- [ ] **Step 3: Implement aligned component props and class mappings**

```ts
// text-input.tsx
type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
};
```

```ts
// textarea.tsx
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
};
```

```css
/* text-input.css / textarea.css shared pattern */
.text-input, .textarea {
  @apply form-control-focus form-control-disabled border border-[var(--border-form-default)] bg-[var(--bg-form-surface)] text-[var(--fg-form-default)];
}
.text-input[aria-invalid="true"], .textarea[aria-invalid="true"], .text-input-invalid, .textarea-invalid {
  @apply border-[var(--border-form-invalid)];
}
```

- [ ] **Step 4: Re-run typechecks**

Run: `pnpm --filter @line/abc-def-react typecheck && pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add packages/react/src/components/text-input.tsx packages/react/src/components/textarea.tsx packages/tailwindcss/src/components/text-input.css packages/tailwindcss/src/components/textarea.css storybooks/react-storybook/src/text-input.stories.tsx storybooks/react-storybook/src/textarea.stories.tsx
git commit -m "feat(form-core): migrate text input and textarea contracts"
```

### Task 5: Migrate Select (React + CSS + Storybook)

**Files:**
- Modify: `packages/react/src/components/select.tsx`
- Modify: `packages/tailwindcss/src/components/select.css`
- Modify: `storybooks/react-storybook/src/select.stories.tsx`
- Test: `pnpm --filter @line/abc-def-react typecheck`
- Test: `pnpm --filter @line/abc-def-react-storybook typecheck`

- [ ] **Step 1: Add failing story for Base UI-aligned select slots**

```ts
// select.stories.tsx
export const InvalidSelect = {
  args: { invalid: true, size: "md" },
};
```

- [ ] **Step 2: Verify fail before implementation**

Run: `pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: FAIL on unsupported `invalid`/slot props

- [ ] **Step 3: Implement select root/trigger/content/item classes and state rules**

```ts
// select.tsx
type SelectRootProps = {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  disabled?: boolean;
};
```

```css
/* select.css */
.select-trigger { @apply form-control-focus form-control-disabled border border-[var(--border-form-default)]; }
.select-trigger[aria-invalid="true"], .select-trigger-invalid { @apply border-[var(--border-form-invalid)]; }
.select-content { @apply rounded-8 border border-[var(--border-neutral-tertiary)] bg-[var(--bg-neutral-primary)]; }
.select-item[data-highlighted] { @apply bg-[var(--bg-neutral-secondary)]; }
```

- [ ] **Step 4: Re-run typechecks**

Run: `pnpm --filter @line/abc-def-react typecheck && pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add packages/react/src/components/select.tsx packages/tailwindcss/src/components/select.css storybooks/react-storybook/src/select.stories.tsx
git commit -m "feat(form-core): migrate select to base-ui composition"
```

### Task 6: Migrate Checkbox + Radio Group + Switch (React + CSS + Storybook)

**Files:**
- Modify: `packages/react/src/components/checkbox.tsx`
- Modify: `packages/react/src/components/radio-group.tsx`
- Modify: `packages/react/src/components/switch.tsx`
- Modify: `packages/tailwindcss/src/components/checkbox.css`
- Modify: `packages/tailwindcss/src/components/radio-group.css`
- Modify: `packages/tailwindcss/src/components/switch.css`
- Modify: `storybooks/react-storybook/src/checkbox.stories.tsx`
- Modify: `storybooks/react-storybook/src/radio-group.stories.tsx`
- Modify: `storybooks/react-storybook/src/switch.stories.tsx`
- Test: `pnpm --filter @line/abc-def-react typecheck`
- Test: `pnpm --filter @line/abc-def-react-storybook typecheck`

- [ ] **Step 1: Add failing stories that require unified `invalid` and state-class behavior**

```ts
// checkbox.stories.tsx / radio-group.stories.tsx / switch.stories.tsx
export const InvalidState = {
  args: { invalid: true, disabled: false },
};
```

- [ ] **Step 2: Verify fail before migration**

Run: `pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: FAIL on unsupported or inconsistent `invalid` props

- [ ] **Step 3: Implement unified state mapping in React and CSS**

```ts
// shared props pattern
type SelectionControlStateProps = {
  disabled?: boolean;
  invalid?: boolean;
};
```

```css
/* checkbox.css / radio-group.css / switch.css pattern */
.control-root { @apply form-control-focus form-control-disabled; }
.control-root[data-state="checked"] { @apply bg-[var(--bg-neutral-inverse)] text-[var(--fg-neutral-inverse)]; }
.control-root[aria-invalid="true"], .control-root-invalid { @apply ring-1 ring-[var(--border-form-invalid)]; }
```

- [ ] **Step 4: Re-run typechecks**

Run: `pnpm --filter @line/abc-def-react typecheck && pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add packages/react/src/components/checkbox.tsx packages/react/src/components/radio-group.tsx packages/react/src/components/switch.tsx packages/tailwindcss/src/components/checkbox.css packages/tailwindcss/src/components/radio-group.css packages/tailwindcss/src/components/switch.css storybooks/react-storybook/src/checkbox.stories.tsx storybooks/react-storybook/src/radio-group.stories.tsx storybooks/react-storybook/src/switch.stories.tsx
git commit -m "feat(form-core): migrate selection controls with unified state model"
```

### Task 7: Remove Legacy API Friction and Finalize Public Exports

**Files:**
- Modify: `packages/react/src/components/index.ts`
- Modify: `packages/react/src/index.ts`
- Modify: `packages/react/package.json`
- Test: `pnpm --filter @line/abc-def-react typecheck`
- Test: `pnpm --filter @line/abc-def-react build`

- [ ] **Step 1: Introduce failing export usage for removed legacy signatures from storybook/docs**

```ts
// storybooks/react-storybook/src/component-list.mdx
// Keep only new API names/examples, remove old alias props from docs snippets.
```

- [ ] **Step 2: Verify old signatures no longer compile**

Run: `pnpm --filter @line/abc-def-react typecheck`  
Expected: FAIL if any internal files still depend on removed legacy props/types

- [ ] **Step 3: Finalize export surface and package metadata for major-only API**

```json
// packages/react/package.json
{
  "version": "3.0.0",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  }
}
```

- [ ] **Step 4: Re-run typecheck + build**

Run: `pnpm --filter @line/abc-def-react typecheck && pnpm --filter @line/abc-def-react build`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add packages/react/src/components/index.ts packages/react/src/index.ts packages/react/package.json storybooks/react-storybook/src/component-list.mdx
git commit -m "chore(react): finalize major export surface for form core migration"
```

### Task 8: Write Migration Guide and Changelog Entries

**Files:**
- Create: `docs/migration/v2-form-core.md`
- Modify: `README.md`
- Modify: `packages/react/README.md`
- Test: `pnpm --filter @line/abc-def-react-storybook typecheck`

- [ ] **Step 1: Write failing docs reference by linking migration guide before file exists**

```md
<!-- packages/react/README.md -->
See migration details in [docs/migration/v2-form-core.md](../../docs/migration/v2-form-core.md).
```

- [ ] **Step 2: Verify link target missing in docs check pass (manual)**

Run: `test -f docs/migration/v2-form-core.md && echo "exists" || echo "missing"`  
Expected: `missing`

- [ ] **Step 3: Implement full migration table**

```md
<!-- docs/migration/v2-form-core.md -->
| Component | Old API | New API |
| --- | --- | --- |
| Button | `variant="primary"` | `variant="default"` |
| TextInput | `radius="medium"` | removed (token-driven radius) |
| Select | `onValueChange(value)` | same signature, standardized root props |
```

- [ ] **Step 4: Re-run storybook typecheck after docs/examples update**

Run: `pnpm --filter @line/abc-def-react-storybook typecheck`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add docs/migration/v2-form-core.md README.md packages/react/README.md
git commit -m "docs: add form core major migration guide"
```

### Task 9: End-to-End Verification Gate

**Files:**
- Modify: `docs/superpowers/specs/2026-03-30-form-core-shadcn-baseui-migration-design.md` (only if verification notes appendix is needed)
- Test: `pnpm --filter @line/abc-def-tailwindcss build`
- Test: `pnpm --filter @line/abc-def-react typecheck`
- Test: `pnpm --filter @line/abc-def-react build`
- Test: `pnpm --filter @line/abc-def-react-storybook typecheck`
- Test: `pnpm --filter @line/abc-def-react-storybook build:storybook`

- [ ] **Step 1: Run full verification suite**

```bash
pnpm --filter @line/abc-def-tailwindcss build
pnpm --filter @line/abc-def-react typecheck
pnpm --filter @line/abc-def-react build
pnpm --filter @line/abc-def-react-storybook typecheck
pnpm --filter @line/abc-def-react-storybook build:storybook
```

- [ ] **Step 2: Validate expected outputs**

Run: `ls -1 packages/tailwindcss/dist packages/react/dist storybooks/react-storybook/dist`  
Expected: CSS/JS/type artifacts generated with no missing target directories

- [ ] **Step 3: Capture release readiness notes**

```md
<!-- verification log snippet in PR description -->
- tailwindcss build: PASS
- react typecheck/build: PASS
- storybook typecheck/build: PASS
- validated states: disabled/focus-visible/invalid/size+variant matrix
```

- [ ] **Step 4: Commit final verification metadata (if any tracked file changed)**

```bash
git add -A
git commit -m "chore: finalize form core migration verification"
```

## Spec Coverage Check

- Spec section "Target Architecture": covered by Tasks 1, 3, 4, 5, 6.
- Spec section "CSS Rebuild": covered by Tasks 2, 3, 4, 5, 6.
- Spec section "Build and Packaging Contract": covered by Tasks 2, 7, 9.
- Spec section "Verification Strategy": covered by Task 9 and component-level checks in Tasks 3-6.
- Spec section "Breaking Policy and Migration": covered by Tasks 7 and 8.

No uncovered spec requirement remains.

## Placeholder and Consistency Check

- Placeholder scan complete: no `TODO`, `TBD`, or deferred "implement later" phrasing.
- Type/name consistency check complete:
  - Shared props naming remains `size`, `variant`, `disabled`, `invalid`.
  - Form size tokens remain `sm`/`md`/`lg`.
  - Button variant tokens remain `default`/`secondary`/`outline`/`destructive`.

