import baseConfig from "@abc-def/eslint-config/base";
import reactConfig from "@abc-def/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["postcss.js"],
  },
  ...baseConfig,
  ...reactConfig,
];
