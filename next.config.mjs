/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next-prod',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
