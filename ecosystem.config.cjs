// PM2 process definitions for the web app (production only).
//
//   pnpm run pm2:start   -> build, then start the production server
//   pnpm run pm2:stop    -> stop it
//
// Dev is NOT managed by PM2 — run it directly with `pnpm run dev`.
// Prod uses a non-trivial port and a separate build folder (.next-prod, see
// next.config.mjs) so it never clashes with a running dev server.

const PROD_PORT = 7822

// Invoke the Next.js binary directly so we don't depend on a package-manager
// wrapper process under PM2.
const NEXT_BIN = "./node_modules/next/dist/bin/next"

module.exports = {
  apps: [
    {
      name: "web-prod",
      script: NEXT_BIN,
      args: `start -p ${PROD_PORT}`,
      cwd: __dirname,
      interpreter: "node",
      watch: false,
      autorestart: true,
      max_restarts: 10,
      // Run multiple instances in cluster mode for production resilience.
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: String(PROD_PORT),
      },
      out_file: "./logs/prod-out.log",
      error_file: "./logs/prod-error.log",
      time: true,
    },
  ],
}
