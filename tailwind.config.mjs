/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        surface: '#f6f1ee',
        foreground: '#121212',
        muted: '#5d5b59',
        accent: '#d71d2a',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(18, 18, 18, 0.08)',
      },
    },
  },
  plugins: [],
};
