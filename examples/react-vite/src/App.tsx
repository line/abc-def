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
            <CardTitle>Tailwind CSS v4 example</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This app imports <code>@abc-def/styles/css</code> and consumes
              workspace React components.
            </p>
            <Input placeholder="Type into the shared input component" />
            <div className="flex flex-wrap gap-3">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="outline">Outline action</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
