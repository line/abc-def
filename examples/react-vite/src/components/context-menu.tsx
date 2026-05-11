import { useState } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@abc-def/react";

export function ContextMenuBasic() {
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [panel, setPanel] = useState("comments");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="text-muted-foreground flex h-32 w-full max-w-md items-center justify-center rounded-2xl border border-dashed text-sm">
        Right click this preview panel
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel inset>Editor actions</ContextMenuLabel>
        <ContextMenuItem inset>
          Rename
          <ContextMenuShortcut>F2</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Duplicate
          <ContextMenuShortcut>Cmd+D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showLineNumbers}
          onCheckedChange={setShowLineNumbers}
        >
          Show line numbers
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Open panel</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuRadioGroup value={panel} onValueChange={setPanel}>
              <ContextMenuRadioItem value="comments">
                Comments
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="history">History</ContextMenuRadioItem>
              <ContextMenuRadioItem value="reviewers">
                Reviewers
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-24 w-full max-w-sm items-center justify-center rounded-2xl border bg-muted/30 text-sm">
        Secondary surface
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuItem>Copy link</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete section</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
