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
import React from "react";

interface TypoTableProps {
  items: { name: string; size: string; lineHeight: string; code: string }[];
}

const tableClass = "table-fixed border-collapse w-full text-left";
const headerClass =
  "!border-none !px-0 !py-4 !pl-4 capitalize text-large-strong";
const rowClass = "!border-none !p-0 [&:nth-of-type(2n)]:!bg-neutral-tertiary";
const cellClass = "!border-none !px-0 !py-4 !pl-4 text-large-normal";

export const TypoTable: React.FC<TypoTableProps> = ({ items }) => {
  return (
    <table className={tableClass}>
      <thead>
        <tr className="!border-none">
          <th className={headerClass}>token name</th>
          <th className={headerClass}>size</th>
          <th className={headerClass}>line height</th>
          <th className={headerClass}>example</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ size, lineHeight, code }, rowIndex) => (
          <tr key={rowIndex} className={rowClass}>
            <td className={cellClass}>{code.replace("!", "")}</td>
            <td className={cellClass}>{size}</td>
            <td className={cellClass}>{lineHeight}</td>
            <td className={cellClass}>
              <span className={code}>Rag 123</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TypoTableSmall: React.FC = () => <TypoTable items={small} />;
export const TypoTableBase: React.FC = () => <TypoTable items={base} />;
export const TypoTableLarge: React.FC = () => <TypoTable items={large} />;
export const TypoTableXlarge: React.FC = () => <TypoTable items={xlarge} />;
export const TypoTableTitle: React.FC = () => <TypoTable items={title} />;

const small = [
  {
    name: "normal",
    size: "0.75rem (12px)",
    lineHeight: "1.125rem (18px)",
    code: "!text-small-normal",
  },
  {
    name: "strong",
    size: "0.75rem (12px)",
    lineHeight: "1.125rem (18px)",
    code: "!text-small-strong",
  },
];

const base = [
  {
    name: "normal",
    size: "0.875rem (14px)",
    lineHeight: "1.375rem (22px)",
    code: "!text-base-normal",
  },
  {
    name: "strong",
    size: "0.875rem (14px)",
    lineHeight: "1.375rem (22px)",
    code: "!text-base-strong",
  },
];

const large = [
  {
    name: "normal",
    size: "1rem (16px)",
    lineHeight: "1.5rem (24px)",
    code: "!text-large-normal",
  },
  {
    name: "strong",
    size: "1rem (16px)",
    lineHeight: "1.5rem (24px)",
    code: "!text-large-strong",
  },
];

const xlarge = [
  {
    name: "normal",
    size: "1.25rem (20px)",
    lineHeight: "2rem (28px)",
    code: "!text-xlarge-normal",
  },
  {
    name: "strong",
    size: "1.25rem (20px)",
    lineHeight: "2rem (28px)",
    code: "!text-xlarge-strong",
  },
];

const title = [
  {
    name: "h1",
    size: "2.375rem (38px)",
    lineHeight: "2.875rem (46px)",
    code: "!text-title-h1",
  },
  {
    name: "h2",
    size: "1.875remrem (30px)",
    lineHeight: "2.375rem (38px)",
    code: "!text-title-h2",
  },
  {
    name: "h3",
    size: "1.5rem (24px)",
    lineHeight: "2rem (32px)",
    code: "!text-title-h3",
  },
  {
    name: "h4",
    size: "1.25rem (20px)",
    lineHeight: "1.75rem (28px)",
    code: "!text-title-h4",
  },
  {
    name: "h5",
    size: "1rem (16px)",
    lineHeight: "1.5rem (24px)",
    code: "!text-title-h5",
  },
];
