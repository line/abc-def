# 사용 규칙

## 기본 원칙

1. **Utility-First 접근**: Tailwind CSS 유틸리티 클래스를 우선적으로 사용
2. **컴포넌트 Props 활용**: 컴포넌트의 variant, size 등 Props로 스타일 제어
3. **className으로 확장**: 추가 스타일이 필요한 경우 className prop 사용
4. **반응형 디자인**: 모바일 우선(mobile-first) 접근 방식

## Tailwind CSS 유틸리티 클래스 사용법

### 기본 사용

```tsx
import { Button } from '@line/abc-def-react';

// Props로 기본 스타일 제어
<Button variant="primary" size="md">
  Click me
</Button>

// className으로 추가 스타일 적용
<Button
  variant="primary"
  size="md"
  className="w-full rounded-lg"
>
  Full Width Button
</Button>
```

### 클래스 우선순위

1. 컴포넌트 기본 스타일 (가장 낮은 우선순위)
2. Props로 전달된 스타일 (variant, size 등)
3. className으로 전달된 스타일 (가장 높은 우선순위)

## 컴포넌트 커스터마이징

### Variant 사용

대부분의 컴포넌트는 `variant` prop을 지원합니다:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

<Alert variant="info">Information</Alert>
<Alert variant="success">Success</Alert>
<Alert variant="warning">Warning</Alert>
<Alert variant="error">Error</Alert>
```

### Size 사용

많은 컴포넌트가 `size` prop을 지원합니다:

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<Badge size="sm">Small Badge</Badge>
<Badge size="md">Medium Badge</Badge>
<Badge size="lg">Large Badge</Badge>
```

### className으로 스타일 Override

```tsx
// 배경색 변경
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Color
</Button>

// 여백 조정
<Alert className="mt-4 mb-2 px-6">
  Custom Spacing
</Alert>

// 너비 조정
<TextInput className="w-full max-w-md" />
```

## 반응형 디자인

### Breakpoint 시스템

Tailwind CSS의 breakpoint를 사용합니다:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### 반응형 적용 예시

```tsx
// 모바일: 세로 배치, 데스크톱: 가로 배치
<div className="flex flex-col md:flex-row gap-4">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</div>

// 모바일: 작은 버튼, 데스크톱: 큰 버튼
<Button
  size="sm"
  className="md:text-lg md:px-6 md:py-3"
>
  Responsive Button
</Button>

// 모바일: 전체 너비, 데스크톱: 절반 너비
<Card className="w-full lg:w-1/2">
  Content
</Card>
```

### 모바일 우선 접근

```tsx
// ✅ 좋은 예: 모바일 스타일 먼저, 큰 화면에서 override
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>

// ❌ 나쁜 예: 데스크톱 스타일부터 시작
<div className="p-8 md:p-6 sm:p-4">
  Content
</div>
```

## 테마 사용법

### useTheme Hook

```tsx
import { useTheme } from "@line/abc-def-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </Button>
  );
}
```

### 테마별 스타일 적용

```tsx
// dark: prefix를 사용한 다크 모드 스타일
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Theme-aware content
</div>

// 컴포넌트도 자동으로 테마 적용됨
<Button variant="primary">
  This button adapts to the current theme
</Button>
```

## 접근성 고려사항

### 키보드 네비게이션

모든 인터랙티브 요소는 키보드로 접근 가능해야 합니다:

```tsx
// 버튼은 자동으로 키보드 접근 가능
<Button onClick={handleClick}>Click me</Button>

// 커스텀 클릭 가능 요소는 role과 tabIndex 추가
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom clickable element
</div>
```

### ARIA 속성

```tsx
// 레이블 제공
<TextInput
  aria-label="Email address"
  placeholder="Enter email"
/>

// 에러 상태 표시
<TextInput
  aria-invalid={hasError}
  aria-describedby="error-message"
/>
{hasError && (
  <span id="error-message" className="text-error">
    Invalid input
  </span>
)}
```

## 스타일 우선순위 및 Override

### className 병합

ABC Def는 `cn()` 유틸리티를 사용하여 className을 병합합니다:

```tsx
import { cn } from "@line/abc-def-react";

// 클래스가 자동으로 병합되고 중복 제거됨
const className = cn(
  "px-4 py-2",
  "bg-primary",
  condition && "text-white",
  customClassName,
);
```

### 강제 Override (!important)

Tailwind CSS의 `!` prefix 사용:

```tsx
// 기존 스타일을 강제로 override
<Button className="!bg-red-500 !text-white">Force red button</Button>
```

## 베스트 프랙티스

### ✅ 좋은 예

```tsx
// Props로 기본 스타일 제어
<Button variant="primary" size="lg">Submit</Button>

// 반응형 디자인
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</div>

// 시맨틱 HTML 사용
<form onSubmit={handleSubmit}>
  <Label htmlFor="email">Email</Label>
  <TextInput id="email" type="email" />
  <Button type="submit">Submit</Button>
</form>
```

### ❌ 나쁜 예

```tsx
// Props 대신 모든 것을 className으로 처리
<Button className="bg-primary text-white px-4 py-2 rounded">Submit</Button>

// 비반응형 고정 크기
<div className="w-[1200px]">Content</div>

// 비시맨틱 HTML
<div onClick={handleSubmit}>
  <div>Email</div>
  <input />
  <div onClick={submitForm}>Submit</div>
</div>
```
