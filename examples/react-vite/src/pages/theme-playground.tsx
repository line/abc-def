import { useState } from "react";

import { ThemeControlDrawer } from "./theme-playground/theme-control-drawer";
import { ThemePreviewCanvas } from "./theme-playground/theme-preview-canvas";
import {
  defaultThemePresetId,
  getThemePresetBundle,
  parsePreviewStyleVariables,
  serializePreviewStyleVariables,
} from "./theme-playground/theme-presets";

function createPresetSeed(presetId: string) {
  return serializePreviewStyleVariables(getThemePresetBundle(presetId).variables);
}

export function ThemePlaygroundPage() {
  const [selectedPresetId, setSelectedPresetId] =
    useState(defaultThemePresetId);
  const [textareaValue, setTextareaValue] = useState(() =>
    createPresetSeed(defaultThemePresetId),
  );

  const activePreset = getThemePresetBundle(selectedPresetId);
  const parseResult = parsePreviewStyleVariables(textareaValue);

  function handlePresetSelect(presetId: string) {
    setSelectedPresetId(presetId);
    setTextareaValue(createPresetSeed(presetId));
  }

  function handleResetToPreset() {
    setTextareaValue(createPresetSeed(selectedPresetId));
  }

  return (
    <section className="app-panel grid gap-6 rounded-[32px] p-6 lg:p-8">
      <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-start">
        <div className="flex flex-col gap-3">
          <p className="app-kicker">Theme Playground</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Pick one preset bundle, edit the CSS variable block, and inspect the
            scoped preview.
          </h2>
          <p className="app-copy max-w-3xl text-sm leading-6">
            Presets only seed the textarea. After that, the preview reads the
            textarea content directly, while the component examples stay on the
            baseline package theme.
          </p>
        </div>

        <div className="flex flex-col gap-4 xl:items-end">
          <div className="flex flex-wrap justify-end gap-2">
            <span className="playground-badge">{activePreset.label}</span>
            <span className="playground-badge playground-badge-muted">
              {Object.keys(parseResult.variables).length} active token
              {Object.keys(parseResult.variables).length === 1 ? "" : "s"}
            </span>
            {parseResult.ignoredEntries.length > 0 ? (
              <span className="playground-badge playground-badge-muted">
                {parseResult.ignoredEntries.length} ignored
              </span>
            ) : null}
          </div>
          <ThemeControlDrawer
            ignoredEntries={parseResult.ignoredEntries}
            onPresetSelect={handlePresetSelect}
            onResetToPreset={handleResetToPreset}
            onTextareaChange={setTextareaValue}
            selectedPresetId={selectedPresetId}
            textareaValue={textareaValue}
          />
        </div>
      </div>

      <ThemePreviewCanvas
        presetLabel={activePreset.label}
        variables={parseResult.variables}
      />
    </section>
  );
}
