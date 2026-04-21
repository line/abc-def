import type { Config } from "tailwindcss";

import { tokens } from "../tokens";

export const abcDefPreset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--abc-background))",
        foreground: "hsl(var(--abc-foreground))",
        primary: "hsl(var(--abc-primary))",
        "primary-foreground": "hsl(var(--abc-primary-foreground))",
        muted: "hsl(var(--abc-muted))",
        "muted-foreground": "hsl(var(--abc-muted-foreground))",
        border: "hsl(var(--abc-border))",
      },
      borderRadius: {
        sm: "var(--abc-radius-sm)",
        md: "var(--abc-radius-md)",
        lg: "var(--abc-radius-lg)",
      },
      spacing: tokens.spacing,
    },
  },
};

export default abcDefPreset;
