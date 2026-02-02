# Scroll Area

Scroll Area는 커스텀 스타일의 스크롤바를 제공하는 스크롤 가능한 영역 컴포넌트입니다. Radix UI의 Scroll Area를 기반으로 구현되었습니다.

## Props

### ScrollArea

- `type?: 'auto' | 'always' | 'scroll' | 'hover'` - 스크롤바 표시 타이밍 (기본값: `'auto'`)
- `maxWidth?: string` - 최대 너비
- `maxHeight?: string` - 최대 높이
- `scrollHideDelay?: number` - 스크롤바 숨김 지연 시간 (밀리초)

### ScrollBar

- `orientation?: 'vertical' | 'horizontal'` - 방향 (기본값: `'vertical'`)

## 기본 사용법

```tsx
import { ScrollArea, ScrollBar } from "@line/abc-def-react";

function Example() {
  return (
    <ScrollArea maxHeight="200px">
      <div className="p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </div>
    </ScrollArea>
  );
}
```

## 사용 예시

### 기본 수직 스크롤

```tsx
<ScrollArea maxHeight="300px">
  <div className="space-y-4 p-4">
    {Array.from({ length: 50 }, (_, i) => (
      <div key={i} className="rounded border p-2">
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>
```

### 수평 스크롤

```tsx
<ScrollArea maxWidth="400px">
  <div className="flex gap-4 p-4">
    {Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="min-w-[200px] rounded border p-4">
        Card {i + 1}
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

### 양방향 스크롤

```tsx
<ScrollArea maxWidth="500px" maxHeight="400px">
  <table className="w-[1000px]">
    <thead>
      <tr>
        {Array.from({ length: 10 }, (_, i) => (
          <th key={i}>Column {i + 1}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 50 }, (_, i) => (
        <tr key={i}>
          {Array.from({ length: 10 }, (_, j) => (
            <td key={j}>
              Cell {i},{j}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

### 채팅 메시지 목록

```tsx
function ChatMessages() {
  const messages = [
    /* message data */
  ];

  return (
    <ScrollArea maxHeight="500px" className="rounded border">
      <div className="space-y-2 p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded p-3 ${
              msg.isMine ? "ml-auto bg-blue-100" : "bg-gray-100"
            } max-w-[70%]`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
```

### 사이드바 네비게이션

```tsx
<ScrollArea maxHeight="100vh" className="w-64 border-r">
  <nav className="space-y-2 p-4">
    {menuItems.map((item) => (
      <a
        key={item.id}
        href={item.href}
        className="block rounded px-3 py-2 hover:bg-gray-100"
      >
        {item.label}
      </a>
    ))}
  </nav>
</ScrollArea>
```

### 코드 뷰어

```tsx
<ScrollArea maxHeight="400px" maxWidth="600px" className="rounded border">
  <pre className="bg-gray-900 p-4 text-white">
    <code>{longCodeString}</code>
  </pre>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

### 이미지 갤러리 (수평 스크롤)

```tsx
<ScrollArea maxWidth="100%" className="w-full">
  <div className="flex gap-4 p-4">
    {images.map((img, i) => (
      <img
        key={i}
        src={img.src}
        alt={img.alt}
        className="h-48 w-auto rounded"
      />
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

### 알림 패널

```tsx
<ScrollArea maxHeight="350px" className="rounded border">
  <div className="divide-y">
    {notifications.map((notification) => (
      <div key={notification.id} className="p-4 hover:bg-gray-50">
        <div className="flex items-start gap-3">
          <Icon name={notification.icon} />
          <div className="flex-1">
            <p className="font-medium">{notification.title}</p>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <p className="mt-1 text-xs text-gray-400">{notification.time}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</ScrollArea>
```

### 선택 가능한 리스트

```tsx
function SelectableList() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <ScrollArea maxHeight="300px" className="rounded border">
      <div className="p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex cursor-pointer items-center gap-2 rounded px-3 py-2 ${
              selected.includes(item.id) ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
            onClick={() => {
              setSelected((prev) =>
                prev.includes(item.id)
                  ? prev.filter((id) => id !== item.id)
                  : [...prev, item.id],
              );
            }}
          >
            <Checkbox checked={selected.includes(item.id)} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
```

### 타임라인

```tsx
<ScrollArea maxHeight="600px" className="border-l-2">
  <div className="space-y-8 p-4">
    {timeline.map((event, i) => (
      <div key={i} className="relative pl-8">
        <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500" />
        <div className="text-sm text-gray-500">{event.date}</div>
        <div className="font-medium">{event.title}</div>
        <div className="text-sm text-gray-600">{event.description}</div>
      </div>
    ))}
  </div>
</ScrollArea>
```

### 데이터 테이블

```tsx
<ScrollArea maxHeight="500px" className="rounded border">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>{row.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</ScrollArea>
```

### 카드 그리드

```tsx
<ScrollArea maxHeight="700px">
  <div className="grid grid-cols-2 gap-4 p-4">
    {products.map((product) => (
      <div key={product.id} className="rounded border p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full rounded object-cover"
        />
        <h3 className="mt-2 font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.price}</p>
      </div>
    ))}
  </div>
</ScrollArea>
```

### 항상 표시되는 스크롤바

```tsx
<ScrollArea type="always" maxHeight="300px">
  <div className="p-4">{/* Content */}</div>
</ScrollArea>
```

### 호버 시에만 표시

```tsx
<ScrollArea type="hover" maxHeight="300px">
  <div className="p-4">{/* Content */}</div>
</ScrollArea>
```

## Design Tokens

| Token                    | Value                        | Description                  |
| ------------------------ | ---------------------------- | ---------------------------- |
| `--scroll-area-bg-thumb` | `var(--bg-neutral-tertiary)` | 스크롤바 썸(thumb) 배경 색상 |

## 접근성

- 키보드 네비게이션 완벽 지원 (화살표 키, Page Up/Down)
- 스크린 리더가 스크롤 가능 영역을 인식
- 포커스 상태 시각적 표시
- 스크롤바 드래그 가능

## 사용 시 주의사항

- ScrollArea는 자동으로 수직 ScrollBar를 포함합니다
- 수평 스크롤이 필요한 경우 명시적으로 `<ScrollBar orientation="horizontal" />`를 추가하세요
- maxHeight 또는 maxWidth를 설정하여 스크롤 영역의 크기를 제한하세요
- type="auto" (기본값)는 콘텐츠가 오버플로우될 때만 스크롤바 표시
- type="always"는 항상 스크롤바 표시
- type="hover"는 호버 시에만 스크롤바 표시
- type="scroll"은 스크롤 중에만 스크롤바 표시
- 커스텀 스크롤바는 모든 브라우저에서 일관된 외관을 제공합니다
- 네이티브 스크롤바에 비해 약간의 성능 오버헤드가 있을 수 있습니다

## 관련 컴포넌트

- [Table](./table.md) - 테이블과 함께 사용
- [Sheet](./sheet.md) - SheetBody에서 자동 사용
- [Dialog](./dialog.md) - DialogBody에서 자동 사용
