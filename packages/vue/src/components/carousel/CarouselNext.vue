<script setup lang="ts">
import { ChevronRightIcon } from "lucide-vue-next";

import type { ButtonVariants } from "../button";
import type { WithClassAsProps } from "./interface";
import { cn } from "@/lib/utils";
import { Button } from "../button";
import { useCarousel } from "./useCarousel";

const props = withDefaults(
  defineProps<
    {
      variant?: ButtonVariants["variant"];
      size?: ButtonVariants["size"];
    } & WithClassAsProps
  >(),
  {
    variant: "outline",
    size: "icon-sm",
  },
);

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-next"
    :disabled="!canScrollNext"
    :class="
      cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        props.class,
      )
    "
    :variant="variant"
    :size="size"
    @click="scrollNext"
  >
    <slot>
      <ChevronRightIcon class="cn-rtl-flip" />
      <span class="sr-only">Next slide</span>
    </slot>
  </Button>
</template>
