<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import type { FieldLegendVariants } from ".";
import { cn } from "@/lib/utils";
import { fieldLegendVariants } from ".";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    variant?: FieldLegendVariants["variant"];
  }>(),
  {
    variant: "legend",
  },
);
</script>

<template>
  <legend
    data-slot="field-legend"
    :data-variant="variant"
    :class="cn(fieldLegendVariants({ variant }), props.class)"
  >
    <slot />
  </legend>
</template>
