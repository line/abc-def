<script setup lang="ts">
import { Checkbox } from "@line/abc-def-vue/checkbox";
import { Field, FieldGroup, FieldLabel } from "@line/abc-def-vue/field";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="Invalid">
    <FieldGroup>
      <Field orientation="horizontal" data-invalid="true">
        <Checkbox id="terms-3" aria-invalid="true" />
        <FieldLabel html-for="terms-3">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  </Example>
</template>
