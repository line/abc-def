import { defineComponent, h, type SetupContext } from "vue";
import { cn } from "../lib/cn";

export const Button = defineComponent({
  name: "AbcButton",
  props: {
    variant: {
      type: String,
      default: "default",
    },
  },
  setup(props, { attrs, slots }: SetupContext) {
    return () =>
      h(
        "button",
        {
          ...attrs,
          class: cn(
            "inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            props.variant === "secondary" && "bg-muted text-foreground hover:bg-muted/80",
            props.variant === "outline" && "border-border bg-background text-foreground hover:bg-muted",
            props.variant === "default" && "bg-primary text-primary-foreground hover:opacity-90",
            attrs.class as string,
          ),
        },
        slots.default?.(),
      );
  },
});
