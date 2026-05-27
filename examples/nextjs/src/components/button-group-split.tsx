import { IconPlus } from "@tabler/icons-react";

import { Button } from "@line/abc-def-react/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@line/abc-def-react/button-group";

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  );
}
