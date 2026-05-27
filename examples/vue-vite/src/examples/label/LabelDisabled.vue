<script setup lang="ts">
import { Field } from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="Disabled">
    <Field :data-disabled="true">
      <Label html-for="label-demo-disabled"> Disabled </Label>
      <Input id="label-demo-disabled" placeholder="Disabled" disabled />
    </Field>
  </Example>
</template>
