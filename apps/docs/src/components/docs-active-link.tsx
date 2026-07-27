/**
 * Copyright 2026 LY Corporation
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

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DocsActiveLinkProps {
  children: ReactNode;
  href: string;
}

function normalizePathname(pathname: string): string {
  const withoutBasePath =
    pathname === "/abc-def"
      ? "/"
      : pathname.startsWith("/abc-def/")
        ? pathname.slice("/abc-def".length)
        : pathname;

  if (withoutBasePath.length > 1 && withoutBasePath.endsWith("/")) {
    return withoutBasePath.slice(0, -1);
  }

  return withoutBasePath;
}

export function DocsActiveLink({ children, href }: DocsActiveLinkProps) {
  const pathname = usePathname();
  const isActive = normalizePathname(pathname) === normalizePathname(href);

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      data-active={isActive ? "true" : undefined}
      href={href}
    >
      {children}
    </Link>
  );
}
