module.exports = require("tailwindcss/plugin")(({
  addBase,
  addComponents,
  addUtilities,
}) => {
  addBase(require("./dist/base"));
  addBase(require("./dist/theme"));
  addUtilities(require("./dist/utilities"));
  addComponents(require("./dist/components"));
});
