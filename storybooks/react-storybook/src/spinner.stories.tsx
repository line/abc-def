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

import { Spinner } from "@line/abc-def-react";

const meta: Meta<typeof Spinner> = {
  title: "Spinner",
  component: Spinner,
  argTypes: {
    size: {
      description: "Set the size of the Spinner.",
      table: {
        category: "Spinner",
        type: {
          summary: "small | medium | large",
        },
        defaultValue: {
          summary: "medium",
        },
      },
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      description: "Set the color of the Spinner.",
      table: {
        category: "Spinner",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "currentColor",
        },
      },
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Size = () => (
  <div className="grid grid-cols-3 gap-4">
    <div className="grid gap-4">
      <p>Small</p>
      <Spinner size="small" />
    </div>
    <div className="grid gap-4">
      <p>Medium</p>
      <Spinner size="medium" />
    </div>
    <div className="grid gap-4">
      <p>Large</p>
      <Spinner size="large" />
    </div>
  </div>
);
