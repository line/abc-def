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

import { Icon, Tag } from "@abc-def/react";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  args: {
    variant: "primary",
    children: "Label",
  },
  argTypes: {
    variant: {
      description: "Set the variant of the Tag.",
      table: {
        category: "Tag",
        defaultValue: {
          summary: "primary",
        },
        type: {
          summary: "primary | secondary | outline | destructive",
        },
      },
      control: "radio",
      options: ["primary", "secondary", "outline", "destructive"],
    },
    children: {
      description: "Set the children of the Tag.",
      table: {
        category: "Tag",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    asChild: { table: { disable: true } },
    radius: { table: { disable: true } },
    size: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Tag size="small" radius="medium" variant="primary">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="primary">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="primary">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="primary">
      Label
    </Tag>
  </div>
);

export const Secondary = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Tag size="small" radius="medium" variant="secondary">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="secondary">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="secondary">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="secondary">
      Label
    </Tag>
  </div>
);

export const Destructive = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Tag size="small" radius="medium" variant="destructive">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="destructive">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="destructive">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="destructive">
      Label
    </Tag>
  </div>
);

export const Outline = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Tag size="small" radius="medium" variant="outline">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="outline">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="outline">
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="outline">
      Label
    </Tag>
  </div>
);

export const WithIcon = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Tag size="small" radius="medium" variant="primary">
      <Icon name="RiFlashlightFill" />
      Label
    </Tag>
    <Tag size="small" radius="medium" variant="secondary">
      Label
      <Icon name="RiCloseLargeLine" />
    </Tag>
    <Tag size="small" radius="medium" variant="outline">
      <Icon name="RiFlashlightFill" />
      Label
      <Icon name="RiCloseLargeLine" />
    </Tag>
    <Tag size="small" radius="medium" variant="destructive">
      <Icon name="RiFlashlightFill" />
      Label
      <Icon name="RiCloseLargeLine" />
    </Tag>
  </div>
);
