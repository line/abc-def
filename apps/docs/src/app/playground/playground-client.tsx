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

import type { ComponentDoc } from "@/content/components";
import type { DesignToken, TokenLayer } from "@/content/tokens";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { Button } from "@line/abc-def-react/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@line/abc-def-react/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@line/abc-def-react/drawer";
import { Input } from "@line/abc-def-react/input";
import { NativeSelect } from "@line/abc-def-react/native-select";
import { Tabs, TabsList, TabsTrigger } from "@line/abc-def-react/tabs";

import { getComponentExample } from "@/content/component-examples";

type Overrides = Partial<Record<`--${string}`, string>>;
type TokenTab = Exclude<TokenLayer, "primitive">;
type ParseCssOverridesResult = { overrides: Overrides } | { error: string };

interface PlaygroundClientProps {
  components: ComponentDoc[];
  tokens: DesignToken[];
}

function tokenGroup(token: DesignToken) {
  return token.layer === "semantic"
    ? "Semantic"
    : (token.componentTitle ?? "Component");
}

function cssOverrideText(overrides: Overrides) {
  const entries = Object.entries(overrides).filter((entry) => entry[1]);

  if (entries.length === 0) {
    return ".abc-def-playground {\n}";
  }

  return `.abc-def-playground {\n${entries
    .map(([name, value]) => `  ${name}: ${value};`)
    .join("\n")}\n}`;
}

function parseCssOverrides(css: string): ParseCssOverridesResult {
  const trimmedCss = css.replace(/\/\*[\s\S]*?\*\//g, "").trim();
  const blockMatch = /\.abc-def-playground\s*\{([\s\S]*)\}\s*$/.exec(
    trimmedCss,
  );
  const body = blockMatch?.[1] ?? trimmedCss;

  if (!blockMatch && /[{}]/.test(trimmedCss)) {
    return {
      error:
        "Use a single .abc-def-playground block or custom property declarations.",
    };
  }

  const overrides: Overrides = {};
  const declarations = body
    .split(";")
    .map((declaration) => declaration.trim())
    .filter(Boolean);

  for (const declaration of declarations) {
    const match = /^(--[\w-]+)\s*:\s*(.+)$/.exec(declaration);

    if (!match) {
      return {
        error: "Only CSS custom property declarations can be saved.",
      };
    }

    const name = match[1] as `--${string}`;
    const value = match[2]?.trim();

    if (!value) {
      return {
        error: `${name} needs a value.`,
      };
    }

    overrides[name] = value;
  }

  return { overrides };
}

export function PlaygroundClient({
  components,
  tokens,
}: PlaygroundClientProps) {
  const [tab, setTab] = useState<TokenTab>("semantic");
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const [overrides, setOverrides] = useState<Overrides>({});
  const [cssDrawerOpen, setCssDrawerOpen] = useState(false);
  const [draftOverrides, setDraftOverrides] = useState<Overrides>({});
  const [draftCss, setDraftCss] = useState(cssOverrideText({}));
  const [cssError, setCssError] = useState("");

  const componentGroups = useMemo(
    () =>
      Array.from(
        new Set(tokens.flatMap((token) => token.componentTitle ?? [])),
      ).sort(),
    [tokens],
  );
  const componentTokensBySlug = useMemo(() => {
    const tokensBySlug = new Map<string, DesignToken[]>();

    for (const token of tokens) {
      if (token.layer !== "component" || !token.componentSlug) {
        continue;
      }

      tokensBySlug.set(token.componentSlug, [
        ...(tokensBySlug.get(token.componentSlug) ?? []),
        token,
      ]);
    }

    return tokensBySlug;
  }, [tokens]);

  const filteredTokens = useMemo(
    () =>
      tokens.filter((token) => {
        const matchesTab = token.layer === tab;
        const matchesQuery =
          token.name.toLowerCase().includes(query.toLowerCase()) ||
          token.defaultValue.toLowerCase().includes(query.toLowerCase());
        const matchesGroup =
          tab === "semantic" ||
          group === "all" ||
          token.componentTitle === group;

        return matchesTab && matchesQuery && matchesGroup;
      }),
    [group, query, tab, tokens],
  );

  const style = Object.fromEntries(
    Object.entries(overrides).filter((entry) => entry[1]),
  ) as CSSProperties & Record<`--${string}`, string>;

  function selectTab(value: TokenTab) {
    setTab(value);

    if (value === "semantic") {
      setGroup("all");
    }
  }

  function updateDraftOverride(name: `--${string}`, value: string) {
    setDraftOverrides((current) => {
      const next = {
        ...current,
        [name]: value,
      };

      setDraftCss(cssOverrideText(next));
      return next;
    });
  }

  function resetDraftToken(name: `--${string}`) {
    setDraftOverrides((current) => {
      const next = { ...current };
      delete next[name];
      setDraftCss(cssOverrideText(next));
      return next;
    });
  }

  async function copyCss() {
    await navigator.clipboard.writeText(draftCss);
  }

  function openCssDrawer() {
    setDraftOverrides(overrides);
    setDraftCss(cssOverrideText(overrides));
    setCssError("");
    setCssDrawerOpen(true);
  }

  function openComponentTokenDrawer(component: ComponentDoc) {
    const componentTokens = componentTokensBySlug.get(component.slug);
    const firstToken = componentTokens?.[0];

    if (!firstToken) {
      return;
    }

    setTab("component");
    setQuery("");
    setGroup(component.title);
    setDraftOverrides(overrides);
    setDraftCss(cssOverrideText(overrides));
    setCssError("");
    setCssDrawerOpen(true);
  }

  function closeCssDrawer() {
    setCssError("");
    setCssDrawerOpen(false);
  }

  function updateCssDrawerOpen(open: boolean) {
    if (open) {
      setCssDrawerOpen(true);
      return;
    }

    closeCssDrawer();
  }

  function resetDraftOverrides() {
    setDraftOverrides({});
    setDraftCss(cssOverrideText({}));
    setCssError("");
  }

  function saveCssOverrides() {
    const parsed = parseCssOverrides(draftCss);

    if ("error" in parsed) {
      setCssError(parsed.error);
      return;
    }

    const nextCss = cssOverrideText(parsed.overrides);

    setOverrides(parsed.overrides);
    setDraftOverrides(parsed.overrides);
    setDraftCss(nextCss);
    setCssError("");
    setCssDrawerOpen(false);
  }

  return (
    <div className="docs-playground">
      <div className="docs-playground-toolbar">
        <Button type="button" variant="secondary" onClick={openCssDrawer}>
          Open controls
        </Button>
      </div>
      <section
        className="docs-playground-preview abc-def-playground"
        style={style}
        aria-label="Component previews"
      >
        {components.map((component) => {
          const example = getComponentExample(component.slug);

          if (!example) {
            return null;
          }

          const Example = example.Example;
          const canEditComponentTokens =
            (componentTokensBySlug.get(component.slug)?.length ?? 0) > 0;

          return (
            <Card key={component.slug} className="docs-playground-card">
              <CardHeader>
                <CardTitle>
                  {canEditComponentTokens ? (
                    <button
                      type="button"
                      className="docs-playground-card-title-button"
                      onClick={() => openComponentTokenDrawer(component)}
                    >
                      {component.title}
                    </button>
                  ) : (
                    component.title
                  )}
                </CardTitle>
                {canEditComponentTokens && (
                  <CardAction>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => openComponentTokenDrawer(component)}
                    >
                      Edit
                    </Button>
                  </CardAction>
                )}
                <CardDescription>{component.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={[
                    "docs-example-preview",
                    example.previewClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Example />
                </div>
                {example.variantExamples && (
                  <div
                    className="docs-playground-variant-list"
                    aria-label={`${component.title} variants`}
                  >
                    {example.variantExamples.map((variantExample) => {
                      const VariantExample = variantExample.Example;

                      return (
                        <div
                          key={variantExample.label}
                          className={[
                            "docs-playground-variant",
                            variantExample.className,
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          <span className="docs-playground-variant-label">
                            {variantExample.label}
                          </span>
                          <div className="docs-playground-variant-preview">
                            <VariantExample />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </section>

      <Drawer
        open={cssDrawerOpen}
        onOpenChange={updateCssDrawerOpen}
        direction="right"
      >
        <DrawerContent className="docs-playground-drawer">
          <DrawerHeader className="docs-playground-drawer-header">
            <div>
              <DrawerTitle>Playground controls</DrawerTitle>
              <DrawerDescription>
                Save scoped custom properties to update the component previews.
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button type="button" variant="outline" onClick={closeCssDrawer}>
                Close
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="overflow-y-auto px-4">
            <section
              className="docs-playground-controls"
              aria-label="Token controls"
            >
              <div className="docs-control-row">
                <Tabs
                  value={tab}
                  onValueChange={(value) => selectTab(value as TokenTab)}
                >
                  <TabsList aria-label="Token layer">
                    <TabsTrigger value="semantic">Semantic</TabsTrigger>
                    <TabsTrigger value="component">Component</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetDraftOverrides}
                >
                  Reset all
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => void copyCss()}
                >
                  Copy CSS override
                </Button>
              </div>
              <div className="docs-control-row">
                <Input
                  aria-label="Search tokens"
                  placeholder="Search tokens"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {tab === "component" && (
                  <NativeSelect
                    aria-label="Component group"
                    value={group}
                    onChange={(event) => setGroup(event.target.value)}
                  >
                    <option value="all">All groups</option>
                    {componentGroups.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </NativeSelect>
                )}
              </div>
              <div className="docs-token-editor-list">
                {filteredTokens.map((token) => (
                  <label key={token.name} className="docs-token-editor">
                    <span>
                      <code>{token.name}</code>
                      <small>{tokenGroup(token)}</small>
                    </span>
                    <Input
                      value={draftOverrides[token.name] ?? ""}
                      placeholder={token.defaultValue}
                      onChange={(event) =>
                        updateDraftOverride(token.name, event.target.value)
                      }
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => resetDraftToken(token.name)}
                    >
                      Reset
                    </Button>
                  </label>
                ))}
              </div>
            </section>
            {cssError && <p className="docs-css-drawer-error">{cssError}</p>}
          </div>
          <DrawerFooter className="docs-playground-drawer-footer">
            <div className="docs-css-drawer-actions">
              <Button
                type="button"
                variant="outline"
                onClick={resetDraftOverrides}
              >
                Reset
              </Button>
              <DrawerClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeCssDrawer}
                >
                  Cancel
                </Button>
              </DrawerClose>
              <Button type="button" onClick={saveCssOverrides}>
                Save
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
