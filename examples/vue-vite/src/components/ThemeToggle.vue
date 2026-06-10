<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup } from "@line/abc-def-vue/button-group";
import { MoonStar, SunMedium } from "lucide-vue-next";

import type { ThemeMode } from "@/lib/theme";

defineProps<{
  theme: ThemeMode;
}>();

const emit = defineEmits<{
  "update:theme": [value: ThemeMode];
}>();

function setTheme(value: ThemeMode) {
  emit("update:theme", value);
}
</script>

<template>
  <div class="theme-toggle app-theme-toggle">
    <span class="theme-toggle-label">Theme</span>
    <ButtonGroup aria-label="Color theme">
      <Button
        size="sm"
        :variant="theme === 'light' ? 'default' : 'outline'"
        :aria-pressed="theme === 'light'"
        @click="setTheme('light')"
      >
        <SunMedium />
        Light
      </Button>
      <Button
        size="sm"
        :variant="theme === 'dark' ? 'default' : 'outline'"
        :aria-pressed="theme === 'dark'"
        @click="setTheme('dark')"
      >
        <MoonStar />
        Dark
      </Button>
    </ButtonGroup>
  </div>
</template>
