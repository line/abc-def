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

import { Checkbox } from "@line/abc-def-react";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  args: {
    checked: undefined,
    disabled: false,
    children: "Label",
  },
  argTypes: {
    checked: {
      description: "Set the checked state of the Checkbox.",
      table: {
        category: "Checkbox",
        type: {
          summary: "boolean | indeterminate | undefined",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
      control: "select",
      options: [true, false, "indeterminate", undefined],
    },
    children: {
      description: "Set the children of the Checkbox.",
      table: {
        category: "Checkbox",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    disabled: {
      description: "Set whether the Checkbox is in a disabled state.",
      table: {
        category: "Checkbox",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="grid h-fit gap-4">
        <p>default (false)</p>
        <Checkbox />
      </div>
      <div className="grid h-fit gap-4">
        <p>checked</p>
        <Checkbox checked />
      </div>
      <div className="grid h-fit gap-4">
        <p>indeterminate</p>
        <Checkbox checked="indeterminate" />
      </div>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="grid h-fit gap-4">
        <p>default (false)</p>
        <Checkbox disabled />
      </div>
      <div className="grid h-fit gap-4">
        <p>checked</p>
        <Checkbox checked disabled />
      </div>
      <div className="grid h-fit gap-4">
        <p>indeterminate</p>
        <Checkbox checked="indeterminate" disabled />
      </div>
    </div>
  );
};

export const With_Label = () => {
  return (
    <div className="grid grid-cols-[repeat(3,max-content)] gap-4">
      <Checkbox size="medium">Label</Checkbox>
      <Checkbox size="medium" checked>
        Label
      </Checkbox>
      <Checkbox size="medium" checked="indeterminate">
        Label
      </Checkbox>
      <Checkbox size="medium" disabled>
        Label
      </Checkbox>
      <Checkbox size="medium" checked disabled>
        Label
      </Checkbox>
      <Checkbox size="medium" checked="indeterminate" disabled>
        Label
      </Checkbox>
    </div>
  );
};
