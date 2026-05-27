<script setup lang="ts">
import { Separator } from "@line/abc-def-vue/separator";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Horizontal">
    <div class="style-lyra:text-xs/relaxed flex flex-col gap-4 text-sm">
      <div class="flex flex-col gap-1">
        <div class="leading-none font-medium">shadcn/ui</div>
        <div class="text-muted-foreground">
          The Foundation for your Design System
        </div>
      </div>
      <Separator />
      <div>
        A set of beautifully designed components that you can customize, extend,
        and build on.
      </div>
    </div>
  </Example>
</template>
