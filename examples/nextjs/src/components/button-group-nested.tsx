import { AudioLinesIcon, PlusIcon } from "lucide-react";

import { Button } from "@line/abc-def-react/button";
import { ButtonGroup } from "@line/abc-def-react/button-group";
import { Input } from "@line/abc-def-react/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@line/abc-def-react/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@line/abc-def-react/tooltip";

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupAddon align="inline-end">
                <AudioLinesIcon />
              </InputGroupAddon>
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}
