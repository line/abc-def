# Public API

ABC Def 2.x follows SemVer for the documented public surface of the three published packages.

## Protected Surface

- Package names and public subpath exports:
  - `@line/abc-def-react/*`
  - `@line/abc-def-vue/*`
  - `@line/abc-def-styles/css`
- Component imports from the framework package roots, such as `@line/abc-def-react` or `@line/abc-def-vue`, are intentionally unsupported.
- React and Vue component props, emitted events, exported types, and documented composition behavior.
- CSS entry points, documented semantic selectors, documented utility selectors, and documented token names.
- Dark-mode activation through the `.dark` selector.

## Not Protected

- Files outside package `exports`.
- Example app internals.
- Internal tooling packages under `tooling/*`.
- Generated or source file paths unless they are also package exports.

## Change Policy

- Patch releases fix bugs without changing public behavior.
- Minor releases add APIs or selectors in a backward-compatible way.
- Major releases may remove or change documented APIs, selectors, tokens, or package entry points.
