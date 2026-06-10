<script setup lang="ts">
import { ref } from "vue";

import { Label } from "@line/abc-def-vue/label";
import { Switch } from "@line/abc-def-vue/switch";

const isChecked = ref(true);
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex items-center gap-2">
      <Switch id="switch-disabled-unchecked" :disabled="true" />
      <Label for="switch-disabled-unchecked"> Disabled (Unchecked) </Label>
    </div>
    <div class="flex items-center gap-2">
      <Switch
        id="switch-disabled-checked"
        v-model="isChecked"
        :disabled="true"
      />
      <Label for="switch-disabled-checked"> Disabled (Checked) </Label>
    </div>
  </div>
</template>
