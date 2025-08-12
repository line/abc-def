import type { Preview } from "@storybook/react";

import "./global.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Getting Started",
          "Component List",
          "*",
          "Combinations",
          ["TimePicker", "DateTimePicker", "NavBar"],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { toc: { title: "On this page", headingSelector: "h2, h3" } },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
