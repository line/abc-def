import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");
const distIndexPath = path.join(packageRoot, "dist", "index.js");
const sourceCssPath = path.join(packageRoot, "src", "css", "base.css");
const distCssPath = path.join(packageRoot, "dist", "css", "base.css");

const cssContent = await fs.readFile(sourceCssPath, "utf8");
const cssWithoutComments = cssContent.replace(/\/\*[\s\S]*?\*\//g, "");
const cssVars = new Map();
const cssVarRegex = /--abc-([a-z0-9-]+):\s*([^;]+);/gi;

for (const match of cssWithoutComments.matchAll(cssVarRegex)) {
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

const escapeForRegex = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

for (const selector of requiredSelectors) {
  const selectorRegex = new RegExp(
    String.raw`(^|[{},])\s*${escapeForRegex(selector)}(?=\s*(?:$|[,:{[>.#+~]))`,
    "m",
  );

  if (!selectorRegex.test(cssWithoutComments)) {
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
