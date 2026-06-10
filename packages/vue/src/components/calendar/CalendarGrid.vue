<script lang="ts" setup>
import type { CalendarGridProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { CalendarGrid, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  CalendarGridProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarGrid
    data-slot="calendar-grid"
    :class="cn('calendar-table', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGrid>
</template>
