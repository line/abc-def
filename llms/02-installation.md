# 설치 및 설정

## React 패키지 설치

### 1. 패키지 설치

```bash
npm install @line/abc-def-react
# or
pnpm add @line/abc-def-react
# or
yarn add @line/abc-def-react
```

### 2. Tailwind CSS 설정

ABC Def React는 Tailwind CSS를 기반으로 동작합니다.

```bash
npm install -D tailwindcss@^3
npx tailwindcss init
```

### 3. 프로젝트 설정

`tailwind.config.js` 또는 CSS 파일에 설정 추가

```javascript
// tailwind.config.js 예시
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@line/abc-def-react/**/*.js",
  ],
  // ... 기타 설정
};
```

## Tailwind CSS 패키지 설치

### 1. 패키지 설치

```bash
npm install -D @line/abc-def-tailwindcss
# or
pnpm add -D @line/abc-def-tailwindcss
# or
yarn add -D @line/abc-def-tailwindcss
```

### 2. Tailwind CSS 설정에 추가

```javascript
// tailwind.config.js
module.exports = {
  plugins: [require("@line/abc-def-tailwindcss")],
  // ... 기타 설정
};
```

## CSS 파일 설정

프로젝트의 메인 CSS 파일에 Tailwind CSS 추가:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## TypeScript 설정 (선택사항)

TypeScript를 사용하는 경우, 타입 정의가 자동으로 포함됩니다.

```typescript
import { Alert, Button } from "@line/abc-def-react";
```

## 기본 사용 예시

```tsx
import { Button } from "@line/abc-def-react";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```
