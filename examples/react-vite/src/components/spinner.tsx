import { Button, Spinner } from "@abc-def/react";

export function SpinnerBasic() {
  return <Spinner className="size-5" />;
}

export function SpinnerInButton() {
  return (
    <div className="flex gap-3">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Publishing
      </Button>
      <Button disabled variant="secondary">
        Syncing
        <Spinner data-icon="inline-end" />
      </Button>
    </div>
  );
}
