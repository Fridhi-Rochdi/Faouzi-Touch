import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-tajawal)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd0',
          300: '#d9c9b0',
          400: '#c5ad8a',
          500: '#b08f68',
          600: '#9a7855',
          700: '#7f6147',
          800: '#69513d',
          900: '#584535',
        },
        accent: {
          50: '#fdfaf5',
          100: '#f9f0e3',
          200: '#f2ddc2',
          300: '#e8c599',
          400: '#dda667',
          500: '#d18b45',
          600: '#c07239',
          700: '#a05831',
          800: '#81462e',
          900: '#6a3b28',
        },
        elegant: {
          cream: '#FAF8F5',
          sand: '#E8DFD0',
          gold: '#C5AD8A',
          bronze: '#9A7855',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
