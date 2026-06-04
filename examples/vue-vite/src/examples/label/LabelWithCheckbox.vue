<script setup lang="ts">
import { Checkbox } from "@line/abc-def-vue/checkbox";
import { Field } from "@line/abc-def-vue/field";
import { Label } from "@line/abc-def-vue/label";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Checkbox">
    <Field orientation="horizontal">
      <Checkbox id="label-demo-terms" />
      <Label for="label-demo-terms"> Accept terms and conditions </Label>
    </Field>
  </Example>
</template>
