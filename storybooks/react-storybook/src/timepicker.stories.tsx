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
import React from "react";

import { TimePicker } from "@abc-def/react";

const meta: Meta<typeof TimePicker> = {
  title: "TimePicker",
  component: TimePicker,
  args: {
    hourCycle: 24,
    granularity: "second",
  },
  argTypes: {
    hourCycle: {
      description: "Set the hourCycle in the TimePicker.",
      table: {
        category: "TimePicker",
        defaultValue: {
          summary: "24",
        },
        type: {
          summary: "12 | 24",
        },
      },
      control: "select",
      options: [12, 24],
    },
    granularity: {
      description: "Set the smallest unit that is displayed in the TimePicker.",
      table: {
        category: "TimePicker",
        defaultValue: {
          summary: "second",
        },
        type: {
          summary: "hour | minute | second",
        },
      },
      control: "select",
      options: ["hour", "minute", "second"],
    },
    date: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
  decorators: (Story) => <Story />,
  render: ({ hourCycle, granularity }) => {
    const [time, setTime] = React.useState<Date | undefined>(new Date());
    return (
      <TimePicker
        date={time}
        onChange={setTime}
        hourCycle={hourCycle}
        granularity={granularity}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} as Story;
