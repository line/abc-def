import type { ComponentType } from "react";
import { Separator } from "@abc-def/react";

import * as accordionExamples from "../components/accordion";
import * as alertExamples from "../components/alert";
import * as alertDialogExamples from "../components/alert-dialog";
import * as avatarExamples from "../components/avatar";
import * as badgeExamples from "../components/badge";
import * as breadcrumbExamples from "../components/breadcrumb";
import * as buttonExamples from "../components/button";
import * as buttonGroupExamples from "../components/button-group";
import * as calendarExamples from "../components/calendar";
import * as cardExamples from "../components/card";
import * as carouselExamples from "../components/carousel";
import * as checkboxExamples from "../components/checkbox";
import * as collapsibleExamples from "../components/collapsible";
import * as comboboxExamples from "../components/combobox";
import * as commandExamples from "../components/command";
import * as contextMenuExamples from "../components/context-menu";
import * as dialogExamples from "../components/dialog";
import * as drawerExamples from "../components/drawer";
import * as dropdownExamples from "../components/dropdown";
import * as emptyExamples from "../components/empty";
import * as fieldExamples from "../components/field";
import * as inputExamples from "../components/input";
import * as inputGroupExamples from "../components/input-group";
import * as inputOtpExamples from "../components/input-otp";
import * as itemExamples from "../components/item";
import * as kbdExamples from "../components/kbd";
import * as labelExamples from "../components/label";
import * as menubarExamples from "../components/menubar";
import * as nativeSelectExamples from "../components/native-select";
import * as navigationMenuExamples from "../components/navigation-menu";
import * as paginationExamples from "../components/pagination";
import * as popoverExamples from "../components/popover";
import * as progressExamples from "../components/progress";
import * as radioGroupExamples from "../components/radio-group";
import * as resizableExamples from "../components/resizable";
import * as scrollAreaExamples from "../components/scroll-area";
import * as selectExamples from "../components/select";
import * as separatorExamples from "../components/separator";
import * as sliderExamples from "../components/slider";
import * as spinnerExamples from "../components/spinner";
import * as switchExamples from "../components/switch";
import * as textareaExamples from "../components/textarea";
import * as toggleExamples from "../components/toggle";
import * as toggleGroupExamples from "../components/toggle-group";
import * as tooltipExamples from "../components/tooltip";

type ExampleModule = Record<string, ComponentType>;

const componentCatalog = {
  accordions: {
    label: "Accordions",
    description: "Disclosure patterns and FAQ-style content surfaces.",
    examples: accordionExamples,
  },
  alerts: {
    label: "Alerts",
    description: "Inline status messaging with default and destructive states.",
    examples: alertExamples,
  },
  alertDialogs: {
    label: "Alert Dialogs",
    description:
      "Confirmation flows with destructive and cautionary decisions.",
    examples: alertDialogExamples,
  },
  avatars: {
    label: "Avatars",
    description:
      "Identity surfaces with image, fallback, badge, and group states.",
    examples: avatarExamples,
  },
  badges: {
    label: "Badges",
    description:
      "Compact status labels across semantic and link-like variants.",
    examples: badgeExamples,
  },
  breadcrumbs: {
    label: "Breadcrumbs",
    description:
      "Hierarchical navigation with current-page and collapsed states.",
    examples: breadcrumbExamples,
  },
  buttons: {
    label: "Buttons",
    description: "CTA, icon, loading, and shape variants.",
    examples: buttonExamples,
  },
  buttonGroups: {
    label: "Button Groups",
    description: "Grouped actions with orientation and size coverage.",
    examples: buttonGroupExamples,
  },
  calendars: {
    label: "Calendars",
    description: "Date selection with single, range, and multiple modes.",
    examples: calendarExamples,
  },
  cards: {
    label: "Cards",
    description: "Boxed surfaces with media, actions, and footer treatments.",
    examples: cardExamples,
  },
  carousels: {
    label: "Carousels",
    description: "Scrollable content with navigation controls and indicators.",
    examples: carouselExamples,
  },
  checkboxes: {
    label: "Checkboxes",
    description: "Single, grouped, descriptive, and disabled selection states.",
    examples: checkboxExamples,
  },
  collapsibles: {
    label: "Collapsibles",
    description: "Toggleable content sections with trigger and content slots.",
    examples: collapsibleExamples,
  },
  comboboxes: {
    label: "Comboboxes",
    description:
      "Searchable selection menus with grouped and controlled values.",
    examples: comboboxExamples,
  },
  commands: {
    label: "Commands",
    description:
      "Palette-style search lists with inline and dialog presentations.",
    examples: commandExamples,
  },
  contextMenus: {
    label: "Context Menus",
    description:
      "Right-click action menus with toggles, radios, and nested items.",
    examples: contextMenuExamples,
  },
  dialogs: {
    label: "Dialogs",
    description:
      "Modal surfaces with overlay, header, description, and footer treatments.",
    examples: dialogExamples,
  },
  drawers: {
    label: "Drawers",
    description:
      "Bottom and side drawers for controls, summaries, and mobile actions.",
    examples: drawerExamples,
  },
  dropdowns: {
    label: "Dropdown Menus",
    description:
      "Action menus with basic items, checkboxes, radios, and submenus.",
    examples: dropdownExamples,
  },
  empties: {
    label: "Empty States",
    description: "No-data messaging with media, titles, and follow-up actions.",
    examples: emptyExamples,
  },
  fields: {
    label: "Fields",
    description: "Labeled form composition patterns across multiple controls.",
    examples: fieldExamples,
  },
  inputGroup: {
    label: "Input Group",
    description:
      "Structured text entry with add-ons, helper text, and action slots.",
    examples: inputGroupExamples,
  },
  inputs: {
    label: "Inputs",
    description: "Baseline text-entry surfaces for focused regression checks.",
    examples: inputExamples,
  },
  inputOtp: {
    label: "Input OTP",
    description:
      "One-time-code entry with grouped slots and controlled values.",
    examples: inputOtpExamples,
  },
  items: {
    label: "Items",
    description:
      "Structured row compositions with media, copy, and action areas.",
    examples: itemExamples,
  },
  kbds: {
    label: "Kbd",
    description:
      "Keyboard key hints for shortcuts and condensed command legends.",
    examples: kbdExamples,
  },
  labels: {
    label: "Labels",
    description:
      "Accessible text labels paired with standalone controls and inputs.",
    examples: labelExamples,
  },
  menubars: {
    label: "Menubars",
    description:
      "Desktop-style app menus with nested content and selection state.",
    examples: menubarExamples,
  },
  nativeSelects: {
    label: "Native Selects",
    description:
      "Browser-native select controls with grouped options and validation.",
    examples: nativeSelectExamples,
  },
  navigationMenus: {
    label: "Navigation Menus",
    description:
      "Top-level nav surfaces with trigger/content and viewport coverage.",
    examples: navigationMenuExamples,
  },
  pagination: {
    label: "Pagination",
    description:
      "Page navigation with active links, ellipsis, and next/previous controls.",
    examples: paginationExamples,
  },
  popovers: {
    label: "Popovers",
    description: "Anchored overlays for compact details and inspection flows.",
    examples: popoverExamples,
  },
  progress: {
    label: "Progress",
    description:
      "Linear completion indicators for upload and workflow progress.",
    examples: progressExamples,
  },
  radioGroups: {
    label: "Radio Groups",
    description: "Single-choice controls with descriptive and invalid states.",
    examples: radioGroupExamples,
  },
  resizable: {
    label: "Resizable",
    description: "Panel layouts with horizontal and vertical drag handles.",
    examples: resizableExamples,
  },
  scrollArea: {
    label: "Scroll Area",
    description: "Overflow containers with custom scrollbar treatments.",
    examples: scrollAreaExamples,
  },
  selects: {
    label: "Selects",
    description: "Trigger, menu, grouping, scroll, and validation coverage.",
    examples: selectExamples,
  },
  separators: {
    label: "Separators",
    description: "Horizontal and vertical dividers for dense layouts.",
    examples: separatorExamples,
  },
  sliders: {
    label: "Sliders",
    description:
      "Range, multi-thumb, vertical, controlled, and disabled states.",
    examples: sliderExamples,
  },
  spinners: {
    label: "Spinners",
    description:
      "Inline loading indicators for standalone and button-bound states.",
    examples: spinnerExamples,
  },
  switches: {
    label: "Switches",
    description:
      "Binary controls with descriptive, invalid, and size variants.",
    examples: switchExamples,
  },
  textareas: {
    label: "Textareas",
    description: "Long-form entry surfaces with disabled and invalid states.",
    examples: textareaExamples,
  },
  toggles: {
    label: "Toggles",
    description:
      "Single pressed-state buttons with icon and controlled coverage.",
    examples: toggleExamples,
  },
  toggleGroups: {
    label: "Toggle Groups",
    description:
      "Exclusive and multi-select toggle sets across axis variations.",
    examples: toggleGroupExamples,
  },
  tooltips: {
    label: "Tooltips",
    description:
      "Hover and focus affordances across sides, icons, and disabled triggers.",
    examples: tooltipExamples,
  },
} satisfies Record<
  string,
  {
    description: string;
    examples: ExampleModule;
    label: string;
  }
>;

export type ComponentKey = keyof typeof componentCatalog;

export const defaultComponentKey: ComponentKey = "buttons";

function formatExampleName(name: string) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/^./, (value) => value.toUpperCase());
}

export function ComponentExamplesPage({
  currentComponentKey,
  onComponentChange,
}: {
  currentComponentKey: ComponentKey;
  onComponentChange: (key: ComponentKey) => void;
}) {
  const currentFamily = componentCatalog[currentComponentKey];
  const componentEntries = Object.entries(currentFamily.examples) as Array<
    [string, ComponentType]
  >;

  return (
    <section className="app-panel grid gap-6 rounded-[32px] p-6 lg:p-8">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="flex flex-col gap-3">
          <p className="app-kicker">Component Examples</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Browse one component family at a time on the baseline package theme.
          </h2>
          <p className="app-copy max-w-3xl text-sm leading-6">
            This view intentionally ignores the theme playground presets. Use it
            for straightforward regression review of the example modules.
          </p>
        </div>
        <div className="app-panel-muted rounded-[24px] p-4 text-sm">
          <p className="font-medium">{currentFamily.label}</p>
          <p className="app-copy mt-2 leading-6">{currentFamily.description}</p>
          <p className="text-muted-foreground mt-3">
            {componentEntries.length} example
            {componentEntries.length === 1 ? "" : "s"} in this family.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(componentCatalog) as ComponentKey[]).map((key) => (
          <button
            key={key}
            type="button"
            className="mode-chip"
            data-active={key === currentComponentKey}
            onClick={() => onComponentChange(key)}
          >
            {componentCatalog[key].label}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {componentEntries.map(([name, Component]) => (
          <section key={name} className="example-card rounded-[24px] p-5">
            <div className="flex flex-col gap-2">
              <p className="app-kicker">{currentFamily.label}</p>
              <h3 className="text-xl font-semibold tracking-tight">
                {formatExampleName(name)}
              </h3>
            </div>
            <Separator className="my-4" />
            <Component />
          </section>
        ))}
      </div>
    </section>
  );
}
