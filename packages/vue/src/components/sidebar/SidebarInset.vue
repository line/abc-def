<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <main data-slot="sidebar-inset" :class="cn('sidebar-inset', props.class)">
    <slot />
  </main>
</template>
