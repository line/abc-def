<script lang="ts" setup>
import type { CalendarNextProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRightIcon } from "lucide-vue-next";
import { CalendarNext, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";

const props = defineProps<
  CalendarNextProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarNext
    data-slot="calendar-next-button"
    :class="
      cn(
        buttonVariants({ variant: 'outline' }),
        'calendar-nav-button',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronRightIcon class="calendar-chevron" />
    </slot>
  </CalendarNext>
</template>
