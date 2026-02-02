# Toggle Group

Toggle Group은 여러 개의 토글 버튼을 그룹화하여 단일 또는 다중 선택을 관리하는 컴포넌트입니다. Radix UI의 Toggle Group을 기반으로 구현되었습니다.

## Props

### ToggleGroup

- `type: 'single' | 'multiple'` - 선택 모드 (필수)
- `value?: string` - 선택된 값 (single 모드)
- `defaultValue?: string` - 초기 선택 값 (single 모드)
- `onValueChange?: (value: string) => void` - 값 변경 핸들러 (single 모드)
- `value?: string[]` - 선택된 값들 (multiple 모드)
- `defaultValue?: string[]` - 초기 선택 값들 (multiple 모드)
- `onValueChange?: (value: string[]) => void` - 값 변경 핸들러 (multiple 모드)
- `size?: 'small' | 'medium' | 'large'` - 크기
- `radius?: 'small' | 'medium' | 'large'` - 모서리 둥글기
- `disabled?: boolean` - 전체 그룹 비활성화

### ToggleGroupItem

- `value: string` - 아이템 값 (필수)
- `disabled?: boolean` - 개별 아이템 비활성화
- `size?: 'small' | 'medium' | 'large'` - 크기 (그룹 설정 오버라이드)
- `radius?: 'small' | 'medium' | 'large'` - 모서리 둥글기 (그룹 설정 오버라이드)

## 기본 사용법

```tsx
import { ToggleGroup, ToggleGroupItem } from "@line/abc-def-react";

function Example() {
  const [value, setValue] = React.useState("");

  return (
    <ToggleGroup type="single" value={value} onValueChange={setValue}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}
```

## 사용 예시

### Single 모드 (단일 선택)

```tsx
function SingleExample() {
  const [alignment, setAlignment] = React.useState("left");

  return (
    <ToggleGroup type="single" value={alignment} onValueChange={setAlignment}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### Multiple 모드 (다중 선택)

```tsx
function MultipleExample() {
  const [formats, setFormats] = React.useState<string[]>([]);

  return (
    <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### 아이콘 버튼

```tsx
<ToggleGroup type="single">
  <ToggleGroupItem value="left">
    <Icon name="RiAlignLeft" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <Icon name="RiAlignCenter" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <Icon name="RiAlignRight" />
  </ToggleGroupItem>
</ToggleGroup>
```

### 텍스트와 아이콘 조합

```tsx
<ToggleGroup type="single">
  <ToggleGroupItem value="bold">
    <Icon name="RiBold" />
    Bold
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Icon name="RiItalic" />
    Italic
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Icon name="RiUnderline" />
    Underline
  </ToggleGroupItem>
</ToggleGroup>
```

### 크기 변형

```tsx
<ToggleGroup type="single" size="small">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="medium">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="large">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

### 모서리 둥글기

```tsx
<ToggleGroup type="single" radius="small">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" radius="large">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>
```

### 비활성화 상태

```tsx
// 전체 그룹 비활성화
<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>

// 개별 아이템 비활성화
<ToggleGroup type="single">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2" disabled>2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

### 텍스트 정렬 도구

```tsx
function TextAlignmentTool() {
  const [align, setAlign] = React.useState("left");

  return (
    <ToggleGroup type="single" value={align} onValueChange={setAlign}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <Icon name="RiAlignLeft" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <Icon name="RiAlignCenter" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <Icon name="RiAlignRight" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <Icon name="RiAlignJustify" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### 텍스트 포맷팅 도구

```tsx
function TextFormattingTool() {
  const [formats, setFormats] = React.useState<string[]>([]);

  return (
    <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Icon name="RiBold" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Icon name="RiItalic" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Icon name="RiUnderline" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
        <Icon name="RiStrikethrough" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### 비제어 모드

```tsx
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

### 뷰 모드 전환

```tsx
function ViewModeSwitcher() {
  const [view, setView] = React.useState("grid");

  return (
    <ToggleGroup type="single" value={view} onValueChange={setView}>
      <ToggleGroupItem value="list">
        <Icon name="RiListUnordered" />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <Icon name="RiGridFill" />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="table">
        <Icon name="RiTable2" />
        Table
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
```

## Design Tokens

| Token                           | Value                                    | Description         |
| ------------------------------- | ---------------------------------------- | ------------------- |
| `--toggle-group-fg`             | `var(--fg-neutral-primary)`              | 기본 텍스트 색상    |
| `--toggle-group-fg-hover`       | `var(--fg-neutral-primary)`              | 호버 시 텍스트 색상 |
| `--toggle-group-fg-pressed`     | `var(--tint, var(--fg-neutral-primary))` | 선택된 텍스트 색상  |
| `--toggle-group-border`         | `var(--border-neutral-tertiary)`         | 기본 테두리 색상    |
| `--toggle-group-border-hover`   | `var(--border-neutral-tertiary)`         | 호버 시 테두리 색상 |
| `--toggle-group-border-pressed` | `var(--border-neutral-tertiary)`         | 선택된 테두리 색상  |
| `--toggle-group-bg`             | `var(--bg-neutral-primary)`              | 기본 배경 색상      |
| `--toggle-group-bg-hover`       | `var(--bg-neutral-tertiary)`             | 호버 시 배경 색상   |
| `--toggle-group-bg-pressed`     | `var(--bg-neutral-tertiary)`             | 선택된 배경 색상    |

## 접근성

- **키보드 네비게이션**
  - `Tab`: 그룹으로 포커스 이동
  - `←`/`→`: 아이템 간 이동
  - `Space`/`Enter`: 아이템 토글
- 각 아이템에 명확한 aria-label 제공 권장 (특히 아이콘만 사용할 때)
- 선택 상태는 aria-pressed로 자동 전달
- 비활성화 상태는 aria-disabled로 전달

## 사용 시 주의사항

- type은 'single' 또는 'multiple'로 설정해야 하며, 이에 따라 value와 onValueChange의 타입이 달라집니다
- single 모드에서는 value가 string, multiple 모드에서는 string[] 타입입니다
- ToggleGroupItem의 value는 고유해야 합니다
- 테마의 size와 radius를 상속받으며, 개별 설정으로 오버라이드할 수 있습니다
- 아이콘만 사용하는 경우 접근성을 위해 aria-label을 제공하세요
- multiple 모드에서는 선택을 해제할 수 있지만, single 모드에서는 선택 해제가 불가능합니다

## 관련 컴포넌트

- [Button](./button.md) - 단일 버튼
- [Radio Group](./radio-group.md) - 라디오 선택
- [Checkbox](./checkbox.md) - 체크박스
- [Tabs](./tabs.md) - 탭 네비게이션
