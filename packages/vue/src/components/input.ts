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
import type { ClassValue } from "clsx";
import type { SetupContext } from "vue";
import { defineComponent, h } from "vue";

import { cn } from "../lib/cn";

export const Input = defineComponent({
  name: "AbcInput",
  setup(_props, { attrs }: SetupContext) {
    return () =>
      h("input", {
        ...attrs,
        class: cn(
          "border-border bg-background text-foreground focus-visible:ring-primary flex h-10 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2",
          attrs.class as ClassValue,
        ),
      });
  },
});
