# Textarea

Textarea는 여러 줄의 텍스트를 입력받는 컴포넌트입니다.

## Props

### Textarea

- `rows?: number` - 행 수
- `cols?: number` - 열 수
- `placeholder?: string` - 플레이스홀더 텍스트
- `disabled?: boolean` - 비활성화 상태
- `readOnly?: boolean` - 읽기 전용
- `maxLength?: number` - 최대 글자 수
- `resize?: 'none' | 'both' | 'horizontal' | 'vertical'` - 크기 조절 옵션 (CSS로 설정)
- 표준 HTML textarea 속성 모두 지원

## 기본 사용법

```tsx
import { Caption, Label, Textarea } from "@line/abc-def-react";

function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Enter your message" rows={4} />
      <Caption>Maximum 500 characters</Caption>
    </div>
  );
}
```

## 사용 예시

### 기본 Textarea

```tsx
<Textarea placeholder="Enter text here..." />
```

### 행 수 지정

```tsx
<Textarea rows={6} placeholder="Tall textarea" />
```

### Label과 함께

```tsx
<div className="space-y-2">
  <Label htmlFor="description">Description</Label>
  <Textarea id="description" placeholder="Describe your project" rows={5} />
</div>
```

### 제어 모드

```tsx
function ControlledExample() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      />
      <Caption>{value.length} characters</Caption>
    </div>
  );
}
```

### 최대 글자 수 제한

```tsx
function MaxLengthExample() {
  const [value, setValue] = React.useState("");
  const maxLength = 200;

  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Maximum 200 characters"
        rows={4}
      />
      <Caption>
        {value.length} / {maxLength}
      </Caption>
    </div>
  );
}
```

### 비활성화 상태

```tsx
<Textarea
  disabled
  placeholder="Disabled textarea"
  value="This textarea is disabled"
/>
```

### 읽기 전용

```tsx
<Textarea readOnly value="This content is read-only" rows={3} />
```

### Form과 함께 사용

```tsx
<FormField
  name="bio"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Bio</FormLabel>
      <FormControl>
        <Textarea placeholder="Tell us about yourself" rows={5} {...field} />
      </FormControl>
      <FormCaption>Brief description for your profile</FormCaption>
      <FormMessage />
    </FormItem>
  )}
/>
```

### 자동 높이 조절

```tsx
function AutoResizeExample() {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  return (
    <Textarea
      ref={textareaRef}
      onInput={handleInput}
      rows={1}
      placeholder="Type to expand..."
      className="resize-none overflow-hidden"
    />
  );
}
```

### 커스텀 스타일

```tsx
<Textarea placeholder="Custom styled" className="min-h-[120px] resize-none" />
```

### 긴 텍스트

```tsx
<Textarea rows={10} placeholder="Long form content..." className="resize-y" />
```

### 에러 상태 (with Form)

```tsx
function ErrorExample() {
  const form = useForm({
    resolver: zodResolver(
      z.object({
        comment: z.string().min(10, {
          message: "Comment must be at least 10 characters",
        }),
      }),
    ),
  });

  return (
    <Form {...form}>
      <FormField
        name="comment"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Comment</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter your comment" rows={4} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
```

### 리치 텍스트 편집기 플레이스홀더

```tsx
<div className="space-y-2">
  <Label>Notes</Label>
  <Textarea
    placeholder="# Title&#10;&#10;Your notes here..."
    rows={8}
    className="font-mono"
  />
  <Caption>Supports Markdown syntax</Caption>
</div>
```

## Design Tokens

| Token                      | Value                                        | Description           |
| -------------------------- | -------------------------------------------- | --------------------- |
| `--textarea-fg`            | `var(--fg-neutral-tertiary)`                 | 기본 텍스트 색상      |
| `--textarea-fg-typing`     | `var(--fg-neutral-primary)`                  | 입력 중 텍스트 색상   |
| `--textarea-fg-filled`     | `var(--fg-neutral-primary)`                  | 입력 완료 텍스트 색상 |
| `--textarea-border`        | `var(--border-neutral-tertiary)`             | 기본 테두리 색상      |
| `--textarea-border-typing` | `var(--tint, var(--border-neutral-primary))` | 입력 중 테두리 색상   |
| `--textarea-border-filled` | `var(--border-neutral-tertiary)`             | 입력 완료 테두리 색상 |
| `--textarea-bg`            | `var(--bg-neutral-primary)`                  | 기본 배경 색상        |
| `--textarea-bg-typing`     | `var(--bg-neutral-primary)`                  | 입력 중 배경 색상     |
| `--textarea-bg-filled`     | `var(--bg-neutral-primary)`                  | 입력 완료 배경 색상   |

## 접근성

- Label의 htmlFor와 Textarea의 id를 연결하세요
- aria-label 또는 aria-labelledby를 통해 레이블 제공
- 에러 상태는 aria-invalid와 aria-describedby로 전달
- maxLength 제한이 있으면 사용자에게 알려주세요
- 키보드 네비게이션 완벽 지원

## 사용 시 주의사항

- 기본적으로 resize가 활성화되어 있으므로 필요에 따라 CSS로 제어하세요
- Form 컴포넌트와 함께 사용하면 에러 처리가 자동화됩니다
- 자동 높이 조절이 필요한 경우 onInput 이벤트를 활용하세요
- 긴 텍스트 입력이 예상되면 충분한 rows를 설정하세요
- maxLength를 사용할 때는 남은 글자 수를 표시하는 것이 좋습니다
- 읽기 전용과 비활성화 상태의 차이를 이해하고 적절히 사용하세요

## 관련 컴포넌트

- [TextInput](./text-input.md) - 단일 줄 텍스트 입력
- [Form](./form.md) - 폼 유효성 검증
- [Label](./label.md) - 입력 레이블
- [Caption](../foundation/caption.md) - 설명 텍스트
