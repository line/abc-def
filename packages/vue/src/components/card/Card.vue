<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: "default" | "sm";
  }>(),
  {
    size: "default",
  },
);
</script>

<template>
  <div data-slot="card" :data-size="size" :class="cn('card', props.class)">
    <slot />
  </div>
</template>
