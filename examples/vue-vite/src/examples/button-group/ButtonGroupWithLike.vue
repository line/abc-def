<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup } from "@line/abc-def-vue/button-group";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";
</script>

<template>
  <Example title="With Like">
    <ButtonGroup>
      <Button variant="outline">
        <IconPlaceholder
          lucide="HeartIcon"
          tabler="IconHeart"
          hugeicons="HeartIcon"
          phosphor="HeartIcon"
          remixicon="RiHeartLine"
          data-icon="inline-start"
        />
        Like
      </Button>
      <Button variant="outline" :as-child="true" size="icon" class="w-12">
        <span>1.2K</span>
      </Button>
    </ButtonGroup>
  </Example>
</template>
