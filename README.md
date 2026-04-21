# ABC Def (ABC Studio's Definitive Elements Foundation)

ABC Def is a reset design system monorepo shell for building core UI packages and example consumers.

## Packages

- `packages/styles`: shared tokens, base styles, and semantic plain HTML component classes
- `packages/react`: React components
- `packages/vue`: Vue components

## Examples

- `examples/react-vite`: React workspace consumer
- `examples/html-vite`: plain HTML workspace consumer that uses the shared stylesheet

## Plain HTML Usage

Plain HTML projects treat `@abc-def/styles/css` as the semantic entry point. Import it after `tailwindcss` declarations so `examples/html-vite` becomes a working reference for the minimal consumer.

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
