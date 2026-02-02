# Calendar

Calendar는 날짜를 선택할 수 있는 달력 컴포넌트입니다. react-day-picker를 기반으로 구현되었습니다.

## Props

### Calendar

- `mode?: 'default' | 'single' | 'multiple' | 'range'` - 선택 모드 (기본값: `'default'`)
- `showToday?: boolean` - 오늘 날짜 강조 표시 (기본값: `true`)
- `showOutsideDays?: boolean` - 현재 월 외부 날짜 표시 (기본값: `true`)
- `selected?: Date | Date[] | DateRange` - 선택된 날짜 (mode에 따라 다름)
- `onSelect?: (date: Date | Date[] | DateRange | undefined) => void` - 날짜 선택 시 콜백
- `disabled?: Date | Date[] | ((date: Date) => boolean)` - 비활성화할 날짜
- `defaultMonth?: Date` - 초기 표시 월
- `numberOfMonths?: number` - 표시할 월 수 (기본값: `1`)

## 기본 사용법

```tsx
import { Calendar } from "@line/abc-def-react";

function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}
```

## 사용 예시

### Default 모드 (선택 불가)

```tsx
<Calendar mode="default" />
```

### Single 모드 (단일 선택)

```tsx
function SingleDatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
      {date && <p>Selected: {date.toLocaleDateString()}</p>}
    </div>
  );
}
```

### Multiple 모드 (다중 선택)

```tsx
function MultipleDatePicker() {
  const [dates, setDates] = React.useState<Date[] | undefined>([]);

  return (
    <div>
      <Calendar mode="multiple" selected={dates} onSelect={setDates} />
      {dates && dates.length > 0 && <p>Selected {dates.length} date(s)</p>}
    </div>
  );
}
```

### Range 모드 (기간 선택)

```tsx
import type { DateRange } from "@line/abc-def-react";

function DateRangePicker() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  return (
    <div>
      <Calendar mode="range" selected={range} onSelect={setRange} />
      {range?.from && (
        <p>
          From: {range.from.toLocaleDateString()}
          {range.to && ` - To: ${range.to.toLocaleDateString()}`}
        </p>
      )}
    </div>
  );
}
```

### Range 모드 (2개 달력)

```tsx
function TwoMonthRangePicker() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
    />
  );
}
```

### 특정 날짜 비활성화

```tsx
function DisabledDates() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => {
        // 주말 비활성화
        return date.getDay() === 0 || date.getDay() === 6;
      }}
    />
  );
}
```

### 특정 날짜 범위만 허용

```tsx
function DateRangeLimit() {
  const [date, setDate] = React.useState<Date | undefined>();
  const today = new Date();
  const oneMonthFromNow = new Date(today);
  oneMonthFromNow.setMonth(today.getMonth() + 1);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => {
        // 오늘부터 한 달 후까지만 허용
        return date < today || date > oneMonthFromNow;
      }}
    />
  );
}
```

### 과거 날짜 비활성화

```tsx
function FutureDatesOnly() {
  const [date, setDate] = React.useState<Date | undefined>();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => date < today}
    />
  );
}
```

### 초기 월 설정

```tsx
function DefaultMonth() {
  const [date, setDate] = React.useState<Date | undefined>();
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={sixMonthsFromNow}
    />
  );
}
```

### 오늘 날짜 강조 숨기기

```tsx
<Calendar mode="single" showToday={false} />
```

### 외부 날짜 숨기기

```tsx
<Calendar mode="single" showOutsideDays={false} />
```

### 휴일 표시

```tsx
function HolidayCalendar() {
  const [date, setDate] = React.useState<Date | undefined>();
  const holidays = [
    new Date(2026, 0, 1), // 신정
    new Date(2026, 2, 1), // 삼일절
    // ... 더 많은 휴일
  ];

  const isHoliday = (date: Date) => {
    return holidays.some(
      (holiday) => holiday.toDateString() === date.toDateString(),
    );
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      modifiers={{
        holiday: holidays,
      }}
      modifiersClassNames={{
        holiday: "text-red-500 font-bold",
      }}
    />
  );
}
```

### 날짜 선택 제한 (최대 개수)

```tsx
function LimitedMultipleSelection() {
  const [dates, setDates] = React.useState<Date[] | undefined>([]);
  const MAX_DATES = 5;

  return (
    <div>
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={(newDates) => {
          if (newDates && newDates.length <= MAX_DATES) {
            setDates(newDates);
          }
        }}
      />
      <p>
        Selected {dates?.length ?? 0} / {MAX_DATES} dates
      </p>
    </div>
  );
}
```

### Popover와 함께 사용

```tsx
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@line/abc-def-react";

function DatePickerPopover() {
  const [date, setDate] = React.useState<Date | undefined>();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {date ? date.toLocaleDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            setDate(newDate);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
```

### Form과 함께 사용

```tsx
import { useForm } from "react-hook-form";

function DateForm() {
  const form = useForm({
    defaultValues: {
      birthDate: undefined,
    },
  });

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <div>
        <label>Birth Date</label>
        <Calendar
          mode="single"
          selected={form.watch("birthDate")}
          onSelect={(date) => form.setValue("birthDate", date)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## Design Tokens

| Token                   | Value                                    | Description             |
| ----------------------- | ---------------------------------------- | ----------------------- |
| `--calendar-fg`         | `var(--fg-neutral-primary)`              | 텍스트 색상             |
| `--calendar-fg-pressed` | `var(--fg-neutral-inverse)`              | 선택된 날짜 텍스트 색상 |
| `--calendar-fg-week`    | `var(--fg-neutral-tertiary)`             | 요일 텍스트 색상        |
| `--calendar-border`     | `var(--border-neutral-tertiary)`         | 테두리 색상             |
| `--calendar-bg`         | `var(--bg-neutral-primary)`              | 배경 색상               |
| `--calendar-bg-pressed` | `var(--tint, var(--bg-neutral-inverse))` | 선택된 날짜 배경 색상   |
| `--calendar-bg-hover`   | `var(--bg-neutral-tertiary)`             | 호버 배경 색상          |
| `--calendar-bg-range`   | `var(--bg-neutral-tertiary)`             | 범위 선택 배경 색상     |

## 접근성

- 키보드 네비게이션 지원 (화살표 키로 날짜 이동, Enter로 선택)
- 스크린 리더가 선택된 날짜와 현재 월을 읽어줌
- ARIA 속성으로 달력 상태 전달
- 비활성화된 날짜는 선택 불가능하며 명확히 표시됨

## 사용 시 주의사항

- mode에 따라 selected와 onSelect의 타입이 달라집니다
  - default: 선택 불가
  - single: Date | undefined
  - multiple: Date[] | undefined
  - range: DateRange | undefined (DateRange는 { from?: Date; to?: Date })
- disabled prop은 Date, Date 배열, 또는 함수를 받을 수 있습니다
- numberOfMonths로 여러 달을 표시할 수 있습니다 (range 모드에 유용)
- showToday=false로 오늘 날짜 강조를 비활성화할 수 있습니다
- showOutsideDays=false로 현재 월 외부 날짜를 숨길 수 있습니다
- react-day-picker의 모든 props를 지원합니다
- 시간 선택이 필요한 경우 TimePickerInput 또는 TimePickerSelect와 조합하세요

## 관련 컴포넌트

- [Popover](./popover.md) - 날짜 선택기 UI 래핑
- [TimepickerInput](./timepicker-input.md) - 시간 입력
- [TimepickerSelect](./timepicker-select.md) - 시간 선택
- [Button](./button.md) - 트리거 버튼
