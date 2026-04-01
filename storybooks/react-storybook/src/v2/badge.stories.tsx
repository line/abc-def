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

import { Badge } from "@line/abc-def-react/v2";

const meta: Meta<typeof Badge> = {
  title: "Badge-v2",
  component: Badge,
  args: {
    variant: "bold",
    color: "default",
    children: "Label",
  },
  argTypes: {
    variant: {
      description: "Set the variant of the Badge.",
      table: {
        category: "Badge",
        defaultValue: {
          summary: "bold",
        },
        type: {
          summary: "bold | subtle | outline",
        },
      },
      control: "radio",
      options: ["bold", "subtle", "outline"],
    },
    color: {
      description: "Set the color of the Badge.",
      table: {
        category: "Badge",
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: "default | blue | orange | red | green",
        },
      },
      control: "radio",
      options: ["default", "blue", "orange", "red", "green"],
    },
    radius: {
      description: "Set the radius of the Badge.",
      table: {
        category: "Badge",
        defaultValue: {
          summary: "medium",
        },
        type: {
          summary: "small | medium | large",
        },
      },
      control: "radio",
      options: ["small", "medium", "large"],
    },
    children: {
      description: "Set the children of the Badge.",
      table: {
        category: "Badge",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
  },
  render: (args) => <Badge {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
