<script setup lang="ts">
import { computed, h } from "vue";
import { icons } from "lucide-vue-next";

const props = defineProps<{
  lucide?: string;
  hugeicons?: string;
  tabler?: string;
  phosphor?: string;
  remixicon?: string;
}>();

const resolvedIcon = computed(() => {
  if (!props.lucide) return null;
  const name = props.lucide.replace(/Icon$/, "");
  return (icons as Record<string, unknown>)[name] ?? null;
});
</script>

<template>
  <component :is="resolvedIcon" v-if="resolvedIcon" class="size-4" />
  <span v-else class="inline-block size-4 rounded-sm bg-current opacity-20" />
</template>
