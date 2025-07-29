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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod/v4";

import {
  Button,
  Caption,
  Form,
  FormCaption,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icon,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  toast,
} from "@abc-def/react";

const Props = {
  SelectValue: { placeholder: "↳ SelectValue: placeholder" },
  SelectContent: {
    position: "↳ SelectContent: position",
    maxHeight: "↳ SelectContent: maxHeight",
  },
  SelectItem: {
    children: "↳ SelectItem: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof Select> & {
    [Props.SelectValue.placeholder]: React.ComponentPropsWithoutRef<
      typeof SelectValue
    >["placeholder"];
    [Props.SelectContent.position]: React.ComponentPropsWithoutRef<
      typeof SelectContent
    >["position"];
    [Props.SelectContent.maxHeight]: React.ComponentPropsWithoutRef<
      typeof SelectContent
    >["maxHeight"];
    [Props.SelectItem.children]: React.ComponentPropsWithoutRef<
      typeof SelectItem
    >["children"];
  }
> = {
  title: "Select",
  component: Select,
  decorators: (Story) => <Story />,
  render: (args) => (
    <Select size={args.size} disabled={args.disabled}>
      <Label>Label</Label>
      <SelectTrigger>
        <SelectValue placeholder={args[Props.SelectValue.placeholder]} />
      </SelectTrigger>
      <SelectContent
        position={args[Props.SelectContent.position]}
        maxHeight={args[Props.SelectContent.maxHeight]}
      >
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">{args[Props.SelectItem.children]}</SelectItem>
        </SelectGroup>
      </SelectContent>
      <Caption>Caption</Caption>
    </Select>
  ),
  args: {
    disabled: false,
    [Props.SelectValue.placeholder]: "Select a fruit...",
    [Props.SelectContent.position]: "popper",
    [Props.SelectContent.maxHeight]: "auto",
    [Props.SelectItem.children]: "Custom",
  },
  argTypes: {
    disabled: {
      description: "Set whether the Select is in an disabled state.",
      table: { category: "Select", defaultValue: { summary: "false" } },
    },
    [Props.SelectValue.placeholder]: {
      description: "Set the placeholder of the SelectValue.",
      table: { category: "SelectValue", type: { summary: "string" } },
      control: "text",
    },
    [Props.SelectContent.position]: {
      description: "Set the position where the SelectContent appears.",
      table: {
        category: "SelectContent",
        defaultValue: { summary: "popper" },
        type: { summary: "item-aligned | popper" },
      },
      control: "radio",
      options: ["item-aligned", "popper"],
    },
    [Props.SelectContent.maxHeight]: {
      description: "Set the maximum height of the SelectContent.",
      table: { category: "SelectContent", type: { summary: "string" } },
      control: "text",
    },
    [Props.SelectItem.children]: {
      description: "Set the children of the SelectItem.",
      table: { category: "SelectItem", type: { summary: "React.ReactNode" } },
      control: "text",
    },
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    size: { table: { disable: true } },
    radius: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const With_Icon = () => {
  return (
    <Select
      defaultValue="txt"
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <Label>Label</Label>
      <SelectTrigger>
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">
            <Icon className="mr-2" name="RiMenu2Line" size={16} />
            text
          </SelectItem>
          <SelectItem value="kwd">
            <Icon className="mr-2" name="RiFontSize" size={16} />
            keyword
          </SelectItem>
          <SelectItem value="num">
            <Icon className="mr-2" name="RiHashtag" size={16} />
            number
          </SelectItem>
          <SelectItem value="dat">
            <Icon className="mr-2" name="RiCalendar2Line" size={16} />
            date
          </SelectItem>
          <SelectItem value="sel">
            <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
            select
          </SelectItem>
          <SelectItem value="mul">
            <Icon className="mr-2" name="RiListView" size={16} />
            multiSelect
          </SelectItem>
          <SelectItem value="img">
            <Icon className="mr-2" name="RiImageLine" size={16} />
            image
          </SelectItem>
        </SelectGroup>
      </SelectContent>
      <Caption variant="success">Caption Info</Caption>
    </Select>
  );
};

export const Disabled = () => {
  return (
    <Select
      disabled
      onValueChange={(value) => console.log("single select value: ", value)}
    >
      <Label>Label</Label>
      <SelectTrigger>
        <SelectValue placeholder="Select a timezone (Disabled)" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="txt">text</SelectItem>
          <SelectItem value="kwd">keyword</SelectItem>
          <SelectItem value="num">number</SelectItem>
          <SelectItem value="dat">date</SelectItem>
          <SelectItem value="sel">select</SelectItem>
          <SelectItem value="mul">multiSelect</SelectItem>
          <SelectItem value="img">image</SelectItem>
        </SelectGroup>
      </SelectContent>
      <Caption variant="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Caption>
    </Select>
  );
};

const FormSchema = z.object({
  email: z.email({ error: "Please select an email to display." }),
});

export const Error_Form = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    return toast.success("Form submitted successfully", {
      description: JSON.stringify(data, null, 2),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
                <FormCaption>
                  You can manage email addresses in your email settings.
                </FormCaption>
                <FormMessage />
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </form>
    </Form>
  );
};
