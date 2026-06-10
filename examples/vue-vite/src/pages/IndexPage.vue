<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

import ExampleGallery from "@/components/ExampleGallery.vue";
import ExampleSidebar from "@/components/ExampleSidebar.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import {
  exampleGroups,
  findGroupBySlug,
} from "@/lib/example-registry";
import { useThemeMode } from "@/lib/theme";

function readHashSlug(): string | null {
  if (typeof window === "undefined") return null;
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw.length > 0 ? raw : null;
}

const theme = useThemeMode();
const activeSlug = ref<string | null>(readHashSlug());

const activeGroup = computed(() => {
  return findGroupBySlug(activeSlug.value) ?? exampleGroups[0];
});

function onHashChange() {
  activeSlug.value = readHashSlug();
}

onMounted(() => {
  window.addEventListener("hashchange", onHashChange);
  if (!activeSlug.value && activeGroup.value) {
    window.history.replaceState(null, "", `#/${activeGroup.value.slug}`);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("hashchange", onHashChange);
});

watch(activeGroup, (group) => {
  if (group && activeSlug.value !== group.slug) {
    window.history.replaceState(null, "", `#/${group.slug}`);
  }
});

function handleSelect(slug: string) {
  window.location.hash = `#/${slug}`;
}
</script>

<template>
  <main
    v-if="!activeGroup"
    class="flex min-h-screen items-center justify-center px-6"
  >
    <p class="text-muted-foreground text-sm">
      No examples were discovered. Check
      <code class="bg-muted rounded px-1.5 py-0.5">src/examples</code>.
    </p>
  </main>
  <main v-else class="example-app bg-background text-foreground min-h-screen">
    <div
      class="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row"
    >
      <ExampleSidebar
        :groups="exampleGroups"
        :active-slug="activeGroup.slug"
        @select="handleSelect"
      >
        <template #theme>
          <ThemeToggle
            :theme="theme"
            @update:theme="(value) => (theme = value)"
          />
        </template>
      </ExampleSidebar>
      <section class="min-w-0 flex-1">
        <ExampleGallery :group="activeGroup" />
      </section>
    </div>
  </main>
</template>
