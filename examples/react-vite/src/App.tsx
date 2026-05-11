import { useEffect, useState } from "react";
import { TooltipProvider } from "@abc-def/react";

import type { ThemeMode } from "./components/theme-toggle";
import type { ComponentKey } from "./pages/component-examples";
import type { AppMode } from "./pages/components/example-shell";
import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
} from "./components/theme-toggle";
import {
  ComponentExamplesPage,
  defaultComponentKey,
} from "./pages/component-examples";
import { ExampleShell } from "./pages/components/example-shell";
import { ThemePlaygroundPage } from "./pages/theme-playground";

export default function App() {
  const [mode, setMode] = useState<AppMode>("examples");
  const [themeMode, setThemeMode] = useState<ThemeMode>(getPreferredTheme);
  const [currentComponentKey, setCurrentComponentKey] =
    useState<ComponentKey>(defaultComponentKey);

  useEffect(() => {
    applyTheme(themeMode);
    persistTheme(themeMode);
  }, [themeMode]);

  return (
    <TooltipProvider>
      <ExampleShell
        mode={mode}
        onModeChange={setMode}
        onThemeModeChange={setThemeMode}
        themeMode={themeMode}
      >
        {mode === "examples" ? (
          <ComponentExamplesPage
            currentComponentKey={currentComponentKey}
            onComponentChange={setCurrentComponentKey}
          />
        ) : (
          <ThemePlaygroundPage />
        )}
      </ExampleShell>
    </TooltipProvider>
  );
}
