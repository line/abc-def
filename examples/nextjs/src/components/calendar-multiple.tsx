import { Calendar } from "@line/abc-def-react/calendar";
import { Card, CardContent } from "@line/abc-def-react/card";

export function CalendarMultiple() {
  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="multiple" />
      </CardContent>
    </Card>
  );
}
