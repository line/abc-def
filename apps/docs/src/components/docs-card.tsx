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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@line/abc-def-react/card";

interface DocsCardProps {
  description: ReactNode;
  href?: string;
  title: ReactNode;
  className?: string;
}

export function DocsCard({
  className,
  description,
  href,
  title,
}: DocsCardProps) {
  const cardClassName = ["docs-card", className].filter(Boolean).join(" ");
  const card = (
    <Card className={cardClassName} size="sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );

  if (!href) {
    return card;
  }

  return (
    <Link className="docs-card-link" href={href}>
      {card}
    </Link>
  );
}
