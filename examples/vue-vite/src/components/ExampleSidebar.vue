<script setup lang="ts">
import { computed, ref } from "vue";
import { Search } from "lucide-vue-next";

import type { ExampleGroup } from "@/lib/example-registry";

const props = defineProps<{
  groups: ExampleGroup[];
  activeSlug: string;
}>();

const emit = defineEmits<{
  select: [slug: string];
}>();

const query = ref("");

const filteredGroups = computed(() => {
  const trimmed = query.value.trim().toLowerCase();
  if (!trimmed) return props.groups;
  return props.groups.filter(
    (g) =>
      g.title.toLowerCase().includes(trimmed) ||
      g.slug.toLowerCase().includes(trimmed),
  );
});

const totalVariants = computed(() =>
  props.groups.reduce((acc, g) => acc + g.examples.length, 0),
);
</script>

<template>
  <aside
    class="app-panel sticky top-6 flex h-fit max-h-[calc(100vh-4rem)] w-full shrink-0 flex-col gap-4 self-start rounded-3xl p-5 lg:w-72"
  >
    <div class="flex flex-col gap-1">
      <p class="app-kicker">abc-def</p>
      <h1 class="text-xl font-semibold tracking-tight">Vue Examples</h1>
      <p class="app-copy text-xs leading-5">
        {{ groups.length }} components · {{ totalVariants }} variants
      </p>
    </div>

    <div>
      <slot name="theme" />
    </div>

    <label class="relative block">
      <span class="sr-only">Search components</span>
      <Search
        aria-hidden="true"
        class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
      />
      <input
        v-model="query"
        type="search"
        placeholder="Search components..."
        class="border-border bg-background focus-visible:ring-ring w-full rounded-full border py-2 pr-3 pl-9 text-sm outline-none focus-visible:ring-2"
      />
    </label>

    <nav class="-mr-2 flex min-h-0 flex-col gap-1 overflow-y-auto pr-2">
      <p
        v-if="filteredGroups.length === 0"
        class="text-muted-foreground px-2 py-3 text-xs"
      >
        No matches.
      </p>
      <button
        v-for="group in filteredGroups"
        v-else
        :key="group.slug"
        type="button"
        :aria-current="group.slug === activeSlug ? 'page' : undefined"
        :class="[
          'flex items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left text-sm transition',
          group.slug === activeSlug
            ? 'border-foreground/80 bg-foreground text-background shadow-sm'
            : 'border-transparent text-foreground/80 hover:border-border hover:bg-muted/60',
        ]"
        @click="emit('select', group.slug)"
      >
        <span class="truncate font-medium">{{ group.title }}</span>
        <span
          :class="[
            'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold tabular-nums',
            group.slug === activeSlug
              ? 'bg-background/20 text-background'
              : 'bg-muted text-muted-foreground',
          ]"
        >
          {{ group.examples.length }}
        </span>
      </button>
    </nav>
  </aside>
</template>
