/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/first-byte",
  assetPrefix: "/first-byte/"

};

export default nextConfig;
