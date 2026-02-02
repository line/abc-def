# Button

Button은 사용자가 수행할 수 있는 작업을 전달하는 컴포넌트입니다. 클릭하여 액션을 실행할 수 있습니다.

## Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "ghost" | "outline";
  size?: "small" | "medium" | "large";
  radius?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### Props 설명

- `variant`: Button의 변형 (기본값: `primary`)
  - `primary`: 주요 액션
  - `secondary`: 보조 액션
  - `destructive`: 삭제/위험한 액션
  - `ghost`: 배경이 투명한 스타일
  - `outline`: 테두리만 있는 스타일

- `size`: Button의 크기 (기본값: theme에서 설정된 값)
  - `small`: 작은 크기
  - `medium`: 중간 크기
  - `large`: 큰 크기

- `radius`: 모서리 둥글기 (기본값: theme에서 설정된 값)
  - `small`: 작은 반경
  - `medium`: 중간 반경
  - `large`: 큰 반경

- `loading`: 로딩 상태 (기본값: `false`)
  - 로딩 중일 때 스피너가 표시되고 버튼이 비활성화됩니다

- `disabled`: 비활성화 여부 (기본값: `false`)

- `type`: HTML 버튼 타입 (기본값: `button`)
  - `button`: 일반 버튼
  - `submit`: 폼 제출 버튼
  - `reset`: 폼 리셋 버튼

- `asChild`: Slot 패턴 사용 여부
  - `true`: 자식 요소를 Button의 루트로 사용
  - `false`: `button` 요소로 렌더링 (기본값)

- `className`: 추가 CSS 클래스

- `children`: 버튼 텍스트, 아이콘 등

## 기본 사용법

```tsx
import { Button } from "@line/abc-def-react";

function Example() {
  return <Button>클릭하세요</Button>;
}
```

## 사용 예시

### Variant 예시

#### Primary (주요 액션)

```tsx
<Button variant="primary">Primary</Button>
```

Primary는 페이지에서 가장 중요한 액션에 사용합니다.

#### Secondary (보조 액션)

```tsx
<Button variant="secondary">Secondary</Button>
```

Secondary는 주요 액션을 보조하는 액션에 사용합니다.

#### Destructive (삭제/위험)

```tsx
<Button variant="destructive">Delete</Button>
```

Destructive는 삭제, 제거 등 위험한 액션에 사용합니다.

#### Ghost (투명 배경)

```tsx
<Button variant="ghost">Ghost</Button>
```

Ghost는 덜 강조되는 액션이나 공간이 제한적일 때 사용합니다.

#### Outline (테두리)

```tsx
<Button variant="outline">Outline</Button>
```

Outline은 Secondary와 유사하지만 더 가벼운 스타일이 필요할 때 사용합니다.

### Size 예시

```tsx
<div className="flex gap-2">
  <Button size="small">Small</Button>
  <Button size="medium">Medium</Button>
  <Button size="large">Large</Button>
</div>
```

### State 예시

#### Loading 상태

```tsx
<Button loading>Loading...</Button>
```

로딩 중일 때는 스피너가 표시되고 버튼이 자동으로 비활성화됩니다.

#### Disabled 상태

```tsx
<Button disabled>Disabled</Button>
```

### 아이콘과 함께 사용

#### 왼쪽 아이콘

```tsx
import { Icon } from "@line/abc-def-react";

<Button>
  <Icon name="RiFlashlightFill" />
  버튼
</Button>;
```

#### 오른쪽 아이콘

```tsx
<Button>
  버튼
  <Icon name="RiArrowRightLine" />
</Button>
```

#### 양쪽 아이콘

```tsx
<Button>
  <Icon name="RiFlashlightFill" />
  버튼
  <Icon name="RiArrowRightLine" />
</Button>
```

#### 아이콘만 있는 버튼

```tsx
<Button>
  <Icon name="RiSearchLine" />
</Button>
```

아이콘만 있으면 자동으로 정사각형 모양이 됩니다.

### 클릭 이벤트

```tsx
function ClickExample() {
  const handleClick = () => {
    console.log("버튼 클릭됨");
  };

  return <Button onClick={handleClick}>클릭</Button>;
}
```

### 비동기 작업

```tsx
function AsyncExample() {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch("/api/submit", { method: "POST" });
      console.log("성공");
    } catch (error) {
      console.error("실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleSubmit} loading={loading}>
      제출
    </Button>
  );
}
```

### Form 제출

```tsx
function FormExample() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("폼 제출");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <Button type="submit">제출</Button>
      <Button type="reset" variant="secondary">
        초기화
      </Button>
    </form>
  );
}
```

### 링크로 사용 (asChild)

```tsx
<Button asChild>
  <a href="/dashboard">대시보드로 이동</a>
</Button>
```

### 조건부 렌더링

```tsx
function ConditionalExample() {
  const [saved, setSaved] = React.useState(false);

  return (
    <Button
      variant={saved ? "secondary" : "primary"}
      onClick={() => setSaved(true)}
    >
      {saved ? "저장됨" : "저장"}
    </Button>
  );
}
```

### 버튼 그룹

```tsx
<div className="flex gap-2">
  <Button variant="outline">취소</Button>
  <Button variant="primary">확인</Button>
</div>
```

### 전체 너비 버튼

```tsx
<Button className="w-full">전체 너비 버튼</Button>
```

### Radius 조합

```tsx
<div className="flex gap-2">
  <Button radius="small">Small Radius</Button>
  <Button radius="medium">Medium Radius</Button>
  <Button radius="large">Large Radius</Button>
</div>
```

### 다양한 액션 버튼

```tsx
function ActionsExample() {
  return (
    <div className="flex flex-col gap-2">
      {/* 저장 */}
      <Button variant="primary">
        <Icon name="RiSaveLine" />
        저장
      </Button>

      {/* 공유 */}
      <Button variant="secondary">
        <Icon name="RiShareLine" />
        공유
      </Button>

      {/* 다운로드 */}
      <Button variant="outline">
        <Icon name="RiDownloadLine" />
        다운로드
      </Button>

      {/* 삭제 */}
      <Button variant="destructive">
        <Icon name="RiDeleteBinLine" />
        삭제
      </Button>

      {/* 설정 */}
      <Button variant="ghost">
        <Icon name="RiSettings3Line" />
      </Button>
    </div>
  );
}
```

## 디자인 토큰

Button은 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                       | Default Value                                     | Description             |
| --------------------------- | ------------------------------------------------- | ----------------------- |
| `--button-fg-primary`       | `var(--fg-neutral-inverse)`                       | Primary 텍스트 색상     |
| `--button-fg-secondary`     | `var(--fg-neutral-primary)`                       | Secondary 텍스트 색상   |
| `--button-fg-destructive`   | `var(--fg-neutral-inverse)`                       | Destructive 텍스트 색상 |
| `--button-fg-ghost`         | `var(--fg-neutral-primary)`                       | Ghost 텍스트 색상       |
| `--button-fg-outline`       | `var(--tint, var(--fg-neutral-primary))`          | Outline 텍스트 색상     |
| `--button-border-outline`   | `var(--border-neutral-tertiary)`                  | Outline 테두리 색상     |
| `--button-bg-primary`       | `var(--tint, var(--bg-neutral-inverse))`          | Primary 배경 색상       |
| `--button-bg-secondary`     | `var(--bg-neutral-tertiary)`                      | Secondary 배경 색상     |
| `--button-bg-destructive`   | `var(--bg-tint-red-bold)`                         | Destructive 배경 색상   |
| `--button-bg-ghost`         | `var(--bg-neutral-transparent)`                   | Ghost 배경 색상         |
| `--button-bg-ghost-hover`   | `var(--bg-neutral-secondary)`                     | Ghost 호버 배경 색상    |
| `--button-bg-outline`       | `var(--bg-neutral-transparent)`                   | Outline 배경 색상       |
| `--button-bg-outline-hover` | `var(--tint-subtle, var(--bg-neutral-secondary))` | Outline 호버 배경 색상  |

### 토큰 커스터마이징 예시

```css
.custom-button {
  --button-bg-primary: var(--bg-tint-blue-bold);
  --button-fg-primary: var(--fg-neutral-inverse);
}
```

```tsx
<Button variant="primary" className="custom-button">
  커스텀 스타일
</Button>
```

## 접근성

- **키보드 네비게이션**:
  - `Tab`: 버튼으로 이동
  - `Enter` 또는 `Space`: 버튼 활성화

- **aria-label**: 아이콘만 있는 버튼은 aria-label을 제공하세요

  ```tsx
  <Button aria-label="검색">
    <Icon name="RiSearchLine" />
  </Button>
  ```

- **disabled 상태**: 비활성화된 버튼은 포커스를 받지 않습니다

- **loading 상태**: 로딩 중인 버튼은 자동으로 비활성화되고 aria-busy가 설정됩니다

## 사용 시 주의사항

1. **적절한 variant 선택**
   - 페이지당 Primary는 1-2개로 제한하세요
   - 중요도에 따라 variant를 선택하세요

   ```tsx
   // ✅ 좋은 예
   <div>
     <Button variant="outline">취소</Button>
     <Button variant="primary">저장</Button>
   </div>

   // ❌ 나쁜 예 (Primary가 너무 많음)
   <div>
     <Button variant="primary">버튼 1</Button>
     <Button variant="primary">버튼 2</Button>
     <Button variant="primary">버튼 3</Button>
   </div>
   ```

2. **명확한 텍스트**
   - 버튼 텍스트는 수행할 액션을 명확히 표현해야 합니다

   ```tsx
   // ✅ 좋은 예
   <Button>계정 삭제</Button>

   // ❌ 나쁜 예
   <Button>확인</Button>
   ```

3. **로딩 상태 관리**
   - 비동기 작업 중에는 loading 상태를 사용하세요
   - 중복 클릭을 방지할 수 있습니다

4. **아이콘 사용**
   - 아이콘과 텍스트를 함께 사용하면 이해도가 높아집니다
   - 아이콘만 사용할 때는 반드시 aria-label을 제공하세요

5. **크기 일관성**
   - 같은 컨텍스트에서는 같은 크기를 사용하세요

   ```tsx
   // ✅ 좋은 예
   <div className="flex gap-2">
     <Button size="medium">취소</Button>
     <Button size="medium">확인</Button>
   </div>

   // ❌ 나쁜 예
   <div className="flex gap-2">
     <Button size="small">취소</Button>
     <Button size="large">확인</Button>
   </div>
   ```

6. **type 속성**
   - Form 내부에서는 적절한 type을 설정하세요
   ```tsx
   <form>
     <Button type="submit">제출</Button>
     <Button type="reset">초기화</Button>
     <Button type="button">취소</Button>
   </form>
   ```

## 관련 컴포넌트

- [Icon Button](./icon-button.md) - 아이콘 전용 버튼
- [Toggle Group](./toggle-group.md) - 토글 버튼 그룹
- [Dropdown](./dropdown.md) - 드롭다운 메뉴
