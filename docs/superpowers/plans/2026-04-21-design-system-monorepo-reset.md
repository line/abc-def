# Design System Monorepo Reset Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reset the repository into a minimal publish-first monorepo with `@abc-def/styles`, `@abc-def/react`, `@abc-def/vue`, and `@abc-def/html` as the only product packages.

**Architecture:** Keep the root as a thin workspace shell, make `@abc-def/styles` the shared styling contract, and let the React, Vue, and HTML packages consume that contract without depending on each other. Remove Storybook, example apps, and legacy package structures so the new packages become the only supported surface.

**Tech Stack:** pnpm workspaces, Turborepo, TypeScript, tsup, React 19, Vue 3, Tailwind CSS

---

### Task 1: Reset The Workspace Shell

**Files:**
- Create: `scripts/check-reset-structure.mjs`
- Create: `tsconfig.base.json`
- Create: `tsconfig.json`
- Modify: `package.json`
- Modify: `pnpm-workspace.yaml`
- Modify: `turbo.json`
- Delete: `examples`
- Delete: `storybooks`
- Delete: `packages/react`
- Delete: `packages/tailwindcss`
- Delete: `tooling/eslint`
- Delete: `tooling/eslint-plugin-header`
- Delete: `tooling/prettier`
- Delete: `tooling/stylelint`
- Delete: `tooling/typescript`
- Test: `node scripts/check-reset-structure.mjs`

- [ ] **Step 1: Write the failing structure check**

```js
// scripts/check-reset-structure.mjs
import { existsSync } from "node:fs";

const requiredPaths = [
  "packages/styles",
  "packages/react",
  "packages/vue",
  "packages/html",
  "tooling/github/setup/action.yml",
];

const forbiddenPaths = [
  "examples",
  "storybooks",
  "packages/tailwindcss",
];

for (const path of requiredPaths) {
  if (!existsSync(path)) {
    throw new Error(`Missing required path: ${path}`);
  }
}

for (const path of forbiddenPaths) {
  if (existsSync(path)) {
    throw new Error(`Forbidden legacy path still exists: ${path}`);
  }
}

console.log("reset structure ok");
```

- [ ] **Step 2: Run the check and confirm it fails before the reset**

Run: `node scripts/check-reset-structure.mjs`
Expected: FAIL with at least one missing new package path and at least one forbidden legacy path still existing.

- [ ] **Step 3: Rewrite the root workspace files and remove the legacy surfaces**

```json
// package.json
{
  "name": "abc-def",
  "private": true,
  "engines": {
    "node": ">=24.13.0",
    "pnpm": ">=10.28.0"
  },
  "packageManager": "pnpm@10.28.0",
  "scripts": {
    "build": "turbo run build",
    "typecheck": "turbo run typecheck",
    "clean": "git clean -xdf node_modules .turbo packages/*/dist"
  },
  "devDependencies": {
    "turbo": "^2.7.4",
    "typescript": "^5.9.3"
  }
}
```

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"

onlyBuiltDependencies:
  - esbuild
```

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"],
      "outputs": []
    },
    "clean": {
      "cache": false
    }
  }
}
```

```json
// tsconfig.base.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "resolveJsonModule": true,
    "skipLibCheck": true
  }
}
```

```json
// tsconfig.json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "noEmit": true
  },
  "files": []
}
```

Run these deletions after staging the new root files:

```bash
rm -rf examples storybooks packages/react packages/tailwindcss tooling/eslint tooling/eslint-plugin-header tooling/prettier tooling/stylelint tooling/typescript
mkdir -p packages/styles packages/react packages/vue packages/html
```

- [ ] **Step 4: Re-run the structure check and verify it passes**

Run: `node scripts/check-reset-structure.mjs`
Expected: PASS with `reset structure ok`.

- [ ] **Step 5: Commit the workspace reset**

```bash
git add package.json pnpm-workspace.yaml turbo.json tsconfig.base.json tsconfig.json scripts/check-reset-structure.mjs packages tooling/github/setup/action.yml pnpm-lock.yaml
git commit -m "refactor: reset workspace shell for design system monorepo"
```

### Task 2: Create `@abc-def/styles`

**Files:**
- Create: `packages/styles/package.json`
- Create: `packages/styles/README.md`
- Create: `packages/styles/tsconfig.json`
- Create: `packages/styles/tsup.config.ts`
- Create: `packages/styles/src/index.ts`
- Create: `packages/styles/src/tokens/index.ts`
- Create: `packages/styles/src/css/base.css`
- Test: `pnpm --filter @abc-def/styles build`
- Test: `pnpm --filter @abc-def/styles typecheck`

- [ ] **Step 1: Confirm the package build fails before scaffolding**

Run: `pnpm --filter @abc-def/styles build`
Expected: FAIL because `packages/styles/package.json` does not exist yet.

- [ ] **Step 2: Add the package manifest and build config**

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
    "src/css/base.css",
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
    "./css": "./src/css/base.css"
  },
  "scripts": {
    "build": "tsup --config tsup.config.ts",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.19",
    "tsup": "^8.5.1",
    "typescript": "^5.9.3"
  }
}
```

```json
// packages/styles/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*.ts"]
}
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

- [ ] **Step 3: Add the tokens, CSS entry, and README**

```ts
// packages/styles/src/tokens/index.ts
export const tokens = {
  color: {
    background: "0 0% 100%",
    foreground: "222.2 47.4% 11.2%",
    primary: "221.2 83.2% 53.3%",
    primaryForeground: "210 40% 98%",
    muted: "210 40% 96.1%",
    mutedForeground: "215.4 16.3% 46.9%",
    border: "214.3 31.8% 91.4%",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  spacing: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
  },
} as const;
```

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
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: hsl(var(--abc-background));
  color: hsl(var(--abc-foreground));
  font-family: Inter, sans-serif;
}
```

```ts
// packages/styles/src/index.ts
export { tokens } from "./tokens";

export const cssEntry = "@abc-def/styles/css";
```

```md
<!-- packages/styles/README.md -->
# @abc-def/styles

Shared design tokens and the Tailwind CSS v4 styling contract for the abc-def design system.
```

- [ ] **Step 4: Build and typecheck the package**

Run: `pnpm --filter @abc-def/styles build`
Expected: PASS and create `packages/styles/dist`.

Run: `pnpm --filter @abc-def/styles typecheck`
Expected: PASS with no TypeScript errors.

- [ ] **Step 5: Commit the styles package**

```bash
git add packages/styles
git commit -m "feat: add shared styles package"
```

### Task 3: Create `@abc-def/react`

**Files:**
- Create: `packages/react/package.json`
- Create: `packages/react/README.md`
- Create: `packages/react/components.json`
- Create: `packages/react/tsconfig.json`
- Create: `packages/react/tsup.config.ts`
- Create: `packages/react/src/index.ts`
- Create: `packages/react/src/lib/cn.ts`
- Create: `packages/react/src/components/button.tsx`
- Create: `packages/react/src/components/input.tsx`
- Create: `packages/react/src/components/card.tsx`
- Test: `pnpm --filter @abc-def/react build`
- Test: `pnpm --filter @abc-def/react typecheck`

- [ ] **Step 1: Confirm the package build fails before scaffolding**

Run: `pnpm --filter @abc-def/react build`
Expected: FAIL because the package manifest and sources are not present yet.

- [ ] **Step 2: Add the package manifest and build config**

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
    "typecheck": "tsc -p tsconfig.json --noEmit"
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
    "@types/react": "^19.2.8",
    "@types/react-dom": "^19.2.3",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "tsup": "^8.5.1",
    "typescript": "^5.9.3"
  }
}
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

```json
// packages/react/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "jsx": "react-jsx"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}
```

```ts
// packages/react/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom"],
});
```

- [ ] **Step 3: Add the shared utility and the initial shadcn-style components**

```ts
// packages/react/src/lib/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
// packages/react/src/components/button.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        secondary: "bg-muted text-foreground hover:bg-muted/80",
        outline: "border-border bg-background text-foreground hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
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
// packages/react/src/components/input.tsx
import * as React from "react";
import { cn } from "../lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
```

```tsx
// packages/react/src/components/card.tsx
import * as React from "react";
import { cn } from "../lib/cn";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex flex-col gap-1.5", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold leading-none", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-sm text-muted-foreground", className)} {...props} />;
}
```

```ts
// packages/react/src/index.ts
export { Button } from "./components/button";
export type { ButtonProps } from "./components/button";
export { Input } from "./components/input";
export type { InputProps } from "./components/input";
export { Card, CardContent, CardHeader, CardTitle } from "./components/card";
```

```md
<!-- packages/react/README.md -->
# @abc-def/react

React components built on the shared abc-def styling contract.
```

- [ ] **Step 4: Build and typecheck the package**

Run: `pnpm --filter @abc-def/react build`
Expected: PASS and create `packages/react/dist`.

Run: `pnpm --filter @abc-def/react typecheck`
Expected: PASS with no TypeScript errors.

- [ ] **Step 5: Commit the React package**

```bash
git add packages/react
git commit -m "feat: add react component package"
```

### Task 4: Create `@abc-def/vue`

**Files:**
- Create: `packages/vue/package.json`
- Create: `packages/vue/README.md`
- Create: `packages/vue/tsconfig.json`
- Create: `packages/vue/tsup.config.ts`
- Create: `packages/vue/src/index.ts`
- Create: `packages/vue/src/lib/cn.ts`
- Create: `packages/vue/src/components/button.ts`
- Create: `packages/vue/src/components/input.ts`
- Create: `packages/vue/src/components/card.ts`
- Test: `pnpm --filter @abc-def/vue build`
- Test: `pnpm --filter @abc-def/vue typecheck`

- [ ] **Step 1: Confirm the package build fails before scaffolding**

Run: `pnpm --filter @abc-def/vue build`
Expected: FAIL because the package manifest and sources do not exist yet.

- [ ] **Step 2: Add the package manifest and build config**

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
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "@abc-def/styles": "workspace:*",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.4.0",
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "tsup": "^8.5.1",
    "typescript": "^5.9.3"
  },
  "peerDependencies": {
    "vue": "^3.5.13"
  }
}
```

```json
// packages/vue/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "jsx": "preserve",
    "jsxImportSource": "vue"
  },
  "include": ["src/**/*.ts"]
}
```

```ts
// packages/vue/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  dts: true,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
  external: ["vue"],
});
```

- [ ] **Step 3: Add the shared utility and the initial shadcn-vue-style components**

```ts
// packages/vue/src/lib/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```ts
// packages/vue/src/components/button.ts
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
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "button",
        {
          ...attrs,
          class: cn(
            "inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            props.variant === "secondary" && "bg-muted text-foreground hover:bg-muted/80",
            props.variant === "outline" && "border-border bg-background text-foreground hover:bg-muted",
            props.variant === "default" && "bg-primary text-primary-foreground hover:opacity-90",
            attrs.class as string,
          ),
        },
        slots.default?.(),
      );
  },
});
```

```ts
// packages/vue/src/components/input.ts
import { defineComponent, h } from "vue";
import { cn } from "../lib/cn";

export const Input = defineComponent({
  name: "AbcInput",
  setup(_, { attrs }) {
    return () =>
      h("input", {
        ...attrs,
        class: cn(
          "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          attrs.class as string,
        ),
      });
  },
});
```

```ts
// packages/vue/src/components/card.ts
import { defineComponent, h } from "vue";
import { cn } from "../lib/cn";

export const Card = defineComponent({
  name: "AbcCard",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            "rounded-lg border border-border bg-background p-6 shadow-sm",
            attrs.class as string,
          ),
        },
        slots.default?.(),
      );
  },
});

export const CardHeader = defineComponent({
  name: "AbcCardHeader",
  setup(_, { attrs, slots }) {
    return () => h("div", { ...attrs, class: cn("mb-4 flex flex-col gap-1.5", attrs.class as string) }, slots.default?.());
  },
});

export const CardTitle = defineComponent({
  name: "AbcCardTitle",
  setup(_, { attrs, slots }) {
    return () => h("h3", { ...attrs, class: cn("text-lg font-semibold leading-none", attrs.class as string) }, slots.default?.());
  },
});

export const CardContent = defineComponent({
  name: "AbcCardContent",
  setup(_, { attrs, slots }) {
    return () => h("div", { ...attrs, class: cn("text-sm text-muted-foreground", attrs.class as string) }, slots.default?.());
  },
});
```

```ts
// packages/vue/src/index.ts
export { Button } from "./components/button";
export { Input } from "./components/input";
export { Card, CardContent, CardHeader, CardTitle } from "./components/card";
```

```md
<!-- packages/vue/README.md -->
# @abc-def/vue

Vue components that consume the shared abc-def styling contract and follow shadcn-vue composition patterns.
```

- [ ] **Step 4: Build and typecheck the package**

Run: `pnpm --filter @abc-def/vue build`
Expected: PASS and create `packages/vue/dist`.

Run: `pnpm --filter @abc-def/vue typecheck`
Expected: PASS with no TypeScript errors.

- [ ] **Step 5: Commit the Vue package**

```bash
git add packages/vue
git commit -m "feat: add vue component package"
```

### Task 5: Create `@abc-def/html`

**Files:**
- Create: `packages/html/package.json`
- Create: `packages/html/README.md`
- Create: `packages/html/tsconfig.json`
- Create: `packages/html/tsup.config.ts`
- Create: `packages/html/src/index.ts`
- Create: `packages/html/src/css/index.css`
- Create: `packages/html/src/patterns/button.ts`
- Create: `packages/html/src/patterns/input.ts`
- Create: `packages/html/src/patterns/card.ts`
- Test: `pnpm --filter @abc-def/html build`
- Test: `pnpm --filter @abc-def/html typecheck`

- [ ] **Step 1: Confirm the package build fails before scaffolding**

Run: `pnpm --filter @abc-def/html build`
Expected: FAIL because the package manifest and sources do not exist yet.

- [ ] **Step 2: Add the package manifest and build config**

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
    "tsup": "^8.5.1",
    "typescript": "^5.9.3"
  }
}
```

```json
// packages/html/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*.ts"]
}
```

```ts
// packages/html/tsup.config.ts
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

- [ ] **Step 3: Add the CSS entry and HTML pattern exports**

```css
/* packages/html/src/css/index.css */
@import "@abc-def/styles/css";
```

```ts
// packages/html/src/patterns/button.ts
export function buttonPattern(label = "Button") {
  return `<button class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">${label}</button>`;
}
```

```ts
// packages/html/src/patterns/input.ts
export function inputPattern(placeholder = "Type here") {
  return `<input class="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground" placeholder="${placeholder}" />`;
}
```

```ts
// packages/html/src/patterns/card.ts
export function cardPattern(title = "Card title", content = "Card content") {
  return `<section class="rounded-lg border border-border bg-background p-6 shadow-sm"><div class="mb-4 flex flex-col gap-1.5"><h3 class="text-lg font-semibold leading-none">${title}</h3></div><div class="text-sm text-muted-foreground">${content}</div></section>`;
}
```

```ts
// packages/html/src/index.ts
export { buttonPattern } from "./patterns/button";
export { inputPattern } from "./patterns/input";
export { cardPattern } from "./patterns/card";

export const cssEntry = "@abc-def/html/css";
```

```md
<!-- packages/html/README.md -->
# @abc-def/html

Plain HTML patterns and CSS entry points for the abc-def design system.
```

- [ ] **Step 4: Build and typecheck the package**

Run: `pnpm --filter @abc-def/html build`
Expected: PASS and create `packages/html/dist`.

Run: `pnpm --filter @abc-def/html typecheck`
Expected: PASS with no TypeScript errors.

- [ ] **Step 5: Commit the HTML package**

```bash
git add packages/html
git commit -m "feat: add html pattern package"
```

### Task 6: Rewrite Root Documentation And Automation

**Files:**
- Modify: `README.md`
- Modify: `.github/workflows/ci.yaml`
- Modify: `.github/workflows/publish-packages.yaml`
- Modify: `pnpm-lock.yaml`
- Delete: `.github/workflows/deploy-storybook.yaml`
- Test: `pnpm install`
- Test: `pnpm build`
- Test: `pnpm typecheck`

- [ ] **Step 1: Confirm the current CI assumptions are obsolete**

Run: `rg -n "storybook|examples|@line/abc-def-tailwindcss|@line/abc-def-react" README.md .github/workflows`
Expected: PASS with matches showing old Storybook and old package names that must be removed.

- [ ] **Step 2: Replace the README with the new package model**

```md
<!-- README.md -->
# abc-def

abc-def is a publish-first design system monorepo.

## Packages

- `@abc-def/styles`: shared tokens and Tailwind CSS v4 CSS entry points
- `@abc-def/react`: React components built on top of the shared styles contract
- `@abc-def/vue`: Vue components built on top of the shared styles contract
- `@abc-def/html`: framework-free HTML patterns and CSS entry points

## Development

- `pnpm install`
- `pnpm build`
- `pnpm typecheck`
```

- [ ] **Step 3: Simplify CI and publishing around the new package set**

```yaml
# .github/workflows/ci.yaml
name: CI

on:
  pull_request:
    branches: ["*"]
  push:
    branches: ["main"]
  merge_group:

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: ${{ github.ref != 'refs/heads/main' }}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - name: Setup
        uses: ./tooling/github/setup
      - name: Build
        run: pnpm build

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - name: Setup
        uses: ./tooling/github/setup
      - name: Typecheck
        run: pnpm typecheck
```

```yaml
# .github/workflows/publish-packages.yaml
name: Publish Packages

on:
  push:
    tags:
      - "v*"
  workflow_dispatch:

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
      - name: Setup
        uses: ./tooling/github/setup
      - name: Build packages
        run: pnpm build
      - name: Write .npmrc
        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_JS }}" >> .npmrc
      - name: Publish
        run: pnpm -r publish --access public --no-git-checks
```

Delete the Storybook deployment workflow:

```bash
rm -f .github/workflows/deploy-storybook.yaml
```

- [ ] **Step 4: Refresh dependencies and run repo-level validation**

Run: `pnpm install`
Expected: PASS and update `pnpm-lock.yaml` for the new workspace graph.

Run: `pnpm build`
Expected: PASS with all four packages building.

Run: `pnpm typecheck`
Expected: PASS with all four packages typechecking.

- [ ] **Step 5: Commit the root documentation and workflow rewrite**

```bash
git add README.md .github/workflows/ci.yaml .github/workflows/publish-packages.yaml .github/workflows/deploy-storybook.yaml pnpm-lock.yaml
git commit -m "chore: align docs and workflows with reset monorepo"
```

### Task 7: Run End-To-End Verification

**Files:**
- Test: `node scripts/check-reset-structure.mjs`
- Test: `pnpm build`
- Test: `pnpm typecheck`
- Test: `node --input-type=module -e "import('@abc-def/styles').then((m) => console.log(Object.keys(m)))"`

- [ ] **Step 1: Run the structure check again**

Run: `node scripts/check-reset-structure.mjs`
Expected: PASS with `reset structure ok`.

- [ ] **Step 2: Run the full build and typecheck suite**

Run: `pnpm build`
Expected: PASS with `@abc-def/styles`, `@abc-def/react`, `@abc-def/vue`, and `@abc-def/html` all building.

Run: `pnpm typecheck`
Expected: PASS with no workspace type errors.

- [ ] **Step 3: Run import smoke checks against the built packages**

Run: `node --input-type=module -e "import('./packages/styles/dist/index.js').then((m) => console.log(Object.keys(m)))"`
Expected: PASS and print `tokens` and `cssEntry`.

Run: `node --input-type=module -e "import('./packages/html/dist/index.js').then((m) => console.log(m.buttonPattern('Preview')))" `
Expected: PASS and print a button HTML string.

- [ ] **Step 4: Confirm the working tree is clean after verification**

```bash
git status --short
```

Expected: PASS with no output.
