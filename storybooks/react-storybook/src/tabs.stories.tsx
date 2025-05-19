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

import { Icon, Tabs, TabsContent, TabsList, TabsTrigger } from "@abc-def/react";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  decorators: (Story) => <Story />,
  render: () => {
    return (
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content A</TabsContent>
        <TabsContent value="b">Content B</TabsContent>
      </Tabs>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon = () => (
  <Tabs defaultValue="a">
    <TabsList>
      <TabsTrigger value="a">
        A<Icon name="RiFlashlightFill" className="ml-1" />
      </TabsTrigger>
      <TabsTrigger value="b">B</TabsTrigger>
    </TabsList>
    <TabsContent value="a">Content A</TabsContent>
    <TabsContent value="b">Content B</TabsContent>
  </Tabs>
);
export const WithText = () => (
  <Tabs defaultValue="a">
    <TabsList>
      <TabsTrigger value="a">
        A<span className="ml-1">1,000</span>
      </TabsTrigger>
      <TabsTrigger value="b">B</TabsTrigger>
    </TabsList>
    <TabsContent value="a">Content A</TabsContent>
    <TabsContent value="b">Content B</TabsContent>
  </Tabs>
);
