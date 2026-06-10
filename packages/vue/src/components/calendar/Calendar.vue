<script lang="ts" setup>
import type { CalendarRootEmits, CalendarRootProps, DateValue } from "reka-ui";
import type { HTMLAttributes, Ref } from "vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { createReusableTemplate, reactiveOmit, useVModel } from "@vueuse/core";
import { CalendarRoot, useDateFormatter, useForwardPropsEmits } from "reka-ui";
import { createYear, createYearRange, toDate } from "reka-ui/date";
import { computed, toRaw } from "vue";

import type { LayoutTypes } from ".";
import { cn } from "@/lib/utils";
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
} from ".";
import { NativeSelect, NativeSelectOption } from "../native-select";

const props = withDefaults(
  defineProps<
    CalendarRootProps & {
      class?: HTMLAttributes["class"];
      layout?: LayoutTypes;
      yearRange?: DateValue[];
    }
  >(),
  {
    modelValue: undefined,
    layout: undefined,
  },
);
const emits = defineEmits<CalendarRootEmits>();

const delegatedProps = reactiveOmit(props, "class", "layout", "placeholder");

const placeholder = useVModel(props, "placeholder", emits, {
  passive: true,
  defaultValue: props.defaultPlaceholder ?? today(getLocalTimeZone()),
}) as Ref<DateValue>;

const formatter = useDateFormatter(props.locale ?? "en");

const yearRange = computed(() => {
  return (
    props.yearRange ??
    createYearRange({
      start:
        props?.minValue ??
        (
          toRaw(props.placeholder) ??
          props.defaultPlaceholder ??
          today(getLocalTimeZone())
        ).cycle("year", -100),

      end:
        props?.maxValue ??
        (
          toRaw(props.placeholder) ??
          props.defaultPlaceholder ??
          today(getLocalTimeZone())
        ).cycle("year", 10),
    })
  );
});

const [DefineMonthTemplate, ReuseMonthTemplate] = createReusableTemplate<{
  date: DateValue;
}>();
const [DefineYearTemplate, ReuseYearTemplate] = createReusableTemplate<{
  date: DateValue;
}>();

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DefineMonthTemplate v-slot="{ date }">
    <div class="calendar-dropdown-root">
      <div class="calendar-dropdown-value">
        {{ formatter.custom(toDate(date), { month: "short" }) }}
      </div>
      <NativeSelect
        class="calendar-dropdown-select calendar-dropdown"
        @change="
          (e: Event) => {
            placeholder = placeholder.set({
              month: Number((e?.target as any)?.value),
            });
          }
        "
      >
        <NativeSelectOption
          v-for="month in createYear({ dateObj: date })"
          :key="month.toString()"
          :value="month.month"
          :selected="date.month === month.month"
        >
          {{ formatter.custom(toDate(month), { month: "short" }) }}
        </NativeSelectOption>
      </NativeSelect>
    </div>
  </DefineMonthTemplate>

  <DefineYearTemplate v-slot="{ date }">
    <div class="calendar-dropdown-root">
      <div class="calendar-dropdown-value">
        {{ formatter.custom(toDate(date), { year: "numeric" }) }}
      </div>
      <NativeSelect
        class="calendar-dropdown-select calendar-dropdown"
        @change="
          (e: Event) => {
            placeholder = placeholder.set({
              year: Number((e?.target as any)?.value),
            });
          }
        "
      >
        <NativeSelectOption
          v-for="year in yearRange"
          :key="year.toString()"
          :value="year.year"
          :selected="date.year === year.year"
        >
          {{ formatter.custom(toDate(year), { year: "numeric" }) }}
        </NativeSelectOption>
      </NativeSelect>
    </div>
  </DefineYearTemplate>

  <CalendarRoot
    v-slot="{ grid, weekDays, date }"
    v-bind="forwarded"
    v-model:placeholder="placeholder"
    data-slot="calendar"
    :class="cn('calendar calendar-root', props.class)"
  >
    <CalendarHeader class="calendar-month-caption">
      <nav class="calendar-nav">
        <CalendarPrevButton>
          <slot name="calendar-prev-icon" />
        </CalendarPrevButton>
        <CalendarNextButton>
          <slot name="calendar-next-icon" />
        </CalendarNextButton>
      </nav>

      <slot
        name="calendar-heading"
        :date="date"
        :month="ReuseMonthTemplate"
        :year="ReuseYearTemplate"
      >
        <template v-if="layout === 'month-and-year'">
          <div class="calendar-dropdowns">
            <ReuseMonthTemplate :date="date" />
            <ReuseYearTemplate :date="date" />
          </div>
        </template>
        <template v-else-if="layout === 'month-only'">
          <div class="calendar-dropdowns">
            <ReuseMonthTemplate :date="date" />
            <span class="calendar-caption">
              {{ formatter.custom(toDate(date), { year: "numeric" }) }}
            </span>
          </div>
        </template>
        <template v-else-if="layout === 'year-only'">
          <div class="calendar-dropdowns">
            <span class="calendar-caption">
              {{ formatter.custom(toDate(date), { month: "short" }) }}
            </span>
            <ReuseYearTemplate :date="date" />
          </div>
        </template>
        <template v-else>
          <CalendarHeading />
        </template>
      </slot>
    </CalendarHeader>

    <div class="calendar-months">
      <div
        v-for="month in grid"
        :key="month.value.toString()"
        class="calendar-month"
      >
        <CalendarGrid>
          <CalendarGridHead>
            <CalendarGridRow class="calendar-weekdays">
              <CalendarHeadCell v-for="day in weekDays" :key="day">
                {{ day }}
              </CalendarHeadCell>
            </CalendarGridRow>
          </CalendarGridHead>
          <CalendarGridBody>
            <CalendarGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="calendar-week"
            >
              <CalendarCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
              >
                <CalendarCellTrigger :day="weekDate" :month="month.value" />
              </CalendarCell>
            </CalendarGridRow>
          </CalendarGridBody>
        </CalendarGrid>
      </div>
    </div>
  </CalendarRoot>
</template>
