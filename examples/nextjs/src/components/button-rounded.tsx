import { ArrowUpIcon } from "lucide-react";

import { Button } from "@line/abc-def-react/button";

export default function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
