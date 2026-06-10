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
import type { ExampleEntry, ExampleGroup } from "@/lib/example-registry";
import type { ComponentType, LazyExoticComponent, ReactNode } from "react";
import { Component as ReactComponent, Suspense } from "react";
import { AlertCircleIcon } from "lucide-react";

interface Props {
  group: ExampleGroup;
  theme: ThemeMode;
}

export function ExampleGallery({ group, theme }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <header className="app-panel rounded-3xl p-6">
        <p className="app-kicker">Component</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">
          {group.title}
        </h2>
        <p className="app-copy mt-2 text-sm leading-6">
          {group.examples.length} variant
          {group.examples.length === 1 ? "" : "s"} · imported from{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
            @line/abc-def-react/{group.slug}
          </code>
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {group.examples.map((example) => (
          <ExampleCard
            key={example.fileSlug}
            example={example}
            groupSlug={group.slug}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

function ExampleCard({
  example,
  groupSlug,
  theme,
}: {
  example: ExampleEntry;
  groupSlug: string;
  theme: ThemeMode;
}) {
  const isIframe = example.renderMode === "iframe";

  return (
    <article
      className={[
        "example-card flex flex-col gap-4 rounded-3xl p-5",
        isIframe ? "xl:col-span-2" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="flex items-baseline justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold tracking-tight">
            {example.variantLabel}
          </h3>
          <p className="text-muted-foreground text-xs">
            <code>src/components/{example.fileSlug}.tsx</code>
          </p>
        </div>
        <span
          className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
          aria-label={`Group ${groupSlug}`}
        >
          {groupSlug}
        </span>
      </header>

      <div
        className={[
          "bg-background/40 border-border/60 flex items-center justify-center rounded-2xl border",
          isIframe
            ? "h-[560px] overflow-hidden p-0"
            : "min-h-[180px] border-dashed p-6",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {isIframe ? (
          <ExampleIframe example={example} theme={theme} />
        ) : (
          <ExampleRenderer Component={example.Component} />
        )}
      </div>
    </article>
  );
}

function ExampleIframe({
  example,
  theme,
}: {
  example: ExampleEntry;
  theme: ThemeMode;
}) {
  const src = `/preview/${example.fileSlug}?theme=${encodeURIComponent(theme)}`;

  return (
    <iframe
      className="bg-background size-full"
      src={src}
      title={`${example.variantLabel} preview`}
    />
  );
}

function ExampleRenderer({
  Component,
}: {
  Component: LazyExoticComponent<ComponentType<unknown>>;
}) {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <p className="text-muted-foreground text-xs">Loading preview...</p>
        }
      >
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}

class ErrorBoundary extends ReactComponent<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="text-destructive flex max-w-sm flex-col items-center gap-2 text-center">
          <AlertCircleIcon className="size-5" />
          <p className="text-xs font-medium">Failed to render preview</p>
          <p className="text-muted-foreground font-mono text-[11px] break-all">
            {this.state.error.message}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
