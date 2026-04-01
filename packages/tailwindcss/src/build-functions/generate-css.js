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

const fs = require("fs").promises;
const path = require("path");
const glob = require("glob");
const {
  compileAndExtract,
  cssToUtilityRegistrations,
} = require("./compile-css");

/**
 * Reads a file, returning an empty string if it does not exist yet.
 * Used to gracefully handle missing dist files on the first build.
 */
async function readFileOrEmpty(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch {
    return "";
  }
}

/**
 * Compiles all CSS source files for a given layer using the Tailwind v4
 * compile() API and writes the output to dist/{type}/.
 *
 * Layer dependencies mirror the v3 tailwind.config.js addBase / addUtilities
 * injection pattern:
 *   - base      : no additional CSS context
 *   - utilities : dist/base.css injected so @apply on base classes resolves
 *   - components: dist/base.css + dist/utilities.css injected so @apply on
 *                 both base and utility classes resolves
 *
 * @param {"base"|"utilities"|"components"} type
 */
async function generateCss(type) {
  try {
    const distRoot = path.resolve(process.cwd(), "dist");

    // Build additionalCss: convert compiled CSS rules from prior layers into
    // @utility declarations so that @apply references resolve correctly.
    // (Tailwind v4 @apply only resolves registered @utility classes.)
    let additionalCss = "";
    if (type === "utilities") {
      const baseCss = await readFileOrEmpty(path.join(distRoot, "base.css"));
      additionalCss = cssToUtilityRegistrations(baseCss);
    } else if (type === "components") {
      const baseCss = await readFileOrEmpty(path.join(distRoot, "base.css"));
      const utilitiesCss = await readFileOrEmpty(
        path.join(distRoot, "utilities.css"),
      );
      additionalCss = cssToUtilityRegistrations(baseCss + "\n" + utilitiesCss);
    }

    const cssFiles = glob.sync(`src/${type}/*.css`);
    await fs.mkdir(path.join(distRoot, type), { recursive: true });

    for (const file of cssFiles) {
      const cssContent = await fs.readFile(file, "utf8");
      const compiled = await compileAndExtract(cssContent, additionalCss);

      const filename = path.basename(file);
      const outputPath = path.join(distRoot, type, filename);
      await fs.writeFile(outputPath, compiled);
    }
  } catch (error) {
    console.error("CSS generation failed:", error);
    process.exit(1);
  }
}

module.exports = generateCss;
