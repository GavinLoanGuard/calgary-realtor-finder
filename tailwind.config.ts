import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B2B4B',
        background: '#FAF8F5',
        accent: '#C9963E',
        charcoal: '#2D2D2D',
        'primary-light': '#2A3F6F',
        'accent-light': '#E8B86D',
      },
    },
  },
  plugins: [],
};

export default config;
