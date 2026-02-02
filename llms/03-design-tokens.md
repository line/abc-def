# 디자인 토큰 시스템

ABC Def는 3-tier token 구조를 사용하여 일관된 디자인 시스템을 제공합니다.

## Three-tier Token Structure

1. **Primitive Tokens**: 기본 색상 토큰 (예: `blue500`, `red300`)
2. **Semantic Tokens**: 의미론적 토큰, 라이트/다크 테마 지원 (예: `bg-primary`, `fg-neutral-primary`)
3. **Component Tokens**: 컴포넌트에서 사용되는 토큰

## 색상 토큰 (Color Tokens)

### Primitive Colors

기본 색상 팔레트는 다양한 색상과 음영을 제공합니다. 모든 색상은 50부터 950까지의 스케일을 가집니다.

**Base Colors**:

- `base-black`, `base-white`, `base-transparent`

**Neutral Colors** (회색 계열):

- `neutral50` ~ `neutral950`
- `alpha-black50` ~ `alpha-black950` (반투명 검정)
- `alpha-white50` ~ `alpha-white950` (반투명 흰색)
- `slate50` ~ `slate950`
- `gray50` ~ `gray950`
- `zinc50` ~ `zinc950`
- `stone50` ~ `stone950`

**Color Palette**:

- `red50` ~ `red950`
- `orange50` ~ `orange950`
- `amber50` ~ `amber950`
- `yellow50` ~ `yellow950`
- `lime50` ~ `lime950`
- `green50` ~ `green950`
- `emerald50` ~ `emerald950`
- `teal50` ~ `teal950`
- `cyan50` ~ `cyan950`
- `sky50` ~ `sky950`
- `blue50` ~ `blue950`
- `indigo50` ~ `indigo950`
- `violet50` ~ `violet950`
- `purple50` ~ `purple950`
- `fuchsia50` ~ `fuchsia950`
- `pink50` ~ `pink950`
- `rose50` ~ `rose950`

### Semantic Colors

ABC Def는 의미론적 색상 토큰을 제공하며, 라이트/다크 테마를 자동으로 지원합니다.

#### Foreground Colors (텍스트/아이콘)

```tsx
// 기본 텍스트 색상 (neutral)
<p className="text-neutral-primary">Primary Text (기본 검정/흰색)</p>
<p className="text-neutral-secondary">Secondary Text (보조 텍스트)</p>
<p className="text-neutral-tertiary">Tertiary Text (3차 텍스트)</p>
<p className="text-neutral-inverse">Inverse Text (반전된 색상)</p>
<p className="text-neutral-static">Static Text (테마 고정)</p>

// Tint 텍스트 색상 (상태 표시용)
<p className="text-tint-red">Red Tint Text</p>
<p className="text-tint-orange">Orange Tint Text</p>
<p className="text-tint-green">Green Tint Text</p>
<p className="text-tint-blue">Blue Tint Text</p>
```

#### Background Colors

```tsx
// 기본 배경 색상 (페이지 레벨)
<div className="bg-primary">Primary Background (흰색/다크)</div>
<div className="bg-secondary">Secondary Background</div>
<div className="bg-tertiary">Tertiary Background</div>
<div className="bg-dim">Dim Background (반투명 오버레이)</div>

// 중립 배경 색상 (컴포넌트 레벨)
<div className="bg-neutral-primary">Neutral Primary Background</div>
<div className="bg-neutral-secondary">Neutral Secondary Background</div>
<div className="bg-neutral-tertiary">Neutral Tertiary Background</div>
<div className="bg-neutral-inverse">Neutral Inverse Background</div>
<div className="bg-neutral-hover">Neutral Hover Background</div>
<div className="bg-neutral-transparent">Transparent Background</div>

// Tint 배경 (상태별 배경)
<div className="bg-tint-red-bold">Red Bold Background</div>
<div className="bg-tint-red-subtle">Red Subtle Background</div>
<div className="bg-tint-orange-bold">Orange Bold Background</div>
<div className="bg-tint-orange-subtle">Orange Subtle Background</div>
<div className="bg-tint-green-bold">Green Bold Background</div>
<div className="bg-tint-green-subtle">Green Subtle Background</div>
<div className="bg-tint-blue-bold">Blue Bold Background</div>
<div className="bg-tint-blue-subtle">Blue Subtle Background</div>
```

#### Border Colors

```tsx
// 중립 테두리 색상
<div className="border border-neutral-primary">Primary Border</div>
<div className="border border-neutral-secondary">Secondary Border</div>
<div className="border border-neutral-tertiary">Tertiary Border</div>
<div className="border border-neutral-transparent">Transparent Border</div>

// Tint 테두리 색상
<div className="border border-tint-red">Red Border</div>
<div className="border border-tint-orange">Orange Border</div>
<div className="border border-tint-green">Green Border</div>
<div className="border border-tint-blue">Blue Border</div>
```

### 테마별 색상 사용

ABC Def의 Semantic Colors는 테마에 따라 자동으로 변경됩니다. 별도의 `dark:` prefix 없이 사용할 수 있습니다:

```tsx
// 라이트/다크 테마에서 자동으로 적절한 색상 적용
<div className="bg-primary text-neutral-primary">
  This adapts to the current theme
</div>
```

## 간격 토큰 (Spacing Tokens)

ABC Def는 일관된 간격 시스템을 제공합니다.

```tsx
// 예시
<div className="m-2 gap-3 p-4">
  <div className="mb-6">Content</div>
</div>
```

### Spacing Scale

| Token Name  | Value           | Tailwind Class 예시         |
| ----------- | --------------- | --------------------------- |
| spacing-2   | 2px             | `p-0.5`, `m-0.5`, `gap-0.5` |
| spacing-4   | 4px             | `p-1`, `m-1`, `gap-1`       |
| spacing-6   | 6px             | `p-1.5`, `m-1.5`, `gap-1.5` |
| spacing-8   | 8px             | `p-2`, `m-2`, `gap-2`       |
| spacing-10  | 10px            | `p-2.5`, `m-2.5`, `gap-2.5` |
| spacing-12  | 12px            | `p-3`, `m-3`, `gap-3`       |
| spacing-14  | 14px            | `p-3.5`, `m-3.5`, `gap-3.5` |
| spacing-16  | 16px            | `p-4`, `m-4`, `gap-4`       |
| spacing-20  | 20px            | `p-5`, `m-5`, `gap-5`       |
| spacing-24  | 24px            | `p-6`, `m-6`, `gap-6`       |
| spacing-32  | 32px            | `p-8`, `m-8`, `gap-8`       |
| spacing-40  | 40px            | `p-10`, `m-10`, `gap-10`    |
| spacing-48  | 48px            | `p-12`, `m-12`, `gap-12`    |
| spacing-56  | 56px            | `p-14`, `m-14`, `gap-14`    |
| spacing-64  | 64px            | `p-16`, `m-16`, `gap-16`    |
| spacing-5.5 | 1.375rem (22px) | `p-5.5`, `m-5.5`, `gap-5.5` |
| spacing-9.5 | 2.375rem (38px) | `p-9.5`, `m-9.5`, `gap-9.5` |
| spacing-13  | 3.25rem (52px)  | `p-13`, `m-13`, `gap-13`    |

### 사용 예시

```tsx
// Padding
<div className="p-4">Padding 16px</div>
<div className="px-6 py-3">Horizontal 24px, Vertical 12px</div>

// Margin
<div className="m-2">Margin 8px</div>
<div className="mt-8 mb-4">Top 32px, Bottom 16px</div>

// Gap
<div className="flex gap-3">Gap 12px</div>
<div className="grid gap-6">Gap 24px</div>
```

## 타이포그래피 토큰 (Typography Tokens)

ABC Def는 일관된 타이포그래피 시스템을 제공합니다. 각 토큰은 font-size, line-height, font-weight를 포함합니다.

### Small

| Token        | Size           | Line Height     | Class               |
| ------------ | -------------- | --------------- | ------------------- |
| Small Normal | 0.75rem (12px) | 1.125rem (18px) | `text-small-normal` |
| Small Strong | 0.75rem (12px) | 1.125rem (18px) | `text-small-strong` |

```tsx
<p className="text-small-normal">Small Normal Text</p>
<p className="text-small-strong">Small Strong Text</p>
```

### Base

| Token       | Size            | Line Height     | Class              |
| ----------- | --------------- | --------------- | ------------------ |
| Base Normal | 0.875rem (14px) | 1.375rem (22px) | `text-base-normal` |
| Base Strong | 0.875rem (14px) | 1.375rem (22px) | `text-base-strong` |

```tsx
<p className="text-base-normal">Base Normal Text (기본)</p>
<p className="text-base-strong">Base Strong Text</p>
```

### Large

| Token        | Size        | Line Height   | Class               |
| ------------ | ----------- | ------------- | ------------------- |
| Large Normal | 1rem (16px) | 1.5rem (24px) | `text-large-normal` |
| Large Strong | 1rem (16px) | 1.5rem (24px) | `text-large-strong` |

```tsx
<p className="text-large-normal">Large Normal Text</p>
<p className="text-large-strong">Large Strong Text</p>
```

### XLarge

| Token         | Size           | Line Height | Class                |
| ------------- | -------------- | ----------- | -------------------- |
| XLarge Normal | 1.25rem (20px) | 2rem (28px) | `text-xlarge-normal` |
| XLarge Strong | 1.25rem (20px) | 2rem (28px) | `text-xlarge-strong` |

```tsx
<p className="text-xlarge-normal">XLarge Normal Text</p>
<p className="text-xlarge-strong">XLarge Strong Text</p>
```

### Title (Heading)

| Token    | Size            | Line Height     | Class           |
| -------- | --------------- | --------------- | --------------- |
| Title H1 | 2.375rem (38px) | 2.875rem (46px) | `text-title-h1` |
| Title H2 | 1.875rem (30px) | 2.375rem (38px) | `text-title-h2` |
| Title H3 | 1.5rem (24px)   | 2rem (32px)     | `text-title-h3` |
| Title H4 | 1.25rem (20px)  | 1.75rem (28px)  | `text-title-h4` |
| Title H5 | 1rem (16px)     | 1.5rem (24px)   | `text-title-h5` |

```tsx
<h1 className="text-title-h1">Heading 1</h1>
<h2 className="text-title-h2">Heading 2</h2>
<h3 className="text-title-h3">Heading 3</h3>
<h4 className="text-title-h4">Heading 4</h4>
<h5 className="text-title-h5">Heading 5</h5>
```

### 사용 시 주의사항

- `normal`은 일반 font-weight (400)
- `strong`은 중간 굵기 font-weight (600)
- 모든 타이포그래피 토큰은 적절한 line-height를 자동으로 적용합니다

## Border Radius 토큰

ABC Def는 일관된 border radius 시스템을 제공합니다.

| Token        | Value                                 | Class          |
| ------------ | ------------------------------------- | -------------- |
| rounded-0    | 0px                                   | `rounded-0`    |
| rounded-4    | calc(var(--rounded-base, 0px) + 4px)  | `rounded-4`    |
| rounded-6    | calc(var(--rounded-base, 0px) + 6px)  | `rounded-6`    |
| rounded-8    | calc(var(--rounded-base, 0px) + 8px)  | `rounded-8`    |
| rounded-12   | calc(var(--rounded-base, 0px) + 12px) | `rounded-12`   |
| rounded-16   | calc(var(--rounded-base, 0px) + 16px) | `rounded-16`   |
| rounded-24   | calc(var(--rounded-base, 0px) + 24px) | `rounded-24`   |
| rounded-full | 62.4375rem (999px)                    | `rounded-full` |

```tsx
<div className="rounded-0">No Radius (0px)</div>
<div className="rounded-4">4px Radius (+ rounded-base)</div>
<div className="rounded-6">6px Radius (+ rounded-base)</div>
<div className="rounded-8">8px Radius (+ rounded-base)</div>
<div className="rounded-12">12px Radius (+ rounded-base)</div>
<div className="rounded-16">16px Radius (+ rounded-base)</div>
<div className="rounded-24">24px Radius (+ rounded-base)</div>
<div className="rounded-full">Full Radius (Circle)</div>
```

### Rounded Base 커스터마이징

기본 rounded 값을 변경할 수 있습니다. 4~24 사이의 값들은 이 base 값에 더해집니다:

```css
/* globals.css */
@layer base {
  :root {
    --rounded-base: 4px; /* 기본값: 0px */
  }
}
```

예를 들어 `--rounded-base`를 `4px`로 설정하면:

- `rounded-4`는 `8px`이 됩니다
- `rounded-8`는 `12px`이 됩니다
- `rounded-12`는 `16px`이 됩니다

## Box Shadow 토큰

ABC Def는 다양한 box shadow를 제공합니다.

| Token              | Class          | 사용 용도      |
| ------------------ | -------------- | -------------- |
| Shadow Small       | `shadow-sm`    | 미세한 그림자  |
| Shadow             | `shadow`       | 기본 그림자    |
| Shadow Medium      | `shadow-md`    | 중간 그림자    |
| Shadow Large       | `shadow-lg`    | 큰 그림자      |
| Shadow Extra Large | `shadow-xl`    | 매우 큰 그림자 |
| Shadow 2XL         | `shadow-2xl`   | 최대 그림자    |
| Shadow Inner       | `shadow-inner` | 내부 그림자    |
| Shadow None        | `shadow-none`  | 그림자 없음    |

```tsx
<div className="shadow-sm">Small Shadow</div>
<div className="shadow">Default Shadow</div>
<div className="shadow-md">Medium Shadow</div>
<div className="shadow-lg">Large Shadow</div>
<div className="shadow-xl">Extra Large Shadow</div>
<div className="shadow-2xl">2XL Shadow</div>
<div className="shadow-inner">Inner Shadow</div>
<div className="shadow-none">No Shadow</div>
```

## Opacity 토큰

투명도 제어를 위한 opacity 값을 제공합니다.

| Token       | Class         |
| ----------- | ------------- |
| Opacity 0   | `opacity-0`   |
| Opacity 10  | `opacity-10`  |
| Opacity 20  | `opacity-20`  |
| Opacity 30  | `opacity-30`  |
| Opacity 40  | `opacity-40`  |
| Opacity 50  | `opacity-50`  |
| Opacity 60  | `opacity-60`  |
| Opacity 70  | `opacity-70`  |
| Opacity 80  | `opacity-80`  |
| Opacity 90  | `opacity-90`  |
| Opacity 100 | `opacity-100` |

```tsx
<div className="opacity-0">Invisible</div>
<div className="opacity-50">50% Opacity</div>
<div className="opacity-100">Fully Visible</div>
```

## 토큰 커스터마이징

### Tailwind Config로 확장

`tailwind.config.js`에서 토큰을 확장할 수 있습니다:

```javascript
module.exports = {
  presets: [require("@line/abc-def-tailwindcss")],
  theme: {
    extend: {
      colors: {
        // 추가 색상 정의
        custom: "#your-color",
      },
      spacing: {
        // 추가 spacing 정의
        72: "18rem",
        84: "21rem",
      },
    },
  },
};
```

### CSS Variables로 커스터마이징

CSS 파일에서 직접 변수를 override할 수 있습니다:

```css
@layer base {
  :root {
    /* Border Radius 커스터마이징 */
    --rounded-base: 4px;

    /* 색상 커스터마이징 (primitive colors) */
    --blue500: #your-custom-blue;
    --red600: #your-custom-red;

    /* Semantic colors는 primitive colors를 참조 */
    --fg-neutral-primary: var(--base-black);
    --bg-primary: var(--base-white);
  }

  .dark {
    /* 다크 테마 색상 커스터마이징 */
    --fg-neutral-primary: var(--base-white);
    --bg-primary: var(--neutral950);
  }
}
```
