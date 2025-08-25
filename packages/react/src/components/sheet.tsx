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
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";
import { Button } from "./button";
import { Icon } from "./icon";
import { ScrollArea, ScrollBar } from "./scroll-area";

const Sheet = SheetPrimitive.Root;
Sheet.displayName = "Sheet";

const SheetTrigger = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Trigger>,
  SheetPrimitive.DialogTriggerProps &
    React.ComponentPropsWithoutRef<typeof Button>
>(({ variant = "outline", className, children, ...props }, ref) => {
  if (props.asChild) {
    return (
      <SheetPrimitive.Trigger
        className={cn("sheet-trigger", className)}
        ref={ref}
        {...props}
      >
        {children}
      </SheetPrimitive.Trigger>
    );
  }
  return (
    <SheetPrimitive.Trigger asChild>
      <Button
        variant={variant}
        className={cn("sheet-trigger", className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    </SheetPrimitive.Trigger>
  );
});
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = React.forwardRef<
  React.ComponentRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ variant, ...props }, ref) => (
  <SheetPrimitive.Close asChild>
    <Button ref={ref} variant={variant ?? "outline"} {...props} />
  </SheetPrimitive.Close>
));
SheetClose.displayName = "SheetClose";

const SheetPortal = SheetPrimitive.Portal;
SheetPortal.displayName = "SheetPortal";

const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn("sheet-overlay", className)}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = "SheetOverlay";

const sheetVariants = cva("sheet", {
  variants: {
    side: {
      top: "sheet-side-top",
      bottom: "sheet-side-bottom",
      left: "sheet-side-left",
      right: "sheet-side-right",
    },
    radius: {
      small: "sheet-radius-small",
      medium: "sheet-radius-medium",
      large: "sheet-radius-large",
    },
  },
  defaultVariants: {
    side: "right",
    radius: "small",
  },
});

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { side = "right", radius = "small", className, children, ...props },
    ref,
  ) => (
    <SheetPortal>
      <SheetOverlay>
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side, radius }), className)}
          {...props}
        >
          {children}
          <SheetPrimitive.Close asChild>
            <Button
              size="medium"
              variant="ghost"
              className="sheet-close"
              aria-label="Close"
            >
              <Icon name="RiCloseLine" />
            </Button>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetOverlay>
    </SheetPortal>
  ),
);
SheetContent.displayName = "SheetContent";

interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
}

const sheetHeaderVariants = cva("sheet-header", {
  variants: {
    direction: {
      vertical: "sheet-header-vertical",
      horizontal: "sheet-header-horizontal",
    },
  },
  defaultVariants: {
    direction: "vertical",
  },
});

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ direction = "vertical", children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(sheetHeaderVariants({ direction, className }))}
      {...props}
    >
      {children}
    </div>
  ),
);
SheetHeader.displayName = "SheetHeader";

interface SheetBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}
const SheetBody = React.forwardRef<HTMLDivElement, SheetBodyProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <ScrollArea ref={ref}>
        <Comp className={cn(className)} {...props} />
        <ScrollBar />
      </ScrollArea>
    );
  },
);
SheetBody.displayName = "SheetBody";

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("sheet-footer", className)} {...props} ref={ref} />
));
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("sheet-title", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("sheet-description", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
