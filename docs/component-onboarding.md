# Component Onboarding Workflow

1. Start from a `shadcn/ui`, `shadcn-vue`, or local baseline implementation.
2. Analyze class meaning before copying code.
3. Promote raw values into primitive tokens only when they are true scales.
4. Promote shared UI meaning into semantic tokens before creating component tokens.
5. Add public component tokens in `packages/styles/src/tokens/components/<component>.css`.
6. Add selectors in `packages/styles/src/css/components/<component>.css`.
7. Update React and Vue wrappers to render the shared selectors.
8. Export the new components from `packages/react/src/index.ts` and `packages/vue/src/index.ts`.
9. If the new component expands the hard-coded selector/token contract checks, extend `packages/styles/scripts/verify-build.mjs`.
10. Verify `examples/html-vite`, `examples/react-vite`, and `examples/vue-vite`.
