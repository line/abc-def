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
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  IconNames,
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@abc-def/react";

const Props = {
  SheetContent: {
    side: "↳ SheetContent: side",
  },
  SheetHeader: {
    icon: "↳ SheetHeader: icon",
  },
  SheetTitle: {
    children: "↳ SheetTitle: children",
  },
  SheetDescription: {
    children: "↳ SheetDescription: children",
  },
  SheetClose: {
    variant: "↳ SheetClose: variant",
    children: "↳ SheetClose: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Sheet> & {
    [Props.SheetContent.side]: React.ComponentPropsWithoutRef<
      typeof SheetContent
    >["side"];
    [Props.SheetHeader.icon]: React.ComponentPropsWithoutRef<
      typeof SheetHeader
    >["icon"];
    [Props.SheetTitle.children]: React.ComponentPropsWithoutRef<
      typeof SheetTitle
    >["children"];
    [Props.SheetDescription.children]: React.ComponentPropsWithoutRef<
      typeof SheetDescription
    >["children"];
    [Props.SheetClose.variant]: React.ComponentPropsWithoutRef<
      typeof SheetClose
    >["variant"];
    [Props.SheetClose.children]: React.ComponentPropsWithoutRef<
      typeof SheetClose
    >["children"];
  }
> = {
  title: "Sheet",
  component: Sheet,
  args: {
    [Props.SheetContent.side]: "right",
    [Props.SheetHeader.icon]: "RiFlashlightFill",
    [Props.SheetTitle.children]: "Title",
    [Props.SheetDescription.children]: "Description",
    [Props.SheetClose.variant]: undefined,
    [Props.SheetClose.children]: "Button",
  },
  argTypes: {
    [Props.SheetContent.side]: {
      description: "Set the side where the SheetContent appears.",
      table: {
        category: "SheetContent",
        defaultValue: {
          summary: "bottom",
        },
        type: {
          summary: "top | right | bottom | left",
        },
      },
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    [Props.SheetHeader.icon]: {
      description: "Set the icon of the SheetHeader.",
      table: {
        category: "SheetHeader",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.SheetTitle.children]: {
      description: "Set the children of the SheetTitle.",
      table: {
        category: "SheetTitle",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.SheetDescription.children]: {
      description: "Set the children of the SheetDescription.",
      table: {
        category: "SheetDescription",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.SheetClose.variant]: {
      description: "Set the variant of the SheetClose.",
      table: {
        category: "SheetClose",
        defaultValue: {
          summary: "outline",
        },
        type: {
          summary: "primary | secondary | destructive | ghost | outline",
        },
      },
      control: "radio",
      options: ["primary", "secondary", "destructive", "ghost", "outline"],
    },
    [Props.SheetClose.children]: {
      description: "Set the children of the SheetClose.",
      table: {
        category: "SheetClose",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger>Trigger</SheetTrigger>
      <SheetContent side={args[Props.SheetContent.side]}>
        <SheetHeader icon={args[Props.SheetHeader.icon]}>
          <SheetTitle>{args[Props.SheetTitle.children]}</SheetTitle>
          <SheetDescription>
            {args[Props.SheetDescription.children]}
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p className="pr-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            error dolores voluptatum deleniti expedita ipsam dolore quo!
            Consequatur officia, impedit labore placeat unde deserunt quasi
            nulla nihil obcaecati deleniti! Rerum.
          </p>
          <p className="pr-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            error dolores voluptatum deleniti expedita ipsam dolore quo!
            Consequatur officia, impedit labore placeat unde deserunt quasi
            nulla nihil obcaecati deleniti! Rerum.
          </p>
          <p className="pr-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            error dolores voluptatum deleniti expedita ipsam dolore quo!
            Consequatur officia, impedit labore placeat unde deserunt quasi
            nulla nihil obcaecati deleniti! Rerum.
          </p>
        </SheetBody>
        <SheetFooter>
          <SheetClose variant={args[Props.SheetClose.variant]}>
            {args[Props.SheetClose.children]}
          </SheetClose>
          <SheetClose variant="primary">Button</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Right = () => (
  <Sheet>
    <SheetTrigger>Trigger</SheetTrigger>
    <SheetContent side="right">
      <SheetHeader icon="RiFlashlightFill">
        <SheetTitle>Title</SheetTitle>
        <SheetDescription>Description</SheetDescription>
      </SheetHeader>
      <SheetBody>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
      </SheetBody>
      <SheetFooter>
        <SheetClose>Button</SheetClose>
        <SheetClose variant="primary">Button</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Bottom = () => (
  <Sheet>
    <SheetTrigger>Trigger</SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader icon="RiFlashlightFill">
        <SheetTitle>Title</SheetTitle>
        <SheetDescription>Description</SheetDescription>
      </SheetHeader>
      <SheetBody>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
      </SheetBody>
      <SheetFooter>
        <SheetClose>Button</SheetClose>
        <SheetClose variant="primary">Button</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Left = () => (
  <Sheet>
    <SheetTrigger>Trigger</SheetTrigger>
    <SheetContent side="left">
      <SheetHeader icon="RiFlashlightFill">
        <SheetTitle>Title</SheetTitle>
        <SheetDescription>Description</SheetDescription>
      </SheetHeader>
      <SheetBody>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
      </SheetBody>
      <SheetFooter>
        <SheetClose>Button</SheetClose>
        <SheetClose variant="primary">Button</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export const Top = () => (
  <Sheet>
    <SheetTrigger>Trigger</SheetTrigger>
    <SheetContent side="top">
      <SheetHeader icon="RiFlashlightFill">
        <SheetTitle>Title</SheetTitle>
        <SheetDescription>Description</SheetDescription>
      </SheetHeader>
      <SheetBody>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
        <p className="pr-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          error dolores voluptatum deleniti expedita ipsam dolore quo!
          Consequatur officia, impedit labore placeat unde deserunt quasi nulla
          nihil obcaecati deleniti! Rerum.
        </p>
      </SheetBody>
      <SheetFooter>
        <SheetClose>Button</SheetClose>
        <SheetClose variant="primary">Button</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
