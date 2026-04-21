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
import { escapeHtml } from "../lib/escape";

export function cardPattern(title = "Card title", content = "Card content") {
  return `<section class="rounded-lg border border-border bg-background p-6 shadow-sm"><div class="mb-4 flex flex-col gap-1.5"><h3 class="text-lg font-semibold leading-none">${escapeHtml(title)}</h3></div><div class="text-sm text-muted-foreground">${escapeHtml(content)}</div></section>`;
}
