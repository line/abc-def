import { Field, FieldLabel } from "@line/abc-def-react/field";
import { Switch } from "@line/abc-def-react/switch";

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  );
}
