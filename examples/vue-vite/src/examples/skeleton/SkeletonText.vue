<script setup lang="ts">
import { Skeleton } from "@line/abc-def-vue/skeleton";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Text">
    <div class="flex w-full flex-col gap-2">
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-3/4" />
    </div>
  </Example>
</template>
