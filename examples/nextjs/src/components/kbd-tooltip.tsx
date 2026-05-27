import { Button } from "@line/abc-def-react/button";
import { ButtonGroup } from "@line/abc-def-react/button-group";
import { Kbd, KbdGroup } from "@line/abc-def-react/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@line/abc-def-react/tooltip";

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Save</Button>
          </TooltipTrigger>
          <TooltipContent>
            Save Changes <Kbd>S</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Print</Button>
          </TooltipTrigger>
          <TooltipContent>
            Print Document{" "}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
