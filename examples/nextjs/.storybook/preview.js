import { withThemeByClassName } from "@storybook/addon-themes";

import "./global.css";

export const parameters = {
  controls: {
    matchers: { color: /(background|color)$/i, date: /Date$/ },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        ["Overview", "Quick Start"],
        "Foundations",
        [
          "Color",
          "Typography",
          "Radius",
          "Spacing",
          "Shadow",
          "Breakpoints",
          "Logo",
          "Icon",
        ],
        "Components",
        [
          "Alert",
          "Accordion",
          "Badge",
          "Button",
          "Calendar",
          "Checkbox",
          "Combobox",
          "Dialog",
          "Divider",
          "Dropdown",
          "Input",
          "Menu",
          "Pagination",
          "Radio Card",
          "Radio",
          "ScrollArea",
          "Select",
          "Sheet",
          "Spinner",
          "Switch",
          "Table",
          "Tag",
          "ToggleGroup",
          "Tooltip",
        ],
        "Combinations",
        ["NavBar"],
      ],
    },
  },
};

export const globalTypes = {
  tint: {
    description: "Set custom tint color",
    defaultValue: "neutral",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "neutral", right: "⚪️", title: "Neutral" },
        { value: "red", right: "🔴", title: "Red" },
        { value: "orange", right: "🟠", title: "Orange" },
        { value: "green", right: "🟢", title: "Green" },
        { value: "blue", right: "🔵", title: "Blue" },
      ],
      dynamicTitle: true,
    },
  },
  size: {
    description: "Set custom size",
    defaultValue: "small",
    toolbar: {
      items: [
        { value: "small", title: "Size: Small" },
        { value: "medium", title: "Size: Medium" },
        { value: "large", title: "Size: Large" },
      ],
      dynamicTitle: true,
    },
  },
  radius: {
    description: "Set custom radius",
    defaultValue: "medium",
    toolbar: {
      items: [
        { value: "small", title: "Radius: Small" },
        { value: "medium", title: "Radius: Medium" },
        { value: "large", title: "Radius: Large" },
      ],
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  (Story, { globals }) => {
    const { tint, size, radius } = globals;
    const color = {
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

    const body = document.body;
    if (body) {
      body.setAttribute(
        "style",
        tint !== "neutral" &&
          `--tint:${color[tint].tint}; --tint-subtle:${color[tint].subtle};`,
      );
      body.setAttribute("data-size", size);
      body.setAttribute("data-radius", radius);
    }

    return <Story />;
  },
];
