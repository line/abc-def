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

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn("group/input-group input-group", className)}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva("input-group-addon", {
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

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        const target = e.target as {
          closest?: (selector: string) => Element | null;
        };

        if (target.closest?.("button")) {
          return;
        }

        const currentTarget = e.currentTarget as {
          parentElement?: {
            querySelector?: (selector: string) => { focus?: () => void } | null;
          } | null;
        };

        currentTarget.parentElement
          ?.querySelector?.('[data-slot="input-group-control"]')
          ?.focus?.();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva("input-group-button", {
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

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("input-group-text", className)} {...props} />;
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn("input-group-control input-group-input", className)}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn("input-group-control input-group-textarea", className)}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
