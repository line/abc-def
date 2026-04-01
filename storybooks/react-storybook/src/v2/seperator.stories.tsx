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

import { Separator } from "@line/abc-def-react/v2";

const meta: Meta<typeof Separator> = {
  title: "Separator-v2",
  args: {
    variant: "subtle",
    orientation: "horizontal",
  },
  argTypes: {
    variant: {
      description: "Set the variant of the Separator.",
      table: {
        category: "Separator",
        defaultValue: {
          summary: "subtle",
        },
        type: {
          summary: "bold | subtle",
        },
      },
      control: "select",
      options: ["bold", "subtle"],
    },
    orientation: {
      description: "Set the orientation of the Separator.",
      table: {
        category: "Separator",
        defaultValue: {
          summary: "horizontal",
        },
        type: {
          summary: "horizontal | vertical",
        },
      },
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  render: (args) => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <Separator {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  );
}

export function SeparatorMenu() {
  return (
    <div className="flex items-center gap-2 text-sm md:gap-4">
      <div className="flex flex-col gap-1">
        <span className="font-medium">Settings</span>
        <span className="text-muted-foreground text-xs">
          Manage preferences
        </span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">Account</span>
        <span className="text-muted-foreground text-xs">
          Profile & security
        </span>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="hidden flex-col gap-1 md:flex">
        <span className="font-medium">Help</span>
        <span className="text-muted-foreground text-xs">Support & docs</span>
      </div>
    </div>
  );
}

export function SeparatorList() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      <dl className="flex items-center justify-between">
        <dt>Item 1</dt>
        <dd className="text-muted-foreground">Value 1</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>Item 2</dt>
        <dd className="text-muted-foreground">Value 2</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>Item 3</dt>
        <dd className="text-muted-foreground">Value 3</dd>
      </dl>
    </div>
  );
}
