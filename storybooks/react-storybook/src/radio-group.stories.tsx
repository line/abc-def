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

import { RadioGroup, RadioItem } from "@line/abc-def-react";

const Props = {
  RadioItem: {
    disabled: "↳ RadioItem: disabled",
    children: "↳ RadioItem: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof RadioGroup> & {
    [Props.RadioItem.disabled]: React.ComponentPropsWithoutRef<
      typeof RadioItem
    >["disabled"];
    [Props.RadioItem.children]: React.ComponentPropsWithoutRef<
      typeof RadioItem
    >["children"];
  }
> = {
  title: "RadioGroup",
  component: RadioGroup,
  args: {
    orientation: "horizontal",
    [Props.RadioItem.disabled]: false,
    [Props.RadioItem.children]: "Custom",
  },
  argTypes: {
    orientation: {
      description: "Set the orientation of the RadioGroup.",
      table: {
        category: "RadioGroup",
        type: {
          summary: "horizontal | vertical",
        },
        defaultValue: {
          summary: "horizontal",
        },
      },
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    [Props.RadioItem.disabled]: {
      description: "Set whether the RadioItem is in a disabled state.",
      table: {
        category: "RadioItem",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.RadioItem.children]: {
      description: "Set the children of the RadioItem.",
      table: {
        category: "RadioItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
  },
  decorators: (Story) => <Story />,
  render: (args) => (
    <RadioGroup defaultValue="comfortable" {...args}>
      <RadioItem value="default" id="r1">
        Default
      </RadioItem>
      <RadioItem value="comfortable" id="r2">
        Comfortable
      </RadioItem>
      <RadioItem
        value="compact"
        id="r3"
        disabled={args[Props.RadioItem.disabled]}
      >
        {args[Props.RadioItem.children]}
      </RadioItem>
    </RadioGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal = () => (
  <RadioGroup>
    <RadioItem value="value-item-1" id="r1">
      Item 1
    </RadioItem>
    <RadioItem value="value-item-2" id="r2">
      Item 2
    </RadioItem>
    <RadioItem value="value-item-3" id="r3" disabled>
      Item 3
    </RadioItem>
  </RadioGroup>
);

export const Vertical = () => (
  <RadioGroup orientation="vertical">
    <RadioItem value="value-item-1" id="r1">
      Item 1
    </RadioItem>
    <RadioItem value="value-item-2" id="r2">
      Item 2
    </RadioItem>
    <RadioItem value="value-item-3" id="r3" disabled>
      Item 3
    </RadioItem>
  </RadioGroup>
);
