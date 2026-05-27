import { SaveIcon } from "lucide-react";

import { Button } from "@line/abc-def-react/button";
import { Kbd } from "@line/abc-def-react/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@line/abc-def-react/tooltip";

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <SaveIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Save Changes <Kbd>S</Kbd>
      </TooltipContent>
    </Tooltip>
  );
}
