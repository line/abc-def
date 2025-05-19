import baseConfig from "@abc-def/eslint-config/base";
import reactConfig from "@abc-def/eslint-config/react";
import storybookConfig from "@abc-def/eslint-config/storybook";

/** @type {import('typescript-eslint').Config} */
export default [
  { ignores: [".storybook"] },
  ...baseConfig,
  ...reactConfig,
  ...storybookConfig,
];
