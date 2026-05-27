import { Button } from "@line/abc-def-react/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@line/abc-def-react/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
