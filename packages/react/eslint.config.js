import baseConfig from "@line/abc-def-eslint-config/base";
import reactConfig from "@line/abc-def-eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["postcss.js"],
  },
  ...baseConfig,
  ...reactConfig,
];
