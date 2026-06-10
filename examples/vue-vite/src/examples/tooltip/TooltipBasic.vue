<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Basic">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="outline" class="w-fit"> Show Tooltip </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
