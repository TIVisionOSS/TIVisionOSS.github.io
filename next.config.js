/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/TIVisionOSS.github.io", // Change this to your GitHub repo name
  images: {
    unoptimized: true, // Next.js image optimization does not work with GitHub Pages
  },
};

module.exports = nextConfig;
