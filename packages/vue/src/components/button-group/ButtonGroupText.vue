<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Primitive } from "reka-ui";

import type { ButtonGroupVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"];
  orientation?: ButtonGroupVariants["orientation"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
});
</script>

<template>
  <Primitive
    role="group"
    :data-orientation="props.orientation"
    :as="as"
    :as-child="asChild"
    :class="cn('button-group-text', props.class)"
  >
    <slot />
  </Primitive>
</template>
