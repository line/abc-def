<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup } from "@line/abc-def-vue/button-group";
import { Field } from "@line/abc-def-vue/field";
import { Label } from "@line/abc-def-vue/label";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="Text Alignment">
    <Field>
      <Label id="alignment-label"> Text Alignment </Label>
      <ButtonGroup aria-labelledby="alignment-label">
        <Button variant="outline" size="sm"> Left </Button>
        <Button variant="outline" size="sm"> Center </Button>
        <Button variant="outline" size="sm"> Right </Button>
        <Button variant="outline" size="sm"> Justify </Button>
      </ButtonGroup>
    </Field>
  </Example>
</template>
