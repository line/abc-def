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
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
  IconNames,
  InputCaption,
  InputField,
  InputLabel,
  TextInput,
} from "@abc-def/react";

const Props = {
  DialogIcon: {
    variant: "↳ DialogIcon: variant",
    name: "↳ DialogIcon: name",
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
    [Props.DialogIcon.variant]: React.ComponentPropsWithoutRef<
      typeof DialogIcon
    >["variant"];
    [Props.DialogIcon.name]: React.ComponentPropsWithoutRef<
      typeof DialogIcon
    >["name"];
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
    [Props.DialogIcon.variant]: "default",
    [Props.DialogIcon.name]: "RiFlashlightFill",
    [Props.DialogTitle.children]: "Title",
    [Props.DialogDescription.children]: "Description",
    [Props.DialogClose.variant]: undefined,
    [Props.DialogClose.children]: "Button",
    [Props.DialogFooter.align]: "right",
  },
  argTypes: {
    [Props.DialogIcon.variant]: {
      description: "Set the variant of the DialogIcon.",
      table: {
        category: "DialogIcon",
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: "default | warning | success | error | informative",
        },
      },
      control: "radio",
      options: ["default", "warning", "success", "error", "informative"],
    },
    [Props.DialogIcon.name]: {
      description: "Set the name of the DialogIcon.",
      table: {
        category: "DialogIcon",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
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
    <Dialog defaultOpen>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogIcon
            name={args[Props.DialogIcon.name]}
            variant={args[Props.DialogIcon.variant]}
          />
          <DialogTitle>{args[Props.DialogTitle.children]}</DialogTitle>
          <DialogDescription>
            {args[Props.DialogDescription.children]}
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <InputField>
            <InputLabel>Label</InputLabel>
            <TextInput size="small" />
          </InputField>
          <InputField>
            <InputLabel>Label</InputLabel>
            <TextInput size="small" />
            <InputCaption variant="info">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </InputCaption>
          </InputField>
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

export const Basic = () => (
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogBody>
        <InputField>
          <InputLabel>Label</InputLabel>
          <TextInput size="small" />
        </InputField>
        <InputField>
          <InputLabel>Label</InputLabel>
          <TextInput size="small" />
          <InputCaption variant="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </InputCaption>
        </InputField>
      </DialogBody>
      <DialogFooter>
        <DialogClose onClick={() => alert("clicked!")}>Button</DialogClose>
        <DialogClose variant="primary" onClick={() => alert("clicked!")}>
          Button
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Warning = () => (
  <Dialog>
    <DialogTrigger>Warning</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon variant="warning" />
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
        <DialogIcon variant="informative" />
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
        <DialogIcon variant="success" />
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
        <DialogIcon variant="error" />
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

export const Button_1 = () => (
  <Dialog>
    <DialogTrigger variant="primary">Footer Button 1</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter>
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

export const Button_1_Full = () => (
  <Dialog>
    <DialogTrigger variant="primary">Footer Button 1 (full)</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Description</DialogDescription>
      </DialogHeader>
      <DialogFooter align="full">
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

export const Button_2 = () => (
  <Dialog>
    <DialogTrigger variant="primary">Footer Button 2</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
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

export const Button_2_Full = () => (
  <Dialog>
    <DialogTrigger variant="primary">Footer Button 2 (full)</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
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

export const Button_3 = () => (
  <Dialog>
    <DialogTrigger variant="primary">Footer Button 3</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
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
    <DialogTrigger variant="primary">Footer Button 3 (full)</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogIcon name="RiFlashlightFill" variant="default" />
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
