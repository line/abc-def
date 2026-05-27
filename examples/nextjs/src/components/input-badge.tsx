import { Badge } from "@line/abc-def-react/badge";
import { Field, FieldLabel } from "@line/abc-def-react/field";
import { Input } from "@line/abc-def-react/input";

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge">
        Webhook URL{" "}
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  );
}
