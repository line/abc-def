<script setup lang="ts">
import type { AccordionContentProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionContent } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="delegatedProps"
    class="accordion-content"
  >
    <div
      data-slot="accordion-content-body"
      :class="cn('accordion-content-body', props.class)"
    >
      <slot />
    </div>
  </AccordionContent>
</template>
