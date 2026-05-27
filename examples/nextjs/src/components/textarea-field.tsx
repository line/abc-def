import { Field, FieldDescription, FieldLabel } from "@line/abc-def-react/field";
import { Textarea } from "@line/abc-def-react/textarea";

export function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  );
}
