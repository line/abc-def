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
import type { DateRange } from "@line/abc-def-react";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment, useState } from "react";

import { Badge, Calendar } from "@line/abc-def-react/v2";

const meta: Meta<typeof Calendar> = {
  title: "Calendar-v2",
  component: Calendar,
  args: {},
  argTypes: {},
  render: () => (
    <Calendar
      mode="single"
      className="border-(--border-neutral-tertiary) rounded-8 border"
    />
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mode_Single = () => {
  const [singleDate, setSingleDate] = useState<Date | undefined>(undefined);
  return (
    <>
      <Calendar
        className="border-(--border-neutral-tertiary) rounded-8 border"
        mode="single"
        captionLayout="dropdown"
        selected={singleDate}
        onSelect={setSingleDate}
      />
      <Badge variant="subtle">
        Selected Date: {singleDate?.toDateString()}
      </Badge>
    </>
  );
};

export const Mode_Multiple = () => {
  const [dates, setDates] = useState<Date[] | undefined>(undefined);
  return (
    <>
      <Calendar
        className="border-(--border-neutral-tertiary) rounded-8 border"
        mode="multiple"
        selected={dates}
        onSelect={setDates}
      />
      <Badge variant="subtle">Selected Dates: </Badge>{" "}
      {dates?.map((date, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && ", "}
            <Badge variant="subtle">{date.toDateString()}</Badge>
          </Fragment>
        );
      })}
    </>
  );
};

export const Mode_Range = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return (
    <>
      <Calendar
        className="border-(--border-neutral-tertiary) rounded-8 border"
        mode="range"
        selected={date}
        onSelect={setDate}
      />
      <Badge variant="subtle">
        Selected Date (from): {date?.from?.toDateString()}
      </Badge>
      {", "}
      <Badge variant="subtle">
        Selected Date (to): {date?.to?.toDateString()}
      </Badge>
    </>
  );
};
export const Mode_Range2 = () => {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  return (
    <>
      <Calendar
        className="border-(--border-neutral-tertiary) rounded-8 border"
        mode="range"
        onSelect={(value: { from?: Date; to?: Date } | undefined) => {
          if (value?.from != null) {
            setDate({ from: value.from, to: value.to });
          }
        }}
        selected={date}
        numberOfMonths={2}
        defaultMonth={new Date(new Date().setMonth(new Date().getMonth() - 1))}
      />
      <Badge variant="subtle">
        Selected Date (from): {date?.from?.toDateString()}
      </Badge>
      {", "}
      <Badge variant="subtle">
        Selected Date (to): {date?.to?.toDateString()}
      </Badge>
    </>
  );
};

export const Size = () => {
  return (
    <Calendar className="border-(--border-neutral-tertiary) rounded-8 border [--cell-size:--spacing(10)]" />
  );
};

export const Disabled = () => {
  return (
    <Calendar
      className="border-(--border-neutral-tertiary) rounded-8 border"
      mode="range"
      disabled={{
        before: new Date(),
        after: new Date(new Date().setDate(new Date().getDate() + 10)),
      }}
    />
  );
};
