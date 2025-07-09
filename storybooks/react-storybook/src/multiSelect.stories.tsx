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
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectTriggerButton,
  MultiSelectValue,
  toast,
} from "@abc-def/react";

const Props = {
  MultiSelectValue: { placeholder: "↳ MultiSelectValue: placeholder" },
  MultiSelectContent: {
    position: "↳ MultiSelectContent: position",
    maxHeight: "↳ MultiSelectContent: maxHeight",
  },
  MultiSelectItem: {
    children: "↳ MultiSelectItem: children",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof MultiSelect> & {
    [Props.MultiSelectValue.placeholder]: React.ComponentPropsWithoutRef<
      typeof MultiSelectValue
    >["placeholder"];
    [Props.MultiSelectContent.maxHeight]: React.ComponentPropsWithoutRef<
      typeof MultiSelectContent
    >["maxHeight"];
    [Props.MultiSelectItem.children]: React.ComponentPropsWithoutRef<
      typeof MultiSelectItem
    >["children"];
  }
> = {
  title: "MultiSelect",
  component: MultiSelect,
  decorators: (Story) => <Story />,
  render: (args) => (
    <MultiSelect
      size={args.size}
      disabled={args.disabled}
      onValueChange={(value) => console.log(value.join(", "))}
    >
      <Label>Label</Label>
      <MultiSelectTrigger>
        <MultiSelectValue
          placeholder={args[Props.MultiSelectValue.placeholder]}
        />
      </MultiSelectTrigger>
      <MultiSelectContent maxHeight={args[Props.MultiSelectContent.maxHeight]}>
        <MultiSelectItem value="txt">text</MultiSelectItem>
        <MultiSelectItem value="kwd">keyword</MultiSelectItem>
        <MultiSelectItem value="num">number</MultiSelectItem>
        <MultiSelectItem value="dat">date</MultiSelectItem>
        <MultiSelectItem value="sel">select</MultiSelectItem>
        <MultiSelectItem value="mul">multiSelect</MultiSelectItem>
        <MultiSelectItem value="img">
          {args[Props.MultiSelectItem.children]}
        </MultiSelectItem>
      </MultiSelectContent>
      <Caption>Caption</Caption>
    </MultiSelect>
  ),
  args: {
    size: undefined,
    disabled: false,
    [Props.MultiSelectValue.placeholder]: "Select a fruit...",
    [Props.MultiSelectContent.maxHeight]: "auto",
    [Props.MultiSelectItem.children]: "Custom",
  },
  argTypes: {
    size: {
      description: "Set the size of the Select.",
      table: {
        category: "MultiSelect",
        type: { summary: "large | medium | small | undefined" },
        defaultValue: { summary: undefined },
      },
      control: "select",
      options: ["large", "medium", "small", undefined],
    },
    disabled: {
      description: "Set whether the Select is in an disabled state.",
      table: { category: "MultiSelect", defaultValue: { summary: "false" } },
    },
    [Props.MultiSelectValue.placeholder]: {
      description: "Set the placeholder of the SelectValue.",
      table: { category: "MultiSelectValue", type: { summary: "string" } },
      control: "text",
    },
    [Props.MultiSelectContent.maxHeight]: {
      description: "Set the maximum height of the SelectContent.",
      table: { category: "MultiSelectContent", type: { summary: "string" } },
      control: "text",
    },
    [Props.MultiSelectItem.children]: {
      description: "Set the children of the SelectItem.",
      table: {
        category: "MultiSelectItem",
        type: { summary: "React.ReactNode" },
      },
      control: "text",
    },
    className: { table: { disable: true } },
    value: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const With_Icon = () => (
  <MultiSelect
    defaultValue={["txt", "kwd"]}
    onValueChange={(value) => console.log(value.join(", "))}
  >
    <Label>Label</Label>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">
        <Icon className="mr-2" name="RiMenu2Line" size={16} />
        text
      </MultiSelectItem>
      <MultiSelectItem value="kwd">
        <Icon className="mr-2" name="RiFontSize" size={16} />
        keyword
      </MultiSelectItem>
      <MultiSelectItem value="num">
        <Icon className="mr-2" name="RiHashtag" size={16} />
        number
      </MultiSelectItem>
      <MultiSelectItem value="dat">
        <Icon className="mr-2" name="RiCalendar2Line" size={16} />
        date
      </MultiSelectItem>
      <MultiSelectItem value="sel">
        <Icon className="mr-2" name="RiCheckboxCircleLine" size={16} />
        select
      </MultiSelectItem>
      <MultiSelectItem value="mul">
        <Icon className="mr-2" name="RiListView" size={16} />
        multiSelect
      </MultiSelectItem>
      <MultiSelectItem value="img">
        <Icon className="mr-2" name="RiImageLine" size={16} />
        image
      </MultiSelectItem>
    </MultiSelectContent>
    <Caption>Caption Info</Caption>
  </MultiSelect>
);

export const Disabled = () => (
  <MultiSelect
    disabled
    defaultValue={["txt", "kwd"]}
    onValueChange={(value) => console.log(value.join(", "))}
  >
    <Label>Label</Label>
    <MultiSelectTrigger>
      <MultiSelectValue placeholder="Select a format" />
    </MultiSelectTrigger>
    <MultiSelectContent>
      <MultiSelectItem value="txt">text</MultiSelectItem>
      <MultiSelectItem value="kwd">keyword</MultiSelectItem>
      <MultiSelectItem value="num">number</MultiSelectItem>
      <MultiSelectItem value="dat">date</MultiSelectItem>
      <MultiSelectItem value="sel">select</MultiSelectItem>
      <MultiSelectItem value="mul">multiSelect</MultiSelectItem>
      <MultiSelectItem value="img">image</MultiSelectItem>
    </MultiSelectContent>
    <Caption>Caption Info</Caption>
  </MultiSelect>
);

const FormSchema = z.object({
  email: z
    .array(z.email({ error: "Please select an email to display." }), {
      error: "Please select an email to display.",
    })
    .nonempty({ error: "Please select at least one email." }),
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
              <MultiSelect
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormLabel>Email</FormLabel>
                <MultiSelectTrigger asChild>
                  <FormControl>
                    <MultiSelectTriggerButton>
                      <MultiSelectValue placeholder="Select a verified email to display" />
                    </MultiSelectTriggerButton>
                  </FormControl>
                </MultiSelectTrigger>
                <MultiSelectContent>
                  <MultiSelectItem value="m@example.com">
                    m@example.com
                  </MultiSelectItem>
                  <MultiSelectItem value="m@google.com">
                    m@google.com
                  </MultiSelectItem>
                  <MultiSelectItem value="m@support.com">
                    m@support.com
                  </MultiSelectItem>
                </MultiSelectContent>
                <FormCaption>
                  You can manage email addresses in your email settings.
                </FormCaption>
                <FormMessage />
              </MultiSelect>
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
