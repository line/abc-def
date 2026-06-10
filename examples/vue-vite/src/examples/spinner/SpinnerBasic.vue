<script setup lang="ts">
import { Spinner } from "@line/abc-def-vue/spinner";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Basic">
    <div class="flex items-center gap-6">
      <Spinner />
      <Spinner class="size-6" />
    </div>
  </Example>
</template>
