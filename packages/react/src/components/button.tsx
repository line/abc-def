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

const buttonVariants = cva("group/button button", {
  variants: {
    variant: {
      default: "button-variant-default",
      destructive: "button-variant-destructive",
      ghost: "button-variant-ghost",
      link: "button-variant-link",
      outline: "button-variant-outline",
    },
    size: {
      default: "button-size-default",
      xs: "button-size-xs",
      sm: "button-size-sm",
      lg: "button-size-lg",
      icon: "button-size-icon",
      "icon-xs": "button-size-icon-xs",
      "icon-sm": "button-size-icon-sm",
      "icon-lg": "button-size-icon-lg",
    },
    rounded: {
      default: "button-rounded-default",
      xs: "button-rounded-xs",
      sm: "button-rounded-sm",
      lg: "button-rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "default",
  },
});

export interface ButtonProps
  extends
    React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, className, size, type, variant, rounded, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "button";

    return (
      <Comp
        data-slot="button"
        data-variant={variant}
        data-size={size}
        data-rounded={rounded}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
