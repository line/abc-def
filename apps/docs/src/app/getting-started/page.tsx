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

const installSnippet = `pnpm add tailwindcss @line/abc-def-styles
pnpm add @line/abc-def-react react react-dom
pnpm add @line/abc-def-vue vue`;

const stylesheetSnippet = `@import "tailwindcss";
@import "@line/abc-def-styles/css";`;

const sourceSnippet = `@source "../node_modules/@line/abc-def-react/dist/**/*.{js,cjs}";
@source "../node_modules/@line/abc-def-vue/dist/**/*.{js,cjs}";`;

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="Getting Started"
        description="Install the shared styles package first, then add the React or Vue package used by your app."
      />
      <PageSection title="Install">
        <p>
          Plain HTML projects only need the styles package. React and Vue apps
          should install their matching framework package and peer framework.
        </p>
        <CodeBlock code={installSnippet} language="bash" />
      </PageSection>
      <PageSection title="Import CSS">
        <p>
          Import ABC Def from CSS processed by Tailwind CSS v4. The styles
          package exports the public CSS entrypoint as `@line/abc-def-styles/css`.
        </p>
        <CodeBlock code={stylesheetSnippet} language="css" />
      </PageSection>
      <PageSection title="Add package sources">
        <p>
          Tailwind CSS v4 ignores most installed package sources by default.
          Add an `@source` rule for the framework package you use and adjust the
          relative path for your stylesheet location.
        </p>
        <CodeBlock code={sourceSnippet} language="css" />
      </PageSection>
      <PageSection title="Dark mode">
        <p>
          ABC Def documents dark-mode activation through the `.dark` selector.
          Add or remove `.dark` on an ancestor element to switch color schemes.
        </p>
      </PageSection>
    </>
  );
}
