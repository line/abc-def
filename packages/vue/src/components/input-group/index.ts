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
import type { HTMLAttributes } from "vue";
import { cva } from "class-variance-authority";

import type { ButtonVariants } from "../button";

export { default as InputGroup } from "./InputGroup.vue";
export { default as InputGroupAddon } from "./InputGroupAddon.vue";
export { default as InputGroupButton } from "./InputGroupButton.vue";
export { default as InputGroupInput } from "./InputGroupInput.vue";
export { default as InputGroupText } from "./InputGroupText.vue";
export { default as InputGroupTextarea } from "./InputGroupTextarea.vue";

export const inputGroupAddonVariants = cva("input-group-addon", {
  variants: {
    align: {
      "inline-start": "input-group-addon-align-inline-start",
      "inline-end": "input-group-addon-align-inline-end",
      "block-start": "input-group-addon-align-block-start",
      "block-end": "input-group-addon-align-block-end",
    },
  },
  defaultVariants: {
    align: "inline-start",
  },
});

export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>;

export const inputGroupButtonVariants = cva("input-group-button", {
  variants: {
    size: {
      xs: "input-group-button-size-xs",
      sm: "",
      "icon-xs": "input-group-button-size-icon-xs",
      "icon-sm": "input-group-button-size-icon-sm",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export type InputGroupButtonVariants = VariantProps<
  typeof inputGroupButtonVariants
>;

export interface InputGroupButtonProps {
  variant?: ButtonVariants["variant"];
  size?: InputGroupButtonVariants["size"];
  class?: HTMLAttributes["class"];
}
