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
  Combobox,
  ComboboxCaption,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSelectItem,
  ComboboxSeparator,
  ComboboxTrigger,
  Icon,
} from "@abc-def/react";

const Props = {
  ComboboxTrigger: {
    variant: "↳ ComboboxTrigger: variant",
    children: "↳ ComboboxTrigger: children",
  },
  ComboboxInput: {
    placeholder: "↳ ComboboxInput: placeholder",
  },
  ComboboxList: {
    maxHeight: "↳ ComboboxList: maxHeight",
  },
  ComboboxEmpty: {
    children: "↳ ComboboxEmpty: children",
  },
  ComboboxItem: {
    variant: "↳ ComboboxItem: variant",
    inset: "↳ ComboboxItem: inset",
    children: "↳ ComboboxItem: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof ComboboxList> & {
    [Props.ComboboxTrigger.variant]: React.ComponentPropsWithoutRef<
      typeof ComboboxTrigger
    >["variant"];
    [Props.ComboboxTrigger.children]: React.ComponentPropsWithoutRef<
      typeof ComboboxTrigger
    >["children"];
    [Props.ComboboxInput.placeholder]: React.ComponentPropsWithoutRef<
      typeof ComboboxInput
    >["placeholder"];
    [Props.ComboboxList.maxHeight]: React.ComponentPropsWithoutRef<
      typeof ComboboxList
    >["maxHeight"];
    [Props.ComboboxEmpty.children]: React.ComponentPropsWithoutRef<
      typeof ComboboxEmpty
    >["children"];
    [Props.ComboboxItem.inset]: React.ComponentPropsWithoutRef<
      typeof ComboboxItem
    >["inset"];
    [Props.ComboboxItem.children]: React.ComponentPropsWithoutRef<
      typeof ComboboxItem
    >["children"];
  }
> = {
  title: "Combobox",
  component: ComboboxList,
  args: {
    [Props.ComboboxTrigger.variant]: undefined,
    [Props.ComboboxInput.placeholder]: "Placeholder...",
    [Props.ComboboxList.maxHeight]: "300px",
    [Props.ComboboxEmpty.children]: "No results found.",
    [Props.ComboboxItem.inset]: false,
    [Props.ComboboxItem.children]: "Custom",
  },
  argTypes: {
    [Props.ComboboxTrigger.variant]: {
      description: "Set the variant of the ComboboxTrigger.",
      table: {
        category: "ComboboxTrigger",
        defaultValue: {
          summary: "outline",
        },
        type: {
          summary: "primary | secondary | destructive | ghost | outline",
        },
      },
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost", "outline"],
    },
    [Props.ComboboxInput.placeholder]: {
      description: "Set the placeholder of the ComboboxInput.",
      table: {
        category: "ComboboxInput",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.ComboboxList.maxHeight]: {
      description: "Set the maximum height of the ComboboxList.",
      table: {
        category: "ComboboxList",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.ComboboxEmpty.children]: {
      description: "Set the children of the ComboboxEmpty.",
      table: {
        category: "ComboboxEmpty",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.ComboboxItem.inset]: {
      description: "Set whether the ComboboxItem has an inset.",
      table: {
        category: "ComboboxItem",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.ComboboxItem.children]: {
      description: "Set the children of the ComboboxItem.",
      table: {
        category: "ComboboxItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    maxHeight: {
      table: {
        disable: true,
      },
    },
  },
  decorators: (Story) => <Story />,
  render: (args) => {
    return (
      <div className="grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2">
        <Combobox>
          <ComboboxTrigger variant={args[Props.ComboboxTrigger.variant]}>
            Trigger (Click)
            <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxInput
              placeholder={args[Props.ComboboxInput.placeholder]}
            />
            <ComboboxList maxHeight={args[Props.ComboboxList.maxHeight]}>
              <ComboboxEmpty>
                {args[Props.ComboboxEmpty.children]}
              </ComboboxEmpty>
              <ComboboxGroup>
                <ComboboxItem>Item 1</ComboboxItem>
                <ComboboxItem>Item 2</ComboboxItem>
                <ComboboxItem
                  inset={args[Props.ComboboxItem.inset]}
                  onSelect={(value) => alert(value)}
                >
                  {args[Props.ComboboxItem.children]}
                </ComboboxItem>
              </ComboboxGroup>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxItem>
                  <Icon name="RiUserLine" size={16} className="mr-2" />
                  Profile
                  <ComboboxCaption>⇧⌘P</ComboboxCaption>
                </ComboboxItem>
                <ComboboxItem>
                  <Icon name="RiSettingsLine" size={16} className="mr-2" />
                  Billing
                  <ComboboxCaption>⌘B</ComboboxCaption>
                </ComboboxItem>
                <ComboboxItem>
                  <Icon name="RiLogoutBoxRLine" size={16} className="mr-2" />
                  Log out
                  <ComboboxCaption>⇧⌘Q</ComboboxCaption>
                </ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <Combobox>
          <ComboboxTrigger
            trigger="hover"
            variant={args[Props.ComboboxTrigger.variant]}
          >
            Trigger (Hover)
            <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
          </ComboboxTrigger>
          <ComboboxContent>
            <ComboboxInput
              placeholder={args[Props.ComboboxInput.placeholder]}
            />
            <ComboboxList maxHeight={args[Props.ComboboxList.maxHeight]}>
              <ComboboxEmpty>
                {args[Props.ComboboxEmpty.children]}
              </ComboboxEmpty>
              <ComboboxGroup>
                <ComboboxItem>Item 1</ComboboxItem>
                <ComboboxItem>Item 2</ComboboxItem>
                <ComboboxItem
                  inset={args[Props.ComboboxItem.inset]}
                  onSelect={(value) => alert(value)}
                >
                  {args[Props.ComboboxItem.children]}
                </ComboboxItem>
              </ComboboxGroup>
              <ComboboxSeparator />
              <ComboboxGroup>
                <ComboboxItem>
                  <Icon name="RiUserLine" size={16} className="mr-2" />
                  Profile
                  <ComboboxCaption>⇧⌘P</ComboboxCaption>
                </ComboboxItem>
                <ComboboxItem>
                  <Icon name="RiSettingsLine" size={16} className="mr-2" />
                  Billing
                  <ComboboxCaption>⌘B</ComboboxCaption>
                </ComboboxItem>
                <ComboboxItem>
                  <Icon name="RiLogoutBoxRLine" size={16} className="mr-2" />
                  Log out
                  <ComboboxCaption>⇧⌘Q</ComboboxCaption>
                </ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Select = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const fruits = [
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "banana",
      label: "Banana",
    },
    {
      value: "blueberry",
      label: "Blueberry",
    },
    {
      value: "grapes",
      label: "Grapes",
    },
    {
      value: "pineapple",
      label: "Pineapple",
    },
  ];

  return (
    <div className="grid">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          {value
            ? fruits.find((fruit) => fruit.value === value)?.label
            : "Select a fruit..."}
          <Icon name="RiArrowDownSLine" size={16} className="ml-auto" />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput placeholder="Placeholder..." />
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxGroup>
              {fruits.map((fruit) => (
                <ComboboxSelectItem
                  key={fruit.value}
                  value={fruit.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  checked={value === fruit.value}
                >
                  {fruit.label}
                </ComboboxSelectItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

export const Click = () => {
  const [open, setOpen] = React.useState(false);

  const fruits = [
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "banana",
      label: "Banana",
    },
    {
      value: "blueberry",
      label: "Blueberry",
    },
    {
      value: "grapes",
      label: "Grapes",
    },
    {
      value: "pineapple",
      label: "Pineapple",
    },
  ];

  return (
    <div className="grid">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          Button
          <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput placeholder="Placeholder..." />
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxGroup>
              {fruits.map((fruit) => (
                <ComboboxItem
                  key={fruit.value}
                  value={fruit.value}
                  onSelect={(currentValue) => {
                    alert(`${currentValue} clicked!`);
                    setOpen(false);
                  }}
                >
                  {fruit.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

export const Filter = () => {
  const [open, setOpen] = React.useState(false);

  const fruits = [
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "banana",
      label: "Banana",
    },
    {
      value: "blueberry",
      label: "Blueberry",
    },
    {
      value: "grapes",
      label: "Grapes",
    },
    {
      value: "pineapple",
      label: "Pineapple",
    },
  ];

  const filter = (value: string, search: string, keywords?: string[]) => {
    value = value.toLocaleLowerCase();
    search = search.toLocaleLowerCase();
    const normalizedKeywords = keywords?.map((k) => k.toLocaleLowerCase());
    return value.startsWith(search) ||
      normalizedKeywords?.some((keyword) => keyword.startsWith(search))
      ? 1
      : value.includes(search) ||
          normalizedKeywords?.some((keyword) => keyword.includes(search))
        ? 0.5
        : 0;
  };

  return (
    <div className="grid">
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          Button
          <Icon name="RiExpandUpDownLine" size={16} className="ml-auto" />
        </ComboboxTrigger>
        <ComboboxContent options={{ filter }}>
          <ComboboxInput placeholder="Placeholder..." />
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxGroup>
              {fruits.map((fruit) => (
                <ComboboxItem
                  key={fruit.value}
                  value={fruit.value}
                  onSelect={(currentValue) => {
                    alert(`${currentValue} clicked!`);
                    setOpen(false);
                  }}
                >
                  {fruit.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};
