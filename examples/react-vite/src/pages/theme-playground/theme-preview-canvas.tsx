import { buildPreviewStyle, type PreviewStyleVariables } from "./theme-presets";
import { PreviewSections } from "./preview-sections";

export function ThemePreviewCanvas({
  presetLabel,
  variables,
}: {
  presetLabel: string;
  variables: PreviewStyleVariables;
}) {
  const tokenCount = Object.keys(variables).length;

  return (
    <div className="playground-preview-shell" style={buildPreviewStyle(variables)}>
      <div className="playground-preview-banner">
        <div className="flex flex-wrap items-center gap-2">
          <span className="playground-badge">Scoped preview</span>
          <span className="playground-badge playground-badge-muted">
            {presetLabel}
          </span>
          <span className="playground-badge playground-badge-muted">
            {tokenCount} token{tokenCount === 1 ? "" : "s"}
          </span>
        </div>
        <p className="app-copy mt-3 text-sm leading-6">
          Only this wrapper reads the textarea values. The component catalog
          stays on the package baseline outside the canvas.
        </p>
      </div>

      <PreviewSections />
    </div>
  );
}
