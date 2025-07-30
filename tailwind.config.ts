import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // biru
          dark: '#1e40af',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#10b981', // hijau
          dark: '#047857',
        },
        accent: '#f59e0b', // kuning
      },
    },
  },
  plugins: [],
};

export default config;
