<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionHeader, AccordionTrigger } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionHeader data-slot="accordion-header" class="accordion-header">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="cn('accordion-trigger', props.class)"
    >
      <slot />
      <slot name="icon-closed">
        <svg
          data-slot="accordion-trigger-icon"
          data-state="closed"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </slot>
      <slot name="icon-open">
        <svg
          data-slot="accordion-trigger-icon"
          data-state="open"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m6 15 6-6 6 6" />
        </svg>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
