const baseConfig = require("@abc-def/eslint-config/base");
const reactConfig = require("@abc-def/eslint-config/react");
const nextjsConfig = require("@abc-def/eslint-config/nextjs");

/** @type {import('typescript-eslint').Config} */
module.exports = [
  {
    ignores: [
      ".next/**",
      "next-env.d.ts",
      ".storybook/**",
      "storybook-static/**",
    ],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
