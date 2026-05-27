<script setup lang="ts">
import type { AvatarImageProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AvatarImage } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  AvatarImageProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <AvatarImage
    data-slot="avatar-image"
    v-bind="delegatedProps"
    :class="cn('avatar-image', props.class)"
  >
    <slot />
  </AvatarImage>
</template>
