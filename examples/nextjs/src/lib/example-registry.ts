/**
 * Copyright 2026 LY Corporation
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
"use client";

import type { ComponentType, LazyExoticComponent } from "react";
import { lazy } from "react";

type ComponentModule = Record<string, unknown> & {
  default?: ComponentType<unknown>;
};

export type ExampleRenderMode = "inline" | "iframe";

interface ComponentLoader {
  fileSlug: string;
  groupSlug: string;
  loader: () => Promise<ComponentModule>;
  renderMode?: ExampleRenderMode;
}

const componentLoaders: ComponentLoader[] = [
  {
    fileSlug: "accordion-basic",
    groupSlug: "accordion",
    loader: () =>
      import("../components/accordion-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "accordion-borders",
    groupSlug: "accordion",
    loader: () =>
      import("../components/accordion-borders") as Promise<ComponentModule>,
  },
  {
    fileSlug: "accordion-card",
    groupSlug: "accordion",
    loader: () =>
      import("../components/accordion-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "accordion-demo",
    groupSlug: "accordion",
    loader: () =>
      import("../components/accordion-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "accordion-disabled",
    groupSlug: "accordion",
    loader: () =>
      import("../components/accordion-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "accordion-multiple",
    groupSlug: "accordion",
    loader: () =>
      import("../components/accordion-multiple") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-action",
    groupSlug: "alert",
    loader: () =>
      import("../components/alert-action") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-basic",
    groupSlug: "alert",
    loader: () =>
      import("../components/alert-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-colors",
    groupSlug: "alert",
    loader: () =>
      import("../components/alert-colors") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-demo",
    groupSlug: "alert",
    loader: () =>
      import("../components/alert-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-destructive",
    groupSlug: "alert",
    loader: () =>
      import("../components/alert-destructive") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-dialog-basic",
    groupSlug: "alert-dialog",
    loader: () =>
      import("../components/alert-dialog-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-dialog-demo",
    groupSlug: "alert-dialog",
    loader: () =>
      import("../components/alert-dialog-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-dialog-destructive",
    groupSlug: "alert-dialog",
    loader: () =>
      import("../components/alert-dialog-destructive") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-dialog-media",
    groupSlug: "alert-dialog",
    loader: () =>
      import("../components/alert-dialog-media") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-dialog-small",
    groupSlug: "alert-dialog",
    loader: () =>
      import("../components/alert-dialog-small") as Promise<ComponentModule>,
  },
  {
    fileSlug: "alert-dialog-small-media",
    groupSlug: "alert-dialog",
    loader: () =>
      import("../components/alert-dialog-small-media") as Promise<ComponentModule>,
  },
  {
    fileSlug: "aspect-ratio-demo",
    groupSlug: "aspect-ratio",
    loader: () =>
      import("../components/aspect-ratio-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "aspect-ratio-portrait",
    groupSlug: "aspect-ratio",
    loader: () =>
      import("../components/aspect-ratio-portrait") as Promise<ComponentModule>,
  },
  {
    fileSlug: "aspect-ratio-square",
    groupSlug: "aspect-ratio",
    loader: () =>
      import("../components/aspect-ratio-square") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-badge",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-badge") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-badge-icon",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-badge-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-basic",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-demo",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-dropdown",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-dropdown") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-group",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-group-count",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-group-count") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-group-count-icon",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-group-count-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "avatar-size",
    groupSlug: "avatar",
    loader: () =>
      import("../components/avatar-size") as Promise<ComponentModule>,
  },
  {
    fileSlug: "badge-colors",
    groupSlug: "badge",
    loader: () =>
      import("../components/badge-colors") as Promise<ComponentModule>,
  },
  {
    fileSlug: "badge-demo",
    groupSlug: "badge",
    loader: () =>
      import("../components/badge-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "badge-icon",
    groupSlug: "badge",
    loader: () =>
      import("../components/badge-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "badge-link",
    groupSlug: "badge",
    loader: () =>
      import("../components/badge-link") as Promise<ComponentModule>,
  },
  {
    fileSlug: "badge-spinner",
    groupSlug: "badge",
    loader: () =>
      import("../components/badge-spinner") as Promise<ComponentModule>,
  },
  {
    fileSlug: "badge-variants",
    groupSlug: "badge",
    loader: () =>
      import("../components/badge-variants") as Promise<ComponentModule>,
  },
  {
    fileSlug: "breadcrumb-basic",
    groupSlug: "breadcrumb",
    loader: () =>
      import("../components/breadcrumb-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "breadcrumb-demo",
    groupSlug: "breadcrumb",
    loader: () =>
      import("../components/breadcrumb-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "breadcrumb-dropdown",
    groupSlug: "breadcrumb",
    loader: () =>
      import("../components/breadcrumb-dropdown") as Promise<ComponentModule>,
  },
  {
    fileSlug: "breadcrumb-ellipsis",
    groupSlug: "breadcrumb",
    loader: () =>
      import("../components/breadcrumb-ellipsis") as Promise<ComponentModule>,
  },
  {
    fileSlug: "breadcrumb-link",
    groupSlug: "breadcrumb",
    loader: () =>
      import("../components/breadcrumb-link") as Promise<ComponentModule>,
  },
  {
    fileSlug: "breadcrumb-separator",
    groupSlug: "breadcrumb",
    loader: () =>
      import("../components/breadcrumb-separator") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-aschild",
    groupSlug: "button",
    loader: () =>
      import("../components/button-aschild") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-default",
    groupSlug: "button",
    loader: () =>
      import("../components/button-default") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-demo",
    groupSlug: "button",
    loader: () =>
      import("../components/button-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-destructive",
    groupSlug: "button",
    loader: () =>
      import("../components/button-destructive") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-ghost",
    groupSlug: "button",
    loader: () =>
      import("../components/button-ghost") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-demo",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-dropdown",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-dropdown") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-input",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-input") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-input-group",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-input-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-nested",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-nested") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-orientation",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-orientation") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-popover",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-popover") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-select",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-select") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-separator",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-separator") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-size",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-size") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-group-split",
    groupSlug: "button-group",
    loader: () =>
      import("../components/button-group-split") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-icon",
    groupSlug: "button",
    loader: () =>
      import("../components/button-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-link",
    groupSlug: "button",
    loader: () =>
      import("../components/button-link") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-outline",
    groupSlug: "button",
    loader: () =>
      import("../components/button-outline") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-rounded",
    groupSlug: "button",
    loader: () =>
      import("../components/button-rounded") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-secondary",
    groupSlug: "button",
    loader: () =>
      import("../components/button-secondary") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-size",
    groupSlug: "button",
    loader: () =>
      import("../components/button-size") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-spinner",
    groupSlug: "button",
    loader: () =>
      import("../components/button-spinner") as Promise<ComponentModule>,
  },
  {
    fileSlug: "button-with-icon",
    groupSlug: "button",
    loader: () =>
      import("../components/button-with-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-basic",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-booked-dates",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-booked-dates") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-caption",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-caption") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-custom-days",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-custom-days") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-demo",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-hijri",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-hijri") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-multiple",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-multiple") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-presets",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-presets") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-range",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-range") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-time",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-time") as Promise<ComponentModule>,
  },
  {
    fileSlug: "calendar-week-numbers",
    groupSlug: "calendar",
    loader: () =>
      import("../components/calendar-week-numbers") as Promise<ComponentModule>,
  },
  {
    fileSlug: "card-demo",
    groupSlug: "card",
    loader: () => import("../components/card-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "card-image",
    groupSlug: "card",
    loader: () =>
      import("../components/card-image") as Promise<ComponentModule>,
  },
  {
    fileSlug: "card-small",
    groupSlug: "card",
    loader: () =>
      import("../components/card-small") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-api",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-api") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-demo",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-multiple",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-multiple") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-orientation",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-orientation") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-plugin",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-plugin") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-size",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-size") as Promise<ComponentModule>,
  },
  {
    fileSlug: "carousel-spacing",
    groupSlug: "carousel",
    loader: () =>
      import("../components/carousel-spacing") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-basic",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-demo",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-description",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-description") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-disabled",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-group",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-invalid",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "checkbox-table",
    groupSlug: "checkbox",
    loader: () =>
      import("../components/checkbox-table") as Promise<ComponentModule>,
  },
  {
    fileSlug: "collapsible-basic",
    groupSlug: "collapsible",
    loader: () =>
      import("../components/collapsible-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "collapsible-demo",
    groupSlug: "collapsible",
    loader: () =>
      import("../components/collapsible-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "collapsible-file-tree",
    groupSlug: "collapsible",
    loader: () =>
      import("../components/collapsible-file-tree") as Promise<ComponentModule>,
  },
  {
    fileSlug: "collapsible-settings",
    groupSlug: "collapsible",
    loader: () =>
      import("../components/collapsible-settings") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-auto-highlight",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-auto-highlight") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-basic",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-clear",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-clear") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-custom",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-custom") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-demo",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-disabled",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-groups",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-groups") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-input-group",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-input-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-invalid",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-multiple",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-multiple") as Promise<ComponentModule>,
  },
  {
    fileSlug: "combobox-popup",
    groupSlug: "combobox",
    loader: () =>
      import("../components/combobox-popup") as Promise<ComponentModule>,
  },
  {
    fileSlug: "command-basic",
    groupSlug: "command",
    loader: () =>
      import("../components/command-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "command-demo",
    groupSlug: "command",
    loader: () =>
      import("../components/command-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "command-dialog",
    groupSlug: "command",
    loader: () =>
      import("../components/command-dialog") as Promise<ComponentModule>,
  },
  {
    fileSlug: "command-groups",
    groupSlug: "command",
    loader: () =>
      import("../components/command-groups") as Promise<ComponentModule>,
  },
  {
    fileSlug: "command-scrollable",
    groupSlug: "command",
    loader: () =>
      import("../components/command-scrollable") as Promise<ComponentModule>,
  },
  {
    fileSlug: "command-shortcuts",
    groupSlug: "command",
    loader: () =>
      import("../components/command-shortcuts") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-basic",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-checkboxes",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-checkboxes") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-demo",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-destructive",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-destructive") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-groups",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-groups") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-icons",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-icons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-radio",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-radio") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-shortcuts",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-shortcuts") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-sides",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-sides") as Promise<ComponentModule>,
  },
  {
    fileSlug: "context-menu-submenu",
    groupSlug: "context-menu",
    loader: () =>
      import("../components/context-menu-submenu") as Promise<ComponentModule>,
  },
  {
    fileSlug: "data-table-demo",
    groupSlug: "data-table",
    loader: () =>
      import("../components/data-table-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-basic",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-demo",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-dob",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-dob") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-input",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-input") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-natural-language",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-natural-language") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-range",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-range") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-time",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-time") as Promise<ComponentModule>,
  },
  {
    fileSlug: "date-picker-with-dropdowns",
    groupSlug: "date-picker",
    loader: () =>
      import("../components/date-picker-with-dropdowns") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dialog-close-button",
    groupSlug: "dialog",
    loader: () =>
      import("../components/dialog-close-button") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dialog-demo",
    groupSlug: "dialog",
    loader: () =>
      import("../components/dialog-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dialog-no-close-button",
    groupSlug: "dialog",
    loader: () =>
      import("../components/dialog-no-close-button") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dialog-scrollable-content",
    groupSlug: "dialog",
    loader: () =>
      import("../components/dialog-scrollable-content") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dialog-sticky-footer",
    groupSlug: "dialog",
    loader: () =>
      import("../components/dialog-sticky-footer") as Promise<ComponentModule>,
  },
  {
    fileSlug: "drawer-demo",
    groupSlug: "drawer",
    loader: () =>
      import("../components/drawer-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "drawer-dialog",
    groupSlug: "drawer",
    loader: () =>
      import("../components/drawer-dialog") as Promise<ComponentModule>,
  },
  {
    fileSlug: "drawer-scrollable-content",
    groupSlug: "drawer",
    loader: () =>
      import("../components/drawer-scrollable-content") as Promise<ComponentModule>,
  },
  {
    fileSlug: "drawer-sides",
    groupSlug: "drawer",
    loader: () =>
      import("../components/drawer-sides") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-avatar",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-avatar") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-basic",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-checkboxes",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-checkboxes") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-checkboxes-icons",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-checkboxes-icons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-complex",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-complex") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-demo",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-destructive",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-destructive") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-icons",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-icons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-radio-group",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-radio-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-radio-icons",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-radio-icons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-shortcuts",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-shortcuts") as Promise<ComponentModule>,
  },
  {
    fileSlug: "dropdown-menu-submenu",
    groupSlug: "dropdown-menu",
    loader: () =>
      import("../components/dropdown-menu-submenu") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-avatar",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-avatar") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-avatar-group",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-avatar-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-background",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-background") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-card",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-demo",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-input-group",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-input-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "empty-outline",
    groupSlug: "empty",
    loader: () =>
      import("../components/empty-outline") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-checkbox",
    groupSlug: "field",
    loader: () =>
      import("../components/field-checkbox") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-choice-card",
    groupSlug: "field",
    loader: () =>
      import("../components/field-choice-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-demo",
    groupSlug: "field",
    loader: () =>
      import("../components/field-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-fieldset",
    groupSlug: "field",
    loader: () =>
      import("../components/field-fieldset") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-group",
    groupSlug: "field",
    loader: () =>
      import("../components/field-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-input",
    groupSlug: "field",
    loader: () =>
      import("../components/field-input") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-radio",
    groupSlug: "field",
    loader: () =>
      import("../components/field-radio") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-responsive",
    groupSlug: "field",
    loader: () =>
      import("../components/field-responsive") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-select",
    groupSlug: "field",
    loader: () =>
      import("../components/field-select") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-slider",
    groupSlug: "field",
    loader: () =>
      import("../components/field-slider") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-switch",
    groupSlug: "field",
    loader: () =>
      import("../components/field-switch") as Promise<ComponentModule>,
  },
  {
    fileSlug: "field-textarea",
    groupSlug: "field",
    loader: () =>
      import("../components/field-textarea") as Promise<ComponentModule>,
  },
  {
    fileSlug: "file-upload-list",
    groupSlug: "file-upload",
    loader: () =>
      import("../components/file-upload-list") as Promise<ComponentModule>,
  },
  {
    fileSlug: "hover-card-demo",
    groupSlug: "hover-card",
    loader: () =>
      import("../components/hover-card-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "hover-card-sides",
    groupSlug: "hover-card",
    loader: () =>
      import("../components/hover-card-sides") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-badge",
    groupSlug: "input",
    loader: () =>
      import("../components/input-badge") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-basic",
    groupSlug: "input",
    loader: () =>
      import("../components/input-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-button-group",
    groupSlug: "input",
    loader: () =>
      import("../components/input-button-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-demo",
    groupSlug: "input",
    loader: () =>
      import("../components/input-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-disabled",
    groupSlug: "input",
    loader: () =>
      import("../components/input-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-field",
    groupSlug: "input",
    loader: () =>
      import("../components/input-field") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-fieldgroup",
    groupSlug: "input",
    loader: () =>
      import("../components/input-fieldgroup") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-file",
    groupSlug: "input",
    loader: () =>
      import("../components/input-file") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-form",
    groupSlug: "input",
    loader: () =>
      import("../components/input-form") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-grid",
    groupSlug: "input",
    loader: () =>
      import("../components/input-grid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-basic",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-block-end",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-block-end") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-block-start",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-block-start") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-button-group",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-button-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-custom",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-custom") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-demo",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-dropdown",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-dropdown") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-icon",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-in-card",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-in-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-inline-end",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-inline-end") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-inline-start",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-inline-start") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-kbd",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-kbd") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-label",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-label") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-spinner",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-spinner") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-text",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-text") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-textarea-examples",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-textarea-examples") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-tooltip",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-tooltip") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-with-addons",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-with-addons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-with-buttons",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-with-buttons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-with-kbd",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-with-kbd") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-group-with-tooltip",
    groupSlug: "input-group",
    loader: () =>
      import("../components/input-group-with-tooltip") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-inline",
    groupSlug: "input",
    loader: () =>
      import("../components/input-inline") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-input-group",
    groupSlug: "input",
    loader: () =>
      import("../components/input-input-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-invalid",
    groupSlug: "input",
    loader: () =>
      import("../components/input-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-alphanumeric",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-alphanumeric") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-controlled",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-controlled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-demo",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-disabled",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-form",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-form") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-four-digits",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-four-digits") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-invalid",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-pattern",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-pattern") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-otp-separator",
    groupSlug: "input-otp",
    loader: () =>
      import("../components/input-otp-separator") as Promise<ComponentModule>,
  },
  {
    fileSlug: "input-required",
    groupSlug: "input",
    loader: () =>
      import("../components/input-required") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-avatar",
    groupSlug: "item",
    loader: () =>
      import("../components/item-avatar") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-demo",
    groupSlug: "item",
    loader: () => import("../components/item-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-dropdown",
    groupSlug: "item",
    loader: () =>
      import("../components/item-dropdown") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-group",
    groupSlug: "item",
    loader: () =>
      import("../components/item-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-header",
    groupSlug: "item",
    loader: () =>
      import("../components/item-header") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-icon",
    groupSlug: "item",
    loader: () => import("../components/item-icon") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-image",
    groupSlug: "item",
    loader: () =>
      import("../components/item-image") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-link",
    groupSlug: "item",
    loader: () => import("../components/item-link") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-size",
    groupSlug: "item",
    loader: () => import("../components/item-size") as Promise<ComponentModule>,
  },
  {
    fileSlug: "item-variant",
    groupSlug: "item",
    loader: () =>
      import("../components/item-variant") as Promise<ComponentModule>,
  },
  {
    fileSlug: "kbd-button",
    groupSlug: "kbd",
    loader: () =>
      import("../components/kbd-button") as Promise<ComponentModule>,
  },
  {
    fileSlug: "kbd-demo",
    groupSlug: "kbd",
    loader: () => import("../components/kbd-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "kbd-group",
    groupSlug: "kbd",
    loader: () => import("../components/kbd-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "kbd-input-group",
    groupSlug: "kbd",
    loader: () =>
      import("../components/kbd-input-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "kbd-tooltip",
    groupSlug: "kbd",
    loader: () =>
      import("../components/kbd-tooltip") as Promise<ComponentModule>,
  },
  {
    fileSlug: "label-demo",
    groupSlug: "label",
    loader: () =>
      import("../components/label-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "menubar-checkbox",
    groupSlug: "menubar",
    loader: () =>
      import("../components/menubar-checkbox") as Promise<ComponentModule>,
  },
  {
    fileSlug: "menubar-demo",
    groupSlug: "menubar",
    loader: () =>
      import("../components/menubar-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "menubar-icons",
    groupSlug: "menubar",
    loader: () =>
      import("../components/menubar-icons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "menubar-radio",
    groupSlug: "menubar",
    loader: () =>
      import("../components/menubar-radio") as Promise<ComponentModule>,
  },
  {
    fileSlug: "menubar-submenu",
    groupSlug: "menubar",
    loader: () =>
      import("../components/menubar-submenu") as Promise<ComponentModule>,
  },
  {
    fileSlug: "muted-item-group",
    groupSlug: "item",
    loader: () =>
      import("../components/muted-item-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "native-select-demo",
    groupSlug: "native-select",
    loader: () =>
      import("../components/native-select-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "native-select-disabled",
    groupSlug: "native-select",
    loader: () =>
      import("../components/native-select-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "native-select-groups",
    groupSlug: "native-select",
    loader: () =>
      import("../components/native-select-groups") as Promise<ComponentModule>,
  },
  {
    fileSlug: "native-select-invalid",
    groupSlug: "native-select",
    loader: () =>
      import("../components/native-select-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "navigation-menu-demo",
    groupSlug: "navigation-menu",
    loader: () =>
      import("../components/navigation-menu-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "outline-item-group",
    groupSlug: "item",
    loader: () =>
      import("../components/outline-item-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "pagination-demo",
    groupSlug: "pagination",
    loader: () =>
      import("../components/pagination-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "pagination-icons-only",
    groupSlug: "pagination",
    loader: () =>
      import("../components/pagination-icons-only") as Promise<ComponentModule>,
  },
  {
    fileSlug: "pagination-simple",
    groupSlug: "pagination",
    loader: () =>
      import("../components/pagination-simple") as Promise<ComponentModule>,
  },
  {
    fileSlug: "popover-alignments",
    groupSlug: "popover",
    loader: () =>
      import("../components/popover-alignments") as Promise<ComponentModule>,
  },
  {
    fileSlug: "popover-basic",
    groupSlug: "popover",
    loader: () =>
      import("../components/popover-basic") as Promise<ComponentModule>,
  },
  {
    fileSlug: "popover-demo",
    groupSlug: "popover",
    loader: () =>
      import("../components/popover-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "popover-form",
    groupSlug: "popover",
    loader: () =>
      import("../components/popover-form") as Promise<ComponentModule>,
  },
  {
    fileSlug: "progress-controlled",
    groupSlug: "progress",
    loader: () =>
      import("../components/progress-controlled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "progress-demo",
    groupSlug: "progress",
    loader: () =>
      import("../components/progress-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "progress-label",
    groupSlug: "progress",
    loader: () =>
      import("../components/progress-label") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-fields",
    groupSlug: "radio",
    loader: () =>
      import("../components/radio-fields") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-group-choice-card",
    groupSlug: "radio-group",
    loader: () =>
      import("../components/radio-group-choice-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-group-demo",
    groupSlug: "radio-group",
    loader: () =>
      import("../components/radio-group-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-group-description",
    groupSlug: "radio-group",
    loader: () =>
      import("../components/radio-group-description") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-group-disabled",
    groupSlug: "radio-group",
    loader: () =>
      import("../components/radio-group-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-group-fieldset",
    groupSlug: "radio-group",
    loader: () =>
      import("../components/radio-group-fieldset") as Promise<ComponentModule>,
  },
  {
    fileSlug: "radio-group-invalid",
    groupSlug: "radio-group",
    loader: () =>
      import("../components/radio-group-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "resizable-demo",
    groupSlug: "resizable",
    loader: () =>
      import("../components/resizable-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "resizable-handle",
    groupSlug: "resizable",
    loader: () =>
      import("../components/resizable-handle") as Promise<ComponentModule>,
  },
  {
    fileSlug: "resizable-vertical",
    groupSlug: "resizable",
    loader: () =>
      import("../components/resizable-vertical") as Promise<ComponentModule>,
  },
  {
    fileSlug: "scroll-area-demo",
    groupSlug: "scroll-area",
    loader: () =>
      import("../components/scroll-area-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "scroll-area-horizontal-demo",
    groupSlug: "scroll-area",
    loader: () =>
      import("../components/scroll-area-horizontal-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "select-align-item",
    groupSlug: "select",
    loader: () =>
      import("../components/select-align-item") as Promise<ComponentModule>,
  },
  {
    fileSlug: "select-demo",
    groupSlug: "select",
    loader: () =>
      import("../components/select-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "select-disabled",
    groupSlug: "select",
    loader: () =>
      import("../components/select-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "select-groups",
    groupSlug: "select",
    loader: () =>
      import("../components/select-groups") as Promise<ComponentModule>,
  },
  {
    fileSlug: "select-invalid",
    groupSlug: "select",
    loader: () =>
      import("../components/select-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "select-scrollable",
    groupSlug: "select",
    loader: () =>
      import("../components/select-scrollable") as Promise<ComponentModule>,
  },
  {
    fileSlug: "separator-demo",
    groupSlug: "separator",
    loader: () =>
      import("../components/separator-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "separator-list",
    groupSlug: "separator",
    loader: () =>
      import("../components/separator-list") as Promise<ComponentModule>,
  },
  {
    fileSlug: "separator-menu",
    groupSlug: "separator",
    loader: () =>
      import("../components/separator-menu") as Promise<ComponentModule>,
  },
  {
    fileSlug: "separator-vertical",
    groupSlug: "separator",
    loader: () =>
      import("../components/separator-vertical") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sheet-demo",
    groupSlug: "sheet",
    loader: () =>
      import("../components/sheet-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sheet-no-close-button",
    groupSlug: "sheet",
    loader: () =>
      import("../components/sheet-no-close-button") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sheet-side",
    groupSlug: "sheet",
    loader: () =>
      import("../components/sheet-side") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sidebar-controlled",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-controlled") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-demo",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-demo") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-footer",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-footer") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-group",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-group") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-group-action",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-group-action") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-group-collapsible",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-group-collapsible") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-header",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-header") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-menu",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-menu") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-menu-action",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-menu-action") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-menu-badge",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-menu-badge") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-menu-collapsible",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-menu-collapsible") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-menu-sub",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-menu-sub") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "sidebar-rsc",
    groupSlug: "sidebar",
    loader: () =>
      import("../components/sidebar-rsc") as Promise<ComponentModule>,
    renderMode: "iframe",
  },
  {
    fileSlug: "skeleton-avatar",
    groupSlug: "skeleton",
    loader: () =>
      import("../components/skeleton-avatar") as Promise<ComponentModule>,
  },
  {
    fileSlug: "skeleton-card",
    groupSlug: "skeleton",
    loader: () =>
      import("../components/skeleton-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "skeleton-demo",
    groupSlug: "skeleton",
    loader: () =>
      import("../components/skeleton-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "skeleton-form",
    groupSlug: "skeleton",
    loader: () =>
      import("../components/skeleton-form") as Promise<ComponentModule>,
  },
  {
    fileSlug: "skeleton-table",
    groupSlug: "skeleton",
    loader: () =>
      import("../components/skeleton-table") as Promise<ComponentModule>,
  },
  {
    fileSlug: "skeleton-text",
    groupSlug: "skeleton",
    loader: () =>
      import("../components/skeleton-text") as Promise<ComponentModule>,
  },
  {
    fileSlug: "slider-controlled",
    groupSlug: "slider",
    loader: () =>
      import("../components/slider-controlled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "slider-demo",
    groupSlug: "slider",
    loader: () =>
      import("../components/slider-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "slider-disabled",
    groupSlug: "slider",
    loader: () =>
      import("../components/slider-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "slider-multiple",
    groupSlug: "slider",
    loader: () =>
      import("../components/slider-multiple") as Promise<ComponentModule>,
  },
  {
    fileSlug: "slider-range",
    groupSlug: "slider",
    loader: () =>
      import("../components/slider-range") as Promise<ComponentModule>,
  },
  {
    fileSlug: "slider-vertical",
    groupSlug: "slider",
    loader: () =>
      import("../components/slider-vertical") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sonner-demo",
    groupSlug: "sonner",
    loader: () =>
      import("../components/sonner-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sonner-description",
    groupSlug: "sonner",
    loader: () =>
      import("../components/sonner-description") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sonner-position",
    groupSlug: "sonner",
    loader: () =>
      import("../components/sonner-position") as Promise<ComponentModule>,
  },
  {
    fileSlug: "sonner-types",
    groupSlug: "sonner",
    loader: () =>
      import("../components/sonner-types") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-badge",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-badge") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-button",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-button") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-custom",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-custom") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-demo",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-empty",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-empty") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-input-group",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-input-group") as Promise<ComponentModule>,
  },
  {
    fileSlug: "spinner-size",
    groupSlug: "spinner",
    loader: () =>
      import("../components/spinner-size") as Promise<ComponentModule>,
  },
  {
    fileSlug: "switch-choice-card",
    groupSlug: "switch",
    loader: () =>
      import("../components/switch-choice-card") as Promise<ComponentModule>,
  },
  {
    fileSlug: "switch-demo",
    groupSlug: "switch",
    loader: () =>
      import("../components/switch-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "switch-description",
    groupSlug: "switch",
    loader: () =>
      import("../components/switch-description") as Promise<ComponentModule>,
  },
  {
    fileSlug: "switch-disabled",
    groupSlug: "switch",
    loader: () =>
      import("../components/switch-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "switch-invalid",
    groupSlug: "switch",
    loader: () =>
      import("../components/switch-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "switch-sizes",
    groupSlug: "switch",
    loader: () =>
      import("../components/switch-sizes") as Promise<ComponentModule>,
  },
  {
    fileSlug: "table-actions",
    groupSlug: "table",
    loader: () =>
      import("../components/table-actions") as Promise<ComponentModule>,
  },
  {
    fileSlug: "table-demo",
    groupSlug: "table",
    loader: () =>
      import("../components/table-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "table-footer",
    groupSlug: "table",
    loader: () =>
      import("../components/table-footer") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tabs-demo",
    groupSlug: "tabs",
    loader: () => import("../components/tabs-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tabs-disabled",
    groupSlug: "tabs",
    loader: () =>
      import("../components/tabs-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tabs-icons",
    groupSlug: "tabs",
    loader: () =>
      import("../components/tabs-icons") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tabs-line",
    groupSlug: "tabs",
    loader: () => import("../components/tabs-line") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tabs-vertical",
    groupSlug: "tabs",
    loader: () =>
      import("../components/tabs-vertical") as Promise<ComponentModule>,
  },
  {
    fileSlug: "textarea-button",
    groupSlug: "textarea",
    loader: () =>
      import("../components/textarea-button") as Promise<ComponentModule>,
  },
  {
    fileSlug: "textarea-demo",
    groupSlug: "textarea",
    loader: () =>
      import("../components/textarea-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "textarea-disabled",
    groupSlug: "textarea",
    loader: () =>
      import("../components/textarea-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "textarea-field",
    groupSlug: "textarea",
    loader: () =>
      import("../components/textarea-field") as Promise<ComponentModule>,
  },
  {
    fileSlug: "textarea-invalid",
    groupSlug: "textarea",
    loader: () =>
      import("../components/textarea-invalid") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-demo",
    groupSlug: "toggle",
    loader: () =>
      import("../components/toggle-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-disabled",
    groupSlug: "toggle",
    loader: () =>
      import("../components/toggle-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-demo",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-disabled",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-font-weight-selector",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-font-weight-selector") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-outline",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-outline") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-sizes",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-sizes") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-spacing",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-spacing") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-group-vertical",
    groupSlug: "toggle-group",
    loader: () =>
      import("../components/toggle-group-vertical") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-outline",
    groupSlug: "toggle",
    loader: () =>
      import("../components/toggle-outline") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-sizes",
    groupSlug: "toggle",
    loader: () =>
      import("../components/toggle-sizes") as Promise<ComponentModule>,
  },
  {
    fileSlug: "toggle-text",
    groupSlug: "toggle",
    loader: () =>
      import("../components/toggle-text") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tooltip-demo",
    groupSlug: "tooltip",
    loader: () =>
      import("../components/tooltip-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tooltip-disabled",
    groupSlug: "tooltip",
    loader: () =>
      import("../components/tooltip-disabled") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tooltip-keyboard",
    groupSlug: "tooltip",
    loader: () =>
      import("../components/tooltip-keyboard") as Promise<ComponentModule>,
  },
  {
    fileSlug: "tooltip-sides",
    groupSlug: "tooltip",
    loader: () =>
      import("../components/tooltip-sides") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-blockquote",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-blockquote") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-demo",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-demo") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-h1",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-h1") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-h2",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-h2") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-h3",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-h3") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-h4",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-h4") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-inline-code",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-inline-code") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-large",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-large") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-lead",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-lead") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-list",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-list") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-muted",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-muted") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-p",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-p") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-small",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-small") as Promise<ComponentModule>,
  },
  {
    fileSlug: "typography-table",
    groupSlug: "typography",
    loader: () =>
      import("../components/typography-table") as Promise<ComponentModule>,
  },
] as const;

function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toVariantLabel(fileSlug: string, groupSlug: string): string {
  if (fileSlug === groupSlug) {
    return "Default";
  }

  if (fileSlug.startsWith(`${groupSlug}-`)) {
    const variant = fileSlug.slice(groupSlug.length + 1);
    return variant ? toTitleCase(variant) : "Default";
  }

  const fileParts = fileSlug.split("-");
  const groupParts = groupSlug.split("-");

  for (
    let index = 0;
    index <= fileParts.length - groupParts.length;
    index += 1
  ) {
    const matchesGroup = groupParts.every(
      (part, offset) => fileParts[index + offset] === part,
    );
    if (!matchesGroup) continue;

    const variantParts = [
      ...fileParts.slice(0, index),
      ...fileParts.slice(index + groupParts.length),
    ];
    return variantParts.length > 0
      ? toTitleCase(variantParts.join("-"))
      : "Default";
  }

  const variant = fileSlug.slice(groupSlug.length + 1);
  return variant ? toTitleCase(variant) : "Default";
}

function pickExportedComponent(
  mod: ComponentModule,
): ComponentType<unknown> | null {
  if (mod.default && typeof mod.default === "function") {
    return mod.default;
  }
  for (const value of Object.values(mod)) {
    if (typeof value === "function") {
      return value as ComponentType<unknown>;
    }
  }
  return null;
}

export interface ExampleEntry {
  fileSlug: string;
  variantLabel: string;
  Component: LazyExoticComponent<ComponentType<unknown>>;
  renderMode: ExampleRenderMode;
}

export interface ExampleGroup {
  slug: string;
  title: string;
  examples: ExampleEntry[];
}

function buildGroups(): ExampleGroup[] {
  const map = new Map<string, ExampleGroup>();

  for (const { fileSlug, groupSlug, loader, renderMode } of componentLoaders) {
    const Component = lazy(async () => {
      const mod = await loader();
      const picked = pickExportedComponent(mod);
      if (!picked) {
        throw new Error(`No component export found in ${fileSlug}`);
      }
      return { default: picked };
    });

    const entry: ExampleEntry = {
      fileSlug,
      variantLabel: toVariantLabel(fileSlug, groupSlug),
      Component,
      renderMode: renderMode ?? "inline",
    };

    let group = map.get(groupSlug);
    if (!group) {
      group = {
        slug: groupSlug,
        title: toTitleCase(groupSlug),
        examples: [],
      };
      map.set(groupSlug, group);
    }
    group.examples.push(entry);
  }

  for (const group of map.values()) {
    group.examples.sort((a, b) => {
      if (a.variantLabel === "Default") return -1;
      if (b.variantLabel === "Default") return 1;
      const aIsDemo = a.fileSlug.endsWith("-demo");
      const bIsDemo = b.fileSlug.endsWith("-demo");
      if (aIsDemo && !bIsDemo) return -1;
      if (!aIsDemo && bIsDemo) return 1;
      return a.variantLabel.localeCompare(b.variantLabel);
    });
  }

  return Array.from(map.values()).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

export const exampleGroups: ExampleGroup[] = buildGroups();

export function findGroupBySlug(slug: string | null): ExampleGroup | undefined {
  if (!slug) return undefined;
  return exampleGroups.find((group) => group.slug === slug);
}

export function findExampleByFileSlug(
  fileSlug: string | null,
): ExampleEntry | undefined {
  if (!fileSlug) return undefined;

  for (const group of exampleGroups) {
    const example = group.examples.find((entry) => entry.fileSlug === fileSlug);
    if (example) return example;
  }

  return undefined;
}
