<script setup lang="ts">
import type { SidebarProps } from ".";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "../sheet";
import SheetDescription from "../sheet/SheetDescription.vue";
import SheetHeader from "../sheet/SheetHeader.vue";
import SheetTitle from "../sheet/SheetTitle.vue";
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from "./utils";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<SidebarProps>(), {
  side: "left",
  variant: "sidebar",
  collapsible: "offcanvas",
});

const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
</script>

<template>
  <div
    v-if="collapsible === 'none'"
    data-slot="sidebar"
    :class="cn('sidebar-static', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </div>

  <Sheet
    v-else-if="isMobile"
    :open="openMobile"
    v-bind="$attrs"
    @update:open="setOpenMobile"
  >
    <SheetContent
      data-sidebar="sidebar"
      data-slot="sidebar"
      data-mobile="true"
      :side="side"
      class="sidebar-mobile"
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
      }"
    >
      <SheetHeader class="sr-only">
        <SheetTitle>Sidebar</SheetTitle>
        <SheetDescription>Displays the mobile sidebar.</SheetDescription>
      </SheetHeader>
      <div class="sidebar-mobile-inner">
        <slot />
      </div>
    </SheetContent>
  </Sheet>

  <div
    v-else
    class="group peer sidebar"
    data-slot="sidebar"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="side"
  >
    <!-- This is what handles the sidebar gap on desktop  -->
    <div data-slot="sidebar-gap" class="sidebar-gap" />
    <div
      data-slot="sidebar-container"
      :data-side="side"
      :class="cn('sidebar-container', props.class)"
      v-bind="$attrs"
    >
      <div
        data-sidebar="sidebar"
        data-slot="sidebar-inner"
        class="sidebar-inner"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
