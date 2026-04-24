import { Button } from "@abc-def/react";
import { Plus } from "lucide-react";

const VARIANTS = [
  "default",
  "destructive",
  "ghost",
  "link",
  "outline",
  "secondary",
] as const;
const SIZES = [
  "xs",
  "sm",
  "default",
  "lg",
  "icon-xs",
  "icon-sm",
  "icon",
  "icon-lg",
] as const;
const ROUNDED = ["default", "xs", "sm", "lg"] as const;

export default function App() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex gap-2">
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              {size.includes("icon") ? <Plus /> : "size - " + size}
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          {ROUNDED.map((rounded) => (
            <Button key={rounded} rounded={rounded}>
              rounded - {rounded}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
