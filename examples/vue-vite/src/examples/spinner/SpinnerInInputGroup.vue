<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@line/abc-def-vue/input-group";
import { Spinner } from "@line/abc-def-vue/spinner";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="In Input Group">
    <Field>
      <FieldLabel html-for="input-group-spinner"> Input Group </FieldLabel>
      <InputGroup>
        <InputGroupInput id="input-group-spinner" />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  </Example>
</template>
