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

import { Switch } from "@line/abc-def-react";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  args: {
    color: "default",
    disabled: false,
    children: "Label",
  },
  argTypes: {
    color: {
      description: "Set the active color of the Switch.",
      table: {
        category: "Switch",
        type: {
          summary: "default | blue | orange | red | green",
        },
        defaultValue: {
          summary: "default",
        },
      },
      control: "radio",
      options: ["default", "blue", "orange", "red", "green"],
    },
    disabled: {
      description: "Set whether the Switch is in a disabled state.",
      table: {
        category: "Switch",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    children: {
      description: "Set the children of the Switch.",
      table: {
        category: "Switch",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Color_Default = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Switch color="default" checked>
      Label
    </Switch>
    <Switch color="default" checked disabled>
      Label
    </Switch>
    <Switch color="default">Label</Switch>
    <Switch color="default" disabled>
      Label
    </Switch>
  </div>
);

export const Color_Blue = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Switch color="blue" checked>
      Label
    </Switch>
    <Switch color="blue" checked disabled>
      Label
    </Switch>
    <Switch color="blue">Label</Switch>
    <Switch color="blue" disabled>
      Label
    </Switch>
  </div>
);

export const Color_Orange = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Switch color="orange" checked>
      Label
    </Switch>
    <Switch color="orange" checked disabled>
      Label
    </Switch>
    <Switch color="orange">Label</Switch>
    <Switch color="orange" disabled>
      Label
    </Switch>
  </div>
);

export const Color_Red = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Switch color="red" checked>
      Label
    </Switch>
    <Switch color="red" checked disabled>
      Label
    </Switch>
    <Switch color="red">Label</Switch>
    <Switch color="red" disabled>
      Label
    </Switch>
  </div>
);

export const Color_Green = () => (
  <div className="grid grid-cols-[repeat(4,max-content)] gap-2">
    <Switch color="green" checked>
      Label
    </Switch>
    <Switch color="green" checked disabled>
      Label
    </Switch>
    <Switch color="green">Label</Switch>
    <Switch color="green" disabled>
      Label
    </Switch>
  </div>
);
