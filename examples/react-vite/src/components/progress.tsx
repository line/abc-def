import { useEffect, useState } from "react";

import { Progress } from "@abc-def/react";

export function ProgressBasic() {
  return <Progress value={60} className="max-w-sm" />;
}

export function ProgressAnimated() {
  const [value, setValue] = useState(15);

  useEffect(() => {
    const frame = window.setInterval(() => {
      setValue((current) => (current >= 90 ? 90 : current + 15));
    }, 900);

    return () => window.clearInterval(frame);
  }, []);

  return (
    <div className="grid max-w-sm gap-2">
      <Progress value={value} />
      <p className="text-muted-foreground text-sm">
        Upload progress: <span className="text-foreground font-medium">{value}%</span>
      </p>
    </div>
  );
}
