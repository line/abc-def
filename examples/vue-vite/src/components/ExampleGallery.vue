<script setup lang="ts">
import type { ExampleGroup } from "@/lib/example-registry";
import ExampleRenderer from "./ExampleRenderer.vue";

defineProps<{
  group: ExampleGroup;
}>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <header class="app-panel rounded-3xl p-6">
      <p class="app-kicker">Component</p>
      <h2 class="mt-2 text-3xl font-semibold tracking-tight">
        {{ group.title }}
      </h2>
      <p class="app-copy mt-2 text-sm leading-6">
        {{ group.examples.length }} variant{{
          group.examples.length === 1 ? "" : "s"
        }}
        · imported from
        <code class="bg-muted rounded px-1.5 py-0.5 text-xs">
          @line/abc-def-vue/{{ group.slug }}
        </code>
      </p>
    </header>

    <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <article
        v-for="example in group.examples"
        :key="example.fileSlug"
        class="example-card flex flex-col gap-4 rounded-3xl p-5"
      >
        <header class="flex items-baseline justify-between gap-3">
          <div class="flex flex-col gap-1">
            <h3 class="text-base font-semibold tracking-tight">
              {{ example.variantLabel }}
            </h3>
            <p class="text-muted-foreground text-xs">
              <code>src/examples/{{ example.fileSlug }}.vue</code>
            </p>
          </div>
          <span
            class="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
            :aria-label="`Group ${group.slug}`"
          >
            {{ group.slug }}
          </span>
        </header>

        <div
          class="bg-background/40 border-border/60 flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed p-6"
        >
          <ExampleRenderer :entry="example" />
        </div>
      </article>
    </div>
  </div>
</template>
