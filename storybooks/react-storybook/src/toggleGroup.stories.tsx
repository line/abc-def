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

import { Icon, ToggleGroup, ToggleGroupItem } from "@abc-def/react";

const Props = {
  ToggleGroupItem: {
    children: "↳ ToggleGroupItem: children",
    disabled: "↳ ToggleGroupItem: disabled",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof ToggleGroup> & {
    [Props.ToggleGroupItem.children]?: React.ComponentPropsWithoutRef<
      typeof ToggleGroupItem
    >["children"];
    [Props.ToggleGroupItem.disabled]?: React.ComponentPropsWithoutRef<
      typeof ToggleGroupItem
    >["disabled"];
  }
> = {
  title: "ToggleGroup",
  component: ToggleGroup,
  args: {
    type: "single",
    [Props.ToggleGroupItem.children]: "ToggleGroupItem",
    [Props.ToggleGroupItem.disabled]: false,
  },
  argTypes: {
    type: {
      description:
        "Set whether the ToggleGroup is single or multiple selection type.",
      table: {
        category: "ToggleGroup",
        defaultValue: {
          summary: "single",
        },
        type: {
          summary: "single | multiple",
        },
      },
      control: "radio",
      options: ["single", "multiple"],
    },
    [Props.ToggleGroupItem.children]: {
      description: "Set the children of the ToggleGroupItem.",
      table: {
        category: "ToggleGroupItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.ToggleGroupItem.disabled]: {
      description: "Set whether the ToggleGroupItem is in a disabled state.",
      table: {
        category: "ToggleGroupItem",
      },
      control: "boolean",
    },
  },
  render: (args) => (
    <ToggleGroup type={args.type}>
      <ToggleGroupItem value="item-1">
        <Icon name="RiFlashlightFill" size={20} />
        Item 1
      </ToggleGroupItem>
      <ToggleGroupItem value="item-2">
        <Icon name="RiFlashlightFill" size={20} />
        Item 2
      </ToggleGroupItem>
      <ToggleGroupItem
        value="item-3"
        disabled={args[Props.ToggleGroupItem.disabled]}
      >
        <Icon name="RiFlashlightFill" size={20} />
        {args[Props.ToggleGroupItem.children]}
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Default: Story = {};

export const OnlyIcon = () => (
  <ToggleGroup type="single">
    <ToggleGroupItem value="item-1">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-2">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-3">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-4">
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      <Icon name="RiFlashlightFill" size={20} />
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Text = () => (
  <ToggleGroup type="single">
    <ToggleGroupItem value="item-1">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-2">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-3">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-4">Single</ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      Disabled
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Icon_With_Text = () => (
  <ToggleGroup type="single">
    <ToggleGroupItem value="item-1">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-2">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-3">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-4">
      <Icon name="RiFlashlightFill" size={20} />
      Single
    </ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      <Icon name="RiFlashlightFill" size={20} />
      Disabled
    </ToggleGroupItem>
  </ToggleGroup>
);

export const Multiple = () => (
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="item-1">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-2">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-3">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-4">
      <Icon name="RiFlashlightFill" size={20} />
      Multiple
    </ToggleGroupItem>
    <ToggleGroupItem value="item-5" disabled>
      <Icon name="RiFlashlightFill" size={20} />
      Disabled
    </ToggleGroupItem>
  </ToggleGroup>
);
