<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { ButtonGroup } from "@line/abc-def-vue/button-group";
import { Input } from "@line/abc-def-vue/input";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="With Input">
    <div class="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline"> Button </Button>
        <Input placeholder="Type something here..." />
      </ButtonGroup>
      <ButtonGroup>
        <Input placeholder="Type something here..." />
        <Button variant="outline"> Button </Button>
      </ButtonGroup>
    </div>
  </Example>
</template>
