<script setup lang="ts">
import type {
  NavigationMenuContentEmits,
  NavigationMenuContentProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { NavigationMenuContent, useForwardPropsEmits } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  NavigationMenuContentProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<NavigationMenuContentEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <NavigationMenuContent
    data-slot="navigation-menu-content"
    v-bind="forwarded"
    :class="cn('navigation-menu-content', props.class)"
  >
    <slot />
  </NavigationMenuContent>
</template>
