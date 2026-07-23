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

function LogoSVG() {
  return (
    <svg
      width="126"
      height="28"
      viewBox="0 0 126 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ABC Def"
    >
      <rect
        x="0.315"
        y="0.315"
        width="27.37"
        height="27.37"
        rx="6.685"
        fill="white"
      />
      <rect
        x="0.315"
        y="0.315"
        width="27.37"
        height="27.37"
        rx="6.685"
        fill="url(#paint0_linear_9073_106)"
        fillOpacity="0.3"
      />
      <rect
        x="0.315"
        y="0.315"
        width="27.37"
        height="27.37"
        rx="6.685"
        stroke="#E4E8EE"
        strokeWidth="0.63"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2379 9.80949L13.9998 5.61902L6.76172 9.80949V18.1904L13.9998 22.3809L21.2379 18.1904V9.80949ZM16.0523 12H12.0523V16H16.0523V12Z"
        fill="black"
      />
      <path
        d="M38.3695 22H34.5513L40.3691 5.14734H44.9608L50.7704 22H46.9522L42.7308 8.99843H42.5991L38.3695 22ZM38.1309 15.3758H47.1497V18.1571H38.1309V15.3758ZM52.2195 22V5.14734H58.9671C60.2069 5.14734 61.241 5.33111 62.0694 5.69867C62.8978 6.06622 63.5204 6.57641 63.9373 7.22923C64.3543 7.87657 64.5627 8.62265 64.5627 9.46748C64.5627 10.1258 64.4311 10.7045 64.1678 11.2038C63.9044 11.6975 63.5424 12.1034 63.0815 12.4216C62.6262 12.7343 62.1051 12.9565 61.5181 13.0882V13.2527C62.1599 13.2802 62.7606 13.4612 63.3202 13.7958C63.8852 14.1305 64.3433 14.5995 64.6944 15.203C65.0455 15.8009 65.221 16.5141 65.221 17.3425C65.221 18.2367 64.9989 19.0349 64.5545 19.7371C64.1156 20.4338 63.4656 20.9851 62.6043 21.3911C61.743 21.797 60.6815 22 59.4197 22H52.2195ZM55.7826 19.087H58.6873C59.6803 19.087 60.4044 18.8977 60.8598 18.5192C61.3151 18.1352 61.5428 17.625 61.5428 16.9886C61.5428 16.5223 61.4303 16.1109 61.2054 15.7543C60.9804 15.3977 60.6595 15.1179 60.2426 14.915C59.8312 14.712 59.3402 14.6105 58.7696 14.6105H55.7826V19.087ZM55.7826 12.1995H58.424C58.9123 12.1995 59.3457 12.1144 59.7242 11.9444C60.1082 11.7688 60.4099 11.5219 60.6293 11.2038C60.8543 10.8856 60.9667 10.5043 60.9667 10.06C60.9667 9.45102 60.75 8.96003 60.3167 8.58699C59.8888 8.21395 59.2798 8.02743 58.4899 8.02743H55.7826V12.1995ZM81.8297 11.0474H78.2255C78.1597 10.5811 78.0253 10.1669 77.8223 9.80486C77.6193 9.4373 77.3587 9.12461 77.0405 8.86677C76.7224 8.60893 76.3548 8.41144 75.9379 8.27429C75.5264 8.13715 75.0793 8.06857 74.5966 8.06857C73.7243 8.06857 72.9645 8.28527 72.3172 8.71865C71.6698 9.14655 71.1679 9.77194 70.8113 10.5948C70.4547 11.4122 70.2764 12.4052 70.2764 13.5737C70.2764 14.7751 70.4547 15.7845 70.8113 16.6019C71.1734 17.4193 71.6781 18.0364 72.3254 18.4534C72.9727 18.8703 73.7216 19.0788 74.5719 19.0788C75.0492 19.0788 75.4908 19.0157 75.8967 18.8895C76.3082 18.7633 76.673 18.5795 76.9912 18.3382C77.3093 18.0913 77.5727 17.7923 77.7811 17.4412C77.9951 17.0901 78.1432 16.6897 78.2255 16.2398L81.8297 16.2563C81.7365 17.0298 81.5033 17.7759 81.1303 18.4945C80.7627 19.2077 80.2662 19.8468 79.6409 20.4118C79.0209 20.9714 78.2803 21.4158 77.4191 21.7449C76.5633 22.0686 75.595 22.2304 74.5143 22.2304C73.0111 22.2304 71.6671 21.8903 70.4822 21.21C69.3027 20.5298 68.3701 19.5451 67.6843 18.2559C67.0041 16.9667 66.664 15.406 66.664 13.5737C66.664 11.7359 67.0096 10.1724 67.7008 8.88323C68.392 7.59404 69.3301 6.61207 70.5151 5.9373C71.7 5.25705 73.0331 4.91693 74.5143 4.91693C75.4908 4.91693 76.3959 5.05408 77.2298 5.32837C78.0691 5.60266 78.8125 6.00313 79.4598 6.52978C80.1072 7.05094 80.6338 7.69005 81.0398 8.4471C81.4512 9.20415 81.7145 10.0709 81.8297 11.0474ZM94.5634 22H88.5893V5.14734H94.6128C96.308 5.14734 97.7672 5.48472 98.9906 6.15948C100.214 6.82876 101.155 7.79154 101.813 9.04781C102.477 10.3041 102.809 11.8072 102.809 13.5572C102.809 15.3127 102.477 16.8213 101.813 18.0831C101.155 19.3448 100.208 20.3131 98.9741 20.9879C97.7453 21.6626 96.275 22 94.5634 22ZM92.1524 18.9471H94.4153C95.4686 18.9471 96.3546 18.7606 97.0732 18.3875C97.7974 18.009 98.3405 17.4248 98.7025 16.6348C99.0701 15.8393 99.2539 14.8135 99.2539 13.5572C99.2539 12.3119 99.0701 11.2943 98.7025 10.5043C98.3405 9.71434 97.8001 9.13284 97.0815 8.7598C96.3628 8.38676 95.4768 8.20024 94.4235 8.20024H92.1524V18.9471ZM110.563 22.2469C109.263 22.2469 108.144 21.9835 107.206 21.4569C106.273 20.9248 105.555 20.1732 105.05 19.2022C104.545 18.2257 104.293 17.0709 104.293 15.7379C104.293 14.4377 104.545 13.2966 105.05 12.3147C105.555 11.3327 106.265 10.5674 107.181 10.0188C108.103 9.47022 109.183 9.19593 110.423 9.19593C111.257 9.19593 112.033 9.33033 112.752 9.59914C113.476 9.86246 114.107 10.2602 114.645 10.7923C115.188 11.3245 115.61 11.9937 115.912 12.8002C116.214 13.6011 116.365 14.5392 116.365 15.6144V16.5772H105.692V14.4048H113.065C113.065 13.9001 112.955 13.453 112.736 13.0635C112.516 12.674 112.212 12.3695 111.822 12.1501C111.438 11.9252 110.991 11.8127 110.481 11.8127C109.949 11.8127 109.477 11.9361 109.066 12.183C108.66 12.4244 108.341 12.7508 108.111 13.1622C107.881 13.5682 107.763 14.0208 107.757 14.52V16.5854C107.757 17.2108 107.872 17.7512 108.103 18.2065C108.339 18.6618 108.671 19.0129 109.098 19.2598C109.526 19.5067 110.034 19.6301 110.621 19.6301C111.01 19.6301 111.367 19.5752 111.691 19.4655C112.014 19.3558 112.291 19.1912 112.522 18.9718C112.752 18.7524 112.928 18.4835 113.048 18.1654L116.29 18.3793C116.126 19.1583 115.788 19.8386 115.278 20.4201C114.774 20.9961 114.121 21.4459 113.32 21.7696C112.524 22.0878 111.606 22.2469 110.563 22.2469ZM124.87 9.3605V11.9937H117.069V9.3605H124.87ZM118.855 22V8.4471C118.855 7.53096 119.033 6.77116 119.389 6.16771C119.752 5.56426 120.245 5.11168 120.871 4.80995C121.496 4.50823 122.206 4.35737 123.002 4.35737C123.54 4.35737 124.031 4.39851 124.475 4.4808C124.925 4.56309 125.259 4.63715 125.479 4.70298L124.853 7.33621C124.716 7.29232 124.546 7.25118 124.343 7.21277C124.146 7.17437 123.943 7.15517 123.734 7.15517C123.219 7.15517 122.859 7.27586 122.656 7.51724C122.453 7.75314 122.352 8.08503 122.352 8.51293V22H118.855Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9073_106"
          x1="14"
          y1="0"
          x2="14"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D0D5DD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const VERSION = "2.1.0";

export function DocsLayout({ children }: DocsLayoutProps) {
  const components = getComponentsByName();

  return (
    <div className="docs-shell">
      <header className="docs-header">
        <div className="docs-header-main">
          <Link className="docs-brand" href="/" aria-label="ABC Def">
            <LogoSVG />
          </Link>
          <Badge variant="secondary" className="docs-version-badge">
            v{VERSION}
          </Badge>
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
          <a
            aria-label="Open ABC Def on GitHub"
            className="button button-variant-outline button-size-icon button-rounded-default"
            data-size="icon"
            data-slot="button"
            data-variant="outline"
            href="https://github.com/line/abc-def"
            rel="noreferrer"
            target="_blank"
            title="Open ABC Def on GitHub"
          >
            <GitHubIcon />
          </a>
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
