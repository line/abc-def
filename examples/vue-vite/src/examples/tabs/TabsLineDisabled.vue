<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@line/abc-def-vue/tabs";
</script>

<template>
  <Tabs default-value="overview">
    <TabsList variant="line">
      <TabsTrigger value="overview"> Overview </TabsTrigger>
      <TabsTrigger value="analytics"> Analytics </TabsTrigger>
      <TabsTrigger value="reports" :disabled="true"> Reports </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
