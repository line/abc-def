import baseConfig from "@line/abc-def-eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist"],
  },
  ...baseConfig,
];
