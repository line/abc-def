import { useMemo, useState } from "react";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@abc-def/react";

const frameworks = [
  "Next.js",
  "Remix",
  "Astro",
  "SvelteKit",
  "Nuxt",
  "TanStack Start",
];

export function ComboboxBasic() {
  return (
    <Combobox defaultValue="Next.js">
      <ComboboxInput
        className="w-full max-w-xs"
        placeholder="Pick a framework"
      />
      <ComboboxContent className="w-(--anchor-width)">
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {frameworks.map((framework) => (
            <ComboboxItem key={framework} value={framework}>
              {framework}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export function ComboboxGrouped() {
  const items = useMemo(
    () => ({
      Libraries: ["React", "Vue", "Solid"],
      Tools: ["Vite", "Vitest", "Turbo"],
    }),
    [],
  );

  return (
    <Combobox defaultValue="React">
      <ComboboxInput
        className="w-full max-w-xs"
        placeholder="Search ecosystem"
      />
      <ComboboxContent className="w-(--anchor-width)">
        <ComboboxEmpty>No result.</ComboboxEmpty>
        <ComboboxList>
          {Object.entries(items).map(([label, values]) => (
            <ComboboxGroup key={label}>
              <ComboboxLabel>{label}</ComboboxLabel>
              {values.map((value) => (
                <ComboboxItem key={value} value={value}>
                  {value}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export function ComboboxControlled() {
  const [value, setValue] = useState<string | null>("Vite");

  return (
    <div className="grid gap-3">
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput
          className="w-full max-w-xs"
          placeholder="Choose build tool"
        />
        <ComboboxContent className="w-(--anchor-width)">
          <ComboboxEmpty>No tool found.</ComboboxEmpty>
          <ComboboxList>
            {["Vite", "Rspack", "Parcel", "Webpack"].map((tool) => (
              <ComboboxItem key={tool} value={tool}>
                {tool}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <p className="text-muted-foreground text-sm">
        Selected tool: <span className="text-foreground font-medium">{value}</span>
      </p>
    </div>
  );
}
