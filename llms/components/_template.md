# Component Name

<!-- 컴포넌트 간단 설명 -->

## Props

```typescript
interface ComponentNameProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  // ... 기타 Props
}
```

### Props 설명

- `variant`: 컴포넌트의 스타일 변형
  - `primary`: 기본 스타일
  - `secondary`: 보조 스타일
  - `outline`: 외곽선 스타일
  - `ghost`: 투명 배경 스타일
- `size`: 컴포넌트 크기
  - `sm`: 작은 크기
  - `md`: 중간 크기 (기본값)
  - `lg`: 큰 크기

- `disabled`: 비활성화 상태
- `className`: 추가 CSS 클래스
- `children`: 자식 요소

## 기본 사용법

```tsx
import { ComponentName } from "@line/abc-def-react";

function Example() {
  return (
    <ComponentName variant="primary" size="md">
      Content
    </ComponentName>
  );
}
```

## 사용 예시

### Variant 예시

```tsx
<ComponentName variant="primary">Primary</ComponentName>
<ComponentName variant="secondary">Secondary</ComponentName>
<ComponentName variant="outline">Outline</ComponentName>
<ComponentName variant="ghost">Ghost</ComponentName>
```

### Size 예시

```tsx
<ComponentName size="sm">Small</ComponentName>
<ComponentName size="md">Medium</ComponentName>
<ComponentName size="lg">Large</ComponentName>
```

### 상태별 예시

```tsx
// 활성화 상태
<ComponentName>Active</ComponentName>

// 비활성화 상태
<ComponentName disabled>Disabled</ComponentName>
```

### 커스터마이징 예시

```tsx
// className으로 스타일 추가
<ComponentName className="w-full rounded-lg shadow-md">
  Custom Styled
</ComponentName>

// 반응형 디자인
<ComponentName className="w-full md:w-auto">
  Responsive
</ComponentName>
```

## 접근성

- 키보드 네비게이션 지원
- ARIA 속성 자동 적용
- 스크린 리더 호환

## 사용 시 주의사항

1. 주의사항 1
2. 주의사항 2
3. 주의사항 3

## 관련 컴포넌트

- [Related Component 1](./related-1.md)
- [Related Component 2](./related-2.md)
