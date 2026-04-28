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
"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      default: "badge-variant-default",
      secondary: "badge-variant-secondary",
      destructive: "badge-variant-destructive",
      outline: "badge-variant-outline",
      ghost: "badge-variant-ghost",
      link: "badge-variant-link",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends
    React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
