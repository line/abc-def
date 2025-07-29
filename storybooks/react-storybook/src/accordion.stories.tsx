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
} from "@line/abc-def-react";

const Props = {
  AccordionItem: {
    divider: "↳ AccordionItem: divider",
  },
  AccordionTrigger: {
    children: "↳ AccordionTrigger: children",
  },
  AccordionContent: {
    children: "↳ AccordionContent: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Accordion> & {
    [Props.AccordionItem.divider]: React.ComponentPropsWithoutRef<
      typeof AccordionItem
    >["divider"];
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
    border: false,
    iconAlign: "right",
    iconSize: "small",
    [Props.AccordionItem.divider]: true,
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
    [Props.AccordionItem.divider]: {
      description: "Set whether to use a divider in the AccordionItem.",
      table: {
        category: "AccordionItem",
        defaultValue: {
          summary: "true",
        },
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
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
    collapsible: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return (
      <Accordion
        type={args.type}
        border={args.border}
        iconAlign={args.iconAlign}
        iconSize={args.iconSize}
      >
        <AccordionItem
          value="item-1"
          divider={Boolean(args[Props.AccordionItem.divider])}
        >
          <AccordionTrigger>
            {args[Props.AccordionTrigger.children]}
          </AccordionTrigger>
          <AccordionContent>
            {args[Props.AccordionContent.children]}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          divider={Boolean(args[Props.AccordionItem.divider])}
        >
          <AccordionTrigger>
            {args[Props.AccordionTrigger.children]}
          </AccordionTrigger>
          <AccordionContent>
            {args[Props.AccordionContent.children]}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          divider={Boolean(args[Props.AccordionItem.divider])}
        >
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
  <Accordion type="multiple" border className="rounded-[8px]">
    <AccordionItem value="item-1">
      <AccordionTrigger className="bg-tertiary">Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="bg-tertiary">Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="bg-tertiary">Title</AccordionTrigger>
      <AccordionContent>Description</AccordionContent>
    </AccordionItem>
  </Accordion>
);
