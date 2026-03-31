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
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const badgeVariants = cva("badge", {
  variants: {
    radius: {
      large: "badge-radius-large",
      medium: "badge-radius-medium",
      small: "badge-radius-small",
    },
    variant: {
      bold: "",
      subtle: "",
      outline: "",
    },
    color: {
      default: "",
      blue: "",
      orange: "",
      red: "",
      green: "",
    },
  },
  compoundVariants: [
    {
      variant: "bold",
      color: "default",
      className: "badge-bold-default",
    },
    {
      variant: "bold",
      color: "blue",
      className: "badge-bold-blue",
    },
    {
      variant: "bold",
      color: "orange",
      className: "badge-bold-orange",
    },
    {
      variant: "bold",
      color: "red",
      className: "badge-bold-red",
    },
    {
      variant: "bold",
      color: "green",
      className: "badge-bold-green",
    },
    {
      variant: "subtle",
      color: "default",
      className: "badge-subtle-default",
    },
    {
      variant: "subtle",
      color: "blue",
      className: "badge-subtle-blue",
    },
    {
      variant: "subtle",
      color: "orange",
      className: "badge-subtle-orange",
    },
    {
      variant: "subtle",
      color: "red",
      className: "badge-subtle-red",
    },
    {
      variant: "subtle",
      color: "green",
      className: "badge-subtle-green",
    },
    {
      variant: "outline",
      color: "default",
      className: "badge-outline-default",
    },
    {
      variant: "outline",
      color: "blue",
      className: "badge-outline-blue",
    },
    {
      variant: "outline",
      color: "orange",
      className: "badge-outline-orange",
    },
    {
      variant: "outline",
      color: "red",
      className: "badge-outline-red",
    },
    {
      variant: "outline",
      color: "green",
      className: "badge-outline-green",
    },
  ],
  defaultVariants: {
    variant: "bold",
    color: "default",
    radius: "medium",
  },
});

function Badge({
  className,
  variant = "bold",
  color = "default",
  radius = "medium",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      { className: cn(badgeVariants({ variant, color, radius }), className) },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
      color,
      radius,
    },
  });
}

export { Badge, badgeVariants };
