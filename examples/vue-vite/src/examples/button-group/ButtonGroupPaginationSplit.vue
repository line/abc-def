<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup } from "@line/abc-def-vue/button-group";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";
</script>

<template>
  <Example title="Pagination Split">
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm"> 1 </Button>
        <Button variant="outline" size="sm"> 2 </Button>
        <Button variant="outline" size="sm"> 3 </Button>
        <Button variant="outline" size="sm"> 4 </Button>
        <Button variant="outline" size="sm"> 5 </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-xs">
          <IconPlaceholder
            lucide="ArrowLeftIcon"
            tabler="IconArrowLeft"
            hugeicons="ArrowLeft01Icon"
            phosphor="ArrowLeftIcon"
            remixicon="RiArrowLeftLine"
          />
        </Button>
        <Button variant="outline" size="icon-xs">
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight01Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
          />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  </Example>
</template>
