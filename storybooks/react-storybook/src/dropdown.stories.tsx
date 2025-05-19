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

import type { DropdownMenuCheckboxItemProps } from "@abc-def/react";
import {
  Button,
  Dropdown,
  DropdownCaption,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  Icon,
} from "@abc-def/react";

const Props = {
  DropdownContent: {
    side: "↳ DropdownContent: side",
    maxHeight: "↳ DropdownContent: maxHeight",
  },
  DropdownItem: {
    caption: "↳ DropdownItem: caption",
    inset: "↳ DropdownItem: inset",
    children: "↳ DropdownItem: children",
  },
  DropdownSubTrigger: {
    caption: "↳ DropdownSubTrigger: caption",
    inset: "↳ DropdownSubTrigger: inset",
    children: "↳ DropdownSubTrigger: children",
  },
  DropdownLabel: {
    children: "↳ DropdownLabel: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Dropdown> & {
    [Props.DropdownContent.side]: React.ComponentPropsWithoutRef<
      typeof DropdownContent
    >["side"];
    [Props.DropdownContent.maxHeight]: React.ComponentPropsWithoutRef<
      typeof DropdownContent
    >["maxHeight"];
    [Props.DropdownItem.inset]: React.ComponentPropsWithoutRef<
      typeof DropdownItem
    >["inset"];
    [Props.DropdownItem.children]: React.ComponentPropsWithoutRef<
      typeof DropdownItem
    >["children"];
    [Props.DropdownSubTrigger.inset]: React.ComponentPropsWithoutRef<
      typeof DropdownSubTrigger
    >["inset"];
    [Props.DropdownSubTrigger.children]: React.ComponentPropsWithoutRef<
      typeof DropdownSubTrigger
    >["children"];
    [Props.DropdownLabel.children]: React.ComponentPropsWithoutRef<
      typeof DropdownLabel
    >["children"];
  }
> = {
  title: "Dropdown",
  component: Dropdown,
  args: {
    [Props.DropdownContent.side]: "right",
    [Props.DropdownContent.maxHeight]: "300px",
    [Props.DropdownLabel.children]: "Title",
    [Props.DropdownItem.inset]: false,
    [Props.DropdownItem.children]: "DropdownItem",
    [Props.DropdownSubTrigger.inset]: false,
    [Props.DropdownSubTrigger.children]: "DropdownSubTrigger",
  },
  argTypes: {
    [Props.DropdownContent.side]: {
      description: "Set the side where the DropdownContent appears.",
      table: {
        category: "DropdownContent",
        defaultValue: {
          summary: "bottom",
        },
        type: {
          summary: "top | right | bottom | left",
        },
      },
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    [Props.DropdownContent.maxHeight]: {
      description: "Set the maxHeight of the DropdownContent.",
      table: {
        category: "DropdownContent",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.DropdownItem.inset]: {
      description: "Set whether the DropdownItem has an inset.",
      table: {
        category: "DropdownItem",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.DropdownItem.children]: {
      description: "Set the children of the DropdownItem.",
      table: {
        category: "DropdownItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.DropdownSubTrigger.inset]: {
      description: "Set whether the DropdownSubTrigger has an inset.",
      table: {
        category: "DropdownSubTrigger",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.DropdownSubTrigger.children]: {
      description: "Set the children of the DropdownSubTrigger.",
      table: {
        category: "DropdownSubTrigger",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    [Props.DropdownLabel.children]: {
      description: "DropdownLabel의 children을 설정합니다.",
      table: {
        category: "DropdownLabel",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    open: {
      table: {
        disable: true,
      },
    },
  },
  decorators: (Story) => <Story />,
  render: (args) => {
    return (
      <div className="grid h-28 grid-cols-[repeat(2,max-content)] items-center justify-center gap-2">
        <Dropdown>
          <DropdownTrigger>Trigger (Click)</DropdownTrigger>
          <DropdownContent
            className="min-w-56"
            side={args[Props.DropdownContent.side]}
            maxHeight={args[Props.DropdownContent.maxHeight]}
          >
            <DropdownLabel>{args[Props.DropdownLabel.children]}</DropdownLabel>
            <DropdownSeparator />
            <DropdownGroup>
              <DropdownItem>
                <Icon name="RiUserLine" size={16} className="mr-2" />
                Profile
                <DropdownCaption>⇧⌘P</DropdownCaption>
              </DropdownItem>
              <DropdownItem>
                <Icon name="RiSettingsLine" size={16} className="mr-2" />
                Billing
                <DropdownCaption>⌘B</DropdownCaption>
              </DropdownItem>
              <DropdownItem inset={args[Props.DropdownItem.inset]}>
                <Icon name="Ri24HoursFill" size={16} className="mr-2" />
                {args[Props.DropdownItem.children]}
              </DropdownItem>
              <DropdownSub>
                <DropdownSubTrigger
                  inset={args[Props.DropdownSubTrigger.inset]}
                >
                  <Icon name="Ri24HoursFill" size={16} className="mr-2" />
                  {args[Props.DropdownSubTrigger.children]}
                  <Icon
                    name="RiArrowRightSLine"
                    size={16}
                    className="ml-auto"
                  />
                </DropdownSubTrigger>
                <DropdownPortal>
                  <DropdownSubContent>
                    <DropdownItem>User 1</DropdownItem>
                    <DropdownItem>User 2</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem>More...</DropdownItem>
                  </DropdownSubContent>
                </DropdownPortal>
              </DropdownSub>
            </DropdownGroup>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger trigger="hover">Trigger (Hover)</DropdownTrigger>
          <DropdownContent
            className="min-w-56"
            side={args[Props.DropdownContent.side]}
            maxHeight={args[Props.DropdownContent.maxHeight]}
          >
            <DropdownLabel>{args[Props.DropdownLabel.children]}</DropdownLabel>
            <DropdownSeparator />
            <DropdownGroup>
              <DropdownItem>
                <Icon name="RiUserLine" size={16} className="mr-2" />
                Profile
                <DropdownCaption>⇧⌘P</DropdownCaption>
              </DropdownItem>
              <DropdownItem>
                <Icon name="RiSettingsLine" size={16} className="mr-2" />
                Billing
                <DropdownCaption>⌘B</DropdownCaption>
              </DropdownItem>
              <DropdownItem inset={args[Props.DropdownItem.inset]}>
                <Icon name="Ri24HoursFill" size={16} className="mr-2" />
                {args[Props.DropdownItem.children]}
              </DropdownItem>
              <DropdownSub>
                <DropdownSubTrigger
                  inset={args[Props.DropdownSubTrigger.inset]}
                >
                  <Icon name="Ri24HoursFill" size={16} className="mr-2" />
                  {args[Props.DropdownSubTrigger.children]}
                  <Icon
                    name="RiArrowRightSLine"
                    size={16}
                    className="ml-auto"
                  />
                </DropdownSubTrigger>
                <DropdownPortal>
                  <DropdownSubContent>
                    <DropdownItem>User 1</DropdownItem>
                    <DropdownItem>User 2</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem>More...</DropdownItem>
                  </DropdownSubContent>
                </DropdownPortal>
              </DropdownSub>
            </DropdownGroup>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const Checkbox = () => {
  const [showLabel, setShowLabel] = React.useState<Checked>(true);
  const [showLabel2, setShowLabel2] = React.useState<Checked>(false);
  const [showLabel3, setShowLabel3] = React.useState<Checked>(false);
  const [showLabel4, setShowLabel4] = React.useState<Checked>(false);
  const [showLabel5, setShowLabel5] = React.useState<Checked>(false);

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Dropdown (Checkbox)</Button>
      </DropdownTrigger>
      <DropdownContent className="w-56">
        <DropdownLabel>Title</DropdownLabel>
        <DropdownSeparator />
        <DropdownCheckboxItem
          checked={showLabel}
          onCheckedChange={setShowLabel}
        >
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem
          checked={showLabel2}
          onCheckedChange={setShowLabel2}
        >
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem
          checked={showLabel3}
          onCheckedChange={setShowLabel3}
        >
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem
          checked={showLabel4}
          onCheckedChange={setShowLabel4}
        >
          Label
        </DropdownCheckboxItem>
        <DropdownCheckboxItem
          checked={showLabel5}
          onCheckedChange={setShowLabel5}
          disabled
        >
          Label (Disabled)
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
  );
};

export const Radio = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Dropdown (Radio)</Button>
      </DropdownTrigger>
      <DropdownContent className="w-56">
        <DropdownLabel>Title</DropdownLabel>
        <DropdownSeparator />
        <DropdownRadioGroup value={position} onValueChange={setPosition}>
          <DropdownRadioItem value="label1">Label</DropdownRadioItem>
          <DropdownRadioItem value="label2">Label</DropdownRadioItem>
          <DropdownRadioItem value="label3">Label</DropdownRadioItem>
          <DropdownRadioItem value="label4">Label</DropdownRadioItem>
          <DropdownRadioItem value="label5" disabled>
            Label (Disabled)
          </DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>
  );
};
