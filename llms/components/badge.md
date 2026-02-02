# Badge

Badge는 상태, 카테고리, 레이블 등을 표시하는 작고 간결한 컴포넌트입니다. 텍스트 또는 숫자를 강조하여 보여줄 수 있습니다.

## Props

```typescript
interface BadgeProps {
  variant?: "bold" | "subtle" | "outline";
  color?: "default" | "blue" | "orange" | "red" | "green";
  radius?: "small" | "medium" | "large";
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### Props 설명

- `variant`: Badge의 변형 (기본값: `bold`)
  - `bold`: 진한 배경색
  - `subtle`: 연한 배경색
  - `outline`: 테두리만 있는 스타일

- `color`: Badge의 색상 (기본값: `default`)
  - `default`: 기본 회색
  - `blue`: 파란색
  - `orange`: 주황색
  - `red`: 빨간색
  - `green`: 초록색

- `radius`: 모서리 둥글기 (기본값: theme에서 설정된 값)
  - `small`: 작은 반경
  - `medium`: 중간 반경
  - `large`: 큰 반경

- `asChild`: Slot 패턴 사용 여부
  - `true`: 자식 요소를 Badge의 루트로 사용
  - `false`: `div` 요소로 렌더링 (기본값)

- `className`: 추가 CSS 클래스

- `children`: 자식 요소 (일반적으로 텍스트 또는 숫자)

## 기본 사용법

```tsx
import { Badge } from "@line/abc-def-react";

function Example() {
  return <Badge>Label</Badge>;
}
```

## 사용 예시

### Variant 예시

#### Bold (진한 배경)

```tsx
<Badge variant="bold">Label</Badge>
```

Bold variant는 강조가 필요한 중요한 정보를 표시할 때 사용합니다.

#### Subtle (연한 배경)

```tsx
<Badge variant="subtle">Label</Badge>
```

Subtle variant는 부드럽게 정보를 전달할 때 사용합니다.

#### Outline (테두리)

```tsx
<Badge variant="outline">Label</Badge>
```

Outline variant는 공간을 적게 차지하면서 정보를 표시할 때 사용합니다.

### Color 예시

#### Default (기본 회색)

```tsx
<Badge variant="bold" color="default">Default</Badge>
<Badge variant="subtle" color="default">Default</Badge>
<Badge variant="outline" color="default">Default</Badge>
```

#### Blue (파란색)

```tsx
<Badge variant="bold" color="blue">Blue</Badge>
<Badge variant="subtle" color="blue">Blue</Badge>
<Badge variant="outline" color="blue">Blue</Badge>
```

파란색은 정보성 메시지나 일반적인 상태를 나타낼 때 사용합니다.

#### Orange (주황색)

```tsx
<Badge variant="bold" color="orange">Orange</Badge>
<Badge variant="subtle" color="orange">Orange</Badge>
<Badge variant="outline" color="orange">Orange</Badge>
```

주황색은 경고나 주의가 필요한 상태를 나타낼 때 사용합니다.

#### Red (빨간색)

```tsx
<Badge variant="bold" color="red">Red</Badge>
<Badge variant="subtle" color="red">Red</Badge>
<Badge variant="outline" color="red">Red</Badge>
```

빨간색은 에러, 위험, 또는 중요한 문제를 나타낼 때 사용합니다.

#### Green (초록색)

```tsx
<Badge variant="bold" color="green">Green</Badge>
<Badge variant="subtle" color="green">Green</Badge>
<Badge variant="outline" color="green">Green</Badge>
```

초록색은 성공, 완료, 또는 긍정적인 상태를 나타낼 때 사용합니다.

### 다양한 조합 예시

#### 상태 표시

```tsx
<Badge variant="bold" color="green">활성</Badge>
<Badge variant="bold" color="red">비활성</Badge>
<Badge variant="bold" color="orange">대기</Badge>
```

#### 카테고리 표시

```tsx
<Badge variant="subtle" color="blue">디자인</Badge>
<Badge variant="subtle" color="green">개발</Badge>
<Badge variant="subtle" color="orange">마케팅</Badge>
```

#### 숫자 표시

```tsx
<Badge variant="bold" color="red">5</Badge>
<Badge variant="outline" color="blue">99+</Badge>
```

#### 다양한 크기와 스타일

```tsx
<Badge radius="small" variant="bold">Small</Badge>
<Badge radius="medium" variant="bold">Medium</Badge>
<Badge radius="large" variant="bold">Large</Badge>
```

### asChild 사용 예시

```tsx
// Badge를 커스텀 요소로 렌더링
<Badge asChild>
  <span role="status">새 알림</span>
</Badge>

// Badge를 링크로 렌더링
<Badge asChild>
  <a href="/notifications">10</a>
</Badge>
```

## 디자인 토큰

Badge는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

### Bold Variant

| Token                    | Default Value                | Description        |
| ------------------------ | ---------------------------- | ------------------ |
| `--badge-fg-bold`        | `var(--fg-neutral-inverse)`  | 기본 텍스트 색상   |
| `--badge-fg-bold-blue`   | `var(--fg-neutral-inverse)`  | 파란색 텍스트 색상 |
| `--badge-fg-bold-orange` | `var(--fg-neutral-inverse)`  | 주황색 텍스트 색상 |
| `--badge-fg-bold-red`    | `var(--fg-neutral-inverse)`  | 빨간색 텍스트 색상 |
| `--badge-fg-bold-green`  | `var(--fg-neutral-inverse)`  | 초록색 텍스트 색상 |
| `--badge-bg-bold`        | `var(--bg-neutral-inverse)`  | 기본 배경 색상     |
| `--badge-bg-bold-blue`   | `var(--bg-tint-blue-bold)`   | 파란색 배경 색상   |
| `--badge-bg-bold-orange` | `var(--bg-tint-orange-bold)` | 주황색 배경 색상   |
| `--badge-bg-bold-red`    | `var(--bg-tint-red-bold)`    | 빨간색 배경 색상   |
| `--badge-bg-bold-green`  | `var(--bg-tint-green-bold)`  | 초록색 배경 색상   |

### Subtle Variant

| Token                      | Default Value                  | Description        |
| -------------------------- | ------------------------------ | ------------------ |
| `--badge-fg-subtle`        | `var(--fg-neutral-primary)`    | 기본 텍스트 색상   |
| `--badge-fg-subtle-blue`   | `var(--fg-tint-blue)`          | 파란색 텍스트 색상 |
| `--badge-fg-subtle-orange` | `var(--fg-tint-orange)`        | 주황색 텍스트 색상 |
| `--badge-fg-subtle-red`    | `var(--fg-tint-red)`           | 빨간색 텍스트 색상 |
| `--badge-fg-subtle-green`  | `var(--fg-tint-green)`         | 초록색 텍스트 색상 |
| `--badge-bg-subtle`        | `var(--bg-neutral-tertiary)`   | 기본 배경 색상     |
| `--badge-bg-subtle-blue`   | `var(--bg-tint-blue-subtle)`   | 파란색 배경 색상   |
| `--badge-bg-subtle-orange` | `var(--bg-tint-orange-subtle)` | 주황색 배경 색상   |
| `--badge-bg-subtle-red`    | `var(--bg-tint-red-subtle)`    | 빨간색 배경 색상   |
| `--badge-bg-subtle-green`  | `var(--bg-tint-green-subtle)`  | 초록색 배경 색상   |

### Outline Variant

| Token                           | Default Value                    | Description        |
| ------------------------------- | -------------------------------- | ------------------ |
| `--badge-fg-outline`            | `var(--fg-neutral-primary)`      | 기본 텍스트 색상   |
| `--badge-fg-outline-blue`       | `var(--fg-tint-blue)`            | 파란색 텍스트 색상 |
| `--badge-fg-outline-orange`     | `var(--fg-tint-orange)`          | 주황색 텍스트 색상 |
| `--badge-fg-outline-red`        | `var(--fg-tint-red)`             | 빨간색 텍스트 색상 |
| `--badge-fg-outline-green`      | `var(--fg-tint-green)`           | 초록색 텍스트 색상 |
| `--badge-border-outline`        | `var(--border-neutral-tertiary)` | 기본 테두리 색상   |
| `--badge-border-outline-blue`   | `var(--border-tint-blue)`        | 파란색 테두리 색상 |
| `--badge-border-outline-orange` | `var(--border-tint-orange)`      | 주황색 테두리 색상 |
| `--badge-border-outline-red`    | `var(--border-tint-red)`         | 빨간색 테두리 색상 |
| `--badge-border-outline-green`  | `var(--border-tint-green)`       | 초록색 테두리 색상 |
| `--badge-bg-outline`            | `var(--bg-neutral-primary)`      | 기본 배경 색상     |
| `--badge-bg-outline-blue`       | `var(--bg-neutral-primary)`      | 파란색 배경 색상   |
| `--badge-bg-outline-orange`     | `var(--bg-neutral-primary)`      | 주황색 배경 색상   |
| `--badge-bg-outline-red`        | `var(--bg-neutral-primary)`      | 빨간색 배경 색상   |
| `--badge-bg-outline-green`      | `var(--bg-neutral-primary)`      | 초록색 배경 색상   |

### 토큰 커스터마이징 예시

```css
.custom-badge {
  --badge-bg-bold: var(--bg-tint-purple-bold);
  --badge-fg-bold: var(--fg-neutral-inverse);
}
```

```tsx
<Badge variant="bold" className="custom-badge">
  커스텀 스타일
</Badge>
```

## 접근성

- **role 속성**: Badge는 기본적으로 `div` 요소로 렌더링되지만, 필요에 따라 `asChild`를 사용하여 적절한 의미를 가진 요소로 렌더링할 수 있습니다

- **색상만으로 정보 전달 금지**: 색상 외에도 텍스트로 명확한 정보를 제공해야 합니다

  ```tsx
  // ❌ 나쁜 예: 색상만으로 의미 전달
  <Badge color="green" />

  // ✅ 좋은 예: 텍스트로 명확한 의미 제공
  <Badge color="green">활성</Badge>
  ```

- **동적 콘텐츠**: Badge의 내용이 동적으로 변경되는 경우, 스크린 리더에 알림을 제공할 수 있습니다
  ```tsx
  <Badge role="status" aria-live="polite">
    {unreadCount}
  </Badge>
  ```

## 사용 시 주의사항

1. **적절한 variant 선택**
   - 중요하고 눈에 띄어야 하는 정보: `bold`
   - 부가적인 정보: `subtle`
   - 공간이 제한적이거나 시각적으로 가벼운 표현: `outline`

2. **색상의 의미 일관성**
   - 애플리케이션 전체에서 색상이 나타내는 의미를 일관되게 유지하세요
   - 예: `green`은 항상 성공/활성, `red`는 항상 에러/비활성

3. **텍스트 길이**
   - Badge는 짧은 텍스트(1-2단어)에 적합합니다
   - 긴 텍스트는 가독성이 떨어지므로 피하세요

   ```tsx
   // ✅ 좋은 예
   <Badge>신규</Badge>
   <Badge>99+</Badge>

   // ❌ 나쁜 예
   <Badge>이것은 너무 긴 텍스트입니다</Badge>
   ```

4. **과도한 사용 주의**
   - 한 화면에 너무 많은 Badge를 사용하면 시각적 혼란을 줄 수 있습니다
   - 필요한 곳에만 선택적으로 사용하세요

5. **asChild 사용**
   - 링크나 버튼으로 사용할 때는 `asChild` prop을 활용하세요

   ```tsx
   <Badge asChild>
     <a href="/notifications">알림 5</a>
   </Badge>
   ```

6. **숫자 표시**
   - 큰 숫자는 축약하여 표시하는 것이 좋습니다
   ```tsx
   // 99 이상일 때
   <Badge>{count > 99 ? "99+" : count}</Badge>
   ```

## 관련 컴포넌트

- [Tag](./tag.md) - 필터링 가능한 태그
- [Chip](./chip.md) - 선택 가능하고 제거 가능한 칩
- [Alert](./alert.md) - 더 상세한 상태 메시지
