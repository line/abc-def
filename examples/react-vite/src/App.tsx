import type { ComponentType } from "react";
import { useState } from "react";
import { Separator } from "@abc-def/react";

import * as accordions from "./components/accordion";
import * as alerts from "./components/alert";
import * as buttons from "./components/button";
import * as buttonGroups from "./components/button-group";
import * as cards from "./components/card";
import * as checkboxs from "./components/checkbox";
import * as fields from "./components/field";
import * as inputs from "./components/input";
import * as radioGroups from "./components/radio-group";
import * as selects from "./components/select";
import * as separators from "./components/separator";
import * as sliders from "./components/slider";
import * as switchs from "./components/switch";
import * as textareas from "./components/textarea";
import { ThemeToggle } from "./components/theme-toggle";

const components = {
  accordions,
  alerts,
  buttons,
  buttonGroups,
  cards,
  checkboxs,
  fields,
  inputs,
  radioGroups,
  selects,
  separators,
  sliders,
  switchs,
  textareas,
};

type ComponentKey = keyof typeof components;

const defaultComponentKey: ComponentKey = "sliders";

export default function App() {
  const [currentComponentKey, setCurrentComponentKey] =
    useState<ComponentKey>(defaultComponentKey);
  const currentComponent = components[currentComponentKey];
  const componentEntries = Object.entries(currentComponent) as Array<
    [string, ComponentType]
  >;

  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto mb-8 flex w-full max-w-3xl flex-col gap-4 rounded-2xl border p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-muted-foreground text-sm">React example home</p>
            <h1 className="text-2xl font-semibold tracking-tight">
              Component catalog
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3">
            <ThemeToggle />
            <a
              href="/theme-proof.html"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Open theme proof page
            </a>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-6">
          The dedicated theme validation page lives separately so the default
          example app can remain a neutral component catalog.
        </p>
      </div>

      <div className="mx-auto mb-10 flex w-full max-w-3xl flex-wrap items-center justify-center gap-4">
        {Object.keys(components).map((key) => (
          <button
            key={key}
            type="button"
            className="bg-muted hover:bg-muted/80 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground rounded-md px-3 py-1 text-sm font-medium transition-colors"
            data-active={key === currentComponentKey}
            onClick={() => setCurrentComponentKey(key as ComponentKey)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col items-start gap-6">
          {componentEntries.map(([key, Component]) => {
            return (
              <div key={key} className="w-full rounded-md border p-4">
                <h2 className="text-lg font-medium">{key}</h2>
                <Separator className="my-4" />
                <Component />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
