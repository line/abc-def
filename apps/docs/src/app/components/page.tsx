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
import { getComponentsByName, toComponentHref } from "@/content/components";

export default function ComponentsIndexPage() {
  const components = getComponentsByName();

  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Components"
        description="Every component page documents the shared slug, React import, Vue import, composition exports, and related style token group."
      />
      <PageSection title="All components">
        <div className="docs-grid">
          {components.map((component) => (
            <DocsCard
              key={component.slug}
              href={toComponentHref(component.slug)}
              title={component.title}
              description={component.description}
            />
          ))}
        </div>
      </PageSection>
    </>
  );
}
