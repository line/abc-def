import { useEffect, useState } from "react";

import {
  applyTheme,
  getPreferredTheme,
  persistTheme,
  type ThemeMode,
} from "./components/theme-toggle";
import {
  ComponentExamplesPage,
  defaultComponentKey,
  type ComponentKey,
} from "./pages/component-examples";
import {
  ExampleShell,
  type AppMode,
} from "./pages/components/example-shell";
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
  );
}
