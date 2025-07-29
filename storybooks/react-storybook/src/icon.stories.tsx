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

import { Icon, IconNames } from "@line/abc-def-react";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  args: {
    name: "RiFlashlightFill",
    color: undefined,
    size: 24,
  },
  argTypes: {
    name: {
      description: "Set the name of the Icon.",
      table: {
        category: "Icon",
        type: {
          summary: "IconNames",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
      control: "select",
      options: IconNames,
    },
    color: {
      description: "Set the color of the Icon.",
      table: {
        category: "Icon",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "currentColor",
        },
      },
    },
    size: {
      description: "Set the size of the Icon.",
      table: {
        category: "Icon",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "24",
        },
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Examples = () => (
  <div className="grid grid-cols-10 gap-2">
    {IconNames.map((icon, index) => (
      <Icon key={index} name={icon} />
    ))}
  </div>
);
