<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";
import { Textarea } from "../textarea";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Textarea
    data-slot="input-group-control"
    :class="cn('input-group-control input-group-textarea', props.class)"
  />
</template>
