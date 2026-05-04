import type { CSSProperties } from "react";

export type PreviewStyleVariables = Record<string, string>;

export type ThemePresetBundle = {
  description: string;
  id: string;
  label: string;
  variables: PreviewStyleVariables;
};

type PreviewStyleParseResult = {
  ignoredEntries: string[];
  variables: PreviewStyleVariables;
};

const buttonPresetVariables = {
  baseline: {},
  editorial: {
    "--button-bg-primary": "oklch(0.21 0.03 260)",
    "--button-fg-primary": "oklch(0.98 0.01 95)",
    "--button-border-primary": "oklch(0.21 0.03 260)",
    "--button-bg-primary-hover": "oklch(0.3 0.04 260)",
    "--button-border-primary-hover": "oklch(0.3 0.04 260)",
    "--button-bg-secondary": "oklch(0.95 0.01 250)",
    "--button-fg-secondary": "oklch(0.28 0.02 250)",
    "--button-bg-outline": "oklch(0.99 0.01 95)",
    "--button-fg-outline": "oklch(0.25 0.03 260)",
    "--button-border-outline": "oklch(0.76 0.06 270)",
    "--button-bg-outline-hover": "oklch(0.95 0.02 270)",
    "--button-fg-outline-hover": "oklch(0.23 0.03 260)",
    "--button-bg-ghost-hover": "oklch(0.94 0.02 270)",
    "--button-fg-ghost": "oklch(0.29 0.03 260)",
    "--button-fg-ghost-hover": "oklch(0.24 0.03 260)",
    "--button-radius-md": "999px",
    "--button-radius-lg": "999px",
  },
  sunrise: {
    "--button-bg-primary": "oklch(0.68 0.16 42)",
    "--button-fg-primary": "oklch(0.99 0.01 95)",
    "--button-border-primary": "oklch(0.68 0.16 42)",
    "--button-bg-primary-hover": "oklch(0.62 0.15 38)",
    "--button-border-primary-hover": "oklch(0.62 0.15 38)",
    "--button-bg-secondary": "oklch(0.97 0.02 72)",
    "--button-fg-secondary": "oklch(0.34 0.05 46)",
    "--button-bg-outline": "oklch(0.99 0.01 95)",
    "--button-fg-outline": "oklch(0.46 0.08 34)",
    "--button-border-outline": "oklch(0.82 0.08 58)",
    "--button-bg-outline-hover": "oklch(0.97 0.03 74)",
    "--button-fg-outline-hover": "oklch(0.39 0.07 36)",
    "--button-bg-ghost-hover": "oklch(0.96 0.03 74)",
    "--button-fg-ghost": "oklch(0.44 0.07 34)",
    "--button-fg-ghost-hover": "oklch(0.38 0.06 32)",
    "--button-radius-md": "16px",
    "--button-radius-lg": "20px",
  },
} satisfies Record<string, PreviewStyleVariables>;

const formPresetVariables = {
  baseline: {},
  soft: {
    "--input-bg": "oklch(0.985 0.01 85)",
    "--input-border": "oklch(0.78 0.05 85)",
    "--input-fg": "oklch(0.53 0.03 85)",
    "--textarea-bg": "oklch(0.985 0.01 85)",
    "--textarea-border": "oklch(0.78 0.05 85)",
    "--textarea-placeholder-fg": "oklch(0.53 0.03 85)",
    "--select-trigger-bg": "oklch(0.985 0.01 85)",
    "--select-trigger-bg-hover": "oklch(0.97 0.01 85)",
    "--select-trigger-border": "oklch(0.78 0.05 85)",
    "--select-trigger-placeholder-fg": "oklch(0.53 0.03 85)",
    "--select-content-bg": "oklch(0.99 0.01 85)",
    "--select-content-border": "oklch(0.78 0.05 85)",
    "--select-item-focus-bg": "oklch(0.91 0.03 155)",
    "--select-item-focus-fg": "oklch(0.29 0.04 155)",
    "--checkbox-bg": "oklch(1 0 0)",
    "--checkbox-border": "oklch(0.74 0.05 85)",
    "--checkbox-bg-checked": "oklch(0.63 0.14 155)",
    "--checkbox-border-checked": "oklch(0.63 0.14 155)",
    "--checkbox-fg-checked": "oklch(0.98 0.01 140)",
    "--radio-group-item-bg": "oklch(1 0 0)",
    "--radio-group-item-border": "oklch(0.74 0.05 85)",
    "--radio-group-item-bg-checked": "oklch(0.63 0.14 155)",
    "--radio-group-item-border-checked": "oklch(0.63 0.14 155)",
    "--radio-group-item-fg-checked": "oklch(0.98 0.01 140)",
    "--radio-group-indicator-dot-bg": "oklch(0.98 0.01 140)",
    "--switch-bg-unchecked": "oklch(0.86 0.03 85)",
    "--switch-bg-checked": "oklch(0.63 0.14 155)",
    "--switch-thumb-bg-checked": "oklch(0.98 0.01 140)",
    "--switch-thumb-bg-unchecked": "white",
  },
  lab: {
    "--input-bg": "oklch(0.98 0.01 250)",
    "--input-border": "oklch(0.74 0.04 250)",
    "--input-fg": "oklch(0.34 0.03 252)",
    "--textarea-bg": "oklch(0.98 0.01 250)",
    "--textarea-border": "oklch(0.74 0.04 250)",
    "--textarea-placeholder-fg": "oklch(0.5 0.03 250)",
    "--select-trigger-bg": "oklch(0.985 0.01 248)",
    "--select-trigger-bg-hover": "oklch(0.95 0.02 248)",
    "--select-trigger-border": "oklch(0.69 0.07 258)",
    "--select-trigger-placeholder-fg": "oklch(0.46 0.04 252)",
    "--select-content-bg": "oklch(0.97 0.02 248)",
    "--select-content-border": "oklch(0.71 0.05 255)",
    "--select-item-focus-bg": "oklch(0.84 0.08 255)",
    "--select-item-focus-fg": "oklch(0.22 0.03 252)",
    "--checkbox-bg": "oklch(1 0 0)",
    "--checkbox-border": "oklch(0.71 0.05 252)",
    "--checkbox-bg-checked": "oklch(0.59 0.16 255)",
    "--checkbox-border-checked": "oklch(0.59 0.16 255)",
    "--checkbox-fg-checked": "oklch(0.98 0.01 250)",
    "--radio-group-item-bg": "oklch(1 0 0)",
    "--radio-group-item-border": "oklch(0.71 0.05 252)",
    "--radio-group-item-bg-checked": "oklch(0.59 0.16 255)",
    "--radio-group-item-border-checked": "oklch(0.59 0.16 255)",
    "--radio-group-item-fg-checked": "oklch(0.98 0.01 250)",
    "--radio-group-indicator-dot-bg": "oklch(0.98 0.01 250)",
    "--switch-bg-unchecked": "oklch(0.84 0.02 248)",
    "--switch-bg-checked": "oklch(0.59 0.16 255)",
    "--switch-thumb-bg-checked": "oklch(0.98 0.01 250)",
    "--switch-thumb-bg-unchecked": "white",
  },
} satisfies Record<string, PreviewStyleVariables>;

const alertPresetVariables = {
  baseline: {},
  calm: {
    "--alert-bg-default": "oklch(0.97 0.02 230)",
    "--alert-fg-default": "oklch(0.33 0.04 245)",
    "--alert-title-fg-link": "oklch(0.46 0.12 245)",
    "--alert-description-fg": "oklch(0.46 0.03 245)",
    "--alert-description-fg-link": "oklch(0.46 0.12 245)",
    "--alert-bg-destructive": "oklch(0.97 0.03 25)",
    "--alert-fg-destructive": "oklch(0.58 0.19 25)",
  },
  signal: {
    "--alert-bg-default": "oklch(0.24 0.04 250)",
    "--alert-fg-default": "oklch(0.94 0.01 250)",
    "--alert-title-fg-link": "oklch(0.78 0.12 215)",
    "--alert-description-fg": "oklch(0.84 0.02 250)",
    "--alert-description-fg-link": "oklch(0.78 0.12 215)",
    "--alert-bg-destructive": "oklch(0.3 0.1 22)",
    "--alert-fg-destructive": "oklch(0.9 0.04 28)",
  },
} satisfies Record<string, PreviewStyleVariables>;

const cardPresetVariables = {
  baseline: {},
  warm: {
    "--card-bg": "oklch(0.97 0.02 85)",
    "--card-fg": "oklch(0.24 0.03 55)",
    "--card-border": "oklch(0.81 0.07 82)",
    "--card-description-fg": "oklch(0.46 0.04 65)",
    "--card-footer-bg": "oklch(0.92 0.03 83)",
    "--card-footer-border": "oklch(0.8 0.05 82)",
  },
  frost: {
    "--card-bg": "oklch(0.97 0.01 250)",
    "--card-fg": "oklch(0.24 0.03 252)",
    "--card-border": "oklch(0.76 0.05 252)",
    "--card-description-fg": "oklch(0.43 0.03 252)",
    "--card-footer-bg": "oklch(0.92 0.02 248)",
    "--card-footer-border": "oklch(0.73 0.05 250)",
  },
} satisfies Record<string, PreviewStyleVariables>;

const interactionPresetVariables = {
  baseline: {},
  pulse: {
    "--select-trigger-bg": "oklch(0.98 0.01 95)",
    "--select-trigger-bg-hover": "oklch(0.95 0.02 95)",
    "--select-trigger-border": "oklch(0.76 0.06 260)",
    "--select-trigger-placeholder-fg": "oklch(0.38 0.03 250)",
    "--select-content-bg": "oklch(0.97 0.02 250)",
    "--select-content-border": "oklch(0.78 0.04 255)",
    "--select-item-focus-bg": "oklch(0.83 0.08 254)",
    "--select-item-focus-fg": "oklch(0.2 0.03 255)",
    "--slider-track-bg": "oklch(0.88 0.02 250)",
    "--slider-range-bg": "oklch(0.63 0.12 250)",
    "--slider-thumb-bg": "oklch(0.99 0.01 95)",
    "--slider-thumb-border": "oklch(0.63 0.12 250)",
    "--slider-thumb-ring": "oklch(0.63 0.12 250)",
    "--accordion-trigger-icon-fg": "oklch(0.52 0.11 252)",
    "--separator-bg": "oklch(0.78 0.04 255)",
  },
  lagoon: {
    "--select-trigger-bg": "oklch(0.98 0.01 180)",
    "--select-trigger-bg-hover": "oklch(0.94 0.03 182)",
    "--select-trigger-border": "oklch(0.72 0.07 188)",
    "--select-trigger-placeholder-fg": "oklch(0.36 0.04 188)",
    "--select-content-bg": "oklch(0.98 0.01 184)",
    "--select-content-border": "oklch(0.74 0.05 188)",
    "--select-item-focus-bg": "oklch(0.83 0.08 185)",
    "--select-item-focus-fg": "oklch(0.2 0.03 188)",
    "--slider-track-bg": "oklch(0.89 0.03 184)",
    "--slider-range-bg": "oklch(0.61 0.13 188)",
    "--slider-thumb-bg": "oklch(0.99 0.01 95)",
    "--slider-thumb-border": "oklch(0.61 0.13 188)",
    "--slider-thumb-ring": "oklch(0.61 0.13 188)",
    "--accordion-trigger-icon-fg": "oklch(0.47 0.11 188)",
    "--separator-bg": "oklch(0.73 0.05 188)",
  },
} satisfies Record<string, PreviewStyleVariables>;

function mergeVariableMaps(...maps: PreviewStyleVariables[]) {
  return Object.assign({}, ...maps);
}

export const themePresetBundles: ThemePresetBundle[] = [
  {
    id: "baseline",
    label: "Baseline",
    description: "Package defaults only. The textarea starts empty and preview inherits the baseline theme.",
    variables: mergeVariableMaps(
      buttonPresetVariables.baseline,
      formPresetVariables.baseline,
      alertPresetVariables.baseline,
      cardPresetVariables.baseline,
      interactionPresetVariables.baseline,
    ),
  },
  {
    id: "editorial",
    label: "Editorial",
    description: "Dense editorial chrome with cool form controls and stronger contrast across surfaces.",
    variables: mergeVariableMaps(
      buttonPresetVariables.editorial,
      formPresetVariables.lab,
      alertPresetVariables.signal,
      cardPresetVariables.warm,
      interactionPresetVariables.pulse,
    ),
  },
  {
    id: "sunrise",
    label: "Sunrise",
    description: "Warmer CTA styling with softer forms, calmer alerts, and warmer cards.",
    variables: mergeVariableMaps(
      buttonPresetVariables.sunrise,
      formPresetVariables.soft,
      alertPresetVariables.calm,
      cardPresetVariables.warm,
      interactionPresetVariables.baseline,
    ),
  },
  {
    id: "frost",
    label: "Frost",
    description: "Cooler surfaces and sharper framing for dashboard-like previews.",
    variables: mergeVariableMaps(
      buttonPresetVariables.editorial,
      formPresetVariables.lab,
      alertPresetVariables.signal,
      cardPresetVariables.frost,
      interactionPresetVariables.pulse,
    ),
  },
  {
    id: "lagoon",
    label: "Lagoon",
    description: "Teal interaction accents with soft forms and calmer messaging.",
    variables: mergeVariableMaps(
      buttonPresetVariables.sunrise,
      formPresetVariables.soft,
      alertPresetVariables.calm,
      cardPresetVariables.frost,
      interactionPresetVariables.lagoon,
    ),
  },
];

export const defaultThemePresetId = "editorial";

export function getThemePresetBundle(presetId: string) {
  const preset =
    themePresetBundles.find((item) => item.id === presetId) ??
    themePresetBundles[0];

  if (!preset) {
    throw new Error("No theme preset bundles configured.");
  }

  return preset;
}

export function serializePreviewStyleVariables(variables: PreviewStyleVariables) {
  return Object.entries(variables)
    .map(([token, value]) => `${token}: ${value};`)
    .join("\n");
}

export function parsePreviewStyleVariables(
  source: string,
): PreviewStyleParseResult {
  const variables: PreviewStyleVariables = {};
  const ignoredEntries: string[] = [];

  for (const rawSegment of source.split(";")) {
    const segment = rawSegment.trim();

    if (!segment) {
      continue;
    }

    const match = /^(--[\w-]+)\s*:\s*(.+)$/s.exec(segment);
    if (!match || segment.includes("{") || segment.includes("}")) {
      ignoredEntries.push(segment);
      continue;
    }

    const token = match[1];
    const value = match[2];

    if (!token || !value) {
      ignoredEntries.push(segment);
      continue;
    }

    variables[token] = value.trim();
  }

  return {
    ignoredEntries,
    variables,
  };
}

export function buildPreviewStyle(
  variables: PreviewStyleVariables,
): CSSProperties {
  return variables as CSSProperties;
}
