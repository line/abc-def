<script setup lang="ts">
import { Separator } from "@line/abc-def-vue/separator";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Vertical">
    <div class="style-lyra:text-xs/relaxed flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </Example>
</template>
