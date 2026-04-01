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

/**
 * Parses src/theme.css and writes dist/theme.css containing:
 *   - @theme { ... }  →  :root { ... }
 *   - @utility name { ... }  →  .name { ... }
 *
 * This makes design-token CSS variables and custom utility classes available
 * at runtime when the plugin is loaded via addBase().
 */
async function buildTheme() {
  const src = path.resolve(process.cwd(), "src/theme.css");
  const dest = path.resolve(process.cwd(), "dist/theme.css");
  const raw = await fs.readFile(src, "utf8");

  // 1) @theme { ... } → :root { ... }
  let rootBlock = "";
  const themeMatch = raw.match(/@theme\s*\{([\s\S]*?)\}/);
  if (themeMatch) {
    rootBlock = `:root {\n${themeMatch[1]}}\n`;
  }

  // 2) @utility name { ... } → .name { ... }
  //    Track brace depth to handle multi-line blocks correctly.
  const utilityBlocks = [];
  const utilHeaderRe = /@utility\s+([\w/|-]+)\s*\{/g;
  let m;
  while ((m = utilHeaderRe.exec(raw)) !== null) {
    const name = m[1];
    let depth = 1;
    let i = m.index + m[0].length;
    let body = "";
    while (i < raw.length && depth > 0) {
      if (raw[i] === "{") depth++;
      else if (raw[i] === "}") depth--;
      if (depth > 0) body += raw[i];
      i++;
    }
    utilityBlocks.push(`.${name} {\n${body}}\n`);
  }

  const output = [rootBlock, ...utilityBlocks].join("\n");
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, output);
}

module.exports = buildTheme;
