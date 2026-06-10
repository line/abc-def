<script setup lang="ts">
import type { NavigationMenuIndicatorProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { NavigationMenuIndicator, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <NavigationMenuIndicator
    data-slot="navigation-menu-indicator"
    v-bind="forwardedProps"
    :class="cn('navigation-menu-indicator', props.class)"
  >
    <div class="navigation-menu-indicator-arrow" />
  </NavigationMenuIndicator>
</template>
