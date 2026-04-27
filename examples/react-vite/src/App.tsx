import * as accordions from "./components/accordion";
import * as alerts from "./components/alert";
import * as buttons from "./components/button";
import * as buttonGroups from "./components/button-group";
import * as inputs from "./components/input";
import * as separators from "./components/separator";

export default function App() {
  return (
    <main className="bg-background text-foreground min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col items-start gap-6">
          {Object.keys(accordions).map((key) => {
            const Component = (accordions as any)[key];
            return (
              <div key={key} className="w-full rounded-md border p-4">
                <h1>{key}</h1>
                <Component key={key} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
