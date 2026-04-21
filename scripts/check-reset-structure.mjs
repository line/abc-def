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
