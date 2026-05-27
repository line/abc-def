<script setup lang="ts">
import { Checkbox } from "@line/abc-def-vue/checkbox";
import { Field, FieldLabel } from "@line/abc-def-vue/field";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="Invalid">
    <Field orientation="horizontal" data-invalid>
      <Checkbox id="terms-3" aria-invalid />
      <FieldLabel html-for="terms-3"> Accept terms and conditions </FieldLabel>
    </Field>
  </Example>
</template>
