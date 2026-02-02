# Checkbox

Checkbox는 사용자가 하나 이상의 옵션을 선택할 수 있는 입력 컴포넌트입니다. 체크됨, 체크 안됨, 중간 상태(indeterminate)를 지원합니다.

## Props

```typescript
interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: CheckedState) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  children?: React.ReactNode;
}
```

### Props 설명

- `checked`: 체크 상태 (기본값: `undefined`)
  - `true`: 체크됨
  - `false`: 체크 안됨
  - `'indeterminate'`: 중간 상태 (일부만 선택된 상태)
  - `undefined`: 비제어 컴포넌트로 동작

- `onCheckedChange`: 체크 상태가 변경될 때 호출되는 콜백 함수

- `disabled`: 비활성화 여부 (기본값: `false`)

- `required`: 필수 입력 여부

- `name`: form 제출 시 사용되는 이름

- `value`: form 제출 시 사용되는 값

- `size`: Checkbox의 크기 (기본값: theme에서 설정된 값)
  - `small`: 작은 크기
  - `medium`: 중간 크기
  - `large`: 큰 크기

- `className`: 추가 CSS 클래스

- `children`: 레이블 텍스트 또는 요소

## 기본 사용법

```tsx
import { Checkbox } from "@line/abc-def-react";

function Example() {
  return <Checkbox>동의합니다</Checkbox>;
}
```

## 사용 예시

### 비제어 컴포넌트

```tsx
function UncontrolledExample() {
  return (
    <div className="space-y-2">
      <Checkbox>옵션 1</Checkbox>
      <Checkbox>옵션 2</Checkbox>
      <Checkbox>옵션 3</Checkbox>
    </div>
  );
}
```

### 제어 컴포넌트

```tsx
function ControlledExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox checked={checked} onCheckedChange={setChecked}>
      {checked ? "선택됨" : "선택 안됨"}
    </Checkbox>
  );
}
```

### Checked 상태

```tsx
// 기본 (체크 안됨)
<Checkbox checked={false}>체크 안됨</Checkbox>

// 체크됨
<Checkbox checked={true}>체크됨</Checkbox>

// 중간 상태
<Checkbox checked="indeterminate">중간 상태</Checkbox>
```

### Disabled 상태

```tsx
<div className="space-y-2">
  <Checkbox disabled>비활성화</Checkbox>
  <Checkbox checked disabled>
    체크됨 & 비활성화
  </Checkbox>
  <Checkbox checked="indeterminate" disabled>
    중간 상태 & 비활성화
  </Checkbox>
</div>
```

### Size 예시

```tsx
<div className="space-y-2">
  <Checkbox size="small">작은 크기</Checkbox>
  <Checkbox size="medium">중간 크기</Checkbox>
  <Checkbox size="large">큰 크기</Checkbox>
</div>
```

### 레이블이 없는 Checkbox

```tsx
// 테이블이나 리스트에서 사용
<Checkbox size="small" className="mt-1" />
```

### Form과 함께 사용

```tsx
function FormExample() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("이메일 수신:", formData.get("email"));
    console.log("SMS 수신:", formData.get("sms"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Checkbox name="email" value="yes">
        이메일 수신 동의
      </Checkbox>
      <Checkbox name="sms" value="yes">
        SMS 수신 동의
      </Checkbox>
      <button type="submit">제출</button>
    </form>
  );
}
```

### 전체 선택 / 부분 선택

```tsx
function SelectAllExample() {
  const [checkedItems, setCheckedItems] = React.useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const someChecked = Object.values(checkedItems).some(Boolean);
  const indeterminate = someChecked && !allChecked;

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    const newValue = checked === true;
    setCheckedItems({
      item1: newValue,
      item2: newValue,
      item3: newValue,
    });
  };

  return (
    <div className="space-y-2">
      <Checkbox
        checked={indeterminate ? "indeterminate" : allChecked}
        onCheckedChange={handleSelectAll}
      >
        전체 선택
      </Checkbox>
      <div className="ml-6 space-y-2">
        <Checkbox
          checked={checkedItems.item1}
          onCheckedChange={(checked) =>
            setCheckedItems({ ...checkedItems, item1: !!checked })
          }
        >
          항목 1
        </Checkbox>
        <Checkbox
          checked={checkedItems.item2}
          onCheckedChange={(checked) =>
            setCheckedItems({ ...checkedItems, item2: !!checked })
          }
        >
          항목 2
        </Checkbox>
        <Checkbox
          checked={checkedItems.item3}
          onCheckedChange={(checked) =>
            setCheckedItems({ ...checkedItems, item3: !!checked })
          }
        >
          항목 3
        </Checkbox>
      </div>
    </div>
  );
}
```

### 약관 동의

```tsx
function TermsAgreement() {
  const [agreements, setAgreements] = React.useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const allRequired = agreements.terms && agreements.privacy;

  return (
    <div className="space-y-4">
      <h3>약관 동의</h3>
      <div className="space-y-2">
        <Checkbox
          required
          checked={agreements.terms}
          onCheckedChange={(checked) =>
            setAgreements({ ...agreements, terms: !!checked })
          }
        >
          (필수) 이용약관 동의
        </Checkbox>
        <Checkbox
          required
          checked={agreements.privacy}
          onCheckedChange={(checked) =>
            setAgreements({ ...agreements, privacy: !!checked })
          }
        >
          (필수) 개인정보 처리방침 동의
        </Checkbox>
        <Checkbox
          checked={agreements.marketing}
          onCheckedChange={(checked) =>
            setAgreements({ ...agreements, marketing: !!checked })
          }
        >
          (선택) 마케팅 정보 수신 동의
        </Checkbox>
      </div>
      <button disabled={!allRequired}>다음</button>
    </div>
  );
}
```

## 디자인 토큰

Checkbox는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                   | Default Value                            | Description        |
| ----------------------- | ---------------------------------------- | ------------------ |
| `--checkbox-fg`         | `var(--fg-neutral-inverse)`              | 체크 아이콘 색상   |
| `--checkbox-fg-label`   | `var(--fg-neutral-primary)`              | 레이블 텍스트 색상 |
| `--checkbox-border`     | `var(--border-neutral-secondary)`        | 테두리 색상        |
| `--checkbox-bg`         | `var(--bg-neutral-primary)`              | 배경 색상          |
| `--checkbox-bg-checked` | `var(--tint, var(--bg-neutral-inverse))` | 체크됨 배경 색상   |

### 토큰 커스터마이징 예시

```css
.custom-checkbox {
  --checkbox-bg-checked: var(--bg-tint-blue-bold);
  --checkbox-border: var(--border-tint-blue);
}
```

```tsx
<Checkbox className="custom-checkbox" checked>
  커스텀 스타일
</Checkbox>
```

## 접근성

- **키보드 네비게이션**:
  - `Tab`: 다음 Checkbox로 이동
  - `Shift + Tab`: 이전 Checkbox로 이동
  - `Space`: 체크 상태 토글

- **스크린 리더**: Radix UI Checkbox primitive를 기반으로 하여 자동으로 접근성 속성이 제공됩니다

- **레이블**: 항상 명확한 레이블을 제공하세요

  ```tsx
  // ✅ 좋은 예
  <Checkbox>이메일 수신 동의</Checkbox>

  // ❌ 나쁜 예 (레이블 없음)
  <Checkbox />
  ```

- **required 속성**: 필수 항목임을 나타내세요

  ```tsx
  <Checkbox required>(필수) 이용약관 동의</Checkbox>
  ```

- **aria-label**: 레이블 텍스트가 없는 경우 aria-label을 제공하세요
  ```tsx
  <Checkbox aria-label="행 선택" size="small" />
  ```

## 사용 시 주의사항

1. **Checkbox vs Radio**
   - **Checkbox**: 여러 개 선택 가능
   - **Radio**: 하나만 선택 가능

   ```tsx
   // ✅ Checkbox 사용 (다중 선택)
   <Checkbox>옵션 1</Checkbox>
   <Checkbox>옵션 2</Checkbox>

   // ✅ Radio 사용 (단일 선택)
   <RadioGroup>
     <RadioItem value="1">옵션 1</RadioItem>
     <RadioItem value="2">옵션 2</RadioItem>
   </RadioGroup>
   ```

2. **제어 vs 비제어 컴포넌트**
   - 상태 관리가 필요한 경우: 제어 컴포넌트 (`checked` prop 사용)
   - 간단한 form: 비제어 컴포넌트 (`name`과 `value` prop 사용)

3. **indeterminate 상태**
   - 전체 선택/해제 시나리오에서만 사용하세요
   - 일반적인 체크박스에는 사용하지 마세요

4. **레이블 클릭 영역**
   - `children`으로 전달된 레이블도 클릭 가능합니다
   - 별도의 `<label>` 요소는 필요하지 않습니다

5. **Form 제출**
   - `name`과 `value` prop을 설정하여 form 데이터에 포함되도록 하세요
   - 체크되지 않은 checkbox는 form 데이터에 포함되지 않습니다

6. **그룹화**
   - 관련된 checkbox는 시각적으로 그룹화하세요
   ```tsx
   <fieldset>
     <legend>알림 설정</legend>
     <Checkbox>이메일</Checkbox>
     <Checkbox>SMS</Checkbox>
     <Checkbox>푸시 알림</Checkbox>
   </fieldset>
   ```

## 관련 컴포넌트

- [Radio](./radio.md) - 단일 선택 옵션
- [Switch](./switch.md) - 토글 스위치
- [Select](./select.md) - 드롭다운 선택
