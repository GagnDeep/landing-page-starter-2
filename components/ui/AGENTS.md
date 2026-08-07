# components/ui — frozen

Every file in this directory is vendored verbatim from the shadcn registry
(`radix-maia` style, neutral base, hugeicons). **Do not hand-edit any of them.**

Two reasons: `shadcn add --overwrite` silently reverts local edits, and a
diverged primitive breaks every component built on top of it.

## Need a component that isn't here?

```bash
pnpm dlx shadcn@latest add <name>
```

## Need to change how a primitive looks?

In order of preference:

1. Adjust the token in `@theme` in `app/globals.css` — that is what these
   primitives read.
2. Pass `className` at the call site; `cn()` inside each primitive merges it.
3. Wrap it in your own component under `components/`.

Editing the file here is not on the list.

## Need to change how a primitive behaves?

Wrap it. `components/<name>.tsx` composing a `ui/` primitive is the pattern —
see how `Card`, `Dialog` and `Sidebar` are meant to be consumed.

## Lint

`react-hooks/set-state-in-effect` is off in this directory only. It fires on
upstream patterns we deliberately do not diverge from. That exemption does not
extend to code you write anywhere else.
