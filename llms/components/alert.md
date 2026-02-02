# Alert

Alert는 사용자에게 중요한 정보를 전달하는 컴포넌트입니다. 성공, 경고, 에러, 정보 등 다양한 상태의 메시지를 표시할 수 있습니다.

## 컴포넌트 구조

```
Alert
├── AlertContent
│   ├── AlertIcon
│   └── AlertTextContainer
│       ├── AlertTitle
│       └── AlertDescription
├── AlertButton
└── AlertIconButton
```

## Props

### Alert

```typescript
interface AlertProps {
  variant?: "default" | "warning" | "success" | "error" | "informative";
  radius?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `variant`: Alert의 변형 (기본값: `default`)
  - `default`: 기본 스타일
  - `warning`: 경고 메시지
  - `success`: 성공 메시지
  - `error`: 에러 메시지
  - `informative`: 정보 메시지

- `radius`: 모서리 둥글기 (기본값: theme에서 설정된 값)
  - `small`: 작은 반경
  - `medium`: 중간 반경
  - `large`: 큰 반경

- `className`: 추가 CSS 클래스

- `children`: 자식 요소

### AlertContent

```typescript
interface AlertContentProps {
  className?: string;
  children: React.ReactNode;
}
```

Alert의 주요 콘텐츠를 담는 컨테이너입니다.

### AlertIcon

```typescript
interface AlertIconProps {
  name?: IconNameType;
  size?: number;
  className?: string;
}
```

#### Props 설명

- `name`: 아이콘 이름 (기본값: variant에 따른 기본 아이콘)
  - `default`: `RiInformationFill`
  - `warning`: `RiErrorWarningFill`
  - `success`: `RiCheckboxCircleFill`
  - `error`: `RiErrorWarningFill`
  - `informative`: `RiInformationFill`

- `size`: 아이콘 크기 (기본값: `20`)

- `className`: 추가 CSS 클래스

### AlertTextContainer

```typescript
interface AlertTextContainerProps {
  className?: string;
  children: React.ReactNode;
}
```

제목과 설명을 담는 컨테이너입니다.

### AlertTitle

```typescript
interface AlertTitleProps {
  className?: string;
  children: React.ReactNode;
}
```

Alert의 제목을 표시합니다.

### AlertDescription

```typescript
interface AlertDescriptionProps {
  className?: string;
  children: React.ReactNode;
}
```

Alert의 설명을 표시합니다.

### AlertButton

```typescript
interface AlertButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `variant`: 버튼 변형 (기본값: `outline`)
- `size`: 버튼 크기 (기본값: `medium`)
- `onClick`: 클릭 이벤트 핸들러
- `className`: 추가 CSS 클래스
- `children`: 버튼 텍스트

### AlertIconButton

```typescript
interface AlertIconButton {
  icon?: IconNameType;
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
}
```

#### Props 설명

- `icon`: 아이콘 이름 (기본값: `RiCloseFill`)
- `variant`: 버튼 변형 (기본값: `ghost`)
- `size`: 버튼 크기 (기본값: `medium`)
- `onClick`: 클릭 이벤트 핸들러
- `className`: 추가 CSS 클래스

## 기본 사용법

```tsx
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertIconButton,
  AlertTextContainer,
  AlertTitle,
} from "@line/abc-def-react";

function Example() {
  return (
    <Alert variant="success">
      <AlertContent>
        <AlertIcon />
        <AlertTextContainer>
          <AlertTitle>성공</AlertTitle>
          <AlertDescription>작업이 성공적으로 완료되었습니다.</AlertDescription>
        </AlertTextContainer>
      </AlertContent>
      <AlertIconButton onClick={() => console.log("닫기")} />
    </Alert>
  );
}
```

## 사용 예시

### Variant 예시

#### Default (기본)

```tsx
<Alert variant="default">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>기본 알림 메시지입니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
</Alert>
```

#### Warning (경고)

```tsx
<Alert variant="warning">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>경고</AlertTitle>
      <AlertDescription>주의가 필요한 상황입니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

#### Success (성공)

```tsx
<Alert variant="success">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>성공</AlertTitle>
      <AlertDescription>작업이 완료되었습니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

#### Error (에러)

```tsx
<Alert variant="error">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>
        문제가 발생했습니다. 다시 시도해주세요.
      </AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

#### Informative (정보)

```tsx
<Alert variant="informative">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>안내</AlertTitle>
      <AlertDescription>유용한 정보를 알려드립니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

### 다양한 조합 예시

#### 제목만 있는 Alert

```tsx
<Alert>
  <AlertContent>
    <AlertTextContainer>
      <AlertTitle>제목만 있는 알림</AlertTitle>
    </AlertTextContainer>
  </AlertContent>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

#### 설명만 있는 Alert

```tsx
<Alert>
  <AlertContent>
    <AlertTextContainer>
      <AlertDescription>설명만 있는 알림입니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

#### 아이콘 없는 Alert

```tsx
<Alert>
  <AlertContent>
    <AlertTextContainer>
      <AlertTitle>제목</AlertTitle>
      <AlertDescription>아이콘 없는 알림입니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
</Alert>
```

#### 커스텀 아이콘 사용

```tsx
<Alert variant="informative">
  <AlertContent>
    <AlertIcon name="RiFlashlightFill" size={24} />
    <AlertTextContainer>
      <AlertTitle>커스텀 아이콘</AlertTitle>
      <AlertDescription>원하는 아이콘을 사용할 수 있습니다.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
</Alert>
```

### Button 예시

#### AlertButton 사용

```tsx
<Alert variant="warning">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>확인 필요</AlertTitle>
      <AlertDescription>변경사항을 확인해주세요.</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertButton onClick={handleConfirm}>확인</AlertButton>
</Alert>
```

#### AlertIconButton과 AlertButton 함께 사용

```tsx
<Alert variant="error">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>작업 실패</AlertTitle>
      <AlertDescription>다시 시도하시겠습니까?</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertButton onClick={handleRetry} variant="primary">
    재시도
  </AlertButton>
  <AlertIconButton onClick={handleClose} />
</Alert>
```

#### Button 크기 및 스타일 변경

```tsx
<Alert>
  <AlertContent>
    <AlertTextContainer>
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>작업을 진행하시겠습니까?</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
  <AlertButton onClick={handleAction} variant="primary" size="small">
    진행
  </AlertButton>
  <AlertIconButton onClick={handleClose} variant="ghost" size="small" />
</Alert>
```

### Radius 예시

```tsx
// Small radius
<Alert radius="small" variant="success">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>작은 모서리</AlertTitle>
    </AlertTextContainer>
  </AlertContent>
</Alert>

// Medium radius (기본값)
<Alert radius="medium" variant="success">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>중간 모서리</AlertTitle>
    </AlertTextContainer>
  </AlertContent>
</Alert>

// Large radius
<Alert radius="large" variant="success">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>큰 모서리</AlertTitle>
    </AlertTextContainer>
  </AlertContent>
</Alert>
```

## 디자인 토큰

Alert는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                        | Default Value                    | Description             |
| ---------------------------- | -------------------------------- | ----------------------- |
| `--alert-fg`                 | `var(--fg-neutral-primary)`      | 기본 텍스트 색상        |
| `--alert-fg-description`     | `var(--fg-neutral-secondary)`    | 설명 텍스트 색상        |
| `--alert-fg-warning`         | `var(--fg-tint-orange)`          | 경고 텍스트/아이콘 색상 |
| `--alert-fg-success`         | `var(--fg-tint-green)`           | 성공 텍스트/아이콘 색상 |
| `--alert-fg-error`           | `var(--fg-tint-red)`             | 에러 텍스트/아이콘 색상 |
| `--alert-fg-informative`     | `var(--fg-tint-blue)`            | 정보 텍스트/아이콘 색상 |
| `--alert-border`             | `var(--border-neutral-tertiary)` | 기본 테두리 색상        |
| `--alert-border-warning`     | `var(--border-tint-orange)`      | 경고 테두리 색상        |
| `--alert-border-success`     | `var(--border-tint-green)`       | 성공 테두리 색상        |
| `--alert-border-error`       | `var(--border-tint-red)`         | 에러 테두리 색상        |
| `--alert-border-informative` | `var(--border-tint-blue)`        | 정보 테두리 색상        |
| `--alert-bg`                 | `var(--bg-neutral-primary)`      | 배경 색상               |

### 토큰 커스터마이징 예시

```css
.custom-alert {
  --alert-fg-warning: var(--fg-tint-red);
  --alert-border-warning: var(--border-tint-red);
  --alert-bg: var(--bg-secondary);
}
```

```tsx
<Alert variant="warning" className="custom-alert">
  <AlertContent>
    <AlertIcon />
    <AlertTextContainer>
      <AlertTitle>커스텀 스타일</AlertTitle>
      <AlertDescription>토큰을 사용한 커스터마이징</AlertDescription>
    </AlertTextContainer>
  </AlertContent>
</Alert>
```

## 접근성

- **role="alert"**: Alert 컴포넌트는 자동으로 `role="alert"` 속성을 가집니다
- **스크린 리더**: 알림이 표시될 때 스크린 리더가 자동으로 읽습니다
- **키보드 네비게이션**: 버튼은 Tab 키로 접근 가능하고 Enter/Space로 활성화됩니다

## 사용 시 주의사항

1. **올바른 구조 유지**: Alert는 특정 구조를 따라야 합니다

   ```tsx
   // ✅ 올바른 구조
   <Alert>
     <AlertContent>
       <AlertIcon />
       <AlertTextContainer>
         <AlertTitle>제목</AlertTitle>
         <AlertDescription>설명</AlertDescription>
       </AlertTextContainer>
     </AlertContent>
     <AlertButton>버튼</AlertButton>
   </Alert>

   // ❌ 잘못된 구조
   <Alert>
     <AlertTitle>제목</AlertTitle>
     <AlertDescription>설명</AlertDescription>
   </Alert>
   ```

2. **적절한 variant 선택**: 메시지의 성격에 맞는 variant를 사용하세요
   - 성공: `success`
   - 경고/주의: `warning`
   - 에러/위험: `error`
   - 일반 정보: `informative` 또는 `default`

3. **제목과 설명**: 제목만, 설명만, 또는 둘 다 사용할 수 있지만 최소한 하나는 있어야 합니다

4. **아이콘 커스터마이징**: variant에 따라 기본 아이콘이 설정되지만, 필요시 커스텀 아이콘을 사용할 수 있습니다

   ```tsx
   <AlertIcon name="RiFlashlightFill" />
   ```

5. **버튼 사용**: AlertButton과 AlertIconButton 중 상황에 맞게 선택하거나 둘 다 사용할 수 있습니다

6. **닫기 기능**: AlertIconButton을 사용할 때는 반드시 onClick 핸들러를 제공해야 합니다
   ```tsx
   <AlertIconButton onClick={() => setShowAlert(false)} />
   ```

## 관련 컴포넌트

- [Toast](./toast.md) - 임시 알림 메시지
- [Dialog](./dialog.md) - 모달 형태의 알림
- [Badge](./badge.md) - 작은 상태 표시기
- [Button](./button.md) - 버튼 컴포넌트
