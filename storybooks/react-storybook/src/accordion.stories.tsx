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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@abc-def/react";

const Props = {
  AccordionTrigger: {
    children: "↳ AccordionTrigger: children",
  },
  AccordionContent: {
    children: "↳ AccordionContent: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Accordion> & {
    [Props.AccordionTrigger.children]: React.ComponentPropsWithoutRef<
      typeof AccordionTrigger
    >["children"];
    [Props.AccordionContent.children]: React.ComponentPropsWithoutRef<
      typeof AccordionContent
    >["children"];
  }
> = {
  title: "Accordion",
  component: Accordion,
  args: {
    type: "single",
    divider: true,
    border: false,
    bgColor: false,
    collapsible: false,
    iconAlign: "right",
    iconSize: "small",
    [Props.AccordionTrigger.children]: "Title",
    [Props.AccordionContent.children]: "Description",
  },
  argTypes: {
    type: {
      description: "Set the type of the Accordion.",
      table: {
        category: "Accordion",
        type: {
          summary: "single | multiple",
        },
      },
      control: "radio",
      options: ["single", "multiple"],
    },
    divider: {
      description: "Set whether to use a divider in the Accordion.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: "true",
        },
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
    },
    border: {
      description:
        "Set whether to use a border applied to the entire Accordion area.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
    },
    bgColor: {
      description:
        "Set whether to use a background color to distinguish the trigger area in the Accordion.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
    },
    collapsible: {
      description: "Set whether the trigger in the Accordion can be collapsed.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: 'type="single": false | type="multiple": true',
        },
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
    },
    iconAlign: {
      description: "Set the icon alignment in the Accordion.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: "right",
        },
        type: {
          summary: "left | right",
        },
      },
      control: "radio",
      options: ["left", "right"],
    },
    iconSize: {
      description: "Set the icon size in the Accordion.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: "small",
        },
        type: {
          summary: "small | medium | large",
        },
      },
      control: "radio",
      options: ["small", "medium", "large"],
    },
    [Props.AccordionTrigger.children]: {
      description: "Set the children of AccordionTrigger.",
      table: {
        category: "AccordionTrigger",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.AccordionContent.children]: {
      description: "Set the children of AccordionContent.",
      table: {
        category: "AccordionContent",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
  },
  render: (args) => {
    return (
      <Accordion
        type={args.type}
        divider={args.divider}
        border={args.border}
        collapsible={args.type === "single" ? args.collapsible : undefined}
        iconAlign={args.iconAlign}
        iconSize={args.iconSize}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {args[Props.AccordionTrigger.children]}
          </AccordionTrigger>
          <AccordionContent>
            {args[Props.AccordionContent.children]}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {args[Props.AccordionTrigger.children]}
          </AccordionTrigger>
          <AccordionContent>
            {args[Props.AccordionContent.children]}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {args[Props.AccordionTrigger.children]}
          </AccordionTrigger>
          <AccordionContent>
            {args[Props.AccordionContent.children]}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RightAlign = () => (
  <Accordion type="multiple">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const LeftAlign = () => (
  <Accordion type="multiple" iconAlign="left">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const BorderWithoutBackground = () => (
  <Accordion type="multiple" border className="rounded-[8px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const BorderWithBackground = () => (
  <Accordion type="multiple" bgColor border className="rounded-[8px]">
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>
);
