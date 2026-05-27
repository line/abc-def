# Release Process

ABC Def uses Changesets for package versioning and npm publishing.

## Public Packages

- `@line/abc-def-react`
- `@line/abc-def-vue`
- `@line/abc-def-styles`

The public packages are configured as a fixed release group and share the same version.

## Creating A Release

1. Add a changeset with `pnpm changeset` for each user-facing change.
2. Merge changes to `main` after CI passes.
3. The publish workflow opens a version pull request through Changesets.
4. Merge the version pull request after review.
5. The publish workflow publishes packages to npm and creates the GitHub release metadata.

Before the first publish, confirm npm organization access, package name availability, and the `NPM_TOKEN` or trusted publishing configuration.
