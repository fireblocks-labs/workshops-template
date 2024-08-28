import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#184FDB',
          50: '#ebf2ff',
          100: '#c2d4ff',
          200: '#9ab6ff',
          300: '#7297ff',
          400: '#4974e1',
          500: '#215aff',
          600: '#0044bf',
          700: '#00349a',
          800: '#002676',
          900: '#001951',
        },
        secondary: '#2A2D34',
        accent: '#F7B801',
        lightGray: '#F4F5F7',
        darkGray: '#1F2023',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};

export default config;
