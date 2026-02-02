# Spinner

Spinner는 로딩 상태를 시각적으로 표시하는 컴포넌트입니다.

## Props

### Spinner

- `size?: 'small' | 'medium' | 'large'` - 크기
- `className?: string` - 커스텀 CSS 클래스
- 모든 HTMLSpanElement props 지원

## 기본 사용법

```tsx
import { Spinner } from "@line/abc-def-react";

function Example() {
  return <Spinner />;
}
```

## 사용 예시

### 기본 스피너

```tsx
<Spinner />
```

### 크기 variants

```tsx
<div className="flex items-center gap-4">
  <Spinner size="small" />
  <Spinner size="medium" />
  <Spinner size="large" />
</div>
```

### 버튼 안에서 사용

```tsx
function LoadingButton() {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);
    await someAsyncOperation();
    setLoading(false);
  };

  return (
    <Button onClick={handleClick} disabled={loading}>
      {loading && <Spinner size="small" />}
      {loading ? "Loading..." : "Submit"}
    </Button>
  );
}
```

### 전체 화면 로딩

```tsx
function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <Spinner size="large" />
        <p className="mt-4 text-center">Loading...</p>
      </div>
    </div>
  );
}
```

### 카드 로딩

```tsx
function LoadingCard() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded border p-8">
        <Spinner />
      </div>
    );
  }

  return <div className="rounded border p-4">{/* 데이터 표시 */}</div>;
}
```

### 인라인 로딩

```tsx
function InlineLoader() {
  return (
    <div className="flex items-center gap-2">
      <Spinner size="small" />
      <span>Processing your request...</span>
    </div>
  );
}
```

### 테이블 로딩

```tsx
function LoadingTable() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Spinner size="large" />
      </div>
    );
  }

  return <Table>{/* 테이블 내용 */}</Table>;
}
```

### 조건부 로딩 (Suspense 패턴)

```tsx
function AsyncComponent() {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <Spinner />
        </div>
      )}
      {/* 실제 콘텐츠 */}
    </>
  );
}
```

### Dialog 안에서

```tsx
function LoadingDialog() {
  const [loading, setLoading] = React.useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Processing</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {loading ? (
            <div className="flex justify-center py-8">
              <Spinner />
            </div>
          ) : (
            <p>Content</p>
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
```

### 검색 중 표시

```tsx
function SearchWithLoading() {
  const [query, setQuery] = React.useState("");
  const [searching, setSearching] = React.useState(false);
  const [results, setResults] = React.useState([]);

  const handleSearch = async (value: string) => {
    setQuery(value);
    setSearching(true);
    const data = await searchAPI(value);
    setResults(data);
    setSearching(false);
  };

  return (
    <div>
      <TextInput
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        suffix={searching ? <Spinner size="small" /> : null}
        placeholder="Search..."
      />
      {/* 검색 결과 */}
    </div>
  );
}
```

### 페이지 초기 로딩

```tsx
function PageLoader({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Spinner size="large" />
          <p className="mt-4 text-gray-600">Loading page...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
```

### 무한 스크롤 로딩

```tsx
function InfiniteScrollList() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const newItems = await fetchMoreItems();
    setItems([...items, ...newItems]);
    setLoading(false);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
      {loading && (
        <div className="flex justify-center p-4">
          <Spinner />
        </div>
      )}
    </div>
  );
}
```

### 커스텀 색상

```tsx
<div className="flex gap-4">
  <Spinner className="text-blue-500" />
  <Spinner className="text-red-500" />
  <Spinner className="text-green-500" />
</div>
```

### 오버레이 로딩

```tsx
function OverlayLoader({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <Spinner />
        </div>
      )}
    </div>
  );
}
```

## 접근성

- aria-label="loading..."로 스크린 리더에 로딩 상태 전달
- 시각적으로만 표시되며 포커스를 받지 않음
- 로딩 중에는 관련 액션 버튼을 disabled 처리하세요

## 사용 시 주의사항

- 기본 크기는 테마의 size 설정을 따릅니다
- className으로 색상을 변경할 수 있습니다 (text-\* 유틸리티 사용)
- 긴 로딩 시간이 예상되는 경우 텍스트 메시지를 함께 표시하세요
- 전체 화면 로딩은 z-index를 높게 설정하여 다른 요소 위에 표시하세요
- 버튼 안에서 사용 시 아이콘 크기와 일치하도록 size="small"을 사용하세요
- 애니메이션은 CSS로 구현되어 성능이 우수합니다
- 로딩 상태는 최소 300ms 이상 유지하여 깜빡임을 방지하세요

## 관련 컴포넌트

- [Button](./button.md) - 로딩 버튼
- [Dialog](./dialog.md) - 모달 로딩
- [Toast](./toast.md) - 로딩 알림
