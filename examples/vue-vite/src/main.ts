import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@abc-def/vue";
import { createApp, h } from "vue";

import "./index.css";

const App = {
  name: "ExampleVueApp",
  setup() {
    return () =>
      h("main", { class: "min-h-screen bg-background px-6 py-16 text-foreground" }, [
        h("div", { class: "mx-auto flex w-full max-w-2xl flex-col gap-6" }, [
          h(Card, null, {
            default: () => [
              h(CardHeader, null, {
                default: () => [
                  h(CardTitle, null, { default: () => "Vue uses the shared CSS contract" }),
                  h("p", { class: "abc-text-dim" }, "The Vue package now renders the same semantic selectors as the HTML and React examples."),
                ],
              }),
              h(CardContent, null, {
                default: () => [
                  h(Input, { placeholder: "Type into the shared input component" }),
                  h("div", { class: "card-actions" }, [
                    h(Button, { variant: "outline" }, { default: () => "Cancel" }),
                    h(Button, { variant: "secondary" }, { default: () => "Save draft" }),
                    h(Button, null, { default: () => "Publish" }),
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

