<script setup lang="ts">
import { Button, Separator } from "@abc-def/vue";
import { Plus } from "lucide-vue-next";

const VARIANTS = [
  null,
  "default",
  "destructive",
  "ghost",
  "link",
  "outline",
] as const;

const SIZES = [null, "xs", "sm", "default", "lg", "xl"] as const;
const ICON_SIZES = [
  "icon-xs",
  "icon-sm",
  "icon",
  "icon-lg",
  "icon-xl",
] as const;
const ROUNDED = [null, "xs", "sm", "default", "lg", "xl"] as const;
</script>

<template>
  <main className="bg-background text-foreground min-h-screen px-6 py-16">
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex gap-2">
        <Button v-for="variant in VARIANTS" :key="variant" :variant="variant">
          {{ variant ?? "null" }}
        </Button>
      </div>
      <div className="flex gap-2">
        <Button v-for="size in SIZES" :key="size" :size="size">
          size - {{ size ?? "null" }}
        </Button>
      </div>
      <div className="flex gap-2">
        <Button v-for="size in ICON_SIZES" :key="size" :size="size">
          <Plus />
        </Button>
      </div>
      <div className="flex gap-2">
        <Button v-for="rounded in ROUNDED" :key="rounded" :rounded="rounded">
          rounded - {{ rounded ?? "null" }}
        </Button>
      </div>
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </main>
</template>
