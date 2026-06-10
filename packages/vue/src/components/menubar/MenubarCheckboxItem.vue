<script setup lang="ts">
import type {
  MenubarCheckboxItemEmits,
  MenubarCheckboxItemProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { CheckIcon } from "lucide-vue-next";
import {
  MenubarCheckboxItem,
  MenubarItemIndicator,
  useForwardPropsEmits,
} from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  MenubarCheckboxItemProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<MenubarCheckboxItemEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <MenubarCheckboxItem
    data-slot="menubar-checkbox-item"
    v-bind="forwarded"
    :class="cn('menubar-checkbox-item', props.class)"
  >
    <span class="menubar-item-indicator">
      <MenubarItemIndicator>
        <slot name="indicator-icon">
          <CheckIcon />
        </slot>
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>
