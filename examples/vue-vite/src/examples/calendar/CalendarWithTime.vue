<script setup lang="ts">
import { Calendar } from "@line/abc-def-vue/calendar";
import { Card, CardContent, CardFooter } from "@line/abc-def-vue/card";
import { Field, FieldGroup, FieldLabel } from "@line/abc-def-vue/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@line/abc-def-vue/input-group";
import { CalendarDate } from "@internationalized/date";
import { ref } from "vue";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";

const date = ref<CalendarDate>(
  new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, 12),
);
</script>

<template>
  <Example title="With Time">
    <Card size="sm" class="mx-auto w-fit">
      <CardContent>
        <Calendar v-model="date as any" class="p-0" />
      </CardContent>
      <CardFooter class="bg-card border-t">
        <FieldGroup>
          <Field>
            <FieldLabel html-for="time-from"> Start Time </FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-from"
                type="time"
                step="1"
                default-value="10:30:00"
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <InputGroupAddon>
                <IconPlaceholder
                  lucide="Clock2Icon"
                  tabler="IconClockHour2"
                  hugeicons="Clock03Icon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  class="text-muted-foreground"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel html-for="time-to"> End Time </FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-to"
                type="time"
                step="1"
                default-value="12:30:00"
                class="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
              <InputGroupAddon>
                <IconPlaceholder
                  lucide="Clock2Icon"
                  tabler="IconClockHour2"
                  hugeicons="Clock03Icon"
                  phosphor="ClockIcon"
                  remixicon="RiTimeLine"
                  class="text-muted-foreground"
                />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  </Example>
</template>
