import { Field, FieldLabel } from "@line/abc-def-react/field";
import { Textarea } from "@line/abc-def-react/textarea";

export function TextareaDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
      <Textarea
        id="textarea-disabled"
        placeholder="Type your message here."
        disabled
      />
    </Field>
  );
}
