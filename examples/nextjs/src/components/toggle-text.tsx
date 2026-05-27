import { ItalicIcon } from "lucide-react";

import { Toggle } from "@line/abc-def-react/toggle";

export function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}
