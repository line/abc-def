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
  { name: "spacing-px", value: "1px" },
  { name: "spacing-0", value: "0" },
  { name: "spacing-0.5", value: "0.125rem" },
  { name: "spacing-1", value: "0.25rem" },
  { name: "spacing-1.5", value: "0.375rem" },
  { name: "spacing-2", value: "0.5rem" },
  { name: "spacing-2.5", value: "0.625rem" },
  { name: "spacing-3", value: "0.75rem" },
  { name: "spacing-3.5", value: "0.875rem" },
  { name: "spacing-4", value: "1rem" },
  { name: "spacing-5", value: "1.25rem" },
  { name: "spacing-6", value: "1.5rem" },
  { name: "spacing-7", value: "1.75rem" },
  { name: "spacing-8", value: "2rem" },
  { name: "spacing-9", value: "2.25rem" },
  { name: "spacing-10", value: "2.5rem" },
  { name: "spacing-11", value: "2.75rem" },
  { name: "spacing-12", value: "3rem" },
  { name: "spacing-14", value: "3.5rem" },
  { name: "spacing-16", value: "4rem" },
  { name: "spacing-20", value: "5rem" },
  { name: "spacing-24", value: "6rem" },
  { name: "spacing-28", value: "7rem" },
  { name: "spacing-32", value: "8rem" },
  { name: "spacing-36", value: "9rem" },
  { name: "spacing-40", value: "10rem" },
  { name: "spacing-44", value: "11rem" },
  { name: "spacing-48", value: "12rem" },
  { name: "spacing-52", value: "13rem" },
  { name: "spacing-56", value: "14rem" },
  { name: "spacing-60", value: "15rem" },
  { name: "spacing-64", value: "16rem" },
  { name: "spacing-72", value: "18rem" },
  { name: "spacing-80", value: "20rem" },
  { name: "spacing-96", value: "24rem" },
];

const tableClass = "table-fixed border-collapse w-full text-left";
const headerClass =
  "!border-none !px-0 !py-4 !pl-4 capitalize text-large-strong";
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
