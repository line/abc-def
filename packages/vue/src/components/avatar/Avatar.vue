<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { AvatarRoot } from "reka-ui";

import type { AvatarSize } from ".";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: AvatarSize;
  }>(),
  {
    size: "default",
  },
);
</script>

<template>
  <AvatarRoot
    data-slot="avatar"
    :data-size="size"
    :class="cn('avatar', props.class)"
  >
    <slot />
  </AvatarRoot>
</template>
