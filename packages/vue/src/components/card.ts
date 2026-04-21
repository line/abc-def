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

export const Card = defineComponent({
  name: "AbcCard",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn("card", attrs.class as ClassValue),
        },
        slots.default?.(),
      );
  },
});

export const CardHeader = defineComponent({
  name: "AbcCardHeader",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn("card-header", attrs.class as ClassValue),
        },
        slots.default?.(),
      );
  },
});

export const CardTitle = defineComponent({
  name: "AbcCardTitle",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "h3",
        {
          ...attrs,
          class: cn("card-title", attrs.class as ClassValue),
        },
        slots.default?.(),
      );
  },
});

export const CardContent = defineComponent({
  name: "AbcCardContent",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn("card-content", attrs.class as ClassValue),
        },
        slots.default?.(),
      );
  },
});
