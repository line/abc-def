import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  staticDirs: ["../public"],
  refs: (_, { configType }) => {
    if (configType === "DEVELOPMENT") {
      return {
        html: {
          expanded: false,
          title: "Html Components",
          url: "http://localhost:6007",
        },
        react: {
          title: "React Components",
          url: "http://localhost:6008",
        },
        vue: {
          expanded: false,
          title: "Vue Components",
          url: "http://localhost:6009",
        },
      };
    }
    return {
      html: {
        expanded: false,
        title: "Html Components",
        url: "https://line.github.io/abc-def/html",
      },
      react: {
        title: "React Components",
        url: "https://line.github.io/abc-def/react",
      },
      vue: {
        expanded: false,
        title: "Vue Components",
        url: "https://line.github.io/abc-def/vue",
      },
    };
  },
};
export default config;
