<script setup lang="ts">
import { Calendar } from "@line/abc-def-vue/calendar";
import { Card, CardContent } from "@line/abc-def-vue/card";
import { CalendarDate } from "@internationalized/date";
import { ref } from "vue";

import { Example } from "@/components/example";

const date = ref(
  new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, 12),
);
</script>

<template>
  <Example title="Single">
    <Card class="mx-auto w-fit p-0">
      <CardContent class="p-0">
        <Calendar
          :model-value="date as any"
          layout="month-and-year"
          @update:model-value="(value) => (date = value as typeof date)"
        />
      </CardContent>
    </Card>
  </Example>
</template>
