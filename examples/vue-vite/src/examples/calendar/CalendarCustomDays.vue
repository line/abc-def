<script setup lang="ts">
import type { DateRange } from "reka-ui";
import { Card, CardContent } from "@line/abc-def-vue/card";
import { RangeCalendar } from "@line/abc-def-vue/range-calendar";
import { CalendarDate } from "@internationalized/date";
import { ref } from "vue";

import { Example } from "@/components/example";

const range = ref({
  start: new CalendarDate(new Date().getFullYear(), 12, 8),
  end: new CalendarDate(new Date().getFullYear(), 12, 18),
} as DateRange);

function isWeekend(date: CalendarDate) {
  const jsDate = new Date(date.year, date.month - 1, date.day);
  const dayOfWeek = jsDate.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

function getPrice(date: CalendarDate) {
  return isWeekend(date) ? "$120" : "$100";
}
</script>

<template>
  <Example title="Custom Days">
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <RangeCalendar
          v-model="range as any"
          :number-of-months="1"
          layout="month-and-year"
          class="[--rdp-cell-size:theme(spacing.10)] md:[--rdp-cell-size:theme(spacing.12)]"
        >
          <template #calendar-cell="{ date }">
            <div class="flex h-full flex-col items-center justify-center">
              <span>{{ date.day }}</span>
              <span class="text-muted-foreground text-xs">{{
                getPrice(date)
              }}</span>
            </div>
          </template>
        </RangeCalendar>
      </CardContent>
    </Card>
  </Example>
</template>
