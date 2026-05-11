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

import type { DayButton, Locale } from "react-day-picker";
import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("group/calendar calendar", className)}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("calendar-root", defaultClassNames.root),
        months: cn("calendar-months", defaultClassNames.months),
        month: cn("calendar-month", defaultClassNames.month),
        nav: cn("calendar-nav", defaultClassNames.nav),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "calendar-nav-button",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "calendar-nav-button",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "calendar-month-caption",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn("calendar-dropdowns", defaultClassNames.dropdowns),
        dropdown_root: cn(
          "calendar-dropdown-root",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("calendar-dropdown", defaultClassNames.dropdown),
        caption_label: cn(
          "calendar-caption",
          captionLayout === "label"
            ? "calendar-caption"
            : "calendar-caption-label",
          defaultClassNames.caption_label,
        ),
        table: "calendar-table",
        weekdays: cn("calendar-weekdays", defaultClassNames.weekdays),
        weekday: cn("calendar-weekday", defaultClassNames.weekday),
        week: cn("calendar-week", defaultClassNames.week),
        week_number_header: cn(
          "calendar-week-number-header",
          defaultClassNames.week_number_header,
        ),
        week_number: cn("calendar-week-number", defaultClassNames.week_number),
        day: cn(
          "group/day calendar-day [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day,
        ),
        range_start: cn("calendar-range-start", defaultClassNames.range_start),
        range_middle: cn(
          "calendar-range-middle",
          defaultClassNames.range_middle,
        ),
        range_end: cn("calendar-range-end", defaultClassNames.range_end),
        today: cn("calendar-today", defaultClassNames.today),
        outside: cn("calendar-outside", defaultClassNames.outside),
        disabled: cn("calendar-disabled", defaultClassNames.disabled),
        hidden: cn("calendar-hidden", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={cn("cn-rtl-flip calendar-chevron", className)}
                {...props}
              />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("cn-rtl-flip calendar-chevron", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon
              className={cn("calendar-chevron", className)}
              {...props}
            />
          );
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="calendar-week-number-value">{children}</div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    // if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn("calendar-day-button", defaultClassNames.day, className)}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
