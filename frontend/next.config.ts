import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  images: {
    domains: ['images.example.com'],
  },
  swcMinify: true,
  poweredByHeader: false,
};

export default nextConfig;
