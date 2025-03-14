import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
