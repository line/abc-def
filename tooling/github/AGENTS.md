# Repository Guidelines

## Scope

This guide applies to the internal GitHub tooling package.

## Structure

This package currently contains GitHub automation assets, including `setup/action.yml`. Keep workflow/action files under descriptive subdirectories and avoid mixing runtime source code with CI configuration.

## Commands

This package currently has no local scripts. Use root checks when changes affect workspace setup:

- `pnpm lint:ws`: validate workspace package metadata.
- `pnpm build`: confirm package graph assumptions still hold.

## Development Notes

Keep action inputs, outputs, and dependency setup explicit. When editing GitHub Actions YAML, prefer minimal changes and preserve compatibility with the repository's pinned Node and pnpm versions.

## Verification

Review YAML syntax and run `pnpm lint:ws` when package metadata changes. For behavior changes, verify the affected workflow in GitHub after merge or with an appropriate local action runner if available.
