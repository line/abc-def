<script setup lang="ts">
import { Checkbox } from "@line/abc-def-vue/checkbox";
import { Field, FieldLabel } from "@line/abc-def-vue/field";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="Disabled">
    <Field orientation="horizontal">
      <Checkbox id="toggle" disabled />
      <FieldLabel html-for="toggle"> Enable notifications </FieldLabel>
    </Field>
  </Example>
</template>
