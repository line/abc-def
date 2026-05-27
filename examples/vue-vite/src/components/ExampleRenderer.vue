<script setup lang="ts">
import { onErrorCaptured, ref, watch } from "vue";
import { CircleAlert } from "lucide-vue-next";

import type { ExampleEntry } from "@/lib/example-registry";

const props = defineProps<{
  entry: ExampleEntry;
}>();

const error = ref<Error | null>(null);

onErrorCaptured((err) => {
  error.value = err instanceof Error ? err : new Error(String(err));
  return false;
});

watch(
  () => props.entry.fileSlug,
  () => {
    error.value = null;
  },
);
</script>

<template>
  <div
    v-if="error"
    class="text-destructive flex max-w-sm flex-col items-center gap-2 text-center"
  >
    <CircleAlert class="size-5" />
    <p class="text-xs font-medium">Failed to render preview</p>
    <p class="text-muted-foreground font-mono text-[11px] break-all">
      {{ error.message }}
    </p>
  </div>
  <Suspense v-else>
    <component :is="entry.Component" />
    <template #fallback>
      <p class="text-muted-foreground text-xs">Loading preview...</p>
    </template>
  </Suspense>
</template>
