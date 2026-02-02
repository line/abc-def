# Sheet

Sheet는 화면 측면에서 슬라이드되어 나타나는 패널 컴포넌트입니다. Radix UI의 Dialog를 기반으로 구현되었습니다.

## Props

### Sheet

- `open?: boolean` - Sheet 열림/닫힘 상태 (제어 모드)
- `onOpenChange?: (open: boolean) => void` - 열림/닫힘 상태 변경 핸들러
- `defaultOpen?: boolean` - 초기 열림 상태 (비제어 모드)
- `modal?: boolean` - 모달 모드 여부 (기본값: `true`)

### SheetTrigger

- `variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline'` - 버튼 variant (기본값: `'outline'`)
- `asChild?: boolean` - 자식 요소를 trigger로 사용

### SheetContent

- `side?: 'top' | 'right' | 'bottom' | 'left'` - Sheet가 나타나는 방향 (기본값: `'right'`)
- `radius?: 'small' | 'medium' | 'large'` - 모서리 둥글기 (기본값: `'small'`)
- `onInteractOutside?: (event: Event) => void` - 외부 클릭 시 호출
- `onEscapeKeyDown?: (event: KeyboardEvent) => void` - ESC 키 입력 시 호출

### SheetHeader

- `direction?: 'vertical' | 'horizontal'` - 헤더 레이아웃 방향 (기본값: `'vertical'`)

### SheetBody

- `asChild?: boolean` - 자식 요소를 직접 렌더링

### SheetFooter

- 표준 div 속성

### SheetTitle

- Radix UI의 Title 컴포넌트 (접근성 필수)

### SheetDescription

- Radix UI의 Description 컴포넌트 (접근성 권장)

### SheetClose

- `variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline'` - 버튼 variant (기본값: `'outline'`)

## 기본 사용법

```tsx
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@line/abc-def-react";

function Example() {
  return (
    <Sheet>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <p>Sheet content goes here</p>
        </SheetBody>
        <SheetFooter>
          <SheetClose>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

## 사용 예시

### 오른쪽 Sheet (기본)

```tsx
<Sheet>
  <SheetTrigger>Open Right</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Right Sheet</SheetTitle>
      <SheetDescription>Slides in from the right</SheetDescription>
    </SheetHeader>
    <SheetBody>
      <p>Content</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 왼쪽 Sheet

```tsx
<Sheet>
  <SheetTrigger>Open Left</SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Sheet</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <p>Navigation menu or content</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 상단 Sheet

```tsx
<Sheet>
  <SheetTrigger>Open Top</SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Top Sheet</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <p>Slides down from the top</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 하단 Sheet

```tsx
<Sheet>
  <SheetTrigger>Open Bottom</SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Bottom Sheet</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <p>Slides up from the bottom</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 가로 방향 헤더

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader direction="horizontal">
      <SheetTitle>Horizontal Header</SheetTitle>
      <SheetDescription>Title and description side by side</SheetDescription>
    </SheetHeader>
    <SheetBody>
      <p>Content</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 폼 입력

```tsx
function FormSheet() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <Sheet>
      <SheetTrigger>Add User</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New User</SheetTitle>
          <SheetDescription>Enter the user details below</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <form id="user-form" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <TextInput
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <TextInput
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </SheetBody>
        <SheetFooter>
          <SheetClose variant="outline">Cancel</SheetClose>
          <Button type="submit" form="user-form">
            Save
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

### 제어 모드

```tsx
function ControlledSheet() {
  const [open, setOpen] = React.useState(false);

  const handleSave = () => {
    // Save logic
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Sheet</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
          </SheetHeader>
          <SheetBody>{/* Settings content */}</SheetBody>
          <SheetFooter>
            <Button onClick={handleSave}>Save</Button>
            <SheetClose>Cancel</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
```

### 모서리 둥글기

```tsx
<Sheet>
  <SheetTrigger>Small Radius</SheetTrigger>
  <SheetContent radius="small">
    <SheetHeader>
      <SheetTitle>Small Radius</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <p>Content</p>
    </SheetBody>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger>Large Radius</SheetTrigger>
  <SheetContent radius="large">
    <SheetHeader>
      <SheetTitle>Large Radius</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <p>Content</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 스크롤 가능한 컨텐츠

```tsx
<Sheet>
  <SheetTrigger>Long Content</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Scrollable Sheet</SheetTitle>
      <SheetDescription>Long content with scroll</SheetDescription>
    </SheetHeader>
    <SheetBody>
      {Array.from({ length: 50 }, (_, i) => (
        <p key={i}>Item {i + 1}</p>
      ))}
    </SheetBody>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### 커스텀 트리거

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost">
      <Icon name="RiMenu2Line" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </SheetBody>
  </SheetContent>
</Sheet>
```

### 설정 패널

```tsx
<Sheet>
  <SheetTrigger>Settings</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Configure your preferences</SheetDescription>
    </SheetHeader>
    <SheetBody>
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-medium">Notifications</h4>
          <Switch label="Email notifications" />
          <Switch label="Push notifications" />
        </div>
        <div>
          <h4 className="mb-2 font-medium">Privacy</h4>
          <Switch label="Show profile" />
          <Switch label="Public activity" />
        </div>
      </div>
    </SheetBody>
    <SheetFooter>
      <SheetClose>Done</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### 상세 정보 패널

```tsx
<Sheet>
  <SheetTrigger>View Details</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Item Details</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <dl className="space-y-4">
        <div>
          <dt className="font-semibold">Name</dt>
          <dd>Product Name</dd>
        </div>
        <div>
          <dt className="font-semibold">Description</dt>
          <dd>Detailed description goes here</dd>
        </div>
        <div>
          <dt className="font-semibold">Price</dt>
          <dd>$99.99</dd>
        </div>
      </dl>
    </SheetBody>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### 비모달 모드

```tsx
<Sheet modal={false}>
  <SheetTrigger>Non-modal Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Non-modal</SheetTitle>
    </SheetHeader>
    <SheetBody>
      <p>You can interact with the background</p>
    </SheetBody>
  </SheetContent>
</Sheet>
```

## Design Tokens

| Token            | Value                            | Description |
| ---------------- | -------------------------------- | ----------- |
| `--sheet-fg`     | `var(--fg-neutral-primary)`      | 텍스트 색상 |
| `--sheet-border` | `var(--border-neutral-tertiary)` | 테두리 색상 |
| `--sheet-bg`     | `var(--bg-primary)`              | 배경 색상   |

## 접근성

- **키보드 네비게이션**
  - `Space`/`Enter`: 트리거 활성화
  - `Esc`: Sheet 닫기
  - `Tab`: 포커스 이동 (Sheet 내부로 트랩)
- SheetTitle은 접근성을 위해 필수로 제공해야 합니다
- SheetDescription은 추가 설명이 필요한 경우 제공하세요
- 자동 포커스 관리 (Sheet 열릴 때 내부로 포커스 이동)
- 모달 모드에서 배경 스크롤 방지
- ARIA 속성 자동 설정

## 사용 시 주의사항

- SheetContent는 자동으로 닫기 버튼(×)을 포함합니다
- SheetBody는 자동으로 ScrollArea로 래핑되어 긴 컨텐츠에서 스크롤이 활성화됩니다
- side prop으로 Sheet가 나타나는 방향을 설정할 수 있습니다 (top, right, bottom, left)
- SheetHeader의 direction을 horizontal로 설정하면 제목과 설명이 가로로 배치됩니다
- SheetTitle은 접근성을 위해 반드시 제공해야 합니다
- 모달 모드(기본)에서는 Sheet가 열려 있을 때 배경과 상호작용할 수 없습니다
- 네비게이션 메뉴, 설정 패널, 상세 정보 표시 등에 적합합니다
- 모바일 환경에서는 특히 bottom Sheet가 자주 사용됩니다

## 관련 컴포넌트

- [Dialog](./dialog.md) - 모달 다이얼로그
- [Popover](./popover.md) - 팝오버
- [Drawer](./drawer.md) - 서랍형 패널
- [Button](./button.md) - SheetTrigger의 기본 요소
