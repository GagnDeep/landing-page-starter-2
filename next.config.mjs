/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production"
const nextConfig = {
  output: "export",
  distDir: isDev ? ".next-dev" : ".next-prod",
trailingSlash: true,
}
export default nextConfig
