<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Switch } from "@line/abc-def-vue/switch";
</script>

<template>
  <Field orientation="horizontal">
    <Switch id="switch-basic" />
    <FieldLabel html-for="switch-basic"> Airplane Mode </FieldLabel>
  </Field>
</template>
