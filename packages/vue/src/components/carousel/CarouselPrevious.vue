<script setup lang="ts">
import { ChevronLeftIcon } from "lucide-vue-next";

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

const { orientation, canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <Button
    data-slot="carousel-previous"
    :data-orientation="orientation"
    :disabled="!canScrollPrev"
    :class="cn('carousel-previous', props.class)"
    :variant="variant"
    :size="size"
    @click="scrollPrev"
  >
    <slot>
      <ChevronLeftIcon class="cn-rtl-flip" />
      <span class="sr-only">Previous slide</span>
    </slot>
  </Button>
</template>
