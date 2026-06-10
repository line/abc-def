<script setup lang="ts">
import { Label } from "@line/abc-def-vue/label";
import { Slider } from "@line/abc-def-vue/slider";
import { ref } from "vue";

const value = ref([0.3, 0.7]);
</script>

<template>
  <div class="grid w-full gap-3">
    <div class="flex items-center justify-between gap-2">
      <Label html-for="slider-demo-temperature">Temperature</Label>
      <span class="text-muted-foreground text-sm">
        {{ value.join(", ") }}
      </span>
    </div>
    <Slider
      id="slider-demo-temperature"
      v-model="value"
      :min="0"
      :max="1"
      :step="0.1"
    />
  </div>
</template>
