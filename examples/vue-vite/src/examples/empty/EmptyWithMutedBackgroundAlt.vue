<script setup lang="ts">
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@line/abc-def-vue/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@line/abc-def-vue/input-group";
import { Kbd } from "@line/abc-def-vue/kbd";

import IconPlaceholder from "@/components/IconPlaceholder.vue";
import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="With Muted Background Alt">
    <Empty class="bg-muted/50">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you're looking for doesn't exist. Try searching for what you
          need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup class="w-3/4">
          <InputGroupInput placeholder="Try searching for pages..." />
          <InputGroupAddon>
            <IconPlaceholder
              lucide="CircleDashedIcon"
              tabler="IconCircleDashed"
              hugeicons="DashedLineCircleIcon"
              phosphor="CircleDashedIcon"
              remixicon="RiCheckboxBlankCircleLine"
            />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>/</Kbd>
          </InputGroupAddon>
        </InputGroup>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  </Example>
</template>
