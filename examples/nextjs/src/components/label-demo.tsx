import { Checkbox } from "@line/abc-def-react/checkbox";
import { Label } from "@line/abc-def-react/label";

export default function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}
