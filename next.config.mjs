const isGitHubPages = process.env.NODE_ENV === 'production';
const repo = 'Portfolio'; // replace with your actual repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',  // Include this line for assets
  trailingSlash: true,
};

export default nextConfig;
// If you want to use the `next build` command, you can add the following line

