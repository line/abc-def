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

import { Badge } from "@abc-def/react";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  args: {
    variant: "bold",
    color: "default",
    radius: undefined,
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
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variant_Bold: Story = {
  args: {
    variant: "bold",
  },
};

export const Variant_Subtle: Story = {
  args: {
    variant: "subtle",
  },
};

export const Variant_Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Color_Default = () => (
  <div className="grid grid-cols-[repeat(3,min-content)] gap-2">
    <Badge variant="bold" color="default">
      Label
    </Badge>
    <Badge variant="subtle" color="default">
      Label
    </Badge>
    <Badge variant="outline" color="default">
      Label
    </Badge>
  </div>
);

export const Color_Blue = () => (
  <div className="grid grid-cols-[repeat(3,min-content)] gap-2">
    <Badge variant="bold" color="blue">
      Label
    </Badge>
    <Badge variant="subtle" color="blue">
      Label
    </Badge>
    <Badge variant="outline" color="blue">
      Label
    </Badge>
  </div>
);

export const Color_Orange = () => (
  <div className="grid grid-cols-[repeat(3,min-content)] gap-2">
    <Badge variant="bold" color="orange">
      Label
    </Badge>
    <Badge variant="subtle" color="orange">
      Label
    </Badge>
    <Badge variant="outline" color="orange">
      Label
    </Badge>
  </div>
);

export const Color_Red = () => (
  <div className="grid grid-cols-[repeat(3,min-content)] gap-2">
    <Badge variant="bold" color="red">
      Label
    </Badge>
    <Badge variant="subtle" color="red">
      Label
    </Badge>
    <Badge variant="outline" color="red">
      Label
    </Badge>
  </div>
);

export const Color_Green = () => (
  <div className="grid grid-cols-[repeat(3,min-content)] gap-2">
    <Badge variant="bold" color="green">
      Label
    </Badge>
    <Badge variant="subtle" color="green">
      Label
    </Badge>
    <Badge variant="outline" color="green">
      Label
    </Badge>
  </div>
);
