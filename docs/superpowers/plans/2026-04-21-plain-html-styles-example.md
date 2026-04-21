# Plain HTML Styles Example Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the unused `@abc-def/html` package, move the plain HTML contract into `@abc-def/styles/css`, add a minimal `examples/html-vite` consumer, and update docs to point plain HTML users at the new semantic class surface.

**Architecture:** Treat `@abc-def/styles/css` as the only plain HTML styling entry point and keep the first semantic class contract intentionally small. Validate that contract with a static `examples/html-vite` Vite app that imports the shared stylesheet and renders semantic HTML markup without React, Vue, or helper APIs.

**Tech Stack:** pnpm workspaces, Turborepo, TypeScript, Vite, Tailwind CSS v4 via `@tailwindcss/vite`, shared CSS in `@abc-def/styles`

---

## File Map

- Delete `packages/html/*` because the HTML package is no longer a supported public surface.
- Modify `packages/styles/src/css/base.css` to add semantic component classes used by plain HTML consumers.
- Modify `packages/styles/scripts/verify-build.mjs` so the style package build checks the semantic class contract in addition to token export consistency.
- Create `examples/html-vite/*` as the minimal plain HTML consumer.
- Modify `README.md` and `packages/styles/README.md` so public docs point to `@abc-def/styles/css`.
- Modify current design specs in `docs/superpowers/specs/` so active architecture docs no longer describe `@abc-def/html` as a supported package.

### Task 1: Remove `@abc-def/html` From The Workspace

**Files:**
- Delete: `packages/html/README.md`
- Delete: `packages/html/eslint.config.js`
- Delete: `packages/html/package.json`
- Delete: `packages/html/src/css/index.css`
- Delete: `packages/html/src/index.ts`
- Delete: `packages/html/src/lib/escape.ts`
- Delete: `packages/html/src/patterns/button.ts`
- Delete: `packages/html/src/patterns/card.ts`
- Delete: `packages/html/src/patterns/input.ts`
- Delete: `packages/html/tsconfig.json`
- Delete: `packages/html/tsup.config.ts`
- Modify: `pnpm-lock.yaml`
- Test: `rg -n '@abc-def/html|packages/html' packages pnpm-lock.yaml`
- Test: `pnpm install`

- [ ] **Step 1: Prove the old HTML package is still present before removing it**

Run: `rg -n '@abc-def/html|packages/html|framework-agnostic primitives' README.md packages/html pnpm-lock.yaml`
Expected: PASS with matches in `README.md`, `packages/html/package.json`, and `pnpm-lock.yaml`.

- [ ] **Step 2: Delete the HTML package files**

```text
Delete these tracked files:
- packages/html/README.md
- packages/html/eslint.config.js
- packages/html/package.json
- packages/html/src/css/index.css
- packages/html/src/index.ts
- packages/html/src/lib/escape.ts
- packages/html/src/patterns/button.ts
- packages/html/src/patterns/card.ts
- packages/html/src/patterns/input.ts
- packages/html/tsconfig.json
- packages/html/tsup.config.ts
```

- [ ] **Step 3: Refresh the lockfile after the workspace package removal**

Run: `pnpm install`
Expected: PASS and `pnpm-lock.yaml` no longer contains a `packages/html:` workspace importer or `@abc-def/html` package metadata.

- [ ] **Step 4: Verify the package is gone from the workspace**

Run: `rg -n '@abc-def/html|packages/html' packages pnpm-lock.yaml`
Expected: FAIL with exit code 1 because the workspace package and lockfile importer should both be gone.

- [ ] **Step 5: Commit the package removal**

```bash
git add pnpm-lock.yaml
git rm -r packages/html
git commit -m "refactor: remove html package"
```

### Task 2: Add The Plain HTML Semantic Class Contract To `@abc-def/styles`

**Files:**
- Modify: `packages/styles/src/css/base.css`
- Modify: `packages/styles/scripts/verify-build.mjs`
- Test: `rg -n '^\.(btn|card|input)' packages/styles/src/css/base.css`
- Test: `pnpm --filter @abc-def/styles build`
- Test: `node --input-type=module -e "import('./packages/styles/dist/index.js').then((m) => console.log(m.cssEntry))"`
- Test: `rg -n '\.btn|\.btn-primary|\.btn-outline|\.card|\.card-body|\.card-title|\.card-actions|\.input' packages/styles/dist/css/base.css`

- [ ] **Step 1: Prove the semantic classes do not exist yet**

Run: `rg -n '^\.(btn|btn-primary|btn-secondary|btn-outline|card|card-body|card-title|card-actions|input)' packages/styles/src/css/base.css`
Expected: FAIL with exit code 1 because the current stylesheet only contains tokens and base element styles.

- [ ] **Step 2: Add semantic component classes and extend the build verifier**

```css
/* packages/styles/src/css/base.css */
:root {
  --abc-background: 0 0% 100%;
  --abc-foreground: 222.2 47.4% 11.2%;
  --abc-primary: 221.2 83.2% 53.3%;
  --abc-primary-foreground: 210 40% 98%;
  --abc-muted: 210 40% 96.1%;
  --abc-muted-foreground: 215.4 16.3% 46.9%;
  --abc-border: 214.3 31.8% 91.4%;
  --abc-radius-sm: 0.375rem;
  --abc-radius-md: 0.5rem;
  --abc-radius-lg: 0.75rem;
  --abc-spacing-1: 0.25rem;
  --abc-spacing-2: 0.5rem;
  --abc-spacing-3: 0.75rem;
  --abc-spacing-4: 1rem;
  --abc-spacing-6: 1.5rem;
  --abc-spacing-8: 2rem;
}

@theme {
  --color-background: hsl(var(--abc-background));
  --color-foreground: hsl(var(--abc-foreground));
  --color-primary: hsl(var(--abc-primary));
  --color-primary-foreground: hsl(var(--abc-primary-foreground));
  --color-muted: hsl(var(--abc-muted));
  --color-muted-foreground: hsl(var(--abc-muted-foreground));
  --color-border: hsl(var(--abc-border));
  --radius-sm: var(--abc-radius-sm);
  --radius-md: var(--abc-radius-md);
  --radius-lg: var(--abc-radius-lg);
  --spacing-1: var(--abc-spacing-1);
  --spacing-2: var(--abc-spacing-2);
  --spacing-3: var(--abc-spacing-3);
  --spacing-4: var(--abc-spacing-4);
  --spacing-6: var(--abc-spacing-6);
  --spacing-8: var(--abc-spacing-8);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: hsl(var(--abc-background));
  color: hsl(var(--abc-foreground));
  font-family: Inter, sans-serif;
  line-height: 1.5;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  font: inherit;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--abc-spacing-2);
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  border-radius: var(--abc-radius-md);
  background: hsl(var(--abc-foreground));
  color: hsl(var(--abc-background));
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    filter 0.2s ease;
}

.btn:hover {
  filter: brightness(0.96);
}

.btn-primary {
  background: hsl(var(--abc-primary));
  color: hsl(var(--abc-primary-foreground));
}

.btn-secondary {
  background: hsl(var(--abc-muted));
  color: hsl(var(--abc-foreground));
}

.btn-outline {
  background: transparent;
  color: hsl(var(--abc-foreground));
  border-color: hsl(var(--abc-border));
}

.card {
  overflow: hidden;
  border: 1px solid hsl(var(--abc-border));
  border-radius: var(--abc-radius-lg);
  background: hsl(var(--abc-background));
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}

.card figure {
  margin: 0;
}

.card figure img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: var(--abc-spacing-4);
  padding: var(--abc-spacing-6);
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--abc-spacing-3);
}

.input {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.75rem 0.875rem;
  border: 1px solid hsl(var(--abc-border));
  border-radius: var(--abc-radius-md);
  background: hsl(var(--abc-background));
  color: hsl(var(--abc-foreground));
}

.input::placeholder {
  color: hsl(var(--abc-muted-foreground));
}
```

```js
// packages/styles/scripts/verify-build.mjs
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");
const distIndexPath = path.join(packageRoot, "dist", "index.js");
const sourceCssPath = path.join(packageRoot, "src", "css", "base.css");
const distCssPath = path.join(packageRoot, "dist", "css", "base.css");

const cssContent = await fs.readFile(sourceCssPath, "utf8");
const cssVars = new Map();
const cssVarRegex = /--abc-([a-z0-9-]+):\s*([^;]+);/gi;

for (const match of cssContent.matchAll(cssVarRegex)) {
  cssVars.set(match[1], match[2].trim());
}

const requiredSelectors = [
  ".btn",
  ".btn-primary",
  ".btn-secondary",
  ".btn-outline",
  ".card",
  ".card-body",
  ".card-title",
  ".card-actions",
  ".input",
];

for (const selector of requiredSelectors) {
  if (!cssContent.includes(`${selector} `) && !cssContent.includes(`${selector}{`) && !cssContent.includes(`${selector} {`)) {
    console.error(`Missing semantic selector ${selector} in src/css/base.css`);
    process.exit(1);
  }
}

const distIndexUrl = pathToFileURL(distIndexPath).href;
const distModule = await import(distIndexUrl);
const exportKeys = Object.keys(distModule).sort();

if (
  exportKeys.length !== 2 ||
  exportKeys[0] !== "cssEntry" ||
  exportKeys[1] !== "tokens"
) {
  console.error(
    `Unexpected exports from dist/index.js: ${exportKeys.join(", ") || "(none)"}`,
  );
  process.exit(1);
}

const { tokens, cssEntry } = distModule;

if (cssEntry !== "@abc-def/styles/css") {
  console.error(`Unexpected cssEntry value: ${cssEntry}`);
  process.exit(1);
}

const toKebab = (value) =>
  value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const expected = [];

for (const [key, value] of Object.entries(tokens.color)) {
  expected.push([toKebab(key), value]);
}

for (const [key, value] of Object.entries(tokens.radius)) {
  expected.push([`radius-${key}`, value]);
}

for (const [key, value] of Object.entries(tokens.spacing)) {
  expected.push([`spacing-${key}`, value]);
}

const errors = [];

for (const [name, value] of expected) {
  const cssValue = cssVars.get(name);
  if (!cssValue) {
    errors.push(`Missing CSS variable --abc-${name}`);
    continue;
  }
  if (cssValue !== value) {
    errors.push(
      `Mismatch for --abc-${name}: expected "${value}", found "${cssValue}"`,
    );
  }
}

if (errors.length > 0) {
  console.error("Token/CSS mismatch detected:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

await fs.mkdir(path.dirname(distCssPath), { recursive: true });
await fs.writeFile(distCssPath, cssContent);
```

- [ ] **Step 3: Build the style package with the new semantic contract**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and create `packages/styles/dist/css/base.css`.

- [ ] **Step 4: Verify the exported CSS and selectors**

Run: `node --input-type=module -e "import('./packages/styles/dist/index.js').then((m) => console.log(m.cssEntry))"`
Expected: PASS with `@abc-def/styles/css`.

Run: `rg -n '\.btn|\.btn-primary|\.btn-outline|\.card|\.card-body|\.card-title|\.card-actions|\.input' packages/styles/dist/css/base.css`
Expected: PASS with matches for each required selector.

- [ ] **Step 5: Commit the style contract update**

```bash
git add packages/styles/src/css/base.css packages/styles/scripts/verify-build.mjs
git commit -m "feat: add plain html semantic style classes"
```

### Task 3: Add The `examples/html-vite` Plain HTML Consumer

**Files:**
- Create: `examples/html-vite/index.html`
- Create: `examples/html-vite/package.json`
- Create: `examples/html-vite/src/index.css`
- Create: `examples/html-vite/tsconfig.json`
- Create: `examples/html-vite/vite.config.ts`
- Modify: `pnpm-lock.yaml`
- Test: `pnpm install`
- Test: `pnpm --filter @abc-def/example-html-vite build`
- Test: `rg -n 'card|btn|input' examples/html-vite/index.html`

- [ ] **Step 1: Verify the plain HTML example does not exist yet**

Run: `rg --files examples | rg 'html-vite'`
Expected: FAIL with exit code 1 because only the React example exists today.

- [ ] **Step 2: Create the new example package and static HTML files**

```json
// examples/html-vite/package.json
{
  "name": "@abc-def/example-html-vite",
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
    "@abc-def/styles": "workspace:*"
  },
  "devDependencies": {
    "@tailwindcss/vite": "catalog:",
    "typescript": "catalog:",
    "vite": "^7.0.0"
  }
}
```

```json
// examples/html-vite/tsconfig.json
{
  "extends": "../../tooling/typescript/base.json",
  "compilerOptions": {
    "types": ["vite/client"]
  },
  "include": ["vite.config.ts"]
}
```

```ts
// examples/html-vite/vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
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
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h1 class="card-title">Plain HTML with @abc-def/styles</h1>
          <p class="demo-copy">
            This example imports the shared stylesheet directly and uses
            semantic class names instead of framework components.
          </p>
          <label class="demo-field">
            <span class="demo-label">Email</span>
            <input class="input" placeholder="name@example.com" />
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

:root {
  color-scheme: light;
}

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

.demo-copy {
  margin: 0;
  color: hsl(var(--abc-muted-foreground));
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

- [ ] **Step 3: Refresh the lockfile for the new example**

Run: `pnpm install`
Expected: PASS and `pnpm-lock.yaml` adds the `examples/html-vite` importer.

- [ ] **Step 4: Build and inspect the example**

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS and produce `examples/html-vite/dist`.

Run: `rg -n 'card|btn|input' examples/html-vite/index.html`
Expected: PASS with matches for `.card`, `.btn`, and `.input`.

- [ ] **Step 5: Commit the new example**

```bash
git add examples/html-vite pnpm-lock.yaml
git commit -m "feat: add plain html vite example"
```

### Task 4: Update Public Docs And Current Design Specs

**Files:**
- Modify: `README.md`
- Modify: `packages/styles/README.md`
- Modify: `docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md`
- Modify: `docs/superpowers/specs/2026-04-21-tailwindcss-v4-design.md`
- Test: `rg -n '@abc-def/html|packages/html|framework-agnostic primitives' README.md packages/styles/README.md docs/superpowers/specs`

- [ ] **Step 1: Prove the current docs still point at the HTML package**

Run: `rg -n '@abc-def/html|packages/html|framework-agnostic primitives' README.md packages/styles/README.md docs/superpowers/specs`
Expected: PASS with matches in `README.md` and the existing design specs.

- [ ] **Step 2: Rewrite the public docs around `@abc-def/styles/css`**

````md
<!-- README.md -->
# ABC Def (ABC Studio's Definitive Elements Foundation)

ABC Def is a reset design system monorepo shell for building core UI packages and example consumers.

## Packages

- `packages/styles`: shared tokens, base styles, and semantic plain HTML component classes
- `packages/react`: React components
- `packages/vue`: Vue components

## Examples

- `examples/react-vite`: React workspace consumer
- `examples/html-vite`: plain HTML workspace consumer
````

````md
<!-- packages/styles/README.md -->
# @abc-def/styles

Shared design tokens and the Tailwind CSS v4 styling contract for the abc-def design system.

## Install

```bash
pnpm add tailwindcss @abc-def/styles
```

## Use In Plain HTML

Create an application stylesheet and import the shared style contract:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

Then write ordinary HTML with the documented semantic classes:

```html
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has semantic class names for plain HTML consumers.</p>
    <div class="card-actions">
      <button class="btn btn-primary" type="button">Buy Now</button>
    </div>
  </div>
</div>
```

## Supported Classes

- `.btn`
- `.btn-primary`
- `.btn-secondary`
- `.btn-outline`
- `.card`
- `.card-body`
- `.card-title`
- `.card-actions`
- `.input`
````

- [ ] **Step 3: Update the current design specs so active architecture docs match implementation**

```md
<!-- docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md -->
Replace package-boundary lists so they contain:
- `@abc-def/styles`
- `@abc-def/react`
- `@abc-def/vue`

Replace any section that describes `@abc-def/html` as a product package with:
Plain HTML consumption is handled directly through `@abc-def/styles/css`, which now provides the semantic class contract for static HTML consumers.
```

```md
<!-- docs/superpowers/specs/2026-04-21-tailwindcss-v4-design.md -->
Replace references to `@abc-def/html` as an active package with:
The Tailwind v4 CSS-first contract also serves plain HTML consumers through `@abc-def/styles/css`; no separate HTML package is required.
```

- [ ] **Step 4: Verify the docs now point to the right entry point**

Run: `rg -n '@abc-def/html|packages/html|framework-agnostic primitives' README.md packages/styles/README.md docs/superpowers/specs`
Expected: FAIL with exit code 1 after the docs are updated.

- [ ] **Step 5: Commit the docs update**

```bash
git add README.md packages/styles/README.md docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md docs/superpowers/specs/2026-04-21-tailwindcss-v4-design.md
git commit -m "docs: point plain html consumers to styles css"
```

### Task 5: Run The Final Verification Sweep

**Files:**
- Test: `pnpm --filter @abc-def/styles build`
- Test: `pnpm --filter @abc-def/example-html-vite build`
- Test: `pnpm build`
- Test: `rg -n '@abc-def/html|packages/html' README.md packages examples docs/superpowers/specs pnpm-lock.yaml`
- Test: `git status --short`

- [ ] **Step 1: Rebuild the style package one more time**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and recreate `packages/styles/dist`.

- [ ] **Step 2: Rebuild the plain HTML example**

Run: `pnpm --filter @abc-def/example-html-vite build`
Expected: PASS and recreate `examples/html-vite/dist`.

- [ ] **Step 3: Run the full workspace build**

Run: `pnpm build`
Expected: PASS for `@abc-def/styles`, `@abc-def/react`, `@abc-def/vue`, `@abc-def/example-react-vite`, and `@abc-def/example-html-vite`.

- [ ] **Step 4: Verify the old HTML package surface is gone**

Run: `rg -n '@abc-def/html|packages/html' README.md packages examples docs/superpowers/specs pnpm-lock.yaml`
Expected: FAIL with exit code 1.

- [ ] **Step 5: Confirm there is no unexpected follow-up work after verification**

Run: `git status --short`
Expected: PASS with only intentional tracked changes from the completed tasks and no surprise files created by the verification commands.
