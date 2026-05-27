import { Button } from "@line/abc-def-react/button";
import { ButtonGroup } from "@line/abc-def-react/button-group";
import { Field, FieldLabel } from "@line/abc-def-react/field";
import { Input } from "@line/abc-def-react/input";

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  );
}
