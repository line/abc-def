const baseConfig = require("@abc-def/eslint-config/base");

/** @type {import('typescript-eslint').Config} */
module.exports = [
  {
    ignores: ["dist"],
  },
  ...baseConfig,
];
