<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@line/abc-def-vue/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@line/abc-def-vue/hover-card";

import { Example } from "@/registry/bases/reka/components/example";
</script>

<template>
  <Example title="In Dialog">
    <Dialog>
      <DialogTrigger :as-child="true">
        <Button variant="outline"> Open Dialog </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hover Card Example</DialogTitle>
          <DialogDescription>
            Hover over the button below to see the hover card.
          </DialogDescription>
        </DialogHeader>
        <HoverCard :open-delay="100" :close-delay="100">
          <HoverCardTrigger :as-child="true">
            <Button variant="outline" class="w-fit"> Hover me </Button>
          </HoverCardTrigger>
          <HoverCardContent class="w-64">
            <div
              class="style-lyra:gap-1 style-vega:gap-2 style-maia:gap-2 style-mira:gap-1 flex flex-col gap-1.5"
            >
              <h4 class="font-medium">Hover Card</h4>
              <p>
                This hover card appears inside a dialog. Hover over the button
                to see it.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </DialogContent>
    </Dialog>
  </Example>
</template>
