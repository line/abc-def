/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
"use client";

import { useEffect, useState } from "react";
import { MoonStarIcon, SunMediumIcon } from "lucide-react";

import { Button } from "@line/abc-def-react/button";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "abc-def-docs-theme";

function readThemePreference(): ThemeMode {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: ThemeMode) {
  const root = window.document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);
  const activeTheme = theme ?? "light";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    setTheme(readThemePreference());
  }, []);

  useEffect(() => {
    if (!theme) return;

    applyTheme(theme);
  }, [theme]);

  function handleClick() {
    setTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      return;
    }
  }

  return (
    <Button
      aria-label={`Switch to ${nextTheme} theme`}
      onClick={handleClick}
      size="icon"
      title={`Switch to ${nextTheme} theme`}
      type="button"
      variant="outline"
    >
      {activeTheme === "dark" ? <MoonStarIcon /> : <SunMediumIcon />}
    </Button>
  );
}
