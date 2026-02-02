# Table

Table은 데이터를 행과 열로 구성하여 표시하는 컴포넌트입니다. 구조화된 데이터를 효과적으로 표현하고 비교할 수 있습니다.

## 컴포넌트 구조

```
Table
├── TableCaption
├── TableHeader
│   └── TableRow
│       └── TableHead
├── TableBody
│   └── TableRow
│       └── TableCell
└── TableFooter
    └── TableRow
        └── TableCell
```

## Props

### Table

```typescript
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  className?: string;
  children: React.ReactNode;
}
```

기본 테이블 요소입니다.

### TableHeader

```typescript
interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}
```

테이블의 헤더 섹션을 정의합니다.

### TableBody

```typescript
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}
```

테이블의 본문 섹션을 정의합니다.

### TableFooter

```typescript
interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}
```

테이블의 푸터 섹션을 정의합니다.

### TableRow

```typescript
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}
```

테이블의 행을 정의합니다.

### TableHead

```typescript
interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  textAlign?: "left" | "center" | "right";
  icon?: IconNameType;
  className?: string;
  children?: React.ReactNode;
}
```

#### Props 설명

- `textAlign`: 텍스트 정렬 방향 (기본값: `left`)
  - `left`: 왼쪽 정렬
  - `center`: 중앙 정렬
  - `right`: 오른쪽 정렬

- `icon`: 헤더 앞에 표시할 아이콘

- `className`: 추가 CSS 클래스

- `children`: 헤더 텍스트 또는 요소

### TableCell

```typescript
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  textAlign?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
}
```

#### Props 설명

- `textAlign`: 텍스트 정렬 방향 (기본값: `left`)
  - `left`: 왼쪽 정렬
  - `center`: 중앙 정렬
  - `right`: 오른쪽 정렬

- `className`: 추가 CSS 클래스

- `children`: 셀 내용

### TableCaption

```typescript
interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  className?: string;
  children: React.ReactNode;
}
```

테이블의 캡션(제목)을 정의합니다.

## 기본 사용법

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@line/abc-def-react";

function Example() {
  return (
    <Table>
      <TableCaption>사용자 목록</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>홍길동</TableCell>
          <TableCell>hong@example.com</TableCell>
          <TableCell>개발자</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>김철수</TableCell>
          <TableCell>kim@example.com</TableCell>
          <TableCell>디자이너</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## 사용 예시

### 기본 테이블

```tsx
<Table>
  <TableCaption>월별 매출</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>월</TableHead>
      <TableHead textAlign="right">매출</TableHead>
      <TableHead textAlign="right">증감</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>1월</TableCell>
      <TableCell textAlign="right">₩1,000,000</TableCell>
      <TableCell textAlign="right">+10%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>2월</TableCell>
      <TableCell textAlign="right">₩1,200,000</TableCell>
      <TableCell textAlign="right">+20%</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### 아이콘이 있는 헤더

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead icon="RiBuildingLine">회사</TableHead>
      <TableHead icon="RiUserLine">담당자</TableHead>
      <TableHead icon="RiMailLine">이메일</TableHead>
      <TableHead icon="RiPhoneLine">전화번호</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>ABC Corp</TableCell>
      <TableCell>홍길동</TableCell>
      <TableCell>hong@abc.com</TableCell>
      <TableCell>010-1234-5678</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### 푸터가 있는 테이블

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>항목</TableHead>
      <TableHead textAlign="right">수량</TableHead>
      <TableHead textAlign="right">가격</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>상품 A</TableCell>
      <TableCell textAlign="right">2</TableCell>
      <TableCell textAlign="right">₩20,000</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>상품 B</TableCell>
      <TableCell textAlign="right">1</TableCell>
      <TableCell textAlign="right">₩15,000</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>합계</TableCell>
      <TableCell textAlign="right">₩35,000</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### Bordered 테이블

```tsx
<Table className="border-separate border-spacing-0 rounded border">
  <TableHeader>
    <TableRow>
      <TableHead>이름</TableHead>
      <TableHead>상태</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>프로젝트 A</TableCell>
      <TableCell>진행 중</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>프로젝트 B</TableCell>
      <TableCell>완료</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Checkbox와 함께 사용

```tsx
import { Checkbox } from "@line/abc-def-react";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>
        <Checkbox checked="indeterminate" size="small" />
      </TableHead>
      <TableHead>이름</TableHead>
      <TableHead>이메일</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <Checkbox checked size="small" />
      </TableCell>
      <TableCell>홍길동</TableCell>
      <TableCell>hong@example.com</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Checkbox size="small" />
      </TableCell>
      <TableCell>김철수</TableCell>
      <TableCell>kim@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

### Badge와 함께 사용

```tsx
import { Badge } from "@line/abc-def-react";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>사용자</TableHead>
      <TableHead>태그</TableHead>
      <TableHead>상태</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <Badge variant="bold" radius="large">
          D
        </Badge>
        Daniel Cruz
      </TableCell>
      <TableCell>
        <Badge variant="subtle" color="default">
          Label
        </Badge>
        <Badge variant="subtle" color="default">
          Label
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="bold" color="green">
          완료
        </Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Badge variant="bold" radius="large">
          J
        </Badge>
        Jane Cooper
      </TableCell>
      <TableCell>
        <Badge variant="subtle" color="default">
          Label
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="bold" color="blue">
          진행 중
        </Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

### Switch/Select/Dropdown과 함께 사용

```tsx
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@line/abc-def-react";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>기능</TableHead>
      <TableHead>활성화</TableHead>
      <TableHead>우선순위</TableHead>
      <TableHead>작업</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>알림</TableCell>
      <TableCell>
        <Switch checked />
      </TableCell>
      <TableCell>
        <Select defaultValue="high">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">높음</SelectItem>
            <SelectItem value="medium">중간</SelectItem>
            <SelectItem value="low">낮음</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="ghost" size="small">
              •••
            </Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>수정</DropdownItem>
            <DropdownItem>삭제</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

## 디자인 토큰

Table은 다음 CSS 변수를 사용하여 스타일을 커스터마이징할 수 있습니다:

| Token               | Default Value                    | Description       |
| ------------------- | -------------------------------- | ----------------- |
| `--table-fg-header` | `var(--fg-neutral-tertiary)`     | 헤더 텍스트 색상  |
| `--table-fg-cell`   | `var(--fg-neutral-primary)`      | 셀 텍스트 색상    |
| `--table-border`    | `var(--border-neutral-tertiary)` | 테두리 색상       |
| `--table-bg`        | `var(--bg-neutral-primary)`      | 배경 색상         |
| `--table-bg-hover`  | `var(--bg-neutral-tertiary)`     | 호버 시 배경 색상 |

### 토큰 커스터마이징 예시

```css
.custom-table {
  --table-fg-header: var(--fg-tint-blue);
  --table-bg-hover: var(--bg-tint-blue-subtle);
}
```

```tsx
<Table className="custom-table">
  <TableHeader>
    <TableRow>
      <TableHead>커스텀 헤더</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>커스텀 셀</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## 접근성

- **시맨틱 HTML**: 표준 HTML 테이블 요소를 사용하여 스크린 리더가 올바르게 해석합니다

- **TableCaption**: 테이블의 목적을 설명하는 캡션을 제공하세요

  ```tsx
  <TableCaption>2024년 1분기 판매 데이터</TableCaption>
  ```

- **TableHeader**: 헤더 행은 `<thead>` 내부의 `<th>` 요소로 렌더링됩니다

- **scope 속성**: 복잡한 테이블의 경우 scope 속성을 추가할 수 있습니다

  ```tsx
  <TableHead scope="col">열 헤더</TableHead>
  <TableCell scope="row">행 헤더</TableCell>
  ```

- **키보드 네비게이션**: 테이블 내의 인터랙티브 요소(버튼, 체크박스 등)는 Tab 키로 접근 가능합니다

## 사용 시 주의사항

1. **올바른 구조 유지**

   ```tsx
   // ✅ 올바른 구조
   <Table>
     <TableHeader>
       <TableRow>
         <TableHead>헤더</TableHead>
       </TableRow>
     </TableHeader>
     <TableBody>
       <TableRow>
         <TableCell>데이터</TableCell>
       </TableRow>
     </TableBody>
   </Table>

   // ❌ 잘못된 구조
   <Table>
     <TableRow>
       <TableCell>데이터</TableCell>
     </TableRow>
   </Table>
   ```

2. **텍스트 정렬**
   - 숫자 데이터: 오른쪽 정렬 (`textAlign="right"`)
   - 텍스트 데이터: 왼쪽 정렬 (기본값)
   - 아이콘/액션: 중앙 정렬 (`textAlign="center"`)

3. **colSpan과 rowSpan**
   - TableCell과 TableHead는 표준 HTML 속성을 지원합니다

   ```tsx
   <TableCell colSpan={2}>병합된 셀</TableCell>
   ```

4. **반응형 디자인**
   - 작은 화면에서는 가로 스크롤을 고려하세요

   ```tsx
   <div className="overflow-x-auto">
     <Table>...</Table>
   </div>
   ```

5. **성능 고려사항**
   - 많은 데이터를 표시할 때는 가상화(virtualization)나 페이지네이션을 고려하세요
   - 필요한 경우에만 hover 효과를 적용하세요

6. **캡션 사용**
   - 접근성을 위해 TableCaption을 제공하는 것이 좋습니다
   - 시각적으로 숨기고 싶다면 CSS로 처리할 수 있습니다

## 관련 컴포넌트

- [Checkbox](./checkbox.md) - 행 선택 기능
- [Badge](./badge.md) - 상태 표시
- [Button](./button.md) - 액션 버튼
- [Dropdown](./dropdown.md) - 행 액션 메뉴
- [Select](./select.md) - 셀 내 선택 옵션
- [Switch](./switch.md) - 토글 기능
