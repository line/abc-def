<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="On Link">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <a
          href="#"
          class="text-primary w-fit text-sm underline-offset-4 hover:underline"
          @click.prevent
        >
          Learn more
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click to read the documentation</p>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
