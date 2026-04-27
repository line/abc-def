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

export { default as Button } from "./Button.vue";

export const buttonVariants = cva("group/button button", {
  variants: {
    variant: {
      default: "button-variant-default",
      destructive: "button-variant-destructive",
      ghost: "button-variant-ghost",
      link: "button-variant-link",
      outline: "button-variant-outline",
    },
    size: {
      xs: "button-size-xs",
      sm: "button-size-sm",
      default: "button-size-default",
      lg: "button-size-lg",
      xl: "button-size-xl",
      icon: "button-size-icon",
      "icon-xs": "button-size-icon-xs",
      "icon-sm": "button-size-icon-sm",
      "icon-lg": "button-size-icon-lg",
      "icon-xl": "button-size-icon-xl",
    },
    rounded: {
      xs: "button-rounded-xs",
      sm: "button-rounded-sm",
      default: "button-rounded-default",
      lg: "button-rounded-lg",
      xl: "button-rounded-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "default",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
