const baseConfig = require("@abc-def/eslint-config/base");
const reactConfig = require("@abc-def/eslint-config/react");

/** @type {import('typescript-eslint').Config} */
module.exports = [
  {
    ignores: ["postcss.js"],
  },
  ...baseConfig,
  ...reactConfig,
];
