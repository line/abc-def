<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Long Content">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="outline" class="w-fit"> Show Tooltip </Button>
      </TooltipTrigger>
      <TooltipContent>
        To learn more about how this works, check out the docs. If you have any
        questions, please reach out to us.
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
