<script setup lang="ts">
import type { ContextMenuSubTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRightIcon } from "lucide-vue-next";
import { ContextMenuSubTrigger, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  ContextMenuSubTriggerProps & {
    class?: HTMLAttributes["class"];
    inset?: boolean;
  }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <ContextMenuSubTrigger
    data-slot="context-menu-sub-trigger"
    :data-inset="inset ? '' : undefined"
    v-bind="forwardedProps"
    :class="cn('context-menu-sub-trigger', props.class)"
  >
    <slot />
    <ChevronRightIcon />
  </ContextMenuSubTrigger>
</template>
