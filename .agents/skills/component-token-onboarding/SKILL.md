---
name: component-token-onboarding
description: Use when onboarding a new UI component into the abc-def token architecture from shadcn/ui, shadcn-vue, or a local baseline source.
---

# Component Token Onboarding

## Overview

Use this skill when adding a new component to the abc-def design system under the CSS-first token architecture.

The goal is to analyze a source implementation, propose token promotion decisions, identify file changes, and stop for human approval before new semantic tokens or new public component token names are finalized.

## Required Inputs

- component name
- source reference
- requested scope
- variant and size scope
- approval checkpoints for new semantic tokens and public component token names

If required inputs are missing, ask for them before producing token proposals.

## Workflow

1. Confirm all Required Inputs are present; if any required inputs are missing, ask for them before producing token proposals.
1. Read the source implementation and summarize the visual contract.
2. List raw values that belong in primitive tokens.
3. Evaluate whether each shared meaning belongs in semantic tokens.
4. Propose component-specific tokens only after semantic promotion is checked.
5. Map source class meaning to target token and selector contracts.
6. List exact repo files to change across styles, React, Vue, docs, and examples, including repo-specific follow-through when applicable:
   - update `packages/react/src/index.ts` and/or `packages/vue/src/index.ts` when the new component must be exported/published
   - extend `packages/styles/scripts/verify-build.mjs` when the selector/token contract enforcement needs to change for the new component or new token naming surface
7. End with explicit human approval questions before implementation proceeds (approval gates for new semantic tokens and new public component token names).

## Rules

- If required inputs are missing, ask for them before producing token proposals.
- Do not add semantic meaning directly into primitive tokens.
- Do not let component-specific tokens reference primitive tokens directly.
- Do not treat copied shadcn utility strings as the public design-system API.
- Evaluate semantic promotion before creating new component-specific tokens.
- Use component-centered public token names.
- When a new component must be published, include `packages/react/src/index.ts` and/or `packages/vue/src/index.ts` in the planned file changes.
- When hard-coded selector/token contract checks must change, include `packages/styles/scripts/verify-build.mjs` in the planned file changes.
- Do not call the work complete until examples are checked.

## Output Template

## Source Analysis
## Proposed Semantic Tokens
## Proposed Component Tokens
## Mapping Table
## Files To Change
## Verification Steps
## Human Approval Required
