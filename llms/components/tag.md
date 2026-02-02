# Tag

Tag는 항목을 분류하고 레이블을 지정하는 데 사용되는 대화형 컴포넌트입니다. 필터링 가능하고 제거 가능한 태그를 만들 수 있습니다.

## Props

```typescript
interface TagProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "small" | "medium" | "large";
  radius?: "small" | "medium" | "large";
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

### Props 설명

- `variant`: Tag의 변형 (기본값: `primary`)
  - `primary`: 주요 태그 스타일
  - `secondary`: 보조 태그 스타일
  - `outline`: 테두리만 있는 스타일
  - `destructive`: 삭제/제거를 나타내는 스타일

- `size`: Tag의 크기 (기본값: theme에서 설정된 값)
  - `small`: 작은 크기
  - `medium`: 중간 크기
  - `large`: 큰 크기

- `radius`: 모서리 둥글기 (기본값: theme에서 설정된 값)
  - `small`: 작은 반경
  - `medium`: 중간 반경
  - `large`: 큰 반경

- `asChild`: Slot 패턴 사용 여부
  - `true`: 자식 요소를 Tag의 루트로 사용
  - `false`: `span` 요소로 렌더링 (기본값)

- `className`: 추가 CSS 클래스

- `children`: 자식 요소 (텍스트, 아이콘 등)

## 기본 사용법

```tsx
import { Tag } from "@line/abc-def-react";

function Example() {
  return <Tag>React</Tag>;
}
```

## 사용 예시

### Variant 예시

#### Primary

```tsx
<Tag variant="primary">React</Tag>
<Tag variant="primary">TypeScript</Tag>
<Tag variant="primary">Tailwind</Tag>
```

Primary variant는 주요 카테고리나 강조가 필요한 태그에 사용합니다.

#### Secondary

```tsx
<Tag variant="secondary">디자인</Tag>
<Tag variant="secondary">개발</Tag>
<Tag variant="secondary">마케팅</Tag>
```

Secondary variant는 보조적인 정보나 덜 강조되는 태그에 사용합니다.

#### Outline

```tsx
<Tag variant="outline">JavaScript</Tag>
<Tag variant="outline">CSS</Tag>
<Tag variant="outline">HTML</Tag>
```

Outline variant는 공간을 적게 차지하면서 구분이 필요한 태그에 사용합니다.

#### Destructive

```tsx
<Tag variant="destructive">삭제됨</Tag>
<Tag variant="destructive">중단됨</Tag>
<Tag variant="destructive">오류</Tag>
```

Destructive variant는 삭제, 에러, 또는 부정적인 상태를 나타낼 때 사용합니다.

### Size 예시

```tsx
<Tag size="small">Small</Tag>
<Tag size="medium">Medium</Tag>
<Tag size="large">Large</Tag>
```

### 아이콘과 함께 사용

#### 왼쪽 아이콘

```tsx
import { Icon } from "@line/abc-def-react";

<Tag variant="primary">
  <Icon name="RiFlashlightFill" />
  React
</Tag>;
```

#### 오른쪽 아이콘 (닫기 버튼)

```tsx
<Tag variant="secondary">
  JavaScript
  <Icon name="RiCloseLargeLine" />
</Tag>
```

#### 양쪽 아이콘

```tsx
<Tag variant="outline">
  <Icon name="RiFlashlightFill" />
  TypeScript
  <Icon name="RiCloseLargeLine" />
</Tag>
```

### 제거 가능한 Tag

```tsx
import { Icon } from "@line/abc-def-react";

function RemovableTag() {
  const [tags, setTags] = React.useState(["React", "Vue", "Angular"]);

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <Tag key={tag} variant="secondary">
          {tag}
          <Icon
            name="RiCloseLargeLine"
            onClick={() => removeTag(tag)}
            className="cursor-pointer"
          />
        </Tag>
      ))}
    </div>
  );
}
```

### 클릭 가능한 Tag (필터)

```tsx
function FilterTags() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const categories = ["Frontend", "Backend", "DevOps", "Design"];

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <Tag
          key={category}
          variant={selectedTags.includes(category) ? "primary" : "outline"}
          onClick={() => toggleTag(category)}
          className="cursor-pointer"
        >
          {category}
        </Tag>
      ))}
    </div>
  );
}
```

### 다양한 조합 예시

#### 태그 그룹

```tsx
<div className="flex flex-wrap gap-2">
  <Tag variant="primary">긴급</Tag>
  <Tag variant="secondary">진행 중</Tag>
  <Tag variant="outline">검토 필요</Tag>
  <Tag variant="destructive">차단됨</Tag>
</div>
```

#### 크기와 스타일 조합

```tsx
<div className="space-y-2">
  <div className="flex gap-2">
    <Tag size="small" radius="small">
      Small/Small
    </Tag>
    <Tag size="small" radius="medium">
      Small/Medium
    </Tag>
    <Tag size="small" radius="large">
      Small/Large
    </Tag>
  </div>
  <div className="flex gap-2">
    <Tag size="medium" radius="small">
      Medium/Small
    </Tag>
    <Tag size="medium" radius="medium">
      Medium/Medium
    </Tag>
    <Tag size="medium" radius="large">
      Medium/Large
    </Tag>
  </div>
  <div className="flex gap-2">
    <Tag size="large" radius="small">
      Large/Small
    </Tag>
    <Tag size="large" radius="medium">
      Large/Medium
    </Tag>
    <Tag size="large" radius="large">
      Large/Large
    </Tag>
  </div>
</div>
```

### asChild 사용 예시

```tsx
// Tag를 링크로 렌더링
<Tag asChild>
  <a href="/tags/react">React</a>
</Tag>

// Tag를 버튼으로 렌더링
<Tag asChild>
  <button onClick={handleClick}>클릭 가능</button>
</Tag>
```

## 디자인 토큰

Tag는 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token                    | Default Value                                     | Description             |
| ------------------------ | ------------------------------------------------- | ----------------------- |
| `--tag-fg-primary`       | `var(--fg-neutral-inverse)`                       | Primary 텍스트 색상     |
| `--tag-fg-secondary`     | `var(--fg-neutral-primary)`                       | Secondary 텍스트 색상   |
| `--tag-fg-destructive`   | `var(--fg-neutral-inverse)`                       | Destructive 텍스트 색상 |
| `--tag-fg-outline`       | `var(--tint-subtle, var(--fg-neutral-primary))`   | Outline 텍스트 색상     |
| `--tag-border-outline`   | `var(--border-neutral-tertiary)`                  | Outline 테두리 색상     |
| `--tag-bg-primary`       | `var(--tint-subtle, var(--bg-neutral-inverse))`   | Primary 배경 색상       |
| `--tag-bg-secondary`     | `var(--bg-neutral-tertiary)`                      | Secondary 배경 색상     |
| `--tag-bg-destructive`   | `var(--bg-tint-red-bold)`                         | Destructive 배경 색상   |
| `--tag-bg-outline`       | `var(--bg-neutral-transparent)`                   | Outline 배경 색상       |
| `--tag-bg-outline-hover` | `var(--tint-subtle, var(--bg-neutral-secondary))` | Outline 호버 배경 색상  |

### 토큰 커스터마이징 예시

```css
.custom-tag {
  --tag-bg-primary: var(--bg-tint-blue-bold);
  --tag-fg-primary: var(--fg-neutral-inverse);
}
```

```tsx
<Tag variant="primary" className="custom-tag">
  커스텀 스타일
</Tag>
```

## 접근성

- **role 속성**: 클릭 가능한 Tag는 적절한 role을 가져야 합니다

  ```tsx
  <Tag role="button" onClick={handleClick}>
    클릭 가능
  </Tag>
  ```

- **키보드 네비게이션**: 인터랙티브한 Tag는 키보드로 접근 가능해야 합니다

  ```tsx
  <Tag
    tabIndex={0}
    onClick={handleClick}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleClick();
      }
    }}
  >
    키보드 지원
  </Tag>
  ```

- **aria-label**: 아이콘만 있는 닫기 버튼에는 레이블을 제공하세요

  ```tsx
  <Tag>
    React
    <Icon
      name="RiCloseLargeLine"
      onClick={handleRemove}
      aria-label="React 태그 제거"
    />
  </Tag>
  ```

- **색상 외 정보**: 색상만으로 의미를 전달하지 말고 텍스트를 함께 사용하세요

## 사용 시 주의사항

1. **적절한 variant 선택**
   - 주요 카테고리/강조: `primary`
   - 보조 정보: `secondary`
   - 필터/선택 가능: `outline`
   - 에러/삭제: `destructive`

2. **Badge vs Tag**
   - **Badge**: 읽기 전용, 상태 표시, 숫자
   - **Tag**: 인터랙티브, 필터링, 분류

   ```tsx
   // ✅ Badge 사용
   <Badge color="green">5개의 새 메시지</Badge>

   // ✅ Tag 사용
   <Tag onClick={filterByCategory}>Frontend</Tag>
   ```

3. **텍스트 길이**
   - Tag는 짧고 간결한 텍스트(1-2단어)에 적합합니다

   ```tsx
   // ✅ 좋은 예
   <Tag>React</Tag>
   <Tag>긴급</Tag>

   // ❌ 나쁜 예
   <Tag>이것은 너무 긴 태그 텍스트입니다</Tag>
   ```

4. **클릭 영역**
   - 전체 Tag가 클릭 가능한지, 아이콘만 클릭 가능한지 명확하게 하세요

   ```tsx
   // Tag 전체가 클릭 가능
   <Tag onClick={handleTagClick}>
     Frontend
   </Tag>

   // 닫기 아이콘만 클릭 가능
   <Tag>
     Frontend
     <Icon name="RiCloseLargeLine" onClick={handleRemove} />
   </Tag>
   ```

5. **너무 많은 Tag 사용 지양**
   - 한 화면에 너무 많은 Tag를 사용하면 시각적 혼란을 줄 수 있습니다
   - 중요한 카테고리만 선택적으로 표시하세요

6. **상태 관리**
   - 제거 가능하거나 선택 가능한 Tag는 적절한 상태 관리가 필요합니다
   ```tsx
   const [tags, setTags] = React.useState(["tag1", "tag2"]);
   ```

## 관련 컴포넌트

- [Badge](./badge.md) - 읽기 전용 상태 표시
- [Chip](./chip.md) - 입력 필드의 선택된 항목
- [Button](./button.md) - 액션 버튼
- [Icon](./icon.md) - 아이콘
