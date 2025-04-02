/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/TIVisionOSS.github.io",
  assetPrefix: "/TIVisionOSS.github.io/",
  images: {
    unoptimized: true, // Next.js image optimization does not work with GitHub Pages
  },
};

module.exports = nextConfig;
