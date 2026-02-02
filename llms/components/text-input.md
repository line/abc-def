# Text Input

TextInput은 단일 줄 텍스트 입력을 위한 컴포넌트입니다. 다양한 타입과 버튼을 지원합니다.

## Props

### TextInput

- `type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'number'` - 입력 타입 (기본값: `'text'`)
- `size?: 'small' | 'medium' | 'large'` - 크기
- `radius?: 'small' | 'medium' | 'large'` - 모서리 둥글기
- `disabled?: boolean` - 비활성화 상태
- `placeholder?: string` - 플레이스홀더 텍스트
- 표준 HTML input 속성 모두 지원

### TextInputBox

- 표준 div 속성 (TextInput을 감싸는 컨테이너)

### TextInputClearButton

- `size?: 'small' | 'medium' | 'large'` - 크기
- 표준 button 속성

### TextInputEyeButton

- `size?: 'small' | 'medium' | 'large'` - 크기
- `onChangeVisibility?: (visible: boolean) => void` - 가시성 변경 핸들러
- 표준 button 속성

## 기본 사용법

```tsx
import {
  Caption,
  Label,
  TextInput,
  TextInputBox,
  TextInputClearButton,
} from "@line/abc-def-react";

function Example() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <TextInputBox>
        <TextInput id="username" ref={inputRef} placeholder="Enter username" />
        <TextInputClearButton onClick={handleClear} />
      </TextInputBox>
      <Caption>Enter your username</Caption>
    </div>
  );
}
```

## 사용 예시

### 기본 입력

```tsx
<TextInputBox>
  <TextInput placeholder="Enter text" />
</TextInputBox>
```

### 아이콘과 함께

```tsx
<TextInputBox>
  <Icon name="RiUser3Fill" />
  <TextInput placeholder="Username" />
</TextInputBox>
```

### Clear 버튼

```tsx
function ClearExample() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <TextInputBox>
      <TextInput ref={inputRef} placeholder="Type something" />
      <TextInputClearButton onClick={handleClear} />
    </TextInputBox>
  );
}
```

### 비밀번호 입력

```tsx
function PasswordExample() {
  const [type, setType] = React.useState<"password" | "text">("password");

  return (
    <TextInputBox>
      <Icon name="RiLockFill" />
      <TextInput type={type} placeholder="Enter password" />
      <TextInputEyeButton
        onChangeVisibility={(visible) => setType(visible ? "text" : "password")}
      />
    </TextInputBox>
  );
}
```

### 이메일 입력

```tsx
<TextInputBox>
  <Icon name="RiMailFill" />
  <TextInput type="email" placeholder="email@example.com" />
</TextInputBox>
```

### 검색 입력

```tsx
<TextInputBox>
  <Icon name="RiSearchLine" />
  <TextInput type="search" placeholder="Search..." />
</TextInputBox>
```

### 전화번호 입력

```tsx
<TextInputBox>
  <Icon name="RiPhoneFill" />
  <TextInput type="tel" placeholder="010-1234-5678" />
</TextInputBox>
```

### 숫자 입력

```tsx
<TextInputBox>
  <TextInput type="number" placeholder="Enter number" min={0} max={100} />
</TextInputBox>
```

### 크기 변형

```tsx
<TextInputBox>
  <TextInput size="small" placeholder="Small" />
</TextInputBox>

<TextInputBox>
  <TextInput size="medium" placeholder="Medium" />
</TextInputBox>

<TextInputBox>
  <TextInput size="large" placeholder="Large" />
</TextInputBox>
```

### 모서리 둥글기

```tsx
<TextInputBox>
  <TextInput radius="small" placeholder="Small radius" />
</TextInputBox>

<TextInputBox>
  <TextInput radius="medium" placeholder="Medium radius" />
</TextInputBox>

<TextInputBox>
  <TextInput radius="large" placeholder="Large radius" />
</TextInputBox>
```

### 비활성화 상태

```tsx
<TextInputBox>
  <TextInput disabled placeholder="Disabled input" />
</TextInputBox>
```

### 에러 상태 (with Form)

```tsx
<FormField
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <TextInputBox>
          <Icon name="RiMailFill" />
          <TextInput type="email" placeholder="email@example.com" {...field} />
        </TextInputBox>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### 제어 모드

```tsx
function ControlledExample() {
  const [value, setValue] = React.useState("");

  return (
    <TextInputBox>
      <TextInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled input"
      />
      <TextInputClearButton onClick={() => setValue("")} />
    </TextInputBox>
  );
}
```

### 여러 버튼 조합

```tsx
function MultiButtonExample() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [type, setType] = React.useState<"password" | "text">("password");

  return (
    <TextInputBox>
      <Icon name="RiLockFill" />
      <TextInput ref={inputRef} type={type} placeholder="Password" />
      <TextInputClearButton
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }}
      />
      <TextInputEyeButton
        onChangeVisibility={(visible) => setType(visible ? "text" : "password")}
      />
    </TextInputBox>
  );
}
```

### Label과 Caption

```tsx
<div className="space-y-2">
  <Label htmlFor="name">Full Name</Label>
  <TextInputBox>
    <Icon name="RiUser3Fill" />
    <TextInput id="name" placeholder="John Doe" />
  </TextInputBox>
  <Caption>Enter your full name as it appears on ID</Caption>
</div>
```

## Design Tokens

| Token                        | Value                                        | Description           |
| ---------------------------- | -------------------------------------------- | --------------------- |
| `--text-input-fg`            | `var(--fg-neutral-tertiary)`                 | 기본 텍스트 색상      |
| `--text-input-fg-typing`     | `var(--fg-neutral-primary)`                  | 입력 중 텍스트 색상   |
| `--text-input-fg-filled`     | `var(--fg-neutral-primary)`                  | 입력 완료 텍스트 색상 |
| `--text-input-fg-error`      | `var(--fg-neutral-tertiary)`                 | 에러 텍스트 색상      |
| `--text-input-border`        | `var(--border-neutral-tertiary)`             | 기본 테두리 색상      |
| `--text-input-border-typing` | `var(--tint, var(--border-neutral-primary))` | 입력 중 테두리 색상   |
| `--text-input-border-filled` | `var(--border-neutral-tertiary)`             | 입력 완료 테두리 색상 |
| `--text-input-border-error`  | `var(--border-tint-red)`                     | 에러 테두리 색상      |
| `--text-input-bg`            | `var(--bg-neutral-primary)`                  | 기본 배경 색상        |
| `--text-input-bg-typing`     | `var(--bg-neutral-tertiary)`                 | 입력 중 배경 색상     |
| `--text-input-bg-filled`     | `var(--bg-neutral-primary)`                  | 입력 완료 배경 색상   |
| `--text-input-bg-error`      | `var(--bg-neutral-primary)`                  | 에러 배경 색상        |

## 접근성

- Label의 htmlFor와 TextInput의 id를 연결하세요
- aria-label 또는 aria-labelledby를 통해 레이블 제공
- 에러 상태는 aria-invalid와 aria-describedby로 전달
- TextInputClearButton과 TextInputEyeButton은 적절한 aria-label 제공
- 키보드 네비게이션 완벽 지원

## 사용 시 주의사항

- TextInputBox는 TextInput과 아이콘, 버튼을 함께 배치하는 컨테이너입니다
- TextInputClearButton은 값이 있을 때만 표시됩니다 (.show-only-on-focus-and-has-value)
- TextInputEyeButton은 password 타입에서 사용하며, 자동으로 눈 아이콘을 토글합니다
- Form 컴포넌트와 함께 사용하면 에러 처리가 자동화됩니다
- spellCheck는 기본적으로 false로 설정되어 있습니다
- 테마의 size와 radius를 상속받으며, 개별 설정으로 오버라이드할 수 있습니다

## 관련 컴포넌트

- [Textarea](./textarea.md) - 여러 줄 텍스트 입력
- [Form](./form.md) - 폼 유효성 검증
- [Label](./label.md) - 입력 레이블
- [Caption](../foundation/caption.md) - 설명 텍스트
