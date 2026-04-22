# Shadcn Button Multiplatform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the repo's `Button` component contract with current `shadcn` and `shadcn-vue` button APIs for the approved variant and size set, while keeping `@abc-def/styles` as the single styling source of truth across React, Vue, and plain HTML.

**Architecture:** Capture the upstream button contract in a repo-local reference note first, then extend the shared CSS token and selector contract in `@abc-def/styles` before changing framework wrappers. Keep React and Vue thin: React owns the `render` composition surface plus prop typing, Vue owns the template-friendly prop surface, and both wrappers emit only shared `btn*` classes. Finish by updating examples, READMEs, and repo verification so the public contract is exercised in all three consumption modes.

**Tech Stack:** pnpm workspaces, Turborepo, Tailwind CSS v4 CSS-first authoring, TypeScript, React 19, Vue 3 render functions, `class-variance-authority`, Vite

---

## File Map

- Create `docs/superpowers/references/2026-04-22-button-upstream-contract.md` to record the current upstream `shadcn` and `shadcn-vue` button API, variant list, size list, and the repo-specific scope decisions for this work.
- Modify `packages/styles/src/tokens/primitive.css` to add any new raw color and size scales required for destructive and icon/size variants.
- Modify `packages/styles/src/tokens/semantic.css` to promote only the shared meanings needed by the expanded button contract.
- Modify `packages/styles/src/tokens/components/button.css` to define the full button token surface for approved variants and sizes.
- Modify `packages/styles/src/css/components/button.css` to implement `.btn`, the new `btn-*` variant classes, and the new size classes in `@layer components`.
- Modify `packages/styles/scripts/verify-build.mjs` so the build enforces the new button selector and token contract and rejects the old `.btn-primary` naming.
- Modify `packages/styles/README.md` to document the new public button selector contract.
- Modify `packages/react/src/components/button.tsx` to expose the scoped `shadcn` variant/size API plus a Base UI-style `render` composition prop.
- Modify `packages/react/README.md` to document React `Button` variants, sizes, and `render` usage.
- Modify `packages/vue/src/components/button.ts` to expose the same approved variant and size prop surface in Vue.
- Modify `packages/vue/README.md` to document Vue `Button` variants and sizes and to explicitly note that Vue is not adding a cross-framework composition prop in this phase.
- Modify `examples/react-vite/src/App.tsx`, `examples/vue-vite/src/main.ts`, and `examples/html-vite/index.html` to demonstrate the same approved visual contract in all three consumers.

## Guardrails

- Do not add Radix `asChild` support to React.
- Do not add a Vue composition prop in this phase.
- Do not keep `.btn-primary` as the public default-variant class; migrate to `.btn-default` so HTML mirrors `variant="default"`.
- Do not add `xs` or `icon-xs`.
- Keep button visual values token-backed; selector files should continue consuming only `--abc-button-*` tokens.

### Task 1: Capture The Upstream Button Contract In A Repo-Local Reference

**Files:**
- Create: `docs/superpowers/references/2026-04-22-button-upstream-contract.md`
- Test: `pnpm dlx shadcn@latest docs button --json --cwd packages/react`
- Test: `pnpm dlx shadcn@latest add button --dry-run --cwd packages/react`
- Test: `pnpm dlx shadcn-vue@latest add button -y --cwd /tmp/abc-def-shadcn-vue-button-ref`

- [ ] **Step 1: Confirm the repo does not already have a saved upstream button reference**

Run: `test -f docs/superpowers/references/2026-04-22-button-upstream-contract.md && echo PRESENT || echo MISSING`
Expected: `MISSING`

- [ ] **Step 2: Pull the current React and Vue upstream references into scratch output**

Run: `pnpm dlx shadcn@latest docs button --json --cwd packages/react`
Expected: PASS with JSON docs for the current React `button` component.

Run: `pnpm dlx shadcn@latest add button --dry-run --cwd packages/react`
Expected: PASS with a dry-run preview of the current generated React button files.

Run: `rm -rf /tmp/abc-def-shadcn-vue-button-ref && mkdir -p /tmp/abc-def-shadcn-vue-button-ref && pnpm dlx shadcn-vue@latest add button -y --cwd /tmp/abc-def-shadcn-vue-button-ref`
Expected: PASS with a scratch Vue button install that can be inspected and then discarded.

- [ ] **Step 3: Save the normalized contract note that implementation will follow**

```md
# Upstream Button Contract Reference (2026-04-22)

## React (`shadcn`)

- Source command: `pnpm dlx shadcn@latest add button --dry-run --cwd packages/react`
- Public variant names observed: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Public size names in scope for this repo: `default`, `sm`, `lg`, `icon`
- Composition model upstream exposes Radix/Base-UI-flavored composition paths; this repo intentionally keeps only the Base UI-style `render` path from the design spec

## Vue (`shadcn-vue`)

- Source command: `pnpm dlx shadcn-vue@latest add button -y --cwd /tmp/abc-def-shadcn-vue-button-ref`
- Public variant names observed: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Public size names observed: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Upstream also exposes `asChild`; this repo explicitly does not adopt that API in this phase

## Repo Scope Decisions

- Final cross-framework variant contract: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Final cross-framework size contract: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Final shared HTML class contract:
  - base: `btn`
  - variants: `btn-default`, `btn-destructive`, `btn-outline`, `btn-secondary`, `btn-ghost`, `btn-link`
  - sizes: `btn-sm`, `btn-lg`, `btn-icon`, `btn-icon-sm`, `btn-icon-lg`
- React composition: `render`
- Vue composition: no cross-framework composition prop in this phase
```

- [ ] **Step 4: Verify the saved reference note contains the exact scoped contract**

Run: `rg -n 'btn-default|btn-destructive|btn-ghost|btn-link|icon-sm|icon-lg|render|no cross-framework composition prop' docs/superpowers/references/2026-04-22-button-upstream-contract.md`
Expected: PASS with matches for the scoped variant list, size list, React `render`, and the Vue composition decision.

- [ ] **Step 5: Commit the reference note before touching implementation files**

```bash
git add docs/superpowers/references/2026-04-22-button-upstream-contract.md
git commit -m "docs: capture upstream button contract"
```

### Task 2: Expand The Shared Button Token And Selector Contract

**Files:**
- Modify: `packages/styles/src/tokens/primitive.css`
- Modify: `packages/styles/src/tokens/semantic.css`
- Modify: `packages/styles/src/tokens/components/button.css`
- Modify: `packages/styles/src/css/components/button.css`
- Modify: `packages/styles/scripts/verify-build.mjs`
- Modify: `packages/styles/README.md`
- Test: `rg -n 'btn-(default|destructive|ghost|link|sm|lg|icon|icon-sm|icon-lg)' packages/styles/src/css/components/button.css packages/styles/scripts/verify-build.mjs packages/styles/README.md`
- Test: `pnpm --filter @abc-def/styles build`

- [ ] **Step 1: Prove the new selectors and token names do not exist yet**

Run: `rg -n 'btn-(default|destructive|ghost|link|sm|lg|icon|icon-sm|icon-lg)|--abc-button-(default|destructive|ghost|link|height-sm|height-lg|icon-size-sm|icon-size-lg)' packages/styles/src/tokens/primitive.css packages/styles/src/tokens/semantic.css packages/styles/src/tokens/components/button.css packages/styles/src/css/components/button.css packages/styles/scripts/verify-build.mjs packages/styles/README.md`
Expected: PASS with either no matches or only spec/docs references outside the implementation files.

- [ ] **Step 2: Add the raw primitive and semantic tokens required by the expanded button contract**

```css
/* packages/styles/src/tokens/primitive.css */
:root {
  --abc-color-white: 0 0% 100%;
  --abc-color-slate-50: 210 40% 98%;
  --abc-color-slate-100: 210 40% 96.1%;
  --abc-color-slate-200: 214.3 31.8% 91.4%;
  --abc-color-slate-300: 212.7 26.8% 83.9%;
  --abc-color-slate-500: 215.4 16.3% 46.9%;
  --abc-color-slate-700: 215.3 25% 26.7%;
  --abc-color-slate-950: 222.2 47.4% 11.2%;
  --abc-color-blue-600: 221.2 83.2% 53.3%;
  --abc-color-red-600: 0 72.2% 50.6%;
  --abc-color-transparent: 0 0% 0% / 0;

  --abc-radius-sm: 0.375rem;
  --abc-radius-md: 0.5rem;
  --abc-radius-lg: 0.75rem;

  --abc-space-1: 0.25rem;
  --abc-space-2: 0.5rem;
  --abc-space-3: 0.75rem;
  --abc-space-4: 1rem;
  --abc-space-6: 1.5rem;
  --abc-space-8: 2rem;

  --abc-size-4: 1rem;
  --abc-size-5: 1.25rem;
  --abc-size-8: 2rem;
  --abc-size-9: 2.25rem;
  --abc-size-10: 2.5rem;

  --abc-font-size-sm: 0.875rem;
  --abc-font-size-base: 1rem;
  --abc-font-size-xl: 1.25rem;

  --abc-shadow-raised-sm: 0 18px 40px rgb(15 23 42 / 8%);
}
```

```css
/* packages/styles/src/tokens/semantic.css */
:root {
  --abc-bg-base: var(--abc-color-white);
  --abc-fg-base: var(--abc-color-slate-950);

  --abc-bg-primary: var(--abc-color-blue-600);
  --abc-fg-primary: var(--abc-color-slate-50);
  --abc-ring-primary: var(--abc-color-blue-600);

  --abc-bg-destructive: var(--abc-color-red-600);
  --abc-fg-destructive: var(--abc-color-white);
  --abc-ring-destructive: var(--abc-color-red-600);

  --abc-bg-muted: var(--abc-color-slate-100);
  --abc-fg-muted: var(--abc-color-slate-500);
  --abc-border-muted: var(--abc-color-slate-200);

  --abc-bg-secondary: var(--abc-color-slate-100);
  --abc-fg-secondary: var(--abc-color-slate-950);

  --abc-bg-accent: var(--abc-color-slate-100);
  --abc-bg-accent-strong: var(--abc-color-slate-200);
  --abc-fg-accent: var(--abc-color-slate-950);

  --abc-fg-link: var(--abc-color-blue-600);
  --abc-fg-link-hover: var(--abc-color-slate-700);

  --abc-border-clear: var(--abc-color-transparent);

  --abc-radius-control: var(--abc-radius-md);
  --abc-radius-surface: var(--abc-radius-lg);

  --abc-space-control-inline: var(--abc-space-4);
  --abc-space-control-inline-compact: var(--abc-space-3);
  --abc-space-control-inline-roomy: var(--abc-space-6);
  --abc-space-control-gap: var(--abc-space-2);
  --abc-space-actions-gap: var(--abc-space-3);
  --abc-space-surface-padding: var(--abc-space-6);
  --abc-space-content-gap: var(--abc-space-4);

  --abc-size-control-sm: var(--abc-size-8);
  --abc-size-control-md: var(--abc-size-9);
  --abc-size-control-lg: var(--abc-size-10);
  --abc-size-icon-sm: var(--abc-size-4);
  --abc-size-icon-md: var(--abc-size-4);
  --abc-size-icon-lg: var(--abc-size-5);

  --abc-font-control: var(--abc-font-size-sm);
  --abc-font-title: var(--abc-font-size-xl);

  --abc-shadow-surface: var(--abc-shadow-raised-sm);
}
```

- [ ] **Step 3: Replace the button component token file with the full variant and size token surface**

```css
/* packages/styles/src/tokens/components/button.css */
:root {
  --abc-button-bg: var(--abc-button-default-bg);
  --abc-button-bg-hover: var(--abc-button-default-bg-hover);
  --abc-button-fg: var(--abc-button-default-fg);
  --abc-button-fg-hover: var(--abc-button-default-fg-hover);
  --abc-button-border: var(--abc-button-default-border);
  --abc-button-border-hover: var(--abc-button-default-border-hover);
  --abc-button-ring: var(--abc-button-default-ring);
  --abc-button-focus-surface: var(--abc-bg-base);
  --abc-button-text-decoration: none;

  --abc-button-height: var(--abc-size-control-md);
  --abc-button-height-sm: var(--abc-size-control-sm);
  --abc-button-height-lg: var(--abc-size-control-lg);
  --abc-button-radius: var(--abc-radius-control);
  --abc-button-gap: var(--abc-space-control-gap);
  --abc-button-padding-inline: var(--abc-space-control-inline);
  --abc-button-padding-inline-sm: var(--abc-space-control-inline-compact);
  --abc-button-padding-inline-lg: var(--abc-space-control-inline-roomy);
  --abc-button-font-size: var(--abc-font-control);
  --abc-button-icon-size: var(--abc-size-icon-md);
  --abc-button-icon-size-sm: var(--abc-size-icon-sm);
  --abc-button-icon-size-lg: var(--abc-size-icon-lg);

  --abc-button-default-bg: var(--abc-bg-primary);
  --abc-button-default-bg-hover: var(--abc-bg-primary);
  --abc-button-default-fg: var(--abc-fg-primary);
  --abc-button-default-fg-hover: var(--abc-fg-primary);
  --abc-button-default-border: var(--abc-border-clear);
  --abc-button-default-border-hover: var(--abc-border-clear);
  --abc-button-default-ring: var(--abc-ring-primary);

  --abc-button-destructive-bg: var(--abc-bg-destructive);
  --abc-button-destructive-bg-hover: var(--abc-bg-destructive);
  --abc-button-destructive-fg: var(--abc-fg-destructive);
  --abc-button-destructive-fg-hover: var(--abc-fg-destructive);
  --abc-button-destructive-border: var(--abc-border-clear);
  --abc-button-destructive-border-hover: var(--abc-border-clear);
  --abc-button-destructive-ring: var(--abc-ring-destructive);

  --abc-button-outline-bg: var(--abc-bg-base);
  --abc-button-outline-bg-hover: var(--abc-bg-accent);
  --abc-button-outline-fg: var(--abc-fg-base);
  --abc-button-outline-fg-hover: var(--abc-fg-base);
  --abc-button-outline-border: var(--abc-border-muted);
  --abc-button-outline-border-hover: var(--abc-border-muted);
  --abc-button-outline-ring: var(--abc-ring-primary);

  --abc-button-secondary-bg: var(--abc-bg-secondary);
  --abc-button-secondary-bg-hover: var(--abc-bg-accent-strong);
  --abc-button-secondary-fg: var(--abc-fg-secondary);
  --abc-button-secondary-fg-hover: var(--abc-fg-secondary);
  --abc-button-secondary-border: var(--abc-border-clear);
  --abc-button-secondary-border-hover: var(--abc-border-clear);
  --abc-button-secondary-ring: var(--abc-ring-primary);

  --abc-button-ghost-bg: var(--abc-border-clear);
  --abc-button-ghost-bg-hover: var(--abc-bg-accent);
  --abc-button-ghost-fg: var(--abc-fg-accent);
  --abc-button-ghost-fg-hover: var(--abc-fg-accent);
  --abc-button-ghost-border: var(--abc-border-clear);
  --abc-button-ghost-border-hover: var(--abc-border-clear);
  --abc-button-ghost-ring: var(--abc-ring-primary);

  --abc-button-link-bg: var(--abc-border-clear);
  --abc-button-link-bg-hover: var(--abc-border-clear);
  --abc-button-link-fg: var(--abc-fg-link);
  --abc-button-link-fg-hover: var(--abc-fg-link-hover);
  --abc-button-link-border: var(--abc-border-clear);
  --abc-button-link-border-hover: var(--abc-border-clear);
  --abc-button-link-ring: var(--abc-ring-primary);
}
```

- [ ] **Step 4: Replace the button selector file and the build verifier with the new public class contract**

```css
/* packages/styles/src/css/components/button.css */
@layer components {
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--abc-button-gap);
    min-height: var(--abc-button-height);
    padding-inline: var(--abc-button-padding-inline);
    border: 1px solid hsl(var(--abc-button-border));
    border-radius: var(--abc-button-radius);
    background: hsl(var(--abc-button-bg));
    color: hsl(var(--abc-button-fg));
    font-size: var(--abc-button-font-size);
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
    text-decoration: var(--abc-button-text-decoration);
    text-underline-offset: 0.2em;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      opacity 0.2s ease;
  }

  .btn:hover {
    background: hsl(var(--abc-button-bg-hover));
    color: hsl(var(--abc-button-fg-hover));
    border-color: hsl(var(--abc-button-border-hover));
  }

  .btn:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px hsl(var(--abc-button-focus-surface)),
      0 0 0 5px hsl(var(--abc-button-ring) / 0.35);
  }

  .btn:disabled,
  .btn[aria-disabled="true"] {
    pointer-events: none;
    opacity: 0.5;
  }

  .btn :where(svg) {
    inline-size: var(--abc-button-icon-size);
    block-size: var(--abc-button-icon-size);
    flex: none;
  }

  .btn-default {
    --abc-button-bg: var(--abc-button-default-bg);
    --abc-button-bg-hover: var(--abc-button-default-bg-hover);
    --abc-button-fg: var(--abc-button-default-fg);
    --abc-button-fg-hover: var(--abc-button-default-fg-hover);
    --abc-button-border: var(--abc-button-default-border);
    --abc-button-border-hover: var(--abc-button-default-border-hover);
    --abc-button-ring: var(--abc-button-default-ring);
  }

  .btn-destructive {
    --abc-button-bg: var(--abc-button-destructive-bg);
    --abc-button-bg-hover: var(--abc-button-destructive-bg-hover);
    --abc-button-fg: var(--abc-button-destructive-fg);
    --abc-button-fg-hover: var(--abc-button-destructive-fg-hover);
    --abc-button-border: var(--abc-button-destructive-border);
    --abc-button-border-hover: var(--abc-button-destructive-border-hover);
    --abc-button-ring: var(--abc-button-destructive-ring);
  }

  .btn-outline {
    --abc-button-bg: var(--abc-button-outline-bg);
    --abc-button-bg-hover: var(--abc-button-outline-bg-hover);
    --abc-button-fg: var(--abc-button-outline-fg);
    --abc-button-fg-hover: var(--abc-button-outline-fg-hover);
    --abc-button-border: var(--abc-button-outline-border);
    --abc-button-border-hover: var(--abc-button-outline-border-hover);
    --abc-button-ring: var(--abc-button-outline-ring);
  }

  .btn-secondary {
    --abc-button-bg: var(--abc-button-secondary-bg);
    --abc-button-bg-hover: var(--abc-button-secondary-bg-hover);
    --abc-button-fg: var(--abc-button-secondary-fg);
    --abc-button-fg-hover: var(--abc-button-secondary-fg-hover);
    --abc-button-border: var(--abc-button-secondary-border);
    --abc-button-border-hover: var(--abc-button-secondary-border-hover);
    --abc-button-ring: var(--abc-button-secondary-ring);
  }

  .btn-ghost {
    --abc-button-bg: var(--abc-button-ghost-bg);
    --abc-button-bg-hover: var(--abc-button-ghost-bg-hover);
    --abc-button-fg: var(--abc-button-ghost-fg);
    --abc-button-fg-hover: var(--abc-button-ghost-fg-hover);
    --abc-button-border: var(--abc-button-ghost-border);
    --abc-button-border-hover: var(--abc-button-ghost-border-hover);
    --abc-button-ring: var(--abc-button-ghost-ring);
  }

  .btn-link {
    --abc-button-bg: var(--abc-button-link-bg);
    --abc-button-bg-hover: var(--abc-button-link-bg-hover);
    --abc-button-fg: var(--abc-button-link-fg);
    --abc-button-fg-hover: var(--abc-button-link-fg-hover);
    --abc-button-border: var(--abc-button-link-border);
    --abc-button-border-hover: var(--abc-button-link-border-hover);
    --abc-button-ring: var(--abc-button-link-ring);
    --abc-button-text-decoration: underline;

    min-height: auto;
    padding-inline: 0;
  }

  .btn-sm {
    min-height: var(--abc-button-height-sm);
    padding-inline: var(--abc-button-padding-inline-sm);
  }

  .btn-lg {
    min-height: var(--abc-button-height-lg);
    padding-inline: var(--abc-button-padding-inline-lg);
  }

  .btn-icon,
  .btn-icon-sm,
  .btn-icon-lg {
    padding-inline: 0;
  }

  .btn-icon {
    inline-size: var(--abc-button-height);
  }

  .btn-icon-sm {
    min-height: var(--abc-button-height-sm);
    inline-size: var(--abc-button-height-sm);
  }

  .btn-icon-sm :where(svg) {
    inline-size: var(--abc-button-icon-size-sm);
    block-size: var(--abc-button-icon-size-sm);
  }

  .btn-icon-lg {
    min-height: var(--abc-button-height-lg);
    inline-size: var(--abc-button-height-lg);
  }

  .btn-icon-lg :where(svg) {
    inline-size: var(--abc-button-icon-size-lg);
    block-size: var(--abc-button-icon-size-lg);
  }
}
```

```js
// packages/styles/scripts/verify-build.mjs
[
  "button",
  sourceFiles.buttonSelectors,
  buttonSelectorText,
  [
    ".btn",
    ".btn-default",
    ".btn-destructive",
    ".btn-outline",
    ".btn-secondary",
    ".btn-ghost",
    ".btn-link",
    ".btn-sm",
    ".btn-lg",
    ".btn-icon",
    ".btn-icon-sm",
    ".btn-icon-lg",
  ],
];

for (const forbiddenSelector of [".btn-primary"]) {
  assert(
    !selectorRegexFor(forbiddenSelector).test(buttonSelectorText),
    `Forbidden legacy selector ${forbiddenSelector} found in ${sourceFiles.buttonSelectors}`,
  );
}
```

```md
<!-- packages/styles/README.md -->
- `.btn`, `.btn-default`, `.btn-destructive`, `.btn-outline`, `.btn-secondary`, `.btn-ghost`, `.btn-link`
- `.btn-sm`, `.btn-lg`, `.btn-icon`, `.btn-icon-sm`, `.btn-icon-lg`
```

- [ ] **Step 5: Verify the styles package now enforces the new contract**

Run: `rg -n 'btn-(default|destructive|ghost|link|sm|lg|icon|icon-sm|icon-lg)' packages/styles/src/css/components/button.css packages/styles/scripts/verify-build.mjs packages/styles/README.md`
Expected: PASS with matches for the new variant and size selectors.

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS with `verify-build.mjs` succeeding and no remaining `.btn-primary` dependency in the button contract.

- [ ] **Step 6: Commit the shared button contract change**

```bash
git add packages/styles/src/tokens/primitive.css packages/styles/src/tokens/semantic.css packages/styles/src/tokens/components/button.css packages/styles/src/css/components/button.css packages/styles/scripts/verify-build.mjs packages/styles/README.md
git commit -m "feat: expand shared button contract"
```

### Task 3: Update The React Button API To Match The Shared Contract

**Files:**
- Modify: `packages/react/src/components/button.tsx`
- Modify: `packages/react/README.md`
- Modify: `examples/react-vite/src/App.tsx`
- Test: `pnpm --filter @abc-def/react typecheck`
- Test: `pnpm --filter @abc-def/example-react-vite build`

- [ ] **Step 1: Prove React still only exposes the old three-variant contract**

Run: `rg -n 'btn-primary|secondary: \"btn-secondary\"|outline: \"btn-outline\"|size:' packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx`
Expected: PASS with `btn-primary` still present and no `size` variant mapping in the React button implementation.

- [ ] **Step 2: Replace the React button wrapper with the scoped `variant`, `size`, and `render` API**

```tsx
// packages/react/src/components/button.tsx
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../lib/cn";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-default",
      destructive: "btn-destructive",
      outline: "btn-outline",
      secondary: "btn-secondary",
      ghost: "btn-ghost",
      link: "btn-link",
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

type ButtonRenderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string;
  ref: React.Ref<HTMLButtonElement>;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  render?: (props: ButtonRenderProps) => React.ReactElement;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, render, size, type, variant, ...props }, ref) => {
    const resolvedClassName = cn(buttonVariants({ size, variant }), className);

    if (render) {
      return render({
        ...props,
        className: resolvedClassName,
        ref,
      });
    }

    return (
      <button
        ref={ref}
        className={resolvedClassName}
        type={type ?? "button"}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
```

- [ ] **Step 3: Update the React docs and example to exercise the expanded contract**

````md
<!-- packages/react/README.md -->
## Button API

- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Composition: React exposes a `render` prop for Base UI-style composition. This replaces any Radix `asChild` expectation.

```tsx
<Button variant="outline" size="sm">Outline</Button>
<Button variant="link" render={(props) => <a {...props} href="/docs" />}>
  Docs
</Button>
```
````

```tsx
// examples/react-vite/src/App.tsx
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@abc-def/react";

export default function App() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>React mirrors the shared button contract</CardTitle>
            <p className="abc-text-dim">
              Variants, sizes, and classes come from <code>@abc-def/styles/css</code>.
            </p>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type into the shared input component" />
            <div className="card-actions">
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Delete</Button>
              <Button>Default</Button>
            </div>
            <div className="card-actions">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add item">+</Button>
              <Button size="icon-sm" aria-label="Add small item">+</Button>
              <Button size="icon-lg" aria-label="Add large item">+</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Verify React types and the Vite example build**

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS with the new `variant`, `size`, and `render` typing accepted.

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: PASS with the example rendering the expanded button contract without missing class references.

- [ ] **Step 5: Commit the React button migration**

```bash
git add packages/react/src/components/button.tsx packages/react/README.md examples/react-vite/src/App.tsx
git commit -m "feat: align react button with shadcn contract"
```

### Task 4: Update The Vue Button API And Plain HTML Contract Consumers

**Files:**
- Modify: `packages/vue/src/components/button.ts`
- Modify: `packages/vue/README.md`
- Modify: `examples/vue-vite/src/main.ts`
- Modify: `examples/html-vite/index.html`
- Test: `pnpm --filter @abc-def/vue typecheck`
- Test: `pnpm --filter @abc-def/example-vue-vite build`
- Test: `pnpm --filter @abc-def/example-html-vite build`

- [ ] **Step 1: Prove Vue and HTML still depend on the old default-class naming**

Run: `rg -n 'btn-primary|variant === \"default\"|props.variant === \"default\"|Buy Now' packages/vue/src/components/button.ts packages/vue/README.md examples/vue-vite/src/main.ts examples/html-vite/index.html`
Expected: PASS with `btn-primary` still present in Vue or HTML and no size handling in the Vue wrapper.

- [ ] **Step 2: Replace the Vue button wrapper with the new variant and size mapping**

```ts
// packages/vue/src/components/button.ts
import type { ClassValue } from "clsx";
import type { PropType, SetupContext } from "vue";
import { defineComponent, h } from "vue";

import { cn } from "../lib/cn";

const variantClasses = {
  default: "btn-default",
  destructive: "btn-destructive",
  outline: "btn-outline",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  link: "btn-link",
} as const;

const sizeClasses = {
  default: null,
  sm: "btn-sm",
  lg: "btn-lg",
  icon: "btn-icon",
  "icon-sm": "btn-icon-sm",
  "icon-lg": "btn-icon-lg",
} as const;

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

export const Button = defineComponent({
  name: "AbcButton",
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: "default",
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "default",
    },
  },
  setup(props, { attrs, slots }: SetupContext) {
    const hasType = Object.prototype.hasOwnProperty.call(attrs, "type");
    const resolvedType = hasType ? (attrs as { type?: string }).type : "button";

    return () =>
      h(
        "button",
        {
          ...attrs,
          type: resolvedType,
          class: cn(
            "btn",
            variantClasses[props.variant],
            sizeClasses[props.size],
            attrs.class as ClassValue,
          ),
        },
        slots.default?.(),
      );
  },
});
```

- [ ] **Step 3: Update the Vue and HTML examples plus the Vue README to match the shared contract**

```md
<!-- packages/vue/README.md -->
## Button API

- Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Vue does not add an `asChild` or cross-framework composition prop in this phase; the shared contract here is variants, sizes, and classes.
```

```ts
// examples/vue-vite/src/main.ts
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@abc-def/vue";
import { createApp, h } from "vue";

import "./index.css";

const App = {
  name: "ExampleVueApp",
  setup() {
    return () =>
      h("main", { class: "min-h-screen bg-background px-6 py-16 text-foreground" }, [
        h("div", { class: "mx-auto flex w-full max-w-3xl flex-col gap-6" }, [
          h(Card, null, {
            default: () => [
              h(CardHeader, null, {
                default: () => [
                  h(CardTitle, null, { default: () => "Vue mirrors the shared button contract" }),
                  h("p", { class: "abc-text-dim" }, "Vue uses the same variants, sizes, and selectors as React and plain HTML."),
                ],
              }),
              h(CardContent, null, {
                default: () => [
                  h(Input, { placeholder: "Type into the shared input component" }),
                  h("div", { class: "card-actions" }, [
                    h(Button, { variant: "outline" }, { default: () => "Outline" }),
                    h(Button, { variant: "secondary" }, { default: () => "Secondary" }),
                    h(Button, { variant: "ghost" }, { default: () => "Ghost" }),
                    h(Button, { variant: "link" }, { default: () => "Link" }),
                    h(Button, { variant: "destructive" }, { default: () => "Delete" }),
                    h(Button, null, { default: () => "Default" }),
                  ]),
                  h("div", { class: "card-actions" }, [
                    h(Button, { size: "sm" }, { default: () => "Small" }),
                    h(Button, null, { default: () => "Default" }),
                    h(Button, { size: "lg" }, { default: () => "Large" }),
                    h(Button, { size: "icon", "aria-label": "Add item" }, { default: () => "+" }),
                    h(Button, { size: "icon-sm", "aria-label": "Add small item" }, { default: () => "+" }),
                    h(Button, { size: "icon-lg", "aria-label": "Add large item" }, { default: () => "+" }),
                  ]),
                ],
              }),
            ],
          }),
        ]),
      ]);
  },
};

createApp(App).mount("#app");
```

```html
<!-- examples/html-vite/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>abc-def Plain HTML Example</title>
    <link rel="stylesheet" href="/src/index.css" />
  </head>
  <body>
    <main class="demo-shell">
      <article class="card demo-card">
        <div class="card-header">
          <h1 class="card-title">Plain HTML with @abc-def/styles</h1>
          <p class="abc-text-dim">
            HTML uses the same explicit button variant and size classes as the framework wrappers.
          </p>
        </div>
        <div class="card-content">
          <label class="demo-field">
            <span class="demo-label">Email</span>
            <input
              class="input"
              type="email"
              autocomplete="email"
              placeholder="name@example.com"
            />
          </label>
          <div class="card-actions">
            <button class="btn btn-default" type="button">Default</button>
            <button class="btn btn-outline" type="button">Outline</button>
            <button class="btn btn-secondary" type="button">Secondary</button>
            <button class="btn btn-ghost" type="button">Ghost</button>
            <button class="btn btn-link" type="button">Link</button>
            <button class="btn btn-destructive" type="button">Delete</button>
          </div>
          <div class="card-actions">
            <button class="btn btn-default btn-sm" type="button">Small</button>
            <button class="btn btn-default" type="button">Default</button>
            <button class="btn btn-default btn-lg" type="button">Large</button>
            <button class="btn btn-default btn-icon" type="button" aria-label="Add item">+</button>
            <button class="btn btn-default btn-icon-sm" type="button" aria-label="Add small item">+</button>
            <button class="btn btn-default btn-icon-lg" type="button" aria-label="Add large item">+</button>
          </div>
        </div>
      </article>
    </main>
  </body>
</html>
```

- [ ] **Step 4: Verify Vue and HTML consumers build against the new contract**

Run: `pnpm --filter @abc-def/vue typecheck`
Expected: PASS with the new Vue `variant` and `size` prop surface.

Run: `pnpm --filter @abc-def/example-vue-vite build`
Expected: PASS with Vue consuming the new selector contract.

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS with HTML consuming `btn-default` and the size classes directly.

- [ ] **Step 5: Commit the Vue and plain-HTML consumer migration**

```bash
git add packages/vue/src/components/button.ts packages/vue/README.md examples/vue-vite/src/main.ts examples/html-vite/index.html
git commit -m "feat: align vue and html button contract"
```

### Task 5: Run End-To-End Verification And Clean Up Remaining Contract Drift

**Files:**
- Modify if needed: `packages/react/README.md`
- Modify if needed: `packages/vue/README.md`
- Modify if needed: `packages/styles/README.md`
- Test: `pnpm --filter @abc-def/styles build`
- Test: `pnpm --filter @abc-def/react typecheck`
- Test: `pnpm --filter @abc-def/vue typecheck`
- Test: `pnpm --filter @abc-def/example-react-vite build`
- Test: `pnpm --filter @abc-def/example-vue-vite build`
- Test: `pnpm --filter @abc-def/example-html-vite build`
- Test: `rg -n 'btn-primary|asChild|icon-xs|variant=\"primary\"|size=\"xs\"' packages examples README.md docs/component-onboarding.md packages/styles/README.md packages/react/README.md packages/vue/README.md`

- [ ] **Step 1: Sweep the repo for stale contract names that would confuse consumers**

Run: `rg -n 'btn-primary|asChild|icon-xs|variant=\"primary\"|size=\"xs\"' packages examples README.md docs/component-onboarding.md packages/styles/README.md packages/react/README.md packages/vue/README.md`
Expected: Either no matches, or only historical plan/spec documents outside the live package docs and implementation surface.

- [ ] **Step 2: Normalize any remaining live docs that still describe the old button contract**

```md
Use this wording everywhere live docs mention the current Button contract:

- Default HTML class: `btn-default`
- Approved variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Approved sizes: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- React composition: `render`
- Vue composition: no shared composition prop in this phase
```

- [ ] **Step 3: Run the full verification set in dependency order**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS

Run: `pnpm --filter @abc-def/vue typecheck`
Expected: PASS

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: PASS

Run: `pnpm --filter @abc-def/example-vue-vite build`
Expected: PASS

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS

- [ ] **Step 4: Commit the final verification sweep**

```bash
git add packages/styles/README.md packages/react/README.md packages/vue/README.md
git commit -m "docs: finalize button multiplatform contract"
```

- [ ] **Step 5: Record the final acceptance checklist in the work log or PR description**

```md
- React exposes `variant` and `size` for the approved contract
- React uses `render` instead of `asChild`
- Vue exposes the same approved `variant` and `size` contract
- HTML renders the same contract through classes alone
- `@abc-def/styles` owns the visual contract and verifies it in build checks
- React, Vue, and HTML example builds all pass
```
