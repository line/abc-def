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
  MultiSelectTrigger,
  MultiSelectValue,
  Select,
  SelectCaption,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@abc-def/react";

const Props = {
  SelectLabel: {
    children: "↳ SelectLabel: children",
  },
  SelectTrigger: {
    error: "↳ SelectTrigger: error",
  },
  SelectValue: {
    placeholder: "↳ SelectValue: placeholder",
  },
  SelectContent: {
    position: "↳ SelectContent: position",
    maxHeight: "↳ SelectContent: maxHeight",
  },
  SelectItem: {
    icon: "↳ SelectItem: icon",
    children: "↳ SelectItem: children",
  },
  SelectCaption: {
    icon: "↳ SelectCaption: icon",
    variant: "↳ SelectCaption: variant",
    children: "↳ SelectCaption: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Select> & {
    [Props.SelectLabel.children]: React.ComponentPropsWithoutRef<
      typeof SelectLabel
    >["children"];
    [Props.SelectTrigger.error]: React.ComponentPropsWithoutRef<
      typeof SelectTrigger
    >["error"];
    [Props.SelectValue.placeholder]: React.ComponentPropsWithoutRef<
      typeof SelectValue
    >["placeholder"];
    [Props.SelectContent.position]: React.ComponentPropsWithoutRef<
      typeof SelectContent
    >["position"];
    [Props.SelectContent.maxHeight]: React.ComponentPropsWithoutRef<
      typeof SelectContent
    >["maxHeight"];
    [Props.SelectItem.children]: React.ComponentPropsWithoutRef<
      typeof SelectItem
    >["children"];
    [Props.SelectCaption.icon]: React.ComponentPropsWithoutRef<
      typeof SelectCaption
    >["icon"];
    [Props.SelectCaption.variant]: React.ComponentPropsWithoutRef<
      typeof SelectCaption
    >["variant"];
    [Props.SelectCaption.children]: React.ComponentPropsWithoutRef<
      typeof SelectCaption
    >["children"];
  }
> = {
  title: "Select",
  component: Select,
  decorators: (Story) => <Story />,
  render: (args) => (
    <Select size={args.size}>
      <SelectLabel>{args[Props.SelectLabel.children]}</SelectLabel>
      <SelectTrigger error={args[Props.SelectTrigger.error]}>
        <SelectValue placeholder={args[Props.SelectValue.placeholder]} />
      </SelectTrigger>
      <SelectContent
        position={args[Props.SelectContent.position]}
        maxHeight={args[Props.SelectContent.maxHeight]}
      >
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="app">Apple</SelectItem>
          <SelectItem value="ban">Banana</SelectItem>
          <SelectItem value="blu">Blueberry</SelectItem>
          <SelectItem value="gra">Grapes</SelectItem>
          <SelectItem value="pin">{args[Props.SelectItem.children]}</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Vegetables</SelectGroupLabel>
          <SelectItem value="tom">Tomato</SelectItem>
          <SelectItem value="cab">Cabbage</SelectItem>
          <SelectItem value="let">Lettuce</SelectItem>
          <SelectItem value="car">Carrot</SelectItem>
          <SelectItem value="oni">Onion</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption
        icon={args[Props.SelectCaption.icon]}
        variant={args[Props.SelectCaption.variant]}
      >
        {args[Props.SelectCaption.children]}
      </SelectCaption>
    </Select>
  ),
  args: {
    size: undefined,
    [Props.SelectLabel.children]: "Title",
    [Props.SelectTrigger.error]: false,
    [Props.SelectValue.placeholder]: "Select a fruit...",
    [Props.SelectContent.position]: "popper",
    [Props.SelectContent.maxHeight]: "auto",
    [Props.SelectItem.children]: "Custom",
    [Props.SelectCaption.icon]: undefined,
    [Props.SelectCaption.variant]: "default",
    [Props.SelectCaption.children]: "Caption",
  },
  argTypes: {
    size: {
      description: "Set the size of the Select.",
      table: {
        category: "Select",
        type: {
          summary: "large | medium | small | undefined",
        },
        defaultValue: {
          summary: undefined,
        },
      },
      control: "select",
      options: ["large", "medium", "small", undefined],
    },
    [Props.SelectTrigger.error]: {
      description: "Set whether the SelectTrigger is in an error state.",
      table: {
        category: "SelectTrigger",
        defaultValue: {
          summary: "false",
        },
      },
    },
    [Props.SelectLabel.children]: {
      description: "Set the children of the SelectLabel.",
      table: {
        category: "SelectLabel",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.SelectValue.placeholder]: {
      description: "Set the placeholder of the SelectValue.",
      table: {
        category: "SelectValue",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.SelectContent.position]: {
      description: "Set the position where the SelectContent appears.",
      table: {
        category: "SelectContent",
        defaultValue: {
          summary: "popper",
        },
        type: {
          summary: "item-aligned | popper",
        },
      },
      control: "radio",
      options: ["item-aligned", "popper"],
    },
    [Props.SelectContent.maxHeight]: {
      description: "Set the maximum height of the SelectContent.",
      table: {
        category: "SelectContent",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.SelectItem.children]: {
      description: "Set the children of the SelectItem.",
      table: {
        category: "SelectItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.SelectCaption.variant]: {
      description: "Set the variant of the SelectCaption.",
      table: {
        category: "SelectCaption",
        type: {
          summary: "default | success | info | error",
        },
        defaultValue: {
          summary: "default",
        },
      },
      control: "radio",
      options: ["default", "success", "info", "error"],
    },
    [Props.SelectCaption.icon]: {
      description: "Set the left icon of the SelectCaption.",
      table: {
        category: "SelectCaption",
        type: {
          summary: "IconNameType",
        },
      },
      control: "select",
      options: IconNames,
    },
    [Props.SelectCaption.children]: {
      description: "Set the children of the SelectCaption.",
      table: {
        category: "SelectCaption",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    className: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Single = () => {
  return (
    <Select
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">image</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="default">Caption Default</SelectCaption>
    </Select>
  );
};

export const Single_With_Icon = () => {
  return (
    <Select
      defaultValue="txt"
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">
            <Icon className="mr-2" name="RiMenu2Line" size={16} />
            text
          </SelectItem>
          <SelectItem value="kwd">
            <Icon className="mr-2" name="RiFontSize" size={16} />
            keyword
          </SelectItem>
          <SelectItem value="num">
            <Icon className="mr-2" name="RiHashtag" size={16} />
            number
          </SelectItem>
          <SelectItem value="dat">
            <Icon className="mr-2" name="RiCalendar2Line" size={16} />
            date
          </SelectItem>
          <SelectItem value="sel">
            <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
            select
          </SelectItem>
          <SelectItem value="mul">
            <Icon className="mr-2" name="RiListView" size={16} />
            multiSelect
          </SelectItem>
          <SelectItem value="img">
            <Icon className="mr-2" name="RiImageLine" size={16} />
            image
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="success">Caption Info</SelectCaption>
    </Select>
  );
};

export const Error = () => {
  return (
    <Select
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger error>
        <SelectValue placeholder="Select a timezone (Disabled)" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">image</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="error">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </SelectCaption>
    </Select>
  );
};

export const Disabled = () => {
  return (
    <Select
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <SelectLabel>Label</SelectLabel>
      <SelectTrigger disabled>
        <SelectValue placeholder="Select a timezone (Disabled)" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">image</SelectItem>
        </SelectGroup>
      </SelectContent>
      <SelectCaption variant="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </SelectCaption>
    </Select>
  );
};

export const Multi = () => (
  <MultiSelect onValueChange={(value) => console.log(value.join(", "))}>
    <SelectLabel>Label</SelectLabel>
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

export const Multi_With_Icon = () => (
  <MultiSelect
    defaultValue={["txt", "kwd"]}
    onValueChange={(value) => console.log(value.join(", "))}
  >
    <SelectLabel>Label</SelectLabel>
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
