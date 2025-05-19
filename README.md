# ABC DEF (ABC Studio's Definitely Elements Foundation)

ABC DEF is an efficient design system using a three-tier token structure and Headless UI to create web components with consistent design and flexible customization.

## Tech Stack

- Monorepo: [Turborepo](https://turbo.build/)
- CSS: [Tailwindcss](https://tailwindcss.com/)
- React: [Shadcn](https://ui.shadcn.com/)
- Vue: TBD

## Project Structure

- `/packages`: Core component libraries
  - `/react`: React component library
  - `/tailwindcss`: Tailwind CSS configuration and utilities
- `/storybooks`: Component documentation and examples
  - `/main-storybook`: Primary Storybook documentation
  - `/react-storybook`: React-specific component examples
  - `/vue-storybook`: Vue component examples
  - `/html-storybook`: HTML/CSS component examples
- `/examples`: Implementation examples
  - `/nextjs`: Next.js example project
- `/docs`: Additional documentation
  - `/html`: HTML documentation
  - `/react`: React documentation
- `/tooling`: Development and build tools
  - `/eslint`: ESLint configuration
  - `/prettier`: Prettier configuration
  - `/typescript`: TypeScript configuration
  - `/stylelint`: StyleLint configuration
  - `/github`: GitHub workflows and templates
  - `/eslint-plugin-header`: Custom ESLint plugin for file headers
- `/scripts`: Build and maintenance scripts

## Documentation

Visit [Storybook](https://line.github.io/abc-def) to view the documentation.

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
