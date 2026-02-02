# Accordion

아코디언은 콘텐츠를 접었다 펼 수 있는 UI 컴포넌트입니다. 여러 섹션을 구성하고 사용자가 필요한 정보만 선택적으로 볼 수 있도록 합니다.

## 컴포넌트 구조

```
Accordion
└── AccordionItem
    ├── AccordionTrigger
    └── AccordionContent
```

## Props

### Accordion

```typescript
interface AccordionProps {
  type: "single" | "multiple";
  iconSize?: "small" | "medium" | "large";
  iconAlign?: "left" | "right";
  border?: boolean;
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `type`: 아코디언 타입
  - `single`: 한 번에 하나의 항목만 열 수 있음
  - `multiple`: 여러 항목을 동시에 열 수 있음
- `iconSize`: 아이콘 크기 (기본값: `small`)
  - `small`: 작은 크기
  - `medium`: 중간 크기
  - `large`: 큰 크기

- `iconAlign`: 아이콘 정렬 위치 (기본값: `right`)
  - `left`: 왼쪽 정렬
  - `right`: 오른쪽 정렬

- `border`: 전체 아코디언 영역에 테두리 적용 여부 (기본값: `false`)

- `collapsible`: 모든 항목을 닫을 수 있는지 여부 (type이 'single'일 때만 사용)

- `className`: 추가 CSS 클래스

- `children`: 자식 요소 (AccordionItem)

### AccordionItem

```typescript
interface AccordionItemProps {
  value: string;
  divider?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `value`: 고유 식별자 (필수)

- `divider`: 항목 간 구분선 표시 여부 (기본값: `true`)

- `className`: 추가 CSS 클래스

- `children`: 자식 요소 (AccordionTrigger, AccordionContent)

### AccordionTrigger

```typescript
interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `className`: 추가 CSS 클래스

- `children`: 표시할 제목 텍스트 또는 요소

### AccordionContent

```typescript
interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `className`: 추가 CSS 클래스

- `children`: 표시할 콘텐츠

## 기본 사용법

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@line/abc-def-react";

function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>제목 1</AccordionTrigger>
        <AccordionContent>콘텐츠 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>제목 2</AccordionTrigger>
        <AccordionContent>콘텐츠 2</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>제목 3</AccordionTrigger>
        <AccordionContent>콘텐츠 3</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## 사용 예시

### Type 예시

#### Single Type (하나만 열기)

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>제목 1</AccordionTrigger>
    <AccordionContent>하나만 열 수 있습니다</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>제목 2</AccordionTrigger>
    <AccordionContent>다른 항목을 열면 이전 항목은 닫힙니다</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Multiple Type (여러 개 열기)

```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>제목 1</AccordionTrigger>
    <AccordionContent>여러 개를 동시에 열 수 있습니다</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>제목 2</AccordionTrigger>
    <AccordionContent>독립적으로 열고 닫을 수 있습니다</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Icon Align 예시

#### Right Align (기본값)

```tsx
<Accordion type="multiple" iconAlign="right">
  <AccordionItem value="item-1">
    <AccordionTrigger>오른쪽에 아이콘</AccordionTrigger>
    <AccordionContent>기본 정렬 방식입니다</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Left Align

```tsx
<Accordion type="multiple" iconAlign="left">
  <AccordionItem value="item-1">
    <AccordionTrigger>왼쪽에 아이콘</AccordionTrigger>
    <AccordionContent>
      왼쪽 정렬 시 콘텐츠도 아이콘과 정렬됩니다
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Icon Size 예시

```tsx
<Accordion type="multiple" iconSize="small">
  <AccordionItem value="item-1">
    <AccordionTrigger>Small Icon</AccordionTrigger>
    <AccordionContent>작은 아이콘</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="multiple" iconSize="medium">
  <AccordionItem value="item-2">
    <AccordionTrigger>Medium Icon</AccordionTrigger>
    <AccordionContent>중간 아이콘</AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="multiple" iconSize="large">
  <AccordionItem value="item-3">
    <AccordionTrigger>Large Icon</AccordionTrigger>
    <AccordionContent>큰 아이콘</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Border 예시

#### Border 없음 (기본값)

```tsx
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>테두리 없음</AccordionTrigger>
    <AccordionContent>기본 스타일입니다</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Border 있음

```tsx
<Accordion type="multiple" border className="rounded-8">
  <AccordionItem value="item-1">
    <AccordionTrigger>테두리 있음</AccordionTrigger>
    <AccordionContent>전체 영역에 테두리가 적용됩니다</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>테두리 있음</AccordionTrigger>
    <AccordionContent>rounded 클래스로 모서리를 둥글게</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Divider 예시

```tsx
// 구분선 있음 (기본값)
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>항목 1</AccordionTrigger>
    <AccordionContent>구분선이 있습니다</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>항목 2</AccordionTrigger>
    <AccordionContent>항목 간 구분이 명확합니다</AccordionContent>
  </AccordionItem>
</Accordion>

// 구분선 없음
<Accordion type="multiple">
  <AccordionItem value="item-1" divider={false}>
    <AccordionTrigger>항목 1</AccordionTrigger>
    <AccordionContent>구분선이 없습니다</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2" divider={false}>
    <AccordionTrigger>항목 2</AccordionTrigger>
    <AccordionContent>깔끔한 느낌입니다</AccordionContent>
  </AccordionItem>
</Accordion>
```

### 배경색 커스터마이징

```tsx
<Accordion type="multiple" border className="rounded-8">
  <AccordionItem value="item-1">
    <AccordionTrigger className="bg-tertiary">
      배경색 있는 트리거
    </AccordionTrigger>
    <AccordionContent>콘텐츠는 기본 배경</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="bg-tertiary">
      배경색 있는 트리거
    </AccordionTrigger>
    <AccordionContent>강조하고 싶은 섹션에 사용</AccordionContent>
  </AccordionItem>
</Accordion>
```

## 디자인 토큰

Accordion은 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                | Default Value                    | Description |
| -------------------- | -------------------------------- | ----------- |
| `--accordion-fg`     | `var(--fg-neutral-primary)`      | 텍스트 색상 |
| `--accordion-border` | `var(--border-neutral-tertiary)` | 테두리 색상 |
| `--accordion-bg`     | `var(--bg-primary)`              | 배경 색상   |

### 토큰 커스터마이징 예시

```css
.custom-accordion {
  --accordion-fg: var(--fg-neutral-secondary);
  --accordion-border: var(--border-tint-blue);
  --accordion-bg: var(--bg-secondary);
}
```

```tsx
<Accordion type="multiple" border className="custom-accordion rounded-8">
  <AccordionItem value="item-1">
    <AccordionTrigger>커스텀 스타일</AccordionTrigger>
    <AccordionContent>토큰을 사용한 커스터마이징</AccordionContent>
  </AccordionItem>
</Accordion>
```

## 접근성

- **키보드 네비게이션**:
  - `Tab`: 다음 트리거로 이동
  - `Shift + Tab`: 이전 트리거로 이동
  - `Enter` 또는 `Space`: 항목 열기/닫기
  - `Home`: 첫 번째 트리거로 이동
  - `End`: 마지막 트리거로 이동

- **ARIA 속성**:
  - `role="region"`: 각 콘텐츠 영역
  - `aria-expanded`: 열림/닫힘 상태 표시
  - `aria-controls`: 트리거와 콘텐츠 연결

## 사용 시 주의사항

1. **고유한 value 필수**: 각 `AccordionItem`은 고유한 `value` prop이 필요합니다

   ```tsx
   // ✅ 좋은 예
   <AccordionItem value="item-1">...</AccordionItem>
   <AccordionItem value="item-2">...</AccordionItem>

   // ❌ 나쁜 예
   <AccordionItem value="item">...</AccordionItem>
   <AccordionItem value="item">...</AccordionItem>
   ```

2. **type과 collapsible**: `collapsible` prop은 `type="single"`일 때만 의미가 있습니다

   ```tsx
   // ✅ 좋은 예
   <Accordion type="single" collapsible>

   // ⚠️ 불필요 (type="multiple"은 기본적으로 collapsible)
   <Accordion type="multiple" collapsible>
   ```

3. **iconAlign과 콘텐츠 정렬**: `iconAlign="left"`일 때 콘텐츠는 자동으로 아이콘과 정렬됩니다

4. **구조 준수**: 올바른 컴포넌트 계층 구조를 유지해야 합니다

   ```tsx
   // ✅ 올바른 구조
   <Accordion>
     <AccordionItem>
       <AccordionTrigger>...</AccordionTrigger>
       <AccordionContent>...</AccordionContent>
     </AccordionItem>
   </Accordion>
   ```

5. **border와 rounded**: border를 사용할 때는 rounded 클래스를 함께 사용하면 더 나은 외형을 얻을 수 있습니다
   ```tsx
   <Accordion border className="rounded-8">
   ```

## 관련 컴포넌트

- [Tabs](./tabs.md) - 콘텐츠를 탭 형태로 전환
- [Dialog](./dialog.md) - 모달 형태의 콘텐츠 표시
- [Sheet](./sheet.md) - 사이드에서 슬라이드되는 콘텐츠
