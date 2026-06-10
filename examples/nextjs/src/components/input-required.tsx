import { Field, FieldDescription, FieldLabel } from "@line/abc-def-react/field";
import { Input } from "@line/abc-def-react/input";

export function InputRequired() {
  return (
    <Field>
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
      />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
  );
}
