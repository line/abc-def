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

export const Button = defineComponent({
  name: "AbcButton",
  props: {
    variant: {
      type: String,
      default: "default",
    },
  },
  setup(props, { attrs, slots }: SetupContext) {
    const hasType = Object.prototype.hasOwnProperty.call(attrs, "type");
    const resolvedType = hasType ? (attrs as { type?: string }).type : "button";
    return () =>
      h(
        "button",
        {
          ...attrs,
          type: resolvedType,
          class: cn(
            "btn",
            props.variant === "default" && "btn-primary",
            props.variant === "secondary" && "btn-secondary",
            props.variant === "outline" && "btn-outline",
            attrs.class as ClassValue,
          ),
        },
        slots.default?.(),
      );
  },
});
