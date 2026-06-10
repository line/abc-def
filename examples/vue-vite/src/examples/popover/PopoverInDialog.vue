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
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@line/abc-def-vue/popover";
</script>

<template>
  <Dialog>
    <DialogTrigger :as-child="true">
      <Button variant="outline"> Open Dialog </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Popover Example</DialogTitle>
        <DialogDescription>
          Click the button below to see the popover.
        </DialogDescription>
      </DialogHeader>
      <Popover>
        <PopoverTrigger :as-child="true">
          <Button variant="outline" class="w-fit"> Open Popover </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Popover in Dialog</PopoverTitle>
            <PopoverDescription>
              This popover appears inside a dialog. Click the button to open it.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </DialogContent>
  </Dialog>
</template>
