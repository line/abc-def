<script setup lang="ts">
import { ButtonGroup } from "@line/abc-def-vue/button-group";
import { Input } from "@line/abc-def-vue/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-vue/select";
import { ref } from "vue";

import { Example } from "@/components/example";

const duration = ref("hours");
</script>

<template>
  <Example title="With Select and Input">
    <ButtonGroup>
      <Select v-model="duration">
        <SelectTrigger id="duration">
          <SelectValue placeholder="Select duration" />
        </SelectTrigger>
        <SelectContent align="start">
          <SelectItem value="hours"> Hours </SelectItem>
          <SelectItem value="days"> Days </SelectItem>
          <SelectItem value="weeks"> Weeks </SelectItem>
        </SelectContent>
      </Select>
      <Input />
    </ButtonGroup>
  </Example>
</template>
