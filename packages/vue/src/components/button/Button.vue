<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { Primitive } from "reka-ui";

import type { ButtonVariants } from ".";
import { cn } from "@/lib/utils";
import { buttonVariants } from ".";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  rounded?: ButtonVariants["rounded"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    data-slot="button"
    :data-variant="variant ?? 'default'"
    :data-size="size ?? 'default'"
    :data-rounded="rounded ?? 'default'"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({
          variant: variant ?? 'default',
          size: size ?? 'default',
          rounded: rounded ?? 'default',
        }),
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
