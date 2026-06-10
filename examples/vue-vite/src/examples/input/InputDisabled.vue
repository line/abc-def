<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
</script>

<template>
  <Field>
    <FieldLabel html-for="input-demo-disabled"> Email </FieldLabel>
    <Input
      id="input-demo-disabled"
      type="email"
      placeholder="Email"
      :disabled="true"
    />
  </Field>
</template>
