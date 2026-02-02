# Label

Label은 폼 입력 요소에 레이블을 제공하는 컴포넌트입니다. Radix UI의 Label을 기반으로 구현되었습니다.

## Props

### Label

- `htmlFor?: string` - 연결할 입력 요소의 id
- `asChild?: boolean` - 자식 요소를 직접 렌더링
- 표준 label 속성

## 기본 사용법

```tsx
import { Label, TextInput } from "@line/abc-def-react";

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <TextInput id="username" placeholder="Enter username" />
    </div>
  );
}
```

## 사용 예시

### 기본 Label

```tsx
<Label htmlFor="email">Email Address</Label>
<TextInput id="email" type="email" />
```

### Checkbox와 함께

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">I agree to the terms and conditions</Label>
</div>
```

### Radio와 함께

```tsx
<RadioGroup>
  <div className="flex items-center gap-2">
    <RadioItem id="option1" value="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioItem id="option2" value="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>
```

### Switch와 함께

```tsx
<div className="flex items-center justify-between">
  <Label htmlFor="notifications">Enable Notifications</Label>
  <Switch id="notifications" />
</div>
```

### 필수 표시

```tsx
<Label htmlFor="required-field">
  Full Name <span className="text-red-500">*</span>
</Label>
<TextInput id="required-field" required />
```

### 설명과 함께

```tsx
<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <TextInput id="password" type="password" />
  <Caption>Must be at least 8 characters</Caption>
</div>
```

### Form과 함께

```tsx
<FormField
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <TextInput type="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### 인라인 레이아웃

```tsx
<div className="flex items-center gap-4">
  <Label htmlFor="age" className="w-24">
    Age
  </Label>
  <TextInput id="age" type="number" />
</div>
```

### 커스텀 스타일

```tsx
<Label htmlFor="title" className="text-lg font-bold">
  Article Title
</Label>
<TextInput id="title" />
```

### 비활성화 상태

```tsx
<Label htmlFor="disabled-input" className="opacity-50">
  Disabled Field
</Label>
<TextInput id="disabled-input" disabled />
```

### 여러 입력과 연결

```tsx
<fieldset>
  <legend className="label">Contact Information</legend>
  <div className="space-y-4">
    <div>
      <Label htmlFor="name">Name</Label>
      <TextInput id="name" />
    </div>
    <div>
      <Label htmlFor="email">Email</Label>
      <TextInput id="email" type="email" />
    </div>
  </div>
</fieldset>
```

### Textarea와 함께

```tsx
<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" rows={5} />
</div>
```

### Select와 함께

```tsx
<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="kr">South Korea</SelectItem>
    </SelectContent>
  </Select>
</div>
```

## Design Tokens

Label은 별도의 디자인 토큰을 정의하지 않으며, 일반적인 텍스트 색상을 사용합니다.

## 접근성

- htmlFor 속성을 사용하여 입력 요소와 명시적으로 연결하세요
- Label을 클릭하면 연결된 입력 요소에 포커스가 이동합니다
- 스크린 리더가 입력 요소의 목적을 이해할 수 있도록 합니다
- 필수 필드는 시각적 표시와 함께 aria-required를 사용하세요

## 사용 시 주의사항

- Label의 htmlFor와 입력 요소의 id를 반드시 연결하세요
- FormLabel을 사용하면 자동으로 연결이 처리됩니다
- 복잡한 레이아웃에서는 aria-labelledby를 사용할 수 있습니다
- Label은 Radix UI Label을 기반으로 하므로 asChild를 지원합니다
- 에러 상태에서는 FormLabel이 자동으로 data-error 속성을 추가합니다

## 관련 컴포넌트

- [FormLabel](./form.md#formlabel) - Form 전용 레이블
- [TextInput](./text-input.md) - 텍스트 입력
- [Textarea](./textarea.md) - 여러 줄 텍스트
- [Checkbox](./checkbox.md) - 체크박스
- [RadioGroup](./radio-group.md) - 라디오 그룹
- [Select](./select.md) - 선택 드롭다운
- [Switch](./switch.md) - 토글 스위치
