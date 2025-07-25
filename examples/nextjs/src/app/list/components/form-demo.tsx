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
"use client";

import { useForm } from "react-hook-form";

import { Form, FormField, TextInput } from "@abc-def/react";

interface Props {}

const FormDemo: React.FC<Props> = () => {
  const form = useForm<{ username: string }>();
  return (
    <Form {...form}>
      <FormField
        name="username"
        control={form.control}
        render={({ field }) => (
          <TextInput
            {...field}
            placeholder="Username"
            className="rounded border p-2"
          />
        )}
      />
    </Form>
  );
};

export default FormDemo;
