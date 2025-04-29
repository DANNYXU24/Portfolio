const isGitHubPages = process.env.NODE_ENV === 'production';
const repo = '<portfolio>'; // replace with your actual repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${portfolio}` : '',
  trailingSlash: true,
};

export default nextConfig;
// This is a Next.js configuration file that sets up the project for deployment on GitHub Pages.

