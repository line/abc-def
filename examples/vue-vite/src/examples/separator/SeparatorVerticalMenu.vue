<script setup lang="ts">
import { Separator } from "@line/abc-def-vue/separator";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Vertical Menu">
    <div
      class="style-lyra:text-xs/relaxed flex items-center gap-2 text-sm md:gap-4"
    >
      <div class="flex flex-col gap-1">
        <span class="font-medium">Settings</span>
        <span class="text-muted-foreground text-xs"> Manage preferences </span>
      </div>
      <Separator orientation="vertical" />
      <div class="flex flex-col gap-1">
        <span class="font-medium">Account</span>
        <span class="text-muted-foreground text-xs"> Profile & security </span>
      </div>
      <Separator orientation="vertical" />
      <div class="flex flex-col gap-1">
        <span class="font-medium">Help</span>
        <span class="text-muted-foreground text-xs">Support & docs</span>
      </div>
    </div>
  </Example>
</template>
