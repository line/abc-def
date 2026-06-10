<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <li data-slot="breadcrumb-item" :class="cn('breadcrumb-item', props.class)">
    <slot />
  </li>
</template>
