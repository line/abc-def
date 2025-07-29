const config = require("@line/abc-def-stylelint-config");

/** @type {import('stylelint').Config} */
module.exports = { ...config, ignoreFiles: ["dist/**"] };
