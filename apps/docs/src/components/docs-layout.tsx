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

import type { ReactNode } from "react";
import Link from "next/link";

import { Badge } from "@line/abc-def-react/badge";
import { Button } from "@line/abc-def-react/button";
import { Separator } from "@line/abc-def-react/separator";

import { DocsActiveLink } from "@/components/docs-active-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { componentDocs, getComponentsByName } from "@/content/components";

const guideLinks = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/react", label: "React" },
  { href: "/vue", label: "Vue" },
  { href: "/styles", label: "Styles" },
  { href: "/playground", label: "Playground" },
];

interface DocsLayoutProps {
  children: ReactNode;
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.82 0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const components = getComponentsByName();

  return (
    <div className="docs-shell">
      <header className="docs-header">
        <div className="docs-header-main">
          <Link className="docs-brand" href="/">
            ABC Def
          </Link>
          <nav aria-label="Primary navigation" className="docs-top-nav">
            {guideLinks.map((link) => (
              <DocsActiveLink key={link.href} href={link.href}>
                {link.label}
              </DocsActiveLink>
            ))}
            <DocsActiveLink href="/components">Components</DocsActiveLink>
          </nav>
        </div>
        <div className="docs-header-actions">
          <Button
            asChild
            aria-label="Open ABC Def on GitHub"
            size="icon"
            title="Open ABC Def on GitHub"
            variant="outline"
          >
            <a
              href="https://github.com/line/abc-def"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </header>
      <div className="docs-body">
        <aside className="docs-sidebar">
          <nav aria-label="Documentation navigation">
            <p className="docs-nav-title">Guides</p>
            <ul className="docs-nav-list">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <DocsActiveLink href={link.href}>{link.label}</DocsActiveLink>
                </li>
              ))}
            </ul>
            <Separator className="docs-sidebar-separator" />
            <p className="docs-nav-title">
              Components{" "}
              <Badge className="docs-nav-count" variant="secondary">
                {componentDocs.length}
              </Badge>
            </p>
            <ul className="docs-nav-list">
              {components.map((component) => (
                <li key={component.slug}>
                  <DocsActiveLink href={`/components/${component.slug}`}>
                    {component.title}
                  </DocsActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="docs-main">{children}</main>
      </div>
    </div>
  );
}
