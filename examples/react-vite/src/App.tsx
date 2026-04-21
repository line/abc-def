import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from "@abc-def/react";

export default function App() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>React uses the shared CSS contract</CardTitle>
            <p className="abc-text-dim">
              These components now render semantic selectors owned by
              <code> @abc-def/styles/css</code>.
            </p>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type into the shared input component" />
            <div className="card-actions">
              <Button variant="outline">Cancel</Button>
              <Button variant="secondary">Save draft</Button>
              <Button>Publish</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
