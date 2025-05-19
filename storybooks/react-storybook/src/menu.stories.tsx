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

import {
  Badge,
  Icon,
  Menu,
  MenuDropdown,
  MenuDropdownContent,
  MenuDropdownGroup,
  MenuDropdownItem,
  MenuDropdownTrigger,
  MenuItem,
} from "@abc-def/react";

const Props = {
  MenuItem: {
    disabled: "↳ MenuItem: disabled",
    children: "↳ MenuItem: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Menu> & {
    [Props.MenuItem.disabled]: React.ComponentPropsWithoutRef<
      typeof MenuItem
    >["disabled"];
    [Props.MenuItem.children]: React.ComponentPropsWithoutRef<
      typeof MenuItem
    >["children"];
  }
> = {
  title: "Menu",
  component: Menu,
  args: {
    type: "single",
    orientation: "horizontal",
    [Props.MenuItem.disabled]: false,
    [Props.MenuItem.children]: "MenuItem",
  },
  argTypes: {
    type: {
      description: "Set the single or multiple selection type of the Menu.",
      table: {
        category: "Menu",
        type: {
          summary: "single | multiple",
        },
        defaultValue: {
          summary: "single",
        },
      },
      control: "radio",
      options: ["single", "multiple"],
    },
    orientation: {
      description: "Set the orientation of the Menu.",
      table: {
        category: "Menu",
        type: {
          summary: "horizontal | vertical",
        },
        defaultValue: {
          summary: "horizontal",
        },
      },
      control: "radio",
      options: ["vertical", "horizontal"],
    },
    [Props.MenuItem.disabled]: {
      description: "Set whether the MenuItem is in a disabled state.",
      table: {
        category: "MenuItem",
        defaultValue: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    [Props.MenuItem.children]: {
      description: "Set the children of the MenuItem.",
      table: {
        category: "MenuItem",
        type: {
          summary: "React.ReactNode",
        },
      },
      control: "text",
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  decorators: (Story) => <Story />,
  render: (args) => (
    <Menu type={args.type}>
      <MenuItem value="Home">
        <Icon name="RiHomeSmile2Fill" size={16} className="mr-2" />
        Home
        <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
      </MenuItem>
      <MenuItem value="List">
        <Icon name="RiFunctionFill" size={16} className="mr-2" />
        List
        <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
      </MenuItem>
      <MenuItem value="Custom" disabled={args[Props.MenuItem.disabled]}>
        <Icon name="RiSettingsFill" size={16} className="mr-2" />
        {args[Props.MenuItem.children]}
        <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
      </MenuItem>
    </Menu>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Default: Story = {};

export const Horizontal = () => (
  <Menu type="single" orientation="horizontal">
    <MenuItem value="Home">Home</MenuItem>
    <MenuItem value="List">List</MenuItem>
    <MenuItem value="Setting">Setting</MenuItem>
    <MenuItem value="Disabled" disabled>
      Disabled
    </MenuItem>
  </Menu>
);

export const Horizontal_With_LeftIcon = () => (
  <Menu type="single" orientation="horizontal">
    <MenuItem value="Home">
      <Icon name="RiHomeSmile2Fill" size={16} className="mr-2" />
      Home
    </MenuItem>
    <MenuItem value="List">
      <Icon name="RiFunctionFill" size={16} className="mr-2" />
      List
    </MenuItem>
    <MenuItem value="Setting">
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Setting
    </MenuItem>
    <MenuItem value="Disabled" disabled>
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Disabled
    </MenuItem>
  </Menu>
);

export const Horizontal_With_RightIcon = () => (
  <Menu type="single" orientation="horizontal">
    <MenuDropdown>
      <MenuDropdownTrigger>Home</MenuDropdownTrigger>
      <MenuDropdownContent side="bottom">
        <MenuDropdownGroup>
          <MenuDropdownItem value="Home-Item-1">Item 1</MenuDropdownItem>
          <MenuDropdownItem value="Home-Item-2">Item 2</MenuDropdownItem>
          <MenuDropdownItem value="Home-Item-3">Item 3</MenuDropdownItem>
        </MenuDropdownGroup>
      </MenuDropdownContent>
    </MenuDropdown>
    <MenuDropdown>
      <MenuDropdownTrigger>List</MenuDropdownTrigger>
      <MenuDropdownContent side="bottom">
        <MenuDropdownGroup>
          <MenuDropdownItem value="List-Item-1">Item 1</MenuDropdownItem>
          <MenuDropdownItem value="List-Item-2">Item 2</MenuDropdownItem>
          <MenuDropdownItem value="List-Item-3">Item 3</MenuDropdownItem>
        </MenuDropdownGroup>
      </MenuDropdownContent>
    </MenuDropdown>
    <MenuDropdown>
      <MenuDropdownTrigger>Setting</MenuDropdownTrigger>
      <MenuDropdownContent side="bottom">
        <MenuDropdownGroup>
          <MenuDropdownItem value="Setting-Item-1">Item 1</MenuDropdownItem>
          <MenuDropdownItem value="Setting-Item-2">Item 2</MenuDropdownItem>
          <MenuDropdownItem value="Setting-Item-3">Item 3</MenuDropdownItem>
        </MenuDropdownGroup>
      </MenuDropdownContent>
    </MenuDropdown>
    <MenuDropdown>
      <MenuDropdownTrigger disabled>Disabled</MenuDropdownTrigger>
      <MenuDropdownContent side="bottom">
        <MenuDropdownGroup>
          <MenuDropdownItem value="Setting-Item-1">Item 1</MenuDropdownItem>
          <MenuDropdownItem value="Setting-Item-2">Item 2</MenuDropdownItem>
          <MenuDropdownItem value="Setting-Item-3">Item 3</MenuDropdownItem>
        </MenuDropdownGroup>
      </MenuDropdownContent>
    </MenuDropdown>
  </Menu>
);

export const Horizontal_With_Badge = () => (
  <Menu type="single" orientation="horizontal">
    <MenuItem value="Home">
      Home
      <Badge radius="large" className="ml-2">
        1
      </Badge>
    </MenuItem>
    <MenuItem value="List">
      List
      <Badge radius="large" className="ml-2">
        badge
      </Badge>
    </MenuItem>
    <MenuItem value="Setting">
      Setting
      <Badge radius="large" className="ml-2">
        new
      </Badge>
    </MenuItem>
    <MenuItem value="Disabled" disabled>
      Disabled
      <Badge radius="large" className="ml-2">
        new
      </Badge>
    </MenuItem>
  </Menu>
);

export const Horizontal_With_Both = () => (
  <Menu type="single" orientation="horizontal">
    <MenuItem value="Home">
      <Icon name="RiHomeSmile2Fill" size={16} className="mr-2" />
      Home
      <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
    </MenuItem>
    <MenuItem value="List">
      <Icon name="RiFunctionFill" size={16} className="mr-2" />
      List
      <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
    </MenuItem>
    <MenuItem value="Setting">
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Setting
      <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
    </MenuItem>
    <MenuItem value="Disabled" disabled>
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Disabled
      <Icon name="RiArrowRightSLine" size={16} className="ml-auto" />
    </MenuItem>
  </Menu>
);

export const Vertical = () => (
  <Menu type="single" orientation="vertical">
    <MenuItem value="Home">Home</MenuItem>
    <MenuItem value="List">List</MenuItem>
    <MenuItem value="Setting">Setting</MenuItem>
    <MenuItem value="Disabled" disabled>
      Disabled
    </MenuItem>
  </Menu>
);

export const Vertical_With_LeftIcon = () => (
  <Menu type="single" orientation="vertical">
    <MenuItem value="Home">
      <Icon name="RiHomeSmile2Fill" size={16} className="mr-2" />
      Home
    </MenuItem>
    <MenuItem value="List">
      <Icon name="RiFunctionFill" size={16} className="mr-2" />
      List
    </MenuItem>
    <MenuItem value="Setting">
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Setting
    </MenuItem>
    <MenuItem value="Disabled" disabled>
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Disabled
    </MenuItem>
  </Menu>
);

export const Vertical_With_RightIcon = () => {
  return (
    <Menu type="single" orientation="vertical">
      <MenuDropdown>
        <MenuDropdownTrigger>Trigger (Click)</MenuDropdownTrigger>
        <MenuDropdownContent side="right">
          <MenuDropdownGroup>
            <MenuDropdownItem value="Home-Item-1">Item 1</MenuDropdownItem>
            <MenuDropdownItem value="Home-Item-2">Item 2</MenuDropdownItem>
            <MenuDropdownItem value="Home-Item-3">Item 3</MenuDropdownItem>
          </MenuDropdownGroup>
        </MenuDropdownContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuDropdownTrigger trigger="hover">
          Trigger (Hover)
        </MenuDropdownTrigger>
        <MenuDropdownContent side="right">
          <MenuDropdownGroup>
            <MenuDropdownItem value="List-Item-1">Item 1</MenuDropdownItem>
            <MenuDropdownItem value="List-Item-2">Item 2</MenuDropdownItem>
            <MenuDropdownItem value="List-Item-3">Item 3</MenuDropdownItem>
          </MenuDropdownGroup>
        </MenuDropdownContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuDropdownTrigger>Trigger (Click)</MenuDropdownTrigger>
        <MenuDropdownContent side="right">
          <MenuDropdownGroup>
            <MenuDropdownItem value="Setting-Item-1">Item 1</MenuDropdownItem>
            <MenuDropdownItem value="Setting-Item-2">Item 2</MenuDropdownItem>
            <MenuDropdownItem value="Setting-Item-3">Item 3</MenuDropdownItem>
          </MenuDropdownGroup>
        </MenuDropdownContent>
      </MenuDropdown>
      <MenuDropdown>
        <MenuDropdownTrigger disabled>Disabled</MenuDropdownTrigger>
        <MenuDropdownContent side="right">
          <MenuDropdownGroup>
            <MenuDropdownItem value="Setting-Item-1">Item 1</MenuDropdownItem>
            <MenuDropdownItem value="Setting-Item-2">Item 2</MenuDropdownItem>
            <MenuDropdownItem value="Setting-Item-3">Item 3</MenuDropdownItem>
          </MenuDropdownGroup>
        </MenuDropdownContent>
      </MenuDropdown>
    </Menu>
  );
};

export const Vertical_With_Badge = () => (
  <Menu type="single" orientation="vertical">
    <MenuItem value="Home">
      Home
      <Badge radius="large" className="ml-auto">
        1
      </Badge>
    </MenuItem>
    <MenuItem value="List">
      List
      <Badge radius="large" className="ml-auto">
        badge
      </Badge>
    </MenuItem>
    <MenuItem value="Setting">
      Setting
      <Badge radius="large" className="ml-auto">
        new
      </Badge>
    </MenuItem>
    <MenuItem value="Disabled" disabled>
      Disabled
      <Badge radius="large" className="ml-auto">
        new
      </Badge>
    </MenuItem>
  </Menu>
);

export const Vertical_With_Both = () => (
  <Menu type="single" orientation="vertical">
    <MenuItem value="Home">
      <Icon name="RiHomeSmile2Fill" size={16} className="mr-2" />
      Home
    </MenuItem>
    <MenuItem value="List">
      <Icon name="RiFunctionFill" size={16} className="mr-2" />
      List
    </MenuItem>
    <MenuItem value="Setting">
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Setting
    </MenuItem>
    <MenuItem value="Disabled" disabled>
      <Icon name="RiSettingsFill" size={16} className="mr-2" />
      Disabled
    </MenuItem>
  </Menu>
);
