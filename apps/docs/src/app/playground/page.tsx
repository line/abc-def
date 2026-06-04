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

import { PageHeader } from "@/components/page-section";
import { componentDocs } from "@/content/components";
import { getEditablePlaygroundTokens, getTokenGraph } from "@/content/tokens";

import { PlaygroundClient } from "./playground-client";

export default function PlaygroundPage() {
  const tokens = getEditablePlaygroundTokens();
  const tokenGraphs = Object.fromEntries(
    tokens.map((token) => [token.name, getTokenGraph(token.name)]),
  );

  return (
    <>
      <PageHeader
        eyebrow="Playground"
        title="Edit semantic and component tokens against every React example."
        description="Primitive color tokens stay read-only in token chains. The playground scopes overrides to the preview root so edits do not leak into the docs shell."
      />
      <PlaygroundClient
        components={[...componentDocs]}
        tokens={tokens}
        tokenGraphs={tokenGraphs}
      />
    </>
  );
}
