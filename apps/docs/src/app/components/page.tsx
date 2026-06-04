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

import { PageHeader, PageSection } from "@/components/page-section";
import { getComponentsByCategory, toComponentHref } from "@/content/components";

export default function ComponentsIndexPage() {
  const groups = getComponentsByCategory();

  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Components"
        description="Every component page documents the shared slug, React import, Vue import, composition exports, and related style token group."
      />
      {groups.map((group) => (
        <PageSection key={group.category} title={group.category}>
          <div className="docs-grid">
            {group.components.map((component) => (
              <Link
                key={component.slug}
                className="docs-card"
                href={toComponentHref(component.slug)}
              >
                <h3>{component.title}</h3>
                <p>{component.description}</p>
              </Link>
            ))}
          </div>
        </PageSection>
      ))}
    </>
  );
}
