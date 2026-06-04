/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

import type { ComponentDoc } from "./components";

export function reactImportSnippet(component: ComponentDoc) {
  const exports = [component.primaryExport, ...component.relatedExports].join(
    ", ",
  );
  return `import { ${exports} } from "@line/abc-def-react/${component.slug}";`;
}

export function vueImportSnippet(component: ComponentDoc) {
  const exports = [component.primaryExport, ...component.relatedExports].join(
    ", ",
  );
  return `<script setup lang="ts">
import { ${exports} } from "@line/abc-def-vue/${component.slug}";
</script>`;
}

export function basicReactSnippet(component: ComponentDoc) {
  switch (component.slug) {
    case "alert":
      return `import { Alert, AlertDescription, AlertTitle } from "@line/abc-def-react/alert";

export function Example() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Use alerts for short contextual feedback.</AlertDescription>
    </Alert>
  );
}`;
    case "button":
      return `import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Save changes</Button>;
}`;
    case "card":
      return `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@line/abc-def-react/card";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project status</CardTitle>
        <CardDescription>Updated just now</CardDescription>
      </CardHeader>
      <CardContent>Ready for review.</CardContent>
    </Card>
  );
}`;
    case "input":
      return `import { Input } from "@line/abc-def-react/input";
import { Label } from "@line/abc-def-react/label";

export function Example() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  );
}`;
    default:
      return `${reactImportSnippet(component)}

export function Example() {
  return <${component.primaryExport} />;
}`;
  }
}

const basicVueExampleOverrides: Record<string, string> = {
  accordion: `<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@line/abc-def-vue/accordion";
</script>

<template>
  <Accordion type="single" collapsible default-value="item-1">
    <AccordionItem value="item-1">
      <AccordionTrigger>Design tokens</AccordionTrigger>
      <AccordionContent>
        Component styles resolve through CSS variables.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>`,
  alert: `<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "@line/abc-def-vue/alert";
</script>

<template>
  <Alert>
    <AlertTitle>Heads up</AlertTitle>
    <AlertDescription>Use alerts for short contextual feedback.</AlertDescription>
  </Alert>
</template>`,
  "alert-dialog": `<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@line/abc-def-vue/alert-dialog";
import { Button } from "@line/abc-def-vue/button";
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger :as-child="true">
      <Button variant="destructive">Delete draft</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete draft?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>`,
  "aspect-ratio": `<script setup lang="ts">
import { AspectRatio } from "@line/abc-def-vue/aspect-ratio";
</script>

<template>
  <AspectRatio :ratio="16 / 9">
    <div class="bg-muted grid h-full place-items-center rounded-md border">
      16:9
    </div>
  </AspectRatio>
</template>`,
  avatar: `<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@line/abc-def-vue/avatar";
</script>

<template>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="Jane Doe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</template>`,
  badge: `<script setup lang="ts">
import { Badge } from "@line/abc-def-vue/badge";
</script>

<template>
  <Badge variant="secondary">Stable</Badge>
</template>`,
  breadcrumb: `<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@line/abc-def-vue/breadcrumb";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Docs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Components</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>`,
  button: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
</script>

<template>
  <Button variant="outline">Save changes</Button>
</template>`,
  "button-group": `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@line/abc-def-vue/button-group";
</script>

<template>
  <ButtonGroup>
    <Button variant="outline">Preview</Button>
    <ButtonGroupSeparator />
    <ButtonGroupText>v1.2</ButtonGroupText>
  </ButtonGroup>
</template>`,
  calendar: `<script setup lang="ts">
import { Calendar } from "@line/abc-def-vue/calendar";
</script>

<template>
  <Calendar layout="month-and-year" />
</template>`,
  card: `<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@line/abc-def-vue/card";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Project status</CardTitle>
      <CardDescription>Updated just now</CardDescription>
    </CardHeader>
    <CardContent>Ready for review.</CardContent>
  </Card>
</template>`,
  carousel: `<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@line/abc-def-vue/carousel";
</script>

<template>
  <Carousel>
    <CarouselContent>
      <CarouselItem>Slide 1</CarouselItem>
      <CarouselItem>Slide 2</CarouselItem>
      <CarouselItem>Slide 3</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>`,
  checkbox: `<script setup lang="ts">
import { Checkbox } from "@line/abc-def-vue/checkbox";
import { Field, FieldLabel } from "@line/abc-def-vue/field";
</script>

<template>
  <Field orientation="horizontal">
    <Checkbox id="release" default-checked />
    <FieldLabel html-for="release">Include release notes</FieldLabel>
  </Field>
</template>`,
  collapsible: `<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@line/abc-def-vue/collapsible";
</script>

<template>
  <Collapsible default-open>
    <CollapsibleTrigger>Token details</CollapsibleTrigger>
    <CollapsibleContent>
      Semantic and component layers.
    </CollapsibleContent>
  </Collapsible>
</template>`,
  combobox: `<script setup lang="ts">
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxViewport,
} from "@line/abc-def-vue/combobox";

const frameworks = ["React", "Vue", "CSS"];
</script>

<template>
  <Combobox :items="frameworks">
    <ComboboxInput placeholder="Framework" />
    <ComboboxList>
      <ComboboxViewport>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxItem
          v-for="framework in frameworks"
          :key="framework"
          :value="framework"
        >
          {{ framework }}
        </ComboboxItem>
      </ComboboxViewport>
    </ComboboxList>
  </Combobox>
</template>`,
  command: `<script setup lang="ts">
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@line/abc-def-vue/command";
</script>

<template>
  <Command>
    <CommandInput placeholder="Search commands" />
    <CommandList>
      <CommandGroup heading="Actions">
        <CommandItem value="copy-css">Copy CSS override</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>`,
  "context-menu": `<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@line/abc-def-vue/context-menu";
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger
      class="flex h-24 items-center justify-center rounded-md border text-sm"
    >
      Right click area
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Copy token</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>`,
  dialog: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@line/abc-def-vue/dialog";
</script>

<template>
  <Dialog>
    <DialogTrigger :as-child="true">
      <Button>Open dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit token</DialogTitle>
        <DialogDescription>
          Change a scoped CSS variable.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>`,
  drawer: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@line/abc-def-vue/drawer";
</script>

<template>
  <Drawer>
    <DrawerTrigger :as-child="true">
      <Button variant="outline">Open drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Token drawer</DrawerTitle>
        <DrawerDescription>Review component groups.</DrawerDescription>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
</template>`,
  "dropdown-menu": `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@line/abc-def-vue/dropdown-menu";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger :as-child="true">
      <Button variant="outline">Actions</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Copy</DropdownMenuItem>
      <DropdownMenuItem>Reset</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>`,
  empty: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@line/abc-def-vue/empty";
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyTitle>No overrides</EmptyTitle>
      <EmptyDescription>Add token edits to preview them.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button size="sm">Create override</Button>
    </EmptyContent>
  </Empty>
</template>`,
  field: `<script setup lang="ts">
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@line/abc-def-vue/field";
import { Input } from "@line/abc-def-vue/input";
</script>

<template>
  <FieldGroup>
    <Field>
      <FieldLabel html-for="token-name">Token name</FieldLabel>
      <Input id="token-name" default-value="--primary" />
      <FieldDescription>Semantic token override.</FieldDescription>
    </Field>
  </FieldGroup>
</template>`,
  "hover-card": `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@line/abc-def-vue/hover-card";
</script>

<template>
  <HoverCard>
    <HoverCardTrigger :as-child="true">
      <Button variant="link">Preview token</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      --button-bg-primary resolves to --primary.
    </HoverCardContent>
  </HoverCard>
</template>`,
  input: `<script setup lang="ts">
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";
</script>

<template>
  <div class="grid gap-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="name@example.com" />
  </div>
</template>`,
  "input-group": `<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@line/abc-def-vue/input-group";
</script>

<template>
  <InputGroup>
    <InputGroupAddon>
      <InputGroupText>--</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput placeholder="token-name" />
  </InputGroup>
</template>`,
  "input-otp": `<script setup lang="ts">
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@line/abc-def-vue/input-otp";
</script>

<template>
  <InputOTP :maxlength="4">
    <InputOTPGroup>
      <InputOTPSlot :index="0" />
      <InputOTPSlot :index="1" />
      <InputOTPSlot :index="2" />
      <InputOTPSlot :index="3" />
    </InputOTPGroup>
  </InputOTP>
</template>`,
  item: `<script setup lang="ts">
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@line/abc-def-vue/item";
</script>

<template>
  <Item>
    <ItemHeader>
      <ItemTitle>Component tokens</ItemTitle>
    </ItemHeader>
    <ItemContent>
      <ItemDescription>
        Scoped to each shared class contract.
      </ItemDescription>
    </ItemContent>
  </Item>
</template>`,
  kbd: `<script setup lang="ts">
import { Kbd, KbdGroup } from "@line/abc-def-vue/kbd";
</script>

<template>
  <KbdGroup>
    <Kbd>Control</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>
</template>`,
  label: `<script setup lang="ts">
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";
</script>

<template>
  <div class="grid gap-2">
    <Label for="named-input">Token label</Label>
    <Input id="named-input" placeholder="--primary" />
  </div>
</template>`,
  menubar: `<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@line/abc-def-vue/menubar";
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Export CSS</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>`,
  "native-select": `<script setup lang="ts">
import {
  NativeSelect,
  NativeSelectOption,
} from "@line/abc-def-vue/native-select";
</script>

<template>
  <NativeSelect default-value="semantic">
    <NativeSelectOption value="semantic">Semantic tokens</NativeSelectOption>
    <NativeSelectOption value="component">Component tokens</NativeSelectOption>
  </NativeSelect>
</template>`,
  "navigation-menu": `<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@line/abc-def-vue/navigation-menu";
</script>

<template>
  <NavigationMenu :viewport="false">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="/components">Components</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/styles">Styles</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>`,
  pagination: `<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@line/abc-def-vue/pagination";
</script>

<template>
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" :is-active="true">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</template>`,
  popover: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@line/abc-def-vue/popover";
</script>

<template>
  <Popover>
    <PopoverTrigger :as-child="true">
      <Button variant="outline">Token info</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverHeader>
        <PopoverTitle>--primary</PopoverTitle>
        <PopoverDescription>
          Used by primary component colors.
        </PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
</template>`,
  progress: `<script setup lang="ts">
import { Progress } from "@line/abc-def-vue/progress";
</script>

<template>
  <Progress :model-value="68" aria-label="Build progress" />
</template>`,
  "radio-group": `<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { RadioGroup, RadioGroupItem } from "@line/abc-def-vue/radio-group";
</script>

<template>
  <RadioGroup default-value="react">
    <Field orientation="horizontal">
      <RadioGroupItem id="react" value="react" />
      <FieldLabel for="react">React</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem id="vue" value="vue" />
      <FieldLabel for="vue">Vue</FieldLabel>
    </Field>
  </RadioGroup>
</template>`,
  resizable: `<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@line/abc-def-vue/resizable";
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="min-h-40 rounded-md border">
    <ResizablePanel :default-size="55" class="p-4">Preview</ResizablePanel>
    <ResizableHandle with-handle />
    <ResizablePanel :default-size="45" class="p-4">Tokens</ResizablePanel>
  </ResizablePanelGroup>
</template>`,
  "scroll-area": `<script setup lang="ts">
import { ScrollArea, ScrollBar } from "@line/abc-def-vue/scroll-area";
</script>

<template>
  <ScrollArea class="h-32 w-48 rounded-md border p-4">
    <div>--primary</div>
    <div>--secondary</div>
    <div>--accent</div>
    <div>--destructive</div>
    <ScrollBar />
  </ScrollArea>
</template>`,
  select: `<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-vue/select";
</script>

<template>
  <Select default-value="semantic">
    <SelectTrigger>
      <SelectValue placeholder="Layer" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="semantic">Semantic</SelectItem>
      <SelectItem value="component">Component</SelectItem>
    </SelectContent>
  </Select>
</template>`,
  separator: `<script setup lang="ts">
import { Separator } from "@line/abc-def-vue/separator";
</script>

<template>
  <div class="grid gap-2">
    <span>Semantic</span>
    <Separator />
    <span>Component</span>
  </div>
</template>`,
  sheet: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@line/abc-def-vue/sheet";
</script>

<template>
  <Sheet>
    <SheetTrigger :as-child="true">
      <Button variant="outline">Open sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Token settings</SheetTitle>
        <SheetDescription>Scoped component overrides.</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>`,
  sidebar: `<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@line/abc-def-vue/sidebar";
</script>

<template>
  <SidebarProvider default-open>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Docs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Components</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  </SidebarProvider>
</template>`,
  skeleton: `<script setup lang="ts">
import { Skeleton } from "@line/abc-def-vue/skeleton";
</script>

<template>
  <div class="grid gap-2">
    <Skeleton class="h-4 w-40" />
    <Skeleton class="h-4 w-28" />
  </div>
</template>`,
  slider: `<script setup lang="ts">
import { Slider } from "@line/abc-def-vue/slider";
</script>

<template>
  <Slider :default-value="[40]" :max="100" aria-label="Scale" />
</template>`,
  sonner: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Toaster } from "@line/abc-def-vue/sonner";
</script>

<template>
  <div>
    <Button variant="outline">Toast trigger</Button>
    <Toaster />
  </div>
</template>`,
  spinner: `<script setup lang="ts">
import { Spinner } from "@line/abc-def-vue/spinner";
</script>

<template>
  <Spinner aria-label="Loading" />
</template>`,
  switch: `<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Switch } from "@line/abc-def-vue/switch";
</script>

<template>
  <Field orientation="horizontal">
    <Switch id="sync" default-checked />
    <FieldLabel for="sync">Sync tokens</FieldLabel>
  </Field>
</template>`,
  table: `<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@line/abc-def-vue/table";
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Token</TableHead>
        <TableHead>Layer</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>--primary</TableCell>
        <TableCell>Semantic</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`,
  tabs: `<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@line/abc-def-vue/tabs";
</script>

<template>
  <Tabs default-value="react">
    <TabsList>
      <TabsTrigger value="react">React</TabsTrigger>
      <TabsTrigger value="vue">Vue</TabsTrigger>
    </TabsList>
    <TabsContent value="react">React package classes.</TabsContent>
    <TabsContent value="vue">Vue package classes.</TabsContent>
  </Tabs>
</template>`,
  textarea: `<script setup lang="ts">
import { Field, FieldLabel } from "@line/abc-def-vue/field";
import { Textarea } from "@line/abc-def-vue/textarea";
</script>

<template>
  <Field>
    <FieldLabel html-for="token-notes">Notes</FieldLabel>
    <Textarea id="token-notes" placeholder="Notes for this token" />
  </Field>
</template>`,
  toggle: `<script setup lang="ts">
import { Toggle } from "@line/abc-def-vue/toggle";
</script>

<template>
  <Toggle default-pressed>Bold</Toggle>
</template>`,
  "toggle-group": `<script setup lang="ts">
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@line/abc-def-vue/toggle-group";
</script>

<template>
  <ToggleGroup type="single" default-value="semantic">
    <ToggleGroupItem value="semantic">Semantic</ToggleGroupItem>
    <ToggleGroupItem value="component">Component</ToggleGroupItem>
  </ToggleGroup>
</template>`,
  tooltip: `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@line/abc-def-vue/tooltip";
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger :as-child="true">
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>Shared token contract</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>`,
};

export function basicVueSnippet(component: ComponentDoc) {
  return (
    basicVueExampleOverrides[component.slug] ??
    `${vueImportSnippet(component)}

<template>
  <${component.primaryExport} />
</template>`
  );
}
