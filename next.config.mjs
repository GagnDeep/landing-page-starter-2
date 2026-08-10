/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production"
const nextConfig = {
  output: "export",
  distDir: isDev ? ".next-dev" : "out",
  trailingSlash: false,
}
export default nextConfig
