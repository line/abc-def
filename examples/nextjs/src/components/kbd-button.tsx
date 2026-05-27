import { Button } from "@line/abc-def-react/button";
import { Kbd } from "@line/abc-def-react/kbd";

export default function KbdButton() {
  return (
    <Button variant="outline">
      Accept{" "}
      <Kbd data-icon="inline-end" className="translate-x-0.5">
        ⏎
      </Kbd>
    </Button>
  );
}
