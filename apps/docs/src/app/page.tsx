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

import Link from "next/link";

import { CodeBlock } from "@/components/code-block";
import { PageHeader, PageSection } from "@/components/page-section";
import { componentCount } from "@/content/components";

const installSnippet = `pnpm add tailwindcss @line/abc-def-styles
pnpm add @line/abc-def-react react react-dom
pnpm add @line/abc-def-vue vue`;

const cssSnippet = `@import "tailwindcss";
@import "@line/abc-def-styles/css";

@source "../node_modules/@line/abc-def-react/dist/**/*.{js,cjs}";
@source "../node_modules/@line/abc-def-vue/dist/**/*.{js,cjs}";`;

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="ABC Def"
        title="CSS-first UI packages for React, Vue, and plain styles."
        description="ABC Def keeps visual behavior in shared Tailwind CSS v4 tokens and selectors, then exposes framework components that render the same public contract."
      />
      <PageSection title="Packages">
        <div className="docs-grid">
          <Link className="docs-card" href="/styles">
            <h3>@line/abc-def-styles</h3>
            <p>Shared CSS entrypoint, semantic variables, and component tokens.</p>
          </Link>
          <Link className="docs-card" href="/react">
            <h3>@line/abc-def-react</h3>
            <p>React components exposed only through component subpath imports.</p>
          </Link>
          <Link className="docs-card" href="/vue">
            <h3>@line/abc-def-vue</h3>
            <p>Vue components with the same component slug and styling contract.</p>
          </Link>
        </div>
      </PageSection>
      <PageSection title="Quick start">
        <CodeBlock code={installSnippet} language="bash" />
        <CodeBlock code={cssSnippet} language="css" />
      </PageSection>
      <PageSection title="Component coverage">
        <p>
          The docs include {componentCount} shared component pages across React,
          Vue, and styles. Start with the component index or the framework guide
          for your application.
        </p>
        <div className="docs-grid">
          <Link className="docs-card" href="/components">
            <h3>Browse components</h3>
            <p>Find imports, usage snippets, composition exports, and token groups.</p>
          </Link>
          <Link className="docs-card" href="/getting-started">
            <h3>Install guide</h3>
            <p>Set up Tailwind CSS v4, dark mode, and framework package sources.</p>
          </Link>
        </div>
      </PageSection>
    </>
  );
}
