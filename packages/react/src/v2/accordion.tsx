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
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cva } from "class-variance-authority";

import type { IconProps } from "../components";
import { Icon } from "../components";
import { cn } from "../lib/utils";

const accordionVariants = cva("accordion", {
  variants: {
    border: {
      true: "accordion-border",
    },
  },
});

function Accordion({
  className,
  border = false,
  ...props
}: AccordionPrimitive.Root.Props & VariantProps<typeof accordionVariants>) {
  return (
    <AccordionPrimitive.Root
      className={cn(accordionVariants({ border }), className)}
      {...props}
    />
  );
}

const accordionItemVariants = cva("accordion-item", {
  variants: {
    divider: {
      true: "accordion-item-divider",
    },
  },
});

function AccordionItem({
  className,
  divider = true,
  ...props
}: AccordionPrimitive.Item.Props & VariantProps<typeof accordionItemVariants>) {
  return (
    <AccordionPrimitive.Item
      className={cn(accordionItemVariants({ divider }), className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn("accordion-trigger", className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionTriggerIcon({
  className,
  ...props
}: Omit<IconProps, "name">) {
  return (
    <Icon
      name="RiArrowDownSLine"
      className={cn("accordion-trigger-icon", className)}
      {...props}
    />
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel className="accordion-content" {...props}>
      <div className={cn("accordion-content-box", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionTriggerIcon,
};
