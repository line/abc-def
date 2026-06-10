import type { ExampleGroup } from "../lib/example-registry";

export interface GalleryOptions {
  group: ExampleGroup;
}

export function renderGallery(host: HTMLElement, options: GalleryOptions): void {
  const { group } = options;
  const variantWord = group.examples.length === 1 ? "variant" : "variants";

  host.className = "flex flex-col gap-6";
  host.replaceChildren();

  const header = document.createElement("header");
  header.className = "app-panel rounded-3xl p-6";
  header.innerHTML = `
    <p class="app-kicker">Component</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight">${group.title}</h2>
    <p class="app-copy mt-2 text-sm leading-6">
      ${group.examples.length} ${variantWord} · loaded from
      <code class="bg-muted rounded px-1.5 py-0.5 text-xs">src/examples/${group.slug}/</code>
    </p>
  `;
  host.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-1 gap-5 xl:grid-cols-2";
  host.appendChild(grid);

  group.examples.forEach((example) => {
    const card = document.createElement("article");
    card.className = "example-card flex flex-col gap-4 rounded-3xl p-5";

    const cardHeader = document.createElement("header");
    cardHeader.className = "flex items-baseline justify-between gap-3";
    cardHeader.innerHTML = `
      <div class="flex flex-col gap-1">
        <h3 class="text-base font-semibold tracking-tight">${example.variantLabel}</h3>
        <p class="text-muted-foreground text-xs">
          <code>src/examples/${example.fileSlug}.html</code>
        </p>
      </div>
      <span
        class="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
        aria-label="Group ${group.slug}"
      >${group.slug}</span>
    `;

    const preview = document.createElement("div");
    preview.className =
      "bg-background/40 border-border/60 flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed p-6";
    preview.innerHTML = example.html;

    card.appendChild(cardHeader);
    card.appendChild(preview);
    grid.appendChild(card);
  });
}
