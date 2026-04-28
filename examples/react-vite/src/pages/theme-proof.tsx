import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
  Input,
  RadioGroup,
  RadioGroupItem,
  Separator,
  Switch,
  Textarea,
} from "@abc-def/react";
import {
  BellRingIcon,
  CheckCircle2Icon,
  CircleIcon,
  InfoIcon,
  SparklesIcon,
} from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";

type ProofSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tokens: string[];
  summary: string;
};

const proofSections: ProofSection[] = [
  {
    id: "button",
    eyebrow: "Component Proof 01",
    title: "Button tokens can shift CTA behavior without touching form fields",
    description:
      "Only `--button-*` tokens change here. Inputs, alerts, checkboxes, and switches keep the package defaults, so the effect stays local to the button family.",
    tokens: [
      "--button-bg-primary",
      "--button-fg-primary",
      "--button-border-outline",
      "--button-bg-ghost-hover",
      "--button-radius-md",
    ],
    summary:
      "If this is working, the button row should look obviously custom while the input and alert still look baseline.",
  },
  {
    id: "form",
    eyebrow: "Component Proof 02",
    title: "Form control tokens can create a distinct input language",
    description:
      "This section changes `--input-*`, `--textarea-*`, `--checkbox-*`, `--radio-group-*`, and `--switch-*` tokens only. Buttons remain unchanged on purpose.",
    tokens: [
      "--input-bg",
      "--textarea-border",
      "--checkbox-bg-checked",
      "--radio-group-item-border-checked",
      "--switch-bg-checked",
    ],
    summary:
      "If the token layer is doing its job, the form controls should become noticeably editorial while the buttons still use the default package style.",
  },
  {
    id: "alert",
    eyebrow: "Component Proof 03",
    title: "Alert tokens can tune messaging surfaces independently",
    description:
      "Only `--alert-*` tokens change here. The alert cards become softer and more brand-specific, but the nearby button and input remain on the baseline contract.",
    tokens: [
      "--alert-bg-default",
      "--alert-fg-default",
      "--alert-bg-destructive",
      "--alert-description-fg",
    ],
    summary:
      "This is the narrowest proof: one component family changes, adjacent controls do not.",
  },
  {
    id: "card",
    eyebrow: "Component Proof 04",
    title:
      "Card tokens can reshape boxed surfaces without changing nearby controls",
    description:
      "Only `--card-*` tokens change here. The cards pick up a warmer editorial shell while the neighboring button, input, and alert stay on the baseline contract.",
    tokens: [
      "--card-bg",
      "--card-border",
      "--card-description-fg",
      "--card-footer-bg",
    ],
    summary:
      "If this works, the card family should feel intentionally distinct without reading like a full theme switch.",
  },
];

function TokenList({ tokens }: { tokens: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tokens.map((token) => (
        <span
          key={token}
          className="theme-proof-token rounded-full border px-2.5 py-1 text-[11px] tracking-[0.18em] uppercase"
        >
          {token}
        </span>
      ))}
    </div>
  );
}

function NeutralControls() {
  return (
    <div className="grid gap-3 rounded-[20px] border p-4">
      <div>
        <p className="text-sm font-medium">Unaffected controls</p>
        <p className="text-muted-foreground text-sm">
          These sit next to the experiment so it is obvious what did not change.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button size="sm">Default button</Button>
        <Button size="sm" variant="outline">
          Outline button
        </Button>
      </div>
      <Input placeholder="Baseline input stays the same" />
      <Alert>
        <InfoIcon />
        <AlertTitle>Baseline alert</AlertTitle>
        <AlertDescription>
          This card should remain on the default package contract.
        </AlertDescription>
      </Alert>
    </div>
  );
}

function ButtonProof() {
  return (
    <div className="rounded-[28px] border p-5">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="component-proof grid gap-4 rounded-[22px] border p-4"
          data-proof="button"
        >
          <div>
            <p className="text-sm font-medium">Button family only</p>
            <p className="text-muted-foreground text-sm">
              Same React component API, different button-specific token layer.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button rounded="default" size="sm">
              Small CTA
            </Button>
            <Button rounded="lg" size="icon" aria-label="Confirm">
              <CheckCircle2Icon />
            </Button>
            <Button variant="destructive">Delete</Button>
          </div>
          <p className="text-muted-foreground text-sm leading-6">
            The rounded corners, outline treatment, hover surfaces, and primary
            fill are all coming from `--button-*`.
          </p>
        </div>
        <NeutralControls />
      </div>
    </div>
  );
}

function FormProof() {
  return (
    <div className="rounded-[28px] border p-5">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="component-proof grid gap-4 rounded-[22px] border p-4"
          data-proof="form"
        >
          <div>
            <p className="text-sm font-medium">Form control family only</p>
            <p className="text-muted-foreground text-sm">
              Inputs, textarea, checkbox, radio, and switch all pick up a local
              control language.
            </p>
          </div>
          <FieldSet className="max-w-none">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="proof-input">Workspace name</FieldLabel>
                <Input id="proof-input" placeholder="Editorial surface" />
              </Field>
              <Field>
                <FieldLabel htmlFor="proof-textarea">Notes</FieldLabel>
                <Textarea
                  id="proof-textarea"
                  rows={4}
                  placeholder="Textarea styling is also coming from component-level tokens."
                />
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="proof-checkbox" defaultChecked />
                <FieldContent>
                  <FieldLabel htmlFor="proof-checkbox">
                    Enable structured review
                  </FieldLabel>
                  <FieldDescription>
                    Checkbox background, border, and check color are locally
                    overridden here.
                  </FieldDescription>
                </FieldContent>
              </Field>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Share draft automatically</FieldTitle>
                  <FieldDescription>
                    Switch track and thumb colors come from `--switch-*`.
                  </FieldDescription>
                </FieldContent>
                <Switch id="proof-switch" defaultChecked />
              </Field>
              <RadioGroup defaultValue="balanced">
                <Field orientation="horizontal">
                  <RadioGroupItem value="compact" id="proof-compact" />
                  <FieldLabel htmlFor="proof-compact" className="font-normal">
                    Compact
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="balanced" id="proof-balanced" />
                  <FieldLabel htmlFor="proof-balanced" className="font-normal">
                    Balanced
                  </FieldLabel>
                </Field>
              </RadioGroup>
            </FieldGroup>
          </FieldSet>
        </div>
        <NeutralControls />
      </div>
    </div>
  );
}

function AlertProof() {
  return (
    <div className="rounded-[28px] border p-5">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="component-proof grid gap-4 rounded-[22px] border p-4"
          data-proof="alert"
        >
          <div>
            <p className="text-sm font-medium">Alert family only</p>
            <p className="text-muted-foreground text-sm">
              The callout tone changes without changing button or input styling.
            </p>
          </div>
          <Alert>
            <SparklesIcon />
            <AlertTitle>Release highlights</AlertTitle>
            <AlertDescription>
              This message uses only `--alert-*` overrides. It should feel like
              a branded callout, not a global theme shift.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <BellRingIcon />
            <AlertTitle>Action required</AlertTitle>
            <AlertDescription>
              Destructive messaging can be softened or intensified without
              redefining semantic danger tokens globally.
            </AlertDescription>
          </Alert>
          <Alert>
            <InfoIcon />
            <AlertTitle>Why this matters</AlertTitle>
            <AlertDescription>
              Component-specific tokens let you differentiate surfaces that
              share the same semantic foundation.
            </AlertDescription>
          </Alert>
        </div>
        <NeutralControls />
      </div>
    </div>
  );
}

function CardProof() {
  return (
    <div className="rounded-[28px] border p-5">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div
          className="component-proof grid gap-4 rounded-[22px] border p-4"
          data-proof="card"
        >
          <div>
            <p className="text-sm font-medium">Card family only</p>
            <p className="text-muted-foreground text-sm">
              Surface chrome, supporting copy, and footer treatment all change
              through `--card-*`.
            </p>
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Editorial workspace</CardTitle>
                <CardDescription>
                  This uses only local card token overrides. Buttons still use
                  the package baseline.
                </CardDescription>
                <CardAction>
                  <Button variant="ghost" size="sm">
                    Inspect
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="grid gap-2">
                <p className="text-sm leading-6">
                  A card can become warmer and denser without redefining the
                  semantic page surface.
                </p>
                <div className="text-muted-foreground text-xs">
                  Surface proof for dashboards, summaries, and boxed content.
                </div>
              </CardContent>
              <CardFooter className="justify-between gap-3">
                <span className="text-xs">Updated 6 minutes ago</span>
                <Button size="sm">Open board</Button>
              </CardFooter>
            </Card>
            <Card size="sm">
              <CardHeader>
                <CardTitle>Compact note</CardTitle>
                <CardDescription>
                  Small cards inherit the same token overrides.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6">
                  Size changes spacing only. The token layer still owns color
                  and border treatment.
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button size="sm" variant="secondary">
                  Continue
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <NeutralControls />
      </div>
    </div>
  );
}

function ProofSectionBlock({ section }: { section: ProofSection }) {
  return (
    <section className="theme-proof-section grid gap-4 rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_24px_80px_-55px_rgba(15,23,42,0.35)] md:p-8">
      <div className="flex flex-col gap-3">
        <p className="theme-proof-kicker text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
          {section.eyebrow}
        </p>
        <h2 className="theme-proof-section-title max-w-3xl text-2xl font-semibold tracking-tight text-slate-950">
          {section.title}
        </h2>
        <p className="theme-proof-copy max-w-3xl text-sm leading-6 text-slate-600">
          {section.description}
        </p>
        <TokenList tokens={section.tokens} />
        <p className="theme-proof-summary text-sm font-medium text-slate-700">
          {section.summary}
        </p>
      </div>
      {section.id === "button" && <ButtonProof />}
      {section.id === "form" && <FormProof />}
      {section.id === "alert" && <AlertProof />}
      {section.id === "card" && <CardProof />}
    </section>
  );
}

export default function ThemeProofPage() {
  return (
    <main className="theme-proof-page text-foreground min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-6 py-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="theme-proof-hero grid gap-6 rounded-[32px] border border-black/5 bg-white/85 p-6 shadow-[0_30px_100px_-60px_rgba(15,23,42,0.45)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="theme-proof-link text-sm font-medium text-slate-500 underline-offset-4 hover:underline"
              >
                Back to catalog
              </a>
              <span className="text-slate-300">/</span>
              <p className="theme-proof-kicker text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
                Component-Specific Token Proof
              </p>
            </div>
            <h1 className="theme-proof-title max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              This page checks whether component-specific tokens are actually a
              useful abstraction.
            </h1>
            <p className="theme-proof-copy max-w-3xl text-base leading-7 text-slate-600">
              Semantic theme tokens are intentionally not the focus here. Each
              section changes only one component family and leaves adjacent
              controls on the baseline contract, so the benefit should be easy
              to judge visually.
            </p>
          </div>
          <div className="grid gap-3 rounded-[26px] bg-slate-950 p-5 text-slate-50">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  What should be true
                </p>
              </div>
              <ThemeToggle className="theme-toggle-hero" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">
                Visual checklist
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-100/90">
                <li>
                  1. A local `--button-*` override should restyle buttons only.
                </li>
                <li>
                  2. A local control override should affect inputs, checks,
                  radios, and switches together.
                </li>
                <li>
                  3. A local `--alert-*` override should restyle alerts without
                  becoming a global theme.
                </li>
                <li>
                  4. A local `--card-*` override should reshape boxed surfaces
                  without affecting adjacent controls.
                </li>
              </ul>
            </div>
            <Separator className="bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CircleIcon className="size-3 fill-emerald-400 text-emerald-400" />
              Each section isolates one component token family on purpose
            </div>
          </div>
        </section>

        {proofSections.map((section) => (
          <ProofSectionBlock key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
