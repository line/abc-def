/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
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
