# Tooltip

Tooltip은 요소 위에 마우스를 올렸을 때 간단한 설명을 표시하는 컴포넌트입니다. Radix UI의 Tooltip을 기반으로 구현되었습니다.

## Props

### TooltipProvider

- `delayDuration?: number` - Tooltip이 나타나기까지의 지연 시간 (밀리초, 기본값: `100`)
- `skipDelayDuration?: number` - 다른 Tooltip으로 이동 시 지연 건너뛰기 시간 (밀리초, 기본값: `300`)
- `disableHoverableContent?: boolean` - Tooltip 컨텐츠에 호버 비활성화

### Tooltip

- `open?: boolean` - Tooltip 열림/닫힘 상태 (제어 모드)
- `onOpenChange?: (open: boolean) => void` - 열림/닫힘 상태 변경 핸들러
- `defaultOpen?: boolean` - 초기 열림 상태 (비제어 모드)
- `delayDuration?: number` - 개별 Tooltip의 지연 시간

### TooltipTrigger

- `asChild?: boolean` - 자식 요소를 trigger로 사용 (기본값: `true`)

### TooltipContent

- `side?: 'top' | 'right' | 'bottom' | 'left'` - Tooltip 위치
- `sideOffset?: number` - 트리거와의 간격 (기본값: `4`)
- `align?: 'start' | 'center' | 'end'` - 정렬 방식 (기본값: `'center'`)
- `textAlign?: 'left' | 'center' | 'right'` - 텍스트 정렬 (기본값: `'center'`)
- `title?: React.ReactNode` - Tooltip 제목 (굵은 글씨로 표시)
- `avoidCollisions?: boolean` - 충돌 방지 (기본값: `true`)

## 기본 사용법

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@line/abc-def-react";

// App.tsx 등 최상위에 TooltipProvider 추가
function App() {
  return (
    <TooltipProvider>
      <YourApp />
    </TooltipProvider>
  );
}

// Tooltip 사용
function Example() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>This is a tooltip</TooltipContent>
    </Tooltip>
  );
}
```

## 사용 예시

### 기본 Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent>Simple tooltip content</TooltipContent>
</Tooltip>
```

### 제목과 함께

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">
      <Icon name="RiInformationLine" />
    </Button>
  </TooltipTrigger>
  <TooltipContent title="Information">
    This is additional information about the feature.
  </TooltipContent>
</Tooltip>
```

### 위치 설정

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">
    Appears on top
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Right</Button>
  </TooltipTrigger>
  <TooltipContent side="right">
    Appears on the right
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Bottom</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom">
    Appears on the bottom
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Left</Button>
  </TooltipTrigger>
  <TooltipContent side="left">
    Appears on the left
  </TooltipContent>
</Tooltip>
```

### 텍스트 정렬

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Left Align</Button>
  </TooltipTrigger>
  <TooltipContent textAlign="left">
    This text is left-aligned.
    Multiple lines are supported.
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Center Align</Button>
  </TooltipTrigger>
  <TooltipContent textAlign="center">
    This text is center-aligned.
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Right Align</Button>
  </TooltipTrigger>
  <TooltipContent textAlign="right">
    This text is right-aligned.
  </TooltipContent>
</Tooltip>
```

### 정렬 옵션

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Align Start</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom" align="start">
    Aligned to start
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Align Center</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom" align="center">
    Aligned to center
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button>Align End</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom" align="end">
    Aligned to end
  </TooltipContent>
</Tooltip>
```

### 지연 시간 설정

```tsx
// 전역 설정
<TooltipProvider delayDuration={500}>
  <App />
</TooltipProvider>

// 개별 Tooltip 설정
<Tooltip delayDuration={1000}>
  <TooltipTrigger asChild>
    <Button>Slow</Button>
  </TooltipTrigger>
  <TooltipContent>
    Appears after 1 second
  </TooltipContent>
</Tooltip>
```

### 제어 모드

```tsx
function ControlledExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Toggle Tooltip</Button>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button>Target</Button>
        </TooltipTrigger>
        <TooltipContent>Controlled tooltip</TooltipContent>
      </Tooltip>
    </div>
  );
}
```

### 아이콘 버튼

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="small">
      <Icon name="RiDeleteBinLine" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Delete item</TooltipContent>
</Tooltip>
```

### 긴 설명

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Details</Button>
  </TooltipTrigger>
  <TooltipContent title="Feature Details" textAlign="left" className="max-w-xs">
    This feature allows you to perform multiple actions at once. It supports
    batch operations and can handle large datasets efficiently.
  </TooltipContent>
</Tooltip>
```

### 비활성화된 요소

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <span tabIndex={0}>
      <Button disabled>Disabled Button</Button>
    </span>
  </TooltipTrigger>
  <TooltipContent>This action is currently unavailable</TooltipContent>
</Tooltip>
```

### 커스텀 오프셋

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Custom Offset</Button>
  </TooltipTrigger>
  <TooltipContent sideOffset={16}>Tooltip with larger offset</TooltipContent>
</Tooltip>
```

### 여러 줄 텍스트

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>Multiline</Button>
  </TooltipTrigger>
  <TooltipContent textAlign="left">
    Line 1: First piece of information
    {"\n"}
    Line 2: Second piece of information
    {"\n"}
    Line 3: Third piece of information
  </TooltipContent>
</Tooltip>
```

### 화살표 없는 Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button>No Arrow</Button>
  </TooltipTrigger>
  <TooltipContent side={undefined}>Tooltip without arrow</TooltipContent>
</Tooltip>
```

## Design Tokens

| Token              | Value                            | Description |
| ------------------ | -------------------------------- | ----------- |
| `--tooltip-fg`     | `var(--fg-neutral-primary)`      | 텍스트 색상 |
| `--tooltip-border` | `var(--border-neutral-tertiary)` | 테두리 색상 |
| `--tooltip-bg`     | `var(--bg-neutral-primary)`      | 배경 색상   |

## 접근성

- **키보드 네비게이션**
  - `Tab`: Tooltip trigger에 포커스 시 자동 표시
  - `Esc`: Tooltip 닫기
- 포커스 시 자동으로 Tooltip 표시
- ARIA 속성 자동 설정 (role="tooltip", aria-describedby 등)
- 스크린 리더 지원

## 사용 시 주의사항

- TooltipProvider는 앱의 최상위 레벨에 한 번만 배치해야 합니다
- TooltipTrigger는 보통 `asChild`와 함께 사용합니다
- Tooltip은 간단한 설명에만 사용하고, 복잡한 내용은 Popover를 사용하세요
- side를 undefined로 설정하면 화살표가 표시되지 않습니다
- 비활성화된 요소에 Tooltip을 붙이려면 span 등으로 감싸야 합니다
- delayDuration을 너무 짧게 설정하면 사용자 경험이 저하될 수 있습니다
- 모바일에서는 Tooltip이 제대로 작동하지 않을 수 있으므로 중요한 정보는 다른 방식으로도 제공하세요
- title prop을 사용하면 제목이 굵은 글씨로 강조됩니다

## 관련 컴포넌트

- [Popover](./popover.md) - 복잡한 팝업 컨텐츠
- [Dropdown](./dropdown.md) - 드롭다운 메뉴
- [Button](./button.md) - Tooltip trigger로 자주 사용
