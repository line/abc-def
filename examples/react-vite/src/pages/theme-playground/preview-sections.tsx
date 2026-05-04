import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Textarea,
} from "@abc-def/react";
import {
  BellRingIcon,
  CheckCircle2Icon,
  InfoIcon,
  SparklesIcon,
} from "lucide-react";

function PreviewSection({
  children,
  description,
  label,
  title,
}: {
  children: ReactNode;
  description: string;
  label: string;
  title: string;
}) {
  return (
    <section className="playground-section">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="playground-badge">{label}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="app-copy max-w-3xl text-sm leading-6">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export function PreviewSections() {
  return (
    <>
      <div className="grid gap-5 xl:grid-cols-2">
        <PreviewSection
          label="Buttons"
          title="Buttons react immediately to the current textarea variables."
          description="Primary, secondary, outline, ghost, and icon buttons stay visible together so contrast and radius changes are easy to compare."
        >
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small CTA</Button>
              <Button rounded="lg" size="icon" aria-label="Confirm">
                <CheckCircle2Icon />
              </Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        </PreviewSection>

        <PreviewSection
          label="Forms"
          title="Form controls share the same local token language."
          description="The field stack keeps text input, textarea, select, checkbox, switch, and radio controls together so textarea edits read as one system."
        >
          <FieldSet className="max-w-none">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="preview-input">Workspace name</FieldLabel>
                <Input id="preview-input" placeholder="Editorial surface" />
              </Field>
              <Field>
                <FieldLabel htmlFor="preview-textarea">Notes</FieldLabel>
                <Textarea
                  id="preview-textarea"
                  rows={4}
                  placeholder="Textarea styling follows the current preview variables."
                />
              </Field>
              <Field>
                <FieldLabel>Review mode</FieldLabel>
                <Select defaultValue="balanced">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="preview-checkbox" defaultChecked />
                <FieldContent>
                  <FieldLabel htmlFor="preview-checkbox">
                    Enable structured review
                  </FieldLabel>
                  <FieldDescription>
                    Checkbox and switch states update with the same preview tokens.
                  </FieldDescription>
                </FieldContent>
              </Field>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Share draft automatically</FieldTitle>
                  <FieldDescription>
                    Toggle chrome is scoped to the preview wrapper only.
                  </FieldDescription>
                </FieldContent>
                <Switch id="preview-switch" defaultChecked />
              </Field>
              <RadioGroup defaultValue="balanced">
                <Field orientation="horizontal">
                  <RadioGroupItem value="compact" id="preview-compact" />
                  <FieldLabel htmlFor="preview-compact" className="font-normal">
                    Compact
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <RadioGroupItem value="balanced" id="preview-balanced" />
                  <FieldLabel
                    htmlFor="preview-balanced"
                    className="font-normal"
                  >
                    Balanced
                  </FieldLabel>
                </Field>
              </RadioGroup>
            </FieldGroup>
          </FieldSet>
        </PreviewSection>

        <PreviewSection
          label="Alerts"
          title="Alert surfaces can shift tone without changing the whole page."
          description="Default and destructive variants stay adjacent so background and copy contrast remain easy to validate across semantic states."
        >
          <div className="grid gap-3">
            <Alert>
              <SparklesIcon />
              <AlertTitle>Release highlights</AlertTitle>
              <AlertDescription>
                This callout reflects the current preview variables only.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <BellRingIcon />
              <AlertTitle>Action required</AlertTitle>
              <AlertDescription>
                Destructive messaging keeps semantic meaning while the alert
                surface changes.
              </AlertDescription>
            </Alert>
            <Alert>
              <InfoIcon />
              <AlertTitle>Design note</AlertTitle>
              <AlertDescription>
                Use this area to verify that messages can become more branded
                without affecting the baseline component catalog.
              </AlertDescription>
            </Alert>
          </div>
        </PreviewSection>

        <PreviewSection
          label="Cards"
          title="Cards reshape boxed content with a dedicated surface language."
          description="Header, supporting copy, action slot, and footer stay together so border and background changes remain easy to inspect."
        >
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Editorial workspace</CardTitle>
                <CardDescription>
                  Local card tokens can warm up or cool down summary surfaces.
                </CardDescription>
                <CardAction>
                  <Button variant="ghost" size="sm">
                    Inspect
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="grid gap-2">
                <p className="text-sm leading-6">
                  A card can feel materially different while the surrounding
                  page keeps the same semantic theme.
                </p>
                <div className="text-muted-foreground text-xs">
                  Useful for dashboards, reports, and content modules.
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
                  Smaller cards inherit the same preview variables.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6">
                  Size shifts layout only. Surface and border changes remain
                  token-driven.
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button size="sm" variant="secondary">
                  Continue
                </Button>
              </CardFooter>
            </Card>
          </div>
        </PreviewSection>
      </div>

      <PreviewSection
        label="Interactions"
        title="Interaction-heavy primitives can be tuned together."
        description="Select, slider, accordion, and separators share the same preview token set so chrome-heavy surfaces feel coherent without becoming a full app theme swap."
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            <Field className="max-w-xs">
              <FieldLabel>Distribution</FieldLabel>
              <Select defaultValue="weekly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <div className="grid gap-3 rounded-[22px] border p-4">
              <div className="flex items-center justify-between text-sm">
                <span>Review threshold</span>
                <span className="text-muted-foreground">72%</span>
              </div>
              <Slider defaultValue={[72]} max={100} step={1} />
            </div>
          </div>

          <div className="grid gap-4 rounded-[22px] border p-4">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
              <Accordion
                type="single"
                collapsible
                defaultValue="interaction-proof"
                className="max-w-none"
              >
                <AccordionItem value="interaction-proof">
                  <AccordionTrigger>
                    Why keep these controls together?
                  </AccordionTrigger>
                  <AccordionContent>
                    They all rely on borders, focus treatments, and supporting
                    chrome, so they are a good signal for scoped interaction
                    presets.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Separator
                orientation="vertical"
                className="hidden h-full min-h-20 lg:block"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-6">
              Textarea edits change menu framing, slider range, separator tone,
              and accordion accents together.
            </p>
          </div>
        </div>
      </PreviewSection>
    </>
  );
}
