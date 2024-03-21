/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-cover": "url('/prueba.webp') ",
        "anime-cover": "url('/anime.webp')",
        "anime-cover-2": "url('/img.webp')",
        "anime-cover-3": "url('/arch.webp')",
        "wallpaper-1": "url('/wallpapers/main.jpg')",
        // "wallpaper-2": "url('/wallpapers/spacial.jpg')",
        "wallpaper-crypto": "url('/wallpapers/crypto.webp')",
        "wallpaper-ins": "url('/wallpapers/ins.webp')",
        "wallpaper-steg": "url('/wallpapers/steg.webp')",
        "wallpaper-hash": "url('/wallpapers/hash.webp')",
      },
      dropShadow: {
        "bitLight" : '0 10px 10px rgba(125, 70, 255, 0.25)',
        "light": [
          '0 12.5px 12.5px rgba(125, 70, 255, 0.5)',
          '0 10px 10px rgba(125, 70, 255, 0.25)',
        ],
        "bitDark" : '0 10px 10px rgba(100, 255, 255, 0.25)',
        "dark" : [
          '0 10px 10px rgba(100, 255, 255, 0.25)',
          "0 12.5px 12.5px rgba(100, 255, 255, 0.5)",
        ],
        "primaryLight": "0 10px 10px rgba(245, 166, 13, 0.5)",
        "primaryFullLight": "0 12.5px 12.5px rgba(100, 116, 139, 1)",
        "secondaryLight": "0 10px 10px rgba(156, 163, 175, 0.5)",
        "secondaryFullLight": [
          "0 -12.5px 12.5px rgba(79, 27, 17, 1)",
          "0 12.5px 12.5px rgba(245, 166, 13, 0.5)",
      ],
      },
      colors: {
        "primary" : {
          1: "#0f172a",
          2: "#94a3b8",
          3: "#020617",
        },
        "secondary" : {
          1: "#020617",
          2: "#64748b",
        },
        "bg": "#000",
      }
    },
  },
  plugins: [animations],
})
