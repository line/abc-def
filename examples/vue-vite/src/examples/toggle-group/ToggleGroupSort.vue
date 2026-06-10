<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "@line/abc-def-vue/toggle-group";

import IconPlaceholder from "@/components/IconPlaceholder.vue";
</script>

<template>
  <ToggleGroup type="single" default-value="newest" variant="outline" size="sm">
    <ToggleGroupItem value="newest" aria-label="Newest">
      <IconPlaceholder
        lucide="ArrowDownIcon"
        tabler="IconArrowDown"
        hugeicons="ArrowDownIcon"
        phosphor="ArrowDownIcon"
        remixicon="RiArrowDownLine"
      />
      Newest
    </ToggleGroupItem>
    <ToggleGroupItem value="oldest" aria-label="Oldest">
      <IconPlaceholder
        lucide="ArrowUpIcon"
        tabler="IconArrowUp"
        hugeicons="ArrowUpIcon"
        phosphor="ArrowUpIcon"
        remixicon="RiArrowUpLine"
      />
      Oldest
    </ToggleGroupItem>
    <ToggleGroupItem value="popular" aria-label="Popular">
      <IconPlaceholder
        lucide="TrendingUpIcon"
        tabler="IconTrendingUp"
        hugeicons="TradeUpIcon"
        phosphor="TrendUpIcon"
        remixicon="RiLineChartLine"
      />
      Popular
    </ToggleGroupItem>
  </ToggleGroup>
</template>
