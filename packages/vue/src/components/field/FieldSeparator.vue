<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";
import { Separator } from "../separator";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="field-separator"
    :data-content="!!$slots.default"
    :class="cn('field-separator', props.class)"
  >
    <Separator class="field-separator-line" />
    <span
      v-if="$slots.default"
      class="field-separator-content"
      data-slot="field-separator-content"
    >
      <slot />
    </span>
  </div>
</template>
