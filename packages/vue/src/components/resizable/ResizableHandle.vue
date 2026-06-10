<script setup lang="ts">
import type {
  SplitterResizeHandleEmits,
  SplitterResizeHandleProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { SplitterResizeHandle, useForwardPropsEmits } from "reka-ui";

import { cn } from "@/lib/utils";

const props = defineProps<
  SplitterResizeHandleProps & {
    class?: HTMLAttributes["class"];
    withHandle?: boolean;
  }
>();
const emits = defineEmits<SplitterResizeHandleEmits>();

const delegatedProps = reactiveOmit(props, "class", "withHandle");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SplitterResizeHandle
    data-slot="resizable-handle"
    v-bind="forwarded"
    :class="cn('resizable-handle', props.class)"
  >
    <template v-if="props.withHandle">
      <div class="resizable-handle-thumb">
        <slot />
      </div>
    </template>
  </SplitterResizeHandle>
</template>
