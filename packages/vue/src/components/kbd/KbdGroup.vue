<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <kbd data-slot="kbd-group" :class="cn('kbd-group', props.class)">
    <slot />
  </kbd>
</template>
