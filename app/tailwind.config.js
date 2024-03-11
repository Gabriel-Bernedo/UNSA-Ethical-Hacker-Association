/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-cover": "url('/prueba.jpeg') ",
        "anime-cover": "url('/anime.jpg')",
        "anime-cover-2": "url('/img.webp')",
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
        

      }
    },
  },
  plugins: [],
};
