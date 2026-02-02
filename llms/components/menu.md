# Menu

Menu는 네비게이션 메뉴를 생성하는 컴포넌트입니다. 수평 또는 수직 레이아웃을 지원하며, 드롭다운 서브메뉴도 포함할 수 있습니다.

## Props

### Menu

- `type: 'single' | 'multiple'` - 선택 모드 (필수)
- `orientation?: 'horizontal' | 'vertical'` - 메뉴 방향 (기본값: `'horizontal'`)
- `value?: string` - 선택된 메뉴 (single 모드)
- `defaultValue?: string` - 초기 선택 메뉴 (single 모드)
- `onValueChange?: (value: string) => void` - 선택 변경 핸들러
- `size?: 'small' | 'medium' | 'large'` - 크기

### MenuItem

- `value: string` - 메뉴 아이템 값 (필수)
- `disabled?: boolean` - 비활성화 상태

### MenuDropdown

- Dropdown 컴포넌트와 동일

### MenuDropdownTrigger

- `asChild?: boolean` - 자식 요소를 trigger로 사용

### MenuDropdownContent

- DropdownContent 속성과 동일

### MenuDropdownGroup

- DropdownGroup과 동일

### MenuDropdownItem

- MenuItem 속성과 동일

## 기본 사용법

```tsx
import { Menu, MenuItem } from "@line/abc-def-react";

function Example() {
  const [selected, setSelected] = React.useState("home");

  return (
    <Menu type="single" value={selected} onValueChange={setSelected}>
      <MenuItem value="home">Home</MenuItem>
      <MenuItem value="about">About</MenuItem>
      <MenuItem value="contact">Contact</MenuItem>
    </Menu>
  );
}
```

## 사용 예시

### 수평 메뉴 (기본)

```tsx
<Menu type="single" orientation="horizontal">
  <MenuItem value="dashboard">Dashboard</MenuItem>
  <MenuItem value="projects">Projects</MenuItem>
  <MenuItem value="team">Team</MenuItem>
  <MenuItem value="settings">Settings</MenuItem>
</Menu>
```

### 수직 메뉴

```tsx
<Menu type="single" orientation="vertical">
  <MenuItem value="profile">Profile</MenuItem>
  <MenuItem value="account">Account</MenuItem>
  <MenuItem value="billing">Billing</MenuItem>
  <MenuItem value="notifications">Notifications</MenuItem>
</Menu>
```

### 아이콘과 함께 (왼쪽)

```tsx
<Menu type="single" orientation="vertical">
  <MenuItem value="home">
    <Icon name="RiHome5Fill" />
    Home
  </MenuItem>
  <MenuItem value="search">
    <Icon name="RiSearchLine" />
    Search
  </MenuItem>
  <MenuItem value="settings">
    <Icon name="RiSettings3Fill" />
    Settings
  </MenuItem>
</Menu>
```

### 아이콘과 함께 (오른쪽)

```tsx
<Menu type="single" orientation="horizontal">
  <MenuItem value="notifications">
    Notifications
    <Icon name="RiBellLine" />
  </MenuItem>
  <MenuItem value="messages">
    Messages
    <Icon name="RiMailLine" />
  </MenuItem>
</Menu>
```

### Badge와 함께

```tsx
<Menu type="single" orientation="vertical">
  <MenuItem value="inbox">
    Inbox
    <Badge variant="bold">12</Badge>
  </MenuItem>
  <MenuItem value="drafts">
    Drafts
    <Badge variant="subtle">3</Badge>
  </MenuItem>
  <MenuItem value="sent">Sent</MenuItem>
</Menu>
```

### 드롭다운 서브메뉴

```tsx
<Menu type="single" orientation="vertical">
  <MenuItem value="home">
    <Icon name="RiHome5Fill" />
    Home
  </MenuItem>
  <MenuDropdown>
    <MenuDropdownTrigger>
      <Icon name="RiSettings3Fill" />
      Settings
      <Icon name="RiArrowRightSLine" />
    </MenuDropdownTrigger>
    <MenuDropdownContent>
      <MenuDropdownGroup>
        <MenuDropdownItem value="profile">Profile</MenuDropdownItem>
        <MenuDropdownItem value="account">Account</MenuDropdownItem>
        <MenuDropdownItem value="preferences">Preferences</MenuDropdownItem>
      </MenuDropdownGroup>
    </MenuDropdownContent>
  </MenuDropdown>
  <MenuItem value="help">
    <Icon name="RiQuestionLine" />
    Help
  </MenuItem>
</Menu>
```

### 아이콘과 Badge 조합

```tsx
<Menu type="single" orientation="vertical">
  <MenuItem value="inbox">
    <Icon name="RiInboxFill" />
    Inbox
    <Badge variant="bold" color="blue">
      5
    </Badge>
  </MenuItem>
  <MenuItem value="starred">
    <Icon name="RiStarFill" />
    Starred
  </MenuItem>
  <MenuItem value="archive">
    <Icon name="RiArchiveFill" />
    Archive
  </MenuItem>
</Menu>
```

### 크기 변형

```tsx
<Menu type="single" size="small">
  <MenuItem value="1">Small</MenuItem>
  <MenuItem value="2">Menu</MenuItem>
</Menu>

<Menu type="single" size="medium">
  <MenuItem value="1">Medium</MenuItem>
  <MenuItem value="2">Menu</MenuItem>
</Menu>

<Menu type="single" size="large">
  <MenuItem value="1">Large</MenuItem>
  <MenuItem value="2">Menu</MenuItem>
</Menu>
```

### 링크로 사용

```tsx
<Menu type="single">
  <MenuItem value="home" asChild>
    <a href="/">Home</a>
  </MenuItem>
  <MenuItem value="about" asChild>
    <a href="/about">About</a>
  </MenuItem>
  <MenuItem value="contact" asChild>
    <a href="/contact">Contact</a>
  </MenuItem>
</Menu>
```

### 비활성화 상태

```tsx
<Menu type="single">
  <MenuItem value="active">Active</MenuItem>
  <MenuItem value="disabled" disabled>
    Disabled
  </MenuItem>
  <MenuItem value="another">Another</MenuItem>
</Menu>
```

### 사이드바 네비게이션

```tsx
function Sidebar() {
  const [active, setActive] = React.useState("dashboard");

  return (
    <aside className="w-64 border-r p-4">
      <Menu
        type="single"
        orientation="vertical"
        value={active}
        onValueChange={setActive}
      >
        <MenuItem value="dashboard">
          <Icon name="RiDashboardFill" />
          Dashboard
        </MenuItem>
        <MenuItem value="projects">
          <Icon name="RiFolderFill" />
          Projects
        </MenuItem>
        <MenuItem value="tasks">
          <Icon name="RiTaskFill" />
          Tasks
          <Badge variant="bold">3</Badge>
        </MenuItem>
        <MenuDropdown>
          <MenuDropdownTrigger>
            <Icon name="RiSettings3Fill" />
            Settings
            <Icon name="RiArrowRightSLine" />
          </MenuDropdownTrigger>
          <MenuDropdownContent>
            <MenuDropdownGroup>
              <MenuDropdownItem value="profile">Profile</MenuDropdownItem>
              <MenuDropdownItem value="team">Team</MenuDropdownItem>
              <MenuDropdownItem value="billing">Billing</MenuDropdownItem>
            </MenuDropdownGroup>
          </MenuDropdownContent>
        </MenuDropdown>
      </Menu>
    </aside>
  );
}
```

### 헤더 네비게이션

```tsx
function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <Logo />
          <Menu type="single" orientation="horizontal">
            <MenuItem value="products">Products</MenuItem>
            <MenuItem value="solutions">Solutions</MenuItem>
            <MenuItem value="pricing">Pricing</MenuItem>
            <MenuItem value="docs">Docs</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
}
```

## Design Tokens

| Token               | Value                        | Description         |
| ------------------- | ---------------------------- | ------------------- |
| `--menu-fg`         | `var(--fg-neutral-tertiary)` | 기본 텍스트 색상    |
| `--menu-fg-hover`   | `var(--fg-neutral-tertiary)` | 호버 시 텍스트 색상 |
| `--menu-fg-pressed` | `var(--fg-neutral-primary)`  | 선택된 텍스트 색상  |
| `--menu-bg-hover`   | `var(--bg-neutral-tertiary)` | 호버 시 배경 색상   |
| `--menu-bg-pressed` | `var(--bg-neutral-tertiary)` | 선택된 배경 색상    |

## 접근성

- **키보드 네비게이션**
  - `Tab`: 메뉴로 포커스 이동
  - `←`/`→`: 수평 메뉴에서 아이템 간 이동
  - `↑`/`↓`: 수직 메뉴에서 아이템 간 이동
  - `Space`/`Enter`: 아이템 선택
- role="navigation" 자동 설정
- 선택 상태는 aria-current로 전달
- 드롭다운은 Dropdown 컴포넌트의 접근성 기능 상속

## 사용 시 주의사항

- Menu는 Toggle Group을 기반으로 구현되어 있습니다
- type은 'single' 또는 'multiple'로 설정해야 합니다
- orientation에 따라 키보드 네비게이션 방향이 달라집니다
- MenuDropdown은 Dropdown 컴포넌트를 래핑한 것입니다
- MenuItem의 value는 고유해야 합니다
- 링크로 사용할 때는 asChild를 사용하세요
- 테마의 size를 상속받으며, 개별 설정으로 오버라이드할 수 있습니다

## 관련 컴포넌트

- [Dropdown](./dropdown.md) - 드롭다운 메뉴
- [Tabs](./tabs.md) - 탭 네비게이션
- [Toggle Group](./toggle-group.md) - 토글 버튼 그룹
- [Button](./button.md) - 버튼
