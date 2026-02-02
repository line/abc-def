# Dropdown

Dropdown은 트리거를 클릭하거나 호버할 때 메뉴를 표시하는 컴포넌트입니다. Radix UI의 Dropdown Menu를 기반으로 구현되었습니다.

## Props

### Dropdown

- `open?: boolean` - Dropdown 열림/닫힘 상태 (제어 모드)
- `onOpenChange?: (open: boolean) => void` - 열림/닫힘 상태 변경 핸들러

### DropdownTrigger

- `variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'outline'` - 버튼 variant (기본값: `'outline'`)
- `trigger?: 'click' | 'hover'` - 트리거 방식 (기본값: `'click'`)
- `asChild?: boolean` - 자식 요소를 trigger로 사용

### DropdownContent

- `side?: 'top' | 'right' | 'bottom' | 'left'` - 메뉴 위치 (기본값: `'bottom'`)
- `sideOffset?: number` - 트리거와의 간격 (기본값: `4`)
- `maxHeight?: string` - 최대 높이 (예: `'300px'`)
- `align?: 'start' | 'center' | 'end'` - 정렬 방식

### DropdownItem

- `onSelect?: (event: Event) => void` - 항목 선택 시 호출
- `disabled?: boolean` - 비활성화 상태

### DropdownCheckboxItem

- `checked?: boolean | 'indeterminate'` - 체크박스 상태
- `onCheckedChange?: (checked: boolean) => void` - 체크 상태 변경 핸들러

### DropdownRadioItem

- `value: string` - 라디오 아이템 값

### DropdownRadioGroup

- `value?: string` - 선택된 라디오 값
- `onValueChange?: (value: string) => void` - 라디오 값 변경 핸들러

### DropdownLabel

- `children: React.ReactNode` - 레이블 내용

### DropdownCaption

- `children: React.ReactNode` - 캡션 내용

### DropdownSub

- `open?: boolean` - 서브 메뉴 열림/닫힘 상태

### DropdownSubTrigger

- `children: React.ReactNode` - 서브 메뉴 트리거 내용

## 기본 사용법

```tsx
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@line/abc-def-react";

function Example() {
  return (
    <Dropdown>
      <DropdownTrigger>Open Menu</DropdownTrigger>
      <DropdownContent>
        <DropdownItem onSelect={() => console.log("Item 1")}>
          Item 1
        </DropdownItem>
        <DropdownItem onSelect={() => console.log("Item 2")}>
          Item 2
        </DropdownItem>
        <DropdownItem onSelect={() => console.log("Item 3")}>
          Item 3
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}
```

## 사용 예시

### 레이블과 구분선

```tsx
<Dropdown>
  <DropdownTrigger>Menu</DropdownTrigger>
  <DropdownContent>
    <DropdownLabel>Settings</DropdownLabel>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Preferences</DropdownItem>
    <DropdownSeparator />
    <DropdownLabel>Account</DropdownLabel>
    <DropdownItem>Billing</DropdownItem>
    <DropdownItem>Team</DropdownItem>
  </DropdownContent>
</Dropdown>
```

### 체크박스 메뉴

```tsx
function CheckboxExample() {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({
    notifications: true,
    emails: false,
    updates: false,
  });

  return (
    <Dropdown>
      <DropdownTrigger>Preferences</DropdownTrigger>
      <DropdownContent>
        <DropdownCheckboxItem
          checked={checked.notifications}
          onCheckedChange={(value) =>
            setChecked((prev) => ({ ...prev, notifications: value }))
          }
        >
          Notifications
        </DropdownCheckboxItem>
        <DropdownCheckboxItem
          checked={checked.emails}
          onCheckedChange={(value) =>
            setChecked((prev) => ({ ...prev, emails: value }))
          }
        >
          Emails
        </DropdownCheckboxItem>
        <DropdownCheckboxItem
          checked={checked.updates}
          onCheckedChange={(value) =>
            setChecked((prev) => ({ ...prev, updates: value }))
          }
        >
          Updates
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
  );
}
```

### 라디오 그룹

```tsx
function RadioExample() {
  const [value, setValue] = React.useState("light");

  return (
    <Dropdown>
      <DropdownTrigger>Theme</DropdownTrigger>
      <DropdownContent>
        <DropdownRadioGroup value={value} onValueChange={setValue}>
          <DropdownRadioItem value="light">Light</DropdownRadioItem>
          <DropdownRadioItem value="dark">Dark</DropdownRadioItem>
          <DropdownRadioItem value="system">System</DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>
  );
}
```

### 서브 메뉴

```tsx
<Dropdown>
  <DropdownTrigger>Options</DropdownTrigger>
  <DropdownContent>
    <DropdownItem>New File</DropdownItem>
    <DropdownItem>New Window</DropdownItem>
    <DropdownSeparator />
    <DropdownSub>
      <DropdownSubTrigger>More Options</DropdownSubTrigger>
      <DropdownSubContent>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </DropdownSubContent>
    </DropdownSub>
  </DropdownContent>
</Dropdown>
```

### 캡션과 함께 사용

```tsx
<Dropdown>
  <DropdownTrigger>Actions</DropdownTrigger>
  <DropdownContent>
    <DropdownItem>
      Save
      <DropdownCaption>⌘S</DropdownCaption>
    </DropdownItem>
    <DropdownItem>
      Copy
      <DropdownCaption>⌘C</DropdownCaption>
    </DropdownItem>
    <DropdownItem>
      Paste
      <DropdownCaption>⌘V</DropdownCaption>
    </DropdownItem>
  </DropdownContent>
</Dropdown>
```

### Hover 트리거

```tsx
<Dropdown>
  <DropdownTrigger trigger="hover">Hover Me</DropdownTrigger>
  <DropdownContent>
    <DropdownItem>Item 1</DropdownItem>
    <DropdownItem>Item 2</DropdownItem>
    <DropdownItem>Item 3</DropdownItem>
  </DropdownContent>
</Dropdown>
```

### 커스텀 트리거

```tsx
<Dropdown>
  <DropdownTrigger asChild>
    <Button variant="ghost">
      <Icon name="RiMoreFill" />
    </Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>Edit</DropdownItem>
    <DropdownItem>Delete</DropdownItem>
  </DropdownContent>
</Dropdown>
```

### 최대 높이 설정

```tsx
<Dropdown>
  <DropdownTrigger>Long List</DropdownTrigger>
  <DropdownContent maxHeight="200px">
    {Array.from({ length: 20 }, (_, i) => (
      <DropdownItem key={i}>Item {i + 1}</DropdownItem>
    ))}
  </DropdownContent>
</Dropdown>
```

### 메뉴 위치 설정

```tsx
<Dropdown>
  <DropdownTrigger>Position</DropdownTrigger>
  <DropdownContent side="right" align="start">
    <DropdownItem>Right aligned</DropdownItem>
    <DropdownItem>To start</DropdownItem>
  </DropdownContent>
</Dropdown>
```

### 제어 모드

```tsx
function ControlledExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dropdown</Button>
      <Dropdown open={open} onOpenChange={setOpen}>
        <DropdownTrigger>Menu</DropdownTrigger>
        <DropdownContent>
          <DropdownItem onSelect={() => setOpen(false)}>
            Close Menu
          </DropdownItem>
          <DropdownItem>Stay Open</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </>
  );
}
```

### 그룹핑

```tsx
<Dropdown>
  <DropdownTrigger>Edit</DropdownTrigger>
  <DropdownContent>
    <DropdownGroup>
      <DropdownLabel>Text</DropdownLabel>
      <DropdownItem>Cut</DropdownItem>
      <DropdownItem>Copy</DropdownItem>
      <DropdownItem>Paste</DropdownItem>
    </DropdownGroup>
    <DropdownSeparator />
    <DropdownGroup>
      <DropdownLabel>Format</DropdownLabel>
      <DropdownItem>Bold</DropdownItem>
      <DropdownItem>Italic</DropdownItem>
    </DropdownGroup>
  </DropdownContent>
</Dropdown>
```

### 비활성화 상태

```tsx
<Dropdown>
  <DropdownTrigger>Options</DropdownTrigger>
  <DropdownContent>
    <DropdownItem>Available</DropdownItem>
    <DropdownItem disabled>Disabled Item</DropdownItem>
    <DropdownItem>Also Available</DropdownItem>
  </DropdownContent>
</Dropdown>
```

## Design Tokens

| Token                     | Value                                    | Description           |
| ------------------------- | ---------------------------------------- | --------------------- |
| `--dropdown-fg`           | `var(--fg-neutral-primary)`              | 기본 텍스트 색상      |
| `--dropdown-fg-pressed`   | `var(--tint, var(--fg-neutral-primary))` | 눌렀을 때 텍스트 색상 |
| `--dropdown-fg-secondary` | `var(--fg-neutral-tertiary)`             | 보조 텍스트 색상      |
| `--dropdown-border`       | `var(--border-neutral-tertiary)`         | 테두리 색상           |
| `--dropdown-bg`           | `var(--bg-neutral-primary)`              | 배경 색상             |
| `--dropdown-bg-hover`     | `var(--bg-neutral-tertiary)`             | 호버 시 배경 색상     |
| `--dropdown-bg-pressed`   | `var(--bg-neutral-tertiary)`             | 눌렀을 때 배경 색상   |

## 접근성

- **키보드 네비게이션**
  - `Space`/`Enter`: 트리거 활성화
  - `↓`/`↑`: 메뉴 항목 간 이동
  - `→`: 서브 메뉴 열기
  - `←`: 서브 메뉴 닫기
  - `Esc`: 메뉴 닫기
  - `Tab`: 포커스 이동 및 메뉴 닫기
- 자동 포커스 관리
- ARIA 속성 자동 설정 (role, aria-expanded 등)
- 스크린 리더 지원

## 사용 시 주의사항

- DropdownContent는 자동으로 ScrollArea로 래핑됩니다
- maxHeight를 설정하면 긴 목록에서 스크롤이 활성화됩니다
- trigger="hover"를 사용하면 마우스 호버로 메뉴가 열립니다
- DropdownCheckboxItem과 DropdownRadioItem은 각각 독립적으로 사용할 수 있습니다
- 서브 메뉴는 중첩하여 사용할 수 있습니다
- asChild를 사용하면 커스텀 트리거를 사용할 수 있습니다
- DropdownCaption은 키보드 단축키 등의 보조 정보를 표시할 때 사용합니다

## 관련 컴포넌트

- [Button](./button.md) - DropdownTrigger의 기본 요소
- [Select](./select.md) - 단일 값 선택
- [Menu](./menu.md) - 네비게이션 메뉴
- [Popover](./popover.md) - 일반 팝오버
