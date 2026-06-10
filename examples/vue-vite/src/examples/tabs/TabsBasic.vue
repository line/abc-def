<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@line/abc-def-vue/tabs";
</script>

<template>
  <Tabs default-value="home">
    <TabsList>
      <TabsTrigger value="home"> Home </TabsTrigger>
      <TabsTrigger value="settings"> Settings </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
