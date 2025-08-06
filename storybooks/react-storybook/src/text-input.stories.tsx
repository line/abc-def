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
/* eslint-disable react-compiler/react-compiler */

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
  TextInput,
  TextInputBox,
  TextInputClearButton,
  TextInputEyeButton,
  toast,
} from "@line/abc-def-react";

const Props = {
  TextInput: {
    placeholder: "↳ TextInput: placeholder",
    disabled: "↳ TextInput: disabled",
    radius: "↳ TextInput: radius",
  },
} as const;

const meta: Meta<
  React.ComponentProps<typeof TextInput> & {
    [Props.TextInput.placeholder]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["placeholder"];
    [Props.TextInput.radius]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["radius"];
    [Props.TextInput.disabled]: React.ComponentPropsWithoutRef<
      typeof TextInput
    >["disabled"];
  }
> = {
  title: "TextInput",
  component: TextInput,
  args: {
    [Props.TextInput.placeholder]: "Placeholder...",
    [Props.TextInput.radius]: undefined,
    [Props.TextInput.disabled]: false,
  },
  argTypes: {
    [Props.TextInput.placeholder]: {
      description: "Set the placeholder of the TextInput.",
      table: {
        category: "TextInput",
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    [Props.TextInput.radius]: {
      description: "Set the radius of the TextInput.",
      table: {
        category: "TextInput",
        type: {
          summary: "small | medium | large",
        },
        defaultValue: {
          summary: "small",
        },
      },
      control: "radio",
      options: ["small", "medium", "large", undefined],
    },
    [Props.TextInput.disabled]: {
      description: "Set whether the TextInput is in a disabled state.",
      table: {
        category: "TextInput",
        type: {
          summary: "false",
        },
      },
      control: "boolean",
    },
    radius: { table: { disable: true } },
    size: { table: { disable: true } },
    type: { table: { disable: true } },
  },
  decorators: (Story) => <Story />,
  render: (args) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClear = () => {
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    };

    return (
      <div className="space-y-2">
        <Label>Label</Label>
        <TextInputBox>
          <Icon name="RiUser3Fill" />
          <TextInput
            radius={args[Props.TextInput.radius]}
            ref={inputRef}
            placeholder={args[Props.TextInput.placeholder]}
            disabled={args[Props.TextInput.disabled]}
          />
          <TextInputClearButton
            onClick={handleClear}
            disabled={args[Props.TextInput.disabled]}
          />
        </TextInputBox>
        <Caption>Caption</Caption>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TextField = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

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
    <div className="grid grid-cols-3 gap-2">
      <div className="space-y-2">
        <Label>Default</Label>
        <TextInputBox>
          <TextInput
            ref={inputRefs[0]}
            type="text"
            placeholder="Placeholder..."
          />
          <TextInputClearButton onClick={() => handleClear(0)} />
        </TextInputBox>
        <Caption variant="info">Caption Info</Caption>
      </div>
      <div className="space-y-2">
        <Label>Disabled</Label>
        <TextInputBox>
          <TextInput
            ref={inputRefs[1]}
            type="text"
            placeholder="Placeholder..."
            disabled
          />
          <TextInputClearButton onClick={() => handleClear(1)} />
        </TextInputBox>
        <Caption variant="success">Caption Success</Caption>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Form</FormLabel>
                <TextInputBox>
                  <FormControl>
                    <TextInput
                      ref={inputRefs[2]}
                      type="text"
                      placeholder="Placeholder..."
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <TextInputClearButton
                    onClick={() => {
                      handleClear(2);
                      field.onChange("");
                    }}
                  />
                </TextInputBox>
                <FormCaption>Caption</FormCaption>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export const Search = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

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
    <div className="grid grid-cols-3 gap-2">
      <div className="space-y-2">
        <Label>Default</Label>
        <TextInputBox>
          <Icon name="RiSearchLine" />
          <TextInput
            ref={inputRefs[3]}
            type="search"
            placeholder="Placeholder..."
          />
          <TextInputClearButton onClick={() => handleClear(3)} />
        </TextInputBox>
        <Caption variant="info">Caption Info</Caption>
      </div>
      <div>
        <Label>Disabled</Label>
        <TextInputBox>
          <Icon name="RiSearchLine" />
          <TextInput
            ref={inputRefs[4]}
            type="search"
            placeholder="Placeholder..."
            disabled
          />
          <TextInputClearButton onClick={() => handleClear(4)} />
        </TextInputBox>
        <Caption variant="success">Caption Success</Caption>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Form</FormLabel>
                <TextInputBox>
                  <Icon name="RiSearchLine" />
                  <FormControl>
                    <TextInput
                      ref={inputRefs[5]}
                      type="search"
                      placeholder="Placeholder..."
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <TextInputClearButton
                    onClick={() => {
                      handleClear(5);
                      field.onChange("");
                    }}
                  />
                </TextInputBox>
                <FormCaption>Caption</FormCaption>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export const Id = () => {
  const count = 12;
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleClear = (index: number) => {
    if (inputRefs[index]?.current) {
      inputRefs[index].current.value = "";
      inputRefs[index].current.focus();
    }
  };

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
    <div className="grid grid-cols-3 gap-2">
      <div className="space-y-2">
        <Label>Default</Label>
        <TextInputBox>
          <Icon name="RiUser3Fill" />
          <TextInput
            ref={inputRefs[6]}
            type="text"
            placeholder="Placeholder..."
          />
          <TextInputClearButton onClick={() => handleClear(6)} />
        </TextInputBox>
        <Caption variant="info">Caption Info</Caption>
      </div>
      <div className="space-y-2">
        <Label>Disabled</Label>
        <TextInputBox>
          <Icon name="RiUser3Fill" />
          <TextInput
            ref={inputRefs[7]}
            type="text"
            placeholder="Placeholder..."
            disabled
          />
          <TextInputClearButton onClick={() => handleClear(7)} />
        </TextInputBox>
        <Caption variant="success">Caption Success</Caption>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Form</FormLabel>
                <TextInputBox>
                  <Icon name="RiUser3Fill" />
                  <FormControl>
                    <TextInput
                      ref={inputRefs[8]}
                      type="text"
                      placeholder="Placeholder..."
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <TextInputClearButton
                    onClick={() => {
                      handleClear(8);
                      field.onChange("");
                    }}
                  />
                </TextInputBox>
                <FormCaption>Caption</FormCaption>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export const Password = () => {
  const count = 12;
  const [inputTypes, setInputTypes] = React.useState<("text" | "password")[]>(
    Array(count).fill("password"),
  );
  const inputRefs = Array.from({ length: count }, () =>
    React.createRef<HTMLInputElement>(),
  );

  const handleChangeVisibility = (visible: boolean, index: number) => {
    setInputTypes((prev) => {
      const next = [...prev];
      next[index] = visible ? "text" : "password";
      return next;
    });
    // 포커스 유지
    if (inputRefs[index]?.current) {
      inputRefs[index].current.focus();
    }
  };

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
    <div className="grid grid-cols-3 gap-2">
      <div className="space-y-2">
        <Label>Default</Label>
        <TextInputBox>
          <Icon name="RiLockPasswordFill" />
          <TextInput
            ref={inputRefs[9]}
            type={inputTypes[9]}
            placeholder="Placeholder..."
          />
          <TextInputEyeButton
            onChangeVisibility={(visible) => handleChangeVisibility(visible, 9)}
          />
        </TextInputBox>
        <Caption variant="info">Caption Info</Caption>
      </div>
      <div className="space-y-2">
        <Label>Disabled</Label>
        <TextInputBox>
          <Icon name="RiLockPasswordFill" />
          <TextInput
            ref={inputRefs[10]}
            type={inputTypes[10]}
            placeholder="Placeholder..."
            disabled
          />
          <TextInputEyeButton
            disabled
            onChangeVisibility={(visible) =>
              handleChangeVisibility(visible, 10)
            }
          />
        </TextInputBox>
        <Caption variant="success">Caption Success</Caption>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Form</FormLabel>
                <TextInputBox>
                  <Icon name="RiLockPasswordFill" />
                  <FormControl>
                    <TextInput
                      ref={inputRefs[11]}
                      type={inputTypes[11]}
                      placeholder="Placeholder..."
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <TextInputEyeButton
                    onChangeVisibility={(visible) =>
                      handleChangeVisibility(visible, 11)
                    }
                  />
                </TextInputBox>
                <FormCaption>Caption</FormCaption>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

const FormSchema = z.object({
  email: z.email({ error: "Please type an email." }),
});
