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
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export { default as ButtonGroup } from "./ButtonGroup.vue";
export { default as ButtonGroupSeparator } from "./ButtonGroupSeparator.vue";
export { default as ButtonGroupText } from "./ButtonGroupText.vue";

export const buttonGroupVariants = cva("button-group", {
  variants: {
    orientation: {
      horizontal: "button-group-orientation-horizontal",
      vertical: "button-group-orientation-vertical",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
