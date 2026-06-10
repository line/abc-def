<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { useForwardProps } from "reka-ui";
import { computed } from "vue";
import { useVueOTPContext } from "vue-input-otp";

import { cn } from "@/lib/utils";

const props = defineProps<{ index: number; class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardProps(delegatedProps);

const context = useVueOTPContext();

const slot = computed(() => context?.value.slots[props.index]);
</script>

<template>
  <div
    v-bind="forwarded"
    data-slot="input-otp-slot"
    :data-active="slot?.isActive"
    :class="cn('input-otp-slot', props.class)"
  >
    {{ slot?.char }}
    <div v-if="slot?.hasFakeCaret" class="input-otp-caret">
      <div class="input-otp-caret-indicator" />
    </div>
  </div>
</template>
