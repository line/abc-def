<script setup lang="ts">
import type { ListboxFilterProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { SearchIcon } from "lucide-vue-next";
import { ListboxFilter, useForwardProps } from "reka-ui";

import { cn } from "@/lib/utils";
import { useCommand } from ".";
import { InputGroup, InputGroupAddon } from "../input-group";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  ListboxFilterProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);

const { filterState } = useCommand();
</script>

<template>
  <div data-slot="command-input-wrapper" class="command-input-wrapper">
    <InputGroup class="command-input-group">
      <ListboxFilter
        v-bind="{ ...forwardedProps, ...$attrs }"
        v-model="filterState.search"
        data-slot="command-input"
        auto-focus
        :class="cn('command-input', props.class)"
      />
      <InputGroupAddon>
        <SearchIcon class="command-input-icon" />
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
