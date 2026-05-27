<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";
</script>

<template>
  <Example title="Examples">
    <div class="flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2">
        <Button variant="outline"> Cancel </Button>
        <Button>
          Submit
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight02Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
            data-icon="inline-end"
          />
        </Button>
      </div>
      <div class="flex items-center gap-2">
        <Button variant="destructive"> Delete </Button>
        <Button size="icon">
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight02Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
          />
        </Button>
      </div>
    </div>
  </Example>
</template>
