import { ref, watchEffect } from "vue";

export type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "abc-def-example-theme";

export function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function persistTheme(theme: ThemeMode) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
}

export function useThemeMode() {
  const theme = ref<ThemeMode>(getPreferredTheme());

  watchEffect(() => {
    applyTheme(theme.value);
    persistTheme(theme.value);
  });

  return theme;
}
