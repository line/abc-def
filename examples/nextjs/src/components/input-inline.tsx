import { Button } from "@line/abc-def-react/button";
import { Field } from "@line/abc-def-react/field";
import { Input } from "@line/abc-def-react/input";

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}
