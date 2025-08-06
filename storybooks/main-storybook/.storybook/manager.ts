import { addons } from "storybook/manager-api";
import { ThemeVars } from "storybook/theming";
import { create } from "storybook/theming/create";

addons.setConfig({
  navSize: 280,
  enableShortcuts: false,
  showToolbar: false,
  theme: create({
    brandTitle: `<img src="./logo.png" alt="abc def" width="149px" height="32px" />`,
    brandUrl: "./",
    brandTarget: "_self",

    // Typography
    fontBase:
      'Inter, Helvetica, Arial, system-ui, sans-serif, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontCode:
      'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',

    // ?
    colorPrimary: "#990000",

    // Nav Active Color
    colorSecondary: "#000000",

    // UI
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#e7e9ef",
    appBorderRadius: 8,

    // Text colors
    textColor: "#000000",
    textInverseColor: "#ffffff",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "#e7e9ef",
    inputTextColor: "#000000",
    inputBorderRadius: 8,
  } as ThemeVars),
});
