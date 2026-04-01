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
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const separatorVariants = cva("separator", {
  variants: {
    variant: {
      bold: "separator-bold",
      subtle: "separator-subtle",
    },
    orientation: {
      horizontal: "separator-horizontal",
      vertical: "separator-vertical",
    },
  },
  defaultVariants: {
    variant: "subtle",
    orientation: "horizontal",
  },
});

function Separator({
  className,
  orientation = "horizontal",
  variant = "subtle",
  ...props
}: SeparatorPrimitive.Props & VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(separatorVariants({ variant, orientation }), className)}
      {...props}
    />
  );
}

export { Separator };
