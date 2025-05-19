import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    brandTitle: "Def",
    brandUrl: "https://line.github.io/abc-def",
    brandImage: "/logo.png",
    brandTarget: "_self",
  }),
});
