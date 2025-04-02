/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/TIVisionOSS.github.io', // Replace 'repository-name' with your GitHub repository name
  assetPrefix: '/TIVisionOSS.github.io', // Replace 'repository-name' with your GitHub repository name
};

module.exports = nextConfig;
