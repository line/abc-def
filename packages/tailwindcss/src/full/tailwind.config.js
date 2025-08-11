const plugin = require("tailwindcss/plugin");
const theme = require("../theme");

function filterDefault(values) {
  return Object.fromEntries(
    Object.entries(values).filter(([key]) => key !== "DEFAULT"),
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [{ raw: "" }],
  safelist: [
    {
      pattern:
        /(fill|text|bg|border|text-above)-neutral-(primary|secondary|tertiary|inverse|disabled|static|hover|transparent|dim)/,
    },
    {
      pattern: /bg-(primary|secondary|tertiary|dim)/,
    },
    {
      pattern: /(fill|text|border)-tint-(red|orange|green|blue)/,
    },
    {
      pattern: /bg-tint-(red|orange|green|blue)-(bold|subtle|hover|)/,
    },
    {
      pattern: /rounded(-|)(0|4|6|8|12|16|24|full|)/,
    },
    {
      pattern: /shadow(-|)(sm|md|lg|xl|2xl|inner|none|)/,
    },
  ],
  theme,
  plugins: [
    plugin(({ addBase, addUtilities, addComponents }) => {
      addBase(require("../../dist/base"));
      addComponents(require("../../dist/components"));
      addUtilities(require("../../dist/utilities"));
    }),
  ],
};
