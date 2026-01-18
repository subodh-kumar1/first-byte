/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: "/first-byte",
  assetPrefix: "/first-byte/"

};

export default nextConfig;
