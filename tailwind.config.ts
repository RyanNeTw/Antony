import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          purple: '#9D3A7C',
          blue: '#252A4F',
          lightblue:'#64B2E5'
      },
      typography: {
        title: {
          DEFAULT: 'text-4xl mb-10 tracking-wider',
        },
        subtitle: {
          DEFAULT: 'text-purple mb-4 text-3xl',
        },
        body: {
          DEFAULT: 'text-base text-gray-600',
        },
      }
    },
  },
  plugins: [],
} satisfies Config
