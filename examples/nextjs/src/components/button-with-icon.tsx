import { IconGitBranch } from "@tabler/icons-react";

import { Button } from "@line/abc-def-react/button";

export default function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <IconGitBranch /> New Branch
    </Button>
  );
}
