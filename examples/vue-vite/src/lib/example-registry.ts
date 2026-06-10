import type { Component } from "vue";
import { defineAsyncComponent } from "vue";

type ComponentLoader = () => Promise<{ default: Component }>;

const modules = import.meta.glob<{ default: Component }>([
  "../examples/**/*.vue",
  "!**/*Example.vue",
  "!**/*Examples.vue",
  "!**/calendar/CalendarCustomDays.vue",
  "!**/calendar/CalendarRange.vue",
  "!**/calendar/CalendarRangeMultipleMonths.vue",
  "!**/calendar/DatePickerWithRange.vue",
]);

const EXAMPLE_PATH_PATTERN = /\/examples\/([^/]+)\/([^/]+)\.vue$/;
const AGGREGATE_FILE_SUFFIX = /Examples?$/;

function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function splitCamelCase(name: string): string {
  return name.replace(/([A-Z])/g, " $1").trim();
}

function groupSlugToPascalCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function variantLabelFromBaseName(
  baseName: string,
  groupSlug: string,
): string {
  const groupPrefix = groupSlugToPascalCase(groupSlug);
  const stripped = baseName.startsWith(groupPrefix)
    ? baseName.slice(groupPrefix.length)
    : baseName;
  return stripped ? splitCamelCase(stripped) : "Default";
}

export interface ExampleEntry {
  fileSlug: string;
  fileName: string;
  variantLabel: string;
  Component: Component;
}

export interface ExampleGroup {
  slug: string;
  title: string;
  examples: ExampleEntry[];
}

function buildGroups(): ExampleGroup[] {
  const map = new Map<string, ExampleGroup>();

  for (const [path, loader] of Object.entries(modules)) {
    const match = path.match(EXAMPLE_PATH_PATTERN);
    if (!match) continue;

    const groupSlug = match[1]!;
    const baseName = match[2]!;
    if (AGGREGATE_FILE_SUFFIX.test(baseName)) continue;

    const entry: ExampleEntry = {
      fileSlug: `${groupSlug}/${baseName}`,
      fileName: `${baseName}.vue`,
      variantLabel: variantLabelFromBaseName(baseName, groupSlug),
      Component: defineAsyncComponent(loader as ComponentLoader),
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
      if (a.variantLabel === "Basic") return -1;
      if (b.variantLabel === "Basic") return 1;
      if (a.variantLabel === "Default") return -1;
      if (b.variantLabel === "Default") return 1;
      return a.variantLabel.localeCompare(b.variantLabel);
    });
  }

  return Array.from(map.values())
    .filter((group) => group.examples.length > 0)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export const exampleGroups: ExampleGroup[] = buildGroups();

export function findGroupBySlug(
  slug: string | null,
): ExampleGroup | undefined {
  if (!slug) return undefined;
  return exampleGroups.find((group) => group.slug === slug);
}
