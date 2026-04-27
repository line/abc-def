import { useState } from "react";
import { Separator } from "@abc-def/react";

import * as accordions from "./components/accordion";
import * as alerts from "./components/alert";
import * as buttons from "./components/button";
import * as buttonGroups from "./components/button-group";
import * as checkboxs from "./components/checkbox";
import * as fields from "./components/field";
import * as inputs from "./components/input";
import * as radioGroups from "./components/radio-group";
import * as selects from "./components/select";
import * as separators from "./components/separator";
import * as sliders from "./components/slider";
import * as switchs from "./components/switch";
import * as textareas from "./components/textarea";

const components = {
  accordions,
  alerts,
  buttons,
  buttonGroups,
  fields,
  inputs,
  separators,
  sliders,
  checkboxs,
  textareas,
  switchs,
  selects,
  radioGroups,
};

export default function App() {
  const [currentComponent, setCurrentComponent] = useState(components.sliders);

  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto mb-10 flex w-full max-w-3xl flex-wrap items-center justify-center gap-4">
        {Object.keys(components).map((key) => (
          <button
            key={key}
            className="bg-muted hover:bg-muted/80 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground rounded-md px-3 py-1 text-sm font-medium"
            onClick={() => setCurrentComponent((components as any)[key])}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col items-start gap-6">
          {Object.keys(currentComponent).map((key) => {
            const Component = (currentComponent as any)[key];
            return (
              <div key={key} className="w-full rounded-md border p-4">
                <h1>{key}</h1>
                <Separator className="my-4" />
                <Component key={key} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
