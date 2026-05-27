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

import type { ThemeMode } from "@/components/theme-toggle";
import type { ExampleGroup } from "@/lib/example-registry";
import { useEffect, useMemo, useState } from "react";

import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  ThemeToggle,
} from "@/components/theme-toggle";
import { exampleGroups, findGroupBySlug } from "@/lib/example-registry";
import { ExampleGallery } from "./example-gallery";
import { ExampleSidebar } from "./example-sidebar";

function readHashSlug(): string | null {
  if (typeof window === "undefined") return null;
  const raw = window.location.hash.replace(/^#\/?/, "");
  return raw.length > 0 ? raw : null;
}

export function ExampleApp() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [hasReadHash, setHasReadHash] = useState(false);

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    if (!theme) return;
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  useEffect(() => {
    setActiveSlug(readHashSlug());
    setHasReadHash(true);

    const onHashChange = () => setActiveSlug(readHashSlug());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const initialGroup = useMemo<ExampleGroup | undefined>(() => {
    const fromHash = findGroupBySlug(activeSlug);
    if (fromHash) return fromHash;
    return exampleGroups[0];
  }, [activeSlug]);

  useEffect(() => {
    if (hasReadHash && !activeSlug && initialGroup) {
      window.history.replaceState(null, "", `#/${initialGroup.slug}`);
    }
  }, [activeSlug, hasReadHash, initialGroup]);

  const handleSelect = (slug: string) => {
    window.location.hash = `#/${slug}`;
  };

  if (!initialGroup) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <p className="text-muted-foreground text-sm">
          No examples were discovered. Check{" "}
          <code className="bg-muted rounded px-1.5 py-0.5">src/components</code>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="example-app bg-background text-foreground min-h-screen">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row">
        <ExampleSidebar
          groups={exampleGroups}
          activeSlug={initialGroup.slug}
          onSelect={handleSelect}
          themeSlot={
            <ThemeToggle theme={theme ?? "light"} onThemeChange={setTheme} />
          }
        />
        <section className="min-w-0 flex-1">
          <ExampleGallery group={initialGroup} theme={theme ?? "light"} />
        </section>
      </div>
    </main>
  );
}
