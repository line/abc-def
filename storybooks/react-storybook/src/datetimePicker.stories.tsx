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
import React from "react";

import { Badge, Calendar, Divider, TimePicker } from "@abc-def/react";

const meta: Meta = {
  title: "Combinations/DatetimePicker",
};

export default meta;

export const Default = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={
          <div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} />
            </div>
          </div>
        }
      />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>
  );
};

export const Hour = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={
          <div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} granularity="hour" />
            </div>
          </div>
        }
      />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>
  );
};

export const Minute = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={
          <div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} granularity="minute" />
            </div>
          </div>
        }
      />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>
  );
};

export const AM_PM = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={
          <div className="border-neutral-transparent border-t-8">
            <Divider variant="subtle" />
            <div className="px-2 pt-2">
              <TimePicker date={date} onChange={setDate} hourCycle={12} />
            </div>
          </div>
        }
      />
      <Badge variant="subtle" className="mt-2">
        Selected Date: {date?.toLocaleString()}
      </Badge>
    </>
  );
};
