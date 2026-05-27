<script setup lang="ts">
import { Field } from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Input">
    <Field>
      <Label html-for="label-demo-username">Username</Label>
      <Input id="label-demo-username" placeholder="Username" />
    </Field>
  </Example>
</template>
