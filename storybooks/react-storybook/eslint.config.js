import baseConfig from "@line/abc-def-eslint-config/base";
import reactConfig from "@line/abc-def-eslint-config/react";
import storybookConfig from "@line/abc-def-eslint-config/storybook";

/** @type {import('typescript-eslint').Config} */
export default [
  { ignores: [".storybook"] },
  ...baseConfig,
  ...reactConfig,
  ...storybookConfig,
];
