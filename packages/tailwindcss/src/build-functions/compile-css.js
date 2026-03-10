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

module.exports = compileAndExtract;
