<script setup lang="ts">
import type { DateRange } from "reka-ui";
import { Button } from "@line/abc-def-vue/button";
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Popover, PopoverContent, PopoverTrigger } from "@line/abc-def-vue/popover";
import { RangeCalendar } from "@line/abc-def-vue/range-calendar";
import { CalendarDate } from "@internationalized/date";
import { ref } from "vue";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";

const date = ref({
  start: new CalendarDate(new Date().getFullYear(), 1, 20),
  end: new CalendarDate(new Date().getFullYear(), 2, 9),
} as DateRange);

function formatDate(date?: CalendarDate | unknown): string {
  if (!date) return "";
  const d = date as CalendarDate;
  const jsDate = new Date(d.year, d.month - 1, d.day);
  return jsDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatDateRange(range?: DateRange): string {
  if (!range?.start) return "";
  if (!range.end) return formatDate(range.start);
  return `${formatDate(range.start)} - ${formatDate(range.end)}`;
}
</script>

<template>
  <Example title="Date Picker Range">
    <Field class="mx-auto w-72">
      <FieldLabel html-for="date-picker-range"> Date Picker Range </FieldLabel>
      <Popover>
        <PopoverTrigger :as-child="true">
          <Button
            id="date-picker-range"
            variant="outline"
            class="justify-start px-2.5 font-normal"
          >
            <IconPlaceholder
              lucide="CalendarIcon"
              tabler="IconCalendar"
              hugeicons="CalendarIcon"
              phosphor="CalendarIcon"
              remixicon="RiCalendarLine"
              data-icon="inline-start"
            />
            <span v-if="date?.start">{{ formatDateRange(date as any) }}</span>
            <span v-else>Pick a date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" align="start">
          <RangeCalendar v-model="date as any" :number-of-months="2" />
        </PopoverContent>
      </Popover>
    </Field>
  </Example>
</template>
