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
import React, { useState } from "react";

import {
  Button,
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
  DropdownPortal,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  Icon,
  InputBox,
  InputField,
  Select,
  SelectCaption,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetTrigger,
  Tabs,
  TabsList,
  TabsTrigger,
  Textarea,
  TextInput,
} from "@abc-def/react";
import { cn } from "@abc-def/react/lib/utils";

const IndexPage: NextPage = () => {
  const [value, setValue] = React.useState<string>("");
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-6">
      <Dialog modal>
        <DialogTrigger>combobox open</DialogTrigger>
        <DialogContent>
          <Combobox open={open} onOpenChange={setOpen}>
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
          <Combobox open={open} onOpenChange={setOpen}>
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
      <InputField>
        <InputBox>
          <TextInput placeholder="test" />
        </InputBox>
      </InputField>
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
                <DropdownPortal>
                  <DropdownSubContent>
                    <DropdownItem>User 1</DropdownItem>
                    <DropdownItem>User 2</DropdownItem>
                    <DropdownSeparator />
                    <DropdownItem>More...</DropdownItem>
                  </DropdownSubContent>
                </DropdownPortal>
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
          <Select
            type="single"
            value={value}
            onValueChange={(value) => setValue(value)}
          >
            <SelectLabel>Label</SelectLabel>
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
            <SelectCaption variant="info">Caption</SelectCaption>
          </Select>
          <div className="mt-4 flex space-x-4">
            <Button onClick={() => setValue("app")}>Set app</Button>
            <Button onClick={() => setValue("gra")}>Set gra</Button>
            <Button onClick={() => setValue("")}>Set empty value</Button>
          </div>
        </div>
      </div>
      <p
        className={cn(
          "text-tint-orange",
          "text-ellipsis",
          "text-title-h1",
          "text-title-h3",
        )}
      >
        Lorem Ipsum
      </p>
    </div>
  );
};

export default IndexPage;
