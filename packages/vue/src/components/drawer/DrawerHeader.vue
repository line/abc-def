<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div data-slot="drawer-header" :class="cn('drawer-header', props.class)">
    <slot />
  </div>
</template>
