import {
  Button,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@abc-def/react";

export function InputBasic() {
  return <Input placeholder="Enter text" />;
}

export function InputField() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  );
}

export function InputFieldgroup() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          We&apos;ll send updates to this address.
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
  );
}

export function InputDisabled() {
  return (
    <Field data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="email"
        placeholder="Email"
        disabled
      />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
  );
}
