import { promises as fs } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");

const sourceFiles = {
  primitive: path.join(packageRoot, "src", "tokens", "primitive.css"),
  semantic: path.join(packageRoot, "src", "tokens", "semantic.css"),
  baseEntry: path.join(packageRoot, "src", "css", "base.css"),
  buttonTokens: path.join(
    packageRoot,
    "src",
    "tokens",
    "components",
    "button.css",
  ),
  cardTokens: path.join(packageRoot, "src", "tokens", "components", "card.css"),
  inputTokens: path.join(
    packageRoot,
    "src",
    "tokens",
    "components",
    "input.css",
  ),
  componentsEntry: path.join(packageRoot, "src", "css", "components.css"),
  buttonSelectors: path.join(
    packageRoot,
    "src",
    "css",
    "components",
    "button.css",
  ),
  cardSelectors: path.join(packageRoot, "src", "css", "components", "card.css"),
  inputSelectors: path.join(
    packageRoot,
    "src",
    "css",
    "components",
    "input.css",
  ),
  utilitiesEntry: path.join(packageRoot, "src", "css", "utilities.css"),
  cssIndex: path.join(packageRoot, "src", "css", "index.css"),
};

const distIndexPath = path.join(packageRoot, "dist", "index.js");
const distIndexCjsPath = path.join(packageRoot, "dist", "index.cjs");

const read = async (filePath) => fs.readFile(filePath, "utf8");

const escapeForRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const stripComments = (value) => value.replace(/\/\*[\s\S]*?\*\//g, "");

const assert = (condition, message) => {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
};

const assertIncludes = (fileText, snippet, filePath, label) => {
  assert(fileText.includes(snippet), `Missing ${label} in ${filePath}`);
};

const selectorRegexFor = (selector) =>
  new RegExp(
    String.raw`(^|[{},])\s*${escapeForRegex(selector)}(?=\s*(?:$|[,:{[>.#+~]))`,
    "m",
  );

const findLayerBlocks = (fileText, layerName) => {
  const layerRegex = new RegExp(
    String.raw`@layer\s+${escapeForRegex(layerName)}\s*\{`,
    "g",
  );
  const blocks = [];

  for (const match of fileText.matchAll(layerRegex)) {
    let depth = 1;
    let index = match.index + match[0].length;

    for (; index < fileText.length; index += 1) {
      const char = fileText[index];
      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
      }

      if (depth === 0) {
        blocks.push({ start: match.index, end: index + 1 });
        break;
      }
    }
  }

  return blocks;
};

const selectorInLayer = (fileText, layerName, selector) => {
  const layerBlocks = findLayerBlocks(fileText, layerName);
  if (layerBlocks.length === 0) {
    return false;
  }

  const selectorRegex = selectorRegexFor(selector);
  return layerBlocks.some(({ start, end }) =>
    selectorRegex.test(fileText.slice(start, end)),
  );
};

const stripLayerBlocks = (fileText, layerName) => {
  const layerBlocks = findLayerBlocks(fileText, layerName);
  if (layerBlocks.length === 0) {
    return fileText;
  }

  let output = "";
  let lastIndex = 0;

  for (const { start, end } of layerBlocks) {
    output += fileText.slice(lastIndex, start);
    lastIndex = end;
  }

  output += fileText.slice(lastIndex);
  return output;
};

const assertSelectorInLayer = (fileText, layerName, selector, filePath) => {
  assert(
    selectorInLayer(fileText, layerName, selector),
    `Missing selector ${selector} inside @layer ${layerName} in ${filePath}`,
  );
};

const hasPlainClassSelector = (fileText, className) => {
  const selectorRegex = new RegExp(
    String.raw`\.${escapeForRegex(className)}(?=[\s.:#\[>+~,]|$)`,
  );
  const selectorListRegex = /(^|\n)\s*([^@\n][^{]*?)\s*\{/g;

  for (const match of fileText.matchAll(selectorListRegex)) {
    if (selectorRegex.test(match[2])) {
      return true;
    }
  }

  return false;
};

const declaredTokens = (cssText) =>
  new Set(cssText.match(/--abc-[a-z0-9-]+(?=\s*:)/g) ?? []);

const referencedTokens = (cssText) =>
  [...cssText.matchAll(/var\(\s*(--abc-[a-z0-9-]+)\s*(?:,|\))/g)].map(
    (match) => match[1],
  );

const assertTokenReferencesSubset = ({
  fileLabel,
  filePath,
  fileText,
  allowedTokens,
}) => {
  const refs = referencedTokens(fileText);
  const disallowed = refs.filter((ref) => !allowedTokens.has(ref));

  if (disallowed.length > 0) {
    const unique = [...new Set(disallowed)].sort();
    console.error(
      `${fileLabel} contains token references outside the allowed set:\n- ${unique.join(
        "\n- ",
      )}\nFile: ${filePath}`,
    );
    process.exit(1);
  }
};

const assertSelectorPresent = (fileText, selector, filePath) => {
  assert(
    selectorRegexFor(selector).test(fileText),
    `Missing selector ${selector} in ${filePath}`,
  );
};

const tokenPrefixSet = (tokens, prefix) =>
  new Set([...tokens].filter((value) => value.startsWith(prefix)));

const primitiveText = stripComments(await read(sourceFiles.primitive));
const semanticText = stripComments(await read(sourceFiles.semantic));
const baseEntryText = stripComments(await read(sourceFiles.baseEntry));
const buttonTokenText = stripComments(await read(sourceFiles.buttonTokens));
const cardTokenText = stripComments(await read(sourceFiles.cardTokens));
const inputTokenText = stripComments(await read(sourceFiles.inputTokens));
const buttonSelectorText = stripComments(
  await read(sourceFiles.buttonSelectors),
);
const cardSelectorText = stripComments(await read(sourceFiles.cardSelectors));
const inputSelectorText = stripComments(await read(sourceFiles.inputSelectors));
const componentsEntryText = stripComments(
  await read(sourceFiles.componentsEntry),
);
const utilitiesEntryText = stripComments(
  await read(sourceFiles.utilitiesEntry),
);
const cssIndexText = stripComments(await read(sourceFiles.cssIndex));

if (
  /var\(\s*--abc-/i.test(primitiveText) ||
  primitiveText.includes("var(--abc-")
) {
  console.error("primitive.css must not reference other abc tokens");
  process.exit(1);
}

const primitiveDeclared = declaredTokens(primitiveText);
assert(
  primitiveDeclared.size > 0,
  "primitive.css must declare at least one --abc- token",
);

assertTokenReferencesSubset({
  fileLabel: "semantic.css",
  filePath: sourceFiles.semantic,
  fileText: semanticText,
  allowedTokens: primitiveDeclared,
});

const semanticRefs = referencedTokens(semanticText);
assert(
  semanticRefs.every((ref) =>
    /^--abc-(color|radius|space|size|font-size|shadow)-/.test(ref),
  ),
  "semantic.css may only reference primitive token prefixes (--abc-(color|radius|space|size|font-size|shadow)-...)",
);

const semanticDeclared = declaredTokens(semanticText);
assert(
  semanticDeclared.size > 0,
  "semantic.css must declare at least one --abc- token",
);

assertIncludes(baseEntryText, "@theme", sourceFiles.baseEntry, "@theme block");
for (const themeAlias of [
  "--color-background",
  "--color-foreground",
  "--color-primary",
  "--color-primary-foreground",
  "--color-muted",
  "--color-muted-foreground",
  "--color-border",
  "--radius-sm",
  "--radius-md",
  "--radius-lg",
  "--spacing-1",
  "--spacing-2",
  "--spacing-3",
  "--spacing-4",
  "--spacing-6",
  "--spacing-8",
]) {
  assertIncludes(
    baseEntryText,
    themeAlias,
    sourceFiles.baseEntry,
    `${themeAlias} theme alias`,
  );
}

const componentTokenFiles = [
  ["button", sourceFiles.buttonTokens, buttonTokenText],
  ["card", sourceFiles.cardTokens, cardTokenText],
  ["input", sourceFiles.inputTokens, inputTokenText],
];

const componentDeclaredTokens = {};

for (const [name, filePath, fileText] of componentTokenFiles) {
  const declaredInFile = declaredTokens(fileText);
  assertTokenReferencesSubset({
    fileLabel: `${name} component tokens`,
    filePath,
    fileText,
    allowedTokens: new Set([...semanticDeclared, ...declaredInFile]),
  });

  const componentPrefix = `--abc-${name}-`;
  const declared = tokenPrefixSet(declaredInFile, componentPrefix);
  assert(
    declared.size > 0,
    `${name} component token file must declare at least one ${componentPrefix}... token`,
  );
  componentDeclaredTokens[name] = declared;
}

for (const [name, filePath, fileText, requiredSelectors] of [
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
  ],
  [
    "card",
    sourceFiles.cardSelectors,
    cardSelectorText,
    [
      ".card",
      ".card-header",
      ".card-content",
      ".card-body",
      ".card-title",
      ".card-actions",
    ],
  ],
  ["input", sourceFiles.inputSelectors, inputSelectorText, [".input"]],
]) {
  const allowedTokens = componentDeclaredTokens[name];
  assert(
    allowedTokens instanceof Set,
    `Internal error: missing declared token set for component "${name}"`,
  );

  // Selector files should only use the component's declared tokens. This catches:
  // - typos like --abc-button-heigth
  // - direct semantic leakage like var(--abc-bg-base)
  // - cross-component leakage like var(--abc-card-bg) inside button selectors
  assertTokenReferencesSubset({
    fileLabel: `${name} selector file`,
    filePath,
    fileText,
    allowedTokens,
  });

  const declaredInSelectorFile = declaredTokens(fileText);
  const disallowedDecls = [...declaredInSelectorFile].filter(
    (decl) => !allowedTokens.has(decl),
  );
  assert(
    disallowedDecls.length === 0,
    `${name} selector file declares tokens that are not in ${name}'s token contract:\n- ${[
      ...new Set(disallowedDecls),
    ]
      .sort()
      .join("\n- ")}\nFile: ${filePath}`,
  );

  assert(
    new RegExp(String.raw`var\(\s*--abc-${escapeForRegex(name)}-`, "i").test(
      fileText,
    ),
    `${name} selectors must consume shared tokens (expected var(--abc-${name}-...) reference)`,
  );

  const componentSelectorsOutsideLayer = stripLayerBlocks(
    fileText,
    "components",
  );
  for (const selector of requiredSelectors) {
    assertSelectorPresent(fileText, selector, filePath);
    assertSelectorInLayer(fileText, "components", selector, filePath);
    assert(
      !selectorRegexFor(selector).test(componentSelectorsOutsideLayer),
      `Selector ${selector} must only appear inside @layer components in ${filePath}`,
    );
  }

  if (name === "button") {
    for (const forbiddenSelector of [".btn-primary"]) {
      assert(
        !selectorRegexFor(forbiddenSelector).test(fileText),
        `Forbidden legacy selector ${forbiddenSelector} found in ${filePath}`,
      );
    }
  }
}

const baseSelectorsOutsideLayer = stripLayerBlocks(baseEntryText, "base");
for (const selector of [
  "*",
  "body",
  "img",
  "button",
  "input",
  "textarea",
  "select",
]) {
  assertSelectorPresent(baseEntryText, selector, sourceFiles.baseEntry);
  assertSelectorInLayer(baseEntryText, "base", selector, sourceFiles.baseEntry);
  assert(
    !selectorRegexFor(selector).test(baseSelectorsOutsideLayer),
    `Selector ${selector} must only appear inside @layer base in ${sourceFiles.baseEntry}`,
  );
}

for (const utilityName of ["abc-text-dim", "abc-surface-base"]) {
  assert(
    new RegExp(String.raw`@utility\s+${escapeForRegex(utilityName)}\b`).test(
      utilitiesEntryText,
    ),
    `Missing @utility ${utilityName} in ${sourceFiles.utilitiesEntry}`,
  );
  assert(
    !hasPlainClassSelector(utilitiesEntryText, utilityName),
    `Utilities entry must not define plain selector .${utilityName}; use @utility instead`,
  );
}

assertTokenReferencesSubset({
  fileLabel: "utilities entry",
  filePath: sourceFiles.utilitiesEntry,
  fileText: utilitiesEntryText,
  allowedTokens: semanticDeclared,
});

for (const importPath of [
  "../tokens/primitive.css",
  "../tokens/semantic.css",
]) {
  assert(
    componentsEntryText.includes(importPath),
    `Missing import ${importPath} in ${sourceFiles.componentsEntry}`,
  );
}

for (const importPath of [
  "../tokens/primitive.css",
  "../tokens/semantic.css",
]) {
  assert(
    baseEntryText.includes(importPath),
    `Missing import ${importPath} in ${sourceFiles.baseEntry}`,
  );
}

for (const importPath of [
  "../tokens/components/button.css",
  "../tokens/components/card.css",
  "../tokens/components/input.css",
  "./components/button.css",
  "./components/card.css",
  "./components/input.css",
]) {
  assert(
    componentsEntryText.includes(importPath),
    `Missing import ${importPath} in ${sourceFiles.componentsEntry}`,
  );
}

for (const importPath of [
  "../tokens/primitive.css",
  "../tokens/semantic.css",
]) {
  assert(
    utilitiesEntryText.includes(importPath),
    `Missing import ${importPath} in ${sourceFiles.utilitiesEntry}`,
  );
}

for (const importPath of [
  "./base.css",
  "./components.css",
  "./utilities.css",
]) {
  assert(
    cssIndexText.includes(importPath),
    `Missing import ${importPath} in ${sourceFiles.cssIndex}`,
  );
}

const distModule = await import(pathToFileURL(distIndexPath).href);
const exportKeys = Object.keys(distModule).sort();
assert(
  exportKeys.join(",") === "cssEntries,cssEntry",
  `Unexpected exports from dist/index.js: ${exportKeys.join(",") || "(none)"}`,
);
assert(
  distModule.cssEntry === "@abc-def/styles/css",
  `Unexpected cssEntry value: ${distModule.cssEntry}`,
);
assert(
  distModule.cssEntries?.base === "@abc-def/styles/css/base" &&
    distModule.cssEntries?.components === "@abc-def/styles/css/components" &&
    distModule.cssEntries?.utilities === "@abc-def/styles/css/utilities",
  "Unexpected cssEntries values",
);

const require = createRequire(import.meta.url);
const distCjsModule = require(distIndexCjsPath);
const cjsExportKeys = Object.keys(distCjsModule)
  .filter((key) => key !== "__esModule")
  .sort();
assert(
  cjsExportKeys.join(",") === "cssEntries,cssEntry",
  `Unexpected exports from dist/index.cjs: ${cjsExportKeys.join(",") || "(none)"}`,
);
assert(
  distCjsModule.cssEntry === "@abc-def/styles/css",
  `Unexpected cssEntry value from dist/index.cjs: ${distCjsModule.cssEntry}`,
);
assert(
  distCjsModule.cssEntries?.base === "@abc-def/styles/css/base" &&
    distCjsModule.cssEntries?.components === "@abc-def/styles/css/components" &&
    distCjsModule.cssEntries?.utilities === "@abc-def/styles/css/utilities",
  "Unexpected cssEntries values from dist/index.cjs",
);
