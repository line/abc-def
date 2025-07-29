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

import { Divider } from "@line/abc-def-react";

const meta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  args: {
    variant: "bold",
    orientation: "horizontal",
    indent: 0,
  },
  argTypes: {
    variant: {
      description: "Set the variant of the Divider.",
      table: {
        category: "Divider",
        type: {
          summary: "bold | subtle",
        },
        defaultValue: {
          summary: "bold",
        },
      },
      control: "radio",
      options: ["bold", "subtle"],
    },
    orientation: {
      description: "Set the orientation of the Divider.",
      table: {
        category: "Divider",
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
    indent: {
      description: "Set the indent of the Divider.",
      table: {
        category: "Divider",
        type: {
          summary: "0 | 8 | 16 | 24",
        },
        defaultValue: {
          summary: "0",
        },
      },
      control: "radio",
      options: [0, 8, 16, 24],
    },
    decorative: {
      table: {
        disable: true,
      },
    },
  },
  render: (props) => (
    <div style={{ display: "flex", height: "100px" }}>
      <Divider {...props} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bold: Story = {
  args: {
    variant: "bold",
  },
};

export const Subtle: Story = {
  args: {
    variant: "subtle",
  },
};

export const Vertical = () => (
  <div className="flex h-6 items-center justify-center space-x-4 text-sm">
    <Divider variant="bold" orientation="vertical" />
    <div>Item</div>
    <Divider variant="subtle" orientation="vertical" />
    <div>Item</div>
    <Divider variant="subtle" orientation="vertical" />
    <div>Item</div>
    <Divider variant="bold" orientation="vertical" />
  </div>
);

export const Horizontal = () => (
  <div className="mx-10 flex w-16 flex-col items-center justify-center space-y-2 text-center text-sm">
    <Divider variant="bold" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="subtle" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="subtle" orientation="horizontal" />
    <div>Item</div>
    <Divider variant="bold" orientation="horizontal" />
  </div>
);
