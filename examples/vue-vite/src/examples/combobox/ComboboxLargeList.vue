<script setup lang="ts">
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxViewport,
} from "@line/abc-def-vue/combobox";

import { Example } from "@/registry/bases/reka/components/example";

const largeListItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
</script>

<template>
  <Example title="Large List (100 items)">
    <Combobox :items="largeListItems">
      <ComboboxInput placeholder="Search from 100 items" />
      <ComboboxList>
        <ComboboxViewport>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxItem
            v-for="item in largeListItems"
            :key="item"
            :value="item"
          >
            {{ item }}
          </ComboboxItem>
        </ComboboxViewport>
      </ComboboxList>
    </Combobox>
  </Example>
</template>
