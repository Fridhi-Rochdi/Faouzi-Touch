/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static export if needed
  // output: 'export',
};

export default nextConfig;
