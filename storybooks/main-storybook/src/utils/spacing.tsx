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
  { name: "spacing-2", value: "2px" },
  { name: "spacing-4", value: "4px" },
  { name: "spacing-6", value: "6px" },
  { name: "spacing-8", value: "8px" },
  { name: "spacing-10", value: "10px" },
  { name: "spacing-12", value: "12px" },
  { name: "spacing-14", value: "14px" },
  { name: "spacing-16", value: "16px" },
  { name: "spacing-20", value: "20px" },
  { name: "spacing-24", value: "24px" },
  { name: "spacing-32", value: "32px" },
  { name: "spacing-40", value: "40px" },
  { name: "spacing-48", value: "48px" },
  { name: "spacing-56", value: "56px" },
  { name: "spacing-64", value: "64px" },
];

const tableClass = "table-fixed border-collapse w-full text-left";
const headerClass = "!border-none !px-0 !py-4 capitalize text-large-strong";
const rowClass = "!border-none !p-0 [&:nth-of-type(2n)]:!bg-neutral-tertiary";
const cellClass = "!border-none !px-0 !py-4 text-large-normal";

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
