# Institute of DNA

A consumer DNA test comparison focusing heavily on privacy, ownership, subpoena risks, and chain of custody.

## Deploy

This project is fully static and configured for **Cloudflare Pages**.

### Cloudflare Pages Setup
1. Connect your repository to Cloudflare Pages.
2. Set the build command: `pnpm run build`
3. Set the build output directory: `out`
4. Node version should be `20.x` or higher (configured via `.nvmrc` or Cloudflare Pages env var `NODE_VERSION`).

## Compliance Check
This repository enforces strict medical and health claims verification via its CI script (`scripts/check-seo.mjs`). Banned phrases will cause the build to fail.
