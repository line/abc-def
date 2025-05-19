import React, { Fragment } from "react";

import { toast, Icon } from "@abc-def/react";
import { primitivesCSSVariables, semanticCSSVariables, semanticDarkCSSVariables } from "./cssVariables";


const parseCSSVariables = (cssVariables: string, regexCategory: RegExp, regexName: RegExp) => {
  return cssVariables.split(";").map((item) => {
    const [key, value] = item.split(":");
    const match = key?.match(regexCategory);
    const category = match?.[1] === "base" ? "base" : match?.[2] ? `${match[1]} ${match[2]}` : match?.[1];
    const name = key?.replace(regexName, (match, p1, p2) => {
      return p1.startsWith("base-") ? p1.replace("-", "/") : p2 ? `${p1}/${p2}` : p1;
    }).replace("--", "").trim();
    return { category, name, value };
  });
};

const primitives = parseCSSVariables(
  primitivesCSSVariables,
  /--([a-z]+)(?:-([a-z]+))?/,
  /--([a-z]+(?:-[a-z]+)?)(\d+)?/
);

const primitivesByCategory = primitives.reduce((acc: Record<string,any[]>, item) => {
  const { category = '', name, value } = item;

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push({ name, value });

  return acc;
}, {});

const parseSemanticVariables = (cssVariables: string) => {
  return cssVariables.split(";").map((item) => {
    const [key, value] = item.split(":");
    const match = key?.match(/--([a-z]+)-([a-z]+)(?:-([a-z]+))?/);
    const category = match?.[1] === 'fg' ? 'foreground' : match?.[1] === 'bg' ? 'background' : match?.[1];
    const subCategory = category === 'background' && (match?.[2] !== 'tint' && match?.[2] !== 'neutral') ? 'bg' : match?.[2];
    const name = key?.replace(/\s+/g, "").trim().replace(
      category === 'background' && subCategory === 'tint' ? /--(?:[a-z]+-)*(.*-[a-z]+)/ : /--(?:[a-z]+-)*(.*)/,
      "$1"
    );
    const primitive = value?.replace(/--([a-z]+(?:-[a-z]+)?)(\d+)?/, (match, p1, p2) => {
      return p1.startsWith("base-") ? p1.replace("-", "/") : p2 ? `${p1}/${p2}` : p1;
    }).replace("--", "").replace(/var\((.*?)\)/, "$1").trim();
    return { category, subCategory, name, value, primitive };
  });
};

const semantics = parseSemanticVariables(semanticCSSVariables);

const semanticsByCategory = semantics.reduce((acc: Record<string, Record<string,{name:string, value:string, primitive:string}[]>>, item) => {
  const { category = '', subCategory = '', name = '', value = '', primitive = '' } = item;

  if (!acc[category]) {
    acc[category] = {};
  }

  if (!acc[category][subCategory]) {
    acc[category][subCategory] = [];
  }

  acc[category][subCategory].push({ name, value, primitive });

  return acc;
}, {});

const semanticsDark = parseSemanticVariables(semanticDarkCSSVariables);

const semanticsDarkByCategory = semanticsDark.reduce((acc: Record<string, Record<string,{name:string, value:string, primitive:string}[]>>, item) => {
  const { category = '', subCategory = '', name = '', value = '', primitive = '' } = item;

  if (!acc[category]) {
    acc[category] = {};
  }

  if (!acc[category][subCategory]) {
    acc[category][subCategory] = [];
  }

  acc[category][subCategory].push({ name, value, primitive });

  return acc;
}, {});

const combinedSemanticsDarkByCategory = Object.entries(semanticsByCategory).reduce(
  (acc, [category, subCategories]) => {
    // Ensure the category exists in the combined object
    if (!acc[category]) {
      acc[category] = {};
    }

    Object.entries(subCategories).forEach(([subCategory, items]) => {
      if(acc[category]) {
        // Ensure the subCategory exists in the combined object
        if (!acc[category][subCategory]) {
          acc[category][subCategory] = [];
        }
  
        // Merge items from semanticsByCategory
        const mergedItems = items.map((item) => {
          const darkItem = semanticsDarkByCategory?.[category]?.[subCategory]?.find(
            (dark) => dark.name === item.name
          );
          return darkItem ? { ...item, ...darkItem } : item;
        });
  
        // Add merged items to the combined object
        acc[category][subCategory] = mergedItems;
      }
    });

    return acc;
  },
  { ...semanticsDarkByCategory } // Start with semanticsDarkByCategory as the base
);

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text);
    toast.success(`${text} copied`);
};

export const PrimitiveColors = () => {

  return (<div>
    {Object.values(primitivesByCategory).map((colors, index) => 
      <Fragment key={index}>
        <p className="!text-title-h4 capitalize">{Object.keys(primitivesByCategory)[index]}</p>
        <div className="grid grid-cols-11">
        {colors.map(({  name, value = ''}, index) => name && (
          <div key={index}>
            <div
                style={{
                  background:
                    "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
                }}
              >
              <div
                style={{
                  background: value,
                }}
                className="w-full h-20"
              ></div>
            </div>
            <button
              onClick={() => handleCopy(value)}
              className="text-base font-bold text-left"
            >
            {name}
            </button>
          </div>))}
        </div>
      </Fragment>)}
  </div>)
}

export const SemanticColorsLight = () => {

  return (
    <div className="bg-secondary p-6 rounded-lg">
      {Object.values(semanticsByCategory).map((subCategory, index) => 
        <Fragment key={index}>
          <p className="!text-title-h2 capitalize !text-neutral-primary">{Object.keys(semanticsByCategory)[index]}</p>
          <div>
          {Object.values(subCategory).map((colors, index) => <Fragment key={index}>
            <p className="!text-title-h4 capitalize !text-neutral-primary">{Object.keys(subCategory)[index]}</p>
            <div className="grid grid-cols-4 gap-4">
              {colors.map(({ name, value = '', primitive = ''}, index) => name && (
                <div key={index} className="bg-primary border border-neutral-tertiary rounded-lg p-3 flex items-center space-x-4">
                  <div
                  className="flex-shrink-0 rounded-lg overflow-hidden border border-neutral-tertiary"
                    style={{
                      background:
                        "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
                    }}
                  >
                    <div
                      style={{
                        background: value,
                      }}
                      className="w-14 h-14"
                    ></div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <strong className="text-sm font-bold text-neutral-primary">{name}</strong>
                    <button
                      onClick={() => handleCopy(value)}
                      className="text-neutral-tertiary text-xs text-left"
                    >
                      <Icon name="RiLink" className="mr-1 w-4 h-4 text-neutral-tertiary" />
                      {primitive}
                    </button>
                  </div>
                </div>))}
              </div>
          </Fragment>)}
          </div>
        </Fragment>)}
    </div>)
}

export const SemanticColorsDark = () => {
  return (
    <div className="bg-secondary p-6 rounded-lg dark">
      {Object.values(combinedSemanticsDarkByCategory).map((subCategory, index) => 
        <Fragment key={index}>
          <p className="!text-title-h2 capitalize !text-neutral-primary">{Object.keys(combinedSemanticsDarkByCategory)[index]}</p>
          <div>
          {Object.values(subCategory).map((colors, index) => <Fragment key={index}>
            <p className="!text-title-h4 capitalize !text-neutral-primary">{Object.keys(subCategory)[index]}</p>
            <div className="grid grid-cols-4 gap-4">
              {colors.map(({ name, value = '', primitive = ''}, index) => name && (
                <div key={index} className="bg-primary border border-neutral-tertiary rounded-lg p-3 flex items-center space-x-4">
                  <div
                  className="flex-shrink-0 rounded-lg overflow-hidden border border-neutral-tertiary"
                    style={{
                      background:
                        "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
                    }}
                  >
                    <div
                      style={{
                        background: value,
                      }}
                      className="w-14 h-14"
                    ></div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <strong className="text-sm font-bold text-neutral-primary">{name}</strong>
                    <button
                      onClick={() => handleCopy(value)}
                      className="text-neutral-tertiary text-xs text-left"
                    >
                      <Icon name="RiLink" className="mr-1 w-4 h-4 text-neutral-tertiary" />
                      {primitive}
                    </button>
                  </div>
                </div>))}
              </div>
          </Fragment>)}
          </div>
        </Fragment>)}
    </div>)
}
