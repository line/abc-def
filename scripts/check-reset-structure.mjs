import { existsSync } from "node:fs";

const requiredPaths = [
  "package.json",
  "pnpm-workspace.yaml",
  "turbo.json",
  "tsconfig.base.json",
  "tsconfig.json",
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
  "tooling/eslint",
  "tooling/eslint-plugin-header",
  "tooling/prettier",
  "tooling/stylelint",
  "tooling/typescript",
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
