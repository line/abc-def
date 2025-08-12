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
  RadioGroup,
  RadioItem,
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

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
  decorators: (Story) => <Story />,
};

export default meta;

export const Default = () => (
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
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>General Electric</TableCell>
        <TableCell>
          <Badge variant="bold" color="default" radius="large">
            D
          </Badge>
          Daniel Cruz
        </TableCell>
        <TableCell>daniel.cruz@ge.com</TableCell>
        <TableCell>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
        </TableCell>
        <TableCell>
          <Badge variant="bold" color="green" radius="medium">
            Completed
          </Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>Apple</TableCell>
        <TableCell>
          <Badge variant="bold" color="default" radius="large">
            G
          </Badge>
          Guy Hawkins
        </TableCell>
        <TableCell>guy.hawkins@apple.com</TableCell>
        <TableCell>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
        </TableCell>
        <TableCell>
          <Badge variant="bold" color="blue" radius="medium">
            In Progress
          </Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>eBay</TableCell>
        <TableCell>
          <Badge variant="bold" color="default" radius="large">
            J
          </Badge>
          Jane Cooper
        </TableCell>
        <TableCell>jane.cooper@ebay.com</TableCell>
        <TableCell>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
        </TableCell>
        <TableCell>
          <Badge variant="bold" color="blue" radius="medium">
            In Progress
          </Badge>
        </TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={5}>Total</TableCell>
        <TableCell textAlign="right">3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

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
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>General Electric</TableCell>
        <TableCell>
          <Badge variant="bold" color="default" radius="large">
            D
          </Badge>
          Daniel Cruz
        </TableCell>
        <TableCell>daniel.cruz@ge.com</TableCell>
        <TableCell>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
        </TableCell>
        <TableCell>
          <Badge variant="bold" color="green" radius="medium">
            Completed
          </Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>Apple</TableCell>
        <TableCell>
          <Badge variant="bold" color="default" radius="large">
            G
          </Badge>
          Guy Hawkins
        </TableCell>
        <TableCell>guy.hawkins@apple.com</TableCell>
        <TableCell>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
        </TableCell>
        <TableCell>
          <Badge variant="bold" color="blue" radius="medium">
            In Progress
          </Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>eBay</TableCell>
        <TableCell>
          <Badge variant="bold" color="default" radius="large">
            J
          </Badge>
          Jane Cooper
        </TableCell>
        <TableCell>jane.cooper@ebay.com</TableCell>
        <TableCell>
          <Badge variant="subtle" color="default" radius="medium">
            Label
          </Badge>
        </TableCell>
        <TableCell>
          <Badge variant="bold" color="blue" radius="medium">
            In Progress
          </Badge>
        </TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={5}>Total</TableCell>
        <TableCell textAlign="right">3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Other = () => (
  <Table>
    <TableCaption>Table Caption</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>
          <Checkbox checked="indeterminate" size="small" className="mt-1" />
        </TableHead>
        <TableHead icon="RiBuildingLine">Company</TableHead>
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
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>General Electric</TableCell>
        <TableCell>
          <Switch />
        </TableCell>
        <TableCell>
          <Select size="small">
            <SelectTrigger>
              <Icon name="RiFlashlightFill" size={16} />
              <SelectValue placeholder="Select" />
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
          <RadioGroup defaultValue="3">
            <RadioItem value="1">
              <Badge variant="bold" color="default" radius="medium">
                Not Started
              </Badge>
            </RadioItem>
            <RadioItem value="2">
              <Badge variant="bold" color="blue" radius="medium">
                In Progress
              </Badge>
            </RadioItem>
            <RadioItem value="3">
              <Badge variant="bold" color="green" radius="medium">
                Completed
              </Badge>
            </RadioItem>
          </RadioGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>Apple</TableCell>
        <TableCell>
          <Switch />
        </TableCell>
        <TableCell>
          <Select size="small">
            <SelectTrigger>
              <Icon name="RiFlashlightFill" size={16} />
              <SelectValue placeholder="Select" />
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
          <RadioGroup defaultValue="2">
            <RadioItem value="1">
              <Badge variant="bold" color="default" radius="medium">
                Not Started
              </Badge>
            </RadioItem>
            <RadioItem value="2">
              <Badge variant="bold" color="blue" radius="medium">
                In Progress
              </Badge>
            </RadioItem>
            <RadioItem value="3">
              <Badge variant="bold" color="green" radius="medium">
                Completed
              </Badge>
            </RadioItem>
          </RadioGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Checkbox checked size="small" className="mt-1" />
        </TableCell>
        <TableCell>eBay</TableCell>
        <TableCell>
          <Switch />
        </TableCell>
        <TableCell>
          <Select size="small">
            <SelectTrigger>
              <Icon name="RiFlashlightFill" size={16} />
              <SelectValue placeholder="Select" />
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
          <RadioGroup defaultValue="1">
            <RadioItem value="1">
              <Badge variant="bold" color="default" radius="medium">
                Not Started
              </Badge>
            </RadioItem>
            <RadioItem value="2">
              <Badge variant="bold" color="blue" radius="medium">
                In Progress
              </Badge>
            </RadioItem>
            <RadioItem value="3">
              <Badge variant="bold" color="green" radius="medium">
                Completed
              </Badge>
            </RadioItem>
          </RadioGroup>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
