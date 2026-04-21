# Tailwind CSS v4 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the repository to Tailwind CSS v4, replace the public preset API with a CSS-first contract, add a real workspace consumer example, and update package/internal docs to match the new breaking-change surface.

**Architecture:** Keep `@abc-def/styles` as the shared styling package, but remove the Tailwind preset export and make CSS the only supported Tailwind integration surface. Add `examples/react-vite` as a workspace consumer that imports `@abc-def/styles/css`, registers sources through Tailwind v4 CSS directives, and proves `@abc-def/react` works in a real app build.

**Tech Stack:** pnpm workspaces, Turborepo, TypeScript, tsup, Tailwind CSS v4, React 19, Vite, `@tailwindcss/vite`

---

### Task 1: Upgrade The Workspace Tailwind Toolchain

**Files:**
- Modify: `pnpm-workspace.yaml`
- Modify: `packages/styles/package.json`
- Modify: `pnpm-lock.yaml`
- Test: `pnpm install`

- [ ] **Step 1: Verify the workspace is still on the old Tailwind setup**

Run: `rg -n 'examples/\\*|tailwindcss:\\s+\\^4\\.|"tailwindcss": "\\^4\\.' pnpm-workspace.yaml packages/styles/package.json`
Expected: FAIL to find any Tailwind v4 version or `examples/*` workspace entry.

- [ ] **Step 2: Update the workspace catalog and style package dependency to Tailwind v4**

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"
  - "examples/*"
  - tooling/*

catalog:
  eslint: ^9.39.2
  prettier: ^3.6.2
  tailwindcss: ^4.0.0
  "@tailwindcss/vite": ^4.0.0
  tsup: ^8.5.1
  typescript: ^5.9.3
  stylelint: ^16.26.1

onlyBuiltDependencies:
  - esbuild
```

```json
// packages/styles/package.json
{
  "name": "@abc-def/styles",
  "version": "0.0.1",
  "description": "Shared design tokens and Tailwind CSS v4 styling contract for the abc-def design system",
  "license": "Apache-2.0",
  "type": "module",
  "files": [
    "dist",
    "README.md"
  ],
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./css": "./dist/css/base.css"
  },
  "scripts": {
    "build": "tsup --config tsup.config.ts && node scripts/verify-build.mjs",
    "format": "prettier --check . --ignore-path ../../.gitignore",
    "lint": "eslint",
    "typecheck": "tsc --noEmit --emitDeclarationOnly false"
  },
  "devDependencies": {
    "@line/abc-def-eslint-config": "workspace:^",
    "@line/abc-def-prettier-config": "workspace:^",
    "@line/abc-def-tsconfig": "workspace:^",
    "eslint": "catalog:",
    "prettier": "catalog:",
    "tailwindcss": "catalog:",
    "tsup": "catalog:",
    "typescript": "catalog:"
  },
  "prettier": "@line/abc-def-prettier-config"
}
```

- [ ] **Step 3: Refresh the lockfile**

Run: `pnpm install`
Expected: PASS and `pnpm-lock.yaml` updates to Tailwind v4 catalog resolution and adds `@tailwindcss/vite`.

- [ ] **Step 4: Verify the workspace metadata now reflects the new toolchain**

Run: `rg -n 'examples/\\*|tailwindcss:\\s+\\^4\\.|"tailwindcss": "catalog:"|"@tailwindcss/vite": \\^4\\.0\\.0' pnpm-workspace.yaml packages/styles/package.json`
Expected: PASS with matches for `examples/*`, Tailwind v4 catalog, and `tailwindcss: "catalog:"`.

- [ ] **Step 5: Commit the workspace dependency update**

```bash
git add pnpm-workspace.yaml packages/styles/package.json pnpm-lock.yaml
git commit -m "chore: upgrade workspace tailwind toolchain to v4"
```

### Task 2: Refactor `@abc-def/styles` To A CSS-First Public API

**Files:**
- Modify: `packages/styles/src/index.ts`
- Modify: `packages/styles/src/css/base.css`
- Modify: `packages/styles/tsup.config.ts`
- Modify: `packages/styles/scripts/verify-build.mjs`
- Delete: `packages/styles/src/tailwind/index.ts`
- Modify: `packages/styles/package.json`
- Test: `pnpm --filter @abc-def/styles build`
- Test: `pnpm --filter @abc-def/styles typecheck`
- Test: `node --input-type=module -e "import('./packages/styles/dist/index.js').then((m) => console.log(Object.keys(m).sort().join(',')))"`

- [ ] **Step 1: Confirm the legacy export still exists before the refactor**

Run: `node --input-type=module -e "import('./packages/styles/src/index.ts').then((m) => { if (!('abcDefPreset' in m)) throw new Error('legacy export already removed'); console.log('legacy export present'); })"`
Expected: PASS with `legacy export present`.

- [ ] **Step 2: Remove the Tailwind preset export and rewrite the style package around CSS**

```ts
// packages/styles/src/index.ts
/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
export { tokens } from "./tokens";

export const cssEntry = "@abc-def/styles/css";
```

```ts
// packages/styles/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
});
```

```css
/* packages/styles/src/css/base.css */
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

  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
}

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
}

@layer base {
  * {
    box-sizing: border-box;
    border-color: hsl(var(--abc-border));
  }

  body {
    margin: 0;
    background: hsl(var(--abc-background));
    color: hsl(var(--abc-foreground));
    font-family: Inter, sans-serif;
  }
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

const distIndexUrl = pathToFileURL(distIndexPath).href;
const moduleExports = await import(distIndexUrl);
const { tokens, cssEntry, ...rest } = moduleExports;

if (!tokens) {
  throw new Error("Missing tokens export");
}

if (cssEntry !== "@abc-def/styles/css") {
  throw new Error(`Unexpected cssEntry export: ${cssEntry}`);
}

if (Object.keys(rest).length > 0) {
  throw new Error(`Unexpected extra exports: ${Object.keys(rest).join(", ")}`);
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
console.log("styles build verified");
```

Delete the legacy preset source file:

```bash
rm packages/styles/src/tailwind/index.ts
```

- [ ] **Step 3: Build the style package and regenerate the dist CSS**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and print `styles build verified`.

- [ ] **Step 4: Typecheck the package and verify the legacy export is gone**

Run: `pnpm --filter @abc-def/styles typecheck`
Expected: PASS.

Run: `node --input-type=module -e "import('./packages/styles/dist/index.js').then((m) => console.log(Object.keys(m).sort().join(',')))"`
Expected: PASS with `cssEntry,tokens`.

- [ ] **Step 5: Commit the CSS-first style package refactor**

```bash
git add packages/styles/src/index.ts packages/styles/src/css/base.css packages/styles/tsup.config.ts packages/styles/scripts/verify-build.mjs packages/styles/package.json
git rm packages/styles/src/tailwind/index.ts
git commit -m "refactor: migrate styles package to css-first tailwind v4"
```

### Task 3: Rewrite Library Docs And Remove Stale Tailwind Preset References

**Files:**
- Modify: `packages/styles/README.md`
- Modify: `packages/react/README.md`
- Modify: `packages/vue/README.md`
- Modify: `packages/html/README.md`
- Modify: `packages/react/components.json`
- Modify: `docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md`
- Modify: `docs/superpowers/plans/2026-04-21-design-system-monorepo-reset.md`
- Test: `rg -n '@abc-def/styles/tailwind|abcDefPreset|Tailwind preset' packages/styles/README.md packages/react/README.md packages/vue/README.md packages/html/README.md docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md docs/superpowers/plans/2026-04-21-design-system-monorepo-reset.md`

- [ ] **Step 1: Prove the old preset terminology still exists before cleanup**

Run: `rg -n '@abc-def/styles/tailwind|abcDefPreset|Tailwind preset' packages/styles/README.md packages/react/README.md packages/vue/README.md packages/html/README.md docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md docs/superpowers/plans/2026-04-21-design-system-monorepo-reset.md`
Expected: PASS with at least one match in the two internal docs that still describe the old preset-based contract.

- [ ] **Step 2: Rewrite the package READMEs and shadcn metadata around the CSS-first contract**

````md
<!-- packages/styles/README.md -->
# @abc-def/styles

Shared design tokens and the Tailwind CSS v4 styling contract for the abc-def design system.

## Install

```bash
pnpm add tailwindcss @abc-def/styles
```

## Use

Create an app stylesheet and import the style package:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";

@source "./src/**/*.{ts,tsx,js,jsx}";
@source "../node_modules/@abc-def/react/dist/**/*.{js,mjs}";
```

## Breaking Change

`@abc-def/styles/tailwind` is removed. Tailwind integration is now CSS-first and uses `@abc-def/styles/css`.
````

```md
<!-- packages/react/README.md -->
# @abc-def/react

React components built on the shared abc-def styling contract.

## Styling

Import `@abc-def/styles/css` in your application stylesheet. Tailwind v4 source registration belongs in the app CSS, not in a shared Tailwind preset.
```

```md
<!-- packages/vue/README.md -->
# @abc-def/vue

Vue components that consume the shared abc-def styling contract and follow shadcn-vue composition patterns.

## Styling

Import `@abc-def/styles/css` in your application stylesheet and register app or workspace sources with Tailwind v4 `@source`.
```

```md
<!-- packages/html/README.md -->
# @abc-def/html

Plain HTML patterns and CSS entry points for the abc-def design system.

## Styling

Import `@abc-def/styles/css` for the shared design tokens and base styles.
```

```json
// packages/react/components.json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "tsx": true,
  "rsc": false,
  "tailwind": {
    "config": "",
    "css": "@abc-def/styles/css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib"
  }
}
```

Update the old internal docs so they no longer describe `@abc-def/styles` as shipping a Tailwind preset:

```md
<!-- docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md -->
Replace:
- Tailwind preset and plugin exports

With:
- Tailwind CSS v4 CSS entry points
- shared theme definitions exposed through CSS
```

```md
<!-- docs/superpowers/plans/2026-04-21-design-system-monorepo-reset.md -->
Replace references to:
- `src/tailwind/*`
- `abcDefPreset`
- `./tailwind` exports

With:
- `src/css/*`
- `cssEntry`
- `./css` exports only
```

- [ ] **Step 3: Remove the stale preset references from the target docs**

Run: `rg -n '@abc-def/styles/tailwind|abcDefPreset|Tailwind preset' packages/styles/README.md packages/react/README.md packages/vue/README.md packages/html/README.md docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md docs/superpowers/plans/2026-04-21-design-system-monorepo-reset.md`
Expected: PASS with no matches.

- [ ] **Step 4: Sanity-check the style package README example paths**

Run: `sed -n '1,220p' packages/styles/README.md`
Expected: PASS and show the Tailwind v4 example with `@import "tailwindcss";`, `@import "@abc-def/styles/css";`, and `@source`.

- [ ] **Step 5: Commit the documentation cleanup**

```bash
git add packages/styles/README.md packages/react/README.md packages/vue/README.md packages/html/README.md packages/react/components.json docs/superpowers/specs/2026-04-21-design-system-monorepo-reset-design.md docs/superpowers/plans/2026-04-21-design-system-monorepo-reset.md
git commit -m "docs: document css-first tailwind v4 integration"
```

### Task 4: Add A Real Workspace Consumer In `examples/react-vite`

**Files:**
- Create: `examples/react-vite/package.json`
- Create: `examples/react-vite/tsconfig.json`
- Create: `examples/react-vite/vite.config.ts`
- Create: `examples/react-vite/index.html`
- Create: `examples/react-vite/src/main.tsx`
- Create: `examples/react-vite/src/App.tsx`
- Create: `examples/react-vite/src/index.css`
- Test: `pnpm --filter @abc-def/example-react-vite build`

- [ ] **Step 1: Confirm the example consumer does not exist yet**

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: FAIL with `No projects matched the filters` or an equivalent missing-package error.

- [ ] **Step 2: Scaffold the Vite example consumer**

```json
// examples/react-vite/package.json
{
  "name": "@abc-def/example-react-vite",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@abc-def/react": "workspace:*",
    "@abc-def/styles": "workspace:*",
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "catalog:",
    "@types/react": "^19.2.8",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "catalog:",
    "vite": "^7.0.0"
  }
}
```

```json
// examples/react-vite/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["vite/client"]
  },
  "include": ["src", "vite.config.ts"]
}
```

```ts
// examples/react-vite/vite.config.ts
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```html
<!-- examples/react-vite/index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>abc-def Tailwind v4 Example</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

```tsx
// examples/react-vite/src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

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
            <CardTitle>Tailwind CSS v4 example</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This app imports <code>@abc-def/styles/css</code> and consumes
              workspace React components.
            </p>
            <Input placeholder="Type into the shared input component" />
            <div className="flex flex-wrap gap-3">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="outline">Outline action</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
```

```css
/* examples/react-vite/src/index.css */
@import "tailwindcss";
@import "@abc-def/styles/css";

@source "./**/*.{ts,tsx}";
@source "../../../packages/react/src/**/*.{ts,tsx}";

#root {
  min-height: 100vh;
}
```

- [ ] **Step 3: Install any newly introduced example dependencies**

Run: `pnpm install`
Expected: PASS and `pnpm-lock.yaml` updates for Vite and React example dependencies.

- [ ] **Step 4: Build the example against the local workspace packages**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS.

Run: `pnpm --filter @abc-def/react build`
Expected: PASS.

Run: `pnpm --filter @abc-def/example-react-vite build`
Expected: PASS and produce a Vite build under `examples/react-vite/dist`.

- [ ] **Step 5: Commit the example consumer**

```bash
git add examples/react-vite pnpm-lock.yaml
git commit -m "feat: add tailwind v4 react vite example consumer"
```

### Task 5: Run Final Validation Across Packages And Docs

**Files:**
- Modify: `packages/html/src/css/index.css`
- Modify: `packages/html/package.json`
- Modify: `packages/react/package.json`
- Modify: `packages/vue/package.json`
- Test: `pnpm build`
- Test: `pnpm typecheck`
- Test: `rg -n '@abc-def/styles/tailwind|abcDefPreset' packages examples pnpm-workspace.yaml -g '!**/dist/**' -g '!**/node_modules/**'`

- [ ] **Step 1: Find any remaining package metadata or CSS that still assumes the old contract**

Run: `rg -n '@abc-def/styles/tailwind|abcDefPreset|tailwind preset|Tailwind preset' packages examples pnpm-workspace.yaml -g '!**/dist/**' -g '!**/node_modules/**'`
Expected: FAIL if any remaining source files still reference the removed preset API.

- [ ] **Step 2: Normalize the remaining package metadata and CSS entry points**

```css
/* packages/html/src/css/index.css */
@import "@abc-def/styles/css";
```

```json
// packages/html/package.json
{
  "name": "@abc-def/html",
  "version": "0.0.1",
  "description": "Framework-free HTML patterns for the abc-def design system",
  "license": "Apache-2.0",
  "type": "module",
  "files": [
    "dist",
    "src/css/index.css",
    "README.md"
  ],
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./css": "./src/css/index.css"
  },
  "scripts": {
    "build": "tsup --config tsup.config.ts",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "@abc-def/styles": "workspace:*"
  },
  "devDependencies": {
    "tsup": "catalog:",
    "typescript": "catalog:"
  }
}
```

```json
// packages/react/package.json
{
  "name": "@abc-def/react",
  "version": "0.0.1",
  "description": "React components for the abc-def design system",
  "license": "Apache-2.0",
  "type": "module",
  "files": [
    "dist",
    "README.md",
    "components.json"
  ],
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  },
  "scripts": {
    "build": "tsup --config tsup.config.ts",
    "clean": "git clean -xdf .cache .turbo dist node_modules",
    "format": "prettier --check . --ignore-path ../../.gitignore",
    "lint": "eslint",
    "typecheck": "tsc --noEmit --emitDeclarationOnly false"
  },
  "dependencies": {
    "@abc-def/styles": "workspace:*",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@line/abc-def-eslint-config": "workspace:^",
    "@line/abc-def-prettier-config": "workspace:^",
    "@line/abc-def-tsconfig": "workspace:^",
    "@types/react": "^19.2.8",
    "@types/react-dom": "^19.2.3",
    "eslint": "catalog:",
    "prettier": "catalog:",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "tsup": "catalog:",
    "typescript": "catalog:"
  },
  "prettier": "@line/abc-def-prettier-config"
}
```

```json
// packages/vue/package.json
{
  "name": "@abc-def/vue",
  "version": "0.0.1",
  "description": "Vue components for the abc-def design system",
  "license": "Apache-2.0",
  "type": "module",
  "files": [
    "dist",
    "README.md"
  ],
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  },
  "scripts": {
    "build": "tsup --config tsup.config.ts",
    "format": "prettier --check . --ignore-path ../../.gitignore",
    "lint": "eslint",
    "typecheck": "tsc --noEmit --emitDeclarationOnly false"
  },
  "dependencies": {
    "@abc-def/styles": "workspace:*",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0",
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@line/abc-def-eslint-config": "workspace:^",
    "@line/abc-def-prettier-config": "workspace:^",
    "@line/abc-def-tsconfig": "workspace:^",
    "eslint": "catalog:",
    "prettier": "catalog:",
    "tsup": "catalog:",
    "typescript": "catalog:"
  },
  "peerDependencies": {
    "vue": "^3.5.13"
  },
  "prettier": "@line/abc-def-prettier-config"
}
```

- [ ] **Step 3: Run full workspace validation**

Run: `pnpm build`
Expected: PASS for `@abc-def/styles`, `@abc-def/react`, `@abc-def/vue`, `@abc-def/html`, and `@abc-def/example-react-vite`.

Run: `pnpm typecheck`
Expected: PASS for the same workspace packages.

- [ ] **Step 4: Verify the removed preset contract is gone from source**

Run: `rg -n '@abc-def/styles/tailwind|abcDefPreset' packages examples pnpm-workspace.yaml -g '!**/dist/**' -g '!**/node_modules/**'`
Expected: PASS with no matches in active source or package metadata.

- [ ] **Step 5: Commit the final cleanup and verification pass**

```bash
git add packages/html/src/css/index.css packages/html/package.json packages/react/package.json packages/vue/package.json
git commit -m "chore: finalize tailwind v4 migration cleanup"
```
