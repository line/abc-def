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
  Icon,
  IconNames,
  MultiSelect,
  MultiSelectCaption,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectLabel,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@abc-def/react";

const Props = {
  MultiSelectLabel: { children: "↳ MultiSelectLabel: children" },
  MultiSelectValue: { placeholder: "↳ MultiSelectValue: placeholder" },
  MultiSelectContent: {
    position: "↳ MultiSelectContent: position",
    maxHeight: "↳ MultiSelectContent: maxHeight",
  },
  MultiSelectItem: {
    children: "↳ MultiSelectItem: children",
  },
  MultiSelectCaption: {
    icon: "↳ MultiSelectCaption: icon",
    variant: "↳ MultiSelectCaption: variant",
    children: "↳ MultiSelectCaption: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof MultiSelect> & {
    [Props.MultiSelectLabel.children]: React.ComponentPropsWithoutRef<
      typeof MultiSelectLabel
    >["children"];
    [Props.MultiSelectValue.placeholder]: React.ComponentPropsWithoutRef<
      typeof MultiSelectValue
    >["placeholder"];
    [Props.MultiSelectContent.maxHeight]: React.ComponentPropsWithoutRef<
      typeof MultiSelectContent
    >["maxHeight"];
    [Props.MultiSelectItem.children]: React.ComponentPropsWithoutRef<
      typeof MultiSelectItem
    >["children"];
    [Props.MultiSelectCaption.icon]: React.ComponentPropsWithoutRef<
      typeof MultiSelectCaption
    >["icon"];
    [Props.MultiSelectCaption.variant]: React.ComponentPropsWithoutRef<
      typeof MultiSelectCaption
    >["variant"];
    [Props.MultiSelectCaption.children]: React.ComponentPropsWithoutRef<
      typeof MultiSelectCaption
    >["children"];
  }
> = {
  title: "MultiSelect",
  component: MultiSelect,
  decorators: (Story) => <Story />,
  render: (args) => (
    <MultiSelect
      size={args.size}
      error={args.error}
      disabled={args.disabled}
      onValueChange={(value) => console.log(value.join(", "))}
    >
      <MultiSelectLabel>
        {args[Props.MultiSelectLabel.children]}
      </MultiSelectLabel>
      <MultiSelectTrigger>
        <MultiSelectValue
          placeholder={args[Props.MultiSelectValue.placeholder]}
        />
      </MultiSelectTrigger>
      <MultiSelectContent maxHeight={args[Props.MultiSelectContent.maxHeight]}>
        <MultiSelectItem value="txt">text</MultiSelectItem>
        <MultiSelectItem value="kwd">keyword</MultiSelectItem>
        <MultiSelectItem value="num">number</MultiSelectItem>
        <MultiSelectItem value="dat">date</MultiSelectItem>
        <MultiSelectItem value="sel">select</MultiSelectItem>
        <MultiSelectItem value="mul">multiSelect</MultiSelectItem>
        <MultiSelectItem value="img">
          {args[Props.MultiSelectItem.children]}
        </MultiSelectItem>
      </MultiSelectContent>
      <MultiSelectCaption
        icon={args[Props.MultiSelectCaption.icon]}
        variant={args[Props.MultiSelectCaption.variant]}
      >
        {args[Props.MultiSelectCaption.children]}
      </MultiSelectCaption>
    </MultiSelect>
  ),
  args: {
    size: undefined,
    error: false,
    disabled: false,
    [Props.MultiSelectLabel.children]: "Title",
    [Props.MultiSelectValue.placeholder]: "Select a fruit...",
    [Props.MultiSelectContent.maxHeight]: "auto",
    [Props.MultiSelectItem.children]: "Custom",
    [Props.MultiSelectCaption.icon]: undefined,
    [Props.MultiSelectCaption.variant]: undefined,
    [Props.MultiSelectCaption.children]: "Caption",
  },
  argTypes: {
    size: {
      description: "Set the size of the Select.",
      table: {
        category: "MultiSelect",
        type: { summary: "large | medium | small | undefined" },
        defaultValue: { summary: undefined },
      },
      control: "select",
      options: ["large", "medium", "small", undefined],
    },
    error: {
      description: "Set whether the Select is in an error state.",
      table: { category: "MultiSelect", defaultValue: { summary: "false" } },
    },
    disabled: {
      description: "Set whether the Select is in an disabled state.",
      table: { category: "MultiSelect", defaultValue: { summary: "false" } },
    },
    [Props.MultiSelectLabel.children]: {
      description: "Set the children of the SelectLabel.",
      table: {
        category: "MultiSelectLabel",
        type: { summary: "React.ReactNode" },
      },
      control: "text",
    },
    [Props.MultiSelectValue.placeholder]: {
      description: "Set the placeholder of the SelectValue.",
      table: { category: "MultiSelectValue", type: { summary: "string" } },
      control: "text",
    },
    [Props.MultiSelectContent.maxHeight]: {
      description: "Set the maximum height of the SelectContent.",
      table: { category: "MultiSelectContent", type: { summary: "string" } },
      control: "text",
    },
    [Props.MultiSelectItem.children]: {
      description: "Set the children of the SelectItem.",
      table: {
        category: "MultiSelectItem",
        type: { summary: "React.ReactNode" },
      },
      control: "text",
    },
    [Props.MultiSelectCaption.variant]: {
      description: "Set the variant of the SelectCaption.",
      table: {
        category: "MultiSelectCaption",
        type: { summary: "default | success | info | error | undefined" },
        defaultValue: { summary: undefined },
      },
      control: "radio",
      options: ["default", "success", "info", "error", undefined],
    },
    [Props.MultiSelectCaption.icon]: {
      description: "Set the left icon of the SelectCaption.",
      table: {
        category: "MultiSelectCaption",
        type: { summary: "IconNameType" },
      },
      control: "select",
      options: IconNames,
    },
    [Props.MultiSelectCaption.children]: {
      description: "Set the children of the SelectCaption.",
      table: {
        category: "MultiSelectCaption",
        type: { summary: "React.ReactNode" },
      },
      control: "text",
    },
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const With_Icon = () => (
  <MultiSelect
    defaultValue={["txt", "kwd"]}
    onValueChange={(value) => console.log(value.join(", "))}
  >
    <MultiSelectLabel>Label</MultiSelectLabel>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">
        <Icon className="mr-2" name="RiMenu2Line" size={16} />
        text
      </MultiSelectItem>
      <MultiSelectItem value="kwd">
        <Icon className="mr-2" name="RiFontSize" size={16} />
        keyword
      </MultiSelectItem>
      <MultiSelectItem value="num">
        <Icon className="mr-2" name="RiHashtag" size={16} />
        number
      </MultiSelectItem>
      <MultiSelectItem value="dat">
        <Icon className="mr-2" name="RiCalendar2Line" size={16} />
        date
      </MultiSelectItem>
      <MultiSelectItem value="sel">
        <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
        select
      </MultiSelectItem>
      <MultiSelectItem value="mul">
        <Icon className="mr-2" name="RiListView" size={16} />
        multiSelect
      </MultiSelectItem>
      <MultiSelectItem value="img">
        <Icon className="mr-2" name="RiImageLine" size={16} />
        image
      </MultiSelectItem>
    </MultiSelectContent>
    <MultiSelectCaption>Caption Info</MultiSelectCaption>
  </MultiSelect>
);

export const Error = () => (
  <MultiSelect
    error
    defaultValue={["txt", "kwd"]}
    onValueChange={(value) => console.log(value.join(", "))}
  >
    <MultiSelectLabel>Label</MultiSelectLabel>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">text</MultiSelectItem>
      <MultiSelectItem value="kwd">keyword</MultiSelectItem>
      <MultiSelectItem value="num">number</MultiSelectItem>
      <MultiSelectItem value="dat">date</MultiSelectItem>
      <MultiSelectItem value="sel">select</MultiSelectItem>
      <MultiSelectItem value="mul">multiSelect</MultiSelectItem>
      <MultiSelectItem value="img">image</MultiSelectItem>
    </MultiSelectContent>
    <MultiSelectCaption>Caption Info</MultiSelectCaption>
  </MultiSelect>
);

export const Disabled = () => (
  <MultiSelect
    disabled
    defaultValue={["txt", "kwd"]}
    onValueChange={(value) => console.log(value.join(", "))}
  >
    <MultiSelectLabel>Label</MultiSelectLabel>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">text</MultiSelectItem>
      <MultiSelectItem value="kwd">keyword</MultiSelectItem>
      <MultiSelectItem value="num">number</MultiSelectItem>
      <MultiSelectItem value="dat">date</MultiSelectItem>
      <MultiSelectItem value="sel">select</MultiSelectItem>
      <MultiSelectItem value="mul">multiSelect</MultiSelectItem>
      <MultiSelectItem value="img">image</MultiSelectItem>
    </MultiSelectContent>
    <MultiSelectCaption>Caption Info</MultiSelectCaption>
  </MultiSelect>
);
