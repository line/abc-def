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
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  FormCaption,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  InputBox,
  InputClearButton,
  InputEyeButton,
  InputField,
  TextInput,
} from "@abc-def/react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const FormPage: NextPage = () => {
  const [type, setType] = React.useState<"password" | "text">("password");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Form Title</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <InputField>
                    <FormLabel>Username</FormLabel>
                    <InputBox>
                      <FormControl>
                        <TextInput placeholder="shadcn" {...field} />
                      </FormControl>
                      <InputClearButton
                        onClick={() => {
                          field.onChange("");
                        }}
                      />
                    </InputBox>
                    <FormCaption>This is your public display name.</FormCaption>
                    <FormMessage />
                  </InputField>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <InputField>
                    <FormLabel>Password</FormLabel>
                    <InputBox>
                      <FormControl>
                        <TextInput
                          type={type}
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <InputEyeButton
                        onChangeVisibility={(visible) => {
                          setType(visible ? "text" : "password");
                        }}
                        onClick={() => form.setFocus("password")}
                      />
                    </InputBox>
                    <FormCaption>This is your public display name.</FormCaption>
                    <FormMessage />
                  </InputField>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormPage;
