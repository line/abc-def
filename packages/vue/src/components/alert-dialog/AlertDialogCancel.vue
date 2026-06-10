<script setup lang="ts">
import type { AlertDialogCancelProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AlertDialogCancel } from "reka-ui";

import type { ButtonVariants } from "../button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../button";

const props = withDefaults(
  defineProps<
    AlertDialogCancelProps & {
      class?: HTMLAttributes["class"];
      variant?: ButtonVariants["variant"];
      size?: ButtonVariants["size"];
    }
  >(),
  {
    variant: "outline",
    size: "default",
  },
);

const delegatedProps = reactiveOmit(props, "class", "variant", "size");
</script>

<template>
  <AlertDialogCancel
    data-slot="alert-dialog-cancel"
    v-bind="delegatedProps"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </AlertDialogCancel>
</template>
