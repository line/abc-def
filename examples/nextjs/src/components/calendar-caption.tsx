"use client";

import { Calendar } from "@line/abc-def-react/calendar";

export function CalendarCaption() {
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      className="rounded-lg border"
    />
  );
}
