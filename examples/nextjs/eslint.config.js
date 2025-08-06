import baseConfig from "@line/abc-def-eslint-config/base";
import nextjsConfig from "@line/abc-def-eslint-config/nextjs";
import reactConfig from "@line/abc-def-eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  { ignores: [".storybook", "next-env.d.ts"] },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
