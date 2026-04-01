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

import { Checkbox, Field, FieldLabel, Label } from "@line/abc-def-react/v2";

const meta: Meta<typeof Label> = {
  title: "Label-v2",
  render: () => (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export function DefaultLabel() {
  return <Label htmlFor="email">Your email address</Label>;
}

export function LabelInField() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Your email address</FieldLabel>
      <input id="email" />
    </Field>
  );
}
