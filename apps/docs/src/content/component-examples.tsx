/**
 * Copyright 2026 LY Corporation
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
"use client";

import type { ComponentType, ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@line/abc-def-react/accordion";
import { Alert, AlertDescription, AlertTitle } from "@line/abc-def-react/alert";
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
} from "@line/abc-def-react/alert-dialog";
import { AspectRatio } from "@line/abc-def-react/aspect-ratio";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
} from "@line/abc-def-react/avatar";
import { Badge } from "@line/abc-def-react/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@line/abc-def-react/breadcrumb";
import { Button } from "@line/abc-def-react/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@line/abc-def-react/button-group";
import { Calendar } from "@line/abc-def-react/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@line/abc-def-react/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@line/abc-def-react/carousel";
import { Checkbox } from "@line/abc-def-react/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@line/abc-def-react/collapsible";
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@line/abc-def-react/combobox";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@line/abc-def-react/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@line/abc-def-react/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@line/abc-def-react/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@line/abc-def-react/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@line/abc-def-react/dropdown-menu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@line/abc-def-react/empty";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@line/abc-def-react/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@line/abc-def-react/hover-card";
import { Input } from "@line/abc-def-react/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@line/abc-def-react/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@line/abc-def-react/input-otp";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@line/abc-def-react/item";
import { Kbd, KbdGroup } from "@line/abc-def-react/kbd";
import { Label } from "@line/abc-def-react/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@line/abc-def-react/menubar";
import {
  NativeSelect,
  NativeSelectOption,
} from "@line/abc-def-react/native-select";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@line/abc-def-react/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@line/abc-def-react/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@line/abc-def-react/popover";
import { Progress } from "@line/abc-def-react/progress";
import { RadioGroup, RadioGroupItem } from "@line/abc-def-react/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@line/abc-def-react/resizable";
import { ScrollArea, ScrollBar } from "@line/abc-def-react/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-react/select";
import { Separator } from "@line/abc-def-react/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@line/abc-def-react/sheet";
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
} from "@line/abc-def-react/sidebar";
import { Skeleton } from "@line/abc-def-react/skeleton";
import { Slider } from "@line/abc-def-react/slider";
import { Toaster } from "@line/abc-def-react/sonner";
import { Spinner } from "@line/abc-def-react/spinner";
import { Switch } from "@line/abc-def-react/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@line/abc-def-react/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@line/abc-def-react/tabs";
import { Textarea } from "@line/abc-def-react/textarea";
import { Toggle } from "@line/abc-def-react/toggle";
import { ToggleGroup, ToggleGroupItem } from "@line/abc-def-react/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@line/abc-def-react/tooltip";

export interface ComponentExample {
  slug: string;
  title: string;
  Example: ComponentType;
  variantExamples?: ComponentVariantExample[];
  previewClassName?: string;
}

export interface ComponentVariantExample {
  label: string;
  Example: ComponentType;
  className?: string;
}

function PlaceholderBlock() {
  return <div className="docs-example-media">16:9</div>;
}

function StaticMenuItem({
  children,
  className,
  slot,
  variant,
}: {
  children: ReactNode;
  className: string;
  slot: string;
  variant: "default" | "destructive";
}) {
  return (
    <div data-slot={slot} data-variant={variant} className={className}>
      {children}
    </div>
  );
}

const examples: Record<string, ComponentExample> = {
  accordion: {
    slug: "accordion",
    title: "Accordion example",
    Example: () => (
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Design tokens</AccordionTrigger>
          <AccordionContent>
            Component styles resolve through CSS variables.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
  alert: {
    slug: "alert",
    title: "Alert example",
    Example: () => (
      <Alert>
        <AlertTitle>Build complete</AlertTitle>
        <AlertDescription>
          Tokens and classes are ready to publish.
        </AlertDescription>
      </Alert>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <Alert>
            <AlertTitle>Build complete</AlertTitle>
            <AlertDescription>Tokens are ready to publish.</AlertDescription>
          </Alert>
        ),
      },
      {
        label: "destructive",
        Example: () => (
          <Alert variant="destructive">
            <AlertTitle>Publish failed</AlertTitle>
            <AlertDescription>Resolve token conflicts first.</AlertDescription>
          </Alert>
        ),
      },
    ],
  },
  "alert-dialog": {
    slug: "alert-dialog",
    title: "Alert dialog example",
    Example: () => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
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
    ),
  },
  "aspect-ratio": {
    slug: "aspect-ratio",
    title: "Aspect ratio example",
    Example: () => (
      <AspectRatio ratio={16 / 9}>
        <PlaceholderBlock />
      </AspectRatio>
    ),
  },
  avatar: {
    slug: "avatar",
    title: "Avatar example",
    Example: () => (
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    ),
  },
  badge: {
    slug: "badge",
    title: "Badge example",
    Example: () => <Badge variant="secondary">Stable</Badge>,
    variantExamples: [
      {
        label: "default",
        Example: () => <Badge>Default</Badge>,
      },
      {
        label: "secondary",
        Example: () => <Badge variant="secondary">Secondary</Badge>,
      },
      {
        label: "destructive",
        Example: () => <Badge variant="destructive">Destructive</Badge>,
      },
      {
        label: "outline",
        Example: () => <Badge variant="outline">Outline</Badge>,
      },
      {
        label: "ghost",
        Example: () => <Badge variant="ghost">Ghost</Badge>,
      },
      {
        label: "link",
        Example: () => <Badge variant="link">Link</Badge>,
      },
    ],
  },
  breadcrumb: {
    slug: "breadcrumb",
    title: "Breadcrumb example",
    Example: () => (
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
    ),
  },
  button: {
    slug: "button",
    title: "Button example",
    Example: () => <Button variant="outline">Save changes</Button>,
    variantExamples: [
      {
        label: "default",
        Example: () => <Button>Default</Button>,
      },
      {
        label: "secondary",
        Example: () => <Button variant="secondary">Secondary</Button>,
      },
      {
        label: "destructive",
        Example: () => <Button variant="destructive">Destructive</Button>,
      },
      {
        label: "ghost",
        Example: () => <Button variant="ghost">Ghost</Button>,
      },
      {
        label: "link",
        Example: () => <Button variant="link">Link</Button>,
      },
      {
        label: "outline",
        Example: () => <Button variant="outline">Outline</Button>,
      },
    ],
  },
  "button-group": {
    slug: "button-group",
    title: "Button group example",
    Example: () => (
      <ButtonGroup>
        <Button variant="outline">Preview</Button>
        <ButtonGroupSeparator />
        <ButtonGroupText>v1.2</ButtonGroupText>
      </ButtonGroup>
    ),
  },
  calendar: {
    slug: "calendar",
    title: "Calendar example",
    Example: () => <Calendar mode="single" selected={new Date(2026, 5, 4)} />,
    previewClassName: "docs-example-wide",
  },
  card: {
    slug: "card",
    title: "Card example",
    Example: () => (
      <Card>
        <CardHeader>
          <CardTitle>Project status</CardTitle>
          <CardDescription>Updated just now</CardDescription>
        </CardHeader>
        <CardContent>Ready for review.</CardContent>
        <CardFooter>
          <Button size="sm">Open</Button>
        </CardFooter>
      </Card>
    ),
  },
  carousel: {
    slug: "carousel",
    title: "Carousel example",
    Example: () => (
      <Carousel className="docs-example-carousel">
        <CarouselContent>
          {[1, 2, 3].map((item) => (
            <CarouselItem key={item}>
              <div className="docs-example-slide">Slide {item}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
  },
  checkbox: {
    slug: "checkbox",
    title: "Checkbox example",
    Example: () => (
      <div className="docs-example-row">
        <Checkbox id="release" defaultChecked />
        <Label htmlFor="release">Include release notes</Label>
      </div>
    ),
  },
  collapsible: {
    slug: "collapsible",
    title: "Collapsible example",
    Example: () => (
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <Button variant="ghost">Token details</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>Semantic and component layers.</CollapsibleContent>
      </Collapsible>
    ),
  },
  combobox: {
    slug: "combobox",
    title: "Combobox example",
    Example: () => (
      <Combobox items={["React", "Vue", "CSS"]}>
        <ComboboxInput placeholder="Framework" />
        <ComboboxList>
          <ComboboxItem value="React">React</ComboboxItem>
          <ComboboxItem value="Vue">Vue</ComboboxItem>
          <ComboboxItem value="CSS">CSS</ComboboxItem>
        </ComboboxList>
      </Combobox>
    ),
  },
  command: {
    slug: "command",
    title: "Command example",
    Example: () => (
      <Command>
        <CommandInput placeholder="Search commands" />
        <CommandList>
          <CommandGroup heading="Actions">
            <CommandItem>Copy CSS override</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  "context-menu": {
    slug: "context-menu",
    title: "Context menu example",
    Example: () => (
      <ContextMenu>
        <ContextMenuTrigger className="docs-example-target">
          Right click area
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copy token</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <StaticMenuItem
            slot="context-menu-item"
            className="context-menu-item"
            variant="default"
          >
            Copy token
          </StaticMenuItem>
        ),
      },
      {
        label: "destructive",
        Example: () => (
          <StaticMenuItem
            slot="context-menu-item"
            className="context-menu-item"
            variant="destructive"
          >
            Delete token
          </StaticMenuItem>
        ),
      },
    ],
  },
  dialog: {
    slug: "dialog",
    title: "Dialog example",
    Example: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit token</DialogTitle>
            <DialogDescription>Change a scoped CSS variable.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    ),
  },
  drawer: {
    slug: "drawer",
    title: "Drawer example",
    Example: () => (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Token drawer</DrawerTitle>
            <DrawerDescription>Review component groups.</DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    ),
  },
  "dropdown-menu": {
    slug: "dropdown-menu",
    title: "Dropdown menu example",
    Example: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Copy</DropdownMenuItem>
          <DropdownMenuItem>Reset</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <StaticMenuItem
            slot="dropdown-menu-item"
            className="dropdown-menu-item"
            variant="default"
          >
            Copy
          </StaticMenuItem>
        ),
      },
      {
        label: "destructive",
        Example: () => (
          <StaticMenuItem
            slot="dropdown-menu-item"
            className="dropdown-menu-item"
            variant="destructive"
          >
            Reset
          </StaticMenuItem>
        ),
      },
    ],
  },
  empty: {
    slug: "empty",
    title: "Empty example",
    Example: () => (
      <Empty>
        <EmptyHeader>
          <EmptyTitle>No overrides</EmptyTitle>
          <EmptyDescription>Add token edits to preview them.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Create override</Button>
        </EmptyContent>
      </Empty>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => <EmptyMedia>AB</EmptyMedia>,
      },
      {
        label: "icon",
        Example: () => <EmptyMedia variant="icon">AB</EmptyMedia>,
      },
    ],
  },
  field: {
    slug: "field",
    title: "Field example",
    Example: () => (
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="token-name">Token name</FieldLabel>
          <Input id="token-name" defaultValue="--primary" />
          <FieldDescription>Semantic token override.</FieldDescription>
        </Field>
      </FieldGroup>
    ),
    variantExamples: [
      {
        label: "legend",
        Example: () => (
          <FieldSet>
            <FieldLegend>Token group</FieldLegend>
          </FieldSet>
        ),
      },
      {
        label: "label",
        Example: () => (
          <FieldSet>
            <FieldLegend variant="label">Token group</FieldLegend>
          </FieldSet>
        ),
      },
    ],
  },
  "hover-card": {
    slug: "hover-card",
    title: "Hover card example",
    Example: () => (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Preview token</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          --button-bg-primary resolves to --primary.
        </HoverCardContent>
      </HoverCard>
    ),
  },
  input: {
    slug: "input",
    title: "Input example",
    Example: () => (
      <div className="docs-example-stack">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="name@example.com" />
      </div>
    ),
  },
  "input-group": {
    slug: "input-group",
    title: "Input group example",
    Example: () => (
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>--</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="token-name" />
      </InputGroup>
    ),
  },
  "input-otp": {
    slug: "input-otp",
    title: "Input OTP example",
    Example: () => (
      <InputOTP maxLength={4} value="1234" readOnly>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    ),
  },
  item: {
    slug: "item",
    title: "Item example",
    Example: () => (
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
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <Item>
            <ItemContent>
              <ItemTitle>Default item</ItemTitle>
            </ItemContent>
          </Item>
        ),
      },
      {
        label: "outline",
        Example: () => (
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Outline item</ItemTitle>
            </ItemContent>
          </Item>
        ),
      },
      {
        label: "muted",
        Example: () => (
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Muted item</ItemTitle>
            </ItemContent>
          </Item>
        ),
      },
      {
        label: "media default",
        Example: () => <ItemMedia>AB</ItemMedia>,
      },
      {
        label: "media icon",
        Example: () => <ItemMedia variant="icon">AB</ItemMedia>,
      },
      {
        label: "media image",
        Example: () => (
          <ItemMedia variant="image">
            <div className="docs-example-media-swatch" />
          </ItemMedia>
        ),
      },
    ],
  },
  kbd: {
    slug: "kbd",
    title: "Kbd example",
    Example: () => (
      <KbdGroup>
        <Kbd>Command</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    ),
  },
  label: {
    slug: "label",
    title: "Label example",
    Example: () => <Label htmlFor="named-input">Token label</Label>,
  },
  menubar: {
    slug: "menubar",
    title: "Menubar example",
    Example: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Export CSS</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <StaticMenuItem
            slot="menubar-item"
            className="menubar-item"
            variant="default"
          >
            Export CSS
          </StaticMenuItem>
        ),
      },
      {
        label: "destructive",
        Example: () => (
          <StaticMenuItem
            slot="menubar-item"
            className="menubar-item"
            variant="destructive"
          >
            Delete preset
          </StaticMenuItem>
        ),
      },
    ],
  },
  "native-select": {
    slug: "native-select",
    title: "Native select example",
    Example: () => (
      <NativeSelect defaultValue="semantic">
        <NativeSelectOption value="semantic">
          Semantic tokens
        </NativeSelectOption>
        <NativeSelectOption value="component">
          Component tokens
        </NativeSelectOption>
      </NativeSelect>
    ),
  },
  "navigation-menu": {
    slug: "navigation-menu",
    title: "Navigation menu example",
    Example: () => (
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components">
              Components
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
  },
  pagination: {
    slug: "pagination",
    title: "Pagination example",
    Example: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
  },
  popover: {
    slug: "popover",
    title: "Popover example",
    Example: () => (
      <Popover>
        <PopoverTrigger asChild>
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
    ),
  },
  progress: {
    slug: "progress",
    title: "Progress example",
    Example: () => <Progress value={68} aria-label="Build progress" />,
  },
  "radio-group": {
    slug: "radio-group",
    title: "Radio group example",
    Example: () => (
      <RadioGroup defaultValue="react">
        <div className="docs-example-row">
          <RadioGroupItem id="react" value="react" />
          <Label htmlFor="react">React</Label>
        </div>
        <div className="docs-example-row">
          <RadioGroupItem id="vue" value="vue" />
          <Label htmlFor="vue">Vue</Label>
        </div>
      </RadioGroup>
    ),
  },
  resizable: {
    slug: "resizable",
    title: "Resizable example",
    Example: () => (
      <ResizablePanelGroup className="docs-example-resizable">
        <ResizablePanel defaultSize={55}>Preview</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={45}>Tokens</ResizablePanel>
      </ResizablePanelGroup>
    ),
  },
  "scroll-area": {
    slug: "scroll-area",
    title: "Scroll area example",
    Example: () => (
      <ScrollArea className="docs-example-scroll">
        <div>--primary</div>
        <div>--secondary</div>
        <div>--accent</div>
        <div>--destructive</div>
        <ScrollBar />
      </ScrollArea>
    ),
  },
  select: {
    slug: "select",
    title: "Select example",
    Example: () => (
      <Select defaultValue="semantic">
        <SelectTrigger>
          <SelectValue placeholder="Layer" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="semantic">Semantic</SelectItem>
          <SelectItem value="component">Component</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
  separator: {
    slug: "separator",
    title: "Separator example",
    Example: () => (
      <div className="docs-example-stack">
        <span>Semantic</span>
        <Separator />
        <span>Component</span>
      </div>
    ),
  },
  sheet: {
    slug: "sheet",
    title: "Sheet example",
    Example: () => (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Token settings</SheetTitle>
            <SheetDescription>Scoped component overrides.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    ),
  },
  sidebar: {
    slug: "sidebar",
    title: "Sidebar example",
    Example: () => (
      <SidebarProvider defaultOpen>
        <Sidebar className="docs-example-sidebar">
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
    ),
  },
  skeleton: {
    slug: "skeleton",
    title: "Skeleton example",
    Example: () => (
      <div className="docs-example-stack">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-28" />
      </div>
    ),
  },
  slider: {
    slug: "slider",
    title: "Slider example",
    Example: () => <Slider defaultValue={[40]} max={100} aria-label="Scale" />,
  },
  sonner: {
    slug: "sonner",
    title: "Sonner example",
    Example: () => (
      <div>
        <Button variant="outline">Toast trigger</Button>
        <Toaster />
      </div>
    ),
  },
  spinner: {
    slug: "spinner",
    title: "Spinner example",
    Example: () => <Spinner aria-label="Loading" />,
  },
  switch: {
    slug: "switch",
    title: "Switch example",
    Example: () => (
      <div className="docs-example-row">
        <Switch id="sync" defaultChecked />
        <Label htmlFor="sync">Sync tokens</Label>
      </div>
    ),
  },
  table: {
    slug: "table",
    title: "Table example",
    Example: () => (
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
    ),
  },
  tabs: {
    slug: "tabs",
    title: "Tabs example",
    Example: () => (
      <Tabs defaultValue="react">
        <TabsList>
          <TabsTrigger value="react">React</TabsTrigger>
          <TabsTrigger value="vue">Vue</TabsTrigger>
        </TabsList>
        <TabsContent value="react">React package classes.</TabsContent>
        <TabsContent value="vue">Vue package classes.</TabsContent>
      </Tabs>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <Tabs defaultValue="react">
            <TabsList>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="vue">Vue</TabsTrigger>
            </TabsList>
          </Tabs>
        ),
      },
      {
        label: "line",
        Example: () => (
          <Tabs defaultValue="react">
            <TabsList variant="line">
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="vue">Vue</TabsTrigger>
            </TabsList>
          </Tabs>
        ),
      },
    ],
  },
  textarea: {
    slug: "textarea",
    title: "Textarea example",
    Example: () => <Textarea placeholder="Notes for this token" />,
  },
  toggle: {
    slug: "toggle",
    title: "Toggle example",
    Example: () => <Toggle defaultPressed>Bold</Toggle>,
    variantExamples: [
      {
        label: "default",
        Example: () => <Toggle defaultPressed>Default</Toggle>,
      },
      {
        label: "outline",
        Example: () => (
          <Toggle variant="outline" defaultPressed>
            Outline
          </Toggle>
        ),
      },
    ],
  },
  "toggle-group": {
    slug: "toggle-group",
    title: "Toggle group example",
    Example: () => (
      <ToggleGroup type="single" defaultValue="semantic">
        <ToggleGroupItem value="semantic">Semantic</ToggleGroupItem>
        <ToggleGroupItem value="component">Component</ToggleGroupItem>
      </ToggleGroup>
    ),
    variantExamples: [
      {
        label: "default",
        Example: () => (
          <ToggleGroup type="single" defaultValue="semantic">
            <ToggleGroupItem value="semantic">Semantic</ToggleGroupItem>
            <ToggleGroupItem value="component">Component</ToggleGroupItem>
          </ToggleGroup>
        ),
      },
      {
        label: "outline",
        Example: () => (
          <ToggleGroup type="single" variant="outline" defaultValue="semantic">
            <ToggleGroupItem value="semantic">Semantic</ToggleGroupItem>
            <ToggleGroupItem value="component">Component</ToggleGroupItem>
          </ToggleGroup>
        ),
      },
    ],
  },
  tooltip: {
    slug: "tooltip",
    title: "Tooltip example",
    Example: () => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>Shared token contract</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
};

export function getComponentExample(slug: string) {
  return examples[slug];
}

export function ComponentExamplePreview({ slug }: { slug: string }) {
  const example = getComponentExample(slug);

  if (!example) {
    return null;
  }

  const Example = example.Example;

  return (
    <div
      className={["docs-example-preview", example.previewClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <Example />
    </div>
  );
}

export function getComponentExamples(slugs: string[]) {
  return slugs.map((slug) => examples[slug]).filter((example) => !!example);
}
