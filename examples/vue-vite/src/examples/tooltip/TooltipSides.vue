<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import { Example } from "@/registry/bases/reka/components/example";

const sides = ["top", "right", "bottom", "left"] as const;
</script>

<template>
  <Example title="Sides">
    <div class="flex flex-wrap gap-2">
      <Tooltip v-for="side in sides" :key="side">
        <TooltipTrigger :as-child="true">
          <Button variant="outline" class="w-fit capitalize">
            {{ side }}
          </Button>
        </TooltipTrigger>
        <TooltipContent :side="side">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </Example>
</template>
