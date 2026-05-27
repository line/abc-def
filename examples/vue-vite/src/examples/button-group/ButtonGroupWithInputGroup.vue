<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@line/abc-def-vue/input-group";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";
</script>

<template>
  <Example title="With Input Group">
    <div class="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-start" class="text-muted-foreground">
          <IconPlaceholder
            lucide="SearchIcon"
            tabler="IconSearch"
            hugeicons="Search01Icon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
          />
        </InputGroupAddon>
      </InputGroup>
    </div>
  </Example>
</template>
