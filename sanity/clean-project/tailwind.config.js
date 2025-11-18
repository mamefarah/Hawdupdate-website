/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './sanity.config.ts',
    './schemas/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
