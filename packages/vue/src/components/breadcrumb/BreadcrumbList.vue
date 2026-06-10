<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <ol data-slot="breadcrumb-list" :class="cn('breadcrumb-list', props.class)">
    <slot />
  </ol>
</template>
