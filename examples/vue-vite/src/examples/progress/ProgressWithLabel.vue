<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Progress } from "@line/abc-def-vue/progress";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Label">
    <Field>
      <FieldLabel html-for="progress-upload">
        <span>Upload progress</span>
        <span class="ml-auto">66%</span>
      </FieldLabel>
      <Progress id="progress-upload" :model-value="66" class="w-full" />
    </Field>
  </Example>
</template>
