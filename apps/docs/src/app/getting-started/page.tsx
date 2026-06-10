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

import Link from "next/link";

import { CodeBlock } from "@/components/code-block";
import { PageHeader, PageSection } from "@/components/page-section";

const stylesheetSnippet = `@import "tailwindcss";
@import "tw-animate-css";
@import "@line/abc-def-styles/css";

@custom-variant dark (&:is(.dark *));

@source "../node_modules/@line/abc-def-react/dist/**/*.{js,cjs}";
@source "../**/*.{ts,tsx}";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-foreground: var(--surface-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-border-input: var(--border-input);
  --color-ring: var(--ring);

  --radius-xs: calc(var(--radius) * 0.4);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --radius: 0.625rem;

  --background: var(--color-white);
  --foreground: var(--color-zinc-950);

  --popover: var(--color-white);
  --popover-foreground: var(--color-zinc-950);

  --primary: var(--color-zinc-900);
  --primary-foreground: var(--color-zinc-50);

  --secondary: var(--color-zinc-100);
  --secondary-foreground: var(--color-zinc-900);

  --muted: var(--color-zinc-100);
  --muted-foreground: var(--color-zinc-500);

  --accent: var(--color-zinc-100);
  --accent-foreground: var(--color-zinc-900);

  --destructive: var(--color-red-50);
  --destructive-foreground: var(--color-red-500);

  --border: var(--color-zinc-200);
  --border-input: var(--color-zinc-200);
  --ring: var(--color-zinc-400);

  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);

  color-scheme: light;
}

.dark {
  --background: var(--color-zinc-950);
  --foreground: var(--color-zinc-50);

  --surface: var(--color-zinc-900);
  --surface-foreground: var(--color-zinc-50);

  --popover: var(--color-zinc-900);
  --popover-foreground: var(--color-zinc-50);

  --primary: var(--color-zinc-200);
  --primary-foreground: var(--color-zinc-900);

  --secondary: var(--color-zinc-800);
  --secondary-foreground: var(--color-zinc-50);

  --muted: var(--color-zinc-800);
  --muted-foreground: var(--color-zinc-400);

  --accent: var(--color-zinc-700);
  --accent-foreground: var(--color-zinc-50);

  --destructive: var(--color-red-900);
  --destructive-foreground: var(--color-red-400);

  --border: var(--color-zinc-800);
  --border-input: var(--color-zinc-700);
  --ring: var(--color-zinc-500);

  color-scheme: dark;
}


@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    margin: 0;
  }
}`;

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title="Getting Started"
        description="Start with the framework guide for your app, then add the shared stylesheet to Tailwind CSS v4."
      />
      <PageSection title="Install">
        <p>
          Install the package set for your framework from the{" "}
          <Link href="/react">React guide</Link> or{" "}
          <Link href="/vue">Vue guide</Link>. Each guide includes the framework
          package, peer dependencies, and Tailwind source rule for that runtime.
        </p>
      </PageSection>
      <PageSection title="Base CSS file">
        <p>
          Import ABC Def from CSS processed by Tailwind CSS v4. Use this file as
          the base stylesheet and adjust the `@source` paths for your app.
        </p>
        <CodeBlock code={stylesheetSnippet} language="css" />
      </PageSection>
      <PageSection title="Dark mode">
        <p>
          ABC Def documents dark-mode activation through the `.dark` selector.
          Add or remove `.dark` on an ancestor element to switch color schemes.
        </p>
      </PageSection>
    </>
  );
}
