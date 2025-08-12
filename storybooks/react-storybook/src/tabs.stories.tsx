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

import {
  Badge,
  Icon,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@line/abc-def-react";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",
  component: Tabs,
  decorators: (Story) => <Story />,
};

export default meta;

export const Default = () => (
  <Tabs>
    <TabsList>
      <TabsTrigger value="a">Trigger A</TabsTrigger>
      <TabsTrigger value="b">Trigger B</TabsTrigger>
    </TabsList>
    <TabsContent value="a">Content A</TabsContent>
    <TabsContent value="b">Content B</TabsContent>
  </Tabs>
);

export const With_Default_Value = () => (
  <Tabs defaultValue="a">
    <TabsList>
      <TabsTrigger value="a">Trigger A</TabsTrigger>
      <TabsTrigger value="b">Trigger B</TabsTrigger>
    </TabsList>
    <TabsContent value="a">Content A</TabsContent>
    <TabsContent value="b">Content B</TabsContent>
  </Tabs>
);

export const Combination = () => (
  <Tabs defaultValue="a">
    <TabsList>
      <TabsTrigger value="a">
        <Icon name="RiFlashlightFill" className="mr-1" />
        Trigger A
        <Badge variant="subtle" color="red" className="ml-2">
          new
        </Badge>
      </TabsTrigger>
      <TabsTrigger value="b">
        <Icon name="RiFlashlightFill" className="mr-1" />
        Trigger B
      </TabsTrigger>
    </TabsList>
    <TabsContent value="a">Content A</TabsContent>
    <TabsContent value="b">Content B</TabsContent>
  </Tabs>
);
