import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@abc-def/react";
import { MoonStarIcon, SunMediumIcon } from "lucide-react";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "abc-def-example-theme";

function getPreferredTheme(): ThemeMode {
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

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<ThemeMode>(getPreferredTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className={["theme-toggle", className].filter(Boolean).join(" ")}>
      <span className="theme-toggle-label">Theme</span>
      <ButtonGroup aria-label="Color theme">
        <Button
          size="sm"
          variant={theme === "light" ? "default" : "outline"}
          aria-pressed={theme === "light"}
          onClick={() => setTheme("light")}
        >
          <SunMediumIcon />
          Light
        </Button>
        <Button
          size="sm"
          variant={theme === "dark" ? "default" : "outline"}
          aria-pressed={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          <MoonStarIcon />
          Dark
        </Button>
      </ButtonGroup>
    </div>
  );
}
