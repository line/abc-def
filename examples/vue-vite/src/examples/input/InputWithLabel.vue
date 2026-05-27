<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
</script>

<template>
  <Field>
    <FieldLabel html-for="input-demo-email"> Email </FieldLabel>
    <Input id="input-demo-email" type="email" placeholder="name@example.com" />
  </Field>
</template>
