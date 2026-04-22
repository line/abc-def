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
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>React mirrors the shared button contract</CardTitle>
            <p className="abc-text-dim">
              Variants, sizes, and classes come from <code>@abc-def/styles/css</code>.
            </p>
          </CardHeader>
          <CardContent>
            <Input placeholder="Type into the shared input component" />
            <div className="card-actions">
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button
                variant="link"
                render={(props) => (
                  <a {...props} href="/docs">
                    Docs
                  </a>
                )}
              />
              <Button variant="destructive">Delete</Button>
              <Button>Default</Button>
            </div>
            <div className="card-actions">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Add item">
                +
              </Button>
              <Button size="icon-sm" aria-label="Add small item">
                +
              </Button>
              <Button size="icon-lg" aria-label="Add large item">
                +
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
