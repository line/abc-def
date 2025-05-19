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

import { toast } from "@abc-def/react";

export default function TokenTable({
  items,
}: {
  items: { name: string; value: string; preview: React.ReactNode }[];
}) {
  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const parentElement = button.parentElement?.parentElement;
    const codeElement = parentElement?.querySelector("code");

    if (codeElement) {
      const text = codeElement.innerText;
      await navigator.clipboard.writeText(text);
      toast.success(`${text} copied`);
    }
  };

  return (
    <table style={{ tableLayout: "fixed", width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th scope="col" style={{ width: "40%" }}>
            Component Token
          </th>
          <th scope="col" style={{ width: "50%" }}>
            Semantic Token
          </th>
          <th scope="col" style={{ width: "10%" }}>
            Preview
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ name, value, preview }, index) => (
          <tr key={index}>
            <th scope="row">
              <div
                style={{
                  display: "flex",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
              >
                <code>{name}</code>
                <button
                  onClick={handleCopy}
                  style={{
                    marginLeft: "auto",
                    textDecoration: "underline",
                    color: "var(--fg-neutral-tertiary)",
                  }}
                >
                  Copy
                </button>
              </div>
            </th>
            <td>
              <div
                style={{
                  display: "flex",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
              >
                <code>{value}</code>
                <button
                  onClick={handleCopy}
                  style={{
                    marginLeft: "auto",
                    textDecoration: "underline",
                    color: "var(--fg-neutral-tertiary)",
                  }}
                >
                  Copy
                </button>
              </div>
            </td>
            <td>{preview ?? <ColorChip color={value} />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const ColorChip = ({ color }: { color: string }) => (
  <div
    style={{
      background:
        "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
      height: "1.25em",
      border: "1px solid #e7e9ef",
    }}
  >
    <div
      style={{
        background: color,
        height: "100%",
      }}
    ></div>
  </div>
);
