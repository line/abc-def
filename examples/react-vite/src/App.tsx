import * as buttons from "./components/button";
import * as buttonGroups from "./components/button-group";
import * as inputs from "./components/input";
import * as separators from "./components/separator";

export default function App() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col items-start gap-6">
          {Object.keys(inputs).map((key) => {
            const Component = (inputs as any)[key];
            return <Component key={key} />;
          })}
        </div>
      </div>
    </main>
  );
}
