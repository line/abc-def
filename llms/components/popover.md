# Popover

Popover는 트리거 근처에 팝업 컨텐츠를 표시하는 컴포넌트입니다. Radix UI의 Popover를 기반으로 구현되었습니다.

## Props

### Popover

- `open?: boolean` - Popover 열림/닫힘 상태 (제어 모드)
- `onOpenChange?: (open: boolean) => void` - 열림/닫힘 상태 변경 핸들러
- `defaultOpen?: boolean` - 초기 열림 상태 (비제어 모드)
- `modal?: boolean` - 모달 모드 여부 (기본값: `false`)

### PopoverTrigger

- `asChild?: boolean` - 자식 요소를 trigger로 사용

### PopoverContent

- `side?: 'top' | 'right' | 'bottom' | 'left'` - 팝오버 위치 (기본값: `'bottom'`)
- `sideOffset?: number` - 트리거와의 간격 (기본값: `4`)
- `align?: 'start' | 'center' | 'end'` - 정렬 방식 (기본값: `'center'`)
- `alignOffset?: number` - 정렬 오프셋
- `avoidCollisions?: boolean` - 충돌 방지 (기본값: `true`)
- `onInteractOutside?: (event: Event) => void` - 외부 클릭 시 호출
- `onEscapeKeyDown?: (event: KeyboardEvent) => void` - ESC 키 입력 시 호출

### PopoverClose

- Radix UI의 Close 컴포넌트를 직접 사용

## 기본 사용법

```tsx
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@line/abc-def-react";

function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content goes here</p>
      </PopoverContent>
    </Popover>
  );
}
```

## 사용 예시

### 정보 표시

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Icon name="RiInformationLine" />
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Information</h4>
      <p className="text-muted-foreground text-sm">
        This is additional information about the feature.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

### 닫기 버튼과 함께

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Settings</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-4">
      <h3>Settings</h3>
      <div>{/* Settings content */}</div>
      <PopoverClose asChild>
        <Button variant="outline">Close</Button>
      </PopoverClose>
    </div>
  </PopoverContent>
</Popover>
```

### 제어 모드

```tsx
function ControlledExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button onClick={() => setOpen(true)}>Open</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <p>Controlled popover</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### 위치 설정

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Top</Button>
  </PopoverTrigger>
  <PopoverContent side="top">
    Content appears above
  </PopoverContent>
</Popover>

<Popover>
  <PopoverTrigger asChild>
    <Button>Right</Button>
  </PopoverTrigger>
  <PopoverContent side="right" align="start">
    Content appears to the right
  </PopoverContent>
</Popover>
```

### 오프셋 조정

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>With Offset</Button>
  </PopoverTrigger>
  <PopoverContent sideOffset={16} alignOffset={-20}>
    Custom positioned content
  </PopoverContent>
</Popover>
```

### 외부 클릭 처리

```tsx
function InteractOutsideExample() {
  const handleInteractOutside = (event: Event) => {
    // 특정 요소 클릭 시 닫히지 않도록
    if ((event.target as Element).closest(".dont-close")) {
      event.preventDefault();
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open</Button>
      </PopoverTrigger>
      <PopoverContent onInteractOutside={handleInteractOutside}>
        Popover content
      </PopoverContent>
    </Popover>
  );
}
```

### 모달 모드

```tsx
<Popover modal={true}>
  <PopoverTrigger asChild>
    <Button>Modal Popover</Button>
  </PopoverTrigger>
  <PopoverContent>This is a modal popover (traps focus)</PopoverContent>
</Popover>
```

### 폼 입력

```tsx
function FormExample() {
  const [value, setValue] = React.useState("");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitted:", value);
          }}
        >
          <div className="space-y-4">
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
            />
            <div className="flex gap-2">
              <Button type="submit">Save</Button>
              <PopoverClose asChild>
                <Button variant="outline">Cancel</Button>
              </PopoverClose>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
```

### 날짜 선택기

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Icon name="RiCalendarLine" />
      Select Date
    </Button>
  </PopoverTrigger>
  <PopoverContent align="start">
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>
```

### 커스텀 스타일

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Styled</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80 p-6">
    <div className="space-y-2">
      <h4 className="font-semibold">Custom Styled Popover</h4>
      <p className="text-sm">You can apply custom styles to PopoverContent</p>
    </div>
  </PopoverContent>
</Popover>
```

### 충돌 방지 비활성화

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>No Collision</Button>
  </PopoverTrigger>
  <PopoverContent avoidCollisions={false}>
    Content stays in position even if it overflows
  </PopoverContent>
</Popover>
```

## Design Tokens

Popover는 별도의 디자인 토큰을 정의하지 않으며, 일반적인 배경색과 테두리 색상을 사용합니다.

## 접근성

- **키보드 네비게이션**
  - `Space`/`Enter`: 트리거 활성화
  - `Esc`: Popover 닫기
  - `Tab`: 포커스 이동
- 자동 포커스 관리
- ARIA 속성 자동 설정 (role, aria-expanded 등)
- 스크린 리더 지원

## 사용 시 주의사항

- PopoverTrigger는 보통 `asChild`와 함께 사용하여 버튼 등을 trigger로 활용합니다
- PopoverContent는 자동으로 Portal에 렌더링됩니다
- 기본적으로 비모달 모드로 동작하며, 모달 모드가 필요한 경우 `modal={true}`를 설정하세요
- 외부 클릭 시 자동으로 닫히며, `onInteractOutside`로 동작을 커스터마이즈할 수 있습니다
- 충돌 방지 기능이 기본 활성화되어 있어 viewport 내에서 최적의 위치를 찾습니다
- Dropdown과 달리 일반적인 팝업 컨텐츠 표시에 사용됩니다

## 관련 컴포넌트

- [Dropdown](./dropdown.md) - 메뉴 드롭다운
- [Tooltip](./tooltip.md) - 간단한 툴팁
- [Dialog](./dialog.md) - 모달 다이얼로그
- [Sheet](./sheet.md) - 사이드 시트
