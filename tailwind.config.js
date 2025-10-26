/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#0A1630',
        backgroundSecondary: '#111B34',
        accentGold: '#C6A756',
        textPrimary: '#FFFFFF',
        textDim: '#9CA3AF',
        borderSoft: 'rgba(198,167,86,0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2rem, 3vw, 3.5rem)',
      },
      maxWidth: {
        '28ch': '28ch',
        'content': '1200px',
      },
    },
  },
  plugins: [],
}