const modules = import.meta.glob<string>("../examples/**/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
});

const EXAMPLE_PATH_PATTERN = /\/examples\/([^/]+)\/([^/]+)\.html$/;

export interface ExampleEntry {
  fileSlug: string;
  fileName: string;
  variantLabel: string;
  html: string;
}

export interface ExampleGroup {
  slug: string;
  title: string;
  examples: ExampleEntry[];
}

function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function variantLabelFromBaseName(baseName: string): string {
  return toTitleCase(baseName);
}

function buildGroups(): ExampleGroup[] {
  const map = new Map<string, ExampleGroup>();

  for (const [path, html] of Object.entries(modules)) {
    const match = path.match(EXAMPLE_PATH_PATTERN);
    if (!match) continue;

    const groupSlug = match[1]!;
    const baseName = match[2]!;

    const entry: ExampleEntry = {
      fileSlug: `${groupSlug}/${baseName}`,
      fileName: `${baseName}.html`,
      variantLabel: variantLabelFromBaseName(baseName),
      html,
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
      if (a.variantLabel === "Basic") return -1;
      if (b.variantLabel === "Basic") return 1;
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
