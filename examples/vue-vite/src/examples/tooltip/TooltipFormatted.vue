<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Formatted Content">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="outline" class="w-fit"> Status </Button>
      </TooltipTrigger>
      <TooltipContent>
        <div class="flex flex-col gap-1">
          <p class="font-semibold">Active</p>
          <p class="text-xs opacity-80">Last updated 2 hours ago</p>
        </div>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
