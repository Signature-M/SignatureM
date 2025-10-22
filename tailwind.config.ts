import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sm: {
          bg: '#0E1A1F',
          text: '#EAEAEA',
          subtext: '#B0BEC5',
          primary: '#00A8A8',
          accent: '#1B4965',
          highlight: '#F9A826',
          surface: '#14222B'
        }
      },
      backgroundImage: {
        'sm-gradient': 'linear-gradient(160deg,#0E1A1F 0%,#14222B 100%)',
        'sm-section': 'linear-gradient(180deg,#14222B 0%,#0E1A1F 100%)'
      }
    }
  },
  plugins: []
} satisfies Config
