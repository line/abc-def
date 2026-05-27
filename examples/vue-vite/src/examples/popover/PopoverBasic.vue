<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@line/abc-def-vue/popover";
</script>

<template>
  <Popover>
    <PopoverTrigger :as-child="true">
      <Button variant="outline"> Open Popover </Button>
    </PopoverTrigger>
    <PopoverContent align="start">
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
</template>
