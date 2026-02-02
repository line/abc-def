# Form

Form은 React Hook Form과 통합되어 폼 유효성 검증을 관리하는 컴포넌트입니다.

## Props

### Form

- React Hook Form의 FormProvider와 동일

### FormField

- `name: string` - 필드 이름
- `control: Control` - React Hook Form control 객체
- `render: ({ field }) => ReactNode` - 렌더 함수

### FormItem

- 표준 div 속성 (폼 필드 컨테이너)

### FormLabel

- Radix UI Label 속성
- 에러 상태 자동 감지 (`data-error` 속성)

### FormControl

- Radix UI Slot 속성
- 자동 접근성 속성 설정

### FormCaption

- Caption 컴포넌트 속성 (설명 텍스트)

### FormMessage

- Caption 컴포넌트 속성 (에러 메시지, variant="error")

## 기본 사용법

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Form,
  FormCaption,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  TextInput,
} from "@line/abc-def-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

function Example() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <TextInput placeholder="johndoe" {...field} />
              </FormControl>
              <FormCaption>This is your public display name.</FormCaption>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <TextInput
                  type="email"
                  placeholder="email@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## 사용 예시

### 간단한 폼

```tsx
const simpleSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

function SimpleForm() {
  const form = useForm({
    resolver: zodResolver(simpleSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <TextInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Textarea와 함께

```tsx
<FormField
  name="bio"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Bio</FormLabel>
      <FormControl>
        <Textarea placeholder="Tell us about yourself" rows={5} {...field} />
      </FormControl>
      <FormCaption>Brief description for your profile</FormCaption>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Select와 함께

```tsx
<FormField
  name="country"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Country</FormLabel>
      <FormControl>
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="kr">South Korea</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Checkbox와 함께

```tsx
<FormField
  name="terms"
  render={({ field }) => (
    <FormItem>
      <div className="flex items-center gap-2">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>I agree to the terms and conditions</FormLabel>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Radio Group과 함께

```tsx
<FormField
  name="plan"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Select a plan</FormLabel>
      <FormControl>
        <RadioGroup value={field.value} onValueChange={field.onChange}>
          <RadioItem value="free" label="Free" />
          <RadioItem value="pro" label="Pro" />
          <RadioItem value="enterprise" label="Enterprise" />
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### Switch와 함께

```tsx
<FormField
  name="notifications"
  render={({ field }) => (
    <FormItem>
      <div className="flex items-center justify-between">
        <div>
          <FormLabel>Email Notifications</FormLabel>
          <FormCaption>Receive emails about your account activity</FormCaption>
        </div>
        <FormControl>
          <Switch checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>
```

### 복잡한 유효성 검증

```tsx
const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

function PasswordForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <TextInput type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <TextInput type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Account</Button>
      </form>
    </Form>
  );
}
```

### 동적 필드

```tsx
function DynamicForm() {
  const form = useForm({
    defaultValues: {
      items: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            name={`items.${index}`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item {index + 1}</FormLabel>
                <div className="flex gap-2">
                  <FormControl>
                    <TextInput {...field} />
                  </FormControl>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="button" variant="outline" onClick={() => append("")}>
          Add Item
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### 비동기 유효성 검증

```tsx
const asyncSchema = z.object({
  username: z.string().refine(
    async (username) => {
      const response = await fetch(`/api/check-username?username=${username}`);
      return response.ok;
    },
    {
      message: "Username is already taken",
    },
  ),
});
```

### 로딩 상태

```tsx
function FormWithLoading() {
  const form = useForm();
  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          await submitData(data);
        })}
      >
        {/* Form fields */}
        <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
```

## 접근성

- FormLabel은 자동으로 FormControl과 연결됩니다
- FormCaption은 aria-describedby로 연결됩니다
- FormMessage는 에러 발생 시 자동으로 aria-describedby에 추가됩니다
- FormControl은 aria-invalid를 자동 설정합니다
- 모든 필드에는 고유한 ID가 자동 생성됩니다

## 사용 시 주의사항

- React Hook Form v7 이상이 필요합니다
- Zod를 사용한 스키마 유효성 검증을 권장합니다
- FormField의 render prop에서 field를 컴포넌트에 스프레드하세요
- FormControl은 Radix UI Slot을 사용하므로 단일 자식만 허용합니다
- 에러 메시지는 FormMessage가 자동으로 표시합니다
- FormCaption은 선택사항이며 설명이 필요한 경우 사용하세요
- 복잡한 폼은 여러 개의 FormField로 분리하세요

## 관련 컴포넌트

- [TextInput](./text-input.md) - 텍스트 입력
- [Textarea](./textarea.md) - 여러 줄 텍스트
- [Select](./select.md) - 선택 드롭다운
- [Checkbox](./checkbox.md) - 체크박스
- [RadioGroup](./radio-group.md) - 라디오 그룹
- [Switch](./switch.md) - 토글 스위치
- [Button](./button.md) - 제출 버튼
- [Label](./label.md) - 레이블
