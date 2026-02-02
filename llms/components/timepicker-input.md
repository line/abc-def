# Timepicker Input

Timepicker Input은 키보드로 시간을 입력할 수 있는 입력 컴포넌트입니다. TextInput을 기반으로 구현되었습니다.

## Props

### TimePickerInput

- `picker: 'hours' | '12hours' | 'minutes' | 'seconds'` - 입력 타입 (필수)
- `date?: Date | null` - 현재 날짜/시간
- `onDateChange?: (date: Date | undefined) => void` - 날짜 변경 시 콜백
- `period?: 'AM' | 'PM'` - 12시간 형식의 AM/PM
- `onRightFocus?: () => void` - 오른쪽 화살표 키 포커스 이동
- `onLeftFocus?: () => void` - 왼쪽 화살표 키 포커스 이동
- TextInput의 모든 props 지원

## 기본 사용법

```tsx
import { TimePickerInput } from "@line/abc-def-react";

function Example() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput picker="hours" date={date} onDateChange={setDate} />
      :
      <TimePickerInput picker="minutes" date={date} onDateChange={setDate} />
    </div>
  );
}
```

## 사용 예시

### 24시간 형식

```tsx
function TimePicker24Hour() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput picker="hours" date={date} onDateChange={setDate} />
      <span>:</span>
      <TimePickerInput picker="minutes" date={date} onDateChange={setDate} />
      <span>:</span>
      <TimePickerInput picker="seconds" date={date} onDateChange={setDate} />
    </div>
  );
}
```

### 12시간 형식 (AM/PM)

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
      <Select
        value={period}
        onValueChange={(val) => setPeriod(val as "AM" | "PM")}
      >
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="AM">AM</SelectItem>
          <SelectItem value="PM">PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
```

### 화살표 키 포커스 이동

```tsx
function TimePickerWithFocus() {
  const [date, setDate] = React.useState<Date>(new Date());
  const hourRef = React.useRef<HTMLInputElement>(null);
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        ref={hourRef}
        picker="hours"
        date={date}
        onDateChange={setDate}
        onRightFocus={() => minuteRef.current?.focus()}
      />
      <span>:</span>
      <TimePickerInput
        ref={minuteRef}
        picker="minutes"
        date={date}
        onDateChange={setDate}
        onLeftFocus={() => hourRef.current?.focus()}
        onRightFocus={() => secondRef.current?.focus()}
      />
      <span>:</span>
      <TimePickerInput
        ref={secondRef}
        picker="seconds"
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

  return (
    <div className="space-y-2">
      <Label>Select Time</Label>
      <div className="flex items-center gap-2">
        <TimePickerInput picker="hours" date={date} onDateChange={setDate} />
        <span>:</span>
        <TimePickerInput picker="minutes" date={date} onDateChange={setDate} />
      </div>
    </div>
  );
}
```

### Calendar와 함께 (날짜 + 시간)

```tsx
function DateTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => {
          if (newDate) {
            // 기존 시간 유지
            newDate.setHours(date.getHours());
            newDate.setMinutes(date.getMinutes());
            setDate(newDate);
          }
        }}
      />
      <div className="flex items-center gap-2">
        <TimePickerInput picker="hours" date={date} onDateChange={setDate} />
        <span>:</span>
        <TimePickerInput picker="minutes" date={date} onDateChange={setDate} />
      </div>
      <p>Selected: {date.toLocaleString()}</p>
    </div>
  );
}
```

### Popover 안에서 사용

```tsx
function TimePickerPopover() {
  const [date, setDate] = React.useState<Date>(new Date());
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">{date.toLocaleTimeString()}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center gap-2 p-2">
          <TimePickerInput picker="hours" date={date} onDateChange={setDate} />
          <span>:</span>
          <TimePickerInput
            picker="minutes"
            date={date}
            onDateChange={setDate}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Form과 함께 사용

```tsx
import { useForm } from "react-hook-form";

function TimePickerForm() {
  const form = useForm({
    defaultValues: {
      appointmentTime: new Date(),
    },
  });

  const date = form.watch("appointmentTime");

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <div className="space-y-2">
        <Label>Appointment Time</Label>
        <div className="flex items-center gap-2">
          <TimePickerInput
            picker="hours"
            date={date}
            onDateChange={(newDate) =>
              form.setValue("appointmentTime", newDate ?? new Date())
            }
          />
          <span>:</span>
          <TimePickerInput
            picker="minutes"
            date={date}
            onDateChange={(newDate) =>
              form.setValue("appointmentTime", newDate ?? new Date())
            }
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### 비활성화

```tsx
function DisabledTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput
        picker="hours"
        date={date}
        onDateChange={setDate}
        disabled
      />
      <span>:</span>
      <TimePickerInput
        picker="minutes"
        date={date}
        onDateChange={setDate}
        disabled
      />
    </div>
  );
}
```

### 시간 범위 제한

```tsx
function LimitedTimePicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  const handleHourChange = (newDate: Date | undefined) => {
    if (newDate) {
      const hour = newDate.getHours();
      // 9시부터 18시까지만 허용
      if (hour >= 9 && hour <= 18) {
        setDate(newDate);
      }
    }
  };

  return (
    <div className="space-y-2">
      <Label>Business Hours (9:00 - 18:00)</Label>
      <div className="flex items-center gap-2">
        <TimePickerInput
          picker="hours"
          date={date}
          onDateChange={handleHourChange}
        />
        <span>:</span>
        <TimePickerInput picker="minutes" date={date} onDateChange={setDate} />
      </div>
    </div>
  );
}
```

### 15분 단위로 제한

```tsx
function QuarterHourPicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  const handleMinuteChange = (newDate: Date | undefined) => {
    if (newDate) {
      const minute = newDate.getMinutes();
      // 0, 15, 30, 45분만 허용
      const validMinutes = [0, 15, 30, 45];
      const nearestValid = validMinutes.reduce((prev, curr) =>
        Math.abs(curr - minute) < Math.abs(prev - minute) ? curr : prev,
      );
      newDate.setMinutes(nearestValid);
      setDate(newDate);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <TimePickerInput picker="hours" date={date} onDateChange={setDate} />
      <span>:</span>
      <TimePickerInput
        picker="minutes"
        date={date}
        onDateChange={handleMinuteChange}
      />
    </div>
  );
}
```

## 접근성

- 키보드 입력으로 시간 설정 (0-9 숫자 키)
- 화살표 위/아래 키로 값 증감
- 화살표 좌/우 키로 필드 간 이동 (onLeftFocus, onRightFocus와 함께 사용)
- Tab 키로 다음 필드로 이동
- 스크린 리더가 현재 값과 입력 타입을 읽어줌

## 사용 시 주의사항

- picker prop은 필수입니다 (hours, 12hours, minutes, seconds)
- 12시간 형식 사용 시 period prop을 전달해야 합니다
- 두 자리 숫자 입력은 2초 내에 완료해야 합니다 (타이머)
- 첫 번째 숫자 입력 후 자동으로 다음 필드로 이동하지 않습니다
- onRightFocus와 onLeftFocus로 화살표 키 포커스 이동을 직접 구현해야 합니다
- date prop이 null이면 00:00:00으로 초기화됩니다
- inputMode="decimal"로 모바일에서 숫자 키패드가 표시됩니다
- type="tel"로 설정되어 있어 전화번호 자동완성이 나타날 수 있습니다

## 관련 컴포넌트

- [TimePickerSelect](./timepicker-select.md) - Select 기반 시간 선택
- [Calendar](./calendar.md) - 날짜 선택
- [TextInput](./text-input.md) - 기반 컴포넌트
- [Label](./label.md) - 레이블
