<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="avatar-group-count"
    :class="cn('avatar-group-count', props.class)"
  >
    <slot />
  </div>
</template>
