# Token Architecture And Component Onboarding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure `@abc-def/styles` around `primitive -> semantic -> component-specific` CSS tokens, migrate `button`, `card`, and `input` to that contract across styles/React/Vue/examples, and add a reusable component-onboarding skill plus contributor docs.

**Architecture:** Make CSS files in `packages/styles/src/tokens` the only authored token source, then layer selector files in `packages/styles/src/css` on top of those tokens. Keep the public consumption model simple by exporting stable CSS entry points from `@abc-def/styles`, and make React/Vue components thin semantic wrappers around the shared selectors instead of shipping their own utility-heavy styling decisions.

**Tech Stack:** pnpm workspaces, Turborepo, TypeScript, Tailwind CSS v4, Vite, React 19, Vue 3 render functions, Node verification scripts, repo-local Codex skills under `.agents/skills`

---

## File Map

- Delete `packages/styles/src/tokens/index.ts` because TypeScript token values are the current duplicate source of truth.
- Create `packages/styles/src/tokens/primitive.css` for raw scales only.
- Create `packages/styles/src/tokens/semantic.css` for shared meanings that reference primitive tokens only.
- Create `packages/styles/src/tokens/components/button.css`, `packages/styles/src/tokens/components/card.css`, and `packages/styles/src/tokens/components/input.css` for public component token contracts that reference semantic tokens only.
- Replace `packages/styles/src/css/base.css` so it imports the token layers, defines `@theme`, and owns only global/base selectors.
- Create `packages/styles/src/css/components/button.css`, `packages/styles/src/css/components/card.css`, and `packages/styles/src/css/components/input.css` for component selectors.
- Create `packages/styles/src/css/components.css`, `packages/styles/src/css/utilities.css`, and `packages/styles/src/css/index.css` for stable consumer-facing entry points.
- Modify `packages/styles/src/index.ts`, `packages/styles/package.json`, `packages/styles/scripts/verify-build.mjs`, and `packages/styles/README.md` so the style package exports the new CSS surface and validates dependency rules.
- Modify `packages/react/src/components/button.tsx`, `packages/react/src/components/card.tsx`, and `packages/react/src/components/input.tsx` so React consumes semantic class names from `@abc-def/styles`.
- Modify `packages/vue/src/components/button.ts`, `packages/vue/src/components/card.ts`, and `packages/vue/src/components/input.ts` so Vue consumes the same semantic class names.
- Modify `packages/react/README.md`, `packages/vue/README.md`, and `README.md` so docs describe the CSS-first contract and the new example coverage.
- Modify `examples/react-vite/src/App.tsx` and `examples/html-vite/index.html` to exercise the migrated contract.
- Create `examples/vue-vite/package.json`, `examples/vue-vite/tsconfig.json`, `examples/vue-vite/vite.config.ts`, `examples/vue-vite/index.html`, `examples/vue-vite/src/index.css`, and `examples/vue-vite/src/main.ts` for the missing Vue example workspace.
- Create `docs/component-onboarding.md` as the human-facing component onboarding workflow.
- Create `.agents/skills/component-token-onboarding/SKILL.md` and `.agents/skills/component-token-onboarding/agents/openai.yaml` for the semi-automated Codex skill described in the spec.
- Modify `pnpm-lock.yaml` after adding the Vue example workspace dependencies.

### Task 1: Convert `@abc-def/styles` Into A CSS-First Public Surface

**Files:**
- Delete: `packages/styles/src/tokens/index.ts`
- Modify: `packages/styles/src/index.ts`
- Modify: `packages/styles/package.json`
- Test: `node --input-type=module -e "import('./packages/styles/src/index.ts').then((m) => console.log(Object.keys(m).sort().join(',')))"`
- Test: `rg -n '"./css"|tokens' packages/styles/package.json packages/styles/src/index.ts`

- [ ] **Step 1: Prove the package still exposes the old TypeScript token object**

Run: `node --input-type=module -e "import('./packages/styles/src/index.ts').then((m) => console.log(Object.keys(m).sort().join(',')))"`
Expected: PASS with `cssEntry,tokens`.

- [ ] **Step 2: Replace the JavaScript exports with CSS entry metadata**

```ts
// packages/styles/src/index.ts
export const cssEntry = "@abc-def/styles/css";

export const cssEntries = {
  base: "@abc-def/styles/css/base",
  components: "@abc-def/styles/css/components",
  utilities: "@abc-def/styles/css/utilities",
} as const;
```

```json
// packages/styles/package.json
{
  "files": [
    "dist",
    "src/css",
    "src/tokens",
    "README.md"
  ],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./css": "./src/css/index.css",
    "./css/base": "./src/css/base.css",
    "./css/components": "./src/css/components.css",
    "./css/utilities": "./src/css/utilities.css"
  }
}
```

- [ ] **Step 3: Delete the old TypeScript token source**

```text
Delete this file:
- packages/styles/src/tokens/index.ts
```

- [ ] **Step 4: Verify the package surface is CSS-first**

Run: `node --input-type=module -e "import('./packages/styles/src/index.ts').then((m) => console.log(Object.keys(m).sort().join(',')))"`
Expected: PASS with `cssEntries,cssEntry`.

Run: `rg -n '"./css"|tokens' packages/styles/package.json packages/styles/src/index.ts`
Expected: PASS with matches for `./css`, `./css/base`, `./css/components`, `./css/utilities`, and no `tokens` export.

- [ ] **Step 5: Commit the package-surface change**

```bash
git add packages/styles/package.json packages/styles/src/index.ts
git rm packages/styles/src/tokens/index.ts
git commit -m "refactor: make styles package css-first"
```

### Task 2: Add Primitive And Semantic Token Layers

**Files:**
- Create: `packages/styles/src/tokens/primitive.css`
- Create: `packages/styles/src/tokens/semantic.css`
- Modify: `packages/styles/src/css/base.css`
- Create: `packages/styles/src/css/index.css`
- Test: `rg -n '^--abc-(color|radius|space|size|font-size|shadow)-' packages/styles/src/tokens/primitive.css`
- Test: `rg -n 'var\\(--abc-(color|radius|space|size|font-size|shadow)-' packages/styles/src/tokens/semantic.css`

- [ ] **Step 1: Prove the token layers do not exist yet**

Run: `find packages/styles/src/tokens -maxdepth 2 -type f | sort`
Expected: PASS with only `packages/styles/src/tokens/index.ts` before Task 1, or no CSS token layer files after Task 1 cleanup.

- [ ] **Step 2: Create the primitive token file with raw scales only**

```css
/* packages/styles/src/tokens/primitive.css */
:root {
  --abc-color-white: 0 0% 100%;
  --abc-color-slate-50: 210 40% 98%;
  --abc-color-slate-100: 210 40% 96.1%;
  --abc-color-slate-200: 214.3 31.8% 91.4%;
  --abc-color-slate-500: 215.4 16.3% 46.9%;
  --abc-color-slate-950: 222.2 47.4% 11.2%;
  --abc-color-blue-600: 221.2 83.2% 53.3%;
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

  --abc-size-10: 2.5rem;
  --abc-size-11: 2.75rem;

  --abc-font-size-sm: 0.875rem;
  --abc-font-size-base: 1rem;
  --abc-font-size-xl: 1.25rem;

  --abc-shadow-raised-sm: 0 18px 40px rgb(15 23 42 / 8%);
}
```

- [ ] **Step 3: Create the semantic token file that only references primitive tokens**

```css
/* packages/styles/src/tokens/semantic.css */
:root {
  --abc-bg-base: var(--abc-color-white);
  --abc-fg-base: var(--abc-color-slate-950);

  --abc-bg-primary: var(--abc-color-blue-600);
  --abc-fg-primary: var(--abc-color-slate-50);
  --abc-ring-primary: var(--abc-color-blue-600);

  --abc-bg-muted: var(--abc-color-slate-100);
  --abc-fg-muted: var(--abc-color-slate-500);
  --abc-border-muted: var(--abc-color-slate-200);

  --abc-bg-hover: var(--abc-color-slate-100);
  --abc-border-clear: var(--abc-color-transparent);

  --abc-radius-control: var(--abc-radius-md);
  --abc-radius-surface: var(--abc-radius-lg);

  --abc-space-control-inline: var(--abc-space-4);
  --abc-space-control-inline-compact: var(--abc-space-3);
  --abc-space-control-gap: var(--abc-space-2);
  --abc-space-actions-gap: var(--abc-space-3);
  --abc-space-surface-padding: var(--abc-space-6);
  --abc-space-content-gap: var(--abc-space-4);

  --abc-size-control-md: var(--abc-size-11);

  --abc-font-control: var(--abc-font-size-sm);
  --abc-font-title: var(--abc-font-size-xl);

  --abc-shadow-surface: var(--abc-shadow-raised-sm);
}
```

- [ ] **Step 4: Rebuild `base.css` around imports, `@theme`, and global selectors only**

```css
/* packages/styles/src/css/base.css */
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
```

```css
/* packages/styles/src/css/index.css */
@import "./base.css";
```

- [ ] **Step 5: Verify the layer split is real**

Run: `rg -n '^\\s*--abc-(color|radius|space|size|font-size|shadow)-' packages/styles/src/tokens/primitive.css`
Expected: PASS with only raw primitive token definitions.

Run: `rg -n 'var\\(--abc-(color|radius|space|size|font-size|shadow)-' packages/styles/src/tokens/semantic.css`
Expected: PASS with every semantic token referencing only primitive token prefixes.

- [ ] **Step 6: Commit the token layer scaffolding**

```bash
git add packages/styles/src/tokens/primitive.css packages/styles/src/tokens/semantic.css packages/styles/src/css/base.css packages/styles/src/css/index.css
git commit -m "feat: add primitive and semantic css token layers"
```

### Task 3: Migrate Button Tokens And Selectors

**Files:**
- Create: `packages/styles/src/tokens/components/button.css`
- Create: `packages/styles/src/css/components/button.css`
- Create: `packages/styles/src/css/components.css`
- Modify: `packages/styles/src/css/index.css`
- Test: `rg -n '^\\s*--abc-button-' packages/styles/src/tokens/components/button.css`
- Test: `rg -n '\\.btn|\\.btn-primary|\\.btn-secondary|\\.btn-outline' packages/styles/src/css/components/button.css`

- [ ] **Step 1: Prove button-specific token and selector files do not exist yet**

Run: `find packages/styles/src -path '*button.css' | sort`
Expected: FAIL with exit code 1 before the files are created.

- [ ] **Step 2: Add the public button contract in the component-token layer**

```css
/* packages/styles/src/tokens/components/button.css */
:root {
  --abc-button-bg: var(--abc-bg-primary);
  --abc-button-fg: var(--abc-fg-primary);
  --abc-button-border: var(--abc-border-clear);
  --abc-button-ring: var(--abc-ring-primary);

  --abc-button-height: var(--abc-size-control-md);
  --abc-button-radius: var(--abc-radius-control);
  --abc-button-gap: var(--abc-space-control-gap);
  --abc-button-padding-inline: var(--abc-space-control-inline);
  --abc-button-font-size: var(--abc-font-control);

  --abc-button-secondary-bg: var(--abc-bg-muted);
  --abc-button-secondary-fg: var(--abc-fg-base);

  --abc-button-outline-bg: var(--abc-bg-base);
  --abc-button-outline-fg: var(--abc-fg-base);
  --abc-button-outline-border: var(--abc-border-muted);
}
```

- [ ] **Step 3: Add the button selector rules and aggregate them in `components.css`**

```css
/* packages/styles/src/css/components/button.css */
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
    0 0 0 2px hsl(var(--abc-bg-base)),
    0 0 0 4px hsl(var(--abc-button-ring));
}

.btn:disabled,
.btn[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-primary {
  --abc-button-bg: var(--abc-bg-primary);
  --abc-button-fg: var(--abc-fg-primary);
  --abc-button-border: var(--abc-border-clear);
}

.btn-secondary {
  --abc-button-bg: var(--abc-button-secondary-bg);
  --abc-button-fg: var(--abc-button-secondary-fg);
  --abc-button-border: var(--abc-border-clear);
}

.btn-outline {
  --abc-button-bg: var(--abc-button-outline-bg);
  --abc-button-fg: var(--abc-button-outline-fg);
  --abc-button-border: var(--abc-button-outline-border);
}
```

```css
/* packages/styles/src/css/components.css */
@import "../tokens/components/button.css";
@import "./components/button.css";
```

```css
/* packages/styles/src/css/index.css */
@import "./base.css";
@import "./components.css";
```

- [ ] **Step 4: Verify the button contract exists in both layers**

Run: `rg -n '^\\s*--abc-button-' packages/styles/src/tokens/components/button.css`
Expected: PASS with the button public token names.

Run: `rg -n '\\.btn|\\.btn-primary|\\.btn-secondary|\\.btn-outline' packages/styles/src/css/components/button.css`
Expected: PASS with the shared button selectors.

- [ ] **Step 5: Commit the button migration**

```bash
git add packages/styles/src/tokens/components/button.css packages/styles/src/css/components/button.css packages/styles/src/css/components.css packages/styles/src/css/index.css
git commit -m "feat: migrate button to component css tokens"
```

### Task 4: Migrate Card And Input Tokens And Selectors

**Files:**
- Create: `packages/styles/src/tokens/components/card.css`
- Create: `packages/styles/src/tokens/components/input.css`
- Create: `packages/styles/src/css/components/card.css`
- Create: `packages/styles/src/css/components/input.css`
- Create: `packages/styles/src/css/utilities.css`
- Modify: `packages/styles/src/css/components.css`
- Modify: `packages/styles/src/css/index.css`
- Test: `rg -n '^\\s*--abc-card-|^\\s*--abc-input-' packages/styles/src/tokens/components/card.css packages/styles/src/tokens/components/input.css`
- Test: `rg -n '\\.card|\\.card-header|\\.card-content|\\.card-body|\\.card-title|\\.card-actions|\\.input' packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css`

- [ ] **Step 1: Add the card and input component token files**

```css
/* packages/styles/src/tokens/components/card.css */
:root {
  --abc-card-bg: var(--abc-bg-base);
  --abc-card-border: var(--abc-border-muted);
  --abc-card-radius: var(--abc-radius-surface);
  --abc-card-shadow: var(--abc-shadow-surface);
  --abc-card-padding: var(--abc-space-surface-padding);
  --abc-card-gap: var(--abc-space-content-gap);
  --abc-card-actions-gap: var(--abc-space-actions-gap);
  --abc-card-title-color: var(--abc-fg-base);
  --abc-card-title-size: var(--abc-font-title);
  --abc-card-copy-color: var(--abc-fg-muted);
}
```

```css
/* packages/styles/src/tokens/components/input.css */
:root {
  --abc-input-bg: var(--abc-bg-base);
  --abc-input-fg: var(--abc-fg-base);
  --abc-input-border: var(--abc-border-muted);
  --abc-input-border-focus: var(--abc-ring-primary);
  --abc-input-placeholder: var(--abc-fg-muted);
  --abc-input-height: var(--abc-size-control-md);
  --abc-input-radius: var(--abc-radius-control);
  --abc-input-padding-inline: var(--abc-space-control-inline-compact);
  --abc-input-font-size: var(--abc-font-control);
}
```

- [ ] **Step 2: Add the card, input, and utility selector files**

```css
/* packages/styles/src/css/components/card.css */
.card {
  border: 1px solid hsl(var(--abc-card-border));
  border-radius: var(--abc-card-radius);
  background: hsl(var(--abc-card-bg));
  box-shadow: var(--abc-card-shadow);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: var(--abc-card-gap);
  padding: var(--abc-card-padding);
  padding-bottom: 0;
}

.card-content,
.card-body {
  display: flex;
  flex-direction: column;
  gap: var(--abc-card-gap);
  padding: var(--abc-card-padding);
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
```

```css
/* packages/styles/src/css/components/input.css */
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
```

```css
/* packages/styles/src/css/utilities.css */
.abc-text-dim {
  color: hsl(var(--abc-fg-muted));
}

.abc-surface-base {
  background: hsl(var(--abc-bg-base));
  color: hsl(var(--abc-fg-base));
}
```

```css
/* packages/styles/src/css/components.css */
@import "../tokens/components/button.css";
@import "../tokens/components/card.css";
@import "../tokens/components/input.css";

@import "./components/button.css";
@import "./components/card.css";
@import "./components/input.css";
```

```css
/* packages/styles/src/css/index.css */
@import "./base.css";
@import "./components.css";
@import "./utilities.css";
```

- [ ] **Step 3: Verify the remaining component layers are present**

Run: `rg -n '^\\s*--abc-card-|^\\s*--abc-input-' packages/styles/src/tokens/components/card.css packages/styles/src/tokens/components/input.css`
Expected: PASS with only card and input component token definitions.

Run: `rg -n '\\.card|\\.card-header|\\.card-content|\\.card-body|\\.card-title|\\.card-actions|\\.input' packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css`
Expected: PASS with the shared selector contracts.

- [ ] **Step 4: Commit the card/input migration**

```bash
git add packages/styles/src/tokens/components/card.css packages/styles/src/tokens/components/input.css packages/styles/src/css/components/card.css packages/styles/src/css/components/input.css packages/styles/src/css/utilities.css packages/styles/src/css/components.css packages/styles/src/css/index.css
git commit -m "feat: migrate card and input to css token layers"
```

### Task 5: Add Token-Architecture Verification And Build Checks

**Files:**
- Modify: `packages/styles/scripts/verify-build.mjs`
- Test: `pnpm --filter @abc-def/styles build`
- Test: `node packages/styles/scripts/verify-build.mjs`

- [ ] **Step 1: Prove the current verifier still assumes TypeScript token values**

Run: `rg -n 'tokens|cssEntry|requiredSelectors' packages/styles/scripts/verify-build.mjs`
Expected: PASS with references to the old `tokens` export and the old selector list.

- [ ] **Step 2: Replace the verifier with CSS-layer dependency checks and CSS entry checks**

```js
// packages/styles/scripts/verify-build.mjs
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");

const sourceFiles = {
  primitive: path.join(packageRoot, "src", "tokens", "primitive.css"),
  semantic: path.join(packageRoot, "src", "tokens", "semantic.css"),
  buttonTokens: path.join(packageRoot, "src", "tokens", "components", "button.css"),
  cardTokens: path.join(packageRoot, "src", "tokens", "components", "card.css"),
  inputTokens: path.join(packageRoot, "src", "tokens", "components", "input.css"),
  componentsEntry: path.join(packageRoot, "src", "css", "components.css"),
  buttonSelectors: path.join(packageRoot, "src", "css", "components", "button.css"),
  cardSelectors: path.join(packageRoot, "src", "css", "components", "card.css"),
  inputSelectors: path.join(packageRoot, "src", "css", "components", "input.css"),
  cssIndex: path.join(packageRoot, "src", "css", "index.css"),
};

const distIndexPath = path.join(packageRoot, "dist", "index.js");

const read = async (filePath) => fs.readFile(filePath, "utf8");
const stripComments = (value) => value.replace(/\/\*[\s\S]*?\*\//g, "");

const primitiveText = stripComments(await read(sourceFiles.primitive));
const semanticText = stripComments(await read(sourceFiles.semantic));
const buttonTokenText = stripComments(await read(sourceFiles.buttonTokens));
const cardTokenText = stripComments(await read(sourceFiles.cardTokens));
const inputTokenText = stripComments(await read(sourceFiles.inputTokens));
const buttonSelectorText = stripComments(await read(sourceFiles.buttonSelectors));
const cardSelectorText = stripComments(await read(sourceFiles.cardSelectors));
const inputSelectorText = stripComments(await read(sourceFiles.inputSelectors));
const componentsEntryText = stripComments(await read(sourceFiles.componentsEntry));
const cssIndexText = stripComments(await read(sourceFiles.cssIndex));

const assert = (condition, message) => {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
};

assert(!primitiveText.includes("var(--abc-"), "primitive.css must not reference other tokens");

const semanticRefs = [...semanticText.matchAll(/var\((--abc-[a-z0-9-]+)\)/g)].map((match) => match[1]);
assert(
  semanticRefs.every((name) => /--abc-(color|radius|space|size|font-size|shadow)-/.test(name)),
  "semantic.css may only reference primitive tokens",
);

for (const [name, text] of [
  ["button", buttonTokenText],
  ["card", cardTokenText],
  ["input", inputTokenText],
]) {
  const refs = [...text.matchAll(/var\((--abc-[a-z0-9-]+)\)/g)].map((match) => match[1]);
  assert(
    refs.every((tokenName) => /--abc-(bg|fg|border|ring|radius|space|size|font|shadow)-/.test(tokenName)),
    `${name} component tokens may only reference semantic tokens`,
  );
}

for (const [name, text, selectors] of [
  ["button", buttonSelectorText, [".btn", ".btn-primary", ".btn-secondary", ".btn-outline"]],
  ["card", cardSelectorText, [".card", ".card-header", ".card-content", ".card-body", ".card-title", ".card-actions"]],
  ["input", inputSelectorText, [".input"]],
]) {
  assert(/var\(--abc-/.test(text), `${name} selectors must consume shared tokens`);
  for (const selector of selectors) {
    assert(text.includes(selector), `Missing selector ${selector} in ${name} selector file`);
  }
}

for (const importPath of [
  "../tokens/components/button.css",
  "../tokens/components/card.css",
  "../tokens/components/input.css",
  "./components/button.css",
  "./components/card.css",
  "./components/input.css",
]) {
  assert(componentsEntryText.includes(importPath), `Missing import ${importPath} in components.css`);
}

for (const importPath of ["./base.css", "./components.css", "./utilities.css"]) {
  assert(cssIndexText.includes(importPath), `Missing import ${importPath} in index.css`);
}

const distModule = await import(pathToFileURL(distIndexPath).href);
const exportKeys = Object.keys(distModule).sort();
assert(
  exportKeys.join(",") === "cssEntries,cssEntry",
  `Unexpected exports from dist/index.js: ${exportKeys.join(",") || "(none)"}`,
);
assert(distModule.cssEntry === "@abc-def/styles/css", `Unexpected cssEntry value: ${distModule.cssEntry}`);
assert(
  distModule.cssEntries.base === "@abc-def/styles/css/base" &&
    distModule.cssEntries.components === "@abc-def/styles/css/components" &&
    distModule.cssEntries.utilities === "@abc-def/styles/css/utilities",
  "Unexpected cssEntries values",
);
```

- [ ] **Step 3: Run the style-package build and verifier**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and emit `packages/styles/dist/index.js` plus a clean verifier exit.

Run: `node packages/styles/scripts/verify-build.mjs`
Expected: PASS with no output.

- [ ] **Step 4: Commit the verifier update**

```bash
git add packages/styles/scripts/verify-build.mjs
git commit -m "test: verify css token architecture"
```

### Task 6: Align React And Vue Components To The Shared CSS Contract

**Files:**
- Modify: `packages/react/src/components/button.tsx`
- Modify: `packages/react/src/components/card.tsx`
- Modify: `packages/react/src/components/input.tsx`
- Modify: `packages/vue/src/components/button.ts`
- Modify: `packages/vue/src/components/card.ts`
- Modify: `packages/vue/src/components/input.ts`
- Test: `pnpm --filter @abc-def/react typecheck`
- Test: `pnpm --filter @abc-def/vue typecheck`

- [ ] **Step 1: Prove the framework packages still embed styling decisions directly**

Run: `rg -n 'bg-primary|border-border|rounded-md|text-muted-foreground|focus-visible:ring-primary' packages/react/src/components packages/vue/src/components`
Expected: PASS with matches in the current React and Vue component files.

- [ ] **Step 2: Rewrite the React components to use the shared semantic class contract**

```tsx
// packages/react/src/components/button.tsx
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../lib/cn";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";
```

```tsx
// packages/react/src/components/card.tsx
import * as React from "react";

import { cn } from "../lib/cn";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card", className)} {...props} />;
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-header", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("card-title", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-content", className)} {...props} />;
}
```

```tsx
// packages/react/src/components/input.tsx
import * as React from "react";

import { cn } from "../lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn("input", className)} {...props} />
  ),
);

Input.displayName = "Input";
```

- [ ] **Step 3: Rewrite the Vue components to use the same semantic classes**

```ts
// packages/vue/src/components/button.ts
import type { ClassValue } from "clsx";
import type { SetupContext } from "vue";
import { defineComponent, h } from "vue";

import { cn } from "../lib/cn";

export const Button = defineComponent({
  name: "AbcButton",
  props: {
    variant: {
      type: String,
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
            props.variant === "default" && "btn-primary",
            props.variant === "secondary" && "btn-secondary",
            props.variant === "outline" && "btn-outline",
            attrs.class as ClassValue,
          ),
        },
        slots.default?.(),
      );
  },
});
```

```ts
// packages/vue/src/components/card.ts
import type { ClassValue } from "clsx";
import type { SetupContext } from "vue";
import { defineComponent, h } from "vue";

import { cn } from "../lib/cn";

export const Card = defineComponent({
  name: "AbcCard",
  setup(_props, { attrs, slots }: SetupContext) {
    return () => h("div", { ...attrs, class: cn("card", attrs.class as ClassValue) }, slots.default?.());
  },
});

export const CardHeader = defineComponent({
  name: "AbcCardHeader",
  setup(_props, { attrs, slots }: SetupContext) {
    return () => h("div", { ...attrs, class: cn("card-header", attrs.class as ClassValue) }, slots.default?.());
  },
});

export const CardTitle = defineComponent({
  name: "AbcCardTitle",
  setup(_props, { attrs, slots }: SetupContext) {
    return () => h("h3", { ...attrs, class: cn("card-title", attrs.class as ClassValue) }, slots.default?.());
  },
});

export const CardContent = defineComponent({
  name: "AbcCardContent",
  setup(_props, { attrs, slots }: SetupContext) {
    return () => h("div", { ...attrs, class: cn("card-content", attrs.class as ClassValue) }, slots.default?.());
  },
});
```

```ts
// packages/vue/src/components/input.ts
import type { ClassValue } from "clsx";
import type { SetupContext } from "vue";
import { defineComponent, h } from "vue";

import { cn } from "../lib/cn";

export const Input = defineComponent({
  name: "AbcInput",
  setup(_props, { attrs }: SetupContext) {
    return () =>
      h("input", {
        ...attrs,
        class: cn("input", attrs.class as ClassValue),
      });
  },
});
```

- [ ] **Step 4: Typecheck both framework packages**

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS.

Run: `pnpm --filter @abc-def/vue typecheck`
Expected: PASS.

- [ ] **Step 5: Commit the framework alignment**

```bash
git add packages/react/src/components/button.tsx packages/react/src/components/card.tsx packages/react/src/components/input.tsx packages/vue/src/components/button.ts packages/vue/src/components/card.ts packages/vue/src/components/input.ts
git commit -m "refactor: align react and vue with shared css contract"
```

### Task 7: Add Example Coverage For HTML, React, And Vue

**Files:**
- Modify: `examples/react-vite/src/App.tsx`
- Modify: `examples/html-vite/index.html`
- Modify: `examples/html-vite/src/index.css`
- Create: `examples/vue-vite/package.json`
- Create: `examples/vue-vite/tsconfig.json`
- Create: `examples/vue-vite/vite.config.ts`
- Create: `examples/vue-vite/index.html`
- Create: `examples/vue-vite/src/index.css`
- Create: `examples/vue-vite/src/main.ts`
- Modify: `pnpm-lock.yaml`
- Test: `pnpm install`
- Test: `pnpm --filter @abc-def/example-react-vite build`
- Test: `pnpm --filter @abc-def/example-html-vite build`
- Test: `pnpm --filter @abc-def/example-vue-vite build`

- [ ] **Step 1: Update the React and HTML demos to exercise the new contract more explicitly**

```tsx
// examples/react-vite/src/App.tsx
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from "@abc-def/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>React uses the shared CSS contract</CardTitle>
            <p className="abc-text-dim">
              These components now render semantic selectors owned by
              <code> @abc-def/styles/css</code>.
            </p>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type into the shared input component" />
            <div className="card-actions">
              <Button variant="outline">Cancel</Button>
              <Button variant="secondary">Save draft</Button>
              <Button>Publish</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
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
            This example uses the same token-backed selectors as React and Vue.
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
            <button class="btn btn-outline" type="button">Cancel</button>
            <button class="btn btn-primary" type="button">Buy Now</button>
          </div>
        </div>
      </article>
    </main>
  </body>
</html>
```

```css
/* examples/html-vite/src/index.css */
@import "tailwindcss";
@import "@abc-def/styles/css";
@source "../index.html";

body {
  min-height: 100vh;
  padding: 3rem 1.5rem;
}

.demo-shell {
  width: min(100%, 72rem);
  margin: 0 auto;
}

.demo-card {
  max-width: 42rem;
  margin: 0 auto;
}

.demo-field {
  display: grid;
  gap: 0.5rem;
}

.demo-label {
  font-size: 0.875rem;
  font-weight: 600;
}
```

- [ ] **Step 2: Create the missing Vue example workspace**

```json
// examples/vue-vite/package.json
{
  "name": "@abc-def/example-vue-vite",
  "private": true,
  "type": "module",
  "scripts": {
    "clean": "git clean -xdf .cache .turbo dist node_modules",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@abc-def/styles": "workspace:*",
    "@abc-def/vue": "workspace:*",
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@tailwindcss/vite": "catalog:",
    "tailwindcss": "catalog:",
    "typescript": "catalog:",
    "vite": "^7.0.0"
  }
}
```

```json
// examples/vue-vite/tsconfig.json
{
  "extends": "../../tooling/typescript/base.json",
  "compilerOptions": {
    "lib": ["ES2022", "DOM"],
    "types": ["vite/client"]
  },
  "include": ["src", "vite.config.ts"]
}
```

```ts
// examples/vue-vite/vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

```html
<!-- examples/vue-vite/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>abc-def Vue Example</title>
    <script type="module" src="/src/main.ts"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

```css
/* examples/vue-vite/src/index.css */
@import "tailwindcss";
@import "@abc-def/styles/css";

@source "./**/*.{ts}";
@source "../../../packages/vue/src/**/*.ts";

#app {
  min-height: 100vh;
}
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
        h("div", { class: "mx-auto flex w-full max-w-2xl flex-col gap-6" }, [
          h(Card, null, {
            default: () => [
              h(CardHeader, null, {
                default: () => [
                  h(CardTitle, null, { default: () => "Vue uses the shared CSS contract" }),
                  h("p", { class: "abc-text-dim" }, "The Vue package now renders the same semantic selectors as the HTML and React examples."),
                ],
              }),
              h(CardContent, null, {
                default: () => [
                  h(Input, { placeholder: "Type into the shared input component" }),
                  h("div", { class: "card-actions" }, [
                    h(Button, { variant: "outline" }, { default: () => "Cancel" }),
                    h(Button, { variant: "secondary" }, { default: () => "Save draft" }),
                    h(Button, null, { default: () => "Publish" }),
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

- [ ] **Step 3: Refresh dependencies for the new example workspace**

Run: `pnpm install`
Expected: PASS and update `pnpm-lock.yaml` with the `examples/vue-vite` importer.

- [ ] **Step 4: Build all example workspaces**

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: PASS.

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS.

Run: `pnpm --filter @abc-def/example-vue-vite build`
Expected: PASS.

- [ ] **Step 5: Commit the example coverage**

```bash
git add examples/react-vite/src/App.tsx examples/html-vite/index.html examples/html-vite/src/index.css examples/vue-vite pnpm-lock.yaml
git commit -m "feat: add example coverage for token-backed components"
```

### Task 8: Update Public Documentation For The New Token Architecture

**Files:**
- Modify: `README.md`
- Modify: `packages/styles/README.md`
- Modify: `packages/react/README.md`
- Modify: `packages/vue/README.md`
- Create: `docs/component-onboarding.md`
- Test: `rg -n '@abc-def/styles/css|primitive -> semantic -> component-specific|examples/vue-vite|component onboarding' README.md packages/styles/README.md packages/react/README.md packages/vue/README.md docs/component-onboarding.md`

- [ ] **Step 1: Rewrite the package and repo docs around the CSS-first model**

```md
<!-- README.md -->
# ABC Def (ABC Studio's Definitive Elements Foundation)

ABC Def is a reset design system monorepo shell for building shared UI packages from one CSS token contract.

## Packages

- `packages/styles`: canonical primitive, semantic, and component-specific CSS tokens plus stable CSS entry points
- `packages/react`: React wrappers that render the shared semantic selectors
- `packages/vue`: Vue wrappers that render the shared semantic selectors

## Examples

- `examples/html-vite`: plain HTML consumer of `@abc-def/styles/css`
- `examples/react-vite`: React consumer of `@abc-def/styles/css` and `@abc-def/react`
- `examples/vue-vite`: Vue consumer of `@abc-def/styles/css` and `@abc-def/vue`
```

```md
<!-- packages/styles/README.md -->
# @abc-def/styles

Shared CSS tokens and selectors for the abc-def design system.

## Architecture

`@abc-def/styles` is authored in three token layers:

1. primitive tokens in `src/tokens/primitive.css`
2. semantic tokens in `src/tokens/semantic.css`
3. component tokens in `src/tokens/components/*.css`

Selectors live under `src/css` and consume those token layers.

## CSS Entries

- `@abc-def/styles/css`: aggregate base + components + utilities
- `@abc-def/styles/css/base`: base imports, theme variables, resets
- `@abc-def/styles/css/components`: component selectors and component-token imports
- `@abc-def/styles/css/utilities`: small shared semantic utility classes
```

```md
<!-- packages/react/README.md -->
# @abc-def/react

React components built as semantic wrappers around `@abc-def/styles`.

Import `@abc-def/styles/css` in application CSS, then consume the exported React components. The React package no longer owns the visual contract directly; it renders semantic class names such as `.btn`, `.card`, `.card-header`, `.card-content`, and `.input`.
```

```md
<!-- packages/vue/README.md -->
# @abc-def/vue

Vue components built as semantic wrappers around `@abc-def/styles`.

Import `@abc-def/styles/css` in application CSS, register app sources with Tailwind v4 `@source`, and use the exported Vue render-function components. The Vue package now renders the same semantic selectors used by the HTML and React examples.
```

```md
<!-- docs/component-onboarding.md -->
# Component Onboarding Workflow

1. Start from a `shadcn/ui`, `shadcn-vue`, or local baseline implementation.
2. Analyze class meaning before copying code.
3. Promote raw values into primitive tokens only when they are true scales.
4. Promote shared UI meaning into semantic tokens before creating component tokens.
5. Add public component tokens in `packages/styles/src/tokens/components/<component>.css`.
6. Add selectors in `packages/styles/src/css/components/<component>.css`.
7. Update React and Vue wrappers to render the shared selectors.
8. Verify `examples/html-vite`, `examples/react-vite`, and `examples/vue-vite`.
```

- [ ] **Step 2: Verify the docs mention the right architecture and example set**

Run: `rg -n '@abc-def/styles/css|primitive -> semantic -> component-specific|examples/vue-vite|Component Onboarding Workflow' README.md packages/styles/README.md packages/react/README.md packages/vue/README.md docs/component-onboarding.md`
Expected: PASS with matches in each updated document.

- [ ] **Step 3: Commit the documentation update**

```bash
git add README.md packages/styles/README.md packages/react/README.md packages/vue/README.md docs/component-onboarding.md
git commit -m "docs: describe token architecture and onboarding workflow"
```

### Task 9: Add The Semi-Automated Component-Onboarding Skill

**Files:**
- Create: `.agents/skills/component-token-onboarding/SKILL.md`
- Create: `.agents/skills/component-token-onboarding/agents/openai.yaml`
- Test: `rg -n 'Source Analysis|Proposed Semantic Tokens|Proposed Component Tokens|Mapping Table|Files To Change|Verification Steps|Human Approval Required' .agents/skills/component-token-onboarding/SKILL.md`

- [ ] **Step 1: Create the repo-local skill with the required approval gates and output template**

```md
<!-- .agents/skills/component-token-onboarding/SKILL.md -->
---
name: component-token-onboarding
description: Use when onboarding a new UI component into the abc-def token architecture from shadcn/ui, shadcn-vue, or a local baseline source.
---

# Component Token Onboarding

## Overview

Use this skill when adding a new component to the abc-def design system under the CSS-first token architecture.

The goal is to analyze a source implementation, propose token promotion decisions, identify file changes, and stop for human approval before new semantic tokens or new public component token names are finalized.

## Required Inputs

- component name
- source reference
- requested scope
- variant and size scope
- approval checkpoints for new semantic tokens and public component token names

## Workflow

1. Read the source implementation and summarize the visual contract.
2. List raw values that belong in primitive tokens.
3. Evaluate whether each shared meaning belongs in semantic tokens.
4. Propose component-specific tokens only after semantic promotion is checked.
5. Map source class meaning to target token and selector contracts.
6. List exact repo files to change across styles, React, Vue, docs, and examples.
7. End with explicit human approval questions before implementation proceeds.

## Rules

- Do not add semantic meaning directly into primitive tokens.
- Do not let component-specific tokens reference primitive tokens directly.
- Do not treat copied shadcn utility strings as the public design-system API.
- Evaluate semantic promotion before creating new component-specific tokens.
- Use component-centered public token names.
- Do not call the work complete until examples are checked.

## Output Template

## Source Analysis
## Proposed Semantic Tokens
## Proposed Component Tokens
## Mapping Table
## Files To Change
## Verification Steps
## Human Approval Required
```

```yaml
# .agents/skills/component-token-onboarding/agents/openai.yaml
display_name: Component Token Onboarding
short_description: Analyze a component source and map it into abc-def's token architecture with approval gates.
default_prompt: Review the source component, propose primitive/semantic/component token mappings, list exact files to change, and stop for approval before finalizing new semantic tokens or public component token names.
```

- [ ] **Step 2: Verify the skill includes the required sections**

Run: `rg -n 'Source Analysis|Proposed Semantic Tokens|Proposed Component Tokens|Mapping Table|Files To Change|Verification Steps|Human Approval Required' .agents/skills/component-token-onboarding/SKILL.md`
Expected: PASS with all seven required sections present.

- [ ] **Step 3: Commit the skill scaffold**

```bash
git add .agents/skills/component-token-onboarding/SKILL.md .agents/skills/component-token-onboarding/agents/openai.yaml
git commit -m "feat: add component token onboarding skill"
```

### Task 10: Run Full Verification Before Merge

**Files:**
- Modify: working tree only as needed from previous tasks
- Test: `pnpm --filter @abc-def/styles build`
- Test: `pnpm --filter @abc-def/react build`
- Test: `pnpm --filter @abc-def/vue build`
- Test: `pnpm --filter @abc-def/react typecheck`
- Test: `pnpm --filter @abc-def/vue typecheck`
- Test: `pnpm --filter @abc-def/example-react-vite build`
- Test: `pnpm --filter @abc-def/example-html-vite build`
- Test: `pnpm --filter @abc-def/example-vue-vite build`
- Test: `pnpm lint`

- [ ] **Step 1: Build the packages in dependency order**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS.

Run: `pnpm --filter @abc-def/react build`
Expected: PASS.

Run: `pnpm --filter @abc-def/vue build`
Expected: PASS.

- [ ] **Step 2: Run framework typechecks**

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS.

Run: `pnpm --filter @abc-def/vue typecheck`
Expected: PASS.

- [ ] **Step 3: Build every example workspace**

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: PASS.

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS.

Run: `pnpm --filter @abc-def/example-vue-vite build`
Expected: PASS.

- [ ] **Step 4: Run the repo lint pass**

Run: `pnpm lint`
Expected: PASS.

- [ ] **Step 5: Commit the final verified state**

```bash
git add .
git commit -m "feat: implement css token architecture and component onboarding"
```

## Coverage Check

- The token dependency model is implemented by Tasks 2 through 5.
- CSS as canonical source is enforced by Tasks 1 and 5.
- `button`, `card`, and `input` migration is covered by Tasks 3, 4, and 6.
- React, Vue, and example propagation is covered by Tasks 6 and 7.
- Contributor workflow docs are covered by Task 8.
- The semi-automated onboarding skill is covered by Task 9.
- The validation strategy from the spec is covered by Task 5 and Task 10.
