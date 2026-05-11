import { useState } from "react";

import { Toggle } from "@abc-def/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

export function ToggleBasic() {
  return (
    <Toggle aria-label="Toggle bold">
      <BoldIcon className="size-4" />
    </Toggle>
  );
}

export function ToggleOutline() {
  return (
    <div className="flex gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon className="size-4" />
      </Toggle>
      <Toggle variant="outline" size="sm" aria-label="Toggle underline">
        <UnderlineIcon className="size-4" />
      </Toggle>
    </div>
  );
}

export function ToggleControlled() {
  const [pressed, setPressed] = useState(true);

  return (
    <div className="grid gap-3">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        variant="outline"
        aria-label="Pin section"
      >
        Pin release notes
      </Toggle>
      <p className="text-muted-foreground text-sm">
        Pinned: <span className="text-foreground font-medium">{pressed ? "Yes" : "No"}</span>
      </p>
    </div>
  );
}
