<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Spinner } from "@line/abc-def-vue/spinner";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="In Buttons">
    <div class="flex flex-wrap items-center gap-4">
      <Button> <Spinner data-icon="inline-start" /> Submit </Button>
      <Button disabled> <Spinner data-icon="inline-start" /> Disabled </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" /> Outline
      </Button>
      <Button variant="outline" size="icon" disabled>
        <Spinner data-icon="inline-start" />
        <span class="sr-only">Loading...</span>
      </Button>
    </div>
  </Example>
</template>
