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

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/code-block";
import { PageHeader, PageSection } from "@/components/page-section";
import { getComponentExampleCode } from "@/content/component-example-code";
import { ComponentExamplePreview } from "@/content/component-examples";
import { componentDocs, getComponentDoc } from "@/content/components";
import {
  basicVueSnippet,
  reactImportSnippet,
  vueImportSnippet,
} from "@/content/snippets";
import { getComponentTokens } from "@/content/tokens";

interface ComponentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return componentDocs.map((component) => ({ slug: component.slug }));
}

export async function generateMetadata({
  params,
}: ComponentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponentDoc(slug);

  if (!component) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: component.title,
    description: component.description,
  };
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  const component = getComponentDoc(slug);

  if (!component) {
    notFound();
  }

  const exports = [component.primaryExport, ...component.relatedExports];
  const example = getComponentExampleCode(component);
  const tokens = getComponentTokens(component.slug);

  return (
    <>
      <PageHeader
        eyebrow={component.category}
        title={component.title}
        description={component.description}
      />
      <PageSection title="Imports">
        <p>
          Use the same component slug for React, Vue, and style token lookup.
          Do not import components from package roots.
        </p>
        <CodeBlock code={reactImportSnippet(component)} />
        <CodeBlock code={vueImportSnippet(component)} language="vue" />
      </PageSection>
      <PageSection title="Basic usage">
        <div className="docs-example-frame">
          <ComponentExamplePreview slug={component.slug} />
        </div>
        <CodeBlock code={example.code} />
        <CodeBlock code={basicVueSnippet(component)} language="vue" />
      </PageSection>
      <PageSection title="Component tokens">
        {tokens.length > 0 ? (
          <div className="docs-token-table-wrap">
            <table className="docs-token-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Default</th>
                  <th>References</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token) => (
                  <tr key={token.name}>
                    <td>
                      <code>{token.name}</code>
                    </td>
                    <td>
                      <code>{token.defaultValue}</code>
                    </td>
                    <td>
                      {token.references.length > 0 ? (
                        <span>{token.references.join(" -> ")}</span>
                      ) : (
                        <span>Literal value</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>
            This component does not define a dedicated component token file.
            It inherits shared semantic tokens and utility classes.
          </p>
        )}
      </PageSection>
      <PageSection title="Composition exports">
        <ul className="docs-pill-list">
          {exports.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </PageSection>
      <PageSection title="Usage notes">
        <ul>
          {component.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
          <li>
            Related component tokens use the `{component.slug}` token group in
            `@line/abc-def-styles/css`.
          </li>
        </ul>
      </PageSection>
    </>
  );
}
