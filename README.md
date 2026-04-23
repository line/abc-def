# ABC Def (ABC Studio's Definitive Elements Foundation)

ABC Def is a reset design system monorepo shell for building shared UI packages from one CSS token contract.

## Packages

- `packages/styles`: canonical primitive, semantic, and component-specific CSS tokens plus stable CSS entry points
- `packages/react`: React wrappers that render the shared semantic selectors
- `packages/vue`: Vue wrappers that render the shared semantic selectors

## Examples

- `examples/html-vite`: plain HTML consumer of `@abc-def/styles/css`
- `examples/react-vite`: React consumer of `@abc-def/styles/css` and `@abc-def/react`
- `examples/vue-vite`: Vue consumer of `@abc-def/styles/css` and `@abc-def/vue`

## Documentation

Start with `docs/guides/README.md`.

Contributor-facing guides live under `docs/guides`:

- `docs/guides/README.md`
- `docs/guides/design-system-architecture.md`
- `docs/guides/theme-and-token-contract.md`
- `docs/guides/component-onboarding.md`

## Plain HTML Usage

Treat `@abc-def/styles/css` as the semantic entry point for plain HTML projects. In a Tailwind v4 stylesheet (for example `src/styles/app.css`) import the shared dependencies before writing markup:

```css
@import "tailwindcss";
@import "@abc-def/styles/css";
```

Tailwind v4 must process this stylesheet (via Vite, PostCSS, or another compatible build step) so the shared semantic classes are compiled. The `examples/html-vite` workspace demonstrates that build pipeline wiring.

## React And Vue Usage

For framework apps, follow the example workspaces. Both `examples/react-vite` and `examples/vue-vite` import `@abc-def/styles/css` from app CSS and register sources using Tailwind CSS v4 `@source` so Tailwind can see both app code and the local package sources.

## Contributing Guidelines

Please read the [contributing guidelines](./CONTRIBUTING.md).

## License

```
Copyright 2025 LY Corporation

LY Corporation licenses this file to you under the Apache License,
version 2.0 (the "License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at:

  https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
```
