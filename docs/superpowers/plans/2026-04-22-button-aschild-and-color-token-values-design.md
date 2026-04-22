# Button AsChild And Color Token Value Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make React `Button` composition officially use `asChild`, remove the stale `render` contract from current-facing repo guidance, and convert live `@abc-def/styles` color consumption from HSL fragments to complete CSS color values consumed through plain `var(...)`.

**Architecture:** Keep the current approved button variant and size surface and keep the existing `primitive -> semantic -> component -> runtime CSS` token hierarchy. The React wrapper remains thin and Radix-aligned by exposing `asChild` while preserving native-button safety rules such as defaulting `type="button"` only for the native branch. Keep `forwardRef` in the React implementation even on React 19 so the component continues to present an explicit, familiar ref-forwarding contract and does not take on a React-19-only `ref`-as-prop dependency. On the style side, only the primitive color representation changes: primitive color tokens become complete CSS color values, semantic and component layers continue aliasing them, and runtime CSS consumes those values directly. Any opacity-bearing focus treatments move into explicit token values so selector files no longer encode color-format knowledge.

**Tech Stack:** pnpm workspaces, Turborepo, Tailwind CSS v4 CSS-first authoring, TypeScript, React 19, Vue 3 render functions, `class-variance-authority`, Radix Slot, Vite

**Supersedes:** the React composition and token-value assumptions captured in `docs/superpowers/references/2026-04-22-button-upstream-contract.md` and the earlier button plan/spec documents from `2026-04-22` that still describe `render` or HSL-fragment token consumption as current guidance.

---

## File Map

- Modify `packages/react/src/components/button.tsx` to make the live React `Button` API explicitly and correctly `asChild`-based, including native-only `type="button"` defaulting.
- Modify `packages/react/README.md` to document `asChild` instead of `render`.
- Modify `examples/react-vite/src/App.tsx` to demonstrate slotted-link usage with `asChild`.
- Modify `docs/superpowers/references/2026-04-22-button-upstream-contract.md` so the saved current contract no longer claims React uses `render`.
- Modify `docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md` to add a short superseded note for the old composition decision.
- Modify `docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md` to add a short superseded note for the old `render` and HSL-fragment assumptions.
- Modify `packages/styles/src/tokens/primitive.css` to convert primitive color tokens from channel fragments to complete CSS color values.
- Modify `packages/styles/src/tokens/components/button.css` to define explicit button focus-ring shadow tokens that work with complete color values.
- Modify `packages/styles/src/tokens/components/input.css` to define an explicit input focus-shadow token that works with complete color values.
- Modify `packages/styles/src/css/base.css`, `packages/styles/src/css/components/button.css`, `packages/styles/src/css/components/card.css`, `packages/styles/src/css/components/input.css`, and `packages/styles/src/css/utilities.css` so live CSS consumes color tokens through `var(...)` instead of `hsl(var(...))`.
- Modify `packages/styles/scripts/verify-build.mjs` to reject any remaining live `hsl(var(--abc-...))` usage and to assert the new focus-shadow token surface.
- Modify `packages/styles/README.md` to document that shared color tokens are complete CSS color values consumed directly through `var(...)`.

## Guardrails

- Do not add a new cross-framework composition API to Vue.
- Do not rename the existing primitive, semantic, or component color tokens.
- Do not keep both `render` and `asChild` documented as current React public APIs.
- Do not leave live runtime CSS with `hsl(var(--abc-` usage after the primitive token migration.
- Do not solve opacity with ad hoc selector-level color math when a reusable token can carry that value instead.
- Do not switch the React `Button` to React-19-style `ref` as a plain prop in this migration; keep `forwardRef`.
- Keep the approved button variants and sizes exactly as they are now: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` and `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`.

### Task 1: Align The Live React Button Contract On `asChild`

**Files:**
- Modify: `packages/react/src/components/button.tsx`
- Modify: `packages/react/README.md`
- Modify: `examples/react-vite/src/App.tsx`
- Modify: `docs/superpowers/references/2026-04-22-button-upstream-contract.md`
- Modify: `docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md`
- Modify: `docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`
- Test: `rg -n '\brender\b|asChild' packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx docs/superpowers/references/2026-04-22-button-upstream-contract.md docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`
- Test: `pnpm --filter @abc-def/react typecheck`

- [ ] **Step 1: Prove the repo still has a split React composition contract**

Run: `rg -n '\brender\b|asChild' packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx docs/superpowers/references/2026-04-22-button-upstream-contract.md docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`
Expected: PASS with `asChild` in the React implementation, but `render` still present in current-facing docs/reference/plan text.

- [ ] **Step 2: Make the React `Button` implementation enforce the intended native-only safety rules**

```tsx
/**
 * packages/react/src/components/button.tsx
 */
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "../lib/cn";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-default",
      destructive: "btn-destructive",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
      secondary: "btn-secondary",
    },
    size: {
      default: null,
      sm: "btn-sm",
      lg: "btn-lg",
      icon: "btn-icon",
      "icon-sm": "btn-icon-sm",
      "icon-lg": "btn-icon-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, type, variant, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    const resolvedType = asChild ? undefined : (type ?? "button");

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(resolvedType ? { type: resolvedType } : {})}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
```

Implementation notes:
- Preserve the current variant and size class mapping exactly.
- Keep `React.forwardRef` as the public ref plumbing for this repo.
- Keep `type="button"` defaulting on the native button path only.
- Ensure an explicitly provided native `type` still overrides the default.
- Do not pass `type` through the `asChild` branch.

- [ ] **Step 3: Replace current-facing `render` guidance with `asChild` guidance**

Update the saved reference note and live docs/examples so they all communicate one contract:

For `packages/react/README.md`, replace the composition bullets with:

```md
- **React composition:** `asChild`
- **Composition behavior:** when `asChild` is `true`, `Button` renders `Slot.Root` and applies the resolved shared `btn*` classes to the slotted child
```

And replace the example with:

```tsx
<Button variant="outline" size="sm">Outline</Button>
<Button asChild variant="link">
  <a href="/docs">Docs</a>
</Button>
```

```md
<!-- docs/superpowers/references/2026-04-22-button-upstream-contract.md -->
- React composition: `asChild`
- React defaulting rule: default `type="button"` applies only when React renders a native `<button>`
```

```tsx
/**
 * examples/react-vite/src/App.tsx
 */
<Button asChild variant="link">
  <a href="/docs">Docs</a>
</Button>
```

For the older `2026-04-22-shadcn-button-multiplatform-design` spec and plan documents, add a short top-level note that the React composition decision in those documents is superseded by `docs/superpowers/specs/2026-04-22-button-aschild-and-color-token-values-design.md` and this implementation plan.

- [ ] **Step 4: Verify only `asChild` remains as the current React composition contract**

Run: `rg -n '\brender\b|asChild' packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx docs/superpowers/references/2026-04-22-button-upstream-contract.md docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`
Expected: PASS with `asChild` in live implementation/docs/examples and no unqualified `render` guidance left in current-facing button docs.

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS with the React package accepting the `asChild`-based `Button` API.

- [ ] **Step 5: Commit the React contract alignment**

```bash
git add packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx docs/superpowers/references/2026-04-22-button-upstream-contract.md docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md
git commit -m "docs: align button contract on aschild"
```

### Task 2: Convert Primitive Color Tokens To Complete CSS Values

**Files:**
- Modify: `packages/styles/src/tokens/primitive.css`
- Modify: `packages/styles/src/tokens/components/button.css`
- Modify: `packages/styles/src/tokens/components/input.css`
- Test: `rg -n '^\\s*--abc-color-' packages/styles/src/tokens/primitive.css`
- Test: `rg -n 'ring-shadow|focus-shadow' packages/styles/src/tokens/components/button.css packages/styles/src/tokens/components/input.css`

- [ ] **Step 1: Prove primitive colors are still stored as HSL fragments and focus alpha is not tokenized**

Run: `sed -n '1,80p' packages/styles/src/tokens/primitive.css`
Expected: PASS with raw fragment values such as `221.2 83.2% 53.3%` and no wrapping `hsl(...)`.

Run: `rg -n 'ring-shadow|focus-shadow' packages/styles/src/tokens/components/button.css packages/styles/src/tokens/components/input.css`
Expected: PASS with no matches yet.

- [ ] **Step 2: Replace primitive color values with complete CSS color values without renaming tokens**

```css
/* packages/styles/src/tokens/primitive.css */
:root {
  --abc-color-white: hsl(0 0% 100%);
  --abc-color-slate-50: hsl(210 40% 98%);
  --abc-color-slate-100: hsl(210 40% 96.1%);
  --abc-color-slate-200: hsl(214.3 31.8% 91.4%);
  --abc-color-slate-300: hsl(212.7 26.8% 83.9%);
  --abc-color-slate-500: hsl(215.4 16.3% 46.9%);
  --abc-color-slate-700: hsl(215.3 25% 26.7%);
  --abc-color-slate-950: hsl(222.2 47.4% 11.2%);
  --abc-color-blue-600: hsl(221.2 83.2% 53.3%);
  --abc-color-red-600: hsl(0 72.2% 50.6%);
  --abc-color-transparent: transparent;

  /* keep non-color primitives unchanged */
}
```

- [ ] **Step 3: Add explicit alpha-ready component tokens for focus effects**

```css
/* packages/styles/src/tokens/components/button.css */
:root {
  --abc-button-ring-shadow: var(--abc-button-default-ring-shadow);

  --abc-button-default-ring-shadow: color-mix(
    in srgb,
    var(--abc-ring-primary) 35%,
    transparent
  );
  --abc-button-destructive-ring-shadow: color-mix(
    in srgb,
    var(--abc-ring-destructive) 35%,
    transparent
  );
  --abc-button-outline-ring-shadow: color-mix(
    in srgb,
    var(--abc-ring-primary) 35%,
    transparent
  );
  --abc-button-secondary-ring-shadow: color-mix(
    in srgb,
    var(--abc-ring-primary) 35%,
    transparent
  );
  --abc-button-ghost-ring-shadow: color-mix(
    in srgb,
    var(--abc-ring-primary) 35%,
    transparent
  );
  --abc-button-link-ring-shadow: color-mix(
    in srgb,
    var(--abc-ring-primary) 35%,
    transparent
  );
}
```

```css
/* packages/styles/src/tokens/components/input.css */
:root {
  --abc-input-focus-shadow: color-mix(
    in srgb,
    var(--abc-input-border-focus) 20%,
    transparent
  );
}
```

Keep semantic and component token naming intact; only add the minimal explicit tokens needed to preserve opacity-bearing behavior after the primitive-value migration.

- [ ] **Step 4: Verify primitive color values and new focus tokens are in place**

Run: `rg -n '^\\s*--abc-color-(white|slate-50|slate-100|slate-200|slate-300|slate-500|slate-700|slate-950|blue-600|red-600|transparent): (hsl\\(|transparent)' packages/styles/src/tokens/primitive.css`
Expected: PASS with all primitive color tokens stored as complete CSS color values.

Run: `rg -n 'button-.*ring-shadow|input-focus-shadow' packages/styles/src/tokens/components/button.css packages/styles/src/tokens/components/input.css`
Expected: PASS with the new focus-shadow token declarations.

- [ ] **Step 5: Commit the token-representation migration**

```bash
git add packages/styles/src/tokens/primitive.css packages/styles/src/tokens/components/button.css packages/styles/src/tokens/components/input.css
git commit -m "refactor: store color tokens as css values"
```

### Task 3: Migrate Live Runtime CSS To Direct `var(...)` Color Consumption

**Files:**
- Modify: `packages/styles/src/css/base.css`
- Modify: `packages/styles/src/css/components/button.css`
- Modify: `packages/styles/src/css/components/card.css`
- Modify: `packages/styles/src/css/components/input.css`
- Modify: `packages/styles/src/css/utilities.css`
- Modify: `packages/styles/README.md`
- Modify: `packages/styles/scripts/verify-build.mjs`
- Test: `rg -n 'hsl\\(var\\(--abc-' packages/styles/src/css packages/styles/scripts/verify-build.mjs packages/styles/README.md`
- Test: `pnpm --filter @abc-def/styles build`

- [ ] **Step 1: Prove live CSS still depends on HSL-fragment token consumption**

Run: `rg -n 'hsl\\(var\\(--abc-' packages/styles/src/css`
Expected: PASS with matches in `base.css`, button/card/input selector files, and `utilities.css`.

- [ ] **Step 2: Replace runtime color consumption with direct token reads**

Update `base.css` theme aliases and element styles:

```css
@theme {
  --color-background: var(--abc-bg-base);
  --color-foreground: var(--abc-fg-base);
  --color-primary: var(--abc-bg-primary);
  --color-primary-foreground: var(--abc-fg-primary);
  --color-muted: var(--abc-bg-muted);
  --color-muted-foreground: var(--abc-fg-muted);
  --color-border: var(--abc-border-muted);
}

@layer base {
  body {
    background: var(--abc-bg-base);
    color: var(--abc-fg-base);
  }
}
```

Update button selectors to consume direct token values and the new explicit ring-shadow token:

```css
.btn {
  border: 1px solid var(--abc-button-border);
  background: var(--abc-button-bg);
  color: var(--abc-button-fg);
}

.btn:hover {
  background: var(--abc-button-bg-hover);
  color: var(--abc-button-fg-hover);
  border-color: var(--abc-button-border-hover);
}

.btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--abc-button-focus-surface),
    0 0 0 5px var(--abc-button-ring-shadow);
}
```

Update card, input, and utilities the same way:

```css
.card {
  border: 1px solid var(--abc-card-border);
  background: var(--abc-card-bg);
}

.card-header,
.card-content,
.card-body {
  color: var(--abc-card-copy-color);
}

.card-title {
  color: var(--abc-card-title-color);
}

.input {
  border: 1px solid var(--abc-input-border);
  background: var(--abc-input-bg);
  color: var(--abc-input-fg);
}

.input:focus-visible {
  border-color: var(--abc-input-border-focus);
  box-shadow: 0 0 0 3px var(--abc-input-focus-shadow);
}

.input::placeholder {
  color: var(--abc-input-placeholder);
}

@utility abc-text-dim {
  color: var(--abc-fg-muted);
}

@utility abc-surface-base {
  background: var(--abc-bg-base);
  color: var(--abc-fg-base);
}
```

Update `packages/styles/README.md` with one short note that `--abc-color-*` tokens are complete CSS color values and should be consumed directly with `var(...)`.

- [ ] **Step 3: Harden style-package verification against regressions**

Extend `packages/styles/scripts/verify-build.mjs` so the build fails if any live style source reintroduces HSL-fragment consumption:

```js
for (const [filePath, fileText] of [
  [sourceFiles.baseEntry, baseEntryText],
  [sourceFiles.buttonSelectors, buttonSelectorText],
  [sourceFiles.cardSelectors, cardSelectorText],
  [sourceFiles.inputSelectors, inputSelectorText],
  [sourceFiles.utilitiesEntry, utilitiesEntryText],
]) {
  assert(
    !/hsl\(\s*var\(\s*--abc-/i.test(fileText),
    `Live CSS must consume abc color tokens directly via var(...) in ${filePath}`,
  );
}

assertIncludes(
  buttonTokenText,
  "--abc-button-ring-shadow",
  sourceFiles.buttonTokens,
  "button ring shadow token",
);

assertIncludes(
  inputTokenText,
  "--abc-input-focus-shadow",
  sourceFiles.inputTokens,
  "input focus shadow token",
);
```

If needed, also assert that `button.css` references `var(--abc-button-ring-shadow)` and `input.css` references `var(--abc-input-focus-shadow)` so the alpha-safe tokens are not declared but unused.

- [ ] **Step 4: Verify the live style contract has fully migrated**

Run: `rg -n 'hsl\\(var\\(--abc-' packages/styles/src/css packages/styles/scripts/verify-build.mjs packages/styles/README.md`
Expected: PASS with no matches in live style code or current style package docs.

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS with `packages/styles/scripts/verify-build.mjs` accepting the direct-`var(...)` contract.

- [ ] **Step 5: Commit the runtime CSS migration**

```bash
git add packages/styles/src/css/base.css packages/styles/src/css/components/button.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css packages/styles/src/css/utilities.css packages/styles/scripts/verify-build.mjs packages/styles/README.md
git commit -m "refactor: consume color tokens via direct var"
```

### Task 4: Run Cross-Cut Verification And Close The Migration

**Files:**
- Test only

- [ ] **Step 1: Re-run focused repo searches that encode the acceptance criteria**

Run: `rg -n '\brender\b' packages/react/README.md examples/react-vite/src/App.tsx docs/superpowers/references/2026-04-22-button-upstream-contract.md docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md`
Expected: PASS with no matches that present `render` as the active React button contract.

Run: `rg -n 'hsl\\(var\\(--abc-' packages/styles/src`
Expected: PASS with no matches in live style sources.

- [ ] **Step 2: Run package-level verification for both migration fronts**

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS.

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS.

- [ ] **Step 3: Inspect the final diff before merging**

Run: `git diff --stat`
Expected: PASS with only the planned React/doc/style verification files changed.

- [ ] **Step 4: Create the final implementation commit**

```bash
git add packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx docs/superpowers/references/2026-04-22-button-upstream-contract.md docs/superpowers/specs/2026-04-22-shadcn-button-multiplatform-design.md docs/superpowers/plans/2026-04-22-shadcn-button-multiplatform-design.md packages/styles/src/tokens/primitive.css packages/styles/src/tokens/components/button.css packages/styles/src/tokens/components/input.css packages/styles/src/css/base.css packages/styles/src/css/components/button.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css packages/styles/src/css/utilities.css packages/styles/scripts/verify-build.mjs packages/styles/README.md
git commit -m "refactor: adopt aschild and direct color tokens"
```

## Acceptance Checklist

- [ ] React `Button` is implemented and documented with `asChild`.
- [ ] Native `type="button"` defaulting applies only when React renders a native button.
- [ ] No current-facing React button docs or examples present `render` as the active contract.
- [ ] Primitive color token names are unchanged, but their values are complete CSS color values.
- [ ] Live `@abc-def/styles` CSS consumes shared colors through direct `var(...)` usage.
- [ ] Opacity-bearing focus styles use explicit reusable tokens rather than `hsl(var(--abc-...) / alpha)`.
- [ ] `packages/styles/scripts/verify-build.mjs` fails if `hsl(var(--abc-...))` returns to live style sources.
