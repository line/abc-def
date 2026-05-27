<script lang="ts" setup>
import type { CalendarCellProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { CalendarCell, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  CalendarCellProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarCell
    data-slot="calendar-cell"
    :class="cn('calendar-day', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>
