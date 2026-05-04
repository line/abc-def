import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@abc-def/react";

export function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Publish workspace</DialogTitle>
          <DialogDescription>
            This action will make the latest board visible to every reviewer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Publish now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DialogCustomFooter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Review changes</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Review summary</DialogTitle>
          <DialogDescription>
            3 design comments and 1 legal approval are still pending.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Dismiss</Button>
          <Button>Open checklist</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
