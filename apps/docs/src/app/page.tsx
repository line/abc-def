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
import { PageHeader, PageSection } from "@/components/page-section";
import { componentCount } from "@/content/components";

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="ABC Def"
        title="Design system for scalable interfaces."
        description="ABC Def brings tokens, styles, and component contracts together in readable CSS so teams can customize confidently, share behavior across React and Vue, and keep design decisions easy to inspect, review, and evolve."
      />
      <PageSection title="Token architecture">
        <div className="docs-grid">
          <DocsCard
            title="Primitive foundation"
            description="Raw palette, spacing, and radius values stay visible as the stable base of the system."
          />
          <DocsCard
            title="Semantic intent"
            description="Product meaning is captured through tokens for foregrounds, surfaces, borders, and states."
          />
          <DocsCard
            title="Component tokens"
            description="Each component maps shared intent to focused variables for local control and review."
          />
          <DocsCard
            title="Framework contract"
            description="React and Vue render the same class names against one shared CSS package."
          />
          <DocsCard
            title="CSS-first customization"
            description="Overrides remain regular CSS variables, keeping changes easy to diff, audit, and ship."
          />
          <DocsCard
            title="Documentation feedback loop"
            description="Component pages expose relevant tokens beside examples so implementation decisions stay close."
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
      <PageSection title="Getting Started">
        <DocsCard
          className="docs-card-cta"
          href="/getting-started"
          title="Install and configure ABC Def"
          description="Follow the setup guide for Tailwind CSS v4, framework package sources, and dark-mode activation."
        />
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
    </>
  );
}
