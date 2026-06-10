<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import IconPlaceholder from "@/components/IconPlaceholder.vue";
import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Icon">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="ghost" size="icon">
          <IconPlaceholder
            lucide="InfoIcon"
            tabler="IconInfoCircle"
            hugeicons="AlertCircleIcon"
            phosphor="InfoIcon"
            remixicon="RiInformationLine"
          />
          <span class="sr-only">Info</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Additional information</p>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
