<script setup lang="ts">
import { Calendar } from "@line/abc-def-vue/calendar";
import { Card, CardContent } from "@line/abc-def-vue/card";
import { CalendarDate } from "@internationalized/date";
import { ref } from "vue";

import { Example } from "@/components/example";

const date = ref<CalendarDate>(
  new CalendarDate(new Date().getFullYear(), 2, 3),
);

const bookedDates = Array.from(
  { length: 15 },
  (_, i) => new CalendarDate(new Date().getFullYear(), 2, 12 + i),
);
</script>

<template>
  <Example title="Booked Dates">
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          v-model="date as any"
          :disabled="bookedDates as any"
          :is-date-unavailable="
            (date) => bookedDates.some((d) => d.compare(date as any) === 0)
          "
        />
      </CardContent>
    </Card>
  </Example>
</template>
