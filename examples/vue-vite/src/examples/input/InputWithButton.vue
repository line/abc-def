<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Input } from "@line/abc-def-vue/input";
</script>

<template>
  <div class="flex w-full gap-2">
    <Input type="search" placeholder="Search..." class="flex-1" />
    <Button>Search</Button>
  </div>
</template>
