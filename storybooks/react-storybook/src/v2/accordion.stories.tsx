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
import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionTriggerIcon,
} from "@line/abc-def-react/v2";

const items = [
  {
    value: "notifications",
    trigger: "Notification Settings",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "privacy",
    trigger: "Privacy & Security",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
];

const meta: Meta<
  Omit<React.ComponentProps<typeof Accordion>, "type"> & {
    multiple: boolean;
  }
> = {
  title: "Accordion-v2",
  component: undefined,
  args: {
    multiple: false,
    border: false,
  },
  argTypes: {
    multiple: {
      description:
        "Set whether multiple Accordion items can be expanded simultaneously.",
      table: {
        category: "Accordion",
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
    },
    border: {
      description:
        "Set whether to use a border applied to the entire Accordion area.",
      table: {
        category: "Accordion",
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
      control: "boolean",
    },
  },
  render: (args) => {
    return (
      <Accordion border={args.border} multiple={args.multiple}>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>
              {item.trigger}
              <AccordionTriggerIcon className="ml-auto" />
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
