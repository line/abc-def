import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Textarea,
} from "@abc-def/react";

import {
  getThemePresetBundle,
  themePresetBundles,
} from "./theme-presets";

type ThemeControlDrawerProps = {
  ignoredEntries: string[];
  onPresetSelect: (presetId: string) => void;
  onResetToPreset: () => void;
  onTextareaChange: (value: string) => void;
  selectedPresetId: string;
  textareaValue: string;
};

function ThemeControlContent({
  ignoredEntries,
  onPresetSelect,
  onResetToPreset,
  onTextareaChange,
  selectedPresetId,
  textareaValue,
}: ThemeControlDrawerProps) {
  const activePreset = getThemePresetBundle(selectedPresetId);

  return (
    <>
      <DrawerHeader>
        <DrawerTitle>Theme control panel</DrawerTitle>
        <DrawerDescription>
          Choose a full preset bundle, then edit preview CSS variables directly.
          Only the playground canvas updates.
        </DrawerDescription>
      </DrawerHeader>

      <div className="playground-drawer-body">
        <section className="playground-control-group">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold">Preset bundles</h3>
              <span className="playground-badge playground-badge-muted">
                {activePreset.label}
              </span>
            </div>
            <p className="app-copy text-sm leading-6">{activePreset.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {themePresetBundles.map((preset) => (
              <Button
                key={preset.id}
                type="button"
                size="sm"
                variant={preset.id === selectedPresetId ? "default" : "outline"}
                onClick={() => onPresetSelect(preset.id)}
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </section>

        <section className="playground-control-group">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold">Preset Seed</h3>
                <p className="app-copy text-sm leading-6">
                  Editing here is the only source of truth for the preview.
                </p>
              </div>
              <Button type="button" size="sm" variant="outline" onClick={onResetToPreset}>
                Reset to preset
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Format: <code>--token-name: value;</code>
            </p>
            <Textarea
              rows={18}
              value={textareaValue}
              onChange={(event) => onTextareaChange(event.target.value)}
              placeholder="--button-bg-primary: oklch(...);"
            />
            <p className="text-muted-foreground text-sm leading-6">
              Invalid lines are ignored. Multiple declarations can be separated
              by new lines or semicolons.
            </p>
            {ignoredEntries.length > 0 ? (
              <p className="text-sm leading-6 text-amber-700 dark:text-amber-300">
                Ignored {ignoredEntries.length} invalid{" "}
                {ignoredEntries.length === 1 ? "entry" : "entries"}:{" "}
                {ignoredEntries.slice(0, 3).join(" | ")}
                {ignoredEntries.length > 3 ? " | ..." : ""}
              </p>
            ) : null}
          </div>
        </section>
      </div>

      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close panel</Button>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
}

export function ThemeControlDrawer(props: ThemeControlDrawerProps) {
  return (
    <>
      <div className="block lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open controls</Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[88vh]">
            <ThemeControlContent {...props} />
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden lg:block">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="outline">Open controls</Button>
          </DrawerTrigger>
          <DrawerContent className="w-full max-w-xl">
            <ThemeControlContent {...props} />
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
