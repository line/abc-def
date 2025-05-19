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

interface ShadowItem {
  name: string;
}

const shadows: ShadowItem[] = [
  { name: "shadow-sm" },
  { name: "shadow" },
  { name: "shadow-md" },
  { name: "shadow-lg" },
  { name: "shadow-xl" },
  { name: "shadow-2xl" },
  { name: "shadow-inner" },
  { name: "shadow-none" },
];

const gridClass = "grid grid-cols-8 gap-4 px-4 py-7 bg-secondary";
const itemClass =
  "relative flex flex-col items-center justify-center space-y-1";
const contentClass = "w-full aspect-square rounded-lg bg-primary";

const Shadow: React.FC = () => (
  <div className={gridClass}>
    {shadows.map(({ name }, index) => (
      <div key={index} className={itemClass}>
        <div className={`${contentClass} ${name}`}></div>
        <strong className="!text-base-strong !text-neutral-tertiary">
          {name}
        </strong>
      </div>
    ))}
  </div>
);

export default Shadow;
