import { useState } from "react";

import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@abc-def/react";
import {
  CalendarIcon,
  CreditCardIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export function CommandBasic() {
  return (
    <Command className="max-w-md rounded-xl border">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <CalendarIcon className="size-4" />
            Calendar
          </CommandItem>
          <CommandItem value="search">
            <SearchIcon className="size-4" />
            Search content
          </CommandItem>
          <CommandItem value="settings">
            <SettingsIcon className="size-4" />
            Settings
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Team">
          <CommandItem value="profile">
            <UserIcon className="size-4" />
            Profile
            <CommandShortcut>G P</CommandShortcut>
          </CommandItem>
          <CommandItem value="billing">
            <CreditCardIcon className="size-4" />
            Billing
            <CommandShortcut>G B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function CommandDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open command menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Jump to a page..." />
          <CommandList>
            <CommandEmpty>No page found.</CommandEmpty>
            <CommandGroup heading="Workspace">
              <CommandItem value="dashboard">Dashboard</CommandItem>
              <CommandItem value="issues">Issues</CommandItem>
              <CommandItem value="activity">Activity</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
