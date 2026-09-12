/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stadium: {
          darkest: '#05070a',
          dark: '#080c12',
          card: '#0e1520',
          cardHover: '#141d2c',
          border: '#1c2738',
          borderGlow: '#2b3d56',
          gold: '#fbbf24',
          goldLight: '#fde047',
          goldDark: '#d97706',
          turf: '#10b981',
          turfDark: '#047857',
          indiaBlue: '#003d80',
          indiaSaffron: '#ff9933',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
        sports: ['Oswald', 'Outfit', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'floodlight': '0 0 120px 30px rgba(251, 191, 36, 0.12)',
        'floodlight-blue': '0 0 120px 30px rgba(0, 89, 178, 0.15)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'card-glow-active': '0 15px 35px -10px rgba(0, 0, 0, 0.9), 0 0 15px 1px rgba(56, 189, 248, 0.25)',
        'gold-pill': '0 4px 20px -2px rgba(251, 191, 36, 0.4)',
        'photo-frame': '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 20px 2px rgba(251, 191, 36, 0.15)',
      },
    },
  },
  plugins: [],
}
