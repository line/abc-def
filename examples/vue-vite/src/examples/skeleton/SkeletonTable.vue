<script setup lang="ts">
import { Skeleton } from "@line/abc-def-vue/skeleton";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Table">
    <div class="flex w-full flex-col gap-2">
      <div class="flex gap-4">
        <Skeleton class="h-4 flex-1" />
        <Skeleton class="h-4 w-24" />
        <Skeleton class="h-4 w-20" />
      </div>
      <div class="flex gap-4">
        <Skeleton class="h-4 flex-1" />
        <Skeleton class="h-4 w-24" />
        <Skeleton class="h-4 w-20" />
      </div>
      <div class="flex gap-4">
        <Skeleton class="h-4 flex-1" />
        <Skeleton class="h-4 w-24" />
        <Skeleton class="h-4 w-20" />
      </div>
    </div>
  </Example>
</template>
