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

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { DocsLayout } from "@/components/docs-layout";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ABC Def Documentation",
    template: "%s | ABC Def",
  },
  description:
    "Usage guides and component documentation for the ABC Def design system.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}
