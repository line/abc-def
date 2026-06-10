<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Kbd } from "@line/abc-def-vue/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "@line/abc-def-vue/tooltip";

import IconPlaceholder from "@/components/IconPlaceholder.vue";
import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Keyboard Shortcut">
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="outline" size="icon-sm">
          <IconPlaceholder
            lucide="SaveIcon"
            tabler="IconDeviceFloppy"
            hugeicons="FloppyDiskIcon"
            phosphor="FloppyDiskIcon"
            remixicon="RiSave3Line"
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent class="pr-1.5">
        <div class="flex items-center gap-2">Save Changes <Kbd>S</Kbd></div>
      </TooltipContent>
    </Tooltip>
  </Example>
</template>
