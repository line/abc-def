<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span data-slot="avatar-badge" :class="cn('avatar-badge', props.class)">
    <slot />
  </span>
</template>
