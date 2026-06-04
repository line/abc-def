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

const installSnippet = `pnpm add tailwindcss tw-animate-css @line/abc-def-styles
pnpm add @line/abc-def-vue vue`;

const sourceSnippet = `@source "../node_modules/@line/abc-def-vue/dist/**/*.{js,cjs}";
@source "../**/*.{ts,vue}";`;

const vueSnippet = `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
</script>

<template>
  <Button variant="outline">Button</Button>
</template>`;

const unsupportedSnippet = `// Unsupported
import { Button } from "@line/abc-def-vue";`;

export default function VueGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Framework"
        title="Vue Guide"
        description="Use the Vue package through the same component slug subpaths as the React package."
      />
      <PageSection title="Install">
        <p>
          Install the shared styles package, Tailwind CSS v4, animation helpers,
          Vue, and the Vue component package.
        </p>
        <CodeBlock code={installSnippet} language="bash" />
        <p>
          Add the Vue package output to your Tailwind source list and keep a
          source rule for your application files.
        </p>
        <CodeBlock code={sourceSnippet} language="css" />
      </PageSection>
      <PageSection title="Import components">
        <p>
          The Vue package intentionally has no root component export. Import
          each component from its public subpath.
        </p>
        <CodeBlock code={vueSnippet} language="vue" />
        <CodeBlock code={unsupportedSnippet} language="ts" />
      </PageSection>
      <PageSection title="Composition">
        <p>
          Compound Vue components are grouped by component slug. For example,
          `@line/abc-def-vue/dropdown-menu` exports the root, trigger, content,
          item, group, separator, and submenu pieces.
        </p>
      </PageSection>
      <PageSection title="Examples">
        <p>
          Component pages include Vue imports and basic snippets. The repository
          also keeps a local Vite consumer under `examples/vue-vite`.
        </p>
        <Link className="docs-card" href="/components">
          <h3>Open component docs</h3>
          <p>Browse all Vue subpath imports by component slug.</p>
        </Link>
      </PageSection>
    </>
  );
}
