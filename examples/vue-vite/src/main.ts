import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@abc-def/vue";
import { createApp, h } from "vue";

import "./index.css";

const App = {
  name: "ExampleVueApp",
  setup() {
    return () =>
      h("main", { class: "min-h-screen bg-background px-6 py-16 text-foreground" }, [
        h("div", { class: "mx-auto flex w-full max-w-3xl flex-col gap-6" }, [
          h(Card, null, {
            default: () => [
              h(CardHeader, null, {
                default: () => [
                  h(CardTitle, null, { default: () => "Vue mirrors the shared button contract" }),
                  h(
                    "p",
                    { class: "abc-text-dim" },
                    "Vue uses the same variants, sizes, and selectors as React and plain HTML.",
                  ),
                ],
              }),
              h(CardContent, null, {
                default: () => [
                  h(Input, { placeholder: "Type into the shared input component" }),
                  h("div", { class: "card-actions" }, [
                    h(Button, { variant: "outline" }, { default: () => "Outline" }),
                    h(Button, { variant: "secondary" }, { default: () => "Secondary" }),
                    h(Button, { variant: "ghost" }, { default: () => "Ghost" }),
                    h(Button, { variant: "link" }, { default: () => "Link" }),
                    h(Button, { variant: "destructive" }, { default: () => "Delete" }),
                    h(Button, null, { default: () => "Default" }),
                  ]),
                  h("div", { class: "card-actions" }, [
                    h(Button, { size: "sm" }, { default: () => "Small" }),
                    h(Button, null, { default: () => "Default" }),
                    h(Button, { size: "lg" }, { default: () => "Large" }),
                    h(Button, { size: "icon", "aria-label": "Add item" }, { default: () => "+" }),
                    h(Button, { size: "icon-sm", "aria-label": "Add small item" }, { default: () => "+" }),
                    h(Button, { size: "icon-lg", "aria-label": "Add large item" }, { default: () => "+" }),
                  ]),
                ],
              }),
            ],
          }),
        ]),
      ]);
  },
};

createApp(App).mount("#app");
