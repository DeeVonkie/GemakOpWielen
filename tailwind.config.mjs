/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#dce7ff',
          200: '#c1d3ff',
          300: '#96b5ff',
          400: '#668cff',
          500: '#3e63ff',
          600: '#1640ff',
          700: '#16409A',
          800: '#0f2875',
          900: '#0c1d54',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        title: ['Nekst', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.focus-ring': {
          '@apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-0': {},
          'outline': 'none !important',
          '-webkit-tap-highlight-color': 'transparent',
        },
      });
    },
  ],
}