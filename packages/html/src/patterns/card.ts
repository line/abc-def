import { escapeHtml } from "../lib/escape";

export function cardPattern(title = "Card title", content = "Card content") {
  return `<section class="rounded-lg border border-border bg-background p-6 shadow-sm"><div class="mb-4 flex flex-col gap-1.5"><h3 class="text-lg font-semibold leading-none">${escapeHtml(title)}</h3></div><div class="text-sm text-muted-foreground">${escapeHtml(content)}</div></section>`;
}
