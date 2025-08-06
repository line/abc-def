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
  Button,
  Caption,
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Icon,
  Label,
  TextInput,
} from "@line/abc-def-react";

const Props = {
  DialogHeader: {
    direction: "↳ DialogHeader: direction",
  },
  DialogTitle: {
    children: "↳ DialogTitle: children",
  },
  DialogDescription: {
    children: "↳ DialogDescription: children",
  },
  DialogClose: {
    variant: "↳ DialogClose: variant",
    children: "↳ DialogClose: children",
  },
  DialogFooter: {
    align: "↳ DialogFooter: align",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Dialog> & {
    [Props.DialogHeader.direction]: React.ComponentPropsWithoutRef<
      typeof DialogHeader
    >["direction"];
    [Props.DialogTitle.children]: React.ComponentPropsWithoutRef<
      typeof DialogTitle
    >["children"];
    [Props.DialogDescription.children]: React.ComponentPropsWithoutRef<
      typeof DialogDescription
    >["children"];
    [Props.DialogClose.variant]: React.ComponentPropsWithoutRef<
      typeof DialogClose
    >["variant"];
    [Props.DialogClose.children]: React.ComponentPropsWithoutRef<
      typeof DialogClose
    >["children"];
    [Props.DialogFooter.align]: React.ComponentPropsWithoutRef<
      typeof DialogFooter
    >["align"];
  }
> = {
  title: "Dialog",
  component: Dialog,
  args: {
    [Props.DialogHeader.direction]: "vertical",
    [Props.DialogTitle.children]: "Title",
    [Props.DialogDescription.children]: "Description",
    [Props.DialogClose.variant]: undefined,
    [Props.DialogClose.children]: "Button",
    [Props.DialogFooter.align]: "right",
  },
  argTypes: {
    [Props.DialogHeader.direction]: {
      description: "Set the direction of the DialogHeader.",
      table: {
        category: "DialogHeader",
        defaultValue: {
          summary: "vertical",
        },
        type: {
          summary: "vertical | horizontal",
        },
      },
      control: "radio",
      options: ["vertical", "horizontal"],
    },
    [Props.DialogTitle.children]: {
      description: "Set the children of the DialogTitle.",
      table: {
        category: "DialogTitle",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.DialogDescription.children]: {
      description: "Set the children of the DialogDescription.",
      table: {
        category: "DialogDescription",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.DialogClose.variant]: {
      description: "Set the variant of the DialogClose.",
      table: {
        category: "DialogClose",
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
    [Props.DialogClose.children]: {
      description: "Set the children of the DialogClose.",
      table: {
        category: "DialogClose",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.DialogFooter.align]: {
      description: "Set the alignment of the DialogFooter.",
      table: {
        category: "DialogFooter",
        defaultValue: {
          summary: "right",
        },
        type: {
          summary: "left | center | right | between | full",
        },
      },
      control: "radio",
      options: ["left", "center", "right", "between", "full"],
    },
  },
  render: (args) => (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader direction={args[Props.DialogHeader.direction]}>
          <Icon name="RiFlashlightFill" />
          <DialogTitle>{args[Props.DialogTitle.children]}</DialogTitle>
          <DialogDescription>
            {args[Props.DialogDescription.children]}
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <div className="space-y-2">
            <Label>Label</Label>
            <TextInput size="small" />
          </div>
          <div className="space-y-2">
            <Label>Label</Label>
            <TextInput size="small" />
            <Caption variant="info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Caption>
          </div>
        </DialogBody>
        <DialogFooter align={args[Props.DialogFooter.align]}>
          <DialogClose
            variant={args[Props.DialogClose.variant]}
            onClick={() => alert("clicked!")}
          >
            {args[Props.DialogClose.children]}
          </DialogClose>
          <DialogClose variant="primary" onClick={() => alert("clicked!")}>
            Button
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Warning = () => (
  <Dialog>
    <DialogTrigger>Warning</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <Icon name="RiErrorWarningFill" className="text-tint-orange" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Information = () => (
  <Dialog>
    <DialogTrigger>Information</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <Icon name="RiInformation2Fill" className="text-tint-blue" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Success = () => (
  <Dialog>
    <DialogTrigger>Success</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <Icon name="RiCheckboxCircleFill" className="text-tint-green" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Fail = () => (
  <Dialog>
    <DialogTrigger>Fail</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <Icon name="RiCloseCircleFill" className="text-tint-red" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="destructive"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Button_3 = () => (
  <Dialog>
    <DialogTrigger>Trigger</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
          className="mr-auto"
        >
          Button
        </Button>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Button_3_Full = () => (
  <Dialog>
    <DialogTrigger>Trigger</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter align="full">
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="outline"
          size="small"
          onClick={() => alert("clicked!")}
        >
          Button
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => alert("clicked!")}
          className="!ml-0 mt-[8px] w-full !basis-auto"
        >
          Button
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
