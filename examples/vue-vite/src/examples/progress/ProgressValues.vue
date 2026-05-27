<script setup lang="ts">
import { Progress } from "@line/abc-def-vue/progress";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Progress Bar">
    <div class="flex w-full flex-col gap-4">
      <Progress :model-value="0" />
      <Progress :model-value="25" class="w-full" />
      <Progress :model-value="50" />
      <Progress :model-value="75" />
      <Progress :model-value="100" />
    </div>
  </Example>
</template>
