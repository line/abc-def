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

import { ScrollArea, ScrollBar } from "@abc-def/react";

const meta: Meta<
  React.ComponentProps<typeof ScrollArea> & {
    orientation: "horizontal" | "vertical";
  }
> = {
  title: "ScrollArea",
  component: ScrollArea,
  args: {
    type: "auto",
    orientation: "vertical",
    maxWidth: "18rem",
    maxHeight: "7.5rem",
  },
  argTypes: {
    type: {
      description: "Set the type of the ScrollArea scrollbar visibility.",
      table: {
        category: "ScrollArea",
        type: {
          summary: "auto | always | scroll | hover",
        },
        defaultValue: {
          summary: "auto",
        },
      },
      control: "select",
      options: ["auto", "always", "scroll", "hover"],
    },
    orientation: {
      description: "Set the scroll direction orientation of the ScrollArea.",
      table: {
        category: "ScrollArea",
        type: {
          summary: "horizontal | vertical",
        },
        defaultValue: {
          summary: "vertical",
        },
      },
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    maxWidth: {
      description: "Set the maximum width of the ScrollArea.",
      table: {
        category: "ScrollArea",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    maxHeight: {
      description: "Set the maximum height of the ScrollArea.",
      table: {
        category: "ScrollArea",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
  },
  render: ({ type, maxWidth, maxHeight, orientation }) => (
    <ScrollArea
      type={type}
      className="rounded-lg border border-[var(--border-neutral-tertiary)]"
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    >
      <p
        className={
          orientation === "horizontal"
            ? "bg-secondary whitespace-nowrap p-2"
            : "bg-secondary p-2"
        }
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sunt
        blanditiis. Eaque impedit voluptate quis quod incidunt, possimus
        eligendi ducimus quisquam assumenda deserunt accusamus nam odio itaque
        delectus natus nemo?
      </p>
      <ScrollBar orientation={orientation} />
    </ScrollArea>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical = () => (
  <ScrollArea
    className="rounded-lg border border-[var(--border-neutral-tertiary)]"
    maxWidth="18rem"
    maxHeight="7.5rem"
  >
    <p className="bg-secondary p-2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sunt
      blanditiis. Eaque impedit voluptate quis quod incidunt, possimus eligendi
      ducimus quisquam assumenda deserunt accusamus nam odio itaque delectus
      natus nemo?
    </p>
    <ScrollBar orientation="vertical" />
  </ScrollArea>
);

export const Horizontal = () => (
  <ScrollArea
    className="rounded-lg border border-[var(--border-neutral-tertiary)]"
    maxWidth="18rem"
    maxHeight="7.5rem"
  >
    <p className="bg-secondary whitespace-nowrap p-2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, sunt
      blanditiis. Eaque impedit voluptate quis quod incidunt, possimus eligendi
      ducimus quisquam assumenda deserunt accusamus nam odio itaque delectus
      natus nemo?
    </p>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);
