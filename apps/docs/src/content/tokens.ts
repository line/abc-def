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

import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

import { componentDocs } from "./components";

export type TokenLayer = "semantic" | "component" | "primitive";

export interface DesignToken {
  name: `--${string}`;
  defaultValue: string;
  references: `--${string}`[];
  semanticTokens: `--${string}`[];
  defaultPrimitiveTokens: string[];
  layer: TokenLayer;
  sourceFile: string;
  componentSlug?: string;
  componentTitle?: string;
  editable: boolean;
}

export interface TokenGraphNode {
  name: `--${string}`;
  defaultValue?: string;
  layer: TokenLayer;
  editable: boolean;
  sourceFile?: string;
}

const stylesRoot = join(process.cwd(), "../../packages/styles/src");
const semanticFile = join(stylesRoot, "semantic.css");
const componentsRoot = join(stylesRoot, "components");
const tokenDeclarationPattern = /(--[\w-]+)\s*:\s*([^;]+);/g;
const tokenReferencePattern = /var\((--[\w-]+)/g;

function sourcePath(filePath: string) {
  return filePath.replace(`${process.cwd()}/../../`, "");
}

function referencesFromValue(value: string) {
  return Array.from(
    value.matchAll(tokenReferencePattern),
    (match) => match[1] as `--${string}`,
  );
}

function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}

function parseTokens(
  filePath: string,
  layer: TokenLayer,
  componentSlug?: string,
) {
  const css = readFileSync(filePath, "utf8");
  const tokens = new Map<string, DesignToken>();
  const component = componentSlug
    ? componentDocs.find((item) => item.slug === componentSlug)
    : undefined;

  for (const match of css.matchAll(tokenDeclarationPattern)) {
    const tokenName = match[1];

    if (!tokenName || tokens.has(tokenName)) {
      continue;
    }

    const name = tokenName as `--${string}`;
    const defaultValue = match[2]?.trim() ?? "";

    tokens.set(name, {
      name,
      defaultValue,
      references: referencesFromValue(defaultValue),
      semanticTokens: [],
      defaultPrimitiveTokens: [],
      layer,
      sourceFile: sourcePath(filePath),
      componentSlug,
      componentTitle: component?.title,
      editable: layer !== "primitive",
    });
  }

  return Array.from(tokens.values());
}

export function getSemanticTokens() {
  return parseTokens(semanticFile, "semantic");
}

export function getComponentTokens(slug?: string) {
  const files = slug
    ? [`${slug}.css`]
    : readdirSync(componentsRoot).filter((file) => file.endsWith(".css"));
  const semanticTokenList = getSemanticTokens();
  const semanticTokenNames = new Set(
    semanticTokenList.map((token) => token.name),
  );
  const componentTokens = files.flatMap((file) => {
    const componentSlug = basename(file, ".css");

    if (componentSlug === "index" || componentSlug === "variables") {
      return [];
    }

    try {
      return parseTokens(
        join(componentsRoot, file),
        "component",
        componentSlug,
      );
    } catch {
      return [];
    }
  });
  const tokensByName = new Map(
    [...semanticTokenList, ...componentTokens].map((token) => [
      token.name,
      token,
    ]),
  );

  function collectSemanticTokens(token: DesignToken) {
    const visited = new Set<string>();
    const semanticReferences: `--${string}`[] = [];

    function visit(reference: `--${string}`) {
      if (visited.has(reference)) {
        return;
      }

      visited.add(reference);

      if (semanticTokenNames.has(reference)) {
        semanticReferences.push(reference);
        return;
      }

      const referencedToken = tokensByName.get(reference);

      if (referencedToken?.layer !== "component") {
        return;
      }

      for (const nextReference of referencedToken.references) {
        visit(nextReference);
      }
    }

    for (const reference of token.references) {
      visit(reference);
    }

    return semanticReferences;
  }

  function defaultPrimitiveTokens(semanticReferences: `--${string}`[]) {
    return unique(
      semanticReferences.flatMap((reference) => {
        const semanticToken = tokensByName.get(reference);

        if (!semanticToken) {
          return [];
        }

        const primitiveReferences = semanticToken.references.filter((name) =>
          name.startsWith("--color-"),
        );

        return primitiveReferences.length > 0
          ? primitiveReferences
          : [semanticToken.defaultValue];
      }),
    );
  }

  return componentTokens.map((token) => {
    const resolvedSemanticTokens = unique(collectSemanticTokens(token));

    return {
      ...token,
      semanticTokens: resolvedSemanticTokens,
      defaultPrimitiveTokens:
        resolvedSemanticTokens.length > 0
          ? defaultPrimitiveTokens(resolvedSemanticTokens)
          : [token.defaultValue],
    };
  });
}

export function getEditablePlaygroundTokens() {
  return [...getSemanticTokens(), ...getComponentTokens()];
}

function tokenByName() {
  return new Map(
    [...getSemanticTokens(), ...getComponentTokens()].map((token) => [
      token.name,
      token,
    ]),
  );
}

function primitiveNode(name: `--${string}`): TokenGraphNode {
  return {
    name,
    layer: "primitive",
    editable: false,
  };
}

export function getTokenGraph(tokenName: `--${string}`) {
  const tokens = tokenByName();
  const visited = new Set<string>();
  const graph: TokenGraphNode[] = [];

  function visit(name: `--${string}`) {
    if (visited.has(name)) {
      return;
    }

    visited.add(name);
    const token = tokens.get(name);

    if (!token) {
      if (name.startsWith("--color-")) {
        graph.push(primitiveNode(name));
      }
      return;
    }

    graph.push({
      name: token.name,
      defaultValue: token.defaultValue,
      layer: token.layer,
      editable: token.editable,
      sourceFile: token.sourceFile,
    });

    for (const reference of token.references) {
      visit(reference);
    }
  }

  visit(tokenName);

  return graph;
}
