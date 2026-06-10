<script setup lang="ts">
import type { ComboboxGroupProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ComboboxGroup, ComboboxLabel } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  ComboboxGroupProps & {
    class?: HTMLAttributes["class"];
    heading?: string;
  }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <ComboboxGroup
    data-slot="combobox-group"
    v-bind="delegatedProps"
    :class="cn(props.class)"
  >
    <ComboboxLabel v-if="heading" class="combobox-label">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
