# Radio Group

Radio Group은 사용자가 여러 옵션 중 하나만 선택할 수 있는 입력 컴포넌트입니다. 라디오 버튼들을 그룹화하여 관리합니다.

## 컴포넌트 구조

```
RadioGroup
└── RadioItem
```

## Props

### RadioGroup

```typescript
interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  required?: boolean;
  name?: string;
  className?: string;
  children: React.ReactNode;
}
```

#### Props 설명

- `value`: 선택된 값 (제어 컴포넌트)

- `defaultValue`: 초기 선택된 값 (비제어 컴포넌트)

- `onValueChange`: 값이 변경될 때 호출되는 콜백 함수

- `orientation`: Radio 버튼의 배치 방향 (기본값: `horizontal`)
  - `horizontal`: 가로 배치
  - `vertical`: 세로 배치

- `disabled`: 전체 그룹 비활성화 여부

- `required`: 필수 선택 여부

- `name`: form 제출 시 사용되는 이름

- `className`: 추가 CSS 클래스

- `children`: RadioItem 컴포넌트들

### RadioItem

```typescript
interface RadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  value: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
```

#### Props 설명

- `value`: 라디오 버튼의 값 (필수)

- `id`: HTML id 속성 (label과 연결 시 사용)

- `disabled`: 개별 버튼 비활성화 여부

- `className`: 추가 CSS 클래스

- `children`: 레이블 텍스트 또는 요소

## 기본 사용법

```tsx
import { RadioGroup, RadioItem } from "@line/abc-def-react";

function Example() {
  return (
    <RadioGroup defaultValue="option1">
      <RadioItem value="option1" id="r1">
        옵션 1
      </RadioItem>
      <RadioItem value="option2" id="r2">
        옵션 2
      </RadioItem>
      <RadioItem value="option3" id="r3">
        옵션 3
      </RadioItem>
    </RadioGroup>
  );
}
```

## 사용 예시

### 비제어 컴포넌트

```tsx
function UncontrolledExample() {
  return (
    <RadioGroup defaultValue="comfortable">
      <RadioItem value="default" id="r1">
        Default
      </RadioItem>
      <RadioItem value="comfortable" id="r2">
        Comfortable
      </RadioItem>
      <RadioItem value="compact" id="r3">
        Compact
      </RadioItem>
    </RadioGroup>
  );
}
```

### 제어 컴포넌트

```tsx
function ControlledExample() {
  const [value, setValue] = React.useState("option1");

  return (
    <div className="space-y-4">
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioItem value="option1" id="r1">
          옵션 1
        </RadioItem>
        <RadioItem value="option2" id="r2">
          옵션 2
        </RadioItem>
        <RadioItem value="option3" id="r3">
          옵션 3
        </RadioItem>
      </RadioGroup>
      <p>선택된 값: {value}</p>
    </div>
  );
}
```

### Horizontal (가로 배치)

```tsx
<RadioGroup orientation="horizontal">
  <RadioItem value="item1" id="r1">
    Item 1
  </RadioItem>
  <RadioItem value="item2" id="r2">
    Item 2
  </RadioItem>
  <RadioItem value="item3" id="r3">
    Item 3
  </RadioItem>
</RadioGroup>
```

### Vertical (세로 배치)

```tsx
<RadioGroup orientation="vertical">
  <RadioItem value="item1" id="r1">
    Item 1
  </RadioItem>
  <RadioItem value="item2" id="r2">
    Item 2
  </RadioItem>
  <RadioItem value="item3" id="r3">
    Item 3
  </RadioItem>
</RadioGroup>
```

### Disabled 상태

#### 전체 그룹 비활성화

```tsx
<RadioGroup disabled defaultValue="option1">
  <RadioItem value="option1" id="r1">
    옵션 1
  </RadioItem>
  <RadioItem value="option2" id="r2">
    옵션 2
  </RadioItem>
</RadioGroup>
```

#### 개별 항목 비활성화

```tsx
<RadioGroup>
  <RadioItem value="item1" id="r1">
    Item 1
  </RadioItem>
  <RadioItem value="item2" id="r2">
    Item 2
  </RadioItem>
  <RadioItem value="item3" id="r3" disabled>
    Item 3 (비활성화)
  </RadioItem>
</RadioGroup>
```

### Form과 함께 사용

```tsx
function FormExample() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("선택된 옵션:", formData.get("size"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>사이즈 선택</legend>
        <RadioGroup name="size" defaultValue="medium" required>
          <RadioItem value="small" id="size-small">
            Small
          </RadioItem>
          <RadioItem value="medium" id="size-medium">
            Medium
          </RadioItem>
          <RadioItem value="large" id="size-large">
            Large
          </RadioItem>
        </RadioGroup>
      </fieldset>
      <button type="submit">제출</button>
    </form>
  );
}
```

### 설정 선택

```tsx
function SettingsExample() {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className="space-y-4">
      <h3>테마 설정</h3>
      <RadioGroup value={theme} onValueChange={setTheme} orientation="vertical">
        <RadioItem value="light" id="theme-light">
          라이트 모드
        </RadioItem>
        <RadioItem value="dark" id="theme-dark">
          다크 모드
        </RadioItem>
        <RadioItem value="system" id="theme-system">
          시스템 설정 따르기
        </RadioItem>
      </RadioGroup>
    </div>
  );
}
```

### 결제 방법 선택

```tsx
function PaymentMethodExample() {
  const [method, setMethod] = React.useState("card");

  return (
    <div className="space-y-4">
      <h3>결제 방법</h3>
      <RadioGroup
        value={method}
        onValueChange={setMethod}
        orientation="vertical"
      >
        <RadioItem value="card" id="pay-card">
          신용카드
        </RadioItem>
        <RadioItem value="bank" id="pay-bank">
          계좌이체
        </RadioItem>
        <RadioItem value="phone" id="pay-phone">
          휴대폰 결제
        </RadioItem>
        <RadioItem value="kakao" id="pay-kakao">
          카카오페이
        </RadioItem>
      </RadioGroup>
    </div>
  );
}
```

### 조건부 렌더링

```tsx
function ConditionalExample() {
  const [shipping, setShipping] = React.useState("standard");

  return (
    <div className="space-y-4">
      <RadioGroup
        value={shipping}
        onValueChange={setShipping}
        orientation="vertical"
      >
        <RadioItem value="standard" id="ship-standard">
          일반 배송 (무료)
        </RadioItem>
        <RadioItem value="express" id="ship-express">
          빠른 배송 (+3,000원)
        </RadioItem>
        <RadioItem value="overnight" id="ship-overnight">
          당일 배송 (+5,000원)
        </RadioItem>
      </RadioGroup>

      {shipping === "overnight" && (
        <p className="text-sm text-orange-600">
          당일 배송은 오후 2시 이전 주문만 가능합니다.
        </p>
      )}
    </div>
  );
}
```

### 복잡한 레이블

```tsx
function ComplexLabelExample() {
  return (
    <RadioGroup orientation="vertical">
      <RadioItem value="basic" id="plan-basic">
        <div>
          <div className="font-semibold">Basic Plan</div>
          <div className="text-sm text-gray-600">₩9,900/월</div>
        </div>
      </RadioItem>
      <RadioItem value="pro" id="plan-pro">
        <div>
          <div className="font-semibold">Pro Plan</div>
          <div className="text-sm text-gray-600">₩19,900/월</div>
        </div>
      </RadioItem>
      <RadioItem value="enterprise" id="plan-enterprise">
        <div>
          <div className="font-semibold">Enterprise Plan</div>
          <div className="text-sm text-gray-600">문의하기</div>
        </div>
      </RadioItem>
    </RadioGroup>
  );
}
```

## 디자인 토큰

Radio Group은 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                       | Default Value                            | Description        |
| --------------------------- | ---------------------------------------- | ------------------ |
| `--radio-group-fg-label`    | `var(--fg-neutral-primary)`              | 레이블 텍스트 색상 |
| `--radio-group-border`      | `var(--border-neutral-tertiary)`         | 테두리 색상        |
| `--radio-group-bg`          | `var(--bg-neutral-primary)`              | 배경 색상          |
| `--radio-group-bg-selected` | `var(--tint, var(--bg-neutral-inverse))` | 선택됨 배경 색상   |

### 토큰 커스터마이징 예시

```css
.custom-radio-group {
  --radio-group-bg-selected: var(--bg-tint-blue-bold);
  --radio-group-border: var(--border-tint-blue);
}
```

```tsx
<RadioGroup className="custom-radio-group" defaultValue="option1">
  <RadioItem value="option1" id="r1">
    커스텀 스타일
  </RadioItem>
  <RadioItem value="option2" id="r2">
    옵션 2
  </RadioItem>
</RadioGroup>
```

## 접근성

- **키보드 네비게이션**:
  - `Tab`: RadioGroup으로 이동
  - `Arrow Keys`: 선택 항목 간 이동
  - `Space`: 현재 포커스된 항목 선택

- **스크린 리더**: Radix UI RadioGroup primitive를 기반으로 하여 자동으로 접근성 속성이 제공됩니다

- **role 속성**: RadioGroup은 `role="radiogroup"`, RadioItem은 `role="radio"` 속성을 자동으로 가집니다

- **레이블**: 각 RadioItem에 명확한 레이블을 제공하세요

  ```tsx
  // ✅ 좋은 예
  <RadioItem value="option1" id="r1">
    옵션 1
  </RadioItem>

  // ❌ 나쁜 예 (레이블 없음)
  <RadioItem value="option1" id="r1" />
  ```

- **fieldset과 legend**: 관련된 라디오 버튼 그룹은 fieldset으로 감싸세요
  ```tsx
  <fieldset>
    <legend>배송 방법 선택</legend>
    <RadioGroup>
      <RadioItem value="standard">일반 배송</RadioItem>
      <RadioItem value="express">빠른 배송</RadioItem>
    </RadioGroup>
  </fieldset>
  ```

## 사용 시 주의사항

1. **Radio vs Checkbox**
   - **RadioGroup**: 여러 옵션 중 하나만 선택
   - **Checkbox**: 여러 개 선택 가능

   ```tsx
   // ✅ RadioGroup 사용 (단일 선택)
   <RadioGroup>
     <RadioItem value="1">옵션 1</RadioItem>
     <RadioItem value="2">옵션 2</RadioItem>
   </RadioGroup>

   // ✅ Checkbox 사용 (다중 선택)
   <Checkbox>옵션 1</Checkbox>
   <Checkbox>옵션 2</Checkbox>
   ```

2. **value 속성 필수**
   - 각 RadioItem은 고유한 `value` 값을 가져야 합니다

   ```tsx
   // ✅ 올바른 사용
   <RadioItem value="option1">옵션 1</RadioItem>

   // ❌ 잘못된 사용 (value 없음)
   <RadioItem>옵션 1</RadioItem>
   ```

3. **기본 선택값 제공**
   - 사용자 경험을 위해 defaultValue를 제공하는 것이 좋습니다

   ```tsx
   <RadioGroup defaultValue="option1">
     <RadioItem value="option1">옵션 1</RadioItem>
     <RadioItem value="option2">옵션 2</RadioItem>
   </RadioGroup>
   ```

4. **orientation 선택**
   - 공간이 제한적일 때: `horizontal`
   - 여러 옵션이 있을 때: `vertical`
   - 긴 레이블이 있을 때: `vertical`

5. **너무 많은 옵션**
   - 5개 이상의 옵션이 있다면 Select 컴포넌트 사용을 고려하세요

   ```tsx
   // ❌ 너무 많은 라디오 버튼
   <RadioGroup>
     {countries.map(country => (
       <RadioItem key={country} value={country}>{country}</RadioItem>
     ))}
   </RadioGroup>

   // ✅ Select 사용
   <Select>
     {countries.map(country => (
       <SelectItem key={country} value={country}>{country}</SelectItem>
     ))}
   </Select>
   ```

6. **Form 제출**
   - `name` prop을 설정하여 form 데이터에 포함되도록 하세요
   ```tsx
   <RadioGroup name="preference" defaultValue="option1">
     <RadioItem value="option1">옵션 1</RadioItem>
   </RadioGroup>
   ```

## 관련 컴포넌트

- [Checkbox](./checkbox.md) - 다중 선택 옵션
- [Select](./select.md) - 드롭다운 선택
- [Switch](./switch.md) - 토글 스위치
- [Toggle Group](./toggle-group.md) - 토글 버튼 그룹
