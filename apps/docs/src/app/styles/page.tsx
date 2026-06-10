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

import { CodeBlock } from "@/components/code-block";
import { PageHeader, PageSection } from "@/components/page-section";

const cssSnippet = `@import "tailwindcss";
@import "@line/abc-def-styles/css";`;

const tokenSnippet = `:root {
  --button-bg-primary: var(--primary);
  --button-fg-primary: var(--primary-foreground);
}`;

export default function StylesGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Package"
        title="Styles Guide"
        description="The styles package is the visual contract for ABC Def. React and Vue components render semantic selectors that this CSS package styles."
      />
      <PageSection title="CSS entrypoint">
        <p>
          Import `@line/abc-def-styles/css` from CSS processed by Tailwind CSS
          v4. This entrypoint includes semantic variables and component styles.
        </p>
        <CodeBlock code={cssSnippet} language="css" />
      </PageSection>
      <PageSection title="Component tokens">
        <p>
          Component tokens are CSS custom properties grouped by component slug.
          Override tokens at a suitable scope to theme one area without changing
          component markup.
        </p>
        <CodeBlock code={tokenSnippet} language="css" />
      </PageSection>
      <PageSection title="Public styling surface">
        <p>
          Documented CSS entrypoints, semantic selectors, utility selectors, and
          token names are part of the protected public API. Internal source file
          paths are not public API unless they are also exported.
        </p>
      </PageSection>
    </>
  );
}
