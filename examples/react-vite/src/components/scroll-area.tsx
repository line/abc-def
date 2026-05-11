import { ScrollArea } from "@abc-def/react";

const updates = [
  "Design approved the empty state illustration refresh.",
  "Accessibility review requested stronger focus contrast.",
  "Legal approved the updated privacy language.",
  "Frontend team shipped the navigation-menu refactor.",
  "Docs were updated for the new toggle-group guidance.",
  "QA flagged an overflow issue in the mobile drawer.",
  "Release manager moved the launch review to Friday.",
  "Analytics instrumentation is now enabled in staging.",
];

export function ScrollAreaBasic() {
  return (
    <ScrollArea className="h-56 max-w-md rounded-2xl border p-4">
      <div className="grid gap-3">
        {updates.map((update) => (
          <div key={update} className="rounded-xl border p-3 text-sm">
            {update}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
