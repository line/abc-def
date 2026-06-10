<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { cn } from "@/lib/utils";
import { useCarousel } from "./useCarousel";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<WithClassAsProps>();

const { carouselRef, orientation } = useCarousel();
</script>

<template>
  <div
    ref="carouselRef"
    data-slot="carousel-content"
    class="carousel-content-viewport"
  >
    <div
      :data-orientation="orientation"
      :class="cn('carousel-content', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </div>
  </div>
</template>
