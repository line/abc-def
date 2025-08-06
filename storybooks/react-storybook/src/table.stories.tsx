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
import type { BadgeProps } from "@line/abc-def-react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownTrigger,
  Icon,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@line/abc-def-react";

const items: {
  company: string;
  person: { badge: BadgeProps; name: string };
  email: string;
  tag: BadgeProps[];
  state: BadgeProps[];
}[] = [
  {
    company: "General Electric",
    person: {
      badge: {
        variant: "bold",
        color: "default",
        children: "D",
        radius: "large",
      },
      name: "Daniel Cruz",
    },
    email: "daniel.cruz@ge.com",
    tag: [
      {
        variant: "subtle",
        color: "default",
        children: "Label",
        radius: "medium",
      },
      {
        variant: "subtle",
        color: "default",
        children: "Label",
        radius: "medium",
      },
    ],
    state: [
      {
        variant: "bold",
        color: "green",
        children: "Completed",
        radius: "medium",
      },
    ],
  },
  {
    company: "Apple",
    person: {
      badge: {
        variant: "bold",
        color: "default",
        children: "G",
        radius: "large",
      },
      name: "Guy Hawkins",
    },
    email: "guy.hawkins@apple.com",
    tag: [
      {
        variant: "subtle",
        color: "default",
        children: "Label",
        radius: "medium",
      },
    ],
    state: [
      {
        variant: "bold",
        color: "blue",
        children: "In Progress",
        radius: "medium",
      },
    ],
  },
  {
    company: "eBay",
    person: {
      badge: {
        variant: "bold",
        color: "default",
        children: "J",
        radius: "large",
      },
      name: "Jane Cooper",
    },
    email: "jane.cooper@ebay.com",
    tag: [
      {
        variant: "subtle",
        color: "default",
        children: "Label",
        radius: "medium",
      },
    ],
    state: [
      {
        variant: "bold",
        color: "blue",
        children: "In Progress",
        radius: "medium",
      },
    ],
  },
];

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
  decorators: (Story) => <Story />,
  render: () => (
    <Table>
      <TableCaption>Table Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox checked="indeterminate" size="small" className="mt-1" />
          </TableHead>
          <TableHead icon="RiBuildingLine">Company</TableHead>
          <TableHead icon="RiUserLine">Person</TableHead>
          <TableHead icon="RiMailLine">Email</TableHead>
          <TableHead icon="RiHashtag">Tag</TableHead>
          <TableHead>State</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map(({ company, person, email, tag, state }, index) => (
          <TableRow key={index}>
            <TableCell>
              <Checkbox checked size="small" className="mt-1" />
            </TableCell>
            <TableCell>{company}</TableCell>
            <TableCell>
              <Badge {...person.badge} />
              {person.name}
            </TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
              {tag.map((item, index) => (
                <Badge key={index} {...item} />
              ))}
            </TableCell>
            <TableCell>
              {state.map((item, index) => (
                <Badge key={index} {...item} />
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell textAlign="right">3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bordered = () => (
  <Table className="border-separate border-spacing-0 rounded border">
    <TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox checked="indeterminate" size="small" className="mt-1" />
        </TableHead>
        <TableHead icon="RiBuildingLine">Company</TableHead>
        <TableHead icon="RiUserLine">Person</TableHead>
        <TableHead icon="RiMailLine">Email</TableHead>
        <TableHead icon="RiHashtag">Tag</TableHead>
        <TableHead>State</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map(({ company, person, email, tag, state }, index) => (
        <TableRow key={index}>
          <TableCell>
            <Checkbox checked size="small" className="mt-1" />
          </TableCell>
          <TableCell>{company}</TableCell>
          <TableCell>
            <Badge {...person.badge} />
            {person.name}
          </TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>
            {tag.map((item, index) => (
              <Badge key={index} {...item} />
            ))}
          </TableCell>
          <TableCell>
            {state.map((item, index) => (
              <Badge key={index} {...item} />
            ))}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={5}>Total</TableCell>
        <TableCell textAlign="right">2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Other = () => (
  <Table>
    <TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead icon="RiBuildingLine">Company</TableHead>
        <TableHead icon="RiUserLine">Person</TableHead>
        <TableHead icon="RiMailLine">Subscription</TableHead>
        <TableHead icon="RiHashtag">Item</TableHead>
        <TableHead>
          <Dropdown>
            <DropdownTrigger asChild>
              <Button variant="ghost" style={{ color: "inherit" }}>
                Sorting
                <Icon name="RiArrowUpDownLine" />
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
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map(({ company, person, state }, index) => (
        <TableRow key={index}>
          <TableCell>{company}</TableCell>
          <TableCell>
            <Badge {...person.badge} />
            {person.name}
          </TableCell>
          <TableCell>
            <Switch />
          </TableCell>
          <TableCell>
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
          </TableCell>
          <TableCell>
            {state.map((item, index) => (
              <Badge key={index} {...item} />
            ))}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
