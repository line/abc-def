<script setup lang="ts">
import type { RadioGroupItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { RadioGroupIndicator, RadioGroupItem, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  RadioGroupItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    v-bind="forwardedProps"
    :class="cn('peer radio-group-item', props.class)"
  >
    <RadioGroupIndicator
      data-slot="radio-group-indicator"
      class="radio-group-indicator"
    >
      <slot>
        <span class="radio-group-indicator-dot" />
      </slot>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
