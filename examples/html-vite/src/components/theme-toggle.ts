import type { ThemeMode } from "../lib/theme";
import { moonIcon, sunIcon } from "./icons";

export interface ThemeToggleOptions {
  theme: ThemeMode;
  onChange: (next: ThemeMode) => void;
}

export function renderThemeToggle(
  host: HTMLElement,
  options: ThemeToggleOptions,
): void {
  const { theme, onChange } = options;
  const isLight = theme === "light";
  const isDark = theme === "dark";

  host.innerHTML = `
    <div class="theme-toggle app-theme-toggle">
      <span class="theme-toggle-label">Theme</span>
      <div class="button-group button-group-orientation-horizontal" role="group" aria-label="Color theme">
        <button
          type="button"
          class="button button-variant-${isLight ? "default" : "outline"} button-size-sm button-rounded-default"
          data-slot="button"
          data-theme-mode="light"
          aria-pressed="${String(isLight)}"
        >
          ${sunIcon}
          <span>Light</span>
        </button>
        <button
          type="button"
          class="button button-variant-${isDark ? "default" : "outline"} button-size-sm button-rounded-default"
          data-slot="button"
          data-theme-mode="dark"
          aria-pressed="${String(isDark)}"
        >
          ${moonIcon}
          <span>Dark</span>
        </button>
      </div>
    </div>
  `;

  host
    .querySelectorAll<HTMLButtonElement>("[data-theme-mode]")
    .forEach((button) => {
      const mode = button.dataset.themeMode as ThemeMode | undefined;
      if (!mode) return;
      button.addEventListener("click", () => {
        onChange(mode);
      });
    });
}
