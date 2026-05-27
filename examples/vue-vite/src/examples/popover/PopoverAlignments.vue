<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Popover, PopoverContent, PopoverTrigger } from "@line/abc-def-vue/popover";
</script>

<template>
  <div class="flex gap-6">
    <Popover>
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm"> Start </Button>
      </PopoverTrigger>
      <PopoverContent align="start" class="w-40">
        Aligned to start
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm"> Center </Button>
      </PopoverTrigger>
      <PopoverContent align="center" class="w-40">
        Aligned to center
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger :as-child="true">
        <Button variant="outline" size="sm"> End </Button>
      </PopoverTrigger>
      <PopoverContent align="end" class="w-40"> Aligned to end </PopoverContent>
    </Popover>
  </div>
</template>
