<script setup lang="ts">
import type { CalendarDate } from "@internationalized/date";
import { Button } from "@line/abc-def-vue/button";
import { Calendar } from "@line/abc-def-vue/calendar";
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Popover, PopoverContent, PopoverTrigger } from "@line/abc-def-vue/popover";
import { ref } from "vue";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";

const date = ref<CalendarDate>();
const open = ref(false);

function formatDate(date?: CalendarDate): string {
  if (!date) return "";
  const jsDate = new Date(date.year, date.month - 1, date.day);
  return jsDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <Example title="Date Picker with Dropdowns">
    <Field class="mx-auto w-72">
      <FieldLabel html-for="date-picker-with-dropdowns-desktop">
        Date
      </FieldLabel>
      <Popover v-model:open="open">
        <PopoverTrigger :as-child="true">
          <Button
            id="date-picker-with-dropdowns-desktop"
            variant="outline"
            class="justify-start px-2.5 font-normal"
          >
            <span v-if="date">{{ formatDate(date) }}</span>
            <span v-else>Pick a date</span>
            <IconPlaceholder
              lucide="ChevronDownIcon"
              tabler="IconChevronDown"
              hugeicons="ArrowDownIcon"
              phosphor="CaretDownIcon"
              remixicon="RiArrowDownSLine"
              data-icon="inline-end"
              class="ml-auto"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" align="start">
          <Calendar v-model="date" layout="month-and-year" />
          <div class="flex gap-2 border-t p-2">
            <Button
              variant="outline"
              size="sm"
              class="w-full"
              @click="open = false"
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </Field>
  </Example>
</template>
