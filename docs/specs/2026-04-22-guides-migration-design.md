# Guides Migration Design

## Summary

This repository will replace the existing `docs/superpowers` documentation set with a smaller set of durable guides under `docs/guides`.

The new guides become the only supported documentation entry point for contributors who need to understand the current design-system architecture, theme/token contract, and component onboarding workflow.

After the migration is complete, `docs/superpowers/specs`, `docs/superpowers/plans`, and `docs/superpowers/references` will be deleted in full. The legacy root document `docs/component-onboarding.md` will also be removed after its content is absorbed into the new guides.

## Goals

- Create a stable `docs/guides` documentation set that explains the current repository contract without requiring readers to reconstruct intent from design history.
- Reorganize the accumulated documentation around contributor-facing topics instead of design-process artifact types.
- Replace scattered design and planning documents with self-contained guides that are sufficient for day-to-day development work.
- Make `docs/guides` the single documentation entry point for onboarding and implementation reference.

## Non-Goals

- Preserve `docs/superpowers` as an archive.
- Keep parallel copies of the same guidance in multiple locations.
- Reproduce every historical trade-off discussion or planning detail inside the new guides.
- Change the implementation solely to match old documentation wording.

## Decision

The repository will adopt a topic-based guide set under `docs/guides` and fully remove `docs/superpowers` after migration.

The guide set will be organized around the concepts contributors need to understand:

- overall design-system architecture
- theme and token contract
- component onboarding workflow

This is preferred over keeping specs/plans/references because the current documentation is optimized for design-process traceability rather than practical use. Contributors currently need to read multiple documents, infer which parts are still current, and translate future-tense design language into present-day rules. The new guides remove that ambiguity by documenting the current contract directly.

## Target Guide Set

### `docs/guides/design-system-architecture.md`

This guide explains the repository structure at the system level.

It should cover:

- `@abc-def/styles` as the shared style contract and source of truth
- React and Vue packages as consumers of that contract
- example applications as verification surfaces for the shared contract
- the relationship between token files, selector files, and framework wrappers

The purpose of this guide is to answer: where does styling truth live, who consumes it, and how does the repository fit together?

### `docs/guides/theme-and-token-contract.md`

This guide defines the styling contract itself.

It should cover:

- primitive, semantic, and component token layers
- allowed dependency direction across token layers
- the role of `@theme` as the public Tailwind-facing alias layer
- the fact that internal selectors continue to consume `--abc-*` tokens directly
- `.dark` as the supported dark-mode activation contract

The purpose of this guide is to answer: what rules govern tokens and theming, and what changes are allowed without breaking the contract?

### `docs/guides/component-onboarding.md`

This guide defines how new components enter the system.

It should cover:

- starting from `shadcn/ui`, `shadcn-vue`, or a local baseline
- analyzing source class intent before copying code
- deciding whether a value belongs in primitive, semantic, or component tokens
- adding selector rules in `packages/styles`
- aligning React and Vue wrappers to the shared contract
- verifying the result in the example applications

This guide absorbs and expands the current `docs/component-onboarding.md`.

## Writing Strategy

The new guides will be written as current-state documentation, not as summaries of old specs.

That means:

- future-tense design language should be rewritten as present-tense contract language
- duplicated background sections should be collapsed into one clear explanation per topic
- historical alternatives and abandoned options should be removed unless they are required to explain the current rule
- guide wording should prioritize what contributors must understand and do now

The guides should read as operational documentation for contributors with partial repository familiarity: enough context to orient a new reader, but focused primarily on the current architecture and working rules.

## Source Prioritization

When consolidating content into the new guides, the migration should prefer sources in this order:

1. current code and directory structure
2. the latest relevant documents in `docs/superpowers/specs`
3. supporting detail from `docs/superpowers/plans` and `docs/superpowers/references` only when needed
4. the existing `docs/component-onboarding.md`

If old documents conflict with the current codebase, the guides should follow the current codebase. The goal is to document the repository as it exists after the accumulated work, not to preserve outdated intent.

## Migration Rules

The migration should follow these rules:

1. Create `docs/guides` and add the three guide documents.
2. Rewrite content into guide form instead of copying old files wholesale.
3. Remove redundant or superseded statements during consolidation.
4. Delete `docs/component-onboarding.md` once its content is absorbed into `docs/guides/component-onboarding.md`.
5. Delete `docs/superpowers/specs`, `docs/superpowers/plans`, and `docs/superpowers/references` after the guides are in place.
6. Ensure no remaining docs point contributors back to `docs/superpowers` as a required source of truth.

## Validation Criteria

The migration is successful when all of the following are true:

- `docs/guides` exists with the three target guides
- each guide is self-contained enough that contributors do not need to consult `docs/superpowers` for normal work
- `docs/component-onboarding.md` no longer exists as a parallel source
- `docs/superpowers` no longer exists in the repository
- the content of the guides matches the current repository contract more closely than the legacy documents

## Risks And Mitigations

### Risk: guide documents become shallow summaries

Mitigation: write each guide as a complete operational reference for its topic, not as a short redirect page.

### Risk: historical nuance is lost in ways that hide real constraints

Mitigation: preserve only the constraints that materially affect current contributor behavior, and encode them as explicit current rules.

### Risk: migrated guidance drifts from the codebase

Mitigation: use current code structure as the primary source and treat old design docs as secondary inputs.

## Open Questions Resolved

The user confirmed the following decisions during brainstorming:

- the target audience is contributors with limited but not zero repository familiarity
- the guides should be split by topic rather than merged into one document
- the new guides should absorb most of the useful context from legacy docs rather than acting as thin indexes
- unfinished or out-of-scope items do not need dedicated sections in the guides
- `docs/superpowers` should be deleted entirely after migration

## Implementation Boundary

This design only defines the documentation migration.

It does not prescribe code changes beyond those needed to keep documentation paths accurate after the migration.
