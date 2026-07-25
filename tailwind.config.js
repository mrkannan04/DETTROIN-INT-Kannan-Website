/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-accent-section': 'var(--bg-accent-section)',
        'navy-deep': 'var(--navy-deep)',
        'navy-muted': 'var(--navy-muted)',
        'gold-accent': 'var(--gold-accent)',
        'emerald-accent': 'var(--emerald-accent)',
        'text-body': 'var(--text-body)',
        'border-hairline': 'var(--border-hairline)',
        kis: {
          navy: {
            DEFAULT: 'var(--navy-deep)',
            dark: 'var(--navy-deep)',
            darker: '#091A27',
            light: 'var(--navy-muted)',
            text: 'var(--text-body)',
            hover: 'var(--navy-deep)'
          },
          gold: {
            DEFAULT: 'var(--gold-accent)',
            hover: '#A37F3D',
            light: '#CBB078',
            glow: 'var(--gold-accent)'
          },
          emerald: {
            DEFAULT: 'var(--emerald-accent)',
            hover: '#2E5546',
            light: '#4C826C'
          },
          bg: {
            DEFAULT: 'var(--bg-primary)',
            surface: 'var(--bg-secondary)',
            light: 'var(--bg-accent-section)'
          },
          border: 'var(--border-hairline)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        dyslexic: ['Lexend', 'sans-serif']
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'nav': '0 2px 15px rgba(14, 42, 63, 0.08)',
        'gold': '0 4px 20px rgba(184, 147, 77, 0.30)',
        'emerald': '0 4px 20px rgba(58, 107, 88, 0.30)',
        'glass': '0 8px 24px rgba(14, 42, 63, 0.08)'
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'marquee': 'marquee 55s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}
