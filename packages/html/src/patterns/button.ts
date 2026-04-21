import { escapeHtml } from "../lib/escape";

export function buttonPattern(label = "Button") {
  return `<button type="button" class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">${escapeHtml(label)}</button>`;
}
