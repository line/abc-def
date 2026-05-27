<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@line/abc-def-vue/empty";

import IconPlaceholder from "@/components/IconPlaceholder.vue";
import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Icon">
    <Empty class="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconPlaceholder
            lucide="FolderIcon"
            tabler="IconFolder"
            hugeicons="Folder01Icon"
            phosphor="FolderIcon"
            remixicon="RiFolderLine"
          />
        </EmptyMedia>
        <EmptyTitle>Nothing to see here</EmptyTitle>
        <EmptyDescription>
          No posts have been created yet. Get started by
          <a href="#">creating your first post</a>.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <IconPlaceholder
            lucide="PlusIcon"
            tabler="IconPlus"
            hugeicons="PlusSignIcon"
            phosphor="PlusIcon"
            remixicon="RiAddLine"
            data-icon="inline-start"
          />
          New Post
        </Button>
      </EmptyContent>
    </Empty>
  </Example>
</template>
