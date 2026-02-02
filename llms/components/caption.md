# Caption

Caption은 설명 텍스트와 아이콘을 함께 표시하는 캡션 컴포넌트입니다. Form 필드의 도움말이나 에러 메시지에 주로 사용됩니다.

## Props

### Caption

- `variant?: 'default' | 'success' | 'info' | 'error'` - 스타일 variant (기본값: `'default'`)
- `icon?: IconNameType` - 커스텀 아이콘 (기본값: variant에 따라 자동 설정)
- `asChild?: boolean` - 자식 요소로 렌더링
- `className?: string` - 커스텀 CSS 클래스
- 모든 HTMLParagraphElement props 지원

## 기본 사용법

```tsx
import { Caption } from "@line/abc-def-react";

function Example() {
  return <Caption>This is a helpful message</Caption>;
}
```

## 사용 예시

### 기본 캡션

```tsx
<Caption>This is a default caption message.</Caption>
```

### Variant 스타일

```tsx
<div className="space-y-2">
  <Caption variant="default">Default information message</Caption>

  <Caption variant="success">Success! Your changes have been saved.</Caption>

  <Caption variant="info">Additional information about this field</Caption>

  <Caption variant="error">This field is required</Caption>
</div>
```

### Form 필드와 함께

```tsx
function FormField() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <TextInput
        id="email"
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={!!error}
      />
      {error ? (
        <Caption variant="error">{error}</Caption>
      ) : (
        <Caption>Please enter a valid email address</Caption>
      )}
    </div>
  );
}
```

### 커스텀 아이콘

```tsx
<Caption icon="RiLightbulbLine">
  Here's a helpful tip for you
</Caption>

<Caption variant="success" icon="RiCheckDoubleLine">
  Successfully verified
</Caption>
```

### React Hook Form과 함께

```tsx
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@line/abc-def-react";

function RegistrationForm() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormField
          control={form.control}
          name="username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <TextInput {...field} error={!!fieldState.error} />
              </FormControl>
              {fieldState.error ? (
                <Caption variant="error">{fieldState.error.message}</Caption>
              ) : (
                <Caption>Choose a unique username</Caption>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### 성공 메시지

```tsx
function SuccessMessage() {
  return (
    <Caption variant="success">
      Your profile has been updated successfully!
    </Caption>
  );
}
```

### 정보 메시지

```tsx
function InfoMessage() {
  return (
    <Caption variant="info">
      This action cannot be undone. Please proceed with caution.
    </Caption>
  );
}
```

### 에러 메시지

```tsx
function ErrorMessage() {
  return (
    <Caption variant="error">Unable to save changes. Please try again.</Caption>
  );
}
```

### 비밀번호 강도 표시

```tsx
function PasswordStrength({ password }: { password: string }) {
  const getStrength = (pwd: string) => {
    if (pwd.length < 6) return { variant: "error", text: "Too weak" };
    if (pwd.length < 10) return { variant: "default", text: "Moderate" };
    return { variant: "success", text: "Strong" };
  };

  const strength = getStrength(password);

  return (
    <Caption variant={strength.variant}>
      Password strength: {strength.text}
    </Caption>
  );
}
```

### 파일 업로드 안내

```tsx
function FileUploadInfo() {
  return (
    <div className="space-y-2">
      <input type="file" accept="image/*" />
      <Caption variant="info">
        Maximum file size: 5MB. Accepted formats: JPG, PNG, GIF
      </Caption>
    </div>
  );
}
```

### 조건부 표시

```tsx
function ConditionalCaption({ showSuccess }: { showSuccess: boolean }) {
  return (
    <>
      {showSuccess ? (
        <Caption variant="success">Changes saved successfully</Caption>
      ) : (
        <Caption>Make changes and click save</Caption>
      )}
    </>
  );
}
```

### 여러 캡션

```tsx
function MultipleHelpers() {
  return (
    <div className="space-y-2">
      <TextInput placeholder="Enter your password" type="password" />
      <Caption>Password must include:</Caption>
      <ul className="ml-6 space-y-1">
        <li>
          <Caption variant="info">At least 8 characters</Caption>
        </li>
        <li>
          <Caption variant="info">One uppercase letter</Caption>
        </li>
        <li>
          <Caption variant="info">One number</Caption>
        </li>
      </ul>
    </div>
  );
}
```

### Select 필드와 함께

```tsx
function SelectWithCaption() {
  return (
    <div className="space-y-2">
      <Label>Country</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">South Korea</SelectItem>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="jp">Japan</SelectItem>
        </SelectContent>
      </Select>
      <Caption>Select your country of residence</Caption>
    </div>
  );
}
```

### Checkbox와 함께

```tsx
function CheckboxWithCaption() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
      <Caption variant="info">
        Please read our terms and conditions carefully before agreeing
      </Caption>
    </div>
  );
}
```

### 동적 에러 메시지

```tsx
function DynamicError({ errors }: { errors: string[] }) {
  if (errors.length === 0) return null;

  return (
    <div className="space-y-1">
      {errors.map((error, index) => (
        <Caption key={index} variant="error">
          {error}
        </Caption>
      ))}
    </div>
  );
}
```

### asChild 사용

```tsx
function CustomCaption() {
  return (
    <Caption asChild>
      <div className="flex items-center gap-2">
        <span>Custom caption content</span>
        <a href="#" className="underline">
          Learn more
        </a>
      </div>
    </Caption>
  );
}
```

## Design Tokens

| Token                 | Value                  | Description            |
| --------------------- | ---------------------- | ---------------------- |
| 기본 아이콘 (default) | `RiInformationLine`    | Default variant 아이콘 |
| 성공 아이콘 (success) | `RiCheckboxCircleLine` | Success variant 아이콘 |
| 정보 아이콘 (info)    | `RiInformationLine`    | Info variant 아이콘    |
| 에러 아이콘 (error)   | `RiErrorWarningLine`   | Error variant 아이콘   |

## 접근성

- 아이콘과 텍스트가 함께 표시되어 시각적으로 명확함
- 에러 메시지는 data-error 속성으로 표시
- 스크린 리더가 아이콘과 텍스트를 순서대로 읽음
- 폼 필드와 연결 시 적절한 ARIA 속성 사용 권장

## 사용 시 주의사항

- variant에 따라 기본 아이콘이 자동으로 설정됩니다
- 커스텀 아이콘을 사용하려면 icon prop을 전달하세요
- asChild를 사용하면 자식 요소가 Caption 스타일을 상속받습니다
- 에러 메시지는 항상 variant="error"를 사용하세요
- FormMessage 컴포넌트와 함께 사용할 수 있습니다
- 아이콘 크기는 테마의 size 설정을 따릅니다
- 긴 메시지는 자동으로 줄바꿈됩니다

## 관련 컴포넌트

- [Label](./label.md) - 폼 레이블
- [Form](./form.md) - 폼 컨테이너
- [TextInput](./text-input.md) - 텍스트 입력
- [Icon](./icon.md) - 아이콘
