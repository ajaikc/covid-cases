/** @type {import('next').NextConfig} */
const nextConfig = {};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Enables Next.js to export the site to static HTML
  basePath: isProd ? '/<covid-cases>' : '', // Set the base path for GitHub Pages
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
};
export default nextConfig;
