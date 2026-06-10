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

import { Badge } from "@line/abc-def-react/badge";
import { Button } from "@line/abc-def-react/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@line/abc-def-react/table";

import { CodeBlock } from "@/components/code-block";
import { PageHeader, PageSection } from "@/components/page-section";
import { getComponentExampleCode } from "@/content/component-example-code";
import { ComponentExamplePreview } from "@/content/component-examples";
import {
  componentDocs,
  getComponentDoc,
  toShadcnReactHref,
  toShadcnVueHref,
} from "@/content/components";
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
  const shadcnReactHref = toShadcnReactHref(component.slug);
  const shadcnVueHref = toShadcnVueHref(component.slug);

  return (
    <>
      <PageHeader
        eyebrow={component.category}
        title={component.title}
        description={component.description}
      />
      <PageSection title="Imports">
        <p>
          Use the same component slug for React, Vue, and style token lookup. Do
          not import components from package roots.
        </p>
        <CodeBlock code={reactImportSnippet(component)} />
        <CodeBlock code={vueImportSnippet(component)} language="vue" />
      </PageSection>
      <PageSection title="Shadcn references">
        <p>
          Compare the corresponding shadcn React and Vue documentation for the
          same component slug.
        </p>
        <div className="docs-action-row">
          <Button asChild variant="outline">
            <a href={shadcnReactHref} rel="noreferrer" target="_blank">
              React shadcn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={shadcnVueHref} rel="noreferrer" target="_blank">
              Vue shadcn
            </a>
          </Button>
        </div>
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
          <Table className="docs-token-table">
            <TableHeader>
              <TableRow>
                <TableHead>Component Token</TableHead>
                <TableHead>Semantic Token</TableHead>
                <TableHead>Default Primitive Token</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tokens.map((token) => (
                <TableRow key={token.name}>
                  <TableCell>
                    <code>{token.name}</code>
                  </TableCell>
                  <TableCell>
                    {token.semanticTokens.length > 0 ? (
                      token.semanticTokens.map((semanticToken, index) => (
                        <span key={semanticToken}>
                          {index > 0 ? ", " : null}
                          <code>{semanticToken}</code>
                        </span>
                      ))
                    ) : (
                      <span>Literal value</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {token.defaultPrimitiveTokens.map(
                      (defaultPrimitiveToken, index) => (
                        <span key={defaultPrimitiveToken}>
                          {index > 0 ? ", " : null}
                          <code>{defaultPrimitiveToken}</code>
                        </span>
                      ),
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p>
            This component does not define a dedicated component token file. It
            inherits shared semantic tokens and utility classes.
          </p>
        )}
      </PageSection>
      <PageSection title="Composition exports">
        <div className="docs-badge-list">
          {exports.map((name) => (
            <Badge key={name} variant="secondary">
              <code>{name}</code>
            </Badge>
          ))}
        </div>
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
