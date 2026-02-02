# Icon

Icon은 Remix Icon을 사용하는 아이콘 컴포넌트입니다. 2000개 이상의 일관된 스타일의 아이콘을 제공합니다.

## Props

### Icon

- `name?: IconNameType` - 아이콘 이름 (Remix Icon 이름)
- `color?: string` - 아이콘 색상 (기본값: `'currentColor'`)
- `size?: number | string` - 아이콘 크기 (기본값: `24`)
- `className?: string` - 커스텀 CSS 클래스
- `onClick?: () => void` - 클릭 핸들러
- 모든 SVG props 지원

## 기본 사용법

```tsx
import { Icon } from "@line/abc-def-react";

function Example() {
  return <Icon name="RiHome2Line" />;
}
```

## 사용 예시

### 기본 아이콘

```tsx
<Icon name="RiHome2Line" />
```

### 크기 조정

```tsx
<div className="flex items-center gap-4">
  <Icon name="RiStarLine" size={16} />
  <Icon name="RiStarLine" size={24} />
  <Icon name="RiStarLine" size={32} />
  <Icon name="RiStarLine" size={48} />
</div>
```

### 색상 변경

```tsx
<div className="flex gap-4">
  <Icon name="RiHeartLine" color="red" />
  <Icon name="RiHeartLine" color="#3b82f6" />
  <Icon name="RiHeartLine" className="text-green-500" />
</div>
```

### 버튼 안에서 사용

```tsx
<Button>
  <Icon name="RiAddLine" size={20} />
  Add Item
</Button>

<Button variant="ghost">
  <Icon name="RiSettings3Line" size={20} />
</Button>
```

### 클릭 가능한 아이콘

```tsx
function ClickableIcon() {
  const handleClick = () => {
    console.log("Icon clicked");
  };

  return (
    <Icon
      name="RiCloseLine"
      onClick={handleClick}
      className="cursor-pointer hover:text-red-500"
    />
  );
}
```

### 텍스트와 함께

```tsx
<div className="flex items-center gap-2">
  <Icon name="RiMailLine" size={20} />
  <span>Email: user@example.com</span>
</div>

<div className="flex items-center gap-2">
  <Icon name="RiPhoneLine" size={20} />
  <span>Phone: 010-1234-5678</span>
</div>
```

### 네비게이션 메뉴

```tsx
function Navigation() {
  const menuItems = [
    { icon: "RiHome2Line", label: "Home", href: "/" },
    { icon: "RiUser3Line", label: "Profile", href: "/profile" },
    { icon: "RiSettings3Line", label: "Settings", href: "/settings" },
  ];

  return (
    <nav>
      {menuItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="flex items-center gap-2 rounded p-2 hover:bg-gray-100"
        >
          <Icon name={item.icon} size={20} />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
```

### 상태 표시

```tsx
function StatusIcon({
  status,
}: {
  status: "success" | "error" | "warning" | "info";
}) {
  const icons = {
    success: { name: "RiCheckLine", color: "green" },
    error: { name: "RiCloseLine", color: "red" },
    warning: { name: "RiAlertLine", color: "orange" },
    info: { name: "RiInformationLine", color: "blue" },
  };

  const config = icons[status];

  return <Icon name={config.name} color={config.color} />;
}
```

### Alert와 함께

```tsx
<Alert variant="info">
  <Icon name="RiInformationLine" size={20} />
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>

<Alert variant="error">
  <Icon name="RiErrorWarningLine" size={20} />
  <AlertDescription>
    An error occurred.
  </AlertDescription>
</Alert>
```

### 입력 필드 아이콘

```tsx
<div className="relative">
  <Icon
    name="RiSearchLine"
    size={20}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />
  <input
    type="text"
    className="w-full rounded border py-2 pl-10 pr-4"
    placeholder="Search..."
  />
</div>
```

### 파일 타입 아이콘

```tsx
function FileIcon({ filename }: { filename: string }) {
  const getIcon = (name: string) => {
    if (name.endsWith(".pdf")) return "RiFilePdfLine";
    if (name.endsWith(".doc") || name.endsWith(".docx"))
      return "RiFileWordLine";
    if (name.endsWith(".xls") || name.endsWith(".xlsx"))
      return "RiFileExcelLine";
    if (name.match(/\.(jpg|jpeg|png|gif)$/)) return "RiImageLine";
    return "RiFileTextLine";
  };

  return <Icon name={getIcon(filename)} />;
}
```

### 소셜 미디어 아이콘

```tsx
function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://facebook.com"
        className="text-blue-600 hover:text-blue-700"
      >
        <Icon name="RiFacebookFill" size={24} />
      </a>
      <a
        href="https://twitter.com"
        className="text-blue-400 hover:text-blue-500"
      >
        <Icon name="RiTwitterXFill" size={24} />
      </a>
      <a
        href="https://instagram.com"
        className="text-pink-600 hover:text-pink-700"
      >
        <Icon name="RiInstagramFill" size={24} />
      </a>
      <a
        href="https://github.com"
        className="text-gray-900 hover:text-gray-700"
      >
        <Icon name="RiGithubFill" size={24} />
      </a>
    </div>
  );
}
```

### 로딩 아이콘 (애니메이션)

```tsx
<Icon name="RiLoader4Line" className="animate-spin" />
```

### 아이콘 버튼 그룹

```tsx
function IconButtonGroup() {
  return (
    <div className="flex gap-1 rounded border p-1">
      <button className="rounded p-2 hover:bg-gray-100">
        <Icon name="RiBold" size={20} />
      </button>
      <button className="rounded p-2 hover:bg-gray-100">
        <Icon name="RiItalic" size={20} />
      </button>
      <button className="rounded p-2 hover:bg-gray-100">
        <Icon name="RiUnderline" size={20} />
      </button>
    </div>
  );
}
```

### 배지와 함께

```tsx
<div className="relative inline-block">
  <Icon name="RiNotification3Line" size={24} />
  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
    3
  </span>
</div>
```

### 드롭다운 아이콘

```tsx
<Dropdown>
  <DropdownTrigger>
    <Button variant="outline">
      Options
      <Icon name="RiArrowDownSLine" size={20} />
    </Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>
      <Icon name="RiEditLine" size={16} />
      Edit
    </DropdownItem>
    <DropdownItem>
      <Icon name="RiDeleteBinLine" size={16} />
      Delete
    </DropdownItem>
  </DropdownContent>
</Dropdown>
```

### 날씨 아이콘

```tsx
function WeatherIcon({ condition }: { condition: string }) {
  const icons: Record<string, IconNameType> = {
    sunny: "RiSunLine",
    cloudy: "RiCloudyLine",
    rainy: "RiRainyLine",
    snowy: "RiSnowyLine",
    stormy: "RiThunderstormsLine",
  };

  return <Icon name={icons[condition]} size={32} />;
}
```

### 체크리스트

```tsx
function ChecklistItem({
  completed,
  label,
}: {
  completed: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        name={completed ? "RiCheckboxCircleFill" : "RiCheckboxBlankCircleLine"}
        size={20}
        className={completed ? "text-green-500" : "text-gray-400"}
      />
      <span className={completed ? "text-gray-500 line-through" : ""}>
        {label}
      </span>
    </div>
  );
}
```

## 아이콘 목록

Remix Icon의 모든 아이콘을 사용할 수 있습니다:

- **UI/UX**: RiHome2Line, RiSettings3Line, RiSearchLine, RiCloseLine 등
- **미디어**: RiPlayLine, RiPauseLine, RiStopLine, RiVolumeLine 등
- **문서**: RiFileLine, RiFolderLine, RiFileTextLine, RiFilePdfLine 등
- **통신**: RiMailLine, RiPhoneLine, RiMessageLine, RiChatLine 등
- **사용자**: RiUserLine, RiGroupLine, RiTeamLine, RiAccountCircleLine 등
- **화살표**: RiArrowUpLine, RiArrowDownLine, RiArrowLeftLine, RiArrowRightLine 등
- **편집**: RiEditLine, RiDeleteBinLine, RiAddLine, RiSubtractLine 등

전체 아이콘 목록은 [Remix Icon 웹사이트](https://remixicon.com/)를 참조하세요.

## 접근성

- currentColor를 기본값으로 사용하여 텍스트 색상과 일치
- onClick이 있는 경우 자동으로 커서 스타일 적용 (icon-clickable)
- 의미 있는 아이콘에는 aria-label을 추가하세요
- 장식용 아이콘에는 aria-hidden="true"를 추가하세요

## 사용 시 주의사항

- name prop이 없으면 아무것도 렌더링하지 않습니다
- color="currentColor" (기본값)를 사용하면 부모의 텍스트 색상을 상속합니다
- size는 픽셀 단위 숫자 또는 문자열로 지정할 수 있습니다
- onClick이 있으면 자동으로 icon-clickable 클래스가 추가됩니다
- Remix Icon 이름은 항상 "Ri"로 시작합니다 (예: RiHomeLine)
- Line과 Fill 버전이 있습니다 (RiHomeLine, RiHomeFill)
- className으로 text-\* 유틸리티를 사용하여 색상을 변경할 수 있습니다
- 버튼 안에서 사용 시 적절한 간격(gap)을 설정하세요

## 관련 컴포넌트

- [Button](./button.md) - 아이콘 버튼
- [Alert](./alert.md) - 상태 아이콘
- [Caption](./caption.md) - 캡션 아이콘
- [Badge](./badge.md) - 배지 아이콘
