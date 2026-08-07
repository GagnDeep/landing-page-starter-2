import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
  globalIgnores([
    "**/node_modules/**",
    "**/.next/**",
    "**/.next-dev/**",
    "**/.next-prod/**",
    "**/out/**",
    "**/build/**",
    "next-env.d.ts",
    // Agent tooling, not application source.
    "**/.agents/**",
    "**/.agent/**",
    "**/.claude/**",
  ]),
  ...nextVitals,
  ...nextTs,
  {
    // components/ui/** is vendored verbatim from the shadcn registry. We do not
    // hand-patch upstream files to satisfy lint — divergence there costs more
    // than it buys, and `shadcn add --overwrite` would revert it anyway.
    files: ["components/ui/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
])

export default eslintConfig
