# Repository Guidelines

## Scope

This guide applies to the internal header ESLint plugin package.

## Structure

The package entry point is `index.js`. Rule implementation lives under `src/rules`, currently `src/rules/header.js`. Keep rule filenames lowercase and focused on one rule.

## Commands

This package currently has no local scripts. Use root-level validation where relevant:

- `pnpm lint`: validate consumers of the plugin.
- `pnpm format`: check formatting across the workspace.

## Development Notes

Preserve compatibility with the shared ESLint config in `tooling/eslint`. When changing rule behavior, update the consuming config or fixture-like usage together so the workspace remains consistent.

## Verification

Run root lint after plugin changes. If adding local tests, add a package script and keep test fixtures inside this package.
