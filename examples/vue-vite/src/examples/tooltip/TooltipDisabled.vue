<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Disabled">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <span class="inline-block w-fit">
          <Button variant="outline" disabled> Disabled </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>This feature is currently unavailable</p>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
