/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: 't/p/w500',
      },
    ],
    domains: ['image.tmdb.org', 'media.themoviedb.org'],
  },
};

module.exports = nextConfig;