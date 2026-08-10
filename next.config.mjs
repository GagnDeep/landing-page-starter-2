/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production"

const nextConfig = {
  distDir: isDev ? ".next-dev" : "out",
  output: "export",
  trailingSlash: true,
}

export default nextConfig
