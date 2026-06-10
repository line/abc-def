import { Button } from "@line/abc-def-react/button";
import { Textarea } from "@line/abc-def-react/textarea";

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
