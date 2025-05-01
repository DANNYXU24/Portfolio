const nextConfig = {
  output: 'standalone',  // Use standalone instead of export when deploying to Vercel (if you're using server-side features)
  trailingSlash: true,    // Important for static routing to Vercel
};

export default nextConfig;
