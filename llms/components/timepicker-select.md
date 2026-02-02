# Timepicker Select

Timepicker Select는 Select 컴포넌트를 사용하여 AM/PM을 선택할 수 있는 컴포넌트입니다. TimePickerInput과 함께 12시간 형식 시간 선택기를 구성할 때 사용됩니다.

## Props

### TimePickerSelect

- `period: 'AM' | 'PM'` - 현재 선택된 AM/PM (필수)
- `setPeriod?: (period: 'AM' | 'PM') => void` - period 변경 시 콜백
- `date?: Date | null` - 현재 날짜/시간
- `onDateChange?: (date: Date | undefined) => void` - 날짜 변경 시 콜백
- `onRightFocus?: () => void` - 오른쪽 화살표 키 포커스 이동
- `onLeftFocus?: () => void` - 왼쪽 화살표 키 포커스 이동
- `className?: string` - 커스텀 CSS 클래스

## 기본 사용법

```tsx
import { TimePickerSelect } from "@line/abc-def-react";

function Example() {
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <TimePickerSelect
      period={period}
      setPeriod={setPeriod}
      date={date}
      onDateChange={setDate}
    />
  );
}
```

## 사용 예시

### TimePickerInput과 함께 (12시간 형식)

```tsx
function TimePicker12Hour() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        picker="12hours"
        date={date}
        onDateChange={setDate}
        period={period}
      />
      <span>:</span>
      <TimePickerInput
        picker="minutes"
        date={date}
        onDateChange={setDate}
        period={period}
      />
      <TimePickerSelect
        period={period}
        setPeriod={setPeriod}
        date={date}
        onDateChange={setDate}
      />
    </div>
  );
}
```

### 화살표 키 포커스 이동

```tsx
function TimePickerWithFocus() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const periodRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        picker="12hours"
        date={date}
        onDateChange={setDate}
        period={period}
      />
      <span>:</span>
      <TimePickerInput
        ref={minuteRef}
        picker="minutes"
        date={date}
        onDateChange={setDate}
        period={period}
        onRightFocus={() => periodRef.current?.focus()}
      />
      <TimePickerSelect
        ref={periodRef}
        period={period}
        setPeriod={setPeriod}
        date={date}
        onDateChange={setDate}
        onLeftFocus={() => minuteRef.current?.focus()}
      />
    </div>
  );
}
```

### Label과 함께

```tsx
function LabeledTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  return (
    <div className="space-y-2">
      <Label>Select Time</Label>
      <div className="flex items-center gap-2">
        <TimePickerInput
          picker="12hours"
          date={date}
          onDateChange={setDate}
          period={period}
        />
        <span>:</span>
        <TimePickerInput
          picker="minutes"
          date={date}
          onDateChange={setDate}
          period={period}
        />
        <TimePickerSelect
          period={period}
          setPeriod={setPeriod}
          date={date}
          onDateChange={setDate}
        />
      </div>
    </div>
  );
}
```

### Popover 안에서 사용

```tsx
function TimePickerPopover() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center gap-2 p-2">
          <TimePickerInput
            picker="12hours"
            date={date}
            onDateChange={setDate}
            period={period}
          />
          <span>:</span>
          <TimePickerInput
            picker="minutes"
            date={date}
            onDateChange={setDate}
            period={period}
          />
          <TimePickerSelect
            period={period}
            setPeriod={setPeriod}
            date={date}
            onDateChange={setDate}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Calendar와 함께 (날짜 + 시간)

```tsx
function DateTimePicker12Hour() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => {
          if (newDate) {
            newDate.setHours(date.getHours());
            newDate.setMinutes(date.getMinutes());
            setDate(newDate);
          }
        }}
      />
      <div className="flex items-center gap-2">
        <TimePickerInput
          picker="12hours"
          date={date}
          onDateChange={setDate}
          period={period}
        />
        <span>:</span>
        <TimePickerInput
          picker="minutes"
          date={date}
          onDateChange={setDate}
          period={period}
        />
        <TimePickerSelect
          period={period}
          setPeriod={setPeriod}
          date={date}
          onDateChange={setDate}
        />
      </div>
      <p>Selected: {date.toLocaleString("en-US", { hour12: true })}</p>
    </div>
  );
}
```

### Form과 함께 사용

```tsx
import { useForm } from "react-hook-form";

function TimePickerForm() {
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");
  const form = useForm({
    defaultValues: {
      meetingTime: new Date(),
    },
  });

  const date = form.watch("meetingTime");

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <div className="space-y-2">
        <Label>Meeting Time</Label>
        <div className="flex items-center gap-2">
          <TimePickerInput
            picker="12hours"
            date={date}
            onDateChange={(newDate) =>
              form.setValue("meetingTime", newDate ?? new Date())
            }
            period={period}
          />
          <span>:</span>
          <TimePickerInput
            picker="minutes"
            date={date}
            onDateChange={(newDate) =>
              form.setValue("meetingTime", newDate ?? new Date())
            }
            period={period}
          />
          <TimePickerSelect
            period={period}
            setPeriod={setPeriod}
            date={date}
            onDateChange={(newDate) =>
              form.setValue("meetingTime", newDate ?? new Date())
            }
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### 읽기 전용

```tsx
function ReadOnlyTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        picker="12hours"
        date={date}
        onDateChange={setDate}
        period={period}
        readOnly
      />
      <span>:</span>
      <TimePickerInput
        picker="minutes"
        date={date}
        onDateChange={setDate}
        period={period}
        readOnly
      />
      <TimePickerSelect
        period={period}
        date={date}
        className="pointer-events-none opacity-50"
      />
    </div>
  );
}
```

### 커스텀 스타일

```tsx
function StyledTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        picker="12hours"
        date={date}
        onDateChange={setDate}
        period={period}
        className="w-16"
      />
      <span className="font-bold">:</span>
      <TimePickerInput
        picker="minutes"
        date={date}
        onDateChange={setDate}
        period={period}
        className="w-16"
      />
      <TimePickerSelect
        period={period}
        setPeriod={setPeriod}
        date={date}
        onDateChange={setDate}
        className="w-20"
      />
    </div>
  );
}
```

### 초(seconds) 포함

```tsx
function DetailedTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [period, setPeriod] = React.useState<"AM" | "PM">("AM");

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        picker="12hours"
        date={date}
        onDateChange={setDate}
        period={period}
      />
      <span>:</span>
      <TimePickerInput
        picker="minutes"
        date={date}
        onDateChange={setDate}
        period={period}
      />
      <span>:</span>
      <TimePickerInput
        picker="seconds"
        date={date}
        onDateChange={setDate}
        period={period}
      />
      <TimePickerSelect
        period={period}
        setPeriod={setPeriod}
        date={date}
        onDateChange={setDate}
      />
    </div>
  );
}
```

## 접근성

- 키보드 네비게이션 지원 (Tab, Enter, Space)
- 화살표 좌/우 키로 인접 필드로 이동 (onLeftFocus, onRightFocus와 함께 사용)
- 스크린 리더가 선택된 AM/PM 값을 읽어줌
- Select 컴포넌트의 모든 접근성 기능 포함

## 사용 시 주의사항

- period와 setPeriod prop은 필수입니다
- TimePickerInput과 함께 사용하여 완전한 12시간 형식 시간 선택기를 구성하세요
- period 변경 시 자동으로 시간이 조정됩니다 (AM ↔ PM 전환 시 +12/-12 시간)
- date와 onDateChange를 함께 제공하면 period 변경 시 시간이 자동 업데이트됩니다
- Select 컴포넌트를 기반으로 하므로 Select의 모든 스타일링이 적용됩니다
- onRightFocus와 onLeftFocus로 화살표 키 포커스 이동을 직접 구현해야 합니다
- className으로 너비 등 스타일을 커스터마이징할 수 있습니다

## 관련 컴포넌트

- [TimePickerInput](./timepicker-input.md) - 시간 입력 컴포넌트
- [Select](./select.md) - 기반 컴포넌트
- [Calendar](./calendar.md) - 날짜 선택
- [Label](./label.md) - 레이블
