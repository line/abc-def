<script setup lang="ts">
import { TooltipProvider } from "@line/abc-def-vue/tooltip";

import IndexPage from "@/pages/IndexPage.vue";
</script>

<template>
  <TooltipProvider>
    <IndexPage />
  </TooltipProvider>
</template>
