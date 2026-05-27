<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

import { cn } from "@/lib/utils";
import { Skeleton } from "../skeleton";

const props = defineProps<{
  showIcon?: boolean;
  class?: HTMLAttributes["class"];
}>();

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`;
});
</script>

<template>
  <div
    data-slot="sidebar-menu-skeleton"
    data-sidebar="menu-skeleton"
    :class="cn('sidebar-menu-skeleton', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="sidebar-menu-skeleton-icon"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="sidebar-menu-skeleton-text"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
