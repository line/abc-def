module.exports = require("tailwindcss/plugin")(({ addBase, addComponents }) => {
  addBase(require("./dist/base"));
  addBase(require("./dist/theme"));
  addComponents(require("./dist/components"));
  addComponents(require("./dist/utilities"));
});
