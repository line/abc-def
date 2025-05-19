import { dirname, join } from "path";

export default {
  staticDirs: ["./assets"],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@chromatic-com/storybook"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {
      builder: {},
    },
  },
  docs: {},
  webpackFinal: (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: true, exportType: "named" },
        },
      ],
    });
    return config;
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
