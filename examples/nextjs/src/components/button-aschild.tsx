import Link from "next/link";

import { Button } from "@line/abc-def-react/button";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
