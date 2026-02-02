# Multi Select

Multi Select는 여러 항목을 선택할 수 있는 드롭다운 선택 컴포넌트입니다. 선택된 항목은 Tag로 표시됩니다.

## Props

### MultiSelect

- `value?: string[]` - 선택된 값 배열
- `defaultValue?: string[]` - 기본 선택된 값 배열
- `onValueChange?: (value: string[]) => void` - 값 변경 시 콜백
- `size?: 'small' | 'medium' | 'large'` - 크기
- `radius?: 'small' | 'medium' | 'large'` - 모서리 둥글기
- `disabled?: boolean` - 비활성화 여부

### MultiSelectTrigger

- `asChild?: boolean` - 자식 요소를 트리거로 사용

### MultiSelectValue

- `placeholder?: React.ReactNode` - placeholder 텍스트

### MultiSelectContent

- `maxHeight?: string` - 최대 높이 (기본값: `'auto'`)

### MultiSelectItem

- `value: string` - 아이템 값
- `children: React.ReactNode` - 아이템 콘텐츠

## 기본 사용법

```tsx
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@line/abc-def-react";

function Example() {
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <MultiSelect value={values} onValueChange={setValues}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select items..." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectItem value="item1">Item 1</MultiSelectItem>
        <MultiSelectItem value="item2">Item 2</MultiSelectItem>
        <MultiSelectItem value="item3">Item 3</MultiSelectItem>
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

## 사용 예시

### 기본 다중 선택

```tsx
function BasicMultiSelect() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const frameworks = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  return (
    <div>
      <MultiSelect value={selected} onValueChange={setSelected}>
        <MultiSelectTrigger>
          <MultiSelectValue placeholder="Select frameworks..." />
        </MultiSelectTrigger>
        <MultiSelectContent>
          {frameworks.map((fw) => (
            <MultiSelectItem key={fw.value} value={fw.value}>
              {fw.label}
            </MultiSelectItem>
          ))}
        </MultiSelectContent>
      </MultiSelect>
      <p>Selected: {selected.join(", ")}</p>
    </div>
  );
}
```

### 아이콘과 함께

```tsx
function MultiSelectWithIcons() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const options = [
    { value: "email", icon: "RiMailLine", label: "Email" },
    { value: "sms", icon: "RiMessage2Line", label: "SMS" },
    { value: "push", icon: "RiNotification3Line", label: "Push" },
  ];

  return (
    <MultiSelect value={selected} onValueChange={setSelected}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select notification methods..." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        {options.map((option) => (
          <MultiSelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              <Icon name={option.icon} size={16} />
              <span>{option.label}</span>
            </div>
          </MultiSelectItem>
        ))}
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

### 크기 variants

```tsx
function MultiSelectSizes() {
  return (
    <div className="space-y-4">
      <MultiSelect size="small">
        <MultiSelectTrigger>
          <MultiSelectValue placeholder="Small" />
        </MultiSelectTrigger>
        <MultiSelectContent>
          <MultiSelectItem value="1">Option 1</MultiSelectItem>
          <MultiSelectItem value="2">Option 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>

      <MultiSelect size="medium">
        <MultiSelectTrigger>
          <MultiSelectValue placeholder="Medium" />
        </MultiSelectTrigger>
        <MultiSelectContent>
          <MultiSelectItem value="1">Option 1</MultiSelectItem>
          <MultiSelectItem value="2">Option 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>

      <MultiSelect size="large">
        <MultiSelectTrigger>
          <MultiSelectValue placeholder="Large" />
        </MultiSelectTrigger>
        <MultiSelectContent>
          <MultiSelectItem value="1">Option 1</MultiSelectItem>
          <MultiSelectItem value="2">Option 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>
    </div>
  );
}
```

### 비활성화

```tsx
function DisabledMultiSelect() {
  const [selected, setSelected] = React.useState<string[]>(["item1"]);

  return (
    <MultiSelect value={selected} onValueChange={setSelected} disabled>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Disabled..." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectItem value="item1">Item 1</MultiSelectItem>
        <MultiSelectItem value="item2">Item 2</MultiSelectItem>
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

### 최대 높이 제한

```tsx
function ScrollableMultiSelect() {
  const items = Array.from({ length: 50 }, (_, i) => ({
    value: `item${i + 1}`,
    label: `Item ${i + 1}`,
  }));

  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <MultiSelect value={selected} onValueChange={setSelected}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select items..." />
      </MultiSelectTrigger>
      <MultiSelectContent maxHeight="300px">
        {items.map((item) => (
          <MultiSelectItem key={item.value} value={item.value}>
            {item.label}
          </MultiSelectItem>
        ))}
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

### Form과 함께 사용

```tsx
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@line/abc-def-react";

function MultiSelectForm() {
  const form = useForm({
    defaultValues: {
      interests: [],
    },
  });

  const interests = [
    { value: "design", label: "Design" },
    { value: "development", label: "Development" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormField
          control={form.control}
          name="interests"
          rules={{ required: "Please select at least one interest" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interests</FormLabel>
              <FormControl>
                <MultiSelect value={field.value} onValueChange={field.onChange}>
                  <MultiSelectTrigger>
                    <MultiSelectValue placeholder="Select your interests..." />
                  </MultiSelectTrigger>
                  <MultiSelectContent>
                    {interests.map((interest) => (
                      <MultiSelectItem
                        key={interest.value}
                        value={interest.value}
                      >
                        {interest.label}
                      </MultiSelectItem>
                    ))}
                  </MultiSelectContent>
                </MultiSelect>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### 제어되지 않는 컴포넌트

```tsx
function UncontrolledMultiSelect() {
  return (
    <MultiSelect defaultValue={["react", "vue"]}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select frameworks..." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectItem value="react">React</MultiSelectItem>
        <MultiSelectItem value="vue">Vue</MultiSelectItem>
        <MultiSelectItem value="angular">Angular</MultiSelectItem>
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

### 선택 개수 제한

```tsx
function LimitedMultiSelect() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const MAX_ITEMS = 3;

  const handleChange = (newValues: string[]) => {
    if (newValues.length <= MAX_ITEMS) {
      setSelected(newValues);
    }
  };

  return (
    <div>
      <MultiSelect value={selected} onValueChange={handleChange}>
        <MultiSelectTrigger>
          <MultiSelectValue placeholder="Select up to 3 items..." />
        </MultiSelectTrigger>
        <MultiSelectContent>
          {Array.from({ length: 10 }, (_, i) => (
            <MultiSelectItem key={i} value={`item${i + 1}`}>
              Item {i + 1}
            </MultiSelectItem>
          ))}
        </MultiSelectContent>
      </MultiSelect>
      <p className="mt-2 text-sm text-gray-500">
        {selected.length} / {MAX_ITEMS} selected
      </p>
    </div>
  );
}
```

### 커스텀 태그 렌더링

```tsx
function CustomTagMultiSelect() {
  const [selected, setSelected] = React.useState<string[]>([]);

  const items = [
    { value: "urgent", label: "Urgent", color: "red" },
    { value: "important", label: "Important", color: "orange" },
    { value: "normal", label: "Normal", color: "blue" },
  ];

  return (
    <MultiSelect value={selected} onValueChange={setSelected}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select priority..." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        {items.map((item) => (
          <MultiSelectItem key={item.value} value={item.value}>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.label}</span>
            </div>
          </MultiSelectItem>
        ))}
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

### 그룹화된 옵션

```tsx
function GroupedMultiSelect() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <MultiSelect value={selected} onValueChange={setSelected}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select technologies..." />
      </MultiSelectTrigger>
      <MultiSelectContent maxHeight="400px">
        <div className="px-2 py-1.5 text-xs font-semibold text-gray-500">
          Frontend
        </div>
        <MultiSelectItem value="react">React</MultiSelectItem>
        <MultiSelectItem value="vue">Vue</MultiSelectItem>
        <MultiSelectItem value="angular">Angular</MultiSelectItem>

        <div className="mt-2 px-2 py-1.5 text-xs font-semibold text-gray-500">
          Backend
        </div>
        <MultiSelectItem value="node">Node.js</MultiSelectItem>
        <MultiSelectItem value="django">Django</MultiSelectItem>
        <MultiSelectItem value="rails">Ruby on Rails</MultiSelectItem>
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

### 검색 가능한 다중 선택

```tsx
function SearchableMultiSelect() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState("");

  const allItems = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    // ... more items
  ];

  const filtered = allItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <MultiSelect value={selected} onValueChange={setSelected}>
      <MultiSelectTrigger>
        <MultiSelectValue placeholder="Select fruits..." />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <div className="p-2">
          <TextInput
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="max-h-[300px] overflow-auto">
          {filtered.map((item) => (
            <MultiSelectItem key={item.value} value={item.value}>
              {item.label}
            </MultiSelectItem>
          ))}
        </div>
      </MultiSelectContent>
    </MultiSelect>
  );
}
```

## Design Tokens

| Token                     | Value                                        | Description               |
| ------------------------- | -------------------------------------------- | ------------------------- |
| `--select-fg`             | `var(--fg-neutral-tertiary)`                 | 텍스트 색상 (비어있을 때) |
| `--select-fg-pressed`     | `var(--fg-neutral-primary)`                  | 텍스트 색상 (선택 시)     |
| `--select-fg-filled`      | `var(--fg-neutral-primary)`                  | 텍스트 색상 (채워졌을 때) |
| `--select-border`         | `var(--border-neutral-tertiary)`             | 테두리 색상               |
| `--select-border-pressed` | `var(--tint, var(--border-neutral-primary))` | 테두리 색상 (눌렸을 때)   |
| `--select-border-error`   | `var(--border-tint-red)`                     | 테두리 색상 (에러)        |
| `--select-bg`             | `var(--bg-neutral-primary)`                  | 배경 색상                 |
| `--select-bg-pressed`     | `var(--bg-neutral-tertiary)`                 | 배경 색상 (눌렸을 때)     |

## 접근성

- 키보드 네비게이션 지원 (Tab, Enter, Space, 화살표 키)
- 스크린 리더가 선택된 항목 개수를 읽어줌
- role="option"과 aria-selected로 상태 전달
- 포커스 상태 시각적 표시
- Escape 키로 드롭다운 닫기

## 사용 시 주의사항

- MultiSelectItem의 children이 문자열인 경우 체크 아이콘이 왼쪽에 표시됩니다
- children이 복잡한 요소(아이콘 등 포함)인 경우 체크 아이콘이 오른쪽에 표시됩니다
- 선택된 값은 Tag 컴포넌트로 표시됩니다
- size prop은 트리거와 태그의 크기에 모두 적용됩니다
- value와 onValueChange를 함께 사용하면 제어 컴포넌트로 동작합니다
- defaultValue만 사용하면 제어되지 않는 컴포넌트로 동작합니다
- maxHeight를 설정하여 긴 리스트의 스크롤을 제어하세요
- Form과 함께 사용 시 FormControl로 감싸야 합니다

## 관련 컴포넌트

- [Select](./select.md) - 단일 선택 드롭다운
- [Combobox](./combobox.md) - 검색 가능한 선택
- [Tag](./tag.md) - 선택된 항목 표시
- [Popover](./popover.md) - 기반 컴포넌트
- [Form](./form.md) - 폼 통합
