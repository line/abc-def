<script setup lang="ts">
import { Card, CardContent, CardHeader } from "@line/abc-def-vue/card";
import { Skeleton } from "@line/abc-def-vue/skeleton";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Card">
    <Card class="w-full">
      <CardHeader>
        <Skeleton class="h-4 w-2/3" />
        <Skeleton class="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton class="aspect-square w-full" />
      </CardContent>
    </Card>
  </Example>
</template>
