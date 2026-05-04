import type { ReactNode } from "react";

import { Separator } from "@abc-def/react";

import {
  ThemeToggle,
  type ThemeMode,
} from "../../components/theme-toggle";

export type AppMode = "examples" | "theme-playground";

const appModes = [
  {
    id: "examples",
    label: "Component Examples",
    description: "Browse baseline component families without preview overrides.",
  },
  {
    id: "theme-playground",
    label: "Theme Playground",
    description: "Adjust scoped presets in the drawer and inspect the live preview.",
  },
] as const satisfies {
  description: string;
  id: AppMode;
  label: string;
}[];

function ModeSwitch({
  mode,
  onModeChange,
}: {
  mode: AppMode;
  onModeChange: (mode: AppMode) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="app-kicker">Mode</p>
      <div className="flex flex-wrap gap-2">
        {appModes.map((item) => (
          <button
            key={item.id}
            type="button"
            className="mode-chip"
            data-active={item.id === mode}
            onClick={() => onModeChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="app-copy text-sm leading-6">
        {appModes.find((item) => item.id === mode)?.description}
      </p>
    </div>
  );
}

export function ExampleShell({
  children,
  mode,
  onModeChange,
  onThemeModeChange,
  themeMode,
}: {
  children: ReactNode;
  mode: AppMode;
  onModeChange: (mode: AppMode) => void;
  onThemeModeChange: (theme: ThemeMode) => void;
  themeMode: ThemeMode;
}) {
  return (
    <main className="example-app text-foreground min-h-screen px-5 py-8 lg:px-8 lg:py-10">
      <div className="app-shell mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="app-panel grid gap-6 rounded-[36px] p-6 lg:grid-cols-[1.3fr_0.7fr] lg:p-8">
          <div className="flex flex-col gap-4">
            <p className="app-kicker">React Vite Example App</p>
            <div className="flex flex-col gap-3">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
                Split the example app into a baseline catalog and a scoped theme
                playground.
              </h1>
              <p className="app-copy max-w-3xl text-base leading-7">
                Use the top mode switch to choose between component examples and
                the preset-driven theme preview. The light and dark toggle stays
                global, while playground presets only affect the preview canvas.
              </p>
            </div>
          </div>

          <div className="app-panel-muted flex flex-col gap-5 rounded-[28px] p-5">
            <ModeSwitch mode={mode} onModeChange={onModeChange} />
            <Separator />
            <ThemeToggle
              className="app-theme-toggle"
              theme={themeMode}
              onThemeChange={onThemeModeChange}
            />
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}
