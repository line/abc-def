import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@abc-def/react";

export function DrawerBottom() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open mobile controls</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Theme presets</DrawerTitle>
          <DrawerDescription>
            A bottom drawer works well for mobile control panels with compact
            preset choices.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-3 px-4 pb-4 text-sm">
          <div className="rounded-xl border p-3">Button: Editorial</div>
          <div className="rounded-xl border p-3">Form: Soft</div>
          <div className="rounded-xl border p-3">Alert: Calm</div>
        </div>
        <DrawerFooter>
          <Button>Apply presets</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function DrawerRight() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open side controls</Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-md">
        <DrawerHeader>
          <DrawerTitle>Preview inspector</DrawerTitle>
          <DrawerDescription>
            A side drawer keeps the main canvas visible while controls and
            notes stay close by.
          </DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-3 px-4 pb-4 text-sm">
          <div className="rounded-xl border p-3">
            Scoped overrides: buttons, forms, alerts, cards, interactions
          </div>
          <div className="rounded-xl border p-3">
            Surface target: preview canvas only
          </div>
          <div className="rounded-xl border p-3">
            Validation goal: compare scoped token shifts against the baseline
            catalog
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
