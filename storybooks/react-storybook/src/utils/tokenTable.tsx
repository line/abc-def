import React from "react";

import { toast } from "@abc-def/react";

export default function TokenTable({
  items,
}: {
  items: Array<{ name: string; value: string; preview: React.ReactNode }>;
}) {
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const parentElement = button.parentElement?.parentElement;
    const codeElement = parentElement?.querySelector("code");

    if (codeElement) {
      const text = codeElement.innerText;
      navigator.clipboard.writeText(text);
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
            <td>{Boolean(preview) ? preview : <ColorChip color={value} />}</td>
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
