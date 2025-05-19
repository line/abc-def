module.exports = require("tailwindcss/plugin")(({ addBase, addComponents }) => {
  addBase(require("./dist/base"));
  addComponents(require("./dist/components"));
  addComponents(require("./dist/utilities"));
});
