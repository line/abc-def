import { SearchIcon } from "lucide-react";

import { Button } from "@line/abc-def-react/button";
import { ButtonGroup } from "@line/abc-def-react/button-group";
import { Input } from "@line/abc-def-react/input";

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}
