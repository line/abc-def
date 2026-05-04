import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@abc-def/react";

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Project status</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Sprint review</PopoverTitle>
          <PopoverDescription>
            8 items are ready for review and 2 still need design feedback.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverRichContent() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Share summary</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Share workspace</PopoverTitle>
          <PopoverDescription>
            Invite reviewers before publishing the weekly update.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-2 text-sm">
          <div className="rounded-lg border p-3">
            Product: 4 reviewers added
          </div>
          <div className="rounded-lg border p-3">
            Design: 2 reviewers pending
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
