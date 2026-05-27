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

import type { ExampleGroup } from "@/lib/example-registry";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

interface Props {
  groups: ExampleGroup[];
  activeSlug: string;
  onSelect: (slug: string) => void;
  themeSlot?: ReactNode;
}

export function ExampleSidebar({
  groups,
  activeSlug,
  onSelect,
  themeSlot,
}: Props) {
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return groups;
    return groups.filter(
      (g) =>
        g.title.toLowerCase().includes(trimmed) ||
        g.slug.toLowerCase().includes(trimmed),
    );
  }, [groups, query]);

  return (
    <aside className="app-panel sticky top-6 flex h-fit max-h-[calc(100vh-4rem)] w-full shrink-0 flex-col gap-4 self-start rounded-3xl p-5 lg:w-72">
      <div className="flex flex-col gap-1">
        <p className="app-kicker">abc-def</p>
        <h1 className="text-xl font-semibold tracking-tight">React Examples</h1>
        <p className="app-copy text-xs leading-5">
          {groups.length} components ·{" "}
          {groups.reduce((acc, g) => acc + g.examples.length, 0)} variants
        </p>
      </div>

      {themeSlot ? <div>{themeSlot}</div> : null}

      <label className="relative block">
        <span className="sr-only">Search components</span>
        <SearchIcon
          aria-hidden
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search components..."
          className="border-border bg-background focus-visible:ring-ring w-full rounded-full border py-2 pr-3 pl-9 text-sm outline-none focus-visible:ring-2"
        />
      </label>

      <nav className="-mr-2 flex min-h-0 flex-col gap-1 overflow-y-auto pr-2">
        {filteredGroups.length === 0 ? (
          <p className="text-muted-foreground px-2 py-3 text-xs">No matches.</p>
        ) : (
          filteredGroups.map((group) => {
            const isActive = group.slug === activeSlug;
            return (
              <button
                key={group.slug}
                type="button"
                onClick={() => onSelect(group.slug)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "flex items-center justify-between gap-3 rounded-xl border px-3 py-2 text-left text-sm transition",
                  isActive
                    ? "border-foreground/80 bg-foreground text-background shadow-sm"
                    : "text-foreground/80 hover:border-border hover:bg-muted/60 border-transparent",
                ].join(" ")}
              >
                <span className="truncate font-medium">{group.title}</span>
                <span
                  className={[
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold tabular-nums",
                    isActive
                      ? "bg-background/20 text-background"
                      : "bg-muted text-muted-foreground",
                  ].join(" ")}
                >
                  {group.examples.length}
                </span>
              </button>
            );
          })
        )}
      </nav>
    </aside>
  );
}
