/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "headless-training.test",
        },
      ],
    },
  };
  
  module.exports = nextConfig;