<script setup lang="ts">
import type { NavigationMenuViewportProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { NavigationMenuViewport, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  NavigationMenuViewportProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div class="navigation-menu-viewport-position">
    <NavigationMenuViewport
      data-slot="navigation-menu-viewport"
      v-bind="forwardedProps"
      :class="cn('navigation-menu-viewport', props.class)"
    />
  </div>
</template>
