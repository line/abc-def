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
import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "../lib/cn";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-default",
      destructive: "btn-destructive",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
      secondary: "btn-secondary",
    },
    size: {
      default: null,
      sm: "btn-sm",
      lg: "btn-lg",
      icon: "btn-icon",
      "icon-sm": "btn-icon-sm",
      "icon-lg": "btn-icon-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, type, variant, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    const resolvedType = asChild ? undefined : type ?? "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(resolvedType ? { type: resolvedType } : {})}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
