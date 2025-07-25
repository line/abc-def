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

import {
  Badge,
  Calendar,
  Divider,
  Icon,
  TimePeriodSelect,
  TimePickerInput,
} from "@abc-def/react";

const meta: Meta = {
  title: "Combinations/DatetimePicker",
};

export default meta;

export const Default = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  const onChange = (date: Date | undefined) => {
    setDate(date);
  };

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
              <div className="flex items-center justify-center gap-2">
                <label
                  htmlFor="timepicker-hour"
                  className="flex cursor-pointer items-center"
                >
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput
                  picker="hours"
                  date={date}
                  id="timepicker-hour"
                  onDateChange={onChange}
                  ref={hourRef}
                  onRightFocus={() => minuteRef.current?.focus()}
                  className="w-12"
                />
                <TimePickerInput
                  picker="minutes"
                  date={date}
                  onDateChange={onChange}
                  ref={minuteRef}
                  onLeftFocus={() => hourRef.current?.focus()}
                  onRightFocus={() => secondRef.current?.focus()}
                  className="w-12"
                />
                <TimePickerInput
                  picker="seconds"
                  date={date}
                  onDateChange={onChange}
                  ref={secondRef}
                  onLeftFocus={() => minuteRef.current?.focus()}
                  className="w-12"
                />
              </div>
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
  const hourRef = React.useRef<HTMLInputElement>(null);

  const onChange = (date: Date | undefined) => {
    setDate(date);
  };

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
              <div className="flex items-center justify-center gap-2">
                <label
                  htmlFor="timepicker-hour"
                  className="flex cursor-pointer items-center"
                >
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput
                  picker="hours"
                  date={date}
                  id="timepicker-hour"
                  onDateChange={onChange}
                  ref={hourRef}
                  className="w-12"
                />
              </div>
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
  const hourRef = React.useRef<HTMLInputElement>(null);
  const minuteRef = React.useRef<HTMLInputElement>(null);

  const onChange = (date: Date | undefined) => {
    setDate(date);
  };

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
              <div className="flex items-center justify-center gap-2">
                <label
                  htmlFor="timepicker-hour"
                  className="flex cursor-pointer items-center"
                >
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput
                  picker="hours"
                  date={date}
                  id="timepicker-hour"
                  onDateChange={onChange}
                  ref={hourRef}
                  onRightFocus={() => minuteRef.current?.focus()}
                  className="w-12"
                />
                <TimePickerInput
                  picker="minutes"
                  date={date}
                  onDateChange={onChange}
                  ref={minuteRef}
                  onLeftFocus={() => hourRef.current?.focus()}
                  className="w-12"
                />
              </div>
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
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);
  const periodRef = React.useRef<HTMLButtonElement>(null);
  const [period, setPeriod] = React.useState<"AM" | "PM">(
    date && date.getHours() >= 12 ? "PM" : "AM",
  );
  const onChange = (date: Date | undefined) => {
    setDate(date);
  };

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
              <div className="flex items-center justify-center gap-2">
                <label
                  htmlFor="timepicker-hour"
                  className="flex cursor-pointer items-center"
                >
                  <Icon name="RiTimeLine" size={16} />
                </label>
                <TimePickerInput
                  picker="12hours"
                  date={date}
                  id="timepicker-hour"
                  onDateChange={onChange}
                  ref={hourRef}
                  period={period}
                  onRightFocus={() => minuteRef.current?.focus()}
                  className="w-12"
                />
                <TimePickerInput
                  picker="minutes"
                  date={date}
                  onDateChange={onChange}
                  ref={minuteRef}
                  onLeftFocus={() => hourRef.current?.focus()}
                  onRightFocus={() => secondRef.current?.focus()}
                  className="w-12"
                />
                <TimePickerInput
                  picker="seconds"
                  date={date}
                  onDateChange={onChange}
                  ref={secondRef}
                  onLeftFocus={() => minuteRef.current?.focus()}
                  onRightFocus={() => periodRef.current?.focus()}
                  className="w-12"
                />
                <TimePeriodSelect
                  period={period}
                  setPeriod={setPeriod}
                  date={date}
                  onDateChange={(date) => {
                    onChange(date);
                    if (date && date.getHours() >= 12) {
                      setPeriod("PM");
                    } else {
                      setPeriod("AM");
                    }
                  }}
                  ref={periodRef}
                  onLeftFocus={() => secondRef.current?.focus()}
                  className="w-fit"
                />
              </div>
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
