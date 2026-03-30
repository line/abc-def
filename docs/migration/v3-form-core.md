# Form Core Migration Guide: v2 to v3 (`@line/abc-def-react`)

This guide covers the breaking API changes when migrating from v2 to v3 in the Form Core shadcn/Base UI migration.

The mapping table below targets migrated Form Core component props with strict variant/size contracts (`sm`/`md`/`lg`, `default`/`secondary`/`outline`/`destructive`).

Some legacy exported types may still exist temporarily during transition, but they are not part of the v3 Form Core component prop contract.

## Scope

- `Button`
- `Select`
- `TextInput`
- `Textarea`
- Selection controls: `Checkbox`, `RadioGroup`/`RadioItem`, `Switch`
- Public export surface changes

## API Migration Table

| Area | Old API (v2 and earlier) | New API (v3 / Form Core migration) |
| --- | --- | --- |
| Button variant | `variant="primary"` | `variant="default"` |
| Button variant | `variant="ghost"` | removed; use `variant="outline"` or custom `className` |
| Button size | `size="small" \| "medium" \| "large"` | `size="sm" \| "md" \| "lg"` |
| Button radius | `radius="small" \| "medium" \| "large"` | removed (token-driven styling) |
| Button invalid state | not supported | `invalid?: boolean` |
| TextInput size | `size="small" \| "medium" \| "large"` | `size="sm" \| "md" \| "lg"` |
| TextInput radius | `radius="small" \| "medium" \| "large"` | removed (token-driven styling) |
| TextInput invalid state | not supported | `invalid?: boolean` |
| Textarea props | plain `<textarea>` props only | adds `size?: "sm" \| "md" \| "lg"` and `invalid?: boolean` |
| Select primitive | Radix Select (`@radix-ui/react-select`) | Base UI Select (`@base-ui/react/select`) |
| Select size | `size="small" \| "medium" \| "large"` | `size="sm" \| "md" \| "lg"` |
| Select radius | `radius="small" \| "medium" \| "large"` | removed |
| Select invalid state | not supported | `invalid?: boolean` on `Select` / `SelectTrigger` |
| Checkbox invalid state | not supported | `invalid?: boolean` |
| RadioGroup invalid state | not supported | `invalid?: boolean` on `RadioGroup` and `RadioItem` |
| Switch invalid state | not supported | `invalid?: boolean` |

## Export Surface Migration

| Area | Old | New |
| --- | --- | --- |
| Component exports | `use-theme` was exported from `@line/abc-def-react` | `use-theme` export removed from public component index |
| Package entrypoint | legacy/alias-first usage in docs snippets | major-only API via `@line/abc-def-react` root exports (`version: 3.0.0`) |

## Quick Before/After

```tsx
// Before
<Button variant="primary" size="medium" radius="medium" />
<TextInput size="large" radius="small" />
<Select size="small" radius="large" />
<Checkbox />
<RadioGroup />
<Switch />

// After
<Button variant="default" size="md" invalid />
<TextInput size="lg" invalid />
<Select size="sm" invalid>
  <SelectTrigger />
</Select>
<Checkbox invalid />
<RadioGroup invalid />
<Switch invalid />
```
