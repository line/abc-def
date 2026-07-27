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

import type { ComponentDoc } from "./components";

export interface ComponentExampleCode {
  slug: string;
  title: string;
  code: string;
  previewClassName?: string;
}

const exampleOverrides: Partial<Record<string, string>> = {
  accordion: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@line/abc-def-react/accordion";

export function Example() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Design tokens</AccordionTrigger>
        <AccordionContent>Component styles resolve through CSS variables.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
  alert: `import { Alert, AlertDescription, AlertTitle } from "@line/abc-def-react/alert";

export function Example() {
  return (
    <Alert>
      <AlertTitle>Build complete</AlertTitle>
      <AlertDescription>Tokens and classes are ready to publish.</AlertDescription>
    </Alert>
  );
}`,
  "alert-dialog": `import {
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
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete draft</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete draft?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
  "aspect-ratio": `import { AspectRatio } from "@line/abc-def-react/aspect-ratio";

export function Example() {
  return (
    <AspectRatio ratio={16 / 9}>
      <div className="grid h-full place-items-center rounded-md border bg-muted">16:9</div>
    </AspectRatio>
  );
}`,
  avatar: `import { Avatar, AvatarFallback, AvatarGroup } from "@line/abc-def-react/avatar";

export function Example() {
  return (
    <AvatarGroup>
      <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>CD</AvatarFallback></Avatar>
    </AvatarGroup>
  );
}`,
  badge: `import { Badge } from "@line/abc-def-react/badge";

export function Example() {
  return <Badge variant="secondary">Stable</Badge>;
}`,
  breadcrumb: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@line/abc-def-react/breadcrumb";

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="/">Docs</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Components</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
  button: `import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Save changes</Button>;
}`,
  "button-group": `import { Button } from "@line/abc-def-react/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@line/abc-def-react/button-group";

export function Example() {
  return (
    <ButtonGroup>
      <Button variant="outline">Preview</Button>
      <ButtonGroupSeparator />
      <ButtonGroupText>v1.2</ButtonGroupText>
    </ButtonGroup>
  );
}`,
  calendar: `import { Calendar } from "@line/abc-def-react/calendar";

export function Example() {
  return <Calendar mode="single" selected={new Date(2026, 5, 4)} />;
}`,
  card: `import {
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
}`,
  carousel: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@line/abc-def-react/carousel";

export function Example() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
  checkbox: `import { Checkbox } from "@line/abc-def-react/checkbox";
import { Label } from "@line/abc-def-react/label";

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="release" defaultChecked />
      <Label htmlFor="release">Include release notes</Label>
    </div>
  );
}`,
  collapsible: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@line/abc-def-react/collapsible";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="ghost">Token details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>Semantic and component layers.</CollapsibleContent>
    </Collapsible>
  );
}`,
  combobox: `import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@line/abc-def-react/combobox";

export function Example() {
  return (
    <Combobox items={["React", "Vue", "CSS"]}>
      <ComboboxInput placeholder="Framework" />
      <ComboboxList>
        <ComboboxItem value="React">React</ComboboxItem>
        <ComboboxItem value="Vue">Vue</ComboboxItem>
        <ComboboxItem value="CSS">CSS</ComboboxItem>
      </ComboboxList>
    </Combobox>
  );
}`,
  command: `import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@line/abc-def-react/command";

export function Example() {
  return (
    <Command>
      <CommandInput placeholder="Search commands" />
      <CommandList>
        <CommandGroup heading="Actions">
          <CommandItem>Copy CSS override</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
  "context-menu": `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@line/abc-def-react/context-menu";

export function Example() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click area</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy token</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`,
  dialog: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@line/abc-def-react/dialog";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit token</DialogTitle>
          <DialogDescription>Change a scoped CSS variable.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`,
  drawer: `import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@line/abc-def-react/drawer";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Token drawer</DrawerTitle>
          <DrawerDescription>Review component groups.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}`,
  "dropdown-menu": `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@line/abc-def-react/dropdown-menu";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="outline">Actions</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Copy</DropdownMenuItem>
        <DropdownMenuItem>Reset</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
  empty: `import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@line/abc-def-react/empty";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>No overrides</EmptyTitle>
        <EmptyDescription>Add token edits to preview them.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent><Button size="sm">Create override</Button></EmptyContent>
    </Empty>
  );
}`,
  field: `import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@line/abc-def-react/field";
import { Input } from "@line/abc-def-react/input";

export function Example() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="token-name">Token name</FieldLabel>
        <Input id="token-name" defaultValue="--primary" />
        <FieldDescription>Semantic token override.</FieldDescription>
      </Field>
    </FieldGroup>
  );
}`,
  "hover-card": `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@line/abc-def-react/hover-card";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild><Button variant="link">Preview token</Button></HoverCardTrigger>
      <HoverCardContent>--button-bg-primary resolves to --primary.</HoverCardContent>
    </HoverCard>
  );
}`,
  input: `import { Input } from "@line/abc-def-react/input";
import { Label } from "@line/abc-def-react/label";

export function Example() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  );
}`,
  "input-group": `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@line/abc-def-react/input-group";

export function Example() {
  return (
    <InputGroup>
      <InputGroupAddon><InputGroupText>--</InputGroupText></InputGroupAddon>
      <InputGroupInput placeholder="token-name" />
    </InputGroup>
  );
}`,
  "input-otp": `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@line/abc-def-react/input-otp";

export function Example() {
  return (
    <InputOTP maxLength={4} value="1234" readOnly>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
  item: `import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@line/abc-def-react/item";

export function Example() {
  return (
    <Item>
      <ItemHeader><ItemTitle>Component tokens</ItemTitle></ItemHeader>
      <ItemContent>
        <ItemDescription>Scoped to each shared class contract.</ItemDescription>
      </ItemContent>
    </Item>
  );
}`,
  kbd: `import { Kbd, KbdGroup } from "@line/abc-def-react/kbd";

export function Example() {
  return (
    <KbdGroup>
      <Kbd>Command</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  );
}`,
  label: `import { Label } from "@line/abc-def-react/label";

export function Example() {
  return <Label htmlFor="named-input">Token label</Label>;
}`,
  menubar: `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@line/abc-def-react/menubar";

export function Example() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent><MenubarItem>Export CSS</MenubarItem></MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`,
  "native-select": `import {
  NativeSelect,
  NativeSelectOption,
} from "@line/abc-def-react/native-select";

export function Example() {
  return (
    <NativeSelect defaultValue="semantic">
      <NativeSelectOption value="semantic">Semantic tokens</NativeSelectOption>
      <NativeSelectOption value="component">Component tokens</NativeSelectOption>
    </NativeSelect>
  );
}`,
  "navigation-menu": `import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@line/abc-def-react/navigation-menu";

export function Example() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/components">Components</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`,
  pagination: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@line/abc-def-react/pagination";

export function Example() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`,
  popover: `import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@line/abc-def-react/popover";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild><Button variant="outline">Token info</Button></PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>--primary</PopoverTitle>
          <PopoverDescription>Used by primary component colors.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}`,
  progress: `import { Progress } from "@line/abc-def-react/progress";

export function Example() {
  return <Progress value={68} aria-label="Build progress" />;
}`,
  "radio-group": `import { RadioGroup, RadioGroupItem } from "@line/abc-def-react/radio-group";
import { Label } from "@line/abc-def-react/label";

export function Example() {
  return (
    <RadioGroup defaultValue="react">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="react" value="react" />
        <Label htmlFor="react">React</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="vue" value="vue" />
        <Label htmlFor="vue">Vue</Label>
      </div>
    </RadioGroup>
  );
}`,
  resizable: `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@line/abc-def-react/resizable";

export function Example() {
  return (
    <ResizablePanelGroup>
      <ResizablePanel defaultSize={55}>Preview</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={45}>Tokens</ResizablePanel>
    </ResizablePanelGroup>
  );
}`,
  "scroll-area": `import { ScrollArea, ScrollBar } from "@line/abc-def-react/scroll-area";

export function Example() {
  return (
    <ScrollArea>
      <div>--primary</div>
      <div>--secondary</div>
      <div>--accent</div>
      <div>--destructive</div>
      <ScrollBar />
    </ScrollArea>
  );
}`,
  select: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@line/abc-def-react/select";

export function Example() {
  return (
    <Select defaultValue="semantic">
      <SelectTrigger><SelectValue placeholder="Layer" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="semantic">Semantic</SelectItem>
        <SelectItem value="component">Component</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
  separator: `import { Separator } from "@line/abc-def-react/separator";

export function Example() {
  return (
    <div className="grid gap-2">
      <span>Semantic</span>
      <Separator />
      <span>Component</span>
    </div>
  );
}`,
  sheet: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@line/abc-def-react/sheet";
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Token settings</SheetTitle>
          <SheetDescription>Scoped component overrides.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}`,
  sidebar: `import {
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

export function Example() {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Docs</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton>Components</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}`,
  skeleton: `import { Skeleton } from "@line/abc-def-react/skeleton";

export function Example() {
  return (
    <div className="grid gap-2">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-28" />
    </div>
  );
}`,
  slider: `import { Slider } from "@line/abc-def-react/slider";

export function Example() {
  return <Slider defaultValue={[40]} max={100} aria-label="Scale" />;
}`,
  sonner: `import { Button } from "@line/abc-def-react/button";
import { Toaster } from "@line/abc-def-react/sonner";

export function Example() {
  return (
    <div>
      <Button variant="outline">Toast trigger</Button>
      <Toaster />
    </div>
  );
}`,
  spinner: `import { Spinner } from "@line/abc-def-react/spinner";

export function Example() {
  return <Spinner aria-label="Loading" />;
}`,
  switch: `import { Switch } from "@line/abc-def-react/switch";
import { Label } from "@line/abc-def-react/label";

export function Example() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="sync" defaultChecked />
      <Label htmlFor="sync">Sync tokens</Label>
    </div>
  );
}`,
  table: `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@line/abc-def-react/table";

export function Example() {
  return (
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
  );
}`,
  tabs: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@line/abc-def-react/tabs";

export function Example() {
  return (
    <Tabs defaultValue="react">
      <TabsList>
        <TabsTrigger value="react">React</TabsTrigger>
        <TabsTrigger value="vue">Vue</TabsTrigger>
      </TabsList>
      <TabsContent value="react">React package classes.</TabsContent>
      <TabsContent value="vue">Vue package classes.</TabsContent>
    </Tabs>
  );
}`,
  textarea: `import { Textarea } from "@line/abc-def-react/textarea";

export function Example() {
  return <Textarea placeholder="Notes for this token" />;
}`,
  toggle: `import { Toggle } from "@line/abc-def-react/toggle";

export function Example() {
  return <Toggle defaultPressed>Bold</Toggle>;
}`,
  "toggle-group": `import {
  ToggleGroup,
  ToggleGroupItem,
} from "@line/abc-def-react/toggle-group";

export function Example() {
  return (
    <ToggleGroup type="single" defaultValue="semantic">
      <ToggleGroupItem value="semantic">Semantic</ToggleGroupItem>
      <ToggleGroupItem value="component">Component</ToggleGroupItem>
    </ToggleGroup>
  );
}`,
  tooltip: `import { Button } from "@line/abc-def-react/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@line/abc-def-react/tooltip";

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild><Button variant="outline">Hover</Button></TooltipTrigger>
        <TooltipContent>Shared token contract</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
} satisfies Record<string, string>;

function fallbackExample(component: ComponentDoc) {
  return `import { ${component.primaryExport} } from "@line/abc-def-react/${component.slug}";

export function Example() {
  return <${component.primaryExport}>Example</${component.primaryExport}>;
}`;
}

export function getComponentExampleCode(
  component: ComponentDoc,
): ComponentExampleCode {
  return {
    slug: component.slug,
    title: `${component.title} example`,
    code: exampleOverrides[component.slug] ?? fallbackExample(component),
  };
}
