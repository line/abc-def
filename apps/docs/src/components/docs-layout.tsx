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

import { componentDocs, getComponentsByCategory } from "@/content/components";

const guideLinks = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/react", label: "React" },
  { href: "/vue", label: "Vue" },
  { href: "/styles", label: "Styles" },
  { href: "/public-api", label: "Public API" },
];

interface DocsLayoutProps {
  children: ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const groupedComponents = getComponentsByCategory();

  return (
    <div className="docs-shell">
      <header className="docs-header">
        <Link className="docs-brand" href="/">
          ABC Def
        </Link>
        <nav aria-label="Primary navigation" className="docs-top-nav">
          {guideLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/components">Components</Link>
        </nav>
      </header>
      <div className="docs-body">
        <aside className="docs-sidebar">
          <nav aria-label="Documentation navigation">
            <p className="docs-nav-title">Guides</p>
            <ul className="docs-nav-list">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <p className="docs-nav-title">Components ({componentDocs.length})</p>
            {groupedComponents.map((group) => (
              <div key={group.category} className="docs-nav-group">
                <p>{group.category}</p>
                <ul className="docs-nav-list">
                  {group.components.map((component) => (
                    <li key={component.slug}>
                      <Link href={`/components/${component.slug}`}>
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main className="docs-main">{children}</main>
      </div>
    </div>
  );
}
