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
import type { Meta } from "@storybook/react";

import {
  Button,
  Divider,
  Dropdown,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownTrigger,
  Icon,
  Menu,
  MenuItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-react";

const meta: Meta = {
  title: "Combinations/NavBar",
};

export default meta;

export const Default = () => {
  return (
    <div className="navbar">
      <Menu type="single" className="navbar-menu">
        <MenuItem value="menu-1">Home</MenuItem>
        <MenuItem value="menu-2">Feedback</MenuItem>
        <MenuItem value="menu-3">Issue</MenuItem>
        <MenuItem value="menu-4">Setting</MenuItem>
      </Menu>
      <Dropdown>
        <DropdownTrigger asChild className="navbar-dropdown">
          <Button size="medium" variant="ghost">
            <Icon name="RiSunLine" />
          </Button>
        </DropdownTrigger>
        <DropdownContent className="navbar-dropdown-content">
          <DropdownGroup>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 1
            </DropdownItem>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 2
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
      <Button size="medium" variant="ghost" className="navbar-button">
        <Icon name="RiUser6Line" />
      </Button>
    </div>
  );
};

export const NavBarWithLogo = () => {
  return (
    <div className="navbar">
      <button type="button" className="navbar-logo">
        <Icon name="RiFlashlightFill" size={24} />
      </button>
      <Divider
        variant="subtle"
        indent={8}
        orientation="vertical"
        className="navbar-divider"
      />
      <Menu type="single" className="navbar-menu">
        <MenuItem value="menu-1">Home</MenuItem>
        <MenuItem value="menu-2">Feedback</MenuItem>
        <MenuItem value="menu-3">Issue</MenuItem>
        <MenuItem value="menu-4">Setting</MenuItem>
      </Menu>
      <Dropdown>
        <DropdownTrigger asChild className="navbar-dropdown">
          <Button size="medium" variant="ghost">
            <Icon name="RiSunLine" />
          </Button>
        </DropdownTrigger>
        <DropdownContent className="navbar-dropdown-content">
          <DropdownGroup>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 1
            </DropdownItem>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 2
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
      <Button size="medium" variant="ghost" className="navbar-button">
        <Icon name="RiUser6Line" />
      </Button>
    </div>
  );
};

export const NavBarWithSelect = () => {
  return (
    <div className="navbar">
      <Select size="small">
        <SelectTrigger>
          <Icon name="RiFlashlightFill" size={16} />
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="item-1">Item 1</SelectItem>
            <SelectItem value="item-2">Item 2</SelectItem>
            <SelectItem value="item-3">Item 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Divider
        variant="subtle"
        indent={8}
        orientation="vertical"
        className="navbar-divider"
      />
      <Menu type="single" className="navbar-menu">
        <MenuItem value="menu-1">Home</MenuItem>
        <MenuItem value="menu-2">Feedback</MenuItem>
        <MenuItem value="menu-3">Issue</MenuItem>
        <MenuItem value="menu-4">Setting</MenuItem>
      </Menu>
      <Dropdown>
        <DropdownTrigger asChild className="navbar-dropdown">
          <Button size="medium" variant="ghost">
            <Icon name="RiSunLine" />
          </Button>
        </DropdownTrigger>
        <DropdownContent className="navbar-dropdown-content">
          <DropdownGroup>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 1
            </DropdownItem>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 2
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
      <Button size="medium" variant="ghost" className="navbar-button">
        <Icon name="RiUser6Line" />
      </Button>
    </div>
  );
};

export const OnlyLogo = () => {
  return (
    <div className="navbar">
      <button type="button" className="navbar-logo">
        <Icon name="RiFlashlightFill" size={24} />
      </button>
      <Dropdown>
        <DropdownTrigger asChild className="navbar-dropdown">
          <Button size="medium" variant="ghost">
            <Icon name="RiSunLine" />
          </Button>
        </DropdownTrigger>
        <DropdownContent className="navbar-dropdown-content">
          <DropdownGroup>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 1
            </DropdownItem>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 2
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
      <Button size="medium" variant="ghost" className="navbar-button">
        <Icon name="RiUser6Line" />
      </Button>
    </div>
  );
};

export const OnlySelect = () => {
  return (
    <div className="navbar">
      <Select size="small">
        <SelectTrigger className="navbar-select">
          <Icon name="RiFlashlightFill" size={16} />
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="item-1">Item 1</SelectItem>
            <SelectItem value="item-2">Item 2</SelectItem>
            <SelectItem value="item-3">Item 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Dropdown>
        <DropdownTrigger asChild className="navbar-dropdown">
          <Button size="medium" variant="ghost">
            <Icon name="RiSunLine" />
          </Button>
        </DropdownTrigger>
        <DropdownContent className="navbar-dropdown-content">
          <DropdownGroup>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 1
            </DropdownItem>
            <DropdownItem onClick={() => alert("clicked!")}>
              Item 2
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
      <Button size="medium" variant="ghost" className="navbar-button">
        <Icon name="RiUser6Line" />
      </Button>
    </div>
  );
};
