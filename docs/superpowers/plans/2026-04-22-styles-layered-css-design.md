# Styles Layered CSS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align `@abc-def/styles/css` internals with Tailwind CSS v4's layer model by moving shared selectors into explicit `@layer base`, `@layer components`, and `@utility` constructs without changing the public import or selector contract.

**Architecture:** Keep the public CSS entry points and import order exactly as they are today. Make the layer contract explicit at the leaf CSS files: `base.css` keeps token imports plus `@theme` and wraps global selectors in `@layer base`, each component selector file wraps its semantic classes in `@layer components`, and `utilities.css` defines the shared helpers with top-level `@utility` rules. Extend `packages/styles/scripts/verify-build.mjs` so the package build fails if those layer boundaries drift.

**Tech Stack:** pnpm workspaces, Tailwind CSS v4 CSS-first authoring, Node.js verification script, Vite example apps

---

## File Map

- Modify `packages/styles/src/css/base.css` to keep token imports and `@theme` at top level while moving shared element/reset selectors into `@layer base`.
- Modify `packages/styles/src/css/components/button.css` to wrap button selectors in `@layer components`.
- Modify `packages/styles/src/css/components/card.css` to wrap card selectors in `@layer components`.
- Modify `packages/styles/src/css/components/input.css` to wrap input selectors in `@layer components`.
- Modify `packages/styles/src/css/utilities.css` to replace plain class selectors with Tailwind v4 `@utility` definitions while preserving the generated utility names.
- Modify `packages/styles/scripts/verify-build.mjs` to assert the new layered CSS contract in source files before checking JS exports.
- Modify `packages/styles/README.md` to keep `@abc-def/styles/css` as the primary documented entry and describe the secondary entries as optional compatibility/debugging surfaces.

## Guardrails

- Do not change `packages/styles/src/css/index.css`; its import order already matches the target `base -> components -> utilities` contract.
- Do not change `packages/styles/src/css/components.css`; it should remain an aggregate importer for component tokens plus selector files.
- Do not rename any public selectors: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.card`, `.card-header`, `.card-content`, `.card-body`, `.card-title`, `.card-actions`, `.input`, `.abc-text-dim`, and `.abc-surface-base` must remain valid consumer-facing names.
- Keep `@import "tailwindcss";` followed by `@import "@abc-def/styles/css";` as the recommended consumer integration in docs.

### Task 1: Move Shared Global Selectors Into `@layer base`

**Files:**
- Modify: `packages/styles/src/css/base.css`
- Test: `packages/styles/src/css/base.css`

- [ ] **Step 1: Prove the base file still has unlayered selectors**

Run: `rg -n '^@layer base|^\* \{|^body \{|^img \{|^button,' packages/styles/src/css/base.css`
Expected: PASS with matches for `*`, `body`, `img`, and `button,` but no `@layer base` line yet.

- [ ] **Step 2: Wrap the shared reset and element selectors in Tailwind's base layer**

```css
@import "../tokens/primitive.css";
@import "../tokens/semantic.css";

@theme {
  --color-background: hsl(var(--abc-bg-base));
  --color-foreground: hsl(var(--abc-fg-base));
  --color-primary: hsl(var(--abc-bg-primary));
  --color-primary-foreground: hsl(var(--abc-fg-primary));
  --color-muted: hsl(var(--abc-bg-muted));
  --color-muted-foreground: hsl(var(--abc-fg-muted));
  --color-border: hsl(var(--abc-border-muted));

  --radius-sm: var(--abc-radius-sm);
  --radius-md: var(--abc-radius-md);
  --radius-lg: var(--abc-radius-lg);

  --spacing-1: var(--abc-space-1);
  --spacing-2: var(--abc-space-2);
  --spacing-3: var(--abc-space-3);
  --spacing-4: var(--abc-space-4);
  --spacing-6: var(--abc-space-6);
  --spacing-8: var(--abc-space-8);
}

@layer base {
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: hsl(var(--abc-bg-base));
    color: hsl(var(--abc-fg-base));
    font-family: Inter, sans-serif;
    line-height: 1.5;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
}
```

- [ ] **Step 3: Verify the base layer wrapper is now present**

Run: `rg -n '^@layer base|^\s+\* \{|^\s+body \{|^\s+img \{|^\s+button,' packages/styles/src/css/base.css`
Expected: PASS with one `@layer base` line and the moved selectors indented beneath it.

- [ ] **Step 4: Build the styles package to catch CSS syntax regressions early**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and `packages/styles/dist/index.js` plus `packages/styles/dist/index.cjs` are regenerated without CSS parse errors.

- [ ] **Step 5: Commit the base-layer migration**

```bash
git add packages/styles/src/css/base.css
git commit -m "refactor: wrap shared base rules in layer"
```

### Task 2: Move Semantic Selectors Into `@layer components`

**Files:**
- Modify: `packages/styles/src/css/components/button.css`
- Modify: `packages/styles/src/css/components/card.css`
- Modify: `packages/styles/src/css/components/input.css`
- Test: `packages/styles/src/css/components/button.css`
- Test: `packages/styles/src/css/components/card.css`
- Test: `packages/styles/src/css/components/input.css`

- [ ] **Step 1: Prove the component selector files are still plain selectors**

Run: `rg -n '^@layer components|^\\.btn|^\\.card|^\\.input' packages/styles/src/css/components/button.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css`
Expected: PASS with selector matches in all three files and no `@layer components` lines yet.

- [ ] **Step 2: Wrap the button selectors in `@layer components`**

```css
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
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      opacity 0.2s ease;
  }

  .btn:hover {
    opacity: 0.96;
  }

  .btn:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px hsl(var(--abc-button-focus-surface)),
      0 0 0 4px hsl(var(--abc-button-ring));
  }

  .btn:disabled,
  .btn[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .btn-primary {
    --abc-button-bg: var(--abc-button-primary-bg);
    --abc-button-fg: var(--abc-button-primary-fg);
    --abc-button-border: var(--abc-button-primary-border);
  }

  .btn-secondary {
    --abc-button-bg: var(--abc-button-secondary-bg);
    --abc-button-fg: var(--abc-button-secondary-fg);
    --abc-button-border: var(--abc-button-secondary-border);
  }

  .btn-outline {
    --abc-button-bg: var(--abc-button-outline-bg);
    --abc-button-fg: var(--abc-button-outline-fg);
    --abc-button-border: var(--abc-button-outline-border);
  }
}
```

- [ ] **Step 3: Wrap the card and input selectors in `@layer components`**

```css
@layer components {
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--abc-card-gap);
    padding: var(--abc-card-padding);
    border: 1px solid hsl(var(--abc-card-border));
    border-radius: var(--abc-card-radius);
    background: hsl(var(--abc-card-bg));
    box-shadow: var(--abc-card-shadow);
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: var(--abc-card-gap);
    color: hsl(var(--abc-card-copy-color));
  }

  .card-content,
  .card-body {
    display: flex;
    flex-direction: column;
    gap: var(--abc-card-gap);
    color: hsl(var(--abc-card-copy-color));
  }

  .card-title {
    margin: 0;
    color: hsl(var(--abc-card-title-color));
    font-size: var(--abc-card-title-size);
    font-weight: 700;
    line-height: 1.2;
  }

  .card-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: var(--abc-card-actions-gap);
  }
}
```

```css
@layer components {
  .input {
    width: 100%;
    min-height: var(--abc-input-height);
    padding-inline: var(--abc-input-padding-inline);
    border: 1px solid hsl(var(--abc-input-border));
    border-radius: var(--abc-input-radius);
    background: hsl(var(--abc-input-bg));
    color: hsl(var(--abc-input-fg));
    font-size: var(--abc-input-font-size);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .input:focus-visible {
    outline: none;
    border-color: hsl(var(--abc-input-border-focus));
    box-shadow: 0 0 0 3px hsl(var(--abc-input-border-focus) / 0.2);
  }

  .input::placeholder {
    color: hsl(var(--abc-input-placeholder));
  }

  .input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
```

- [ ] **Step 4: Verify all semantic selector files now declare the components layer**

Run: `rg -n '^@layer components' packages/styles/src/css/components/button.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css`
Expected: PASS with one `@layer components` line in each file.

- [ ] **Step 5: Rebuild the styles package after the component-layer migration**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and `packages/styles/scripts/verify-build.mjs` still accepts the unchanged selector names.

- [ ] **Step 6: Commit the component-layer migration**

```bash
git add packages/styles/src/css/components/button.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css
git commit -m "refactor: wrap semantic selectors in components layer"
```

### Task 3: Convert Shared Helpers To `@utility` And Enforce The Contract In Build Verification

**Files:**
- Modify: `packages/styles/src/css/utilities.css`
- Modify: `packages/styles/scripts/verify-build.mjs`
- Test: `packages/styles/src/css/utilities.css`
- Test: `packages/styles/scripts/verify-build.mjs`

- [ ] **Step 1: Prove the utilities file still uses plain class selectors and the verifier does not check layering yet**

Run: `rg -n '^\\.abc-|^@utility|@layer base|@layer components|utilities must' packages/styles/src/css/utilities.css packages/styles/scripts/verify-build.mjs`
Expected: PASS with `.abc-text-dim` and `.abc-surface-base` matches in `utilities.css`, and no current assertions for `@utility`, `@layer base`, or `@layer components`.

- [ ] **Step 2: Replace the plain utility selectors with Tailwind v4 `@utility` rules**

```css
/* packages/styles/src/css/utilities.css */
@import "../tokens/primitive.css";
@import "../tokens/semantic.css";

@utility abc-text-dim {
  color: hsl(var(--abc-fg-muted));
}

@utility abc-surface-base {
  background: hsl(var(--abc-bg-base));
  color: hsl(var(--abc-fg-base));
}
```

- [ ] **Step 3: Extend `verify-build.mjs` so the build fails when layer boundaries drift**

```js
const assertIncludes = (fileText, snippet, filePath, label) => {
  assert(fileText.includes(snippet), `Missing ${label} in ${filePath}`);
};

assertIncludes(baseEntryText, "@layer base", sourceFiles.baseEntry, "base layer wrapper");

for (const [name, filePath, fileText] of [
  ["button", sourceFiles.buttonSelectors, buttonSelectorText],
  ["card", sourceFiles.cardSelectors, cardSelectorText],
  ["input", sourceFiles.inputSelectors, inputSelectorText],
]) {
  assertIncludes(fileText, "@layer components", filePath, `${name} components layer wrapper`);
}

for (const utilityName of ["abc-text-dim", "abc-surface-base"]) {
  assert(
    new RegExp(String.raw`@utility\\s+${escapeForRegex(utilityName)}\\b`).test(
      utilitiesEntryText,
    ),
    `Missing @utility ${utilityName} in ${sourceFiles.utilitiesEntry}`,
  );
  assert(
    !new RegExp(String.raw`(^|\\n)\\.${escapeForRegex(utilityName)}\\s*\\{`, "m").test(
      utilitiesEntryText,
    ),
    `Utilities entry must not define plain selector .${utilityName}; use @utility instead`,
  );
}
```

- [ ] **Step 4: Rebuild the package so the updated verifier checks the new CSS contract**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS with `scripts/verify-build.mjs` succeeding only when `@layer base`, `@layer components`, and both `@utility` definitions are present.

- [ ] **Step 5: Smoke-check the source tree for the new layered directives**

Run: `rg -n '^@layer base|^@layer components|^@utility abc-text-dim|^@utility abc-surface-base' packages/styles/src/css/base.css packages/styles/src/css/components/button.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css packages/styles/src/css/utilities.css`
Expected: PASS with one base-layer match, three component-layer matches, and two utility declarations.

- [ ] **Step 6: Commit the utility and verifier migration**

```bash
git add packages/styles/src/css/utilities.css packages/styles/scripts/verify-build.mjs
git commit -m "refactor: enforce layered css contract"
```

### Task 4: Document `@abc-def/styles/css` As The Primary Entry And Explain The Layered Internals

**Files:**
- Modify: `packages/styles/README.md`
- Test: `packages/styles/README.md`

- [ ] **Step 1: Prove the README still lists all CSS entries without primary-vs-secondary guidance**

Run: `rg -n '^## CSS Entries|@abc-def/styles/css/base|@abc-def/styles/css/components|@abc-def/styles/css/utilities|primary|secondary' packages/styles/README.md`
Expected: PASS with the three entry points listed and no current "primary" or "secondary" framing.

- [ ] **Step 2: Update the README so docs match the new layer-aligned contract**

````md
## CSS Entry

The primary public stylesheet entry is `@abc-def/styles/css`.

Consumers should continue to import:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

Secondary entry points remain exported for compatibility and focused debugging, but they are not the main documented integration:

- `@abc-def/styles/css/base`
- `@abc-def/styles/css/components`
- `@abc-def/styles/css/utilities`

Internally, those files now map to Tailwind CSS v4 responsibilities:

- `base.css` keeps token imports and `@theme`, then wraps shared element rules in `@layer base`
- component selector files define semantic classes inside `@layer components`
- `utilities.css` exposes shared helpers through `@utility`
````

- [ ] **Step 3: Verify the README now describes the primary entry and the new layer model**

Run: `rg -n 'primary public stylesheet entry|compatibility and focused debugging|@layer base|@layer components|@utility' packages/styles/README.md`
Expected: PASS with matches for the primary-entry wording and all three Tailwind layer concepts.

- [ ] **Step 4: Commit the documentation update**

```bash
git add packages/styles/README.md
git commit -m "docs: clarify layered styles entrypoints"
```

### Task 5: Run Cross-Workspace Verification Before Declaring The Migration Done

**Files:**
- Test: `packages/styles`
- Test: `examples/html-vite`
- Test: `examples/react-vite`
- Test: `examples/vue-vite`

- [ ] **Step 1: Re-run the package build as the source-of-truth contract check**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS with the layered CSS verifier succeeding.

- [ ] **Step 2: Build the plain HTML example against the new layered CSS**

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS and Vite emits the static example bundle without Tailwind CSS parse errors.

- [ ] **Step 3: Build the React example to confirm semantic classes and shared utilities still compile**

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: PASS and the example bundle completes with no missing `abc-text-dim` or shared stylesheet import failures.

- [ ] **Step 4: Build the Vue example for the same shared CSS smoke test**

Run: `pnpm --filter @abc-def/example-vue-vite build`
Expected: PASS and the example bundle completes with no shared stylesheet import failures.

- [ ] **Step 5: Capture the final diff and verification state**

Run: `git status --short`
Expected: PASS showing only the intended CSS, verifier, and README edits staged or committed for this migration.

## Spec Coverage Check

- Consumer-facing imports stay unchanged because the plan does not touch `packages/styles/src/css/index.css`, package exports, or README usage order.
- Base/component/utility cascade boundaries become real Tailwind v4 constructs through Tasks 1, 2, and 3.
- Public selector compatibility is preserved because Tasks 2 and 3 wrap existing selector names instead of renaming them, and the verifier still checks the semantic selector contract.
- Documentation stays centered on `@abc-def/styles/css` through Task 4.
- Cross-workspace validation is covered by Task 5 so the layered migration is not treated as complete until the package and all three example consumers still build.
