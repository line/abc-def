<script setup lang="ts">
import { Skeleton } from "@line/abc-def-vue/skeleton";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Form">
    <div class="flex w-full flex-col gap-7">
      <div class="flex flex-col gap-3">
        <Skeleton class="h-4 w-20" />
        <Skeleton class="h-10 w-full" />
      </div>
      <div class="flex flex-col gap-3">
        <Skeleton class="h-4 w-24" />
        <Skeleton class="h-10 w-full" />
      </div>
      <Skeleton class="h-9 w-24" />
    </div>
  </Example>
</template>
