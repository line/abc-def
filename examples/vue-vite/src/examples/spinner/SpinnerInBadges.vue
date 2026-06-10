<script setup lang="ts">
import { Badge } from "@line/abc-def-vue/badge";
import { Spinner } from "@line/abc-def-vue/spinner";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="In Badges" class="items-center justify-center">
    <div class="flex flex-wrap items-center justify-center gap-4">
      <Badge>
        <Spinner data-icon="inline-start" />
        Badge
      </Badge>
      <Badge variant="secondary">
        <Spinner data-icon="inline-start" />
        Badge
      </Badge>
      <Badge variant="destructive">
        <Spinner data-icon="inline-start" />
        Badge
      </Badge>
      <Badge variant="outline">
        <Spinner data-icon="inline-start" />
        Badge
      </Badge>
    </div>
  </Example>
</template>
