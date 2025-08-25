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
import type { NextPage } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Caption,
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  Dialog,
  DialogContent,
  DialogTrigger,
  Dropdown,
  DropdownCaption,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  Icon,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetTrigger,
  Spinner,
  Tabs,
  TabsList,
  TabsTrigger,
  Tag,
  Textarea,
  TextInput,
} from "@line/abc-def-react";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>1</AccordionTrigger>
          <AccordionContent>1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2</AccordionTrigger>
          <AccordionContent>2</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Dialog modal>
        <DialogTrigger>combobox open</DialogTrigger>
        <DialogContent>
          <Combobox>
            <ComboboxTrigger>combobox</ComboboxTrigger>
            <ComboboxContent>
              <ComboboxList className="max-h-[300px]">
                {Array.from({ length: 100 }).map((_, i) => (
                  <ComboboxItem key={i} value={String(i)}>
                    {i}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </DialogContent>
      </Dialog>
      <Sheet modal>
        <SheetTrigger>sheet open</SheetTrigger>
        <SheetContent>
          <Combobox>
            <ComboboxTrigger>combobox</ComboboxTrigger>
            <ComboboxContent>
              <ComboboxList className="max-h-[300px]">
                {Array.from({ length: 100 }).map((_, i) => (
                  <ComboboxItem key={i} value={String(i)}>
                    {i}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </SheetContent>
      </Sheet>
      <Tabs>
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
      </Tabs>
      <Textarea placeholder="test" />
      <TextInput placeholder="test" />
      <div className="space-y-24 p-16">
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownTrigger>
          <DropdownContent className="w-56" side="right" maxHeight="300px">
            <DropdownLabel>My Account</DropdownLabel>
            <DropdownSeparator />
            <DropdownGroup>
              <DropdownItem>
                <Icon name="RiUserLine" />
                <strong>My Account</strong>
                <p>Description</p>
                <DropdownCaption>⇧⌘P</DropdownCaption>
              </DropdownItem>
              <DropdownItem>
                <Icon name="RiSettingsLine" />
                <strong>Billing</strong>
                <p>Description</p>
                <DropdownCaption>⌘B</DropdownCaption>
              </DropdownItem>
              <DropdownSub>
                <DropdownSubTrigger>
                  <Icon name="RiSettingsLine" />
                  <strong>Invite users</strong>
                  <p>Description</p>
                  <Icon name="RiArrowRightSLine" />
                </DropdownSubTrigger>
                <DropdownSubContent>
                  <DropdownItem>User 1</DropdownItem>
                  <DropdownItem>User 2</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem>More...</DropdownItem>
                </DropdownSubContent>
              </DropdownSub>
              <DropdownItem>
                <Icon name="RiLogoutBoxRLine" />
                <strong> Log out</strong>
                <p>Description</p>
                <DropdownCaption>⇧⌘Q</DropdownCaption>
              </DropdownItem>
            </DropdownGroup>
          </DropdownContent>
        </Dropdown>
        <div className="w-96">
          <Select>
            <Label>Label</Label>
            <SelectTrigger>
              <SelectValue placeholder="Select a value..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectGroupLabel>Fruits</SelectGroupLabel>
                <SelectItem value="app">Apple</SelectItem>
                <SelectItem value="ban">Banana</SelectItem>
                <SelectItem value="blu">Blueberry</SelectItem>
                <SelectItem value="gra">Grapes</SelectItem>
                <SelectItem value="pin">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
            <Caption variant="info">Caption</Caption>
          </Select>
        </div>
      </div>
      <Textarea />
      <Caption>123</Caption>
      <Popover>
        <PopoverTrigger>
          <Tag>123</Tag>
        </PopoverTrigger>
        <PopoverContent>123</PopoverContent>
      </Popover>
      <RadioGroup>
        <RadioItem value="1">123</RadioItem>
      </RadioGroup>
      <Spinner />
      <p className={"text-tint-orange text-title-h1 text-ellipsis"}>
        Lorem Ipsum
      </p>
    </div>
  );
};

export default IndexPage;
