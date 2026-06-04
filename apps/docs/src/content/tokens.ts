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

import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

import { componentDocs } from "./components";

export type TokenLayer = "semantic" | "component" | "primitive";

export interface DesignToken {
  name: `--${string}`;
  defaultValue: string;
  references: `--${string}`[];
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
const tokenDeclarationPattern = /^\s*(--[\w-]+):\s*([^;]+);/;
const tokenReferencePattern = /var\((--[\w-]+)/g;

function sourcePath(filePath: string) {
  return filePath.replace(`${process.cwd()}/../../`, "");
}

function referencesFromValue(value: string) {
  return Array.from(value.matchAll(tokenReferencePattern), (match) => match[1] as `--${string}`);
}

function parseTokens(filePath: string, layer: TokenLayer, componentSlug?: string) {
  const css = readFileSync(filePath, "utf8");
  const tokens = new Map<string, DesignToken>();
  const component = componentSlug
    ? componentDocs.find((item) => item.slug === componentSlug)
    : undefined;

  for (const line of css.split("\n")) {
    const match = tokenDeclarationPattern.exec(line);
    const tokenName = match?.[1];

    if (!tokenName || tokens.has(tokenName)) {
      continue;
    }

    const name = tokenName as `--${string}`;
    const defaultValue = match[2]?.trim() ?? "";

    tokens.set(name, {
      name,
      defaultValue,
      references: referencesFromValue(defaultValue),
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

  return files.flatMap((file) => {
    const componentSlug = basename(file, ".css");

    if (componentSlug === "index" || componentSlug === "variables") {
      return [];
    }

    try {
      return parseTokens(join(componentsRoot, file), "component", componentSlug);
    } catch {
      return [];
    }
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
