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

import { Suspense, useEffect } from "react";
import { notFound, useParams, useSearchParams } from "next/navigation";

import type { ThemeMode } from "../../../components/theme-toggle";
import { applyTheme } from "../../../components/theme-toggle";
import { findExampleByFileSlug } from "../../../lib/example-registry";

function readFileSlug(value: string | string[] | undefined): string | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}

function readThemeMode(value: string | null): ThemeMode {
  return value === "dark" ? "dark" : "light";
}

export default function PreviewPage() {
  const params = useParams<{ fileSlug?: string | string[] }>();
  const searchParams = useSearchParams();
  const fileSlug = readFileSlug(params.fileSlug);
  const theme = readThemeMode(searchParams.get("theme"));
  const example = findExampleByFileSlug(fileSlug);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  if (!example) {
    notFound();
  }

  const Component = example.Component;

  return (
    <main className="bg-background text-foreground min-h-svh">
      <Suspense
        fallback={
          <div className="text-muted-foreground flex min-h-svh items-center justify-center text-xs">
            Loading preview...
          </div>
        }
      >
        <Component />
      </Suspense>
    </main>
  );
}
