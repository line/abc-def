import { Button } from "@line/abc-def-react/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@line/abc-def-react/button-group";

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  );
}
