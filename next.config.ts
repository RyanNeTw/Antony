import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    scrollRestoration: true, // Optionnel, améliore le comportement pour le rechargement
  },
}

module.exports = nextConfig
