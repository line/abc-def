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

import { DocsCard } from "@/components/docs-card";
import { GettingStartedFab } from "@/components/getting-started-fab";
import { Hero } from "@/components/hero";
import { PageSection } from "@/components/page-section";
import { componentCount } from "@/content/components";

export default function HomePage() {
  return (
    <>
      <div id="hero-section">
        <Hero />
      </div>
      <PageSection title="AI-assisted development efficiency">
        <p>
          ABC Def&apos;s CSS token architecture keeps component source sizes
          comparable to shadcn/ui, while cutting customization prompt tokens by{" "}
          <strong>56 – 68 %</strong>. Because every visual property is a named
          CSS variable, an AI only needs the token name rather than a list of
          Tailwind utility classes. Measured across Button, Input, and Dialog
          using a standard LLM tokenizer (cl100k_base).
        </p>
        <table className="docs-comparison-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Metric</th>
              <th>ABC Def</th>
              <th>shadcn/ui</th>
              <th>Saving</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Button</td>
              <td>TSX source</td>
              <td>486 tokens</td>
              <td>431 tokens</td>
              <td>Equivalent</td>
            </tr>
            <tr>
              <td>Single customization prompt</td>
              <td>13 tokens</td>
              <td>40 tokens</td>
              <td>68 % fewer tokens</td>
            </tr>
            <tr>
              <td rowSpan={2}>Input</td>
              <td>TSX source</td>
              <td>75 tokens</td>
              <td>159 tokens</td>
              <td>53 % fewer tokens</td>
            </tr>
            <tr>
              <td>Single customization prompt</td>
              <td>13 tokens</td>
              <td>30 tokens</td>
              <td>57 % fewer tokens</td>
            </tr>
            <tr>
              <td rowSpan={2}>Dialog</td>
              <td>TSX source</td>
              <td>751 tokens</td>
              <td>780 tokens</td>
              <td>Equivalent</td>
            </tr>
            <tr>
              <td>Single customization prompt</td>
              <td>15 tokens</td>
              <td>34 tokens</td>
              <td>56 % fewer tokens</td>
            </tr>
            <tr>
              <td>
                <strong>Average</strong>
              </td>
              <td>
                <strong>10 customization requests each</strong>
              </td>
              <td>
                <strong>410 tokens</strong>
              </td>
              <td>
                <strong>1,040 tokens</strong>
              </td>
              <td>
                <strong>61% fewer tokens</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </PageSection>
      <PageSection title="Three-tier token architecture">
        <img
          src="./three-tier-token.png"
          alt="Diagram showing how Primitive Tokens map to Semantic Tokens which map to Component-specific Tokens, illustrated with a Button example"
          className="docs-tier-diagram"
        />
        <div className="docs-grid">
          <DocsCard
            title="Primitive foundation"
            description="The stable base layer — raw palette, spacing, and radius values that rarely change and anchor the entire system."
          />
          <DocsCard
            title="Semantic intent"
            description="The meaning layer — tokens for foregrounds, surfaces, borders, and states that map primitive values to product decisions."
          />
          <DocsCard
            title="Component tokens"
            description="The customization layer — each component exposes only the CSS variables it needs, so AI-assisted edits touch the fewest tokens possible."
          />
        </div>
      </PageSection>
      <PageSection title="Component coverage">
        <p>
          The docs include {componentCount} shared component pages across React,
          Vue, and styles. Start with the component index or the framework guide
          for your application.
        </p>
        <div className="docs-grid">
          <DocsCard
            href="/components"
            title="Browse components"
            description="Find imports, usage snippets, composition exports, and token groups."
          />
          <DocsCard
            href="/playground"
            title="Open playground"
            description="Edit semantic and component token overrides against live React examples."
          />
          <DocsCard
            href="/getting-started"
            title="Install guide"
            description="Set up Tailwind CSS v4, dark mode, and framework package sources."
          />
        </div>
      </PageSection>
      <PageSection title="Packages">
        <div className="docs-grid">
          <DocsCard
            href="/styles"
            title="@line/abc-def-styles"
            description="Shared CSS entrypoint, semantic variables, and component tokens."
          />
          <DocsCard
            href="/react"
            title="@line/abc-def-react"
            description="React components exposed only through component subpath imports."
          />
          <DocsCard
            href="/vue"
            title="@line/abc-def-vue"
            description="Vue components with the same component slug and styling contract."
          />
        </div>
      </PageSection>
      <GettingStartedFab />
    </>
  );
}
