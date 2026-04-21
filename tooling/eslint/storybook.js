import storybookPlugin from "eslint-plugin-storybook";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { storybook: storybookPlugin },
  },
];
