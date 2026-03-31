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

import { Button, Icon } from "@line/abc-def-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@line/abc-def-react/v2";

const meta: Meta<React.ComponentProps<typeof Alert>> = {
  title: "Alert-v2",
  component: Alert,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      description: "Set the variant of the Alert.",
      table: {
        category: "Alert",
        defaultValue: {
          summary: "default",
        },
        type: {
          summary: "default | warning | success | error | informative",
        },
      },
      control: "select",
      options: ["default", "warning", "success", "error", "informative"],
    },
  },
  render: (args) => (
    <Alert variant={args.variant}>
      <Icon name="RiAccountCircle2Line" />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
        <a>123</a>
      </AlertDescription>
      <AlertAction>
        <Button>123</Button>
      </AlertAction>
    </Alert>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
