<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRightIcon } from "lucide-vue-next";
import { DropdownMenuSubTrigger, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  DropdownMenuSubTriggerProps & {
    class?: HTMLAttributes["class"];
    inset?: boolean;
  }
>();

const delegatedProps = reactiveOmit(props, "class", "inset");
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuSubTrigger
    data-slot="dropdown-menu-sub-trigger"
    :data-inset="inset ? '' : undefined"
    v-bind="forwardedProps"
    :class="cn('dropdown-menu-sub-trigger', props.class)"
  >
    <slot />
    <ChevronRightIcon />
  </DropdownMenuSubTrigger>
</template>
