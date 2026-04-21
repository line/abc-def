import { defineComponent, h, type SetupContext } from "vue";
import type { ClassValue } from "clsx";
import { cn } from "../lib/cn";

export const Card = defineComponent({
  name: "AbcCard",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "div",
        {
          ...attrs,
          class: cn(
            "rounded-lg border border-border bg-background p-6 shadow-sm",
            attrs.class as ClassValue,
          ),
        },
        slots.default?.(),
      );
  },
});

export const CardHeader = defineComponent({
  name: "AbcCardHeader",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "div",
        { ...attrs, class: cn("mb-4 flex flex-col gap-1.5", attrs.class as ClassValue) },
        slots.default?.(),
      );
  },
});

export const CardTitle = defineComponent({
  name: "AbcCardTitle",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "h3",
        { ...attrs, class: cn("text-lg font-semibold leading-none", attrs.class as ClassValue) },
        slots.default?.(),
      );
  },
});

export const CardContent = defineComponent({
  name: "AbcCardContent",
  setup(_props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "div",
        { ...attrs, class: cn("text-sm text-muted-foreground", attrs.class as ClassValue) },
        slots.default?.(),
      );
  },
});
