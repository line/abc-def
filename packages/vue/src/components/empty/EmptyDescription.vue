<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <p
    data-slot="empty-description"
    :class="cn('empty-description', $attrs.class ?? '')"
  >
    <slot />
  </p>
</template>
