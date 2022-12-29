/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fakestoreapi.com",
      "picsum.photos",
      "images.unsplash.com",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
