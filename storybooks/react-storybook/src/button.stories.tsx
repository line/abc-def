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

import { Button, Icon } from "@abc-def/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    variant: "primary",
    size: undefined,
    radius: undefined,
    loading: false,
    disabled: false,
    children: "Button",
  },
  argTypes: {
    size: {
      description: "Set the size of the Button.",
      table: {
        category: "Button",
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
    radius: {
      description: "Set the radius of the Button.",
      table: {
        category: "Button",
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
    variant: {
      description: "Set the variant of the Button.",
      table: {
        category: "Button",
        defaultValue: {
          summary: "primary",
        },
        type: {
          summary: "primary | secondary | destructive | ghost | outline",
        },
      },
      control: "select",
      options: ["primary", "secondary", "destructive", "ghost", "outline"],
    },
    children: {
      description: "Set the children of the Button.",
      table: {
        category: "Button",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    loading: {
      description: "Set whether the Button is in a loading state.",
      table: {
        category: "Button",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    disabled: {
      description: "Set whether the Button is in a disabled state.",
      table: {
        category: "Button",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Size = () => (
  <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

export const Variant = () => (
  <div className="grid grid-cols-[repeat(5,max-content)] gap-2">
    <Button size="small" variant="primary">
      Primary
    </Button>
    <Button size="small" variant="secondary">
      Secondary
    </Button>
    <Button size="small" variant="destructive">
      Destructive
    </Button>
    <Button size="small" variant="ghost">
      Ghost
    </Button>
    <Button size="small" variant="outline">
      Outline
    </Button>
  </div>
);

export const State = () => (
  <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small" variant="primary">
      Primary
    </Button>
    <Button size="small" variant="primary" loading>
      Primary
    </Button>
    <Button size="small" variant="primary" disabled>
      Primary
    </Button>
  </div>
);

export const WithSlotL = () => (
  <Button size="small" variant="primary">
    <Icon name="RiFlashlightFill" />
    Primary
  </Button>
);

export const WithSlotR = () => (
  <Button size="small" variant="primary">
    Primary
    <Icon name="RiFlashlightFill" />
  </Button>
);

export const WithSlotLR = () => (
  <Button size="small" variant="primary">
    <Icon name="RiFlashlightFill" />
    Primary
    <Icon name="RiFlashlightFill" />
  </Button>
);

export const OnlyIcon = () => (
  <div className="grid grid-cols-[repeat(3,max-content)] gap-2">
    <Button size="small" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
    <Button size="medium" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
    <Button size="large" variant="primary">
      <Icon name="RiFlashlightFill" />
    </Button>
  </div>
);
