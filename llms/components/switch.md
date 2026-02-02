# Switch

Switch는 ON/OFF 상태를 전환할 수 있는 토글 컴포넌트입니다. 설정을 즉시 활성화하거나 비활성화할 때 사용합니다.

## Props

```typescript
interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  color?: "default" | "blue" | "orange" | "red" | "green";
  className?: string;
  children?: React.ReactNode;
}
```

### Props 설명

- `checked`: 체크 상태 (제어 컴포넌트)

- `defaultChecked`: 초기 체크 상태 (비제어 컴포넌트)

- `onCheckedChange`: 체크 상태가 변경될 때 호출되는 콜백 함수

- `disabled`: 비활성화 여부 (기본값: `false`)

- `required`: 필수 선택 여부

- `name`: form 제출 시 사용되는 이름

- `value`: form 제출 시 사용되는 값 (기본값: `"on"`)

- `color`: Switch의 활성 색상 (기본값: `default`)
  - `default`: 기본 회색
  - `blue`: 파란색
  - `orange`: 주황색
  - `red`: 빨간색
  - `green`: 초록색

- `className`: 추가 CSS 클래스

- `children`: 레이블 텍스트 또는 요소

## 기본 사용법

```tsx
import { Switch } from "@line/abc-def-react";

function Example() {
  return <Switch>알림 활성화</Switch>;
}
```

## 사용 예시

### 비제어 컴포넌트

```tsx
function UncontrolledExample() {
  return (
    <div className="space-y-2">
      <Switch defaultChecked>기본적으로 ON</Switch>
      <Switch>기본적으로 OFF</Switch>
    </div>
  );
}
```

### 제어 컴포넌트

```tsx
function ControlledExample() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="space-y-2">
      <Switch checked={enabled} onCheckedChange={setEnabled}>
        {enabled ? "활성화됨" : "비활성화됨"}
      </Switch>
      <p>현재 상태: {enabled ? "ON" : "OFF"}</p>
    </div>
  );
}
```

### Color 예시

#### Default (기본 회색)

```tsx
<Switch color="default" checked>
  기본 색상
</Switch>
```

#### Blue (파란색)

```tsx
<Switch color="blue" checked>
  파란색
</Switch>
```

#### Orange (주황색)

```tsx
<Switch color="orange" checked>
  주황색
</Switch>
```

#### Red (빨간색)

```tsx
<Switch color="red" checked>
  빨간색
</Switch>
```

#### Green (초록색)

```tsx
<Switch color="green" checked>
  초록색
</Switch>
```

### Disabled 상태

```tsx
<div className="space-y-2">
  <Switch checked disabled>
    활성화됨 & 비활성화
  </Switch>
  <Switch disabled>비활성화됨 & 비활성화</Switch>
</div>
```

### 레이블이 없는 Switch

```tsx
// 테이블이나 리스트에서 사용
<Switch checked />
```

### 알림 설정

```tsx
function NotificationSettings() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    push: false,
    sms: false,
  });

  return (
    <div className="space-y-4">
      <h3>알림 설정</h3>
      <div className="space-y-2">
        <Switch
          checked={notifications.email}
          onCheckedChange={(checked) =>
            setNotifications({ ...notifications, email: checked })
          }
          color="blue"
        >
          이메일 알림
        </Switch>
        <Switch
          checked={notifications.push}
          onCheckedChange={(checked) =>
            setNotifications({ ...notifications, push: checked })
          }
          color="blue"
        >
          푸시 알림
        </Switch>
        <Switch
          checked={notifications.sms}
          onCheckedChange={(checked) =>
            setNotifications({ ...notifications, sms: checked })
          }
          color="blue"
        >
          SMS 알림
        </Switch>
      </div>
    </div>
  );
}
```

### 테마 전환

```tsx
function ThemeToggle() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Switch checked={darkMode} onCheckedChange={setDarkMode} color="blue">
      다크 모드
    </Switch>
  );
}
```

### 기능 활성화/비활성화

```tsx
function FeatureToggle() {
  const [features, setFeatures] = React.useState({
    autoSave: true,
    spellCheck: false,
    wordWrap: true,
  });

  return (
    <div className="space-y-4">
      <h3>편집기 설정</h3>
      <div className="space-y-2">
        <Switch
          checked={features.autoSave}
          onCheckedChange={(checked) =>
            setFeatures({ ...features, autoSave: checked })
          }
          color="green"
        >
          자동 저장
        </Switch>
        <Switch
          checked={features.spellCheck}
          onCheckedChange={(checked) =>
            setFeatures({ ...features, spellCheck: checked })
          }
          color="blue"
        >
          맞춤법 검사
        </Switch>
        <Switch
          checked={features.wordWrap}
          onCheckedChange={(checked) =>
            setFeatures({ ...features, wordWrap: checked })
          }
          color="blue"
        >
          자동 줄바꿈
        </Switch>
      </div>
    </div>
  );
}
```

### Form과 함께 사용

```tsx
function FormExample() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("뉴스레터:", formData.get("newsletter"));
    console.log("마케팅:", formData.get("marketing"));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Switch name="newsletter" value="yes" defaultChecked>
        뉴스레터 수신
      </Switch>
      <Switch name="marketing" value="yes">
        마케팅 정보 수신
      </Switch>
      <button type="submit">저장</button>
    </form>
  );
}
```

### 조건부 컨텐츠 표시

```tsx
function ConditionalContent() {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  return (
    <div className="space-y-4">
      <Switch
        checked={showAdvanced}
        onCheckedChange={setShowAdvanced}
        color="blue"
      >
        고급 옵션 표시
      </Switch>

      {showAdvanced && (
        <div className="rounded border p-4">
          <h4>고급 설정</h4>
          <p>여기에 고급 옵션들이 표시됩니다.</p>
        </div>
      )}
    </div>
  );
}
```

### 상태별 색상 구분

```tsx
function StatusSwitches() {
  const [status, setStatus] = React.useState({
    critical: false,
    warning: false,
    success: true,
  });

  return (
    <div className="space-y-2">
      <Switch
        checked={status.critical}
        onCheckedChange={(checked) =>
          setStatus({ ...status, critical: checked })
        }
        color="red"
      >
        긴급 알림
      </Switch>
      <Switch
        checked={status.warning}
        onCheckedChange={(checked) =>
          setStatus({ ...status, warning: checked })
        }
        color="orange"
      >
        경고 알림
      </Switch>
      <Switch
        checked={status.success}
        onCheckedChange={(checked) =>
          setStatus({ ...status, success: checked })
        }
        color="green"
      >
        성공 알림
      </Switch>
    </div>
  );
}
```

### API 연동

```tsx
function ApiExample() {
  const [isPublic, setIsPublic] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleToggle = async (checked: boolean) => {
    setLoading(true);
    try {
      await fetch("/api/settings", {
        method: "POST",
        body: JSON.stringify({ public: checked }),
      });
      setIsPublic(checked);
    } catch (error) {
      console.error("Failed to update setting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Switch
      checked={isPublic}
      onCheckedChange={handleToggle}
      disabled={loading}
      color="blue"
    >
      공개 프로필
    </Switch>
  );
}
```

## 디자인 토큰

Switch는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                   | Default Value                 | Description              |
| ----------------------- | ----------------------------- | ------------------------ |
| `--switch-fg-label`     | `var(--fg-neutral-primary)`   | 레이블 텍스트 색상       |
| `--switch-bg-thumb`     | `var(--bg-neutral-primary)`   | 토글 버튼 배경 색상      |
| `--switch-bg-neutral`   | `var(--bg-neutral-inverse)`   | 활성화 시 기본 배경 색상 |
| `--switch-bg-blue`      | `var(--bg-tint-blue-bold)`    | 활성화 시 파란색 배경    |
| `--switch-bg-orange`    | `var(--bg-tint-orange-bold)`  | 활성화 시 주황색 배경    |
| `--switch-bg-red`       | `var(--bg-tint-red-bold)`     | 활성화 시 빨간색 배경    |
| `--switch-bg-green`     | `var(--bg-tint-green-bold)`   | 활성화 시 초록색 배경    |
| `--switch-bg-unchecked` | `var(--bg-neutral-secondary)` | 비활성화 시 배경 색상    |

### 토큰 커스터마이징 예시

```css
.custom-switch {
  --switch-bg-neutral: var(--bg-tint-purple-bold);
  --switch-bg-unchecked: var(--bg-neutral-tertiary);
}
```

```tsx
<Switch className="custom-switch" checked>
  커스텀 스타일
</Switch>
```

## 접근성

- **키보드 네비게이션**:
  - `Tab`: Switch로 이동
  - `Space`: 토글

- **스크린 리더**: Radix UI Switch primitive를 기반으로 하여 자동으로 접근성 속성이 제공됩니다

- **role 속성**: Switch는 `role="switch"` 속성을 자동으로 가집니다

- **레이블**: 명확한 레이블을 제공하세요

  ```tsx
  // ✅ 좋은 예
  <Switch>이메일 알림 활성화</Switch>

  // ❌ 나쁜 예 (레이블 없음)
  <Switch />
  ```

- **aria-label**: 레이블 텍스트가 없는 경우 aria-label을 제공하세요
  ```tsx
  <Switch aria-label="알림 활성화" />
  ```

## 사용 시 주의사항

1. **Switch vs Checkbox**
   - **Switch**: 즉시 효과가 적용되는 설정 (알림, 테마 등)
   - **Checkbox**: 폼 제출 시 처리되는 선택 (약관 동의 등)

   ```tsx
   // ✅ Switch 사용 (즉시 적용)
   <Switch onCheckedChange={toggleDarkMode}>다크 모드</Switch>

   // ✅ Checkbox 사용 (폼 제출 필요)
   <form>
     <Checkbox>이용약관 동의</Checkbox>
     <button>제출</button>
   </form>
   ```

2. **즉각적인 피드백**
   - Switch는 토글 즉시 효과가 나타나야 합니다
   - API 호출이 필요한 경우 로딩 상태를 표시하세요

   ```tsx
   <Switch checked={isPublic} onCheckedChange={handleToggle} disabled={loading}>
     공개 설정
   </Switch>
   ```

3. **적절한 색상 선택**
   - 기능에 맞는 색상을 사용하세요
   - `green`: 성공, 활성화
   - `red`: 위험, 긴급
   - `orange`: 경고
   - `blue`: 일반 기능
   - `default`: 중립적인 설정

4. **레이블 명확성**
   - "활성화/비활성화" 대신 구체적인 기능을 표시하세요

   ```tsx
   // ✅ 좋은 예
   <Switch>이메일 알림</Switch>

   // ❌ 나쁜 예
   <Switch>활성화</Switch>
   ```

5. **비활성화 상태**
   - 비활성화된 이유를 설명하세요

   ```tsx
   <div>
     <Switch disabled>프리미엄 기능</Switch>
     <p className="text-sm text-gray-600">프리미엄 플랜에서 사용 가능합니다</p>
   </div>
   ```

6. **Form 제출**
   - Switch는 즉시 적용되는 설정에 사용하세요
   - 폼 제출이 필요한 경우 Checkbox를 고려하세요

## 관련 컴포넌트

- [Checkbox](./checkbox.md) - 체크박스
- [Radio Group](./radio-group.md) - 라디오 버튼 그룹
- [Toggle Group](./toggle-group.md) - 토글 버튼 그룹
