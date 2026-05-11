import {
  Badge,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@abc-def/react";
import { BellIcon, FolderKanbanIcon } from "lucide-react";

export function ItemBasic() {
  return (
    <Item className="max-w-lg">
      <ItemMedia variant="icon">
        <FolderKanbanIcon className="size-4" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Release planning</ItemTitle>
        <ItemDescription>
          Coordinate scope, owners, and review checkpoints for the next launch.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Open
        </Button>
      </ItemActions>
    </Item>
  );
}

export function ItemGroupList() {
  return (
    <ItemGroup className="max-w-xl">
      <Item variant="muted">
        <ItemMedia variant="icon">
          <BellIcon className="size-4" />
        </ItemMedia>
        <ItemContent>
          <ItemHeader>
            <ItemTitle>Comment digest</ItemTitle>
            <Badge variant="secondary">Daily</Badge>
          </ItemHeader>
          <ItemDescription>
            Receive a summary when more than three reviewers comment on the same
            board.
          </ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item size="sm">
        <ItemContent>
          <ItemTitle>Escalation alerts</ItemTitle>
          <ItemDescription>
            Notify channel owners when legal approval stays pending for 48
            hours.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Enable</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}
