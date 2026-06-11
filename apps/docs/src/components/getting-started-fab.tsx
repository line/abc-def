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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function GettingStartedFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(!(entries[0]?.isIntersecting ?? true));
      },
      { threshold: 0.9 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/getting-started"
      className="docs-fab"
      aria-label="Getting Started"
      data-visible={visible}
    >
      <video
        className="docs-fab-video-light"
        width="24"
        height="24"
        muted
        autoPlay
        playsInline
        loop
      >
        <source src="./logo-dark.mp4" type="video/mp4" />
      </video>
      <video
        className="docs-fab-video-dark"
        width="24"
        height="24"
        muted
        autoPlay
        playsInline
        loop
      >
        <source src="./logo-light.mp4" type="video/mp4" />
      </video>
      <span className="docs-fab-label">Getting Started</span>
      <span className="docs-fab-arrow" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
