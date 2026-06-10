import "./index.css";

import { renderGallery } from "./components/example-gallery";
import { renderSidebar } from "./components/example-sidebar";
import { renderThemeToggle } from "./components/theme-toggle";
import { attachInteractiveBehaviors } from "./lib/behaviors";
import {
  exampleGroups,
  findGroupBySlug,
  type ExampleGroup,
} from "./lib/example-registry";
import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  type ThemeMode,
} from "./lib/theme";

function readHashSlug(): string | null {
  if (typeof window === "undefined") return null;
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw.length > 0 ? raw : null;
}

function resolveActiveGroup(slug: string | null): ExampleGroup | undefined {
  return findGroupBySlug(slug) ?? exampleGroups[0];
}

const appRoot = document.querySelector<HTMLElement>("#app");
if (!appRoot) {
  throw new Error("Expected #app shell element to be present in index.html");
}

let theme: ThemeMode = getPreferredTheme();
let activeGroup = resolveActiveGroup(readHashSlug());

function setTheme(next: ThemeMode): void {
  theme = next;
  applyTheme(theme);
  persistTheme(theme);
  renderShell();
}

function setActiveGroup(slug: string): void {
  const targetHash = `#/${slug}`;
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
    return;
  }
  activeGroup = resolveActiveGroup(slug);
  renderShell();
}

function renderShell(): void {
  if (!appRoot) return;

  if (!activeGroup) {
    appRoot.className = "flex min-h-screen items-center justify-center px-6";
    appRoot.innerHTML = `
      <p class="text-muted-foreground text-sm">
        No examples were discovered. Check
        <code class="bg-muted rounded px-1.5 py-0.5">src/examples</code>.
      </p>
    `;
    return;
  }

  appRoot.className = "example-app bg-background text-foreground min-h-screen";
  appRoot.replaceChildren();

  const layout = document.createElement("div");
  layout.className =
    "mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row";
  appRoot.appendChild(layout);

  const sidebarHost = document.createElement("aside");
  layout.appendChild(sidebarHost);

  const themeHost = document.createElement("div");
  renderThemeToggle(themeHost, { theme, onChange: setTheme });

  renderSidebar(sidebarHost, {
    groups: exampleGroups,
    activeSlug: activeGroup.slug,
    onSelect: setActiveGroup,
    headerSlot: themeHost,
  });

  const galleryHost = document.createElement("section");
  galleryHost.className = "min-w-0 flex-1";
  layout.appendChild(galleryHost);

  renderGallery(galleryHost, { group: activeGroup });

  attachInteractiveBehaviors(galleryHost);
}

applyTheme(theme);
persistTheme(theme);

if (!readHashSlug() && activeGroup) {
  window.history.replaceState(null, "", `#/${activeGroup.slug}`);
}

window.addEventListener("hashchange", () => {
  activeGroup = resolveActiveGroup(readHashSlug());
  renderShell();
});

renderShell();
