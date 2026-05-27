<script setup lang="ts">
import { Progress } from "@line/abc-def-vue/progress";
import { Slider } from "@line/abc-def-vue/slider";
import { ref } from "vue";

import { Example } from "@/registry/bases/reka/components/example";

const value = ref([50]);
</script>

<template>
  <Example title="Controlled">
    <div class="flex w-full flex-col gap-4">
      <Progress :model-value="value[0]" class="w-full" />
      <Slider v-model="value" :min="0" :max="100" :step="1" />
    </div>
  </Example>
</template>
