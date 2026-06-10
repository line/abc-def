<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Field, FieldGroup, FieldLabel } from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@line/abc-def-vue/sheet";
</script>

<template>
  <Sheet>
    <SheetTrigger :as-child="true">
      <Button variant="outline"> Open </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div class="px-6">
        <FieldGroup>
          <Field>
            <FieldLabel html-for="sheet-demo-name"> Name </FieldLabel>
            <Input id="sheet-demo-name" default-value="Pedro Duarte" />
          </Field>
          <Field>
            <FieldLabel html-for="sheet-demo-username"> Username </FieldLabel>
            <Input id="sheet-demo-username" default-value="@peduarte" />
          </Field>
        </FieldGroup>
      </div>
      <SheetFooter>
        <Button type="submit"> Save changes </Button>
        <SheetClose :as-child="true">
          <Button variant="outline"> Close </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
