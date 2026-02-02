# useTheme

useTheme은 전역 테마 설정(size, radius)을 읽어오는 Hook입니다.

## 반환값

```tsx
{
  themeSize: 'small' | 'medium' | 'large',
  themeRadius: 'small' | 'medium' | 'large'
}
```

- `themeSize`: 현재 테마의 size 설정 (기본값: `'small'`)
- `themeRadius`: 현재 테마의 radius 설정 (기본값: `'medium'`)

## 기본 사용법

```tsx
import useTheme from "@line/abc-def-react";

function Component() {
  const { themeSize, themeRadius } = useTheme();

  return (
    <div>
      Current size: {themeSize}
      Current radius: {themeRadius}
    </div>
  );
}
```

## 사용 예시

### 컴포넌트에서 테마 읽기

```tsx
function ThemedButton() {
  const { themeSize, themeRadius } = useTheme();

  return (
    <button className={`btn-${themeSize} rounded-${themeRadius}`}>
      Themed Button
    </button>
  );
}
```

### 조건부 렌더링

```tsx
function ResponsiveComponent() {
  const { themeSize } = useTheme();

  return (
    <div>
      {themeSize === "small" && <SmallView />}
      {themeSize === "medium" && <MediumView />}
      {themeSize === "large" && <LargeView />}
    </div>
  );
}
```

### 동적 스타일 적용

```tsx
function DynamicCard() {
  const { themeRadius } = useTheme();

  const radiusMap = {
    small: "4px",
    medium: "8px",
    large: "12px",
  };

  return (
    <div style={{ borderRadius: radiusMap[themeRadius] }}>Card content</div>
  );
}
```

### 커스텀 컴포넌트에서 사용

```tsx
function CustomButton({ size, ...props }: { size?: Size }) {
  const { themeSize } = useTheme();
  const finalSize = size ?? themeSize;

  return <button className={`custom-btn-${finalSize}`} {...props} />;
}
```

### 아이콘 크기 결정

```tsx
import { ICON_SIZE } from "@line/abc-def-react/constants";

function ThemedIcon() {
  const { themeSize } = useTheme();

  return <Icon name="RiHomeLine" size={ICON_SIZE[themeSize]} />;
}
```

### Props와 테마 결합

```tsx
function FlexibleComponent({ size, radius }: { size?: Size; radius?: Radius }) {
  const { themeSize, themeRadius } = useTheme();

  return (
    <div
      className={cn(
        `size-${size ?? themeSize}`,
        `radius-${radius ?? themeRadius}`,
      )}
    >
      Content
    </div>
  );
}
```

### 테마 기반 레이아웃

```tsx
function ThemedLayout() {
  const { themeSize } = useTheme();

  const spacing = {
    small: "8px",
    medium: "16px",
    large: "24px",
  };

  return <div style={{ padding: spacing[themeSize] }}>Layout content</div>;
}
```

### 여러 컴포넌트에서 일관성 유지

```tsx
function Form() {
  const { themeSize, themeRadius } = useTheme();

  return (
    <form>
      <TextInput size={themeSize} radius={themeRadius} />
      <Button size={themeSize} radius={themeRadius} />
      <Select size={themeSize} radius={themeRadius} />
    </form>
  );
}
```

## 테마 설정 방법

테마는 `<body>` 요소의 `data-size`와 `data-radius` 속성으로 설정합니다:

```html
<body data-size="medium" data-radius="large">
  <!-- 앱 콘텐츠 -->
</body>
```

### 동적으로 테마 변경

```tsx
function ThemeSwitcher() {
  const [size, setSize] = React.useState<"small" | "medium" | "large">(
    "medium",
  );
  const [radius, setRadius] = React.useState<"small" | "medium" | "large">(
    "medium",
  );

  React.useEffect(() => {
    document.body.setAttribute("data-size", size);
    document.body.setAttribute("data-radius", radius);
  }, [size, radius]);

  return (
    <div className="space-y-4">
      <div>
        <Label>Size</Label>
        <Select value={size} onValueChange={(val) => setSize(val as any)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Radius</Label>
        <Select value={radius} onValueChange={(val) => setRadius(val as any)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="large">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
```

### 테마 Context Provider

```tsx
const ThemeContext = React.createContext<{
  size: Size;
  radius: Radius;
  setSize: (size: Size) => void;
  setRadius: (radius: Radius) => void;
} | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [size, setSize] = React.useState<Size>("medium");
  const [radius, setRadius] = React.useState<Radius>("medium");

  React.useEffect(() => {
    document.body.setAttribute("data-size", size);
    document.body.setAttribute("data-radius", radius);
  }, [size, radius]);

  return (
    <ThemeContext.Provider value={{ size, radius, setSize, setRadius }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### localStorage에 테마 저장

```tsx
function usePersistedTheme() {
  const [size, setSize] = React.useState<Size>(() => {
    return (localStorage.getItem("theme-size") as Size) ?? "medium";
  });

  const [radius, setRadius] = React.useState<Radius>(() => {
    return (localStorage.getItem("theme-radius") as Radius) ?? "medium";
  });

  React.useEffect(() => {
    localStorage.setItem("theme-size", size);
    document.body.setAttribute("data-size", size);
  }, [size]);

  React.useEffect(() => {
    localStorage.setItem("theme-radius", radius);
    document.body.setAttribute("data-radius", radius);
  }, [radius]);

  return { size, radius, setSize, setRadius };
}
```

## 기본값

테마 속성이 설정되지 않은 경우 다음 기본값이 사용됩니다:

- `themeSize`: `'small'`
- `themeRadius`: `'medium'`

## SSR (Server-Side Rendering)

서버 사이드 렌더링 환경에서는 `window` 객체가 없으므로 항상 기본값을 반환합니다:

```tsx
// 서버에서
useTheme(); // { themeSize: 'small', themeRadius: 'medium' }
```

클라이언트에서 hydration 후 실제 테마 값으로 업데이트됩니다.

## 사용 시 주의사항

- 이 Hook은 전역 테마 설정을 읽기만 합니다 (설정 변경 기능 없음)
- 테마 변경은 `document.body.setAttribute()`로 직접 수행해야 합니다
- SSR 환경에서는 기본값이 반환됩니다
- 컴포넌트에 size/radius prop이 전달되면 테마보다 우선합니다
- 모든 ABC Def 컴포넌트는 내부적으로 useTheme을 사용합니다
- 테마 설정은 전역적으로 모든 컴포넌트에 영향을 줍니다

## 관련 정보

- [Design Tokens](../design-tokens.md) - 테마 토큰 시스템
- [Usage Rules](../usage-rules.md) - 컴포넌트 사용 규칙
