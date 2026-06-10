<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <p data-slot="item-description" :class="cn('item-description', props.class)">
    <slot />
  </p>
</template>
