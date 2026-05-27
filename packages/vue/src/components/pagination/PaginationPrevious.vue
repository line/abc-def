<script setup lang="ts">
import type { PaginationPrevProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronLeftIcon } from "lucide-vue-next";
import { PaginationPrev, useForwardProps } from "reka-ui";

import type { ButtonVariants } from "../button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";

const props = withDefaults(
  defineProps<
    PaginationPrevProps & {
      size?: ButtonVariants["size"];
      class?: HTMLAttributes["class"];
    }
  >(),
  {
    size: "default",
  },
);

const delegatedProps = reactiveOmit(props, "class", "size");
const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <PaginationPrev
    data-slot="pagination-previous"
    :class="
      cn(
        buttonVariants({ variant: 'ghost', size }),
        'pagination-link pagination-link-prev',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <slot>
      <ChevronLeftIcon data-icon="inline-start" />
      <span class="hidden sm:block">Previous</span>
    </slot>
  </PaginationPrev>
</template>
