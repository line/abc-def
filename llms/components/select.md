# Select

Select는 드롭다운 목록에서 하나의 옵션을 선택할 수 있는 컴포넌트입니다. 많은 옵션 중 하나를 선택해야 할 때 사용합니다.

## 컴포넌트 구조

```
Select
├── Label
├── SelectTrigger
│   └── SelectValue
├── SelectContent
│   ├── SelectGroup
│   │   ├── SelectGroupLabel
│   │   ├── SelectItem
│   │   └── SelectSeparator
└── Caption
```

## Props

### Select

```typescript
interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  size?: "small" | "medium" | "large";
  radius?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `value`: 선택된 값 (제어 컴포넌트)
- `defaultValue`: 초기 선택된 값 (비제어 컴포넌트)
- `onValueChange`: 값이 변경될 때 호출되는 콜백 함수
- `disabled`: 비활성화 여부
- `required`: 필수 선택 여부
- `name`: form 제출 시 사용되는 이름
- `size`: Select의 크기 (기본값: theme에서 설정된 값)
- `radius`: 모서리 둥글기 (기본값: theme에서 설정된 값)
- `className`: 추가 CSS 클래스

### SelectTrigger

```typescript
interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
}
```

Select를 열기 위한 트리거 버튼입니다.

### SelectValue

```typescript
interface SelectValueProps {
  placeholder?: string;
  className?: string;
}
```

선택된 값을 표시하거나 placeholder를 보여줍니다.

### SelectContent

```typescript
interface SelectContentProps {
  position?: "item-aligned" | "popper";
  maxHeight?: string;
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `position`: 드롭다운 위치 (기본값: `popper`)
  - `item-aligned`: 선택된 항목에 정렬
  - `popper`: 트리거 아래에 표시
- `maxHeight`: 최대 높이 (기본값: `auto`)

### SelectGroup

```typescript
interface SelectGroupProps {
  className?: string;
  children: React.ReactNode;
}
```

관련된 SelectItem들을 그룹화합니다.

### SelectGroupLabel

```typescript
interface SelectGroupLabelProps {
  className?: string;
  children: React.ReactNode;
}
```

SelectGroup의 레이블을 표시합니다.

### SelectItem

```typescript
interface SelectItemProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

선택 가능한 옵션 항목입니다.

### SelectSeparator

```typescript
interface SelectSeparatorProps {
  className?: string;
}
```

SelectItem 그룹 사이의 구분선입니다.

## 기본 사용법

```tsx
import {
  Caption,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-react";

function Example() {
  return (
    <Select>
      <Label>과일 선택</Label>
      <SelectTrigger>
        <SelectValue placeholder="과일을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">사과</SelectItem>
        <SelectItem value="banana">바나나</SelectItem>
        <SelectItem value="orange">오렌지</SelectItem>
      </SelectContent>
      <Caption>좋아하는 과일을 선택하세요</Caption>
    </Select>
  );
}
```

## 사용 예시

### 비제어 컴포넌트

```tsx
<Select defaultValue="apple">
  <Label>과일</Label>
  <SelectTrigger>
    <SelectValue placeholder="선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">사과</SelectItem>
    <SelectItem value="banana">바나나</SelectItem>
    <SelectItem value="orange">오렌지</SelectItem>
  </SelectContent>
</Select>
```

### 제어 컴포넌트

```tsx
function ControlledExample() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-4">
      <Select value={value} onValueChange={setValue}>
        <Label>국가</Label>
        <SelectTrigger>
          <SelectValue placeholder="국가를 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">대한민국</SelectItem>
          <SelectItem value="us">미국</SelectItem>
          <SelectItem value="jp">일본</SelectItem>
        </SelectContent>
      </Select>
      <p>선택된 값: {value}</p>
    </div>
  );
}
```

### 아이콘과 함께 사용

```tsx
import { Icon } from "@line/abc-def-react";

<Select>
  <Label>포맷</Label>
  <SelectTrigger>
    <SelectValue placeholder="포맷을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="text">
      <Icon className="mr-2" name="RiMenu2Line" size={16} />
      Text
    </SelectItem>
    <SelectItem value="number">
      <Icon className="mr-2" name="RiHashtag" size={16} />
      Number
    </SelectItem>
    <SelectItem value="date">
      <Icon className="mr-2" name="RiCalendar2Line" size={16} />
      Date
    </SelectItem>
    <SelectItem value="image">
      <Icon className="mr-2" name="RiImageLine" size={16} />
      Image
    </SelectItem>
  </SelectContent>
</Select>;
```

### 그룹화된 옵션

```tsx
<Select>
  <Label>음식</Label>
  <SelectTrigger>
    <SelectValue placeholder="음식을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectGroupLabel>과일</SelectGroupLabel>
      <SelectItem value="apple">사과</SelectItem>
      <SelectItem value="banana">바나나</SelectItem>
      <SelectItem value="orange">오렌지</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectGroupLabel>채소</SelectGroupLabel>
      <SelectItem value="carrot">당근</SelectItem>
      <SelectItem value="lettuce">양상추</SelectItem>
      <SelectItem value="tomato">토마토</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Disabled 상태

#### 전체 비활성화

```tsx
<Select disabled>
  <Label>비활성화된 Select</Label>
  <SelectTrigger>
    <SelectValue placeholder="선택할 수 없습니다" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2">옵션 2</SelectItem>
  </SelectContent>
</Select>
```

#### 개별 항목 비활성화

```tsx
<Select>
  <Label>옵션</Label>
  <SelectTrigger>
    <SelectValue placeholder="옵션을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">옵션 1</SelectItem>
    <SelectItem value="option2" disabled>
      옵션 2 (비활성화)
    </SelectItem>
    <SelectItem value="option3">옵션 3</SelectItem>
  </SelectContent>
</Select>
```

### maxHeight 설정

```tsx
<Select>
  <Label>긴 목록</Label>
  <SelectTrigger>
    <SelectValue placeholder="선택하세요" />
  </SelectTrigger>
  <SelectContent maxHeight="200px">
    {Array.from({ length: 20 }, (_, i) => (
      <SelectItem key={i} value={`item-${i}`}>
        항목 {i + 1}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
```

### Form과 함께 사용

```tsx
function FormExample() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("선택된 국가:", formData.get("country"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select name="country" defaultValue="kr" required>
        <Label>국가</Label>
        <SelectTrigger>
          <SelectValue placeholder="국가를 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">대한민국</SelectItem>
          <SelectItem value="us">미국</SelectItem>
          <SelectItem value="jp">일본</SelectItem>
          <SelectItem value="cn">중국</SelectItem>
        </SelectContent>
      </Select>
      <button type="submit">제출</button>
    </form>
  );
}
```

### 유효성 검사

```tsx
function ValidationExample() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setError("");
  };

  const handleSubmit = () => {
    if (!value) {
      setError("국가를 선택해주세요");
      return;
    }
    console.log("제출:", value);
  };

  return (
    <div>
      <Select value={value} onValueChange={handleChange}>
        <Label>국가</Label>
        <SelectTrigger className={error ? "border-red-500" : ""}>
          <SelectValue placeholder="국가를 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kr">대한민국</SelectItem>
          <SelectItem value="us">미국</SelectItem>
          <SelectItem value="jp">일본</SelectItem>
        </SelectContent>
        <Caption variant={error ? "error" : "default"}>
          {error || "국가를 선택하세요"}
        </Caption>
      </Select>
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
}
```

### Size와 Radius

```tsx
// Small size
<Select size="small" radius="small">
  <SelectTrigger>
    <SelectValue placeholder="Small Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">옵션 1</SelectItem>
  </SelectContent>
</Select>

// Medium size (기본값)
<Select size="medium" radius="medium">
  <SelectTrigger>
    <SelectValue placeholder="Medium Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">옵션 1</SelectItem>
  </SelectContent>
</Select>

// Large size
<Select size="large" radius="large">
  <SelectTrigger>
    <SelectValue placeholder="Large Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">옵션 1</SelectItem>
  </SelectContent>
</Select>
```

## 디자인 토큰

Select는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                     | Default Value                                | Description                  |
| ------------------------- | -------------------------------------------- | ---------------------------- |
| `--select-fg`             | `var(--fg-neutral-tertiary)`                 | 기본 텍스트 색상             |
| `--select-fg-pressed`     | `var(--fg-neutral-primary)`                  | 눌렸을 때 텍스트 색상        |
| `--select-fg-filled`      | `var(--fg-neutral-primary)`                  | 값이 선택됐을 때 텍스트 색상 |
| `--select-fg-error`       | `var(--fg-neutral-tertiary)`                 | 에러 상태 텍스트 색상        |
| `--select-border`         | `var(--border-neutral-tertiary)`             | 테두리 색상                  |
| `--select-border-pressed` | `var(--tint, var(--border-neutral-primary))` | 눌렸을 때 테두리 색상        |
| `--select-border-error`   | `var(--border-tint-red)`                     | 에러 상태 테두리 색상        |
| `--select-bg`             | `var(--bg-neutral-primary)`                  | 배경 색상                    |
| `--select-bg-pressed`     | `var(--bg-neutral-tertiary)`                 | 눌렸을 때 배경 색상          |
| `--select-bg-error`       | `var(--bg-neutral-primary)`                  | 에러 상태 배경 색상          |

### 토큰 커스터마이징 예시

```css
.custom-select {
  --select-border-pressed: var(--border-tint-blue);
  --select-fg-filled: var(--fg-tint-blue);
}
```

```tsx
<Select className="custom-select">
  <SelectTrigger>
    <SelectValue placeholder="커스텀 스타일" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">옵션 1</SelectItem>
  </SelectContent>
</Select>
```

## 접근성

- **키보드 네비게이션**:
  - `Space` 또는 `Enter`: 드롭다운 열기/닫기
  - `Arrow Up/Down`: 옵션 간 이동
  - `Home/End`: 첫/마지막 옵션으로 이동
  - `Esc`: 드롭다운 닫기
  - `Type to search`: 입력하여 옵션 검색

- **스크린 리더**: Radix UI Select primitive를 기반으로 하여 자동으로 접근성 속성이 제공됩니다

- **레이블**: 항상 Label 컴포넌트를 제공하세요

  ```tsx
  <Select>
    <Label>국가</Label>
    <SelectTrigger>
      <SelectValue placeholder="선택하세요" />
    </SelectTrigger>
    <SelectContent>...</SelectContent>
  </Select>
  ```

- **placeholder**: 명확한 안내 문구를 제공하세요
  ```tsx
  <SelectValue placeholder="국가를 선택하세요" />
  ```

## 사용 시 주의사항

1. **Select vs Radio Group**
   - **Select**: 5개 이상의 옵션, 공간 절약 필요
   - **Radio Group**: 5개 이하의 옵션, 모든 옵션을 한눈에 보여줄 때

   ```tsx
   // ✅ Select 사용 (많은 옵션)
   <Select>
     <SelectContent>
       {countries.map(country => (
         <SelectItem key={country} value={country}>{country}</SelectItem>
       ))}
     </SelectContent>
   </Select>

   // ✅ Radio Group 사용 (적은 옵션)
   <RadioGroup>
     <RadioItem value="small">Small</RadioItem>
     <RadioItem value="medium">Medium</RadioItem>
     <RadioItem value="large">Large</RadioItem>
   </RadioGroup>
   ```

2. **placeholder 제공**
   - 항상 명확한 placeholder를 제공하세요

   ```tsx
   // ✅ 좋은 예
   <SelectValue placeholder="국가를 선택하세요" />

   // ❌ 나쁜 예
   <SelectValue placeholder="선택" />
   ```

3. **value 속성 필수**
   - 각 SelectItem은 고유한 `value` 값을 가져야 합니다

4. **긴 목록 처리**
   - maxHeight를 설정하여 스크롤 가능하게 만드세요
   - 검색 기능이 필요하다면 Combobox 컴포넌트를 고려하세요

5. **그룹화**
   - 관련된 옵션은 SelectGroup으로 그룹화하세요
   - SelectGroupLabel로 각 그룹에 레이블을 제공하세요

6. **Form 제출**
   - `name` prop을 설정하여 form 데이터에 포함되도록 하세요

## 관련 컴포넌트

- [Radio Group](./radio-group.md) - 라디오 버튼 그룹
- [Checkbox](./checkbox.md) - 체크박스
- [Dropdown](./dropdown.md) - 드롭다운 메뉴
- [Combobox](./combobox.md) - 검색 가능한 Select
