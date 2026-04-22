# Upstream Button Contract Reference (2026-04-22)

## React (`shadcn`)

- Source docs command: `pnpm dlx shadcn@latest docs button --json --cwd packages/react`
- Source dry-run command: `pnpm dlx shadcn@latest add button --dry-run --cwd packages/react`
- Observed base: `radix`
- Observed dry-run output:
  - creates `@/components/ui/button.tsx`
  - adds dependency `@radix-ui/react-slot`
- Public variant names observed in the current React reference: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Public size names kept in scope for this repo from the current React reference: `default`, `sm`, `lg`, `icon`
- Composition model upstream includes Radix-flavored composition. This repo intentionally keeps only the Radix-style `asChild` path from the design spec.

## Vue (`shadcn-vue`)

- Scratch init command used to prepare the reference project: `pnpm dlx shadcn-vue@latest init --cwd /tmp/abc-def-shadcn-vue-button-ref`
- Source add command used for the actual reference capture: `pnpm dlx shadcn-vue@latest add button -y --cwd /tmp/abc-def-shadcn-vue-button-ref/abc-def-shadcn-vue-button-ref`
- Generated files inspected:
  - `/tmp/abc-def-shadcn-vue-button-ref/abc-def-shadcn-vue-button-ref/src/components/ui/button/Button.vue`
  - `/tmp/abc-def-shadcn-vue-button-ref/abc-def-shadcn-vue-button-ref/src/components/ui/button/index.ts`
- Public variant names observed in the current Vue reference: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Public size names observed in the current Vue reference: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Upstream Vue composition currently uses `as` and `asChild` through `Primitive` from `reka-ui`. This repo explicitly does not adopt that API in this phase.

## Repo Scope Decisions

- Final cross-framework variant contract: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Final cross-framework size contract: `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Final shared HTML class contract:
  - base: `btn`
  - variants: `btn-default`, `btn-destructive`, `btn-outline`, `btn-secondary`, `btn-ghost`, `btn-link`
  - sizes: `btn-sm`, `btn-lg`, `btn-icon`, `btn-icon-sm`, `btn-icon-lg`
- React composition: `asChild`
- React defaulting rule: default type="button" applies only when React renders a native `<button>`
- Vue composition: no cross-framework composition prop in this phase
