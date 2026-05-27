<script setup lang="ts">
import { Checkbox } from "@line/abc-def-vue/checkbox";
import { Field, FieldLabel } from "@line/abc-def-vue/field";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="Basic">
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldLabel html-for="terms"> Accept terms and conditions </FieldLabel>
    </Field>
  </Example>
</template>
