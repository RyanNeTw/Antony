import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true, // Optionnel, améliore le comportement pour le rechargement
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ROLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY,
  },
}

module.exports = nextConfig
