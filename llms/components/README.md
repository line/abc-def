# React 컴포넌트

ABC Def React는 다음과 같은 컴포넌트를 제공합니다.

## 컴포넌트 목록

### Form Controls

- [x] [Checkbox](./checkbox.md) - 체크박스 입력
- [x] [Radio Group](./radio-group.md) - 라디오 버튼 그룹
- [x] [Select](./select.md) - 드롭다운 선택
- [x] [Switch](./switch.md) - 토글 스위치
- [x] [Text Input](./text-input.md) - 텍스트 입력
- [x] [Textarea](./textarea.md) - 멀티라인 텍스트 입력
- [x] [Form](./form.md) - 폼 컨테이너
- [x] [Label](./label.md) - 폼 레이블

### Buttons & Actions

- [x] [Button](./button.md) - 버튼
- [x] [Toggle Group](./toggle-group.md) - 토글 버튼 그룹

### Navigation

- [x] [Menu](./menu.md) - 메뉴/네비게이션
- [x] [Tabs](./tabs.md) - 탭 네비게이션
- [x] [Pagination](./pagination.md) - 페이지네이션

### Overlay

- [x] [Dialog](./dialog.md) - 모달 다이얼로그
- [x] [Dropdown](./dropdown.md) - 드롭다운 메뉴
- [x] [Popover](./popover.md) - 팝오버
- [x] [Sheet](./sheet.md) - 사이드 시트
- [x] [Toast](./toast.md) - 토스트 알림
- [x] [Tooltip](./tooltip.md) - 툴팁

### Data Display

- [x] [Alert](./alert.md) - 알림 메시지
- [x] [Badge](./badge.md) - 뱃지
- [x] [Table](./table.md) - 테이블
- [x] [Tag](./tag.md) - 태그

### Layout

- [x] [Accordion](./accordion.md) - 아코디언
- [x] [Divider](./divider.md) - 구분선
- [x] [Scroll Area](./scroll-area.md) - 스크롤 영역

### Pickers

- [x] [Calendar](./calendar.md) - 캘린더
- [x] [Combobox](./combobox.md) - 콤보박스
- [x] [Multi Select](./multi-select.md) - 다중 선택
- [x] [Timepicker Input](./timepicker-input.md) - 시간 입력
- [x] [Timepicker Select](./timepicker-select.md) - 시간 선택

### Feedback

- [x] [Spinner](./spinner.md) - 로딩 스피너

### Utilities

- [x] [Icon](./icon.md) - 아이콘
- [x] [Caption](./caption.md) - 캡션

### Hooks

- [x] [useTheme](./use-theme.md) - 테마 관리 Hook

## 컴포넌트 사용 패턴

모든 컴포넌트는 다음과 같은 공통 패턴을 따릅니다:

```tsx
import { ComponentName } from "@line/abc-def-react";

<ComponentName
  variant="primary" // 스타일 변형
  size="md" // 크기
  disabled={false} // 상태
  className="..." // 추가 스타일
  {...otherProps} // 기타 Props
>
  Content
</ComponentName>;
```

각 컴포넌트의 상세한 사용법은 개별 문서를 참조하세요.
