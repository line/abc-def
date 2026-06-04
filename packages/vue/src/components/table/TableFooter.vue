<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <tfoot data-slot="table-footer" :class="cn('table-footer', props.class)">
    <slot />
  </tfoot>
</template>
