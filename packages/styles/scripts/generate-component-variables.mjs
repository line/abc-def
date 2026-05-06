import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const componentsDir = path.join(packageRoot, "src/components");
const componentsIndexPath = path.join(componentsDir, "index.css");
const outputPath = path.join(componentsDir, "variables.css");

const IMPORT_PATTERN = /@import\s+"\.\/([^"]+\.css)";/g;
const TOKEN_DECLARATION_PATTERN = /^\s*(--[a-z0-9-]+)\s*:/gm;

function isWhitespace(char) {
  return char === " " || char === "\n" || char === "\r" || char === "\t" || char === "\f";
}

function skipTrivia(source, startIndex) {
  let index = startIndex;

  while (index < source.length) {
    if (source.startsWith("/*", index)) {
      const commentEnd = source.indexOf("*/", index + 2);

      if (commentEnd === -1) {
        throw new Error("Unterminated CSS comment.");
      }

      index = commentEnd + 2;
      continue;
    }

    if (isWhitespace(source[index])) {
      index += 1;
      continue;
    }

    break;
  }

  return index;
}

function findMatchingBrace(source, openBraceIndex) {
  let depth = 0;
  let inString = false;
  let stringQuote = "";

  for (let index = openBraceIndex; index < source.length; index += 1) {
    const char = source[index];
    const nextChar = source[index + 1];
    const prevChar = source[index - 1];

    if (inString) {
      if (char === stringQuote && prevChar !== "\\") {
        inString = false;
        stringQuote = "";
      }

      continue;
    }

    if ((char === '"' || char === "'") && prevChar !== "\\") {
      inString = true;
      stringQuote = char;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      const commentEnd = source.indexOf("*/", index + 2);

      if (commentEnd === -1) {
        throw new Error("Unterminated CSS comment.");
      }

      index = commentEnd + 1;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;

      if (depth === 0) {
        return index;
      }

      continue;
    }
  }

  throw new Error("Unterminated CSS block.");
}

function findTopLevelBlock(source, selector) {
  let index = 0;
  let depth = 0;
  let inString = false;
  let stringQuote = "";

  while (index < source.length) {
    const char = source[index];
    const nextChar = source[index + 1];
    const prevChar = source[index - 1];

    if (inString) {
      if (char === stringQuote && prevChar !== "\\") {
        inString = false;
        stringQuote = "";
      }

      index += 1;
      continue;
    }

    if ((char === '"' || char === "'") && prevChar !== "\\") {
      inString = true;
      stringQuote = char;
      index += 1;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      const commentEnd = source.indexOf("*/", index + 2);

      if (commentEnd === -1) {
        throw new Error("Unterminated CSS comment.");
      }

      index = commentEnd + 2;
      continue;
    }

    if (char === "{") {
      depth += 1;
      index += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      index += 1;
      continue;
    }

    if (depth === 0 && source.startsWith(selector, index)) {
      const nextIndex = index + selector.length;

      if (nextIndex >= source.length || isWhitespace(source[nextIndex]) || source[nextIndex] === "{") {
        const braceIndex = skipTrivia(source, nextIndex);

        if (source[braceIndex] === "{") {
          const closeBraceIndex = findMatchingBrace(source, braceIndex);
          const body = source.slice(braceIndex + 1, closeBraceIndex).trim();

          return body.length > 0 ? body : null;
        }
      }
    }

    index += 1;
  }

  return null;
}

function extractImports(indexSource) {
  const imports = [];

  for (const match of indexSource.matchAll(IMPORT_PATTERN)) {
    const relativeFile = match[1];

    if (relativeFile === "variables.css") {
      continue;
    }

    imports.push(relativeFile);
  }

  return imports;
}

function extractTokenNames(blockSource) {
  return Array.from(blockSource.matchAll(TOKEN_DECLARATION_PATTERN), (match) => match[1]);
}

function indentBlock(source) {
  return source
    .split("\n")
    .map((line) => (line.length > 0 ? `  ${line}` : ""))
    .join("\n");
}

function renderScope(scopeSelector, sections) {
  if (sections.length === 0) {
    return "";
  }

  const body = sections
    .map(({ fileName, body }) => `  /* ${fileName} */\n${indentBlock(body)}`)
    .join("\n\n");

  return `${scopeSelector} {\n${body}\n}\n`;
}

function recordTokens(tokenNames, fileName, scopeName, seenTokens) {
  for (const tokenName of tokenNames) {
    const previousOwner = seenTokens.get(tokenName);

    if (previousOwner) {
      throw new Error(
        `Duplicate ${scopeName} token "${tokenName}" found in ${fileName} and ${previousOwner}.`,
      );
    }

    seenTokens.set(tokenName, fileName);
  }
}

async function main() {
  const indexSource = await readFile(componentsIndexPath, "utf8");
  const componentFiles = extractImports(indexSource);
  const rootSections = [];
  const darkSections = [];
  const seenRootTokens = new Map();
  const seenDarkTokens = new Map();

  for (const componentFile of componentFiles) {
    const filePath = path.join(componentsDir, componentFile);
    const source = await readFile(filePath, "utf8");
    const rootBody = findTopLevelBlock(source, ":root");
    const darkBody = findTopLevelBlock(source, ".dark");

    if (rootBody) {
      recordTokens(extractTokenNames(rootBody), componentFile, ":root", seenRootTokens);
      rootSections.push({ fileName: componentFile, body: rootBody });
    }

    if (darkBody) {
      recordTokens(extractTokenNames(darkBody), componentFile, ".dark", seenDarkTokens);
      darkSections.push({ fileName: componentFile, body: darkBody });
    }
  }

  const output = [
    "/*",
    " * This file is auto-generated by `pnpm --filter @abc-def/styles generate:variables`.",
    " * Do not edit it directly; update the component CSS source files instead.",
    " */",
    "",
    renderScope(":root", rootSections).trimEnd(),
    darkSections.length > 0 ? `\n${renderScope(".dark", darkSections).trimEnd()}` : "",
    "",
  ].join("\n");

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${output}\n`, "utf8");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
