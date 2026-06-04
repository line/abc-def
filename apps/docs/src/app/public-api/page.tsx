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

import { PageHeader, PageSection } from "@/components/page-section";

export default function PublicApiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Compatibility"
        title="Public API"
        description="ABC Def 2.x follows SemVer for documented package entrypoints, component APIs, and styling contracts."
      />
      <PageSection title="Protected surface">
        <ul>
          <li>Package subpath exports: `@line/abc-def-react/*`.</li>
          <li>Package subpath exports: `@line/abc-def-vue/*`.</li>
          <li>CSS entrypoint: `@line/abc-def-styles/css`.</li>
          <li>Documented props, events, exported types, and composition behavior.</li>
          <li>Documented semantic selectors, utility selectors, and token names.</li>
          <li>Dark-mode activation through the `.dark` selector.</li>
        </ul>
      </PageSection>
      <PageSection title="Not protected">
        <ul>
          <li>Files outside package `exports`.</li>
          <li>Example app internals.</li>
          <li>Internal tooling packages under `tooling/*`.</li>
          <li>Generated or source file paths unless they are also package exports.</li>
        </ul>
      </PageSection>
      <PageSection title="Change policy">
        <ul>
          <li>Patch releases fix bugs without changing public behavior.</li>
          <li>Minor releases add APIs or selectors in a backward-compatible way.</li>
          <li>Major releases may remove or change documented public APIs.</li>
        </ul>
      </PageSection>
    </>
  );
}
