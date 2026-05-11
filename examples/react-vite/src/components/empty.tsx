import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@abc-def/react";
import { InboxIcon, PlusIcon } from "lucide-react";

export function EmptyBasic() {
  return (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon className="size-5" />
        </EmptyMedia>
        <EmptyTitle>No reviewers added</EmptyTitle>
        <EmptyDescription>
          Invite teammates to collect design feedback before publishing.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}

export function EmptyWithActions() {
  return (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia>
          <img
            src="https://avatar.vercel.sh/empty-state"
            alt="Decorative workspace illustration"
            className="h-16 w-16 rounded-xl object-cover"
          />
        </EmptyMedia>
        <EmptyTitle>Create your first board</EmptyTitle>
        <EmptyDescription>
          Start with a blank canvas or import an existing brief to generate a
          baseline structure.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon />
          New board
        </Button>
      </EmptyContent>
    </Empty>
  );
}
