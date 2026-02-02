# Tabs

Tabs는 콘텐츠를 탭으로 구분하여 표시하는 네비게이션 컴포넌트입니다. Radix UI의 Tabs를 기반으로 구현되었습니다.

## Props

### Tabs

- `defaultValue?: string` - 초기 활성 탭
- `value?: string` - 활성 탭 (제어 모드)
- `onValueChange?: (value: string) => void` - 탭 변경 핸들러

### TabsList

- 표준 div 속성

### TabsTrigger

- `value: string` - 탭 값 (필수)
- `disabled?: boolean` - 비활성화 상태

### TabsContent

- `value: string` - 해당 탭의 값 (필수)
- `forceMount?: boolean` - 항상 마운트 유지

## 기본 사용법

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@line/abc-def-react";

function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Account settings content</p>
      </TabsContent>
      <TabsContent value="password">
        <p>Password settings content</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p>Notifications settings content</p>
      </TabsContent>
    </Tabs>
  );
}
```

## 사용 예시

### 기본 Tabs

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
  <TabsContent value="reports">Reports content</TabsContent>
</Tabs>
```

### 제어 모드

```tsx
function ControlledTabs() {
  const [activeTab, setActiveTab] = React.useState("profile");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Profile content</TabsContent>
      <TabsContent value="settings">Settings content</TabsContent>
    </Tabs>
  );
}
```

### 아이콘과 함께

```tsx
<Tabs defaultValue="home">
  <TabsList>
    <TabsTrigger value="home">
      <Icon name="RiHome5Fill" />
      Home
    </TabsTrigger>
    <TabsTrigger value="search">
      <Icon name="RiSearchLine" />
      Search
    </TabsTrigger>
    <TabsTrigger value="settings">
      <Icon name="RiSettings3Fill" />
      Settings
    </TabsTrigger>
  </TabsList>
  <TabsContent value="home">Home content</TabsContent>
  <TabsContent value="search">Search content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>
```

### Badge와 함께

```tsx
<Tabs defaultValue="inbox">
  <TabsList>
    <TabsTrigger value="inbox">
      Inbox
      <Badge variant="bold">12</Badge>
    </TabsTrigger>
    <TabsTrigger value="unread">
      Unread
      <Badge variant="subtle">3</Badge>
    </TabsTrigger>
    <TabsTrigger value="archived">Archived</TabsTrigger>
  </TabsList>
  <TabsContent value="inbox">Inbox messages</TabsContent>
  <TabsContent value="unread">Unread messages</TabsContent>
  <TabsContent value="archived">Archived messages</TabsContent>
</Tabs>
```

### 비활성화 탭

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Available</TabsTrigger>
    <TabsTrigger value="tab2" disabled>
      Disabled
    </TabsTrigger>
    <TabsTrigger value="tab3">Also Available</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
  <TabsContent value="tab3">Content 3</TabsContent>
</Tabs>
```

### 폼 데이터

```tsx
function FormTabs() {
  return (
    <Tabs defaultValue="personal">
      <TabsList>
        <TabsTrigger value="personal">Personal Info</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="personal">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <TextInput id="name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <TextInput id="email" type="email" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="address">
        <div className="space-y-4">
          <div>
            <Label htmlFor="street">Street</Label>
            <TextInput id="street" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <TextInput id="city" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="payment">
        <div className="space-y-4">
          <div>
            <Label htmlFor="card">Card Number</Label>
            <TextInput id="card" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
```

### 데이터 시각화

```tsx
<Tabs defaultValue="chart">
  <TabsList>
    <TabsTrigger value="chart">Chart</TabsTrigger>
    <TabsTrigger value="table">Table</TabsTrigger>
    <TabsTrigger value="raw">Raw Data</TabsTrigger>
  </TabsList>
  <TabsContent value="chart">
    <ChartComponent />
  </TabsContent>
  <TabsContent value="table">
    <TableComponent />
  </TabsContent>
  <TabsContent value="raw">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </TabsContent>
</Tabs>
```

### 프로젝트 설정

```tsx
<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="members">Members</TabsTrigger>
    <TabsTrigger value="integrations">Integrations</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="general">General settings content</TabsContent>
  <TabsContent value="members">Team members management</TabsContent>
  <TabsContent value="integrations">Third-party integrations</TabsContent>
  <TabsContent value="billing">Billing and subscription</TabsContent>
</Tabs>
```

### 콘텐츠 카테고리

```tsx
<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="articles">Articles</TabsTrigger>
    <TabsTrigger value="videos">Videos</TabsTrigger>
    <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
  </TabsList>
  <TabsContent value="all">
    <ContentGrid items={allContent} />
  </TabsContent>
  <TabsContent value="articles">
    <ContentGrid items={articles} />
  </TabsContent>
  <TabsContent value="videos">
    <ContentGrid items={videos} />
  </TabsContent>
  <TabsContent value="podcasts">
    <ContentGrid items={podcasts} />
  </TabsContent>
</Tabs>
```

### 상태별 필터

```tsx
function TaskTabs() {
  const [filter, setFilter] = React.useState("all");

  return (
    <Tabs value={filter} onValueChange={setFilter}>
      <TabsList>
        <TabsTrigger value="all">
          All
          <Badge variant="subtle">{allTasks.length}</Badge>
        </TabsTrigger>
        <TabsTrigger value="active">
          Active
          <Badge variant="bold" color="blue">
            {activeTasks.length}
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="completed">
          Completed
          <Badge variant="bold" color="green">
            {completedTasks.length}
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <TaskList tasks={allTasks} />
      </TabsContent>
      <TabsContent value="active">
        <TaskList tasks={activeTasks} />
      </TabsContent>
      <TabsContent value="completed">
        <TaskList tasks={completedTasks} />
      </TabsContent>
    </Tabs>
  );
}
```

### forceMount 사용

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2" forceMount>
    {/* 항상 마운트되어 있어 애니메이션이나 상태 유지에 유용 */}
    Content 2
  </TabsContent>
</Tabs>
```

## Design Tokens

| Token                  | Value                        | Description                  |
| ---------------------- | ---------------------------- | ---------------------------- |
| `--tabs-fg-unselected` | `var(--fg-neutral-tertiary)` | 선택되지 않은 탭 텍스트 색상 |
| `--tabs-fg-selected`   | `var(--fg-neutral-primary)`  | 선택된 탭 텍스트 색상        |
| `--tabs-bg-unselected` | `var(--bg-neutral-tertiary)` | 선택되지 않은 탭 배경 색상   |
| `--tabs-bg-selected`   | `var(--bg-neutral-primary)`  | 선택된 탭 배경 색상          |

## 접근성

- **키보드 네비게이션**
  - `Tab`: TabsList로 포커스 이동
  - `←`/`→`: 탭 간 이동
  - `Home`: 첫 번째 탭으로 이동
  - `End`: 마지막 탭으로 이동
  - `Space`/`Enter`: 탭 활성화
- role="tablist", role="tab", role="tabpanel" 자동 설정
- aria-selected로 활성 탭 표시
- aria-controls로 탭과 콘텐츠 연결
- aria-labelledby로 콘텐츠와 탭 연결

## 사용 시 주의사항

- TabsTrigger의 value와 TabsContent의 value가 일치해야 합니다
- defaultValue 또는 value 중 하나는 설정해야 초기 활성 탭이 표시됩니다
- 제어 모드에서는 value와 onValueChange를 함께 사용하세요
- TabsContent는 기본적으로 활성 탭만 마운트되며, forceMount로 항상 마운트 상태를 유지할 수 있습니다
- TabsList는 TabsTrigger를 감싸는 컨테이너입니다
- 탭의 개수가 많을 경우 스크롤이나 Dropdown을 고려하세요

## 관련 컴포넌트

- [Menu](./menu.md) - 네비게이션 메뉴
- [Toggle Group](./toggle-group.md) - 토글 버튼 그룹
- [Button](./button.md) - 버튼
- [Badge](./badge.md) - 뱃지
