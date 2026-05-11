import { ToggleGroup, ToggleGroupItem } from "@abc-def/react";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

export function ToggleGroupBasic() {
  return (
    <ToggleGroup defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ToggleGroupVertical() {
  return (
    <ToggleGroup
      multiple
      orientation="vertical"
      variant="outline"
      spacing={4}
      defaultValue={["comments", "history"]}
    >
      <ToggleGroupItem value="comments">Comments</ToggleGroupItem>
      <ToggleGroupItem value="history">History</ToggleGroupItem>
      <ToggleGroupItem value="reviewers">Reviewers</ToggleGroupItem>
    </ToggleGroup>
  );
}
