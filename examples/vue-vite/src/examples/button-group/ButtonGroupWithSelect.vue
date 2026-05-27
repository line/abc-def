<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup } from "@line/abc-def-vue/button-group";
import { Field } from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-vue/select";
import { ref } from "vue";

import { Example } from "@/components/example";
import IconPlaceholder from "@/components/IconPlaceholder.vue";

const currency = ref("$");
</script>

<template>
  <Example title="With Select">
    <Field>
      <Label html-for="amount"> Amount </Label>
      <ButtonGroup>
        <Select v-model="currency">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectItem value="$"> $ </SelectItem>
            <SelectItem value="€"> € </SelectItem>
            <SelectItem value="£"> £ </SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Enter amount to send" />
        <Button variant="outline">
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight01Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
          />
        </Button>
      </ButtonGroup>
    </Field>
  </Example>
</template>
