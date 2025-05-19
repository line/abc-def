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
import { useState } from "react";

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@abc-def/react";

const meta: Meta<typeof TooltipContent> = {
  title: "Tooltip",
  component: Tooltip,
  args: {
    side: "top",
    textAlign: "center",
    align: "center",
    title: "Title",
    children: "Label",
  },
  argTypes: {
    side: {
      description: "Set the side where the Tooltip appears.",
      table: {
        category: "Tooltip",
        type: {
          summary: "undefined | top | right | bottom | left",
        },
      },
      control: "radio",
      options: ["top", "right", "bottom", "left"],
    },
    textAlign: {
      description: "Set the text alignment of the Tooltip.",
      table: {
        category: "Tooltip",
        type: {
          summary: "left | center | right",
        },
        defaultValue: {
          summary: "left",
        },
      },
      control: "radio",
      options: ["left", "center", "right"],
    },
    align: {
      description: "Set the alignment of the Tooltip bubble.",
      table: {
        category: "Tooltip",
        type: {
          summary: "start | center | end",
        },
        defaultValue: {
          summary: "center",
        },
      },
      control: "radio",
      options: ["start", "center", "end"],
    },
    title: {
      description: "Set the title of the Tooltip.",
      table: {
        category: "Tooltip",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    children: {
      description: "Set the children of the Tooltip.",
      table: {
        category: "Tooltip",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
  },
  decorators: (Story) => <Story />,
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2">
        <TooltipProvider>
          <Tooltip open={open}>
            <TooltipTrigger asChild>
              <Button variant="outline" onClick={() => setOpen(!open)}>
                Click
              </Button>
            </TooltipTrigger>
            <TooltipContent {...args} />
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent {...args} />
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Right = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "7.5rem",
      }}
    >
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="right" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export const Bottom = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "7.5rem",
      }}
    >
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="bottom" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export const Left = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "7.5rem",
      }}
    >
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="left" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export const Top = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "7.5rem",
      }}
    >
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger onClick={() => setOpen(!open)}>
            Trigger
          </TooltipTrigger>
          <TooltipContent side="top" title="Title">
            Label
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
