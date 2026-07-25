/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kis: {
          navy: {
            DEFAULT: '#0B2545',
            dark: '#0B2545',
            darker: '#071A32',
            light: '#1B3B6F',
            text: '#3D5170',
            hover: '#081D37'
          },
          gold: {
            DEFAULT: '#F5A623',
            hover: '#E09214',
            light: '#FFB800',
            glow: '#F5A623'
          },
          accent: {
            red: '#E63946',
            green: '#2EE6A6',
            teal: '#2EE6A6',
            violet: '#8B5CF6'
          },
          bg: {
            DEFAULT: '#FFFFFF',
            surface: '#F7F9FC',
            light: '#F7F9FC'
          },
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif']
      },
      boxShadow: {
        'card': '0 4px 20px rgba(11, 37, 69, 0.06)',
        'card-hover': '0 12px 32px rgba(11, 37, 69, 0.12)',
        'nav': '0 2px 15px rgba(11, 37, 69, 0.08)',
        'gold': '0 4px 20px rgba(245, 166, 35, 0.35)',
        'teal': '0 4px 20px rgba(46, 230, 166, 0.35)',
        'glass': '0 8px 24px rgba(11, 37, 69, 0.08)'
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


