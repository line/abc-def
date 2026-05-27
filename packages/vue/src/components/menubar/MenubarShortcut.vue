<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span
    data-slot="menubar-shortcut"
    :class="cn('menubar-shortcut', props.class)"
  >
    <slot />
  </span>
</template>
