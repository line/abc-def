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
import React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";

import { Spinner } from "../components";
import { cn } from "../lib/utils";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary: "button-primary",
      secondary: "button-secondary",
      destructive: "button-destructive",
      ghost: "button-ghost",
      outline: "button-outline",
    },
    size: {
      small: "button-small",
      medium: "button-medium",
      large: "button-large",
    },
    radius: {
      small: "button-radius-small",
      medium: "button-radius-medium",
      large: "button-radius-large",
    },
    loading: {
      true: "!text-transparent [&>*:not(.button-loading)]:!invisible",
      false: null,
    },
    iconOnly: {
      true: "button-icon-only",
      false: null,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    radius: "medium",
    loading: false,
    iconOnly: false,
  },
});

const buttonLoadingVariants = cva("button-loading", {
  variants: {
    variant: {
      primary: "button-loading-primary",
      secondary: "button-loading-secondary",
      destructive: "button-loading-destructive",
      ghost: "button-loading-ghost",
      outline: "button-loading-outline",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Button({
  className,
  variant = "primary",
  size,
  radius,
  loading = false,
  disabled = false,
  iconOnly,
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, radius, loading, className, iconOnly }),
      )}
      disabled={!!loading || disabled}
      {...props}
    >
      {children}
      {loading && (
        <span className={cn(buttonLoadingVariants({ variant }))}>
          <Spinner size={size} />
        </span>
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
