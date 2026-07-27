/**
 * Copyright 2026 LY Corporation
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

import { useEffect, useSyncExternalStore } from "react";
import { MoonStarIcon, SunMediumIcon } from "lucide-react";

import { Button } from "@line/abc-def-react/button";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "abc-def-docs-theme";
const themeListeners = new Set<() => void>();

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

function subscribeToThemePreference(callback: () => void) {
  themeListeners.add(callback);
  window.addEventListener("storage", callback);

  return () => {
    themeListeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function emitThemePreferenceChange() {
  for (const listener of themeListeners) {
    listener();
  }
}

function getServerThemeSnapshot(): ThemeMode {
  return "light";
}

export function ThemeToggle() {
  const activeTheme = useSyncExternalStore(
    subscribeToThemePreference,
    readThemePreference,
    getServerThemeSnapshot,
  );
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  function handleClick() {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Continue with the in-memory document theme even if storage is blocked.
    }

    applyTheme(nextTheme);
    emitThemePreferenceChange();
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
