import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@abc-def/react";

export function NativeSelectBasic() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="timezone">Timezone</FieldLabel>
      <NativeSelect id="timezone" defaultValue="kst">
        <NativeSelectOptGroup label="Asia">
          <NativeSelectOption value="kst">Korea Standard Time</NativeSelectOption>
          <NativeSelectOption value="jst">Japan Standard Time</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Europe">
          <NativeSelectOption value="cet">
            Central European Time
          </NativeSelectOption>
          <NativeSelectOption value="gmt">Greenwich Mean Time</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </Field>
  );
}

export function NativeSelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-xs">
      <FieldLabel htmlFor="visibility">Visibility</FieldLabel>
      <NativeSelect id="visibility" aria-invalid defaultValue="">
        <NativeSelectOption value="" disabled>
          Select visibility
        </NativeSelectOption>
        <NativeSelectOption value="private">Private</NativeSelectOption>
        <NativeSelectOption value="team">Team</NativeSelectOption>
        <NativeSelectOption value="public">Public</NativeSelectOption>
      </NativeSelect>
      <FieldDescription>
        Public boards are visible to every workspace member.
      </FieldDescription>
      <FieldError>Choose a visibility level.</FieldError>
    </Field>
  );
}
