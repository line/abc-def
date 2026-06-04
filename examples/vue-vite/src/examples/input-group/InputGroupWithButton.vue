<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@line/abc-def-vue/input-group";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";
</script>

<template>
  <Example title="Input Group with Button">
    <div class="grid w-full max-w-sm items-center gap-4">
      <InputGroup>
        <InputGroupInput type="text" placeholder="Search..." />
        <InputGroupButton>
          <IconPlaceholder
            lucide="SearchIcon"
            tabler="IconSearch"
            hugeicons="Search01Icon"
            phosphor="MagnifyingGlassIcon"
            remixicon="RiSearchLine"
          />
        </InputGroupButton>
      </InputGroup>

      <InputGroup>
        <InputGroupButton variant="outline">
          <IconPlaceholder
            lucide="CopyIcon"
            tabler="IconCopy"
            hugeicons="Copy01Icon"
            phosphor="CopyIcon"
            remixicon="RiFileCopyLine"
          />
        </InputGroupButton>
        <InputGroupInput type="text" placeholder="Copy this text" />
      </InputGroup>

      <InputGroup>
        <InputGroupButton variant="outline" size="sm"> - </InputGroupButton>
        <InputGroupInput type="number" placeholder="0" />
        <InputGroupButton variant="outline" size="sm"> + </InputGroupButton>
      </InputGroup>
    </div>
  </Example>
</template>
