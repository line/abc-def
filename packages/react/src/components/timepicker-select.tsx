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
import * as React from "react";

import type { Period } from "../lib/utils";
import { display12HourValue, setDateByType } from "../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface PeriodSelectorProps {
  period: Period;
  setPeriod?: (m: Period) => void;
  date?: Date | null;
  onDateChange?: (date: Date | undefined) => void;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
  className?: string;
}

const TimePickerSelect = React.forwardRef<
  HTMLButtonElement,
  PeriodSelectorProps
>(
  (
    {
      period,
      setPeriod,
      date,
      onDateChange,
      onLeftFocus,
      onRightFocus,
      className,
    },
    ref,
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();
    };

    const handleValueChange = (value: Period) => {
      setPeriod?.(value);

      /**
       * trigger an update whenever the user switches between AM and PM;
       * otherwise user must manually change the hour each time
       */
      if (date) {
        const tempDate = new Date(date);
        const hours = display12HourValue(date.getHours());
        onDateChange?.(
          setDateByType(
            tempDate,
            hours.toString(),
            "12hours",
            period === "AM" ? "PM" : "AM",
          ),
        );
      }
    };

    return (
      <Select
        value={period}
        onValueChange={(value: Period) => handleValueChange(value)}
      >
        <SelectTrigger
          className={className}
          ref={ref}
          onKeyDown={handleKeyDown}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="AM">AM</SelectItem>
          <SelectItem value="PM">PM</SelectItem>
        </SelectContent>
      </Select>
    );
  },
);

TimePickerSelect.displayName = "TimePickerSelect";

export { TimePickerSelect };
export type { PeriodSelectorProps };
