<script setup lang="ts">
import type { PaginationNextProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRightIcon } from "lucide-vue-next";
import { PaginationNext, useForwardProps } from "reka-ui";

import type { ButtonVariants } from "../button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";

const props = withDefaults(
  defineProps<
    PaginationNextProps & {
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
  <PaginationNext
    data-slot="pagination-next"
    :class="
      cn(
        buttonVariants({ variant: 'ghost', size }),
        'pagination-link pagination-link-next',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <slot>
      <span class="hidden sm:block">Next</span>
      <ChevronRightIcon data-icon="inline-end" />
    </slot>
  </PaginationNext>
</template>
