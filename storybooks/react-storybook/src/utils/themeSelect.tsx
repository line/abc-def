import React from "react";

import {
  Badge,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  TextInput,
} from "@abc-def/react";

export default function ThemeSelect() {
  const [theme, setTheme] = React.useState<string | undefined>(undefined);
  const [tint, setTint] = React.useState<string | undefined>(undefined);
  const [size, setSize] = React.useState<string | undefined>(undefined);
  const [radius, setRadius] = React.useState<string | undefined>(undefined);

  const forceReRender = (globals: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("globals", globals);
    window.location.href = currentUrl.href;
  };

  const handleChangeRadius = (radius: string) => {
    setRadius(radius);
    forceReRender(`radius:${radius}`);
  };

  const getDocumentDark = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  const getDocumentSize = () => {
    const currentUrl = new URL(window.location.href);
    const globals = currentUrl.searchParams.get("globals") ?? "";
    const size = globals.split("size:")[1]?.split("%3B")[0] ?? "small";
    return size;
  };

  const getDocumentRadius = () => {
    const currentUrl = new URL(window.location.href);
    const globals = currentUrl.searchParams.get("globals") ?? "";
    const radius = globals.split("radius:")[1]?.split("%3B")[0] ?? "medium";
    return radius;
  };

  const getDocumentTint = () => {
    if (document.body.style.cssText.includes(color.red!.tint!)) {
      return "red";
    } else if (document.body.style.cssText.includes(color.orange!.tint!)) {
      return "orange";
    } else if (document.body.style.cssText.includes(color.green!.tint!)) {
      return "green";
    } else if (document.body.style.cssText.includes(color.blue!.tint!)) {
      return "blue";
    }
  };

  React.useEffect(() => {
    const theme = getDocumentDark() ?? "light";
    const size = getDocumentSize() ?? "small";
    const radius = getDocumentRadius() ?? "medium";
    const tint = getDocumentTint() ?? "neutral";

    setTheme(theme);
    setSize(size);
    setRadius(radius);
    setTint(tint);
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  React.useEffect(() => {
    if (tint) {
      document.body.setAttribute(
        "style",
        tint !== "neutral"
          ? `--tint: ${color[tint]?.tint}; --tint-subtle: ${color[tint]?.subtle};`
          : "--tint: initial; --tint-subtle: initial;",
      );
    }
  }, [tint]);

  React.useEffect(() => {
    if (size) {
      document.body.setAttribute("data-size", size);
    }
  }, [size]);

  React.useEffect(() => {
    if (radius) {
      document.body.setAttribute("data-radius", radius);
    }
  }, [radius]);

  return (
    <div
      className="flex items-center space-x-2 pb-8"
      style={
        {
          "--fg-neutral-primary": "var(--base-black)",
          "--fg-neutral-secondary": "var(--neutral600)",
          "--fg-neutral-tertiary": "var(--neutral500)",
          "--fg-neutral-inverse": "var(--base-white)",
          "--fg-neutral-static": "var(--base-white)",
          "--fg-tint-red": "var(--red600)",
          "--fg-tint-orange": "var(--amber600)",
          "--fg-tint-green": "var(--green600)",
          "--fg-tint-blue": "var(--blue600)",
          "--border-neutral-primary": "var(--neutral950)",
          "--border-neutral-secondary": "var(--neutral500)",
          "--border-neutral-tertiary": "var(--neutral300)",
          "--border-neutral-transparent": "var(--base-transparent)",
          "--border-tint-red": "var(--red600)",
          "--border-tint-orange": "var(--amber600)",
          "--border-tint-green": "var(--green600)",
          "--border-tint-blue": "var(--blue600)",
          "--bg-primary": "var(--base-white)",
          "--bg-secondary": "var(--neutral100)",
          "--bg-tertiary": "var(--neutral200)",
          "--bg-dim": "var(--alpha-black600)",
          "--bg-neutral-primary": "var(--base-white)",
          "--bg-neutral-secondary": "var(--neutral300)",
          "--bg-neutral-tertiary": "var(--neutral200)",
          "--bg-neutral-inverse": "var(--neutral950)",
          "--bg-neutral-hover": "var(--alpha-black50)",
          "--bg-neutral-transparent": "var(--base-transparent)",
          "--bg-tint-red-bold": "var(--red600)",
          "--bg-tint-red-subtle": "var(--red100)",
          "--bg-tint-orange-bold": "var(--amber600)",
          "--bg-tint-orange-subtle": "var(--amber100)",
          "--bg-tint-green-bold": "var(--green600)",
          "--bg-tint-green-subtle": "var(--green100)",
          "--bg-tint-blue-bold": "var(--blue600)",
          "--bg-tint-blue-subtle": "var(--blue100)",
        } as React.CSSProperties
      }
    >
      <Select size="small" value={theme} onValueChange={setTheme}>
        <SelectLabel>Theme</SelectLabel>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent maxHeight="auto" position="popper">
          <SelectGroup>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select size="small" value={tint} onValueChange={setTint}>
        <SelectLabel>Tint</SelectLabel>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent maxHeight="auto" position="popper">
          <SelectGroup>
            <SelectItem value="neutral">
              Neutral <Badges color="default" />
            </SelectItem>
            <SelectItem value="red">
              Red <Badges color="red" />
            </SelectItem>
            <SelectItem value="orange">
              Orange <Badges color="orange" />
            </SelectItem>
            <SelectItem value="green">
              Green <Badges color="green" />
            </SelectItem>
            <SelectItem value="blue">
              Blue <Badges color="blue" />
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select size="small" value={radius} onValueChange={handleChangeRadius}>
        <SelectLabel>Radius</SelectLabel>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent maxHeight="auto" position="popper">
          <SelectGroup>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <div>
        Rounded Base
        <TextInput
          type="number"
          defaultValue={parseInt(
            document.documentElement.style.getPropertyValue("--rounded-base") ||
              "0",
          )}
          onChange={(e) => {
            const number = Number(e.target.value);
            document.documentElement.style.setProperty(
              "--rounded-base",
              number + "px",
            );
          }}
        />
      </div> */}
    </div>
  );
}

const Badges = ({ color }: React.ComponentPropsWithoutRef<typeof Badge>) => (
  <>
    <Badge
      radius="medium"
      variant="bold"
      color={color}
      style={{
        fontSize: "0.75rem",
        lineHeight: "1.125rem",
        marginLeft: "0.25rem",
      }}
    >
      --tint
    </Badge>
    <Badge
      radius="medium"
      variant="subtle"
      color={color}
      style={{
        fontSize: "0.75rem",
        lineHeight: "1.125rem",
        marginLeft: "0.25rem",
      }}
    >
      --tint-subtle
    </Badge>
  </>
);

const color: Record<string, Record<string, string>> = {
  red: {
    tint: "#dc2626",
    subtle: "#fee2e2",
  },
  orange: {
    tint: "#ea580c",
    subtle: "#ffedd5",
  },
  green: {
    tint: "#16a34a",
    subtle: "#dcfce7",
  },
  blue: {
    tint: "#2563eb",
    subtle: "#dbeafe",
  },
};
