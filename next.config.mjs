/** @type {import('next').NextConfig} */

// Keep dev and production build output in separate folders so running the dev
// server never clobbers a production build (and vice versa). `next dev` runs
// with NODE_ENV=development; `next build`/`next start` run as production.
const isDev = process.env.NODE_ENV !== "production"

const nextConfig = {
  distDir: isDev ? ".next-dev" : ".next-prod",
  output: "export",
}

export default nextConfig
