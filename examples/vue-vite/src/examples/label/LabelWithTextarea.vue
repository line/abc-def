<script setup lang="ts">
import { Field } from "@line/abc-def-vue/field";
import { Label } from "@line/abc-def-vue/label";
import { Textarea } from "@line/abc-def-vue/textarea";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Textarea">
    <Field>
      <Label html-for="label-demo-message"> Message </Label>
      <Textarea id="label-demo-message" placeholder="Message" />
    </Field>
  </Example>
</template>
