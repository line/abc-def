<script setup lang="ts">
import type { MenubarSubTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronRightIcon } from "lucide-vue-next";
import { MenubarSubTrigger, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  MenubarSubTriggerProps & { class?: HTMLAttributes["class"]; inset?: boolean }
>();

const delegatedProps = reactiveOmit(props, "class", "inset");
const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarSubTrigger
    data-slot="menubar-sub-trigger"
    :data-inset="inset ? '' : undefined"
    v-bind="forwardedProps"
    :class="cn('menubar-sub-trigger', props.class)"
  >
    <slot />
    <ChevronRightIcon class="menubar-sub-trigger-chevron" />
  </MenubarSubTrigger>
</template>
