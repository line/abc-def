import { defineComponent, h, type SetupContext } from "vue";
import { cn } from "../lib/cn";

export const Input = defineComponent({
  name: "AbcInput",
  setup(_props, { attrs }: SetupContext) {
    return () =>
      h("input", {
        ...attrs,
        class: cn(
          "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          attrs.class as string,
        ),
      });
  },
});
