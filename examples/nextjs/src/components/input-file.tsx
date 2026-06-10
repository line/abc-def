import { Field, FieldDescription, FieldLabel } from "@line/abc-def-react/field";
import { Input } from "@line/abc-def-react/input";

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  );
}
