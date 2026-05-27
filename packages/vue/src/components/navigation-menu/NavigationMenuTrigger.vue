<script setup lang="ts">
import type { NavigationMenuTriggerProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDownIcon } from "lucide-vue-next";
import { NavigationMenuTrigger, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from ".";

const props = defineProps<
  NavigationMenuTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <NavigationMenuTrigger
    data-slot="navigation-menu-trigger"
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <ChevronDownIcon class="navigation-menu-trigger-icon" aria-hidden="true" />
  </NavigationMenuTrigger>
</template>
