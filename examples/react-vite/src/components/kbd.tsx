import { Kbd, KbdGroup } from "@abc-def/react";

export function KbdBasic() {
  return <Kbd>⌘K</Kbd>;
}

export function KbdShortcutList() {
  return (
    <div className="grid gap-3 text-sm">
      <div className="flex items-center justify-between gap-8">
        <span>Open command palette</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between gap-8">
        <span>Save review</span>
        <KbdGroup>
          <Kbd>⇧</Kbd>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}
