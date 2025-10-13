import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.joinduro.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  reactStrictMode: true,
  compress: true,
  eslint: {
    // Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // Exclude Storybook files from the build
    config.module.rules.push({
      test: /\.stories\.(ts|tsx|js|jsx)$/,
      use: 'null-loader',
    });
    return config;
  },
};

export default nextConfig;
