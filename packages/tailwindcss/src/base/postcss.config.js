module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("postcss-minify"),
    require("postcss-discard-comments"),
  ],
};
