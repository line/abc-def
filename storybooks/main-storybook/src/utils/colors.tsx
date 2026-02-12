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
import React, { Fragment } from "react";

import { Icon, toast } from "@line/abc-def-react";

import {
  primitivesCSSVariables,
  semanticCSSVariables,
  semanticDarkCSSVariables,
} from "./css-variables";

const parseCSSVariables = (
  cssVariables: string,
  regexCategory: RegExp,
  regexName: RegExp,
) => {
  return cssVariables.split(";").map((item) => {
    const [key, value] = item.split(":");
    const match = key?.match(regexCategory);
    const category =
      match?.[1] === "base"
        ? "base"
        : match?.[2]
          ? `${match[1]} ${match[2]}`
          : match?.[1];
    const name = key
      ?.replace(regexName, (_, p1: string, p2: string) =>
        p1.startsWith("base-") ? p1.replace("-", "/") : p2 ? `${p1}/${p2}` : p1,
      )
      .replace("--", "")
      .trim();
    return { category, name, value };
  });
};

const primitives = parseCSSVariables(
  primitivesCSSVariables,
  /--([a-z]+)(?:-([a-z]+))?/,
  /--([a-z]+(?:-[a-z]+)?)(\d+)?/,
);

const primitivesByCategory = primitives.reduce(
  (acc: Record<string, { name: string; value: string }[]>, item) => {
    const { category = "", name, value } = item;
    if (!name || !value) return acc;

    acc[category] ??= [];
    acc[category].push({ name, value });

    return acc;
  },
  {},
);

const parseSemanticVariables = (cssVariables: string) => {
  return cssVariables.split(";").map((item) => {
    const [key, value] = item.split(":");
    const match = key?.match(/--([a-z]+)-([a-z]+)(?:-([a-z]+))?/);
    const category =
      match?.[1] === "fg"
        ? "foreground"
        : match?.[1] === "bg"
          ? "background"
          : match?.[1];
    const subCategory =
      category === "background" &&
      match?.[2] !== "tint" &&
      match?.[2] !== "neutral"
        ? "bg"
        : match?.[2];
    const name = key
      ?.replace(/\s+/g, "")
      .trim()
      .replace(
        category === "background" && subCategory === "tint"
          ? /--(?:[a-z]+-)*(.*-[a-z]+)/
          : /--(?:[a-z]+-)*(.*)/,
        "$1",
      );
    const primitive = value
      ?.replace(/--([a-z]+(?:-[a-z]+)?)(\d+)?/, (_, p1: string, p2: string) =>
        p1.startsWith("base-") ? p1.replace("-", "/") : p2 ? `${p1}/${p2}` : p1,
      )
      .replace("--", "")
      .replace(/var\((.*?)\)/, "$1")
      .trim();
    return { category, subCategory, name, value, primitive };
  });
};

const semantics = parseSemanticVariables(semanticCSSVariables);

const semanticsByCategory = semantics.reduce(
  (
    acc: Record<
      string,
      Record<string, { name: string; value: string; primitive: string }[]>
    >,
    item,
  ) => {
    const {
      category = "",
      subCategory = "",
      name = "",
      value = "",
      primitive = "",
    } = item;

    acc[category] ??= {};
    acc[category][subCategory] ??= [];
    acc[category][subCategory].push({ name, value, primitive });

    return acc;
  },
  {},
);

const semanticsDark = parseSemanticVariables(semanticDarkCSSVariables);

const semanticsDarkByCategory = semanticsDark.reduce(
  (
    acc: Record<
      string,
      Record<string, { name: string; value: string; primitive: string }[]>
    >,
    item,
  ) => {
    const {
      category = "",
      subCategory = "",
      name = "",
      value = "",
      primitive = "",
    } = item;

    acc[category] ??= {};
    acc[category][subCategory] ??= [];
    acc[category][subCategory].push({ name, value, primitive });

    return acc;
  },
  {},
);

const combinedSemanticsDarkByCategory = Object.entries(
  semanticsByCategory,
).reduce(
  (acc, [category, subCategories]) => {
    // Ensure the category exists in the combined object
    acc[category] ??= {};

    Object.entries(subCategories).forEach(([subCategory, items]) => {
      if (acc[category]) {
        // Ensure the subCategory exists in the combined object
        acc[category][subCategory] ??= [];

        // Merge items from semanticsByCategory
        const mergedItems = items.map((item) => {
          const darkItem = semanticsDarkByCategory[category]?.[
            subCategory
          ]?.find((dark) => dark.name === item.name);
          return darkItem ? { ...item, ...darkItem } : item;
        });

        // Add merged items to the combined object
        acc[category][subCategory] = mergedItems;
      }
    });

    return acc;
  },
  { ...semanticsDarkByCategory }, // Start with semanticsDarkByCategory as the base
);

const handleCopy = async (text: string) => {
  await navigator.clipboard.writeText(text);
  toast.success(`${text} copied`);
};

export const PrimitiveColors = () => {
  return (
    <div>
      {Object.values(primitivesByCategory).map((colors, index) => (
        <Fragment key={index}>
          <p className="!text-title-h4 capitalize">
            {Object.keys(primitivesByCategory)[index]}
          </p>
          <div className="grid grid-cols-11 gap-4">
            {colors.map(
              ({ name, value = "" }, index) =>
                name && (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="border-neutral-tertiary !mb-1 flex-shrink-0 overflow-hidden rounded-lg border"
                      style={{
                        background:
                          "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
                      }}
                    >
                      <div
                        style={{
                          background: value,
                        }}
                        className="h-14 w-14"
                      ></div>
                    </div>
                    <strong className="text-neutral-primary text-sm font-bold">
                      {name.split("/").pop()}
                    </strong>
                    <button
                      onClick={() => handleCopy(value.trim())}
                      className="text-neutral-tertiary text-left text-xs"
                    >
                      <Icon
                        name="RiLink"
                        className="text-neutral-tertiary mr-0-point-5 h-3 w-3"
                      />
                      {value.trim()}
                    </button>
                  </div>
                ),
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export const SemanticColorsLight = () => {
  return (
    <div className="bg-secondary rounded-lg p-6">
      {Object.values(semanticsByCategory).map((subCategory, index) => (
        <Fragment key={index}>
          <p className="!text-title-h2 !text-neutral-primary capitalize">
            {Object.keys(semanticsByCategory)[index]}
          </p>
          <div>
            {Object.values(subCategory).map((colors, index) => (
              <Fragment key={index}>
                <p className="!text-title-h4 !text-neutral-primary capitalize">
                  {Object.keys(subCategory)[index]}
                </p>
                <div className="grid grid-cols-4 gap-4">
                  {colors.map(
                    ({ name, value = "", primitive = "" }, index) =>
                      name && (
                        <div
                          key={index}
                          className="bg-primary border-neutral-tertiary flex items-center space-x-4 rounded-lg border p-3"
                        >
                          <div
                            className="border-neutral-tertiary flex-shrink-0 overflow-hidden rounded-lg border"
                            style={{
                              background:
                                "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
                            }}
                          >
                            <div
                              style={{
                                background: value,
                              }}
                              className="h-14 w-14"
                            ></div>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <strong className="text-neutral-primary text-sm font-bold">
                              {name}
                            </strong>
                            <button
                              onClick={() => handleCopy(value)}
                              className="text-neutral-tertiary text-left text-xs"
                            >
                              <Icon
                                name="RiLink"
                                className="text-neutral-tertiary mr-1 h-4 w-4"
                              />
                              {primitive}
                            </button>
                          </div>
                        </div>
                      ),
                  )}
                </div>
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export const SemanticColorsDark = () => {
  return (
    <div className="bg-secondary dark rounded-lg p-6">
      {Object.values(combinedSemanticsDarkByCategory).map(
        (subCategory, index) => (
          <Fragment key={index}>
            <p className="!text-title-h2 !text-neutral-primary capitalize">
              {Object.keys(combinedSemanticsDarkByCategory)[index]}
            </p>
            <div>
              {Object.values(subCategory).map((colors, index) => (
                <Fragment key={index}>
                  <p className="!text-title-h4 !text-neutral-primary capitalize">
                    {Object.keys(subCategory)[index]}
                  </p>
                  <div className="grid grid-cols-4 gap-4">
                    {colors.map(
                      ({ name, value = "", primitive = "" }, index) =>
                        name && (
                          <div
                            key={index}
                            className="bg-primary border-neutral-tertiary flex items-center space-x-4 rounded-lg border p-3"
                          >
                            <div
                              className="border-neutral-tertiary flex-shrink-0 overflow-hidden rounded-lg border"
                              style={{
                                background:
                                  "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
                              }}
                            >
                              <div
                                style={{
                                  background: value,
                                }}
                                className="h-14 w-14"
                              ></div>
                            </div>
                            <div className="flex flex-col space-y-1">
                              <strong className="text-neutral-primary text-sm font-bold">
                                {name}
                              </strong>
                              <button
                                onClick={() => handleCopy(value)}
                                className="text-neutral-tertiary text-left text-xs"
                              >
                                <Icon
                                  name="RiLink"
                                  className="text-neutral-tertiary mr-1 h-4 w-4"
                                />
                                {primitive}
                              </button>
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </Fragment>
        ),
      )}
    </div>
  );
};
