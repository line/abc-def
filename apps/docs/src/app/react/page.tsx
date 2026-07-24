/**
 * Copyright 2026 LY Corporation
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
import { DocsCard } from "@/components/docs-card";
import { PageHeader, PageSection } from "@/components/page-section";

const installSnippet = `pnpm add tailwindcss tw-animate-css @line/abc-def-styles
pnpm add @line/abc-def-react react react-dom`;

const sourceSnippet = `@source "../node_modules/@line/abc-def-react/dist/**/*.{js,cjs}";
@source "../**/*.{ts,tsx}";`;

const reactSnippet = `import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Button</Button>;
}`;

const unsupportedSnippet = `// Unsupported
import { Button } from "@line/abc-def-react";`;

export default function ReactGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Framework"
        title="React Guide"
        description="Use the React package through component subpath exports and keep styling in the shared CSS package."
      />
      <PageSection title="Install">
        <p>
          Install the shared styles package, Tailwind CSS v4, animation helpers,
          React, and the React component package.
        </p>
        <CodeBlock code={installSnippet} language="bash" />
        <p>
          Add the React package output to your Tailwind source list and keep a
          source rule for your application files.
        </p>
        <CodeBlock code={sourceSnippet} language="css" />
      </PageSection>
      <PageSection title="Import components">
        <p>
          The React package intentionally has no root component export. Import
          each component from its public subpath.
        </p>
        <CodeBlock code={reactSnippet} />
        <CodeBlock code={unsupportedSnippet} />
      </PageSection>
      <PageSection title="Composition">
        <p>
          Compound components are exported from the same subpath as their root
          component. For example, dialog content, title, description, and
          trigger exports all come from `@line/abc-def-react/dialog`.
        </p>
      </PageSection>
      <PageSection title="Examples">
        <p>
          Component pages include React imports and basic snippets. The
          repository also keeps a richer local Next.js example gallery under
          `examples/nextjs`.
        </p>
        <DocsCard
          href="/components"
          title="Open component docs"
          description="Browse all React subpath imports by component slug."
        />
      </PageSection>
    </>
  );
}
