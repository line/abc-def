import type { ExampleGroup } from "../lib/example-registry";
import { searchIcon } from "./icons";

export interface SidebarOptions {
  groups: ExampleGroup[];
  activeSlug: string;
  onSelect: (slug: string) => void;
  headerSlot?: HTMLElement;
}

const SIDEBAR_SHELL_CLASSES =
  "app-panel sticky top-6 flex h-fit max-h-[calc(100vh-4rem)] w-full shrink-0 flex-col gap-4 self-start rounded-3xl p-5 lg:w-72";

export function renderSidebar(
  host: HTMLElement,
  options: SidebarOptions,
): void {
  const { groups, activeSlug, onSelect, headerSlot } = options;
  const totalVariants = groups.reduce(
    (acc, group) => acc + group.examples.length,
    0,
  );

  host.className = SIDEBAR_SHELL_CLASSES;
  host.setAttribute("aria-label", "Component groups");
  host.replaceChildren();

  const heading = document.createElement("div");
  heading.className = "flex flex-col gap-1";
  heading.innerHTML = `
    <p class="app-kicker">abc-def</p>
    <h1 class="text-xl font-semibold tracking-tight">HTML Examples</h1>
    <p class="app-copy text-xs leading-5">
      ${groups.length} components · ${totalVariants} variants
    </p>
  `;
  host.appendChild(heading);

  if (headerSlot) {
    const slotWrapper = document.createElement("div");
    slotWrapper.appendChild(headerSlot);
    host.appendChild(slotWrapper);
  }

  const searchLabel = document.createElement("label");
  searchLabel.className = "relative block";
  searchLabel.innerHTML = `
    <span class="sr-only">Search components</span>
    <span class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2">${searchIcon}</span>
    <input
      type="search"
      placeholder="Search components..."
      class="border-border bg-background focus-visible:ring-ring w-full rounded-full border py-2 pr-3 pl-9 text-sm outline-none focus-visible:ring-2"
    />
  `;
  host.appendChild(searchLabel);
  const searchInput = searchLabel.querySelector("input")!;

  const nav = document.createElement("nav");
  nav.className = "-mr-2 flex min-h-0 flex-col gap-1 overflow-y-auto pr-2";
  host.appendChild(nav);

  const renderList = (query: string) => {
    const trimmed = query.trim().toLowerCase();
    const filtered = trimmed
      ? groups.filter(
          (g) =>
            g.title.toLowerCase().includes(trimmed) ||
            g.slug.toLowerCase().includes(trimmed),
        )
      : groups;

    nav.replaceChildren();

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.className = "text-muted-foreground px-2 py-3 text-xs";
      empty.textContent = "No matches.";
      nav.appendChild(empty);
      return;
    }

    filtered.forEach((group) => {
      const isActive = group.slug === activeSlug;
      const button = document.createElement("button");
      button.type = "button";
      if (isActive) {
        button.setAttribute("aria-current", "page");
      }
      button.className = [
        "flex items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left text-sm transition",
        isActive
          ? "border-foreground/80 bg-foreground text-background shadow-sm"
          : "border-transparent text-foreground/80 hover:border-border hover:bg-muted/60",
      ].join(" ");
      button.innerHTML = `
        <span class="truncate font-medium">${group.title}</span>
        <span class="${[
          "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold tabular-nums",
          isActive
            ? "bg-background/20 text-background"
            : "bg-muted text-muted-foreground",
        ].join(" ")}">${group.examples.length}</span>
      `;
      button.addEventListener("click", () => onSelect(group.slug));
      nav.appendChild(button);
    });
  };

  searchInput.addEventListener("input", () => {
    renderList(searchInput.value);
  });

  renderList("");
}
