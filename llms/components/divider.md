# Divider

Divider는 콘텐츠를 시각적으로 구분하는 구분선 컴포넌트입니다. Radix UI의 Separator를 기반으로 구현되었습니다.

## Props

### Divider

- `variant?: 'bold' | 'subtle'` - 선 굵기 (기본값: `'bold'`)
- `orientation?: 'horizontal' | 'vertical'` - 방향 (기본값: `'horizontal'`)
- `indent?: 0 | 8 | 16 | 24` - 들여쓰기 (기본값: `0`)
- `decorative?: boolean` - 장식용 여부 (기본값: `true`)

## 기본 사용법

```tsx
import { Divider } from "@line/abc-def-react";

function Example() {
  return (
    <div>
      <p>Section 1</p>
      <Divider />
      <p>Section 2</p>
    </div>
  );
}
```

## 사용 예시

### 기본 Divider (Bold)

```tsx
<div>
  <p>Content above</p>
  <Divider />
  <p>Content below</p>
</div>
```

### Subtle variant

```tsx
<div>
  <p>Light separation</p>
  <Divider variant="subtle" />
  <p>Next section</p>
</div>
```

### 수직 Divider

```tsx
<div className="flex items-center gap-4">
  <span>Left</span>
  <Divider orientation="vertical" className="h-4" />
  <span>Right</span>
</div>
```

### 들여쓰기

```tsx
<div>
  <p>No indent</p>
  <Divider indent={0} />

  <p>Small indent</p>
  <Divider indent={8} />

  <p>Medium indent</p>
  <Divider indent={16} />

  <p>Large indent</p>
  <Divider indent={24} />
</div>
```

### 수직 Divider 들여쓰기

```tsx
<div className="flex h-20">
  <div>Left</div>
  <Divider orientation="vertical" indent={8} />
  <div>Center</div>
  <Divider orientation="vertical" indent={16} />
  <div>Right</div>
</div>
```

### 네비게이션 구분

```tsx
<nav className="flex gap-4">
  <a href="/">Home</a>
  <Divider orientation="vertical" className="h-6" />
  <a href="/about">About</a>
  <Divider orientation="vertical" className="h-6" />
  <a href="/contact">Contact</a>
</nav>
```

### 카드 섹션 구분

```tsx
<div className="rounded border p-4">
  <h3>Card Title</h3>
  <p>Card description</p>
  <Divider className="my-4" />
  <div>Card content</div>
  <Divider className="my-4" variant="subtle" />
  <div className="flex justify-end gap-2">
    <Button>Cancel</Button>
    <Button variant="primary">Save</Button>
  </div>
</div>
```

### 리스트 아이템 구분

```tsx
<ul>
  <li>Item 1</li>
  <Divider variant="subtle" indent={16} />
  <li>Item 2</li>
  <Divider variant="subtle" indent={16} />
  <li>Item 3</li>
</ul>
```

### 사이드바 섹션

```tsx
<aside className="w-64 border-r">
  <div className="p-4">
    <h3>Section 1</h3>
    <nav>{/* Links */}</nav>
  </div>
  <Divider />
  <div className="p-4">
    <h3>Section 2</h3>
    <nav>{/* Links */}</nav>
  </div>
  <Divider />
  <div className="p-4">
    <h3>Section 3</h3>
    <nav>{/* Links */}</nav>
  </div>
</aside>
```

### 폼 섹션 구분

```tsx
<form>
  <div className="space-y-4">
    <h3>Personal Information</h3>
    <TextInput label="Name" />
    <TextInput label="Email" />
  </div>

  <Divider className="my-6" />

  <div className="space-y-4">
    <h3>Address</h3>
    <TextInput label="Street" />
    <TextInput label="City" />
  </div>

  <Divider className="my-6" />

  <Button type="submit">Submit</Button>
</form>
```

### 툴바 구분

```tsx
<div className="flex items-center gap-2 rounded border p-2">
  <Button variant="ghost" size="small">
    <Icon name="RiBold" />
  </Button>
  <Button variant="ghost" size="small">
    <Icon name="RiItalic" />
  </Button>

  <Divider orientation="vertical" className="mx-1 h-6" />

  <Button variant="ghost" size="small">
    <Icon name="RiAlignLeft" />
  </Button>
  <Button variant="ghost" size="small">
    <Icon name="RiAlignCenter" />
  </Button>

  <Divider orientation="vertical" className="mx-1 h-6" />

  <Button variant="ghost" size="small">
    <Icon name="RiLink" />
  </Button>
</div>
```

### 통계 카드

```tsx
<div className="grid grid-cols-3 gap-4">
  <div className="text-center">
    <div className="text-3xl font-bold">1,234</div>
    <div className="text-muted-foreground text-sm">Users</div>
  </div>

  <Divider orientation="vertical" />

  <div className="text-center">
    <div className="text-3xl font-bold">567</div>
    <div className="text-muted-foreground text-sm">Projects</div>
  </div>

  <Divider orientation="vertical" />

  <div className="text-center">
    <div className="text-3xl font-bold">89</div>
    <div className="text-muted-foreground text-sm">Teams</div>
  </div>
</div>
```

### Semantic (비장식용)

```tsx
<div>
  <section>
    <h2>Section 1</h2>
    <p>Content</p>
  </section>

  {/* 스크린 리더가 섹션 구분을 인식함 */}
  <Divider decorative={false} />

  <section>
    <h2>Section 2</h2>
    <p>Content</p>
  </section>
</div>
```

## Design Tokens

| Token                     | Value                            | Description         |
| ------------------------- | -------------------------------- | ------------------- |
| `--divider-border-bold`   | `var(--border-neutral-primary)`  | Bold variant 색상   |
| `--divider-border-subtle` | `var(--border-neutral-tertiary)` | Subtle variant 색상 |

## 접근성

- decorative=true (기본값): 장식용으로 스크린 리더가 무시
- decorative=false: 의미 있는 구분선으로 role="separator" 설정
- 수직 Divider 사용 시 적절한 높이를 설정하세요
- 색상만으로 구분하지 말고 충분한 간격을 함께 사용하세요

## 사용 시 주의사항

- 기본적으로 decorative=true로 설정되어 스크린 리더가 무시합니다
- 의미 있는 섹션 구분이 필요한 경우 decorative=false를 사용하세요
- 수직 Divider는 flex 또는 grid 컨테이너 내에서 사용하고, className으로 높이를 설정하세요
- indent는 픽셀 값(8, 16, 24)으로 양쪽에 여백을 추가합니다
- variant="subtle"은 더 연한 구분선이 필요할 때 사용하세요
- orientation에 따라 indent의 방향이 달라집니다 (horizontal: 좌우, vertical: 상하)

## 관련 컴포넌트

- [Accordion](./accordion.md) - 접을 수 있는 섹션
- [Tabs](./tabs.md) - 탭으로 콘텐츠 구분
