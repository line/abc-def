<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup, ButtonGroupText } from "@line/abc-def-vue/button-group";
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="With Text">
    <div class="flex flex-col gap-4">
      <ButtonGroup>
        <ButtonGroupText>Text</ButtonGroupText>
        <Button variant="outline"> Another Button </Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText :as-child="true">
          <Label html-for="input-text"> GPU Size </Label>
        </ButtonGroupText>
        <Input id="input-text" placeholder="Type something here..." />
      </ButtonGroup>
    </div>
  </Example>
</template>
