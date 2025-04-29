const isGitHubPages = process.env.NODE_ENV === 'production';
const repo = '<your-repo-name>'; // replace with your actual repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repo}` : '',
  trailingSlash: true,
};

export default nextConfig;
// This is a Next.js configuration file that sets up the project for deployment on GitHub Pages.

