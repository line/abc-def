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

interface SpacingItem {
  name: string;
  value: string;
}

const spacings: SpacingItem[] = [
  { name: "spacing", value: "0.25rem" },
  { name: "spacing-px", value: "0.0625rem" },
  { name: "spacing-0", value: "calc(var(--spacing) * 0)" },
  { name: "spacing-0-point-5", value: "calc(var(--spacing) * 0.5)" },
  { name: "spacing-1", value: "calc(var(--spacing) * 1)" },
  { name: "spacing-1-point-5", value: "calc(var(--spacing) * 1.5)" },
  { name: "spacing-2", value: "calc(var(--spacing) * 2)" },
  { name: "spacing-2-point-5", value: "calc(var(--spacing) * 2.5)" },
  { name: "spacing-3", value: "calc(var(--spacing) * 3)" },
  { name: "spacing-3-point-5", value: "calc(var(--spacing) * 3.5)" },
  { name: "spacing-4", value: "calc(var(--spacing) * 4)" },
  { name: "spacing-5", value: "calc(var(--spacing) * 5)" },
  { name: "spacing-5-point-5", value: "calc(var(--spacing) * 5.5)" },
  { name: "spacing-6", value: "calc(var(--spacing) * 6)" },
  { name: "spacing-7", value: "calc(var(--spacing) * 7)" },
  { name: "spacing-8", value: "calc(var(--spacing) * 8)" },
  { name: "spacing-9", value: "calc(var(--spacing) * 9)" },
  { name: "spacing-9-point-5", value: "calc(var(--spacing) * 9.5)" },
  { name: "spacing-10", value: "calc(var(--spacing) * 10)" },
  { name: "spacing-11", value: "calc(var(--spacing) * 11)" },
  { name: "spacing-12", value: "calc(var(--spacing) * 12)" },
  { name: "spacing-13", value: "calc(var(--spacing) * 13)" },
  { name: "spacing-14", value: "calc(var(--spacing) * 14)" },
  { name: "spacing-16", value: "calc(var(--spacing) * 16)" },
  { name: "spacing-20", value: "calc(var(--spacing) * 20)" },
  { name: "spacing-24", value: "calc(var(--spacing) * 24)" },
  { name: "spacing-28", value: "calc(var(--spacing) * 28)" },
  { name: "spacing-32", value: "calc(var(--spacing) * 32)" },
  { name: "spacing-36", value: "calc(var(--spacing) * 36)" },
  { name: "spacing-40", value: "calc(var(--spacing) * 40)" },
  { name: "spacing-44", value: "calc(var(--spacing) * 44)" },
  { name: "spacing-48", value: "calc(var(--spacing) * 48)" },
  { name: "spacing-52", value: "calc(var(--spacing) * 52)" },
  { name: "spacing-56", value: "calc(var(--spacing) * 56)" },
  { name: "spacing-60", value: "calc(var(--spacing) * 60)" },
  { name: "spacing-64", value: "calc(var(--spacing) * 64)" },
  { name: "spacing-72", value: "calc(var(--spacing) * 72)" },
  { name: "spacing-80", value: "calc(var(--spacing) * 80)" },
  { name: "spacing-96", value: "calc(var(--spacing) * 96)" },
];

const tableClass = "table-fixed border-collapse w-full text-left";
const headerClass =
  "!border-none !px-0 !py-4 !pl-4 capitalize text-large-strong w-[260px] [&:nth-of-type(3)]:w-auto";
const rowClass = "!border-none !p-0 [&:nth-of-type(2n)]:!bg-neutral-tertiary";
const cellClass = "!border-none !px-0 !py-4 !pl-4 text-large-normal";

const Spacing: React.FC = () => {
  return (
    <table className={tableClass}>
      <thead>
        <tr className="!border-none">
          <th className={headerClass}>token name</th>
          <th className={headerClass}>value</th>
          <th className={headerClass}>example</th>
        </tr>
      </thead>
      <tbody>
        {spacings.map(({ name, value }, rowIndex) => (
          <tr key={rowIndex} className={rowClass}>
            <td className={cellClass}>{name}</td>
            <td className={cellClass}>{value}</td>
            <td className={cellClass}>
              <span
                className="bg-neutral-inverse block h-4"
                style={{ width: value }}
              ></span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Spacing;
