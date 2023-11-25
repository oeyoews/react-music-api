/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['NeteaseCloudMusicApi'],
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'production' && true,
  },
};

module.exports = nextConfig;
