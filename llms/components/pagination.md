# Pagination

Pagination은 많은 양의 데이터를 페이지로 나누어 네비게이션하는 컴포넌트입니다.

## Props

### Pagination

- `size?: 'small' | 'medium' | 'large'` - 크기
- `radius?: 'small' | 'medium' | 'large'` - 모서리 둥글기
- 표준 nav 속성

### PaginationContent

- 표준 ul 속성

### PaginationItem

- 표준 li 속성

### PaginationLink

- `isActive?: boolean` - 활성 페이지 여부
- 표준 anchor 속성

### PaginationPrevious

- 표준 anchor 속성
- "Previous" 텍스트와 왼쪽 화살표 아이콘 포함

### PaginationNext

- 표준 anchor 속성
- "Next" 텍스트와 오른쪽 화살표 아이콘 포함

### PaginationEllipsis

- 표준 button 속성
- "More" 아이콘 표시

## 기본 사용법

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@line/abc-def-react";

function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

## 사용 예시

### 기본 Pagination

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/0" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/1" isActive>
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/2" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### Ellipsis 사용

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### 동적 Pagination

```tsx
function DynamicPagination() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={currentPage === page}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### 스마트 Pagination (많은 페이지)

```tsx
function SmartPagination({ currentPage, totalPages }: Props) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // 7페이지 이하면 모두 표시
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 첫 페이지
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-start");
      }

      // 현재 페이지 주변
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }

      // 마지막 페이지
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage > 1 ? `/page/${currentPage - 1}` : "#"}
          />
        </PaginationItem>
        {getPageNumbers().map((page, idx) => (
          <PaginationItem key={`${page}-${idx}`}>
            {typeof page === "string" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={`/page/${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={currentPage < totalPages ? `/page/${currentPage + 1}` : "#"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### 크기 변형

```tsx
<Pagination size="small">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

<Pagination size="large">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### 간단한 Pagination (이전/다음만)

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/prev" />
    </PaginationItem>
    <PaginationItem>
      <span className="px-4">Page 5 of 20</span>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/next" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### 라우터와 함께

```tsx
// Next.js 예시
import { useRouter } from "next/router";

function PaginationWithRouter() {
  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            onClick={(e) => {
              if (currentPage === 1) e.preventDefault();
            }}
          />
        </PaginationItem>
        {[1, 2, 3, 4, 5].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?page=${page}`}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`?page=${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
```

### API 페이지네이션

```tsx
function APITable() {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["items", page],
    queryFn: () => fetchItems(page),
  });

  return (
    <div>
      <Table>{/* Table content */}</Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
            />
          </PaginationItem>
          {Array.from({ length: data?.totalPages || 0 }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={page === i + 1}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(data?.totalPages || p, p + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
```

## Design Tokens

Pagination은 Button 컴포넌트를 기반으로 하므로 Button의 디자인 토큰을 사용합니다.

## 접근성

- role="navigation" 및 aria-label="pagination" 자동 설정
- PaginationLink는 isActive일 때 aria-current="page" 설정
- PaginationPrevious와 PaginationNext는 적절한 aria-label 제공
- 키보드 네비게이션 완벽 지원 (Tab, Enter/Space)
- 비활성화된 링크는 aria-disabled 사용 권장

## 사용 시 주의사항

- Pagination 컴포넌트는 Button을 기반으로 구현되어 있습니다
- size와 radius는 Context를 통해 모든 자식에게 전달됩니다
- PaginationLink의 isActive로 현재 페이지를 표시하세요
- PaginationEllipsis는 많은 페이지가 있을 때 생략 부분에 사용합니다
- 비활성화된 Previous/Next 버튼은 aria-disabled나 조건부 렌더링을 사용하세요
- 테마의 size와 radius를 상속받으며, 개별 설정으로 오버라이드할 수 있습니다

## 관련 컴포넌트

- [Button](./button.md) - 기반 컴포넌트
- [Table](./table.md) - 테이블과 함께 사용
