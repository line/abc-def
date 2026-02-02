# Dialog

Dialog는 사용자의 주의가 필요한 콘텐츠나 액션을 모달 형태로 표시하는 컴포넌트입니다.

## 컴포넌트 구조

```
Dialog
├── DialogTrigger
└── DialogContent
    ├── DialogHeader
    │   ├── DialogTitle
    │   └── DialogDescription
    ├── DialogBody
    └── DialogFooter
        └── DialogClose
```

## Props

### Dialog

```typescript
interface DialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children: React.ReactNode;
}
```

#### Props 설명

- `open`: Dialog 열림 상태 (제어 컴포넌트)
- `defaultOpen`: 초기 열림 상태 (비제어 컴포넌트)
- `onOpenChange`: 열림 상태 변경 시 호출되는 콜백
- `modal`: 모달 동작 여부 (기본값: `true`)

### DialogTrigger

```typescript
interface DialogTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline";
  children: React.ReactNode;
}
```

Dialog를 여는 트리거 버튼입니다.

### DialogContent

```typescript
interface DialogContentProps {
  radius?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}
```

Dialog의 메인 콘텐츠 영역입니다.

### DialogHeader

```typescript
interface DialogHeaderProps {
  direction?: "vertical" | "horizontal";
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `direction`: 헤더 내용의 방향 (기본값: `vertical`)
  - `vertical`: 제목과 설명이 세로로 배치
  - `horizontal`: 제목과 설명이 가로로 배치

### DialogTitle

```typescript
interface DialogTitleProps {
  className?: string;
  children: React.ReactNode;
}
```

Dialog의 제목입니다.

### DialogDescription

```typescript
interface DialogDescriptionProps {
  className?: string;
  children: React.ReactNode;
}
```

Dialog의 설명입니다.

### DialogBody

```typescript
interface DialogBodyProps {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

Dialog의 본문 영역입니다. 스크롤 가능합니다.

### DialogFooter

```typescript
interface DialogFooterProps {
  align?: "left" | "right" | "center" | "between" | "full";
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `align`: 버튼 정렬 방향 (기본값: `right`)
  - `left`: 왼쪽 정렬
  - `right`: 오른쪽 정렬
  - `center`: 중앙 정렬
  - `between`: 양쪽 끝 정렬
  - `full`: 전체 너비

### DialogClose

```typescript
interface DialogCloseProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline";
  children: React.ReactNode;
}
```

Dialog를 닫는 버튼입니다.

## 기본 사용법

```tsx
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@line/abc-def-react";

function Example() {
  return (
    <Dialog>
      <DialogTrigger>Dialog 열기</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>제목</DialogTitle>
          <DialogDescription>설명 텍스트</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p>본문 내용</p>
        </DialogBody>
        <DialogFooter>
          <DialogClose>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## 사용 예시

### 비제어 컴포넌트

```tsx
<Dialog defaultOpen={false}>
  <DialogTrigger>열기</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>알림</DialogTitle>
    </DialogHeader>
    <DialogBody>
      <p>저장되었습니다.</p>
    </DialogBody>
    <DialogFooter>
      <DialogClose>확인</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### 제어 컴포넌트

```tsx
function ControlledExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>열기</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>제목</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>내용</p>
        </DialogBody>
        <DialogFooter>
          <DialogClose>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### 확인 Dialog

```tsx
function ConfirmDialog() {
  const [open, setOpen] = React.useState(false);

  const handleConfirm = () => {
    console.log("확인됨");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger variant="destructive">삭제</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
          <DialogDescription>이 작업은 되돌릴 수 없습니다.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>취소</DialogClose>
          <DialogClose variant="destructive" onClick={handleConfirm}>
            삭제
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Form이 있는 Dialog

```tsx
function FormDialog() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출");
  };

  return (
    <Dialog>
      <DialogTrigger>프로필 수정</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>프로필 정보를 수정하세요</DialogDescription>
        </DialogHeader>
        <DialogBody>
          <form id="profile-form" onSubmit={handleSubmit}>
            <Label>이름</Label>
            <TextInput name="name" placeholder="이름을 입력하세요" />
            <Label>이메일</Label>
            <TextInput name="email" type="email" placeholder="이메일" />
          </form>
        </DialogBody>
        <DialogFooter>
          <DialogClose>취소</DialogClose>
          <DialogClose variant="primary" type="submit" form="profile-form">
            저장
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### 스크롤 가능한 긴 내용

```tsx
<Dialog>
  <DialogTrigger>약관 보기</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>이용약관</DialogTitle>
    </DialogHeader>
    <DialogBody>
      <div className="space-y-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>약관 내용 {i + 1}</p>
        ))}
      </div>
    </DialogBody>
    <DialogFooter>
      <DialogClose variant="primary">동의</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Header Direction

#### Vertical (세로)

```tsx
<Dialog>
  <DialogTrigger>열기</DialogTrigger>
  <DialogContent>
    <DialogHeader direction="vertical">
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명이 제목 아래에 표시됩니다</DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p>본문</p>
    </DialogBody>
  </DialogContent>
</Dialog>
```

#### Horizontal (가로)

```tsx
<Dialog>
  <DialogTrigger>열기</DialogTrigger>
  <DialogContent>
    <DialogHeader direction="horizontal">
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명이 제목 옆에 표시됩니다</DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p>본문</p>
    </DialogBody>
  </DialogContent>
</Dialog>
```

### Footer Align

```tsx
// Right (기본값)
<DialogFooter align="right">
  <DialogClose>취소</DialogClose>
  <DialogClose variant="primary">확인</DialogClose>
</DialogFooter>

// Left
<DialogFooter align="left">
  <DialogClose>취소</DialogClose>
  <DialogClose variant="primary">확인</DialogClose>
</DialogFooter>

// Center
<DialogFooter align="center">
  <DialogClose variant="primary">확인</DialogClose>
</DialogFooter>

// Between
<DialogFooter align="between">
  <DialogClose>취소</DialogClose>
  <DialogClose variant="primary">확인</DialogClose>
</DialogFooter>

// Full
<DialogFooter align="full">
  <DialogClose className="flex-1">취소</DialogClose>
  <DialogClose variant="primary" className="flex-1">
    확인
  </DialogClose>
</DialogFooter>
```

### asChild로 커스텀 트리거

```tsx
<Dialog>
  <DialogTrigger asChild>
    <button className="custom-button">커스텀 버튼</button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
    </DialogHeader>
    <DialogBody>
      <p>내용</p>
    </DialogBody>
  </DialogContent>
</Dialog>
```

### 프로그래밍 방식으로 열기

```tsx
function ProgrammaticExample() {
  const [open, setOpen] = React.useState(false);

  const handleAction = () => {
    // 어떤 작업 후 Dialog 열기
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleAction}>작업 실행</button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>작업 완료</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>작업이 성공적으로 완료되었습니다.</p>
          </DialogBody>
          <DialogFooter>
            <DialogClose variant="primary">확인</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## 디자인 토큰

Dialog는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                     | Default Value                    | Description      |
| ------------------------- | -------------------------------- | ---------------- |
| `--dialog-fg`             | `var(--fg-neutral-primary)`      | 텍스트 색상      |
| `--dialog-fg-description` | `var(--fg-neutral-secondary)`    | 설명 텍스트 색상 |
| `--dialog-border`         | `var(--border-neutral-tertiary)` | 테두리 색상      |
| `--dialog-bg`             | `var(--bg-neutral-primary)`      | 배경 색상        |

### 토큰 커스터마이징 예시

```css
.custom-dialog {
  --dialog-bg: var(--bg-neutral-secondary);
  --dialog-border: var(--border-tint-blue);
}
```

```tsx
<DialogContent className="custom-dialog">...</DialogContent>
```

## 접근성

- **키보드 네비게이션**:
  - `Tab`: Dialog 내 요소 간 이동
  - `Esc`: Dialog 닫기
  - `Enter` / `Space`: 버튼 활성화

- **포커스 관리**: Dialog가 열리면 자동으로 첫 번째 포커스 가능한 요소로 포커스가 이동합니다

- **aria 속성**: Radix UI Dialog primitive를 기반으로 자동으로 접근성 속성이 제공됩니다

- **스크린 리더**: DialogTitle과 DialogDescription이 자동으로 연결됩니다

- **배경 클릭**: 기본적으로 배경(overlay)을 클릭하면 Dialog가 닫힙니다

## 사용 시 주의사항

1. **적절한 사용**
   - Dialog는 중요한 정보나 사용자의 결정이 필요할 때만 사용하세요
   - 과도한 사용은 사용자 경험을 해칩니다

2. **제목과 설명**
   - 항상 DialogTitle을 제공하세요 (접근성)
   - DialogDescription으로 추가 컨텍스트를 제공하세요

3. **닫기 방법**
   - 최소한 하나의 닫기 방법을 제공하세요
   - X 버튼(자동 제공), DialogClose 버튼, Esc 키

4. **파괴적 액션**
   - 삭제 등의 파괴적 액션은 명확한 확인 메시지를 표시하세요

   ```tsx
   <DialogHeader>
     <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
     <DialogDescription>이 작업은 되돌릴 수 없습니다.</DialogDescription>
   </DialogHeader>
   ```

5. **긴 내용**
   - DialogBody는 자동으로 스크롤됩니다
   - 너무 긴 내용은 별도 페이지를 고려하세요

6. **중첩 Dialog**
   - Dialog 안에 또 다른 Dialog를 여는 것은 피하세요
   - 필요하다면 Sheet 또는 다른 패턴을 고려하세요

## 관련 컴포넌트

- [Sheet](./sheet.md) - 사이드 패널
- [Popover](./popover.md) - 작은 팝오버
- [Toast](./toast.md) - 알림 메시지
- [Alert](./alert.md) - 인라인 알림
