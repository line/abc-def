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
import React from "react";
import { Badge, Calendar } from "@line/abc-def-react";

const meta: Meta<typeof Calendar> = {
  title: "Calendar",
  component: Calendar,
  args: {
    mode: "default",
    showToday: true,
    showOutsideDays: true,
  },
  argTypes: {
    mode: {
      description: "Set the selection mode of the Calendar.",
      table: {
        category: "Calendar",
        type: {
          summary: "default | single | multiple | range",
        },
        defaultValue: {
          summary: "default",
        },
      },
      control: "radio",
      options: ["default", "single", "multiple", "range"],
    },
    showToday: {
      description: "Set whether to display today's date in the Calendar.",
      table: {
        category: "Calendar",
        defaultValue: {
          summary: "true",
        },
      },
      control: "boolean",
    },
    showOutsideDays: {
      description:
        "Set whether to display days outside the current month in the Calendar.",
      table: {
        category: "Calendar",
        defaultValue: {
          summary: "true",
        },
      },
      control: "boolean",
    },
  },
  decorators: (Story) => <Story />,
  render: ({ mode, showToday, showOutsideDays }) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [dates, setDates] = React.useState<Date[] | undefined>(undefined);
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
      undefined,
    );

    if (mode === "default") {
      return (
        <Calendar
          mode={mode}
          showToday={showToday}
          showOutsideDays={showOutsideDays}
        />
      );
    } else if (mode === "single") {
      return (
        <div>
          <Calendar
            mode={mode}
            showToday={showToday}
            showOutsideDays={showOutsideDays}
            selected={date}
            onSelect={setDate}
          />
          <Badge variant="subtle">Selected Date: {date?.toDateString()}</Badge>
        </div>
      );
    } else if (mode === "multiple") {
      return (
        <div>
          <Calendar
            mode={mode}
            showToday={showToday}
            selected={dates}
            onSelect={setDates}
          />
          <Badge variant="subtle">Selected Dates: </Badge>{" "}
          {dates?.map((date, index) => {
            return (
              <>
                {index !== 0 && ", "}
                <Badge variant="subtle">{date.toDateString()}</Badge>
              </>
            );
          })}
        </div>
      );
    } else if (mode === "range") {
      return (
        <div>
          <Calendar
            mode={mode}
            showToday={showToday}
            selected={dateRange}
            onSelect={setDateRange}
          />
          <Badge variant="subtle">
            Selected Date (from): {dateRange?.from?.toDateString()}
          </Badge>
          {", "}
          <Badge variant="subtle">
            Selected Date (to): {dateRange?.to?.toDateString()}
          </Badge>
        </div>
      );
    } else {
      return <></>;
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} as Story;

export const Mode_Default = () => <Calendar mode="default" />;

export const Mode_Single = () => {
  const [singleDate, setSingleDate] = React.useState<Date | undefined>(
    undefined,
  );
  return (
    <>
      <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} />
      <Badge variant="subtle">
        Selected Date: {singleDate?.toDateString()}
      </Badge>
    </>
  );
};

export const Mode_Multiple = () => {
  const [dates, setDates] = React.useState<Date[] | undefined>(undefined);
  return (
    <>
      <Calendar mode="multiple" selected={dates} onSelect={setDates} />
      <Badge variant="subtle">Selected Dates: </Badge>{" "}
      {dates?.map((date, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && ", "}
            <Badge variant="subtle">{date.toDateString()}</Badge>
          </React.Fragment>
        );
      })}
    </>
  );
};

export const Mode_Range = () => {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  return (
    <>
      <Calendar mode="range" selected={date} onSelect={setDate} />
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
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  return (
    <>
      <Calendar
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
