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
import type { DesignToken, TokenGraphNode, TokenLayer } from "@/content/tokens";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { Button } from "@line/abc-def-react/button";
import { Input } from "@line/abc-def-react/input";
import { NativeSelect } from "@line/abc-def-react/native-select";

import { getComponentExample } from "@/content/component-examples";

type Overrides = Partial<Record<`--${string}`, string>>;
type TokenTab = Exclude<TokenLayer, "primitive">;
type ParseCssOverridesResult = { overrides: Overrides } | { error: string };

interface PlaygroundClientProps {
  components: ComponentDoc[];
  tokens: DesignToken[];
  tokenGraphs: Record<string, TokenGraphNode[]>;
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
  tokenGraphs,
}: PlaygroundClientProps) {
  const [tab, setTab] = useState<TokenTab>("semantic");
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const [overrides, setOverrides] = useState<Overrides>({});
  const [cssDrawerOpen, setCssDrawerOpen] = useState(false);
  const [draftOverrides, setDraftOverrides] = useState<Overrides>({});
  const [draftCss, setDraftCss] = useState(cssOverrideText({}));
  const [cssError, setCssError] = useState("");
  const [selectedTokenName, setSelectedTokenName] = useState<`--${string}`>(
    tokens[0]?.name ?? "--background",
  );

  const componentGroups = useMemo(
    () =>
      Array.from(
        new Set(tokens.flatMap((token) => token.componentTitle ?? [])),
      ).sort(),
    [tokens],
  );

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

  const selectedToken =
    tokens.find((token) => token.name === selectedTokenName) ?? tokens[0];
  const selectedGraph = selectedToken
    ? (tokenGraphs[selectedToken.name] ?? [])
    : [];
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
    setSelectedTokenName(name);
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

  function closeCssDrawer() {
    setCssError("");
    setCssDrawerOpen(false);
  }

  function resetDraftOverrides() {
    setDraftOverrides({});
    setDraftCss(cssOverrideText({}));
    setCssError("");
  }

  function updateDraftCss(value: string) {
    const parsed = parseCssOverrides(value);

    setDraftCss(value);
    setCssError("");

    if ("overrides" in parsed) {
      setDraftOverrides(parsed.overrides);
    }
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

          return (
            <article key={component.slug} className="docs-playground-card">
              <div>
                <h2>{component.title}</h2>
                <p>{component.category}</p>
              </div>
              <div className="docs-example-preview">
                <Example />
              </div>
            </article>
          );
        })}
      </section>
      {selectedToken && (
        <aside className="docs-token-inspector">
          <h2>{selectedToken.name}</h2>
          <dl>
            <div>
              <dt>Default</dt>
              <dd>
                <code>{selectedToken.defaultValue}</code>
              </dd>
            </div>
            <div>
              <dt>Override</dt>
              <dd>
                <code>{overrides[selectedToken.name] ?? "None"}</code>
              </dd>
            </div>
            <div>
              <dt>Affected group</dt>
              <dd>{tokenGroup(selectedToken)}</dd>
            </div>
          </dl>
          <h3>Token chain</h3>
          <ol className="docs-token-chain">
            {selectedGraph.map((node) => (
              <li key={node.name}>
                <code>{node.name}</code>
                <span>{node.layer}</span>
                {!node.editable && <span>read-only</span>}
              </li>
            ))}
          </ol>
        </aside>
      )}
      {cssDrawerOpen && (
        <div className="docs-css-drawer" role="presentation">
          <button
            type="button"
            className="docs-css-drawer-backdrop"
            aria-label="Close playground controls"
            onClick={closeCssDrawer}
          />
          <section
            className="docs-css-drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="docs-css-drawer-title"
          >
            <div className="docs-css-drawer-header">
              <div>
                <h2 id="docs-css-drawer-title">Playground controls</h2>
                <p>
                  Save scoped custom properties to update the component
                  previews.
                </p>
              </div>
              <Button type="button" variant="outline" onClick={closeCssDrawer}>
                Close
              </Button>
            </div>
            <section
              className="docs-playground-controls"
              aria-label="Token controls"
            >
              <div className="docs-control-row">
                <div
                  className="docs-segmented"
                  role="tablist"
                  aria-label="Token layer"
                >
                  {(["semantic", "component"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      role="tab"
                      aria-selected={tab === value}
                      onClick={() => selectTab(value)}
                    >
                      {value === "semantic" ? "Semantic" : "Component"}
                    </button>
                  ))}
                </div>
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
                    <input
                      value={draftOverrides[token.name] ?? ""}
                      placeholder={token.defaultValue}
                      onChange={(event) =>
                        updateDraftOverride(token.name, event.target.value)
                      }
                      onFocus={() => setSelectedTokenName(token.name)}
                    />
                    <button
                      type="button"
                      onClick={() => resetDraftToken(token.name)}
                    >
                      Reset
                    </button>
                  </label>
                ))}
              </div>
            </section>
            <textarea
              aria-label="CSS override"
              value={draftCss}
              spellCheck={false}
              onChange={(event) => updateDraftCss(event.target.value)}
            />
            {cssError && <p className="docs-css-drawer-error">{cssError}</p>}
            <div className="docs-css-drawer-actions">
              <Button
                type="button"
                variant="outline"
                onClick={resetDraftOverrides}
              >
                Reset
              </Button>
              <Button type="button" variant="outline" onClick={closeCssDrawer}>
                Cancel
              </Button>
              <Button type="button" onClick={saveCssOverrides}>
                Save
              </Button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
