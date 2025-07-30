import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF5E5B',
        primary: '#3B82F6',
        grayDark: '#1E293B',
        grayLight: '#F1F5F9',
        blackSoft: '#2E2E2E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
