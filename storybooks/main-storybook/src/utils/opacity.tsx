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

interface OpacityItem {
  name: string;
}

const opacities: OpacityItem[] = [
  { name: "opacity-0" },
  { name: "opacity-10" },
  { name: "opacity-20" },
  { name: "opacity-30" },
  { name: "opacity-40" },
  { name: "opacity-50" },
  { name: "opacity-60" },
  { name: "opacity-70" },
  { name: "opacity-80" },
  { name: "opacity-90" },
  { name: "opacity-100" },
];

const gridClass = "grid grid-cols-11 gap-2 px-3 py-7 bg-secondary";
const itemClass =
  "relative flex flex-col items-center justify-center space-y-1";
const contentClass = "z-1 relative w-full aspect-square rounded-lg bg-primary";

const Opacity: React.FC = () => (
  <div className={gridClass}>
    {opacities.map(({ name }, index) => (
      <div key={index} className={itemClass}>
        <div className={`${contentClass} ${name}`}></div>
        <strong className="!text-base-strong !text-neutral-tertiary">
          {name}
        </strong>
      </div>
    ))}
  </div>
);

export default Opacity;
