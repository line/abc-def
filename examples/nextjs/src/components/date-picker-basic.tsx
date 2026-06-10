"use client";

import * as React from "react";
import { format } from "date-fns";

import { Button } from "@line/abc-def-react/button";
import { Calendar } from "@line/abc-def-react/calendar";
import { Field, FieldLabel } from "@line/abc-def-react/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@line/abc-def-react/popover";

export function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Field className="mx-auto w-44">
      <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="justify-start font-normal"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
