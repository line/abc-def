import { Input, Label, Switch } from "@abc-def/react";

export function LabelBasic() {
  return (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="email-address">Email address</Label>
      <Input id="email-address" placeholder="name@example.com" />
    </div>
  );
}

export function LabelWithControl() {
  return (
    <div className="flex max-w-sm items-center justify-between gap-4 rounded-xl border p-4">
      <div className="grid gap-1">
        <Label htmlFor="release-alerts">Release alerts</Label>
        <p className="text-muted-foreground text-sm">
          Notify owners when the launch checklist changes.
        </p>
      </div>
      <Switch id="release-alerts" defaultChecked />
    </div>
  );
}
