import { Button, ButtonGroup } from "@abc-def/react";
import { MoonStarIcon, SunMediumIcon } from "lucide-react";

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

export function ThemeToggle({
  className,
  onThemeChange,
  theme,
}: {
  className?: string;
  onThemeChange: (theme: ThemeMode) => void;
  theme: ThemeMode;
}) {
  return (
    <div className={["theme-toggle", className].filter(Boolean).join(" ")}>
      <span className="theme-toggle-label">Theme</span>
      <ButtonGroup aria-label="Color theme">
        <Button
          size="sm"
          variant={theme === "light" ? "default" : "outline"}
          aria-pressed={theme === "light"}
          onClick={() => onThemeChange("light")}
        >
          <SunMediumIcon />
          Light
        </Button>
        <Button
          size="sm"
          variant={theme === "dark" ? "default" : "outline"}
          aria-pressed={theme === "dark"}
          onClick={() => onThemeChange("dark")}
        >
          <MoonStarIcon />
          Dark
        </Button>
      </ButtonGroup>
    </div>
  );
}
