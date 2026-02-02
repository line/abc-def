# Combobox

Combobox는 검색 가능한 드롭다운 선택 컴포넌트입니다. Popover와 cmdk를 기반으로 구현되었습니다.

## Props

### Combobox

- `open?: boolean` - 열림 상태
- `onOpenChange?: (open: boolean) => void` - 열림 상태 변경 시 콜백

### ComboboxTrigger

- `trigger?: 'click' | 'hover'` - 트리거 타입 (기본값: `'click'`)
- `variant?: ButtonVariant` - 버튼 variant (기본값: `'outline'`)
- `asChild?: boolean` - 자식 요소를 트리거로 사용

### ComboboxInput

- `icon?: React.ReactNode` - 커스텀 검색 아이콘
- `placeholder?: string` - placeholder 텍스트

### ComboboxList

- `maxHeight?: string` - 최대 높이

### ComboboxItem

- `value: string` - 아이템 값
- `onSelect?: (value: string) => void` - 선택 시 콜백

### ComboboxSelectItem

- `checked?: boolean` - 선택 여부 표시
- `value: string` - 아이템 값
- `onSelect?: (value: string) => void` - 선택 시 콜백

## 기본 사용법

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@line/abc-def-react";

function Example() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>{value || "Select..."}</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxList>
          <ComboboxItem value="apple" onSelect={setValue}>
            Apple
          </ComboboxItem>
          <ComboboxItem value="banana" onSelect={setValue}>
            Banana
          </ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

## 사용 예시

### 기본 선택

```tsx
function BasicCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const items = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>
        {items.find((item) => item.value === value)?.label ||
          "Select framework..."}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search framework..." />
        <ComboboxList maxHeight="300px">
          {items.map((item) => (
            <ComboboxItem
              key={item.value}
              value={item.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}
            >
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### Check 표시 선택

```tsx
function ComboboxWithCheck() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const languages = [
    { value: "en", label: "English" },
    { value: "ko", label: "Korean" },
    { value: "ja", label: "Japanese" },
    { value: "zh", label: "Chinese" },
  ];

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>
        {languages.find((lang) => lang.value === value)?.label ||
          "Select language..."}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search language..." />
        <ComboboxList>
          {languages.map((lang) => (
            <ComboboxSelectItem
              key={lang.value}
              value={lang.value}
              checked={value === lang.value}
              onSelect={(currentValue) => {
                setValue(currentValue);
                setOpen(false);
              }}
            >
              {lang.label}
            </ComboboxSelectItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### 호버 트리거

```tsx
function HoverCombobox() {
  const [value, setValue] = React.useState("");

  return (
    <Combobox>
      <ComboboxTrigger trigger="hover">
        {value || "Hover to open..."}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="option1" onSelect={setValue}>
            Option 1
          </ComboboxItem>
          <ComboboxItem value="option2" onSelect={setValue}>
            Option 2
          </ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### 검색 필터링

```tsx
function FilterableCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");

  const countries = [
    { value: "us", label: "United States" },
    { value: "kr", label: "South Korea" },
    { value: "jp", label: "Japan" },
    { value: "cn", label: "China" },
    { value: "uk", label: "United Kingdom" },
  ];

  const filtered = countries.filter((country) =>
    country.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>
        {countries.find((c) => c.value === value)?.label || "Select country..."}
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput
          placeholder="Search country..."
          value={search}
          onValueChange={setSearch}
        />
        <ComboboxList>
          {filtered.length === 0 ? (
            <ComboboxEmpty>No country found.</ComboboxEmpty>
          ) : (
            filtered.map((country) => (
              <ComboboxSelectItem
                key={country.value}
                value={country.value}
                checked={value === country.value}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                }}
              >
                {country.label}
              </ComboboxSelectItem>
            ))
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### 그룹화된 아이템

```tsx
function GroupedCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>{value || "Select..."}</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxCaption>Fruits</ComboboxCaption>
            <ComboboxItem value="apple" onSelect={setValue}>
              Apple
            </ComboboxItem>
            <ComboboxItem value="banana" onSelect={setValue}>
              Banana
            </ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxCaption>Vegetables</ComboboxCaption>
            <ComboboxItem value="carrot" onSelect={setValue}>
              Carrot
            </ComboboxItem>
            <ComboboxItem value="tomato" onSelect={setValue}>
              Tomato
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### 아이콘과 함께

```tsx
function ComboboxWithIcons() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const options = [
    { value: "home", label: "Home", icon: "RiHome2Line" },
    { value: "settings", label: "Settings", icon: "RiSettings3Line" },
    { value: "profile", label: "Profile", icon: "RiUser3Line" },
  ];

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>{value || "Select option..."}</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxList>
          {options.map((option) => (
            <ComboboxItem
              key={option.value}
              value={option.value}
              onSelect={(val) => {
                setValue(val);
                setOpen(false);
              }}
            >
              <Icon name={option.icon} size={16} />
              <span>{option.label}</span>
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### 커스텀 트리거

```tsx
function CustomTriggerCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger asChild>
        <div className="cursor-pointer rounded border p-2">
          Custom Trigger: {value || "None"}
        </div>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxList>
          <ComboboxItem value="option1" onSelect={setValue}>
            Option 1
          </ComboboxItem>
          <ComboboxItem value="option2" onSelect={setValue}>
            Option 2
          </ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### 비동기 데이터 로딩

```tsx
function AsyncCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (open) {
      setLoading(true);
      // API 호출 시뮬레이션
      setTimeout(() => {
        setItems([
          { value: "item1", label: "Item 1" },
          { value: "item2", label: "Item 2" },
        ]);
        setLoading(false);
      }, 1000);
    }
  }, [open]);

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <ComboboxTrigger>{value || "Select..."}</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search..." />
        <ComboboxList>
          {loading ? (
            <ComboboxEmpty>Loading...</ComboboxEmpty>
          ) : (
            items.map((item) => (
              <ComboboxItem
                key={item.value}
                value={item.value}
                onSelect={setValue}
              >
                {item.label}
              </ComboboxItem>
            ))
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
```

### Form과 함께 사용

```tsx
import { useForm } from "react-hook-form";

function ComboboxForm() {
  const form = useForm({
    defaultValues: {
      framework: "",
    },
  });

  const [open, setOpen] = React.useState(false);

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <Combobox open={open} onOpenChange={setOpen}>
        <ComboboxTrigger>
          {form.watch("framework") || "Select framework..."}
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput placeholder="Search..." />
          <ComboboxList>
            <ComboboxItem
              value="react"
              onSelect={(val) => {
                form.setValue("framework", val);
                setOpen(false);
              }}
            >
              React
            </ComboboxItem>
            <ComboboxItem
              value="vue"
              onSelect={(val) => {
                form.setValue("framework", val);
                setOpen(false);
              }}
            >
              Vue
            </ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Design Tokens

| Token                       | Value                            | Description             |
| --------------------------- | -------------------------------- | ----------------------- |
| `--combobox-fg`             | `var(--fg-neutral-primary)`      | 텍스트 색상             |
| `--combobox-fg-placeholder` | `var(--fg-neutral-tertiary)`     | placeholder 텍스트 색상 |
| `--combobox-fg-secondary`   | `var(--fg-neutral-tertiary)`     | 부차적 텍스트 색상      |
| `--combobox-border`         | `var(--border-neutral-tertiary)` | 테두리 색상             |
| `--combobox-bg`             | `var(--bg-neutral-primary)`      | 배경 색상               |
| `--combobox-bg-hover`       | `var(--bg-neutral-tertiary)`     | 호버 배경 색상          |

## 접근성

- 키보드 네비게이션 지원 (화살표 키로 아이템 이동, Enter로 선택)
- Escape 키로 닫기
- 스크린 리더가 선택 가능한 옵션을 읽어줌
- ARIA 속성으로 상태 전달
- 검색 입력란은 자동으로 포커스됨

## 사용 시 주의사항

- ComboboxTrigger의 trigger="hover"는 모바일에서 작동하지 않습니다
- ComboboxInput의 검색 기능은 cmdk가 자동으로 처리합니다
- 커스텀 필터링이 필요한 경우 onValueChange를 사용하세요
- ComboboxSelectItem은 체크 아이콘을 포함합니다
- ComboboxItem과 ComboboxSelectItem을 혼용하지 마세요
- maxHeight를 설정하여 긴 리스트의 스크롤을 제어하세요
- asChild를 사용하면 완전히 커스텀 트리거를 만들 수 있습니다
- 빈 결과는 ComboboxEmpty로 표시하세요

## 관련 컴포넌트

- [Select](./select.md) - 단순 선택 드롭다운
- [MultiSelect](./multi-select.md) - 다중 선택 드롭다운
- [Popover](./popover.md) - 기반 컴포넌트
- [TextInput](./text-input.md) - 검색 입력
