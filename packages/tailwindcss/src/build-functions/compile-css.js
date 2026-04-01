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

const fs = require("fs");
const path = require("path");
const { compile, Polyfills } = require("tailwindcss");

const twRoot = path.dirname(require.resolve("tailwindcss/package.json"));
const srcRoot = path.resolve(__dirname, "..");

const defaultTheme = fs.readFileSync(path.join(twRoot, "theme.css"), "utf8");
const customTheme = fs.readFileSync(path.join(srcRoot, "theme.css"), "utf8");

/**
 * Compiles a CSS string using Tailwind v4's compile() API and returns only
 * the CSS that originated from the provided content (not the full Tailwind
 * base/theme/utilities).
 *
 * Approach: wraps the content in @layer wrapperStart / @layer wrapperEnd
 * markers, compiles the whole thing, then extracts what's between the markers.
 *
 * @param {string} cssContent - CSS source with @apply directives
 * @param {string} [additionalCss] - Extra CSS injected before the wrapper
 *   (e.g. pre-compiled utilities layer when building components)
 * @returns {Promise<string>} - Compiled CSS
 */
async function compileAndExtract(cssContent, additionalCss = "") {
  // The Tailwind default theme is wrapped in @layer theme so it provides
  // design tokens without emitting base/utilities CSS.
  // The custom theme (theme.css) is placed at top level so its @utility
  // declarations (which cannot be nested) are registered with Tailwind.
  const input = [
    `@layer theme{${defaultTheme}}`,
    customTheme,
    additionalCss,
    `@layer wrapperStart{${cssContent}}`,
    `@layer wrapperEnd{}`,
  ].join("");

  const result = await compile(input, {
    polyfills: Polyfills.AtProperty,
    loadStylesheet: async (id, base) => {
      const file =
        id === "tailwindcss"
          ? path.join(twRoot, "index.css")
          : path.resolve(base, id);
      return {
        content: fs.readFileSync(file, "utf8"),
        base: path.dirname(file),
      };
    },
  });

  const css = result.build([]);

  const startMarker = "@layer wrapperStart";
  const endMarker = "@layer wrapperEnd";
  const startIdx = css.indexOf(startMarker);
  const endIdx = css.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    return "";
  }

  // Slice between markers, then strip the outer { } from the layer block
  const block = css.slice(startIdx + startMarker.length, endIdx).trim();
  return block.slice(1, -1).trim();
}

/**
 * Converts compiled CSS rules with simple class selectors into @utility
 * declarations so that subsequent compile() calls can resolve @apply
 * references to those classes.
 *
 * Only rules with a simple class selector (e.g. `.foo { ... }`) are
 * converted. Compound selectors, pseudo-classes, child combinators, etc.
 * are skipped — @apply only needs the base class declarations.
 *
 * Rules may contain nested blocks (e.g. `&>svg { ... }` from compiled
 * @apply directives); only the direct declarations before any nested block
 * are captured.
 *
 * @param {string} css - Compiled CSS (from dist/base.css or dist/utilities.css)
 * @returns {string} - @utility declarations string
 */
function cssToUtilityRegistrations(css) {
  const utilities = [];

  // Find all simple class selector rule headers. Allow any indentation level.
  const headerRegex = /^\s*\.([\w-]+)\s*\{/gm;
  let match;

  while ((match = headerRegex.exec(css)) !== null) {
    const className = match[1];
    const bodyStart = match.index + match[0].length;

    // Collect characters until first nested '{' (nested block) or '}' (rule end)
    let directDecls = "";
    let i = bodyStart;
    while (i < css.length && css[i] !== "{" && css[i] !== "}") {
      directDecls += css[i];
      i++;
    }

    if (i < css.length && css[i] === "{") {
      // Stopped at a nested block. Trim off any partial selector text that
      // follows the last ';' (e.g. trailing '  &>svg ' before a nested block).
      const lastSemi = directDecls.lastIndexOf(";");
      directDecls = lastSemi >= 0 ? directDecls.slice(0, lastSemi + 1) : "";

      if (!directDecls.trim()) {
        // No direct declarations — rule body is entirely nested blocks.
        // Extract the full balanced body so the @utility can include them.
        let depth = 1;
        let fullBody = "";
        let j = bodyStart;
        while (j < css.length && depth > 0) {
          if (css[j] === "{") depth++;
          else if (css[j] === "}") depth--;
          if (depth > 0) fullBody += css[j];
          j++;
        }
        if (fullBody.trim()) {
          utilities.push(`@utility ${className} {\n${fullBody}}`);
        }
        continue;
      }
    }

    if (directDecls.trim()) {
      utilities.push(`@utility ${className} {\n${directDecls}}`);
    }
  }

  return utilities.join("\n");
}

module.exports = { compileAndExtract, cssToUtilityRegistrations };
