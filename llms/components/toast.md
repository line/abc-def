# Toast

Toast는 임시 메시지를 화면에 표시하는 알림 컴포넌트입니다. Sonner 라이브러리를 기반으로 구현되었습니다.

## Props

### Toaster

- `position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'` - Toast 표시 위치 (기본값: `'bottom-right'`)
- `expand?: boolean` - 마우스 호버 시 확장 여부
- `richColors?: boolean` - 상태별 풍부한 색상 사용
- `closeButton?: boolean` - 닫기 버튼 표시 여부
- `duration?: number` - 표시 시간 (밀리초)
- `icons?: ToasterIcons` - 커스텀 아이콘 설정
- `className?: string` - 추가 CSS 클래스

### toast() 함수

- `toast(message, options)` - 기본 Toast 표시
- `toast.success(message, options)` - 성공 Toast
- `toast.error(message, options)` - 에러 Toast
- `toast.warning(message, options)` - 경고 Toast
- `toast.info(message, options)` - 정보 Toast
- `toast.promise(promise, options)` - Promise 기반 Toast
- `toast.loading(message, options)` - 로딩 Toast

### Toast Options

- `description?: React.ReactNode` - 설명 텍스트
- `action?: { label: React.ReactNode; onClick: () => void }` - 액션 버튼
- `cancel?: { label: React.ReactNode; onClick: () => void }` - 취소 버튼
- `duration?: number` - 표시 시간 (밀리초)
- `onDismiss?: () => void` - 닫힐 때 호출
- `onAutoClose?: () => void` - 자동으로 닫힐 때 호출
- `id?: string | number` - Toast ID
- `important?: boolean` - 중요 Toast (스와이프로 닫기 방지)

## 기본 사용법

```tsx
import { toast, Toaster } from "@line/abc-def-react";

// App.tsx 등 최상위에 Toaster 추가
function App() {
  return (
    <>
      <YourApp />
      <Toaster position="bottom-right" />
    </>
  );
}

// Toast 표시
function Example() {
  const showToast = () => {
    toast("Title", {
      description: "Description text",
    });
  };

  return <Button onClick={showToast}>Show Toast</Button>;
}
```

## 사용 예시

### 기본 Toast

```tsx
toast("Event created", {
  description: "Your event has been created successfully",
});
```

### 성공 Toast

```tsx
toast.success("Success!", {
  description: "Your changes have been saved",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
});
```

### 에러 Toast

```tsx
toast.error("Error occurred", {
  description: "Failed to save your changes",
  action: {
    label: "Retry",
    onClick: () => console.log("Retry"),
  },
});
```

### 경고 Toast

```tsx
toast.warning("Warning", {
  description: "Your session will expire soon",
  action: {
    label: "Extend",
    onClick: () => console.log("Extend"),
  },
});
```

### 정보 Toast

```tsx
toast.info("Information", {
  description: "New features are available",
  action: {
    label: "View",
    onClick: () => console.log("View"),
  },
});
```

### 로딩 Toast

```tsx
const loadingToastId = toast.loading("Loading...", {
  description: "Please wait",
});

// 완료 후 업데이트
setTimeout(() => {
  toast.success("Complete!", {
    id: loadingToastId,
    description: "Operation completed",
  });
}, 2000);
```

### Promise Toast

```tsx
const myPromise = fetch("/api/data");

toast.promise(myPromise, {
  loading: "Loading data...",
  success: "Data loaded successfully",
  error: "Failed to load data",
  description: "This may take a moment",
});
```

### Promise with Callbacks

```tsx
const myPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ data: "result" }), 2000));

toast.promise(myPromise, {
  loading: "Processing...",
  success: (data) => `Success: ${data.data}`,
  error: (err) => `Error: ${err.message}`,
  action: {
    label: "View",
    onClick: () => console.log("View result"),
  },
  cancel: {
    label: <Icon name="RiCloseFill" size={20} />,
    onClick: () => console.log("Cancelled"),
  },
});
```

### 액션 버튼

```tsx
toast("New message", {
  description: "You have a new message from John",
  action: {
    label: "Reply",
    onClick: () => console.log("Reply clicked"),
  },
});
```

### 취소 버튼 (아이콘)

```tsx
toast("Notification", {
  description: "This is a notification",
  cancel: {
    label: <Icon name="RiCloseFill" size={20} />,
    onClick: () => console.log("Cancelled"),
  },
});
```

### 커스텀 지속 시간

```tsx
toast("Quick message", {
  description: "This will disappear in 2 seconds",
  duration: 2000,
});
```

### 영구 Toast (수동 닫기)

```tsx
toast("Important notice", {
  description: "Please read carefully",
  duration: Infinity,
  cancel: {
    label: "Close",
    onClick: () => console.log("Closed"),
  },
});
```

### Toast 제거

```tsx
const toastId = toast("Message");

// 특정 Toast 제거
toast.dismiss(toastId);

// 모든 Toast 제거
toast.dismiss();
```

### 중요 Toast (스와이프 방지)

```tsx
toast("Critical update", {
  description: "Please update your password",
  important: true,
  action: {
    label: "Update",
    onClick: () => console.log("Update"),
  },
});
```

### 이벤트 핸들러

```tsx
toast("Event", {
  description: "Watch for events",
  onDismiss: () => console.log("Toast dismissed"),
  onAutoClose: () => console.log("Toast auto-closed"),
});
```

### 위치 설정

```tsx
// Toaster 컴포넌트에 position 설정
<Toaster position="top-center" />
<Toaster position="bottom-left" />
<Toaster position="top-right" />
```

### 확장 모드

```tsx
// 호버 시 모든 Toast 확장
<Toaster expand={true} />
```

### 닫기 버튼 표시

```tsx
<Toaster closeButton={true} />
```

### 커스텀 아이콘

```tsx
<Toaster
  icons={{
    success: <Icon name="RiCheckboxCircleFill" size={20} />,
    error: <Icon name="RiCloseCircleFill" size={20} />,
    warning: <Icon name="RiErrorWarningFill" size={20} />,
    info: <Icon name="RiInformation2Fill" size={20} />,
    loading: <Spinner size="small" />,
  }}
/>
```

## Design Tokens

| Token                        | Value                            | Description      |
| ---------------------------- | -------------------------------- | ---------------- |
| `--toast-fg`                 | `var(--fg-neutral-primary)`      | 기본 텍스트 색상 |
| `--toast-fg-description`     | `var(--fg-neutral-secondary)`    | 설명 텍스트 색상 |
| `--toast-fg-warning`         | `var(--fg-tint-orange)`          | 경고 아이콘 색상 |
| `--toast-fg-success`         | `var(--fg-tint-green)`           | 성공 아이콘 색상 |
| `--toast-fg-error`           | `var(--fg-tint-red)`             | 에러 아이콘 색상 |
| `--toast-fg-informative`     | `var(--fg-tint-blue)`            | 정보 아이콘 색상 |
| `--toast-border`             | `var(--border-neutral-tertiary)` | 기본 테두리 색상 |
| `--toast-border-warning`     | `var(--border-tint-orange)`      | 경고 테두리 색상 |
| `--toast-border-success`     | `var(--border-tint-green)`       | 성공 테두리 색상 |
| `--toast-border-error`       | `var(--border-tint-red)`         | 에러 테두리 색상 |
| `--toast-border-informative` | `var(--border-tint-blue)`        | 정보 테두리 색상 |
| `--toast-bg`                 | `var(--bg-neutral-primary)`      | 배경 색상        |

## 접근성

- 자동으로 ARIA live region 설정
- 스크린 리더 알림 지원
- 키보드로 Toast 닫기 가능 (닫기 버튼 포커스)
- 적절한 role 및 aria-label 설정

## 사용 시 주의사항

- Toaster 컴포넌트는 앱의 최상위 레벨에 한 번만 배치해야 합니다
- toast() 함수는 Toaster가 마운트된 후에만 사용할 수 있습니다
- Promise Toast는 자동으로 loading → success/error 상태로 전환됩니다
- duration을 Infinity로 설정하면 수동으로 닫아야 합니다
- 중요한 메시지는 important를 true로 설정하여 실수로 닫히는 것을 방지하세요
- 너무 많은 Toast를 동시에 표시하면 사용자 경험이 저하될 수 있습니다
- 액션 버튼은 명확한 라벨을 사용하세요
- 상태별 Toast (success, error 등)는 적절한 상황에만 사용하세요

## 관련 컴포넌트

- [Alert](./alert.md) - 정적 알림 메시지
- [Dialog](./dialog.md) - 모달 대화상자
- [Button](./button.md) - 액션 버튼
