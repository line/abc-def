import type { Preview } from "@storybook/web-components";

import "./global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { toc: { title: "On this page", headingSelector: "h2, h3" } },
  },
};
export default preview;
