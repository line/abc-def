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

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];
</script>

<template>
  <Example title="Basic">
    <Combobox :items="frameworks">
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxList>
        <ComboboxViewport>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxItem v-for="item in frameworks" :key="item" :value="item">
            {{ item }}
          </ComboboxItem>
        </ComboboxViewport>
      </ComboboxList>
    </Combobox>
  </Example>
</template>
