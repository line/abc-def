/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { cva } from "class-variance-authority";

export interface SidebarProps {
  side?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  class?: HTMLAttributes["class"];
}

export { default as Sidebar } from "./Sidebar.vue";
export { default as SidebarContent } from "./SidebarContent.vue";
export { default as SidebarFooter } from "./SidebarFooter.vue";
export { default as SidebarGroup } from "./SidebarGroup.vue";
export { default as SidebarGroupAction } from "./SidebarGroupAction.vue";
export { default as SidebarGroupContent } from "./SidebarGroupContent.vue";
export { default as SidebarGroupLabel } from "./SidebarGroupLabel.vue";
export { default as SidebarHeader } from "./SidebarHeader.vue";
export { default as SidebarInput } from "./SidebarInput.vue";
export { default as SidebarInset } from "./SidebarInset.vue";
export { default as SidebarMenu } from "./SidebarMenu.vue";
export { default as SidebarMenuAction } from "./SidebarMenuAction.vue";
export { default as SidebarMenuBadge } from "./SidebarMenuBadge.vue";
export { default as SidebarMenuButton } from "./SidebarMenuButton.vue";
export { default as SidebarMenuItem } from "./SidebarMenuItem.vue";
export { default as SidebarMenuSkeleton } from "./SidebarMenuSkeleton.vue";
export { default as SidebarMenuSub } from "./SidebarMenuSub.vue";
export { default as SidebarMenuSubButton } from "./SidebarMenuSubButton.vue";
export { default as SidebarMenuSubItem } from "./SidebarMenuSubItem.vue";
export { default as SidebarProvider } from "./SidebarProvider.vue";
export { default as SidebarRail } from "./SidebarRail.vue";
export { default as SidebarSeparator } from "./SidebarSeparator.vue";
export { default as SidebarTrigger } from "./SidebarTrigger.vue";

export { useSidebar } from "./utils";

export const sidebarMenuButtonVariants = cva("sidebar-menu-button", {
  variants: {
    variant: {
      default: "sidebar-menu-button-variant-default",
      outline: "sidebar-menu-button-variant-outline",
    },
    size: {
      default: "sidebar-menu-button-size-default",
      sm: "sidebar-menu-button-size-sm",
      lg: "sidebar-menu-button-size-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type SidebarMenuButtonVariants = VariantProps<
  typeof sidebarMenuButtonVariants
>;
