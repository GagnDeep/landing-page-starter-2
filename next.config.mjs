/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production"

const nextConfig = {
  distDir: isDev ? ".next-dev" : ".next-prod",
  output: "export"
}

export default nextConfig
