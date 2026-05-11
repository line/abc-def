import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@abc-def/react";

export function NavigationMenuBasic() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#overview">Overview</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-80 p-4">
            <div className="grid gap-3">
              <NavigationMenuLink
                href="#components"
                className="rounded-xl border p-3"
              >
                <div className="font-medium">Components</div>
                <p className="text-muted-foreground mt-1 text-sm">
                  Review the current library surface and usage notes.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#tokens"
                className="rounded-xl border p-3"
              >
                <div className="font-medium">Tokens</div>
                <p className="text-muted-foreground mt-1 text-sm">
                  Inspect semantic color, spacing, and radius variables.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#support">Support</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function NavigationMenuWithViewport() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="w-[420px] p-4">
            <div className="grid gap-3 md:grid-cols-2">
              <NavigationMenuLink
                href="#reviews"
                className="rounded-xl border p-3"
              >
                <div className="font-medium">Review Workspace</div>
                <p className="text-muted-foreground mt-1 text-sm">
                  Collaborative comments, approvals, and status tracking.
                </p>
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#insights"
                className="rounded-xl border p-3"
              >
                <div className="font-medium">Insights</div>
                <p className="text-muted-foreground mt-1 text-sm">
                  Delivery trends, blockers, and weekly health snapshots.
                </p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
